'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sun, Sparkles, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/data/company';

interface FinalCtaSectionProps {
  onOpenConsultation: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAFBF9] text-slate-900 relative overflow-hidden text-center os-grid-pattern border-t border-slate-200/60">
      {/* Background Animated Sun Flare & Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] bg-gradient-to-b from-amber-300/30 via-yellow-200/20 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* Rotating Sun Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-amber-300/30 rounded-full pointer-events-none animate-spin-slow opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-cyan-300/20 rounded-full pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-amber-300 text-amber-800 text-xs font-mono tracking-widest uppercase mb-6 shadow-sm"
        >
          <Sun className="w-3.5 h-3.5 text-amber-600" />
          <span>UP TO ₹78,000 CENTRAL GOVERNMENT SUBSIDY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-black font-display uppercase tracking-tight text-slate-950 leading-tight"
        >
          Your Rooftop Could <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600">
            Power Your Future.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Talk to our solar engineering specialists about custom system sizing, zero-hassle DISCOM net metering, and instant PM Surya Ghar DBT subsidy claims.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto shadow-md font-bold text-xs sm:text-sm font-mono"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Claim Free Rooftop Survey & Quote
          </Button>

          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all shadow-sm"
          >
            <Phone className="w-4 h-4 text-amber-600" />
            <span>Call: {COMPANY_INFO.formattedPhone}</span>
          </a>
        </motion.div>

        {/* Operating Base Badge */}
        <div className="mt-12 text-xs font-mono text-slate-500 font-bold">
          Serving {COMPANY_INFO.operatingRegions.join(' • ')}
        </div>
      </div>
    </section>
  );
};
