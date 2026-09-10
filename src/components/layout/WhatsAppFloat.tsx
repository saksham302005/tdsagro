'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

export const WhatsAppFloat: React.FC = () => {
  return (
    <aside aria-label="Quick Communication" className="hidden sm:block fixed bottom-6 right-6 z-30 group">
      <a
        href={COMPANY_INFO.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-lg shadow-emerald-950/30 transition-all duration-300 transform hover:scale-105 group-hover:pr-5 border border-emerald-400/30"
        aria-label="Chat on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-solar-gold rounded-full animate-ping" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-solar-gold rounded-full" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wider font-display">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
};
