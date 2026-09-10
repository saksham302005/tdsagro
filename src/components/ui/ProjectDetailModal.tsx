'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  MapPin,
  ShieldCheck,
  Zap,
  TrendingUp,
  Leaf,
  Clock,
  Cpu,
  Layers,
  Building,
  Activity,
  Award,
  CheckCircle2,
  Send,
  Phone,
  MessageSquare,
  ArrowRight,
  FileText,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import { ProjectItem } from '@/types';
import { COMPANY_INFO } from '@/data/company';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'specs' | 'apply'>('specs');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Fatehpur',
    propertyType: 'Residential',
    monthlyBill: '₹2,500 - ₹5,000',
    message: '',
  });

  // Reset tab & form state when opening a new project
  useEffect(() => {
    if (project) {
      setActiveTab('specs');
      setIsSubmitted(false);
      setIsSubmitting(false);
      setFormData((prev) => ({
        ...prev,
        propertyType:
          project.category === 'COMMERCIAL'
            ? 'Commercial'
            : project.category === 'ROOFTOP'
            ? 'Residential'
            : 'Residential',
        message: `I am interested in applying for a setup similar to ${project.title} (${project.capacity}).`,
      }));
    }
  }, [project]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const encodedWhatsAppMessage = encodeURIComponent(
    `Hello TDS Solar Team,\n\nI am interested in applying for the *${project.title}* setup (${project.capacity}).\n\nLocation: ${formData.city || 'Uttar Pradesh'}\nProperty Type: ${formData.propertyType}\n\nPlease provide quotation and rooftop feasibility details.`
  );
  const customWhatsAppUrl = `https://wa.me/${COMPANY_INFO.whatsapp.number}?text=${encodedWhatsAppMessage}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            {/* Header Visual Hero Banner */}
            <div className="relative h-64 sm:h-72 w-full bg-slate-950 shrink-0 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover opacity-85 scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:rotate-90 shadow-lg"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category & Status Pills */}
              <div className="absolute top-4 left-4 sm:left-6 flex flex-wrap items-center gap-2 z-10">
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-white/95 text-slate-900 shadow-sm backdrop-blur-md">
                  {project.category}
                </span>

                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-800 bg-white/95 px-3 py-1 rounded-full shadow-sm font-bold backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ONLINE & VERIFIED</span>
                </div>
              </div>

              {/* Title & Location Banner */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{project.location}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-300 font-normal">{project.type}</span>
                </div>

                <h2
                  id="project-modal-title"
                  className="text-xl sm:text-2xl lg:text-3xl font-black font-display uppercase tracking-tight text-white"
                >
                  {project.title}
                </h2>

                <div className="mt-2 flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-slate-950 bg-amber-400 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                    {project.capacity}
                  </span>
                </div>
              </div>
            </div>

            {/* Telemetry Metrics Bar */}
            <div className="bg-slate-900 text-white px-4 sm:px-6 py-3 border-y border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">Annual Yield</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-slate-100">
                    {project.annualGeneration || 'High Output'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">Est. Savings</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-emerald-400">
                    {project.annualSavings || 'Max Tariff Offset'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">CO₂ Offset</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-slate-100">
                    {project.co2Offset || 'Zero Emission'}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-slate-400">ROI Payback</div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-amber-400">
                    {project.paybackPeriod || 'Under 3.5 Yrs'}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="flex border-b border-slate-200 bg-slate-50 px-4 sm:px-6 pt-2 shrink-0">
              <button
                onClick={() => setActiveTab('specs')}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all ${
                  activeTab === 'specs'
                    ? 'border-amber-500 text-slate-950 bg-white rounded-t-xl shadow-xs'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Cpu className="w-4 h-4 text-amber-500" />
                <span>System Specs & Blueprint</span>
              </button>

              <button
                onClick={() => setActiveTab('apply')}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-mono font-bold uppercase tracking-wider border-b-2 transition-all ${
                  activeTab === 'apply'
                    ? 'border-amber-500 text-slate-950 bg-white rounded-t-xl shadow-xs'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <FileText className="w-4 h-4 text-amber-500" />
                <span>Apply For This Setup</span>
                <span className="hidden sm:inline-block ml-1 text-[9px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded-full">
                  Fast Track
                </span>
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto flex-1 space-y-6">
              {activeTab === 'specs' ? (
                <div className="space-y-6">
                  {/* Detailed Description */}
                  <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Project Background & Scope</span>
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {project.detailedDescription || project.summary}
                    </p>
                    {project.recommendedFor && (
                      <div className="mt-3 pt-3 border-t border-slate-200/70 text-xs font-medium text-slate-600 flex items-center gap-1.5">
                        <span className="font-bold text-slate-900 font-mono uppercase text-[10px]">
                          Recommended For:
                        </span>
                        <span>{project.recommendedFor}</span>
                      </div>
                    )}
                  </div>

                  {/* Hardware & Engineering Specs Grid */}
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-amber-600" />
                      <span>Component Engineering Architecture</span>
                    </h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                      {/* PV Modules */}
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                          <Layers className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase font-bold text-slate-500">
                            Solar PV Modules
                          </span>
                          <p className="text-xs font-bold text-slate-900 mt-0.5">
                            {project.modules || 'Tier-1 Mono PERC Bifacial Modules (DCR Approved)'}
                          </p>
                        </div>
                      </div>

                      {/* Inverter Tech */}
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center shrink-0">
                          <Zap className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase font-bold text-slate-500">
                            Inverter & MPPT Architecture
                          </span>
                          <p className="text-xs font-bold text-slate-900 mt-0.5">
                            {project.inverter || 'Multi-MPPT High Efficiency Inverter with Surge Protection'}
                          </p>
                        </div>
                      </div>

                      {/* Mounting Structure */}
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-300 text-slate-700 flex items-center justify-center shrink-0">
                          <Building className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase font-bold text-slate-500">
                            Mounting & Civil Structure
                          </span>
                          <p className="text-xs font-bold text-slate-900 mt-0.5">
                            {project.structure || 'Hot-Dip Galvanized Iron Structural Frames (150 km/h wind rated)'}
                          </p>
                        </div>
                      </div>

                      {/* Telemetry */}
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
                          <Activity className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase font-bold text-slate-500">
                            IoT Telemetry & Monitoring
                          </span>
                          <p className="text-xs font-bold text-slate-900 mt-0.5">
                            {project.monitoring || 'TDS Solar OS 24x7 Cloud Gateway & Mobile App Sync'}
                          </p>
                        </div>
                      </div>

                      {/* Subsidy & Finance */}
                      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3 md:col-span-2">
                        <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono uppercase font-bold text-slate-500">
                            Subsidy & Tax Incentives
                          </span>
                          <p className="text-xs font-bold text-slate-900 mt-0.5">
                            {project.subsidyInfo || 'Standard PM Surya Ghar Direct Subsidy / Commercial Depreciation'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Highlights Checklist */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Key Engineering Deliverables</span>
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 text-xs text-slate-800 flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Bottom Action Bar */}
                  <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs font-mono text-slate-500 text-center sm:text-left">
                      Need a similar setup engineered for your rooftop?
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href={customWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Quote</span>
                      </a>

                      <button
                        onClick={() => setActiveTab('apply')}
                        className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all group"
                      >
                        <span>Apply For This Setup</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                /* Apply / Inquiry Form Tab */
                <div>
                  {isSubmitted ? (
                    <div className="py-10 text-center flex flex-col items-center">
                      <div className="w-16 h-16 rounded-3xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mb-4 shadow-sm">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>

                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md">
                        APPLICATION QUEUED
                      </span>

                      <h3 className="text-2xl font-black font-display uppercase tracking-tight text-slate-950 mt-2">
                        Application Received for {project.title}
                      </h3>

                      <p className="mt-3 text-slate-600 text-sm max-w-lg leading-relaxed">
                        Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our engineering assessment team in Fatehpur has logged your inquiry for the{' '}
                        <strong className="text-slate-900">{project.capacity}</strong> system. We will contact you at{' '}
                        <strong className="text-slate-900">{formData.phone}</strong> with a detailed rooftop feasibility and subsidy report within 2 hours.
                      </p>

                      <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left w-full max-w-md space-y-1.5">
                        <div className="font-bold text-slate-900 uppercase font-mono text-[10px] text-amber-800">
                          Direct Support & Site Feasibility Desk:
                        </div>
                        <div>
                          <strong>Phone:</strong> {COMPANY_INFO.formattedPhone}
                        </div>
                        <div>
                          <strong>Office:</strong> {COMPANY_INFO.address.full}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                        <a
                          href={customWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Direct WhatsApp Connect</span>
                        </a>

                        <button
                          onClick={() => {
                            setIsSubmitted(false);
                            onClose();
                          }}
                          className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-slate-800"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-mono uppercase font-bold text-amber-900 tracking-wider">
                            TARGET DEPLOYMENT SETUP
                          </span>
                          <h4 className="text-base font-bold text-slate-950 mt-0.5">
                            {project.title}
                          </h4>
                          <span className="text-xs font-mono text-slate-600">
                            {project.capacity} • {project.location}
                          </span>
                        </div>

                        <span className="text-[11px] font-mono font-bold bg-amber-500 text-slate-950 px-3 py-1 rounded-lg uppercase self-start sm:self-auto">
                          Zero Upfront Fee Audit
                        </span>
                      </div>

                      <p className="text-xs text-slate-600">
                        Fill in your details below to receive a customized site engineering blueprint, exact subsidy calculation, and installation quote for this setup.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Ramesh Kumar"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Contact Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. 07800010016"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Email Address (Optional)
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@example.com"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                            City / District *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            placeholder="e.g. Fatehpur, Kanpur, Prayagraj"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Property / Installation Type
                          </label>
                          <select
                            value={formData.propertyType}
                            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                          >
                            <option value="Residential">Residential House / Villa</option>
                            <option value="Commercial">Commercial / Retail / Office</option>
                            <option value="Industrial">Industrial Shed / Factory</option>
                            <option value="Agricultural">Agricultural / Agro-Cold Storage</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                            Approx Monthly Electricity Bill
                          </label>
                          <select
                            value={formData.monthlyBill}
                            onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500"
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
                        <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 mb-1">
                          Roof Specifications / Remarks
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="e.g. Flat RCC roof with approx 600 sq ft shadow-free area. Looking to claim PM Surya Ghar subsidy."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 resize-none"
                        />
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full sm:flex-1 py-3.5 bg-amber-500 hover:bg-amber-400 disabled:opacity-75 text-slate-950 font-bold font-mono tracking-widest text-xs uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                        >
                          <span>{isSubmitting ? 'Queueing Application...' : 'Submit Application for this Setup'}</span>
                          <Send className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <a
                          href={customWhatsAppUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto px-5 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold font-mono tracking-wider text-xs uppercase rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Apply via WhatsApp</span>
                        </a>
                      </div>

                      <p className="text-[10px] font-mono text-slate-500 text-center pt-1">
                        Verified data protection: Your contact details are solely used by TDS Solar engineers for your solar site survey.
                      </p>
                    </form>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
