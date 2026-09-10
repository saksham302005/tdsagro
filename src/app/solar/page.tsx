'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { ScrollytellingShowcase } from '@/components/sections/ScrollytellingShowcase';
import { SolutionsSection } from '@/components/sections/SolutionsSection';
import { SavingsSection } from '@/components/sections/SavingsSection';
import { SuryaGharSection } from '@/components/sections/SuryaGharSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Sun, ArrowRight, ExternalLink, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/data/company';

export default function SolarPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedCapacity, setSelectedCapacity] = useState<string | undefined>(undefined);
  const heroRef = useRef<HTMLElement>(null);
  const backgroundVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!heroRef.current || !backgroundVideoRef.current) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        backgroundVideoRef.current,
        { scale: 1.08, xPercent: -2, yPercent: 0 },
        {
          scale: 1.16,
          xPercent: 2,
          yPercent: -2,
          duration: 18,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        },
      );
    }, heroRef);

    return () => context.revert();
  }, []);

  const handleOpenConsultation = (capacity?: string) => {
    setSelectedCapacity(capacity);
    setIsConsultationOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAFBF9] text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Hero Header for Solar Division */}
      <section
        ref={heroRef}
        className="relative flex min-h-[calc(100svh+4rem)] flex-col items-start overflow-hidden bg-gradient-to-b from-amber-800 via-slate-700 to-slate-800 pt-36 pb-20 text-white sm:pt-40 sm:pb-24"
        style={{ minHeight: 'calc(100dvh + 4rem)' }}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={backgroundVideoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Solar installation background"
            className="w-full h-full object-cover opacity-65 filter brightness-100"
          >
            <source src="/solar_background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/35 to-slate-950/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-white/10" />
            <div className="absolute bottom-40 right-8 hidden max-w-xs rounded-2xl border border-white/15 bg-slate-950/25 p-4 text-right backdrop-blur-sm lg:block xl:right-16">
              <span className="block text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-amber-300/80">TDS SOLAR OS</span>
              <span className="mt-1 block text-sm font-semibold text-white/90">Powering homes, businesses and farms.</span>
            </div>
        </div>

        <div className="w-full max-w-none mx-0 self-start px-6 sm:px-10 lg:px-16 xl:px-24 relative z-10 space-y-5 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-mono font-bold uppercase tracking-wider">
              <Sun className="w-3.5 h-3.5" />
              <span>TDS AGRO • SUBSIDIARY DIVISION 04</span>
            </div>

            <a
              href={COMPANY_INFO.solarWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-amber-300 border border-white/20 text-xs font-mono font-bold transition-colors"
            >
              <span>Connected with tdssolar.in</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-[1.05] max-w-3xl">
            TDS Solar Energy: Rooftop, PM Surya Ghar & Commercial EPC.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal">
            Turnkey clean energy infrastructure engineered for residential homes, businesses, and agricultural solar pumping across Uttar Pradesh. Full DBT subsidy support (₹78,000) and DISCOM net-metering approvals.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => handleOpenConsultation('Rooftop Solar EPC')}
              icon={<ArrowRight className="w-4 h-4" />}
              className="font-bold shadow-md"
            >
              Get Free Solar Site Quotation
            </Button>

            <a
              href={COMPANY_INFO.solarWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 text-white text-xs font-bold font-mono transition-colors"
            >
              <span>Visit TDS Solar Official Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid max-w-2xl grid-cols-3 gap-3 border-t border-white/15 pt-5 text-left">
            <div>
              <span className="block text-xl font-black text-amber-300 sm:text-2xl">500+</span>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-300">Projects</span>
            </div>
            <div>
              <span className="block text-xl font-black text-amber-300 sm:text-2xl">25 Yr</span>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-300">Warranty</span>
            </div>
            <div>
              <span className="block text-xl font-black text-amber-300 sm:text-2xl">UP East</span>
              <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-300">Service region</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 left-6 right-6 z-10 grid grid-cols-1 gap-2 rounded-2xl border border-white/15 bg-slate-950/45 p-2 backdrop-blur-md sm:left-10 sm:right-10 sm:grid-cols-3 lg:left-16 lg:right-16 xl:left-24 xl:right-24">
          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
            <span className="text-lg text-amber-300">01</span>
            <div>
              <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-amber-200/80">Residential</span>
              <span className="block text-sm font-semibold text-white">Rooftop solar systems</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
            <span className="text-lg text-amber-300">02</span>
            <div>
              <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-amber-200/80">Commercial</span>
              <span className="block text-sm font-semibold text-white">High-yield EPC projects</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
            <span className="text-lg text-amber-300">03</span>
            <div>
              <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-amber-200/80">Agriculture</span>
              <span className="block text-sm font-semibold text-white">Solar pumping solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Apple-Style Scrollytelling for Solar */}
      <ScrollytellingShowcase initialMode="solar" onOpenConsultation={handleOpenConsultation} />

      {/* 9 Solar Hardware Architectures */}
      <SolutionsSection onOpenConsultation={handleOpenConsultation} />

      {/* Solar Savings & Verified Pricing Calculator */}
      <SavingsSection onOpenConsultation={handleOpenConsultation} />

      {/* PM Surya Ghar Subsidy Guide */}
      <SuryaGharSection onOpenConsultation={handleOpenConsultation} />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar onOpenConsultation={handleOpenConsultation} />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultCapacity={selectedCapacity || 'TDS Solar Energy'}
      />
    </main>
  );
}
