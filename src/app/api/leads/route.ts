import { NextResponse } from 'next/server';

interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  city: string;
  divisionInterest: string;
  message?: string;
}

export async function POST(request: Request) {
  const lead = (await request.json()) as Partial<LeadPayload>;

  if (!lead.name || !lead.phone || !lead.city || !lead.divisionInterest) {
    return NextResponse.json({ error: 'Missing required lead fields' }, { status: 400 });
  }

  const payload = { ...lead, source: 'tdsagro.in contact form', receivedAt: new Date().toISOString() };
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const googleFormActionUrl = process.env.GOOGLE_FORM_ACTION_URL;
  const googleFormFieldMap = process.env.GOOGLE_FORM_FIELD_MAP;
  let googleFormFields: Record<string, string> | undefined;

  if (googleFormActionUrl && googleFormFieldMap) {
    try {
      googleFormFields = JSON.parse(googleFormFieldMap) as Record<string, string>;
    } catch {
      return NextResponse.json({ error: 'Google Form field mapping is invalid' }, { status: 503 });
    }
  }

  if (googleFormActionUrl && !googleFormFields) {
    return NextResponse.json({ error: 'Google Form field mapping is not configured' }, { status: 503 });
  }

  if (!webhookUrl && !googleFormActionUrl) {
    return NextResponse.json({ error: 'Lead capture is not configured' }, { status: 503 });
  }

  try {
    if (googleFormActionUrl && googleFormFields) {
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
      if (!googleFormResponse.ok) {
        console.error('Google Form rejected lead:', googleFormResponse.status);
        return NextResponse.json({ error: 'Google Form rejected the lead' }, { status: 502 });
      }
    }

    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!webhookResponse.ok) {
          const webhookBody = await webhookResponse.text();
          console.error('Lead webhook rejected request:', webhookResponse.status, webhookBody);
        }
      } catch (error) {
        console.error('Lead webhook error after Google Form capture:', error);
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