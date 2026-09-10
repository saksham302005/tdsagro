'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, X, Shield, Sparkles, Cpu, Layers, Zap } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SOLUTIONS } from '@/data/solutions';
import { SolutionItem } from '@/types';
import { Button } from '@/components/ui/Button';

interface SolutionsSectionProps {
  onOpenConsultation: (capacity?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);

  return (
    <section id="solutions" className="py-20 sm:py-28 bg-[#FAFBF9] text-slate-900 relative os-grid-pattern overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-7 gap-4">
          <SectionHeading
            eyebrow="TDS SOLAR OS • HARDWARE & SOLUTIONS MATRIX"
            title="ONE SUN. NINE ARCHITECTURES."
            description="Tier-1 photovoltaic modules, bifacial panels, hybrid ESS, and high-efficiency agricultural solar drives engineered for extreme reliability."
            theme="light"
            align="left"
            className="mb-0"
          />

          {/* Quick Filter Telemetry Pill */}
          <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-slate-600 bg-white border border-slate-200 px-3 py-1.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-bold">9 ACTIVE PLATFORMS • 25-YR WARRANTY</span>
          </div>
        </div>

        {/* 9 Image-Based Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SOLUTIONS.map((sol, idx) => (
            <motion.div
              key={sol.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedSolution(sol)}
              className="bg-white rounded-lg overflow-hidden border border-slate-200/80 shadow-[0_10px_30px_rgba(7,36,24,0.06)] hover:shadow-xl hover:border-amber-400 transition-all duration-300 cursor-pointer flex flex-col h-[420px] group"
            >
              {/* Card Image Background with Hover Zoom */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={sol.imageUrl}
                  alt={sol.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Category & Status Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2.5 py-1 rounded-md bg-white/95 text-slate-900 backdrop-blur-md shadow-sm">
                    {sol.category}
                  </span>
                  {sol.badge && (
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 font-extrabold shadow-sm">
                      {sol.badge}
                    </span>
                  )}
                </div>

                {/* Top Right Floating Action Arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center transition-all duration-300 transform group-hover:bg-amber-500 group-hover:rotate-45 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Spec Tag */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-300">
                  <span className="flex items-center gap-1 font-semibold">
                    <Cpu className="w-3 h-3 text-cyan-400" />
                    TIER-1 ARCHITECTURE
                  </span>
                  <span className="text-emerald-400 font-bold">99.2% EFF</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display uppercase tracking-tight text-slate-950 group-hover:text-amber-600 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {sol.description}
                  </p>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-100 mt-4 text-xs font-mono font-bold text-slate-700 group-hover:text-amber-600 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    INSPECT TELEMETRY SPECS
                  </span>
                  <span className="text-amber-600 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Solution Detail Modal */}
      <AnimatePresence>
        {selectedSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSolution(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden z-10 my-8"
            >
              <div className="relative h-60 sm:h-72 bg-slate-950">
                <img
                  src={selectedSolution.imageUrl}
                  alt={selectedSolution.title}
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                <button
                  onClick={() => setSelectedSolution(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-amber-400 px-2 py-0.5 rounded bg-amber-400/20 border border-amber-400/30">
                    {selectedSolution.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black font-display uppercase text-white mt-2">
                    {selectedSolution.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                  {selectedSolution.longDescription}
                </p>

                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>ENGINEERING SPECIFICATIONS & ADVANTAGES</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedSolution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
                  <div className="text-xs font-mono text-slate-500">
                    MNRE & State DISCOM Verified Standards.
                  </div>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => {
                      const title = selectedSolution.title;
                      setSelectedSolution(null);
                      onOpenConsultation(title);
                    }}
                    icon={<ArrowUpRight className="w-4 h-4" />}
                    className="shadow-sm font-bold"
                  >
                    Configure {selectedSolution.title}
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
