'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
  badge?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  className,
  badge,
}) => {
  const isDark = theme === 'dark';

  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mb-8 sm:mb-12', alignStyles[align], className)}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={cn(
            'inline-flex items-center gap-2 mb-3 rounded-full border px-3 py-1.5',
            isDark
              ? 'border-amber-400/30 bg-amber-400/10'
              : 'border-amber-300 bg-amber-50'
          )}
        >
          <span
            className={cn(
              'h-2 w-2 rounded-full',
              isDark ? 'bg-amber-400' : 'bg-amber-500'
            )}
          />
          <span
            className={cn(
              'text-[11px] sm:text-xs font-mono font-black tracking-[0.18em] uppercase',
              isDark ? 'text-amber-400' : 'text-amber-700'
            )}
          >
            {eyebrow}
          </span>
          {badge && (
            <span
              className={cn(
                'text-[10px] px-2 py-0.5 rounded-full font-mono font-bold tracking-wide uppercase',
                isDark
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30'
                  : 'bg-amber-100 text-amber-800 border border-amber-300'
              )}
            >
              {badge}
            </span>
          )}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={cn(
          'text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.04] uppercase font-display',
          isDark ? 'text-white' : 'text-slate-950'
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={cn(
            'mt-4 text-sm sm:text-base leading-relaxed font-normal max-w-2xl',
            isDark ? 'text-charcoal-300' : 'text-slate-600'
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
