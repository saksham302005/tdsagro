/**
 * Google Form & Google Sheet Integration Configuration
 * Form: https://forms.gle/TDtYg61vxViHSVw48
 * Google Sheet Webhook: https://script.google.com/macros/s/AKfycbwNqJ4_U6C5_ukFvfYi8m9WoQbqRKnsjrwXq9mKAISPTwWFnYXYkJpdsukVOMDybM-h/exec
 */

export const GOOGLE_FORM_CONFIG = {
  formUrl: 'https://forms.gle/TDtYg61vxViHSVw48',
  formResponseUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe-fNVpJqKT8SbOrutv3UzbNbomAEwEFh-BmPaFdkE6XE5dVQ/formResponse',
  embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe-fNVpJqKT8SbOrutv3UzbNbomAEwEFh-BmPaFdkE6XE5dVQ/viewform?embedded=true',
  googleSheetScriptUrl: 'https://script.google.com/macros/s/AKfycbwNqJ4_U6C5_ukFvfYi8m9WoQbqRKnsjrwXq9mKAISPTwWFnYXYkJpdsukVOMDybM-h/exec',
  fields: {
    name: 'entry.2005620554',
    email: 'entry.1045781291',
    address: 'entry.1065046570',
    phone: 'entry.1166974658',
    comments: 'entry.839337160',
  },
};

export interface LeadSubmissionData {
  name: string;
  phone: string;
  email?: string;
  city: string;
  divisionInterest?: string;
  message?: string;
}

/**
 * Submits contact lead directly to Google Sheet Web App and Google Form.
 */
export async function submitLeadToGoogleForm(data: LeadSubmissionData): Promise<boolean> {
  if (typeof window === 'undefined') return false;

  const commentsText = [
    data.divisionInterest ? `Division: ${data.divisionInterest}` : '',
    data.message ? `Requirement: ${data.message}` : '',
  ].filter(Boolean).join('\n');

  // 1. Direct Webhook submission to Google Apps Script (Connected to Sheet)
  try {
    fetch(GOOGLE_FORM_CONFIG.googleSheetScriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: data.name,
        phone: data.phone,
        email: data.email || '',
        city: data.city,
        divisionInterest: data.divisionInterest || 'General',
        message: commentsText,
      }),
      mode: 'no-cors',
    }).catch((err) => console.warn('Script fetch notice:', err));
  } catch (err) {
    console.warn('Apps script direct post notice:', err);
  }

  // 2. Google Form Submission (dual channel)
  const formEntries: Record<string, string> = {
    [GOOGLE_FORM_CONFIG.fields.name]: data.name,
    [GOOGLE_FORM_CONFIG.fields.phone]: data.phone,
    [GOOGLE_FORM_CONFIG.fields.email]: data.email || '',
    [GOOGLE_FORM_CONFIG.fields.address]: data.city,
    [GOOGLE_FORM_CONFIG.fields.comments]: commentsText,
  };

  try {
    const formData = new URLSearchParams();
    for (const [key, val] of Object.entries(formEntries)) {
      formData.append(key, val);
    }

    fetch(GOOGLE_FORM_CONFIG.formResponseUrl, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    }).catch(() => {});

    submitViaHiddenIframe(formEntries);
    return true;
  } catch (error) {
    console.warn('Google form direct submission notice:', error);
    return true;
  }
}

function submitViaHiddenIframe(entries: Record<string, string>) {
  if (typeof document === 'undefined') return;

  const iframeName = 'gform_hidden_sink_' + Date.now();
  let iframe = document.getElementById(iframeName) as HTMLIFrameElement | null;

  if (!iframe) {
    iframe = document.createElement('iframe');
    iframe.name = iframeName;
    iframe.id = iframeName;
    iframe.style.display = 'none';
    iframe.setAttribute('aria-hidden', 'true');
    document.body.appendChild(iframe);
  }

  const form = document.createElement('form');
  form.action = GOOGLE_FORM_CONFIG.formResponseUrl;
  form.method = 'POST';
  form.target = iframeName;
  form.style.display = 'none';

  for (const [key, value] of Object.entries(entries)) {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = key;
    input.value = value;
    form.appendChild(input);
  }

  document.body.appendChild(form);
  form.submit();

  setTimeout(() => {
    form.remove();
    iframe?.remove();
  }, 3000);
}
