'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { ImportsSection } from '@/components/sections/ImportsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { PackageCheck, ArrowRight, ShieldCheck, Zap, Lightbulb, Armchair, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ImportsPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (category?: string) => {
    setSelectedCategory(category);
    setIsConsultationOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAFBF9] text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Hero Header for Imports Page */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-blue-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/battery-backup.jpg"
            alt="Imports hardware background"
            className="w-full h-full object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-mono font-bold uppercase tracking-wider">
            <PackageCheck className="w-3.5 h-3.5" />
            <span>TDS AGRO • SUBSIDIARY DIVISION 02</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight max-w-3xl">
            TDS Imports: Inverters, Lighting, Furniture & Electronics.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            Direct global trade procurement delivering certified pure sine wave inverters, commercial LED luminaries, modular corporate furniture, and industrial electronics backed by rigorous quality assurance.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => handleOpenConsultation('Imports Procurement')}
              icon={<ArrowRight className="w-4 h-4" />}
              className="font-bold shadow-md"
            >
              Request Bulk Import Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Imports Interactive Showcase */}
      <ImportsSection onOpenConsultation={handleOpenConsultation} />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar onOpenConsultation={handleOpenConsultation} />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultCapacity={selectedCategory || 'Imports Division'}
      />
    </main>
  );
}
