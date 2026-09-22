'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Sparkles, Cpu, Award, Zap } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/data/company';

interface IntroSectionProps {
  onOpenConsultation: () => void;
}

export const IntroSection: React.FC<IntroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Content (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="PRODUCER COMPANY LIMITED"
              badge="TDS AGRO"
              title="ENERGY INFRASTRUCTURE THAT DELIVERS."
              description={COMPANY_INFO.tagline}
              theme="light"
              className="mb-6"
            />

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
            >
              <p>
                From high-efficiency agricultural solar pumps and commercial microgrids to residential rooftop systems under <strong>PM Surya Ghar</strong>, <strong>TDS AGRO</strong> engineers robust, high-yield clean energy systems.
              </p>
              <p>
                Our engineering team emphasizes Tier-1 module selection, high-conversion MPPT inverters, and end-to-end DISCOM net-metering liaison so that every sunrise directly offsets your electricity bills.
              </p>
            </motion.div>

            {/* Editorial highlights grid */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 pb-2"
            >
              {[
                'Full DISCOM net-metering paperwork handled',
                'PM Surya Ghar DBT subsidy assistance (₹78,000)',
                'Tier-1 modules with 25-yr performance warranty',
                'Local service and rapid on-site maintenance',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200/80 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Action button */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-4"
            >
              <Button
                variant="primary"
                size="md"
                onClick={onOpenConsultation}
                icon={<ArrowRight className="w-4 h-4 text-slate-950" />}
                className="shadow-sm font-bold text-xs"
              >
                Schedule Free Site Audit
              </Button>

              <div className="text-xs font-mono font-semibold text-slate-500">
                HQ: {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
              </div>
            </motion.div>
          </div>

          {/* Right Image Composition (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-lg overflow-hidden shadow-lg border border-slate-200 group"
            >
              <video
                autoPlay
                muted
                playsInline
                preload="metadata"
                poster="/about-solar.jpg"
                onLoadedMetadata={(event) => {
                  event.currentTarget.currentTime = 3;
                }}
                onCanPlay={(event) => {
                  if (event.currentTarget.currentTime < 3) {
                    event.currentTarget.currentTime = 3;
                  }
                }}
                onPlay={(event) => {
                  if (event.currentTarget.currentTime < 3) {
                    event.currentTarget.currentTime = 3;
                  }
                }}
                onEnded={(event) => {
                  event.currentTarget.currentTime = 3;
                  void event.currentTarget.play();
                }}
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                aria-label="TDS AGRO solar installation in motion"
              >
                <source src="/slide.mp4" type="video/mp4" />
              </video>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Verified Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider font-display text-slate-950">
                      TDS AGRO PRODUCER CO. LTD.
                    </div>
                    <div className="text-[11px] font-mono text-slate-500">
                      Commissioned Across {COMPANY_INFO.address.city} & Central UP
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
