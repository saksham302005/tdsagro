'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  BatteryCharging,
  ShieldCheck,
  TrendingUp,
  Activity,
  ArrowRight,
  Cpu,
  CheckCircle2,
  Leaf,
  Globe2,
} from 'lucide-react';
import { SolarOsDial } from '@/components/ui/SolarOsDial';
import { EnergyWaveform } from '@/components/ui/EnergyWaveform';
import { Button } from '@/components/ui/Button';

interface SystemMode {
  id: string;
  name: string;
  category: string;
  tag: string;
  capacityKw: number;
  outputKw: number;
  maxOutputKw: number;
  efficiency: number;
  dailyYieldKwh: number;
  monthlySavingsInr: string;
  lifetimeSavingsInr: string;
  subsidyInr: string;
  co2OffsetTonnes: number;
  batteryPercent: number;
  gridStatus: string;
}

const SYSTEM_MODES: SystemMode[] = [
  {
    id: 'res-3kw',
    name: '3kW Residential',
    category: 'PM Surya Ghar',
    tag: 'POPULAR',
    capacityKw: 3.0,
    outputKw: 2.84,
    maxOutputKw: 3.3,
    efficiency: 99.4,
    dailyYieldKwh: 14.5,
    monthlySavingsInr: '₹3,600/mo',
    lifetimeSavingsInr: '₹14.2 L',
    subsidyInr: '₹78,000 DBT',
    co2OffsetTonnes: 3.2,
    batteryPercent: 100,
    gridStatus: 'EXPORT ACTIVE',
  },
  {
    id: 'hyb-5kw',
    name: '5kW Hybrid ESS',
    category: 'Home + Battery',
    tag: 'ZERO OUTAGE',
    capacityKw: 5.0,
    outputKw: 4.88,
    maxOutputKw: 5.5,
    efficiency: 99.2,
    dailyYieldKwh: 24.0,
    monthlySavingsInr: '₹6,200/mo',
    lifetimeSavingsInr: '₹24.8 L',
    subsidyInr: '₹78,000 DBT',
    co2OffsetTonnes: 5.4,
    batteryPercent: 94,
    gridStatus: 'PEAK SHAVING',
  },
  {
    id: 'com-10kw',
    name: '10kW Commercial',
    category: 'MSME & Office',
    tag: 'HIGH ROI',
    capacityKw: 10.0,
    outputKw: 9.62,
    maxOutputKw: 11.0,
    efficiency: 99.6,
    dailyYieldKwh: 48.0,
    monthlySavingsInr: '₹13,500/mo',
    lifetimeSavingsInr: '₹48.6 L',
    subsidyInr: '40% Tax Depr.',
    co2OffsetTonnes: 11.2,
    batteryPercent: 100,
    gridStatus: 'HT/LT SYNC',
  },
  {
    id: 'agri-10hp',
    name: '10HP Agri-Pump',
    category: 'PM-KUSUM Agri',
    tag: '90% GRANT',
    capacityKw: 7.5,
    outputKw: 7.20,
    maxOutputKw: 8.0,
    efficiency: 98.9,
    dailyYieldKwh: 36.0,
    monthlySavingsInr: '₹10,000/mo',
    lifetimeSavingsInr: '₹36.0 L',
    subsidyInr: '90% Govt Grant',
    co2OffsetTonnes: 8.9,
    batteryPercent: 100,
    gridStatus: 'VFD OFF-GRID',
  },
];

interface HeroSolarOSProps {
  onOpenConsultation: (capacity?: string) => void;
}

export const HeroSolarOS: React.FC<HeroSolarOSProps> = ({ onOpenConsultation }) => {
  const [activeMode, setActiveMode] = useState<SystemMode>(SYSTEM_MODES[0]);

  return (
    <div className="w-full relative">
      {/* Master Light Milkinside HUD Floating Pod */}
      <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Light Glow Blobs */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top OS Header Status */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="font-mono text-[11px] font-bold text-slate-900 tracking-wider">
              TDS SOLAR OS 3.0
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[10px]">
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
              {activeMode.gridStatus}
            </span>
            <span className="text-slate-400 hidden sm:inline font-semibold">
              NODE: UP-EAST
            </span>
          </div>
        </div>

        {/* Interactive Mode Switcher (Milkinside Light Pill Selector) */}
        <div className="mt-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
            {SYSTEM_MODES.map((mode) => {
              const isActive = mode.id === activeMode.id;
              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode)}
                  className={`p-2 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-[0_4px_12px_rgba(217,119,6,0.25)] ring-1 ring-amber-400'
                      : 'bg-slate-50 border-slate-200/80 text-slate-600 hover:border-slate-300 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[9px] font-mono font-bold">
                      {mode.capacityKw} kW
                    </span>
                    <span className={`text-[8px] font-mono font-bold ${isActive ? 'text-slate-950' : 'text-emerald-700'}`}>
                      {mode.tag}
                    </span>
                  </div>
                  <div className="text-[11px] font-display font-bold truncate mt-1">
                    {mode.name}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Telemetry Core */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mt-4 space-y-4"
          >
            {/* Center Dial & Telemetry Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
              {/* Left Dial (5 cols) */}
              <div className="sm:col-span-5 flex justify-center py-1">
                <SolarOsDial
                  value={activeMode.outputKw}
                  maxValue={activeMode.maxOutputKw}
                  unit="kW"
                  label="INSTANT OUTPUT"
                  sublabel={`${activeMode.efficiency}% EFF`}
                  color="gold"
                  size="md"
                />
              </div>

              {/* Right Telemetry Cards (7 cols) */}
              <div className="sm:col-span-7 space-y-2">
                {/* Stat 1: Monthly Savings */}
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      Monthly Bill Offset
                    </span>
                    <span className="text-base font-display font-extrabold text-slate-900">
                      {activeMode.monthlySavingsInr}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-wider block font-bold">
                      25-Yr Net ROI
                    </span>
                    <span className="text-sm font-display font-bold text-amber-600">
                      {activeMode.lifetimeSavingsInr}
                    </span>
                  </div>
                </div>

                {/* Stat 2: Government Subsidy */}
                <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-amber-800 uppercase tracking-wider font-bold block">
                      Govt DBT Subsidy
                    </span>
                    <span className="text-sm font-display font-bold text-slate-900">
                      {activeMode.subsidyInr}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
                    VERIFIED
                  </span>
                </div>

                {/* Stat 3: Battery & Eco Footprint */}
                <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-700">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center gap-1.5 font-medium">
                    <BatteryCharging className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>ESS: {activeMode.batteryPercent}%</span>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-200/80 flex items-center gap-1.5 font-medium">
                    <Leaf className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>-{activeMode.co2OffsetTonnes}T CO₂/yr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Frequency Oscilloscope */}
            <EnergyWaveform
              intensity={activeMode.outputKw / activeMode.maxOutputKw}
              height={40}
              label="SOLAR INVERTER FREQUENCY"
              statusText="50.02 Hz • PURE SINE"
            />

            {/* Action CTA inside the Widget */}
            <Button
              variant="primary"
              size="md"
              onClick={() => onOpenConsultation(`${activeMode.capacityKw}kW ${activeMode.name}`)}
              className="w-full font-bold shadow-[0_4px_16px_rgba(217,119,6,0.3)] group font-mono text-xs"
              icon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            >
              Configure {activeMode.capacityKw}kW Solar System
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
