'use client';

import React from 'react';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';

interface MobileBottomBarProps {
  onOpenConsultation: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenConsultation }) => {
  return (
    <aside aria-label="Mobile Quick Actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-forest-950/95 backdrop-blur-md border-t border-forest-800 px-3 py-2.5 shadow-2xl flex items-center justify-between gap-2">
      {/* Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phone}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-forest-900 border border-forest-700/60 rounded text-solar-cream text-[11px] font-bold tracking-wider uppercase active:scale-95 transition-transform"
      >
        <Phone className="w-3.5 h-3.5 text-solar-gold" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={COMPANY_INFO.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-emerald-700 hover:bg-emerald-600 border border-emerald-500/40 rounded text-white text-[11px] font-bold tracking-wider uppercase active:scale-95 transition-transform"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>

      {/* Quote Button */}
      <button
        onClick={onOpenConsultation}
        className="flex-[1.2] flex items-center justify-center gap-1.5 py-2.5 bg-solar-gold hover:bg-solar-amber rounded text-forest-950 text-[11px] font-extrabold tracking-wider uppercase active:scale-95 transition-transform shadow-md"
      >
        <span>Get Quote</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </aside>
  );
};
