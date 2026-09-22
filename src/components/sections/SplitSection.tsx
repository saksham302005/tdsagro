'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Home, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface SplitSectionProps {
  onOpenConsultation: (type: string) => void;
}

export const SplitSection: React.FC<SplitSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="bg-forest-950 text-solar-cream overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT: HOME SOLAR */}
        <div className="relative min-h-[500px] sm:min-h-[580px] p-8 sm:p-14 lg:p-20 flex flex-col justify-between overflow-hidden group border-b lg:border-b-0 lg:border-r border-forest-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/rooftop_solar.jpg"
            className="absolute inset-0 h-full w-full object-cover object-left transition-transform duration-1000 ease-out group-hover:scale-105"
            aria-label="Residential rooftop solar installation"
          >
            <source src="/home%20solar.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/10 group-hover:via-forest-950/45 transition-colors" />

          {/* Top Category Badge */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900/90 border border-solar-gold/30 text-solar-gold text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
              <Home className="w-3.5 h-3.5" />
              <span>Residential Rooftop</span>
            </div>
          </div>

          {/* Content Body */}
          <div className="relative z-10 space-y-4 max-w-lg mt-auto pt-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
              Home Solar
            </h3>
            <p className="text-base sm:text-lg text-charcoal-300 leading-relaxed">
              Turn your rooftop into a cleaner, smarter source of energy. Maximize PM Surya Ghar government subsidies and drastically reduce your monthly electricity bills.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenConsultation('Residential Home Solar')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Home Solar
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT: BUSINESS SOLAR */}
        <div className="relative min-h-[500px] sm:min-h-[580px] p-8 sm:p-14 lg:p-20 flex flex-col justify-between overflow-hidden group">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/commercial_solar.jpg"
            className="absolute inset-0 h-full w-full object-cover object-right transition-transform duration-1000 ease-out group-hover:scale-105"
            aria-label="Commercial and industrial solar installation"
          >
            <source src="/business-solar.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/55 to-forest-950/10 group-hover:via-forest-950/45 transition-colors" />

          {/* Top Category Badge */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-900/90 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-widest uppercase backdrop-blur-md">
              <Building2 className="w-3.5 h-3.5" />
              <span>Commercial & Industrial</span>
            </div>
          </div>

          {/* Content Body */}
          <div className="relative z-10 space-y-4 max-w-lg mt-auto pt-16">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display uppercase tracking-tight text-white leading-tight">
              Business Solar
            </h3>
            <p className="text-base sm:text-lg text-charcoal-300 leading-relaxed">
              Build a more efficient energy strategy for your business. Cut daytime operational overhead, stabilize power reliability, and claim accelerated tax depreciation.
            </p>

            <div className="pt-2">
              <Button
                variant="white"
                size="md"
                onClick={() => onOpenConsultation('Commercial Business Solar')}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Explore Commercial Solar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
