'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Cpu,
  FileCheck2,
  Wrench,
  Coins,
  Headphones,
  Sparkles,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WHY_TDS_FEATURES } from '@/data/whyTds';

const iconMap: Record<string, any> = {
  ShieldCheck,
  Cpu,
  FileCheck2,
  Wrench,
  Coins,
  Headphones,
};

export const WhyTdsSection: React.FC = () => {
  return (
    <section id="why-tds" className="py-20 sm:py-28 bg-[#FAFBF9] text-slate-900 relative overflow-hidden os-grid-pattern border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TDS SOLAR OS • ENGINEERING INTEGRITY"
          title="WHY PEOPLE CHOOSE TDS."
          description="Built on rigorous technical standards, certified hardware partnerships, and dependable ongoing customer support across Uttar Pradesh."
          theme="light"
          align="left"
        />

        {/* 6 Editorial Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_TDS_FEATURES.map((feature, idx) => {
            const IconComponent = iconMap[feature.iconName] || Sparkles;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center border border-amber-200 group-hover:scale-110 group-hover:bg-amber-100 transition-all shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-mono font-bold tracking-widest px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {feature.highlight}
                    </span>
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                    {feature.subtitle}
                  </span>

                  <h3 className="text-xl font-bold font-display uppercase tracking-tight text-slate-950 group-hover:text-amber-600 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-[11px] font-mono font-bold text-amber-700 uppercase tracking-wider">
                  <span>Verified Standard</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
