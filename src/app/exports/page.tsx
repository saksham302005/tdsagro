'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { ExportsSection } from '@/components/sections/ExportsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Globe2, ArrowRight, ShieldCheck, Ship, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ExportsPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedCommodity, setSelectedCommodity] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (commodity?: string) => {
    setSelectedCommodity(commodity);
    setIsConsultationOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAFBF9] text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Hero Header for Exports Page */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-teal-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/ware-house_disribution.jpg"
            alt="Exports shipping background"
            className="w-full h-full object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-400/30 text-xs font-mono font-bold uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>TDS AGRO • SUBSIDIARY DIVISION 03</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight max-w-3xl">
            TDS Agro Exports: Global Crops, Produce & Bulk Supply.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            Exclusively focused on the international export of certified Indian Basmati rice, durum wheat, organic pulses, whole spices, and bulk agricultural produce to 12+ countries with full APEDA and FSSAI compliance.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => handleOpenConsultation('Global Export Order')}
              icon={<ArrowRight className="w-4 h-4" />}
              className="font-bold shadow-md"
            >
              Request FOB / CIF Export Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Exports Commodities Showcase */}
      <ExportsSection onOpenConsultation={handleOpenConsultation} />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar onOpenConsultation={handleOpenConsultation} />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultCapacity={selectedCommodity || 'Agriculture Exports Division'}
      />
    </main>
  );
}
