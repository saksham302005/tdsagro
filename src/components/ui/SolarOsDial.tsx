'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SolarOsDialProps {
  value: number; // e.g. 4.82
  maxValue?: number; // e.g. 6.0
  unit: string; // e.g. "kW"
  label: string; // e.g. "CURRENT YIELD"
  sublabel?: string; // e.g. "99.8% Efficiency"
  color?: 'gold' | 'cyan' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const SolarOsDial: React.FC<SolarOsDialProps> = ({
  value,
  maxValue = 10,
  unit,
  label,
  sublabel,
  color = 'gold',
  size = 'md',
  className = '',
}) => {
  const percentage = Math.min(Math.max((value / maxValue) * 100, 5), 100);

  const dimensions = {
    sm: { size: 120, stroke: 6, radius: 48, fontSize: 'text-lg', labelSize: 'text-[9px]' },
    md: { size: 160, stroke: 8, radius: 64, fontSize: 'text-2xl', labelSize: 'text-[10px]' },
    lg: { size: 200, stroke: 10, radius: 82, fontSize: 'text-3xl', labelSize: 'text-xs' },
  }[size];

  const circumference = 2 * Math.PI * dimensions.radius;
  const arcLength = circumference * 0.75;
  const strokeDashoffset = arcLength - (arcLength * percentage) / 100;

  const colorStyles = {
    gold: {
      glow: 'rgba(217, 119, 6, 0.4)',
      stroke: '#D97706',
      track: '#FEF3C7',
      text: 'text-amber-700',
      badge: 'border-amber-200 bg-amber-50 text-amber-800',
    },
    cyan: {
      glow: 'rgba(6, 182, 212, 0.4)',
      stroke: '#0891B2',
      track: '#CFFAFE',
      text: 'text-cyan-700',
      badge: 'border-cyan-200 bg-cyan-50 text-cyan-800',
    },
    emerald: {
      glow: 'rgba(16, 185, 129, 0.4)',
      stroke: '#059669',
      track: '#D1FAE5',
      text: 'text-emerald-700',
      badge: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    },
  }[color];

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${className}`}>
      {/* SVG Arc Gauge */}
      <div className="relative" style={{ width: dimensions.size, height: dimensions.size }}>
        <svg
          className="w-full h-full -rotate-[135deg]"
          viewBox={`0 0 ${dimensions.size} ${dimensions.size}`}
        >
          {/* Background Outer Tick Circle */}
          <circle
            cx={dimensions.size / 2}
            cy={dimensions.size / 2}
            r={dimensions.radius + 6}
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="1"
            strokeDasharray="2 6"
          />

          {/* Background Track Arc */}
          <circle
            cx={dimensions.size / 2}
            cy={dimensions.size / 2}
            r={dimensions.radius}
            fill="none"
            stroke={colorStyles.track}
            strokeWidth={dimensions.stroke}
            strokeDasharray={`${arcLength} ${circumference}`}
            strokeLinecap="round"
          />

          {/* Animated Value Arc */}
          <motion.circle
            cx={dimensions.size / 2}
            cy={dimensions.size / 2}
            r={dimensions.radius}
            fill="none"
            stroke={colorStyles.stroke}
            strokeWidth={dimensions.stroke}
            strokeDasharray={`${arcLength} ${circumference}`}
            initial={{ strokeDashoffset: arcLength }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            strokeLinecap="round"
          />
        </svg>

        {/* Center Digital Readout */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className={`font-mono ${dimensions.labelSize} text-slate-500 tracking-widest uppercase font-bold`}>
            {label}
          </span>
          <div className="flex items-baseline justify-center gap-0.5 mt-0.5">
            <span className={`font-display font-extrabold ${dimensions.fontSize} text-slate-900 tracking-tight`}>
              {value}
            </span>
            <span className="font-mono text-xs text-slate-600 font-bold">{unit}</span>
          </div>
          {sublabel && (
            <span className={`mt-0.5 text-[9px] font-mono px-1.5 py-0.2 rounded-full border ${colorStyles.badge}`}>
              {sublabel}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
