'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Sprout,
  Globe2,
  Sun,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface AgroHeroProps {
  onOpenConsultation?: (division?: string) => void;
}

const HERO_DIVISIONS = [
  {
    id: 'agriculture',
    number: '01',
    name: 'Agriculture',
    subtitle: 'Core Agriculture & Farm Solutions',
    desc: 'TDS Agro Producer Company Limited is the parent enterprise, focused on farming, crops, farmer partnerships, sustainable production and agro solutions.',
    path: '/agriculture',
    tag: 'PARENT COMPANY',
    stats: [
      { label: 'Farmer Partners', value: '15,000+' },
      { label: 'Farmland Network', value: '25,000+ Acres' },
      { label: 'Core Focus', value: 'Agriculture' },
    ],
    bgVideo: '/solar%20agro%20.mp4',
    bgImage: '/agro-procesing.jpg',
    icon: Sprout,
  },
  {
    id: 'imports',
    number: '02',
    name: 'Imports',
    subtitle: 'Inverters, Lighting, Furniture & Electronics',
    desc: 'The Import business division covers inverters, lighting products, furniture and electronic equipment sourced for dependable commercial and agricultural use.',
    path: '/imports',
    tag: 'BUSINESS DIVISION',
    stats: [
      { label: 'Product Lines', value: '450+ SKU' },
      { label: 'Quality Standard', value: 'ISO 9001' },
      { label: 'Warranty', value: 'Up to 5 Yrs' },
    ],
    bgVideo: '/business-solar.mp4',
    bgImage: '/battery-backup.jpg',
    icon: Wrench,
  },
  {
    id: 'exports',
    number: '03',
    name: 'Exports',
    subtitle: 'Agricultural Crops, Produce & Bulk Supply',
    desc: 'The Agriculture Export division connects Indian crops and produce with international markets through certified bulk supply and export logistics.',
    path: '/exports',
    tag: 'BUSINESS DIVISION',
    stats: [
      { label: 'Export Markets', value: '12+ Nations' },
      { label: 'Annual Volume', value: '50,000 MT' },
      { label: 'Certification', value: 'APEDA' },
    ],
    bgVideo: '/home%20solar.mp4',
    bgImage: '/ware-house_disribution.jpg',
    icon: Globe2,
  },
  {
    id: 'solar',
    number: '04',
    name: 'Solar',
    subtitle: 'Rooftop & Commercial Solar EPC',
    desc: 'The Solar business division delivers rooftop and commercial solar systems and connects directly with the TDS Solar portal at tdssolar.in.',
    path: '/solar',
    tag: 'BUSINESS DIVISION',
    stats: [
      { label: 'Installed Capacity', value: '500+ Projects' },
      { label: 'Performance Warranty', value: '25 Years' },
      { label: 'Portal', value: 'tdssolar.in' },
    ],
    bgVideo: '/solar_background.mp4',
    bgImage: '/rooftop_solar.jpg',
    icon: Sun,
  },
  {
    id: 'motors',
    number: '05',
    name: 'TDS Motors',
    subtitle: 'Agricultural Equipment & Machinery',
    desc: 'The TDS Motors business division focuses on tractors, harvesters, rotavators, power tillers and modern agricultural machinery.',
    path: '/motors',
    tag: 'BUSINESS DIVISION',
    stats: [
      { label: 'Machinery Models', value: '28+ Units' },
      { label: 'Service Hubs', value: 'Pan-UP Hubs' },
      { label: 'Warranty Support', value: 'Up to 5 Yrs' },
    ],
    bgVideo: '/tds_motors.mp4',
    bgImage: '/business-solar.jpg',
    icon: Wrench,
  },
];

export const AgroHero: React.FC<AgroHeroProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState(0);
  const currentDiv = HERO_DIVISIONS[activeTab];

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden">
      {/* Master Hero Stage Card */}
      <div className="relative min-h-[100svh] overflow-hidden bg-slate-950 text-white flex flex-col justify-between p-6 pt-24 sm:p-10 sm:pt-28 lg:p-14 lg:pt-32">
        {/* Background Visual Layer */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentDiv.id}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full"
            >
              {currentDiv.bgVideo.endsWith('.mp4') ? (
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={currentDiv.bgImage}
                  className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.03] saturate-[1.08]"
                >
                  <source src={currentDiv.bgVideo} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={currentDiv.bgVideo}
                  alt={`${currentDiv.name} division background`}
                  className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.03] saturate-[1.08]"
                />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Seamless Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/35 to-slate-950/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent" />
          <div className="absolute inset-0 os-grid-pattern opacity-15" />
        </div>

        {/* Center Main Stage Content */}
        <div className="relative z-10 py-6 sm:py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading & Division Info (7 Cols) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentDiv.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="space-y-3"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono font-bold tracking-widest uppercase backdrop-blur-md"
                  style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  <currentDiv.icon className="w-3.5 h-3.5 text-amber-400" />
                  <span>Division {currentDiv.number}: {currentDiv.name}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-[1.05]">
                  <>
                    {currentDiv.name} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-white">
                      {currentDiv.subtitle}
                    </span>
                  </>
                </h1>

                <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed font-normal">
                  {currentDiv.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link href={currentDiv.path}>
                <Button
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="font-bold shadow-lg"
                >
                  Explore {currentDiv.name} Division
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="md"
                onClick={() =>
                  onOpenConsultation ? onOpenConsultation(currentDiv.name) : (window.location.href = '/#contact')
                }
                className="border border-white/20 text-white hover:bg-white/10 text-xs font-bold font-mono"
              >
                Inquire Directly
              </Button>
            </div>
          </div>

        </div>

        {/* Bottom Interactive Vertical Switcher (Tabs) */}
        <div className="relative z-10 pt-4 border-t border-white/10">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-bold mb-2.5">
            SELECT PARENT COMPANY / GROUP SUBSIDIARY:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
            {HERO_DIVISIONS.map((div, idx) => {
              const isSelected = idx === activeTab;
              const IconComp = div.icon;
              return (
                <button
                  key={div.id}
                  onClick={() => setActiveTab(idx)}
                  className={`p-2.5 rounded-xl text-left transition-all duration-200 border flex items-center gap-2.5 group ${
                    isSelected
                      ? 'bg-amber-500 text-slate-950 border-amber-400 font-bold shadow-lg scale-[1.02]'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-slate-950 text-amber-400' : 'bg-white/10 text-slate-300 group-hover:text-amber-300'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] font-mono block opacity-75">
                      DIV {div.number}
                    </span>
                    <span className="text-xs font-display font-bold truncate block">
                      {div.name}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
