'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MapPin, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/data/company';
import { SolarHeroScene } from '@/components/three/SolarHeroScene';

interface HeroProps {
  onOpenConsultation: (capacity?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  const handleScrollToSolutions = () => {
    const el = document.querySelector('#solutions');
    if (el) {
      const topOffset = 80;
      const elPos = el.getBoundingClientRect().top;
      window.scrollTo({
        top: elPos + window.pageYOffset - topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative mx-3 mt-3 min-h-[92vh] flex items-center overflow-hidden rounded-[26px] bg-[#123d68] text-white pt-28 pb-16 sm:mx-5 sm:mt-5 sm:rounded-[30px] sm:pt-32 sm:pb-24">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/about-solar.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
        aria-label="Solar agro operations creating clean energy"
      >
        <source src="/solar%20agro%20.mp4" type="video/mp4" />
      </video>
      <SolarHeroScene />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(96,165,250,0.28),transparent_28%),linear-gradient(90deg,rgba(8,31,58,0.92)_0%,rgba(8,31,58,0.68)_43%,rgba(8,31,58,0.16)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,31,58,0.76)_0%,transparent_58%)]" />
      <div className="pointer-events-none absolute inset-3 z-20 rounded-[26px] border border-white/25 sm:inset-5 sm:rounded-[30px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 1, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 inline-flex items-center gap-3 rounded-full border border-amber-300/35 bg-slate-950/25 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-amber-200 shadow-[0_0_24px_rgba(252,211,77,0.14)] backdrop-blur-sm sm:text-sm">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <span className="absolute h-full w-full animate-ping rounded-full bg-amber-300/60" />
              <span className="relative h-2 w-2 rounded-full bg-amber-300" />
            </span>
            Clean solar power for Uttar Pradesh
          </motion.div>
          <motion.h1 initial={{ opacity: 1, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="max-w-2xl text-5xl sm:text-6xl lg:text-8xl font-bold font-display leading-[0.95] tracking-tight">
            Make your roof work for you.
          </motion.h1>
          <motion.p initial={{ opacity: 1, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/80">
            Reliable rooftop solar for homes, businesses, and farms. We design, install, and take care of everything from subsidy paperwork to net metering.
          </motion.p>
          <motion.div initial={{ opacity: 1, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button variant="primary" size="lg" onClick={() => onOpenConsultation()} icon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto">
              Get my free solar quote
            </Button>
            <Button variant="ghost" size="lg" onClick={handleScrollToSolutions} className="w-full sm:w-auto border border-white/30 text-white hover:bg-white/10">
              See how it works
            </Button>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 1, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }} className="mt-16 grid max-w-2xl grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/20 pt-6">
          <div><strong className="block text-2xl font-display text-amber-300">₹78,000</strong><span className="text-xs text-white/65">PM Surya Ghar subsidy</span></div>
          <div><strong className="block text-2xl font-display text-amber-300">25 years</strong><span className="text-xs text-white/65">performance warranty</span></div>
          <div><strong className="block text-2xl font-display text-amber-300">100+</strong><span className="text-xs text-white/65">local installations</span></div>
        </motion.div>

        <div className="absolute hidden xl:flex right-8 bottom-8 items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-md">
          <MapPin className="h-4 w-4 text-amber-300" />
          <span className="text-xs font-medium text-white/80">Serving {COMPANY_INFO.address.city} and Central UP</span>
          <ShieldCheck className="h-4 w-4 text-emerald-300" />
        </div>
      </div>
    </section>
  );
};
