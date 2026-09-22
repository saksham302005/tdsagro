'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQS } from '@/data/faqs';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['parent-structure', 'agriculture-contract']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faqs" className="py-20 sm:py-28 bg-white text-slate-900 relative os-grid-pattern overflow-hidden border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TDS AGRO • KNOWLEDGE BASE & DIVISIONS FAQ"
          title="FREQUENTLY ASKED QUESTIONS."
          description="Clear answers regarding TDS Agro parent operations, agricultural partnerships, imports & exports, solar EPC (tdssolar.in), and farm mechanization."
          theme="light"
          align="left"
        />

        <div className="space-y-3.5 mt-10">
          {FAQS.map((faq, idx) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className={`rounded-2xl transition-all overflow-hidden border ${
                  isOpen
                    ? 'bg-slate-50 border-amber-400 shadow-md'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold font-display uppercase tracking-tight text-slate-950">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                    isOpen
                      ? 'bg-amber-500 text-slate-950 border-amber-500'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
