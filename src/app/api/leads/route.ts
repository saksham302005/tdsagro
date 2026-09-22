import { NextResponse } from 'next/server';

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  city: string;
  divisionInterest: string;
  message?: string;
}

const DEFAULT_GOOGLE_SHEET_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwNqJ4_U6C5_ukFvfYi8m9WoQbqRKnsjrwXq9mKAISPTwWFnYXYkJpdsukVOMDybM-h/exec';
const DEFAULT_GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe-fNVpJqKT8SbOrutv3UzbNbomAEwEFh-BmPaFdkE6XE5dVQ/formResponse';
const DEFAULT_GOOGLE_FORM_FIELD_MAP = {
  name: 'entry.2005620554',
  email: 'entry.1045781291',
  city: 'entry.1065046570',
  phone: 'entry.1166974658',
  message: 'entry.839337160',
};

export async function POST(request: Request) {
  const lead = (await request.json()) as Partial<LeadPayload>;

  if (!lead.name || !lead.phone || !lead.city || !lead.divisionInterest) {
    return NextResponse.json({ error: 'Missing required lead fields' }, { status: 400 });
  }

  const payload = {
    ...lead,
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    source: 'tdsagro.in contact form',
    receivedAt: new Date().toISOString(),
  };
  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.LEAD_WEBHOOK_URL || DEFAULT_GOOGLE_SHEET_WEBHOOK_URL;
  const googleFormActionUrl = process.env.GOOGLE_FORM_ACTION_URL || DEFAULT_GOOGLE_FORM_ACTION_URL;
  const googleFormFieldMap = process.env.GOOGLE_FORM_FIELD_MAP;
  let googleFormFields: Record<string, string> = DEFAULT_GOOGLE_FORM_FIELD_MAP;

  if (googleFormFieldMap) {
    try {
      googleFormFields = JSON.parse(googleFormFieldMap) as Record<string, string>;
    } catch {
      return NextResponse.json({ error: 'Google Form field mapping is invalid' }, { status: 503 });
    }
  }

  try {
    let googleFormCaptured = false;

    // 1. Google Apps Script / Webhook Direct Google Sheet Capture
    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          redirect: 'follow',
        });
        if (webhookResponse.ok) {
          googleFormCaptured = true;
        } else {
          const webhookBody = await webhookResponse.text();
          console.error('Lead webhook response:', webhookResponse.status, webhookBody);
        }
      } catch (error) {
        console.error('Lead webhook error:', error);
      }
    }

    // 2. Google Form Submission
    if (googleFormActionUrl && googleFormFields) {
      try {
        const googleFormData = new URLSearchParams();
        for (const [leadField, entryId] of Object.entries(googleFormFields)) {
          const value = leadField === 'message'
            ? `Division: ${lead.divisionInterest}${lead.message ? `\n${lead.message}` : ''}`
            : lead[leadField as keyof LeadPayload];
          if (entryId && value !== undefined) googleFormData.append(entryId, String(value));
        }

        const googleFormResponse = await fetch(googleFormActionUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: googleFormData.toString(),
        });
        if (googleFormResponse.ok) googleFormCaptured = true;
      } catch (gfErr) {
        console.warn('Google Form direct POST notice:', gfErr);
      }
    }

    if (process.env.RESEND_API_KEY && process.env.LEAD_NOTIFICATION_EMAIL) {
      const emailResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.RESEND_FROM_EMAIL || 'TDS Agro Leads <onboarding@resend.dev>',
          to: [lead.email || process.env.LEAD_NOTIFICATION_EMAIL],
          cc: lead.email ? [process.env.LEAD_NOTIFICATION_EMAIL] : undefined,
          subject: `New ${lead.divisionInterest} inquiry from ${lead.name}`,
          text: lead.email
            ? `Thank you for contacting TDS Agro. We received your ${lead.divisionInterest} inquiry and will contact you shortly.\n\nLead details:\n${JSON.stringify(payload, null, 2)}`
            : JSON.stringify(payload, null, 2),
        }),
      });
      if (!emailResponse.ok) throw new Error('Email notification failed');
    }

    return NextResponse.json({ captured: true, notified: Boolean(process.env.RESEND_API_KEY) });
  } catch (error) {
    console.error('Lead integration error:', error);
    return NextResponse.json({ error: 'Unable to process lead' }, { status: 502 });
  }
}