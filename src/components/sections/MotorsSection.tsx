'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Wrench,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Gauge,
  Zap,
  Cog,
  Fuel,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { MOTOR_EQUIPMENT, MOTORS_HIGHLIGHTS } from '@/data/motors';
import { Button } from '@/components/ui/Button';

interface MotorsSectionProps {
  onOpenConsultation?: (equipment?: string) => void;
}

export const MotorsSection: React.FC<MotorsSectionProps> = ({ onOpenConsultation }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const categories = ['ALL', 'Tractors', 'Harvesters', 'Rotavators & Tillers', 'Planting & Leveling'];

  const filteredEquipment =
    selectedFilter === 'ALL'
      ? MOTOR_EQUIPMENT
      : MOTOR_EQUIPMENT.filter((eq) => eq.category === selectedFilter);

  return (
    <section id="motors" className="py-20 sm:py-28 bg-[#FAFBF9] text-slate-900 relative overflow-hidden border-t border-slate-200/60 os-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <SectionHeading
            eyebrow="TDS AGRO PRODUCER COMPANY LIMITED • SUBSIDIARY DIVISION 05"
            title="TDS MOTORS • FARM MACHINERY."
            description="High-torque multi-terrain agricultural tractors, combine harvesters, heavy-duty rotavators, power tillers, and precision laser levelers built for the modern Indian farm."
            theme="light"
            align="left"
            className="mb-0"
          />

          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-rose-800 bg-rose-50 border border-rose-200 px-4 py-2 rounded-full shadow-sm">
            <Wrench className="w-4 h-4 text-rose-600" />
            <span className="font-bold">HEAVY-DUTY AGRICULTURAL MECHANIZATION</span>
          </div>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {MOTORS_HIGHLIGHTS.map((hl, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm"
            >
              <h4 className="text-sm font-bold font-display uppercase tracking-tight text-slate-900 mb-1 flex items-center gap-2">
                <Cog className="w-4 h-4 text-rose-600" />
                <span>{hl.title}</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {hl.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all ${
                selectedFilter === cat
                  ? 'bg-rose-600 text-white shadow-md scale-[1.02]'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Machinery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredEquipment.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-rose-400 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Image banner */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-widest px-2.5 py-1 rounded-md bg-white/95 text-slate-900 backdrop-blur-md shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-rose-300">
                    <span className="font-bold flex items-center gap-1">
                      <Gauge className="w-3.5 h-3.5 text-rose-400" />
                      {item.powerRating}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold font-display uppercase tracking-tight text-slate-950 group-hover:text-rose-700 transition-colors">
                      {item.name}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Specs Box */}
                    <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs font-mono">
                      <div className="flex items-center gap-1.5 text-slate-700">
                        <Fuel className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                        <span>{item.fuelEfficiency}</span>
                      </div>
                      {item.workingWidth && (
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Cog className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                          <span>{item.workingWidth}</span>
                        </div>
                      )}
                    </div>

                    {/* Key Features */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-1">
                        KEY MECHANISMS:
                      </span>
                      {item.keyFeatures.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() =>
                        onOpenConsultation ? onOpenConsultation(`Machinery Quote: ${item.name}`) : (window.location.href = '/#contact')
                      }
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                      className="text-xs font-bold"
                    >
                      Book Machinery Demo
                    </Button>

                    <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">
                      {item.warrantyYears}-YR WARRANTY
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
