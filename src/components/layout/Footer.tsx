'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, ShieldCheck, ExternalLink, Globe2, Sun, Wrench, PackageCheck, Sprout } from 'lucide-react';
import { COMPANY_INFO, NAV_ITEMS } from '@/data/company';
import { GROUP_COMPANIES } from '@/data/groupCompanies';
import { TdsLogo } from '@/components/ui/TdsLogo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-200 pt-16 sm:pt-20 pb-24 sm:pb-16 border-t border-slate-800 relative overflow-hidden os-grid-pattern">
      {/* Background Subtle Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-slate-800">
          {/* Brand Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-5">
            <TdsLogo size="lg" variant="light" className="drop-shadow-[0_0_15px_rgba(229,169,60,0.2)]" />

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed font-normal">
              {COMPANY_INFO.parentName} is the parent enterprise leading sustainable agriculture, international imports & exports, clean solar energy infrastructure, and agricultural machinery.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[10px] font-mono text-slate-400">
              {COMPANY_INFO.trustPillars.map((pillar) => (
                <span
                  key={pillar}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
                >
                  {pillar}
                </span>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-amber-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>HQ: VIP Road, Awas Vikas, Fatehpur (UP)</span>
            </div>
          </div>

          {/* Business Divisions Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-amber-400">
              Business Divisions
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>
                <Link href="/agriculture" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Sprout className="w-3.5 h-3.5 text-emerald-400" />
                  <span>1. Agriculture</span>
                </Link>
              </li>
              <li>
                <Link href="/imports" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <PackageCheck className="w-3.5 h-3.5 text-blue-400" />
                  <span>2. Imports Division</span>
                </Link>
              </li>
              <li>
                <Link href="/exports" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>3. Exports Division</span>
                </Link>
              </li>
              <li>
                <Link href="/solar" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>4. Solar (tdssolar.in)</span>
                </Link>
              </li>
              <li>
                <Link href="/motors" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-rose-400" />
                  <span>5. TDS Motors</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Subsidiaries & External Portals */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-amber-400">
              Group Companies
            </h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              {GROUP_COMPANIES.map((comp) => (
                <li key={comp.id}>
                  <Link
                    href={comp.internalPath}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{comp.name}</span>
                    <span className="text-[10px] text-slate-600 group-hover:text-amber-400">→</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-800">
                <a
                  href={COMPANY_INFO.solarWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 font-bold"
                >
                  <span>TDS Solar Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <Link href="/directors" className="hover:text-amber-400 transition-colors">
                  Board of Directors
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Contact Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-amber-400">
              Corporate Office
            </h4>
            <div className="space-y-3 text-xs text-slate-400 font-mono">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  {COMPANY_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  {COMPANY_INFO.formattedPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-slate-300 hover:text-amber-400 transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-1">
                <div className="inline-flex items-center gap-1.5 text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ISO & FSSAI Compliant Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} {COMPANY_INFO.parentName}. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-slate-400 text-[11px]">
            <Link href="/directors" className="hover:text-amber-400 transition-colors">
              Board Governance
            </Link>
            <Link href="/group-companies" className="hover:text-amber-400 transition-colors">
              Subsidiary Structure
            </Link>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
