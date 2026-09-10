'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Phone, Mail, MapPin, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCapacity?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultCapacity,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Fatehpur',
    propertyType: 'Residential',
    monthlyBill: '₹2,500 - ₹5,000',
    capacity: defaultCapacity || '3 kW (Recommended)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      // Keep state clear after celebration
    }, 4000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-lg"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-3xl bg-[#f8faf7] rounded-2xl shadow-[0_30px_90px_rgba(2,20,12,0.3)] border border-white/70 overflow-hidden z-10 my-8"
          >
            {/* Header banner */}
            <div className="relative bg-[#08261a] text-white px-6 sm:px-8 py-6 sm:py-7 flex items-center justify-between border-b border-emerald-300/15 overflow-hidden">
              <div className="absolute -right-12 -top-20 w-56 h-56 rounded-full border border-amber-300/15" />
              <div className="absolute right-10 -bottom-28 w-64 h-64 rounded-full border border-emerald-300/10" />
              <div className="relative">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-[#f2c45f] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  TDS Solar Energy <span className="text-white/30">•</span> Direct Consultation
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight text-white mt-2">
                  Request Solar Proposal
                </h3>
                <p className="text-xs text-emerald-100/65 mt-1.5">A quick technical review for your property and energy goals.</p>
              </div>
              <button
                onClick={onClose}
                className="relative p-2.5 rounded-xl text-emerald-100/60 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
              {isSubmitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-forest-950 font-display uppercase">
                    Consultation Request Received
                  </h4>
                  <p className="mt-3 text-charcoal-600 max-w-md text-sm leading-relaxed">
                    Thank you, <span className="font-semibold">{formData.name}</span>. Our technical engineer will review your power requirements and connect with you at{' '}
                    <span className="font-semibold text-forest-900">{formData.phone}</span>.
                  </p>

                  <div className="mt-6 p-4 rounded bg-forest-900/5 border border-forest-900/10 text-xs text-charcoal-600 text-left w-full max-w-md">
                    <div className="font-semibold text-forest-950 mb-1">Direct Help Desk:</div>
                    <div>Phone: {COMPANY_INFO.formattedPhone}</div>
                    <div>Office: {COMPANY_INFO.address.full}</div>
                  </div>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      onClose();
                    }}
                    className="mt-6 px-6 py-2.5 bg-forest-900 text-solar-cream text-xs uppercase tracking-wider font-semibold rounded hover:bg-forest-800 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-start gap-3 rounded-xl border border-emerald-900/10 bg-emerald-50/70 px-4 py-3.5">
                    <div className="mt-0.5 w-8 h-8 rounded-lg bg-white text-emerald-700 flex items-center justify-center shadow-sm shrink-0">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Share your property details for an accurate system sizing, PM Surya Ghar subsidy estimate, and site feasibility report.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-3.5 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-3 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:outline-none focus:border-emerald-600 focus:ring-4 focus:ring-emerald-600/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider text-charcoal-700 uppercase mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@domain.com"
                        className="w-full px-3.5 py-2.5 rounded bg-white border border-charcoal-300 text-sm text-forest-950 focus:outline-none focus:ring-2 focus:ring-forest-700"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider text-charcoal-700 uppercase mb-1">
                        City / District *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Fatehpur, Kanpur, Prayagraj"
                        className="w-full px-3.5 py-2.5 rounded bg-white border border-charcoal-300 text-sm text-forest-950 focus:outline-none focus:ring-2 focus:ring-forest-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider text-charcoal-700 uppercase mb-1">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                        className="w-full px-3.5 py-2.5 rounded bg-white border border-charcoal-300 text-sm text-forest-950 focus:outline-none focus:ring-2 focus:ring-forest-700"
                      >
                        <option value="Residential">Residential House / Villa</option>
                        <option value="Commercial">Commercial / Retail Outlet</option>
                        <option value="Industrial">Industrial Plant / Cold Storage</option>
                        <option value="Agricultural">Agricultural / Farm Setup</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-wider text-charcoal-700 uppercase mb-1">
                        Approx Monthly Bill
                      </label>
                      <select
                        value={formData.monthlyBill}
                        onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded bg-white border border-charcoal-300 text-sm text-forest-950 focus:outline-none focus:ring-2 focus:ring-forest-700"
                      >
                        <option value="Under ₹2,000">Under ₹2,000 / month</option>
                        <option value="₹2,500 - ₹5,000">₹2,500 – ₹5,000 / month</option>
                        <option value="₹5,000 - ₹10,000">₹5,000 – ₹10,000 / month</option>
                        <option value="₹10,000 - ₹25,000">₹10,000 – ₹25,000 / month</option>
                        <option value="Above ₹25,000">Above ₹25,000 (Commercial)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-charcoal-700 uppercase mb-1">
                      Target Capacity / Special Requirement
                    </label>
                    <input
                      type="text"
                      value={formData.capacity}
                      onChange={(e) => setFormData({ ...formData, capacity: e.target.value })}
                      placeholder="e.g. 3 kW On-Grid or 5 kW Hybrid"
                      className="w-full px-3.5 py-2.5 rounded bg-white border border-charcoal-300 text-sm text-forest-950 focus:outline-none focus:ring-2 focus:ring-forest-700"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-wider text-charcoal-700 uppercase mb-1">
                      Message / Roof Details (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Flat RCC roof with open sunlight, looking to claim PM Surya Ghar subsidy."
                      className="w-full px-3.5 py-2.5 rounded bg-white border border-charcoal-300 text-sm text-forest-950 focus:outline-none focus:ring-2 focus:ring-forest-700 resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-forest-900 hover:bg-forest-800 text-solar-cream font-semibold tracking-widest text-xs uppercase rounded transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <span>Submit Consultation Request</span>
                      <Send className="w-4 h-4 text-solar-gold" />
                    </button>
                  </div>

                  <p className="text-[11px] text-charcoal-500 text-center mt-3">
                    Verified Privacy: Your information is strictly used for engineering evaluation by TDS Solar Energy.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
