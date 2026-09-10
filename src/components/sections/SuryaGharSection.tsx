'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowRight, Sun, Cpu, Zap, Coins, ShieldCheck, CheckCircle2, Sparkles, Activity } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { SolarPanelViewer3D } from '@/components/three/SolarPanelViewer3D';

interface SuryaGharSectionProps {
  onOpenConsultation: () => void;
}

export const SuryaGharSection: React.FC<SuryaGharSectionProps> = ({ onOpenConsultation }) => {
  const steps = [
    {
      title: '01. HOME ROOF',
      icon: Home,
      tag: 'PRE-AUDIT',
      desc: 'Independent terrace or roof surface with shadow-free solar irradiation.',
    },
    {
      title: '02. SOLAR ARRAY',
      icon: Sun,
      tag: 'MONO PERC',
      desc: 'High-efficiency Tier-1 bifacial panels generate DC electrical energy.',
    },
    {
      title: '03. SMART INVERTER',
      icon: Cpu,
      tag: 'MPPT CORE',
      desc: 'Pure sine-wave conversion & grid sync with real-time IoT monitoring.',
    },
    {
      title: '04. NET METERING',
      icon: Zap,
      tag: 'BI-DIRECTIONAL',
      desc: 'Power your house appliances; surplus kWh automatically banked to DISCOM.',
    },
    {
      title: '05. DBT SUBSIDY',
      icon: Coins,
      tag: 'DIRECT BANK',
      desc: 'Up to ₹78,000 direct benefit transfer deposited into your bank account.',
    },
  ];

  return (
    <section id="surya-ghar" className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden os-grid-pattern border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TDS SOLAR OS • CENTRAL PM SURYA GHAR PROTOCOL"
          title="END-TO-END ENERGY & SUBSIDY PIPELINE."
          description="How the PM Surya Ghar Muft Bijli Yojana converts daily sunlight into direct financial subsidies and zero electricity bills."
          theme="light"
          align="left"
        />

        {/* Visual Step-by-Step Flow Diagram (Light Cards) */}
        <div className="my-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 relative flex flex-col items-center text-center shadow-sm hover:shadow-md hover:border-amber-400 transition-all group"
                >
                  {/* Top node telemetry badge */}
                  <div className="flex items-center justify-between w-full mb-4">
                    <span className="text-[9px] font-mono font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      NODE 0{idx + 1}
                    </span>
                    <span className="text-[9px] font-mono text-emerald-700 font-bold">
                      {step.tag}
                    </span>
                  </div>

                  {/* Icon container with glow */}
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-amber-400 group-hover:shadow-md transition-all shadow-sm">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h4 className="text-sm font-bold font-display uppercase tracking-wider text-slate-950 group-hover:text-amber-600 transition-colors">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-xs text-slate-600 leading-relaxed font-normal">
                    {step.desc}
                  </p>

                  {/* Desktop node connector arrow */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-white border border-amber-400 text-amber-600 items-center justify-center shadow-sm text-[10px] font-mono font-bold">
                      →
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 3D Three.js Interactive Photovoltaic Module Inspector */}
        <div className="my-16">
          <SolarPanelViewer3D />
        </div>

        {/* Key Program Benefits Grid */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white grid grid-cols-1 lg:grid-cols-3 gap-8 items-center shadow-xl">
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase font-bold tracking-widest text-amber-400">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>OFFICIAL MNRE DIRECT BENEFIT TRANSFER (DBT)</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display uppercase text-white tracking-tight">
              Claim Up to ₹78,000 in Direct Bank Subsidies
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              Under PM Surya Ghar, eligible residential grid-connected consumers receive financial assistance deposited directly into their linked bank account upon DISCOM inspection and meter commissioning.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero-hassle National Portal registration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bi-directional net metering synchronization</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={onOpenConsultation}
              icon={<ArrowRight className="w-4 h-4" />}
              className="shadow-lg font-bold font-mono text-xs"
            >
              Verify Your Subsidy Eligibility
            </Button>
            <span className="text-[10px] font-mono text-slate-400 mt-2 text-center lg:text-right">
              Free rooftop audit & DISCOM liaison support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
