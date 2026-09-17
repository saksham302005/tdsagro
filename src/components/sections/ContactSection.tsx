'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Building,
  ShieldCheck,
  MessageSquare,
  Building2,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { COMPANY_INFO } from '@/data/company';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Fatehpur',
    divisionInterest: 'General',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error('Lead submission failed');

      setSubmitted(true);
    } catch {
      setSubmitError('We could not submit your inquiry right now. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white text-slate-900 relative os-grid-pattern overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <SectionHeading
                eyebrow="TDS AGRO • CORPORATE DESK"
                title="GET IN TOUCH."
                description="Connect with our corporate headquarters in Fatehpur for agricultural partnerships, global import/export tenders, solar EPC installations, and farm machinery inquiries."
                theme="light"
                align="left"
                className="mb-0"
              />
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5">
              {/* Location Card */}
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
                    Corporate Headquarters
                  </h4>
                  <p className="text-sm text-slate-700 font-medium mt-1 leading-relaxed">
                    {COMPANY_INFO.address.full}
                  </p>
                  <span className="text-[11px] font-mono text-slate-500 block mt-0.5">
                    {COMPANY_INFO.parentName}
                  </span>
                </div>
              </div>

              {/* Phone Card */}
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">
                    Corporate Helpline & Direct Desk
                  </h4>
                  <div className="mt-2 space-y-1.5">
                    {COMPANY_INFO.phoneLines.map((contact) => (
                      <a
                        key={contact.number}
                        href={`tel:${contact.number}`}
                        className="flex flex-wrap items-baseline gap-x-2 text-sm font-bold font-mono text-slate-950 hover:text-amber-600 transition-colors"
                      >
                        <span>{contact.formatted}</span>
                        <span className="text-[10px] font-normal text-slate-500">({contact.label})</span>
                      </a>
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 block mt-2">
                    Monday to Saturday • 9:30 AM to 6:30 PM
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 border border-amber-300 text-amber-700 flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800">Email Desks</h4>
                  <div className="mt-2 space-y-1">
                    {COMPANY_INFO.emailAddresses.map((contact) => (
                      <a
                        key={contact.address}
                        href={`mailto:${contact.address}`}
                        className="block text-sm font-mono text-slate-700 hover:text-amber-600 transition-colors"
                      >
                        {contact.address}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="p-5 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                    Instant WhatsApp Inquiries
                  </h4>
                  <a
                    href={COMPANY_INFO.whatsapp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-700 hover:text-emerald-900 transition-colors block mt-1 font-mono"
                  >
                    Click to Start WhatsApp Chat →
                  </a>
                  <span className="text-[11px] font-mono text-slate-500 block mt-0.5">
                    Direct communication with TDS Agro representatives
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.05)]">
              <div className="mb-6 pb-4 border-b border-slate-100">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-amber-800 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-md">
                  TDS AGRO INQUIRY DESK
                </span>
                <h3 className="text-2xl font-black font-display uppercase tracking-tight text-slate-950 mt-2">
                  Send a Message to TDS Agro
                </h3>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mb-4 shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-black text-slate-950 font-display uppercase">
                    Thank you, {form.name}!
                  </h4>
                  <p className="mt-2 text-slate-600 text-sm max-w-md">
                    Your inquiry regarding <strong className="text-slate-950">{form.divisionInterest}</strong> has been logged. A representative from TDS Agro will contact you at{' '}
                    <strong className="text-slate-950 font-bold">{form.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2 bg-amber-500 text-slate-950 text-xs font-mono uppercase font-bold tracking-wider rounded-xl hover:bg-amber-400 shadow-sm"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-name" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="lead-name"
                        name="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="e.g. Ramesh Singh"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-phone" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="lead-phone"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="e.g. 07800010016"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="lead-email" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="lead-email"
                        name="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="name@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div>
                      <label htmlFor="lead-city" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                        City / Region *
                      </label>
                      <input
                        type="text"
                        id="lead-city"
                        name="city"
                        required
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                        placeholder="e.g. Fatehpur, Kanpur, UP"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="lead-division" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Business Division of Interest *
                    </label>
                    <select
                      value={form.divisionInterest}
                      id="lead-division"
                      name="divisionInterest"
                      onChange={(e) => setForm({ ...form, divisionInterest: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 font-medium"
                    >
                      <option value="General">General TDS Agro Inquiry</option>
                      <option value="Agriculture">Agriculture & Farming Solutions</option>
                      <option value="Imports">Imports: Inverters, Lighting, Furniture & Electronics</option>
                      <option value="Exports">Exports: Agricultural Crops & Produce</option>
                      <option value="Solar">Solar Energy: PM Surya Ghar & EPC</option>
                      <option value="TDS Motors">TDS Motors: Tractors & Agricultural Machinery</option>
                      <option value="Directors/Governance">Board of Directors / Corporate Governance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="lead-message" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Message / Requirement Details
                    </label>
                    <textarea
                      rows={3}
                      id="lead-message"
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Please describe your specific requirements or inquiry."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold font-mono tracking-widest text-xs uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group"
                    >
                      <span>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</span>
                      <Send className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>

                  {submitError && <p role="alert" className="text-xs text-red-600 text-center">{submitError}</p>}

                  <p className="text-[10px] font-mono text-slate-500 text-center pt-2">
                    Your details are sent to our configured lead desk and are protected by our <a href="/privacy-policy" className="text-amber-700 underline">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
