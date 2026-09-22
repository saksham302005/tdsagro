'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { ConsultationModal } from '@/components/ui/ConsultationModal';

import { AgroHero } from '@/components/sections/AgroHero';
import { AgricultureSection } from '@/components/sections/AgricultureSection';
import { GroupCompaniesSection } from '@/components/sections/GroupCompaniesSection';
import { ScrollytellingShowcase } from '@/components/sections/ScrollytellingShowcase';
import { ImportsSection } from '@/components/sections/ImportsSection';
import { ExportsSection } from '@/components/sections/ExportsSection';
import { MotorsSection } from '@/components/sections/MotorsSection';
import { DirectorsSection } from '@/components/sections/DirectorsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FaqSection } from '@/components/sections/FaqSection';

export default function HomePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedDivision, setSelectedDivision] = useState<string | undefined>(undefined);

  const handleOpenConsultation = (division?: string) => {
    setSelectedDivision(division);
    setIsConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultationOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#FAFBF9] text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* 00: Master Hero with 5-Division Interactive Stage (Fixes the layout overflow bug completely) */}
      <AgroHero onOpenConsultation={handleOpenConsultation} />

      {/* 01: Core Division 01 — Agriculture & Farm Solutions */}
      <AgricultureSection onOpenConsultation={handleOpenConsultation} />

      {/* 02: Group Companies & Subsidiaries Showcase (Modeled after tdssolar.in/tdsgroup.php) */}
      <GroupCompaniesSection />

      {/* 03: Apple-Style Fast Scrollytelling & 3D Interactive Product Breakdown */}
      <ScrollytellingShowcase onOpenConsultation={handleOpenConsultation} />

      {/* 04: Subsidiary Division 02 — Global Imports (Inverters, Lighting, Furniture, Electronics) */}
      <ImportsSection onOpenConsultation={handleOpenConsultation} />

      {/* 05: Subsidiary Division 03 — Agriculture Exports (Crops, Produce, Global Trade) */}
      <ExportsSection onOpenConsultation={handleOpenConsultation} />

      {/* 06: Subsidiary Division 05 — TDS Motors (Tractors, Harvesters, Rotavators & Machinery) */}
      <MotorsSection onOpenConsultation={handleOpenConsultation} />

      {/* 07: Dedicated Board of Directors & Governance Showcase */}
      <DirectorsSection />

      {/* 08: Frequently Asked Questions */}
      <FaqSection />

      {/* 09: Regional Corporate Contact Form */}
      <ContactSection />

      {/* Multi-Column Corporate Parent Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <WhatsAppFloat />

      {/* Mobile Bottom Bar */}
      <MobileBottomBar onOpenConsultation={handleOpenConsultation} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
        defaultCapacity={selectedDivision}
      />
    </main>
  );
}
