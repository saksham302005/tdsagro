'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  Lightbulb,
  Armchair,
  Cpu,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Package,
  Layers,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IMPORT_CATEGORIES } from '@/data/imports';
import { Button } from '@/components/ui/Button';

interface ImportsSectionProps {
  onOpenConsultation?: (category?: string) => void;
}

export const ImportsSection: React.FC<ImportsSectionProps> = ({ onOpenConsultation }) => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const currentCategory = IMPORT_CATEGORIES[activeCategoryIdx];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-yellow-500" />;
      case 'Armchair':
        return <Armchair className="w-5 h-5 text-blue-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-cyan-500" />;
      default:
        return <Package className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="imports" className="py-20 sm:py-28 bg-[#FAFBF9] text-slate-900 relative overflow-hidden border-t border-slate-200/60 os-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="TDS AGRO PRODUCER COMPANY LIMITED • SUBSIDIARY DIVISION 02"
            title="GLOBAL IMPORTS DIVISION."
            description="A visual catalogue of broad import categories, curated for homes, businesses, institutions, and infrastructure projects."
            theme="light"
            align="left"
            className="mb-0"
          />

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-blue-800 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="font-bold">4 CORE PRODUCT CATEGORIES</span>
          </div>
        </div>

        {/* 4 Category Filter Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {IMPORT_CATEGORIES.map((cat, idx) => {
            const isSelected = idx === activeCategoryIdx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryIdx(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border flex items-center gap-3 ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-[1.02]'
                    : 'bg-white border-slate-200/90 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {getCategoryIcon(cat.iconName)}
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase block opacity-75">
                    CATEGORY 0{idx + 1}
                  </span>
                  <span className="text-sm font-bold font-display truncate block">
                    {cat.category}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Visual Stage */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Category image */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md">
                <img
                  src={currentCategory.image}
                  alt={currentCategory.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-mono uppercase font-bold tracking-widest text-amber-400 block">
                    VERIFIED IMPORT
                  </span>
                  <span className="text-lg font-bold font-display uppercase tracking-tight block">
                    {currentCategory.category} Line
                  </span>
                </div>
              </div>

            </div>

            {/* Category summary */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-mono font-bold uppercase tracking-wider">
                  {currentCategory.category} RANGE
                </span>
                <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 mt-2 uppercase">
                  {currentCategory.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {currentCategory.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span>PRODUCT CATEGORIES INCLUDED</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentCategory.productRange.map((product) => (
                    <div key={product} className="px-3 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm text-slate-700 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{product}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700 leading-relaxed">
                  Further product details, quantities, and sourcing options can be discussed when preparing your quotation.
                </p>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() =>
                    onOpenConsultation ? onOpenConsultation(`Imports: ${currentCategory.category}`) : (window.location.href = '/#contact')
                  }
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="font-bold text-xs"
                >
                  Request Quotation for {currentCategory.category}
                </Button>

                <div className="text-xs font-mono text-slate-500 font-medium">
                  ISO 9001 & CE Compliance Guaranteed
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
