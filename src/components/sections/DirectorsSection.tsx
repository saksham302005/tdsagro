'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserCheck,
  Shield,
  Upload,
  Image as ImageIcon,
  Quote,
  Building2,
  Award,
  CheckCircle2,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { LEADERSHIP_TEAM, GOVERNANCE_PILLARS } from '@/data/leadership';

export const DirectorsSection: React.FC = () => {
  // Local state allowing clients to preview uploaded photos in real-time
  const [directorPhotos, setDirectorPhotos] = useState<Record<string, string>>({});

  const handlePhotoUpload = (directorId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setDirectorPhotos((prev) => ({ ...prev, [directorId]: url }));
    }
  };

  return (
    <section id="directors" className="py-20 sm:py-28 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="TDS AGRO PRODUCER COMPANY LIMITED • BOARD OF DIRECTORS"
            title="EXECUTIVE LEADERSHIP & GOVERNANCE."
            description="Our Board of Directors brings decades of expertise in corporate stewardship, agricultural innovation, renewable engineering, and global trade operations."
            theme="light"
            align="left"
            className="mb-0"
          />

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-amber-800 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full shadow-sm">
            <Shield className="w-4 h-4 text-amber-600" />
            <span className="font-bold">MCA REGISTERED CORPORATE GOVERNANCE</span>
          </div>
        </div>

        {/* Governance Pillars Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {GOVERNANCE_PILLARS.map((gp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm"
            >
              <h4 className="text-sm font-bold font-display uppercase tracking-tight text-slate-900 mb-1 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{gp.title}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {gp.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 5 Directors Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {LEADERSHIP_TEAM.map((director, idx) => {
            const photo = directorPhotos[director.id] || director.photoUrl;

            return (
              <motion.div
                key={director.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-slate-50/90 rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Photo / Monogram Portrait Header */}
                  <div className="relative mb-6 flex items-start justify-between">
                    <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white border-2 border-slate-200 shadow-md flex items-center justify-center group-hover:scale-105 transition-transform">
                      {photo ? (
                        <img
                          src={photo}
                          alt={director.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-100 to-amber-50 text-amber-800">
                          <span className="text-2xl font-black font-display tracking-widest">
                            {director.initials}
                          </span>
                          <span className="text-[9px] font-mono text-slate-400 uppercase mt-1">
                            Photo Slot
                          </span>
                        </div>
                      )}

                      {/* Photo upload trigger */}
                      <label
                        className="absolute inset-0 bg-slate-950/70 text-white flex flex-col items-center justify-center opacity-0 hover:opacity-100 cursor-pointer transition-opacity text-[10px] font-mono font-bold p-1 text-center"
                        title="Click to upload/preview Director photo"
                      >
                        <Upload className="w-4 h-4 mb-0.5 text-amber-300" />
                        <span>Upload Photo</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => handlePhotoUpload(director.id, e)}
                        />
                      </label>
                    </div>

                    <div className="flex flex-col items-end gap-1">
                      <div className="flex items-center gap-1 text-[10px] font-mono uppercase font-bold tracking-widest text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-md border border-emerald-200">
                        <UserCheck className="w-3 h-3" />
                        <span>DIRECTOR</span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500">
                        {director.experienceYears}
                      </span>
                    </div>
                  </div>

                  {/* Director Identity */}
                  <h3 className="text-xl font-black font-display uppercase tracking-tight text-slate-900 group-hover:text-amber-600 transition-colors">
                    {director.name}
                  </h3>

                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700 block mt-1">
                    {director.role}
                  </span>

                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block mt-0.5">
                    {director.department}
                  </span>

                  {/* Director Focus Bio */}
                  <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-3 border-t border-slate-200/60">
                    {director.focus}
                  </p>

                  {/* Quote statement */}
                  {director.quote && (
                    <div className="mt-4 p-3.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 italic relative">
                      <Quote className="w-3.5 h-3.5 text-amber-500 absolute -top-1.5 -left-1.5" />
                      &ldquo;{director.quote}&rdquo;
                    </div>
                  )}
                </div>

                {/* Footer bar */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono text-slate-500 font-bold">
                  <span>TDS Agro Producer Co. Ltd.</span>
                  <span className="text-slate-900">Corporate Board</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Upload info banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ImageIcon className="w-5 h-5 text-amber-600 shrink-0" />
            <span>
              <strong>Note on Director Photos:</strong> The layout includes dedicated high-resolution photo slots for every director. You can test uploading photos by hovering over the placeholder slots, or provide the image files to be permanently attached.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
