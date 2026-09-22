'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const SolarGlow: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 select-none">
      {/* Soft Top Sun Aura */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.45, 0.35],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[500px] rounded-full bg-gradient-to-b from-solar-gold/25 via-solar-amber/10 to-transparent blur-[90px]"
      />

      {/* Gentle Moving Ray of Light */}
      <motion.div
        animate={{
          x: ['-20%', '20%', '-20%'],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-1/4 w-[50vw] h-[80vh] bg-gradient-to-tr from-transparent via-emerald-500/10 to-solar-gold/15 rotate-12 blur-3xl transform-gpu"
      />

      {/* Subtle Linear Energy Stream */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20 stroke-solar-gold/30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="solar-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E5A93C" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0B2D1E" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1="10%"
          y1="0%"
          x2="90%"
          y2="100%"
          stroke="url(#solar-line-grad)"
          strokeWidth="1"
          strokeDasharray="8 12"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
};
