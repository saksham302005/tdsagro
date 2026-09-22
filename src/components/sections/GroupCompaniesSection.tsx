'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sprout,
  Sun,
  PackageCheck,
  Globe2,
  Wrench,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Building2,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GROUP_COMPANIES } from '@/data/groupCompanies';
import { Button } from '@/components/ui/Button';

export const GroupCompaniesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-emerald-500" />;
      case 'Sun':
        return <Sun className="w-6 h-6 text-amber-500" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-blue-500" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-emerald-500" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-rose-500" />;
      default:
        return <Building2 className="w-6 h-6 text-slate-500" />;
    }
  };

  return (
    <section id="group-companies" className="py-20 sm:py-28 bg-[#FAFBF9] text-slate-900 relative overflow-hidden border-t border-slate-200/70 os-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="TDS GROUP • CONNECTED COMPANIES"
            title="GROUP COMPANIES & SUBSIDIARIES."
            description="Explore the five connected group companies operating under the TDS Agro parent company. TDS Agro remains the parent and is intentionally excluded from this directory."
            theme="light"
            align="left"
            className="mb-0"
          />

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-slate-600 bg-white border border-slate-200 px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold">5 CONNECTED GROUP COMPANIES</span>
          </div>
        </div>

        {/* Connected group companies, excluding the TDS Agro parent */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {GROUP_COMPANIES.map((comp, idx) => (
            <motion.div
              key={comp.id}
              id={comp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/10 transition-colors pointer-events-none" />

              <div>
                {/* Top Badge & Established Year */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform shadow-sm">
                      {getIcon(comp.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-slate-500 block">
                        {comp.divisionType} 0{idx + 1}
                      </span>
                      <h3 className="text-xl font-black font-display text-slate-900 group-hover:text-amber-600 transition-colors">
                        {comp.name}
                      </h3>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${comp.badgeColor}`}>
                    {comp.shortTag}
                  </span>
                </div>

                {/* Headline & Description */}
                <div className="py-5 space-y-3">
                  <h4 className="text-sm font-bold font-display text-slate-800">
                    {comp.headline}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {comp.description}
                  </p>
                </div>

                {/* Key Product Offerings */}
                <div className="py-4 border-t border-slate-100">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-2.5">
                    CORE SPECIALIZATIONS & PRODUCTS
                  </span>
                  <ul className="space-y-1.5">
                    {comp.keyProducts.map((prod, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{prod}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-slate-100 bg-slate-50/80 -mx-7 sm:-mx-9 px-7 sm:px-9">
                  {comp.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-[9px] font-mono text-slate-500 uppercase block font-semibold">
                        {m.label}
                      </span>
                      <span className="text-sm font-black font-display text-slate-900 mt-0.5 block">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-6 flex items-center justify-between gap-3 border-t border-slate-100">
                <Link href={comp.internalPath} className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                    className="font-bold shadow-sm w-full sm:w-auto text-xs"
                  >
                    Explore {comp.name}
                  </Button>
                </Link>

                {comp.externalUrl ? (
                  <a
                    href={comp.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-600 hover:text-amber-700 bg-amber-50 px-3 py-1.5 rounded-xl border border-amber-200 transition-colors"
                  >
                    <span>Visit Live Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500 font-semibold hidden sm:inline">
                    TDS Agro Group Division
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corporate Reference Info Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold font-display uppercase tracking-wider text-slate-900">
                CORPORATE GROUP HIERARCHY NOTICE
              </h4>
              <p className="text-xs text-slate-600">
                TDS Agro Producer Company Limited is the Parent Holding Enterprise. Each subsidiary operates specialized facilities under unified governance.
              </p>
            </div>
          </div>

          <Link href="/group-companies">
            <Button variant="ghost" size="sm" className="border border-slate-200 text-xs font-mono font-bold whitespace-nowrap">
              View Group Companies Hub →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
