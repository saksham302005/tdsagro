'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Shield } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LEADERSHIP_TEAM } from '@/data/leadership';

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="py-20 sm:py-28 bg-white text-slate-900 relative os-grid-pattern overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="TDS SOLAR OS • CORPORATE GOVERNANCE"
          title="EXECUTIVE LEADERSHIP & BOARD."
          description="Experienced directors and technical advisors guiding TDS Agro Producer Company Limited and TDS Solar Energy’s renewable operations."
          theme="light"
          align="left"
        />

        {/* 5 Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-amber-400 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Monogram Badge / Typography Avatar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white text-amber-700 flex items-center justify-center font-display font-extrabold text-lg tracking-wider border border-slate-200 shadow-sm group-hover:scale-105 transition-transform">
                    {leader.initials}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-mono uppercase font-bold tracking-widest text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-200">
                    <UserCheck className="w-3 h-3" />
                    <span>DIRECTOR BOARD</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display uppercase tracking-tight text-slate-950 group-hover:text-amber-600 transition-colors">
                  {leader.name}
                </h3>

                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 block mt-1">
                  {leader.role}
                </span>

                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block mt-0.5">
                  {leader.department}
                </span>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-200/60 font-normal">
                  {leader.focus}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono text-slate-500 font-bold">
                <span>TDS Solar Energy</span>
                <span className="text-slate-900">Uttar Pradesh, India</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
