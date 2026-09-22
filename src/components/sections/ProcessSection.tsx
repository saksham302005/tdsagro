'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquareText,
  Compass,
  Cpu,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PROCESS_STEPS } from '@/data/process';

const iconMap: Record<string, any> = {
  MessageSquareText,
  Compass,
  Cpu,
  Wrench,
  ShieldCheck,
};

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FAFBF9] text-slate-900 relative overflow-hidden os-grid-pattern border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TDS SOLAR OS • EXECUTION METHODOLOGY"
          title="FROM ROOFTOP AUDIT TO COMMISSIONING."
          description="A structured 5-stage engineering lifecycle designed to guarantee decades of uninterrupted clean electricity."
          theme="light"
          align="left"
        />

        {/* Desktop Horizontal Timeline Navigation (hidden on mobile) */}
        <div className="hidden lg:block my-12">
          <div className="relative flex items-center justify-between">
            {/* Horizontal connecting background line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-amber-500 -translate-y-1/2 z-0 transition-all duration-500 shadow-sm"
              style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
            />

            {PROCESS_STEPS.map((step, idx) => {
              const IconComponent = iconMap[step.iconName] || Cpu;
              const isActive = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setActiveStep(idx)}
                  className="relative z-10 flex flex-col items-center group focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 scale-110 shadow-md ring-4 ring-amber-200'
                        : isPast
                        ? 'bg-slate-900 text-amber-400'
                        : 'bg-white text-slate-500 border border-slate-300 group-hover:border-amber-500'
                    }`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span
                    className={`mt-3 text-xs font-mono font-bold uppercase tracking-wider transition-colors ${
                      isActive ? 'text-amber-700' : 'text-slate-500 group-hover:text-slate-900'
                    }`}
                  >
                    {step.stepNumber} {step.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Active Step Card on Desktop */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 p-8 rounded-3xl bg-white border border-slate-200 shadow-md"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-mono uppercase font-bold tracking-widest text-amber-800 bg-amber-100 border border-amber-300 px-2.5 py-1 rounded-md">
                  STAGE {PROCESS_STEPS[activeStep].stepNumber} OF 05
                </span>
                <h3 className="text-2xl font-black font-display uppercase tracking-tight text-slate-950 mt-2">
                  {PROCESS_STEPS[activeStep].title}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-600 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>ESTIMATED WINDOW: {PROCESS_STEPS[activeStep].timeline}</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal mb-4">
                  {PROCESS_STEPS[activeStep].shortDescription}
                </p>
                <div className="space-y-2.5">
                  {PROCESS_STEPS[activeStep].detailedPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3 shadow-md">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  TDS ENGINEERING VERIFICATION
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-mono font-normal">
                  Supervised by certified electrical engineers adhering to MNRE safety standards, dual-earthing copper bonding, and DISCOM interconnection codes.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile Vertical Timeline (hidden on desktop) */}
        <div className="lg:hidden space-y-4 mt-8">
          {PROCESS_STEPS.map((step, idx) => {
            const IconComponent = iconMap[step.iconName] || Cpu;
            return (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm relative pl-16"
              >
                {/* Vertical Step Number Circle */}
                <div className="absolute left-4 top-5 w-9 h-9 rounded-xl bg-amber-100 border border-amber-300 text-amber-800 flex items-center justify-center text-xs font-bold font-mono">
                  {step.stepNumber}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-black font-display uppercase text-slate-950">
                      {step.title}
                    </h3>
                    <span className="text-[9px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {step.timeline}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                    {step.shortDescription}
                  </p>

                  <div className="mt-3 space-y-1.5 pt-3 border-t border-slate-100">
                    {step.detailedPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
