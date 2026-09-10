'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { MotorsSection } from '@/components/sections/MotorsSection';
import { ScrollytellingShowcase } from '@/components/sections/ScrollytellingShowcase';
import { ContactSection } from '@/components/sections/ContactSection';
import { Wrench, ArrowRight, ShieldCheck, Cog, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function MotorsPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (equipment?: string) => {
    setSelectedEquipment(equipment);
    setIsConsultationOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#FAFBF9] text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Hero Header for TDS Motors Page */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-rose-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/business-solar.jpg"
            alt="TDS Motors machinery background"
            className="w-full h-full object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/30 text-xs font-mono font-bold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>TDS AGRO • SUBSIDIARY DIVISION 05</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight max-w-3xl">
            TDS Motors: Agricultural Equipment & Machinery.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            Pioneering farm mechanization with heavy-duty multi-terrain tractors (45HP-75HP), combine harvesters, precision multi-speed rotavators, power tillers, and laser land levelers.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => handleOpenConsultation('TDS Motors Farm Machinery')}
              icon={<ArrowRight className="w-4 h-4" />}
              className="font-bold shadow-md"
            >
              Book Tractor & Machinery Demonstration
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive Apple-Style Scrollytelling for Motors */}
      <ScrollytellingShowcase initialMode="motors" onOpenConsultation={handleOpenConsultation} />

      {/* Machinery Catalog & Specifications */}
      <MotorsSection onOpenConsultation={handleOpenConsultation} />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar onOpenConsultation={handleOpenConsultation} />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultCapacity={selectedEquipment || 'TDS Motors Machinery'}
      />
    </main>
  );
}
