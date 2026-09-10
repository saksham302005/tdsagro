'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'forest' | 'outline' | 'ghost' | 'white' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  children,
  className,
  asAnchor = false,
  href,
  ...props
}) => {
  const baseStyles =
    'relative inline-flex items-center justify-center font-medium tracking-wider uppercase transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-xs sm:text-sm px-6 py-3.5 gap-2.5',
    lg: 'text-sm sm:text-base px-8 py-4 gap-3 font-semibold tracking-widest',
  };

  const variantStyles = {
    primary:
      'bg-solar-gold text-forest-950 hover:bg-solar-amber shadow-sm hover:shadow-md hover:shadow-solar-gold/20 focus:ring-solar-gold',
    forest:
      'bg-forest-900 text-solar-cream hover:bg-forest-800 border border-forest-700/50 shadow-sm hover:shadow-forest-900/30 focus:ring-forest-700',
    gold:
      'bg-gradient-to-r from-solar-gold to-solar-amber text-forest-950 font-bold hover:brightness-105 shadow-md focus:ring-solar-gold',
    outline:
      'bg-transparent border border-forest-800/30 dark:border-forest-700/40 text-current hover:bg-forest-900/5 dark:hover:bg-forest-900/40 focus:ring-forest-600',
    white:
      'bg-solar-cream text-forest-950 hover:bg-white border border-charcoal-500/10 shadow-sm hover:shadow-md focus:ring-white',
    ghost:
      'bg-transparent text-current hover:bg-black/5 dark:hover:bg-white/5 focus:ring-forest-600',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          {icon}
        </span>
      )}
    </>
  );

  if (asAnchor && href) {
    return (
      <a
        href={href}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
};
