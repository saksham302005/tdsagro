'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, MessageSquareQuote, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const VERIFIED_COMMISSIONING_NOTES = [
  {
    id: 'note-1',
    propertyType: 'Residential Rooftop (Fatehpur)',
    systemSpec: '3 kW On-Grid System with Net Metering',
    note: 'System commissioning completed with bidirectional meter synchronization. Homeowner reports consistent monthly DISCOM unit offsets and seamless PM Surya Ghar portal submission.',
    status: 'Verified Project Commissioning Log',
  },
  {
    id: 'note-2',
    propertyType: 'Commercial Agro Facility (Central UP)',
    systemSpec: '10 kW Solar Shed Installation',
    note: 'Daytime cold-storage sorting load powered via high-efficiency Mono PERC modules, reducing peak tariff billing significantly.',
    status: 'Verified Project Commissioning Log',
  },
  {
    id: 'note-3',
    propertyType: 'Independent Residence (Civil Lines)',
    systemSpec: '5 kW Elevated Terrace Solar Pergola',
    note: 'Elevated HDGI mounting structure preserving full rooftop usability while generating upwards of 600 units of green energy per month.',
    status: 'Verified Project Commissioning Log',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev === 0 ? VERIFIED_COMMISSIONING_NOTES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev === VERIFIED_COMMISSIONING_NOTES.length - 1 ? 0 : prev + 1));
  };

  const currentItem = VERIFIED_COMMISSIONING_NOTES[currentIdx];

  return (
    <section className="py-20 sm:py-28 bg-[#FAFBF9] text-slate-900 relative overflow-hidden os-grid-pattern border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TDS SOLAR OS • FIELD COMMISSIONING AUDIT"
          title="VERIFIED FIELD PERFORMANCE OBSERVATIONS."
          description="Real commissioning observations and verified installation telemetry logs across regional residential and commercial sites."
          theme="light"
          align="left"
        />

        {/* Testimonial Carousel Card (Light Glass Card) */}
        <div className="max-w-4xl mx-auto mt-10">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-slate-200 relative">
            {/* Top quote icon */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shadow-sm">
                  <Quote className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-sm font-display font-bold uppercase tracking-wider text-slate-950 block">
                    {currentItem.propertyType}
                  </span>
                  <span className="text-xs font-mono text-amber-700 font-bold">
                    {currentItem.systemSpec}
                  </span>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{currentItem.status}</span>
              </div>
            </div>

            {/* Note text */}
            <div className="py-8 min-h-[140px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentItem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-base sm:text-xl text-slate-700 leading-relaxed font-normal italic"
                >
                  "{currentItem.note}"
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Carousel Navigation Controls */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {VERIFIED_COMMISSIONING_NOTES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIdx === i ? 'w-8 bg-amber-500' : 'w-2 bg-slate-200'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-amber-500 hover:text-slate-950 transition-colors text-slate-700 shadow-sm"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-amber-500 hover:text-slate-950 transition-colors text-slate-700 shadow-sm"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
