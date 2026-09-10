'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';
import { MobileBottomBar } from '@/components/layout/MobileBottomBar';
import { ConsultationModal } from '@/components/ui/ConsultationModal';
import { AgricultureSection } from '@/components/sections/AgricultureSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Sprout, ArrowRight, PackageCheck, Globe2, Sun, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function AgriculturePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAFBF9] text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden">
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Hero Header for Agriculture Page */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/agro-procesing.jpg"
            alt="Agriculture background"
            className="w-full h-full object-cover opacity-20 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-mono font-bold uppercase tracking-wider">
            <Sprout className="w-3.5 h-3.5" />
            <span>TDS AGRO • CORE BUSINESS DIVISION 01</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-display tracking-tight text-white leading-tight max-w-3xl">
            Core Agriculture, Crop Cultivation & Agro Solutions.
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
            Rooted in the fertile Gangetic plains of Uttar Pradesh, TDS Agro Producer Company Limited operates integrated farming ecosystems, organic bio-nutrients, contract farming buybacks, and modern cold-chain infrastructure.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => setIsConsultationOpen(true)}
              icon={<ArrowRight className="w-4 h-4" />}
              className="font-bold shadow-md"
            >
              Connect with Agricultural Advisory
            </Button>
          </div>
        </div>
      </section>

      {/* Agriculture Main Solutions */}
      <AgricultureSection onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Internal Agriculture Website Subdivisions */}
      <section className="py-20 sm:py-28 bg-[#FAFBF9] border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <p className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-emerald-700">
              TDS AGRO AGRICULTURE WEBSITE • INTERNAL SUBDIVISIONS
            </p>
            <h2 className="mt-3 text-3xl sm:text-5xl font-black font-display tracking-tight text-slate-950">
              Connected Agriculture Services.
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
              Imports, exports, solar systems and farm machinery are specialist service units inside the Agriculture website, not separate group companies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Imports',
                description: 'Inverters, lighting, furniture and equipment procurement for agricultural operations.',
                href: '/imports',
                icon: PackageCheck,
                color: 'text-blue-600 bg-blue-50 border-blue-200',
              },
              {
                title: 'Exports',
                description: 'Global movement of crops, produce and agricultural commodities from the farm network.',
                href: '/exports',
                icon: Globe2,
                color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
              },
              {
                title: 'Solar Energy',
                description: 'Solar pumping, rooftop systems and clean energy infrastructure for farms and facilities.',
                href: '/solar',
                icon: Sun,
                color: 'text-amber-600 bg-amber-50 border-amber-200',
              },
              {
                title: 'TDS Motors',
                description: 'Tractors, harvesters and farm machinery supporting modern agricultural mechanization.',
                href: '/motors',
                icon: Wrench,
                color: 'text-rose-600 bg-rose-50 border-rose-200',
              },
            ].map((unit) => {
              const Icon = unit.icon;
              return (
                <a
                  key={unit.title}
                  href={unit.href}
                  className="group rounded-2xl bg-white border border-slate-200 p-5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${unit.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold font-display text-slate-950 group-hover:text-emerald-700 transition-colors">
                    {unit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{unit.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-emerald-700">
                    View subdivision <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar onOpenConsultation={() => setIsConsultationOpen(true)} />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultCapacity="Core Agriculture Division"
      />
    </main>
  );
}
