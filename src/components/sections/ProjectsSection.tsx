'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PROJECTS } from '@/data/projects';
import { ProjectItem } from '@/types';
import { ProjectDetailModal } from '@/components/ui/ProjectDetailModal';

export const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'ALL' | 'RESIDENTIAL' | 'COMMERCIAL' | 'ROOFTOP'>('ALL');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white text-slate-900 relative os-grid-pattern overflow-hidden border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="TDS SOLAR OS • FIELD COMMISSIONING LOGS"
            title="VERIFIED SOLAR DEPLOYMENTS."
            description="A live record of engineered residential rooftops, commercial microgrids, and agricultural solar pump arrays across Uttar Pradesh. Click any deployment to inspect full technical blueprints, output telemetry, and apply."
            theme="light"
            align="left"
            className="mb-0"
          />

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {(['ALL', 'RESIDENTIAL', 'COMMERCIAL', 'ROOFTOP'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all border cursor-pointer ${
                  filter === cat
                    ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-sm'
                    : 'bg-slate-100 text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View technical blueprint and apply for ${project.title}`}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:border-amber-500 transition-all duration-300 flex flex-col group cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {/* Image Frame */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 text-[10px] font-mono uppercase font-bold tracking-widest px-2.5 py-1 rounded-md bg-white/95 text-slate-900 shadow-sm backdrop-blur-md">
                    {project.category}
                  </span>

                  {/* Online Status Pill */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-[10px] font-mono text-emerald-800 bg-white/95 px-2.5 py-1 rounded-full shadow-sm font-bold backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>ONLINE</span>
                  </div>

                  {/* Hover Action Badge on Image Top-Right */}
                  <div className="absolute bottom-3 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase font-bold text-slate-950 bg-amber-400 px-2.5 py-1 rounded-full shadow-md">
                      <span>Inspect Specs</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>

                  {/* Bottom Capacity Tag */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-[10px] font-mono font-bold text-amber-300 bg-slate-950/70 px-2 py-0.5 rounded-md backdrop-blur-xs border border-amber-400/20">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>{project.capacity}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-amber-700 font-mono font-bold mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    <h3 className="text-lg font-bold font-display uppercase tracking-tight text-slate-950 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 font-normal">
                      {project.summary}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                      <span className="truncate pr-2">{project.type}</span>
                      <span className="text-emerald-700 font-extrabold flex items-center gap-1 shrink-0">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        COMMISSIONED
                      </span>
                    </div>

                    {/* Interactive CTA Bar on Card Bottom */}
                    <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-amber-700 group-hover:text-amber-600 uppercase tracking-wider">
                      <span className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                        <span>View Specs & Apply</span>
                      </span>
                      <span className="inline-block transform group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Blueprint & Application Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
