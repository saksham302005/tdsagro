'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { DirectorsSection } from '@/components/sections/DirectorsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Users, Shield, Building2, CheckCircle2, Award } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export default function DirectorsPage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAFBF9] text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Hero Header for Directors & Governance Page */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-mono font-bold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>TDS AGRO PRODUCER COMPANY LIMITED • BOARD OF DIRECTORS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight max-w-3xl">
            Corporate Leadership & Board of Directors.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            Guided by seasoned leaders and technical advisors committed to sustainable enterprise growth, farmer prosperity, global trade excellence, and clean energy innovation across Uttar Pradesh and beyond.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-1.5 text-emerald-400">
              <Shield className="w-4 h-4" />
              <span>MCA Compliant Governance</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-amber-300">
              <Building2 className="w-4 h-4" />
              <span>Parent Entity: {COMPANY_INFO.parentName}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Directors Profiles Showcase */}
      <DirectorsSection />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultCapacity="Corporate Board Inquiry"
      />
    </main>
  );
}
