'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Ship,
  FileCheck,
  BadgeCheck,
  Package,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { EXPORT_PRODUCTS, EXPORT_STRENGTHS } from '@/data/exports';
import { Button } from '@/components/ui/Button';

interface ExportsSectionProps {
  onOpenConsultation?: (commodity?: string) => void;
}

export const ExportsSection: React.FC<ExportsSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="exports" className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="TDS AGRO PRODUCER COMPANY LIMITED • SUBSIDIARY DIVISION 03"
            title="AGRICULTURE EXPORTS DIVISION."
            description="Dedicated exclusively to the global export of high-grade Basmati rice, durum wheat, organic certified pulses, whole spices, and bulk agricultural produce."
            theme="light"
            align="left"
            className="mb-0"
          />

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full shadow-sm">
            <Globe2 className="w-4 h-4 text-emerald-600" />
            <span className="font-bold">APEDA & FSSAI CERTIFIED AGRI-EXPORT</span>
          </div>
        </div>

        {/* Global Export Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {EXPORT_STRENGTHS.map((str, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                  <BadgeCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold font-display uppercase tracking-tight text-slate-900">
                  {str.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {str.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Export Commodities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EXPORT_PRODUCTS.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image banner */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={prod.image}
                  alt={prod.commodity}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2.5 py-1 rounded-md bg-white/95 text-slate-900 backdrop-blur-md shadow-sm">
                    HS CODE: {prod.hsCode}
                  </span>
                </div>

                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-emerald-300">
                  <span className="font-bold">MOQ: {prod.minimumOrder}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display uppercase tracking-tight text-slate-950 group-hover:text-emerald-700 transition-colors">
                    {prod.commodity}
                  </h3>

                  <span className="text-xs font-mono text-emerald-700 font-bold block mt-1">
                    {prod.variety}
                  </span>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {prod.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
                        EXPORT CERTIFICATIONS:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {prod.certifications.map((cert, cIdx) => (
                          <span
                            key={cIdx}
                            className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono font-medium border border-slate-200"
                          >
                            {cert}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-1">
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
                        DESTINATION MARKETS:
                      </span>
                      <p className="text-xs font-mono text-slate-600">
                        {prod.destinationMarkets.join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() =>
                      onOpenConsultation ? onOpenConsultation(`Export Inquiry: ${prod.commodity}`) : (window.location.href = '/#contact')
                    }
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="text-xs font-bold"
                  >
                    Export Order Inquiry
                  </Button>

                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                    FOB / CIF QUOTE
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
