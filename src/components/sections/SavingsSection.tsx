'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, CheckCircle2, AlertCircle, Info, Zap, Coins, TrendingUp, Sliders } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { PRICING_TIERS, PRICING_DISCLAIMERS } from '@/data/pricing';
import { formatINR } from '@/lib/utils';
import { SolarOsDial } from '@/components/ui/SolarOsDial';

interface SavingsSectionProps {
  onOpenConsultation: (capacity?: string) => void;
}

export const SavingsSection: React.FC<SavingsSectionProps> = ({ onOpenConsultation }) => {
  const [capacity, setCapacity] = useState<number>(3);

  // Approximate mathematical model for dynamic slider
  const calcGross = capacity * 60000;
  const calcSubsidy = capacity === 1 ? 30000 : capacity === 2 ? 60000 : 78000;
  const calcNet = calcGross - calcSubsidy;
  const calcMonthlyUnits = capacity * 130;
  const calcAnnualSavings = calcMonthlyUnits * 12 * 7.5; // ~Rs 7.5/unit average UP tariff
  const calcLifetimeSavings = calcAnnualSavings * 25;
  const calcRoofSpace = capacity * 85;

  return (
    <section id="savings" className="py-20 sm:py-28 bg-[#FAFBF9] text-slate-900 relative overflow-hidden os-grid-pattern border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TDS SOLAR OS • ROI & SUBSIDY COMPUTATION ENGINE"
          title="ACCELERATE YOUR FINANCIAL RETURN."
          description="Simulate real-time generation metrics, PM Surya Ghar DBT allocations, and 25-year lifetime capital returns for residential & commercial properties."
          theme="light"
          align="left"
        />

        {/* Interactive Solar Estimator Sandbox (Light Glass Console) */}
        <div className="mb-16 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-[0_15px_40px_rgba(0,0,0,0.05)] relative">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-700 text-xs font-mono uppercase tracking-widest font-bold mb-2">
                <Calculator className="w-4 h-4 text-amber-600" />
                <span>DYNAMIC TELEMETRY SIZING CONSOLE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display uppercase text-slate-950 tracking-tight">
                Simulated Rooftop Capacity: <span className="text-amber-600">{capacity} kW System</span>
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <Button
                variant="primary"
                size="md"
                onClick={() => onOpenConsultation(`${capacity} kW Solar System`)}
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-sm font-bold font-mono text-xs"
              >
                Claim ₹{calcSubsidy.toLocaleString('en-IN')} Subsidy Quote
              </Button>
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="py-8">
            <div className="flex justify-between items-center text-xs font-mono text-slate-500 uppercase tracking-wider mb-4 font-bold">
              <span className="flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-cyan-600" />
                ADJUST SYSTEM CAPACITY
              </span>
              <span className="text-amber-800 font-bold px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200">
                ACTIVE LOAD: {capacity} kW
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-3 px-1 font-bold">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <span
                  key={num}
                  className={`cursor-pointer transition-colors ${
                    num === capacity ? 'text-amber-600 font-extrabold scale-110' : 'hover:text-slate-950'
                  }`}
                  onClick={() => setCapacity(num)}
                >
                  {num}kW
                </span>
              ))}
            </div>
          </div>

          {/* Dynamic Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {/* Metric 1: Benchmark Gross */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                Gross Benchmark Cost
              </div>
              <div className="text-2xl sm:text-3xl font-black font-display text-slate-900 mt-2">
                {formatINR(calcGross)}
              </div>
              <div className="text-[10px] font-mono text-slate-500 mt-2 font-medium">MNRE Approved Cap</div>
            </div>

            {/* Metric 2: Government DBT Subsidy */}
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col justify-between">
              <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold flex items-center justify-between">
                <span>Direct DBT Subsidy</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
              <div className="text-2xl sm:text-3xl font-black font-display text-emerald-700 mt-2">
                {formatINR(calcSubsidy)}
              </div>
              <div className="text-[10px] font-mono text-emerald-800 mt-2 font-medium">PM Surya Ghar Credit</div>
            </div>

            {/* Metric 3: Net Consumer Outlay */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col justify-between">
              <div className="text-[10px] font-mono uppercase tracking-wider text-amber-800 font-bold">
                Net Consumer Outlay
              </div>
              <div className="text-2xl sm:text-3xl font-black font-display text-amber-700 mt-2">
                {formatINR(calcNet)}
              </div>
              <div className="text-[10px] font-mono text-amber-800 mt-2 font-medium">Post-Subsidy Cost</div>
            </div>

            {/* Metric 4: Annual Energy Savings */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between">
              <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                Est. Annual Yield Savings
              </div>
              <div className="text-2xl sm:text-3xl font-black font-display text-slate-900 mt-2">
                {formatINR(calcAnnualSavings)}
              </div>
              <div className="text-[10px] font-mono text-slate-500 mt-2 font-medium">~{calcMonthlyUnits} Units / Month</div>
            </div>
          </div>
        </div>

        {/* Existing Website Verified Pricing Comparison Table */}
        <div className="min-w-0 space-y-6 overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black font-display uppercase tracking-wider text-slate-950">
              Standard Rooftop Benchmark Tiers
            </h3>
            <span className="text-xs font-mono text-amber-700 font-bold uppercase tracking-wider hidden sm:block">
              MNRE NATIONAL PORTAL BENCHMARKS
            </span>
          </div>

          <div className="grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.capacityKw}
                className="min-w-0 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all hover:border-amber-400 hover:shadow-lg sm:p-6 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-widest font-bold px-2.5 py-1 rounded-md bg-amber-100 text-amber-800 border border-amber-300">
                      {tier.capacityKw} kW System
                    </span>
                    <Zap className="w-4 h-4 text-amber-600" />
                  </div>

                  <div className="space-y-1">
                    <div className="text-xs font-mono text-slate-500 font-semibold">Total System Cost</div>
                    <div className="text-2xl font-black font-display text-slate-950">
                      {formatINR(tier.grossPrice)}
                    </div>
                  </div>

                  <div className="mt-3 p-3 rounded-xl bg-emerald-50 border border-emerald-200 space-y-0.5">
                    <div className="text-[10px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                      PM Surya Ghar Subsidy
                    </div>
                    <div className="text-lg font-bold font-display text-emerald-700">
                      {formatINR(tier.subsidy)}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-xs font-mono text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Net Estimated Cost:</span>
                      <span className="font-bold text-amber-700">{formatINR(tier.netPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Monthly Yield:</span>
                      <span className="font-bold text-slate-900">{tier.monthlyUnitEst}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Roof Area Req:</span>
                      <span className="font-bold text-slate-900">{tier.spaceRequiredSqFt}</span>
                    </div>
                  </div>

                  <p className="mt-4 text-[11px] text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                    {tier.recommendedFor}
                  </p>
                </div>

                <div className="mt-6 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-slate-300 text-slate-800 hover:border-amber-500 hover:text-amber-700 font-mono text-xs font-bold"
                    onClick={() => onOpenConsultation(`${tier.capacityKw} kW Rooftop System`)}
                  >
                    Select {tier.capacityKw} kW Tier
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Transparency & Disclaimers Box */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs text-slate-600 space-y-2">
          <div className="flex items-center gap-2 text-amber-700 font-mono font-bold uppercase tracking-wider text-[11px]">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Official Government Compliance & Verification Disclaimers</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-slate-500 font-mono text-[11px] leading-relaxed pl-1">
            {PRICING_DISCLAIMERS.map((disc, i) => (
              <li key={i}>{disc}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
