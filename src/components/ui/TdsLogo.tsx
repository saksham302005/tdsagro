'use client';

import React from 'react';

interface TdsLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'full';
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const TdsLogo: React.FC<TdsLogoProps> = ({
  className = '',
  variant = 'full',
  showText = true,
  size = 'md',
}) => {
  const sizeMap = {
    sm: { icon: 32, textClass: 'text-xs', subClass: 'text-[7px]' },
    md: { icon: 42, textClass: 'text-base', subClass: 'text-[9px]' },
    lg: { icon: 54, textClass: 'text-xl', subClass: 'text-[10px]' },
    xl: { icon: 68, textClass: 'text-2xl', subClass: 'text-xs' },
  };

  const isLight = variant === 'light'; // on dark bg, text is white/cream

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src="/tds-logo.png"
          alt="TDS AGRO logo"
          width={sizeMap[size].icon}
          height={sizeMap[size].icon}
          style={{ width: sizeMap[size].icon, height: sizeMap[size].icon }}
          className="block object-contain transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-black font-display tracking-wider uppercase font-sans ${sizeMap[size].textClass} ${
                isLight ? 'text-white' : 'text-forest-950'
              }`}
            >
              TDS AGRO
            </span>
          </div>

          <div className="flex items-center gap-1 mt-1">
            <span className="h-[1px] w-2 bg-solar-gold" />
            <span
              className={`font-bold tracking-[0.22em] uppercase ${sizeMap[size].subClass} ${
                isLight ? 'text-solar-gold' : 'text-forest-700'
              }`}
            >
              Solar & Sustainable Energy
            </span>
            <span className="h-[1px] w-2 bg-solar-gold" />
          </div>
        </div>
      )}
    </div>
  );
};
