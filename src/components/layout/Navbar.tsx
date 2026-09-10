'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  MessageSquare,
  ChevronDown,
  Sun,
  PackageCheck,
  Globe2,
  Wrench,
  Sprout,
  Users,
  ExternalLink,
  Building2,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY_INFO } from '@/data/company';
import { GROUP_COMPANIES } from '@/data/groupCompanies';
import { Button } from '@/components/ui/Button';
import { TdsLogo } from '@/components/ui/TdsLogo';

interface NavbarProps {
  onOpenConsultation?: (division?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [groupDropdownOpen, setGroupDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setGroupDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getSubIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout':
        return <Sprout className="w-4 h-4 text-emerald-500" />;
      case 'Sun':
        return <Sun className="w-4 h-4 text-amber-500" />;
      case 'PackageCheck':
        return <PackageCheck className="w-4 h-4 text-blue-500" />;
      case 'Globe2':
        return <Globe2 className="w-4 h-4 text-emerald-500" />;
      case 'Wrench':
        return <Wrench className="w-4 h-4 text-rose-500" />;
      default:
        return <Building2 className="w-4 h-4 text-slate-500" />;
    }
  };

  const navLinks = [
    { label: 'Agriculture', href: '/agriculture', active: pathname === '/agriculture' },
    { label: 'Imports', href: '/imports', active: pathname === '/imports' },
    { label: 'Exports', href: '/exports', active: pathname === '/exports' },
    { label: 'Solar', href: '/solar', active: pathname === '/solar' },
    { label: 'TDS Motors', href: '/motors', active: pathname === '/motors' },
    { label: 'Directors', href: '/directors', active: pathname === '/directors' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200/80 py-2.5 sm:py-3 text-slate-900'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3 sm:py-3.5 text-slate-900'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 flex items-center justify-start flex-nowrap gap-4">
          {/* Official Parent Company Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="flex items-center gap-2 group select-none" aria-label="TDS AGRO Parent Company Home">
              <TdsLogo size="md" variant="dark" className="cursor-pointer" />
            </Link>

            <div className="hidden 2xl:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-mono text-emerald-800 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>PARENT ENTERPRISE</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-3 ml-3 flex-none text-xs font-bold tracking-wider uppercase flex-nowrap">
            <Link
              href="/"
              className={`transition-colors duration-200 relative py-1 hover:text-amber-600 ${
                pathname === '/' ? 'text-amber-600 font-extrabold' : 'text-slate-700'
              }`}
            >
              Home
              {pathname === '/' && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full" />}
            </Link>

            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`transition-colors duration-200 relative py-1 whitespace-nowrap hover:text-amber-600 ${
                  item.active ? 'text-amber-600 font-extrabold' : 'text-slate-700'
                }`}
              >
                {item.label}
                {item.active && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500 rounded-full" />}
              </Link>
            ))}

            {/* Group Companies Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setGroupDropdownOpen(!groupDropdownOpen)}
                onMouseEnter={() => setGroupDropdownOpen(true)}
                className={`flex items-center gap-1 transition-colors duration-200 py-1 hover:text-amber-600 focus:outline-none ${
                  pathname === '/group-companies' ? 'text-amber-600 font-extrabold' : 'text-slate-700'
                }`}
                aria-expanded={groupDropdownOpen}
              >
                <span>Group Companies</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${groupDropdownOpen ? 'rotate-180 text-amber-600' : ''}`} />
              </button>

              <AnimatePresence>
                {groupDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    onMouseLeave={() => setGroupDropdownOpen(false)}
                    className="absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 z-50"
                  >
                    <div className="px-3 py-2 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">
                        TDS AGRO SUBSIDIARIES
                      </span>
                      <Link
                        href="/group-companies"
                        onClick={() => setGroupDropdownOpen(false)}
                        className="text-[10px] font-mono text-amber-600 hover:underline font-bold"
                      >
                        View All Hub →
                      </Link>
                    </div>

                    <div className="mt-2 space-y-1">
                      {GROUP_COMPANIES.map((company) => (
                        <Link
                          key={company.id}
                          href={company.internalPath}
                          onClick={() => setGroupDropdownOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                            {getSubIcon(company.iconName)}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold font-display text-slate-900 group-hover:text-amber-600 truncate">
                                {company.name}
                              </span>
                              {company.externalUrl && (
                                <span className="text-[9px] font-mono text-amber-600 bg-amber-50 px-1.5 py-0.2 rounded border border-amber-200">
                                  Live Portal
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-slate-500 line-clamp-1 font-normal mt-0.5">
                              {company.shortTag}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-100 bg-slate-50 -mx-3 -mb-3 p-3 rounded-b-2xl flex items-center justify-between text-[10px] font-mono text-slate-500">
                      <span>Ref: tdssolar.in/tdsgroup.php</span>
                      <a
                        href={COMPANY_INFO.solarWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-600 font-bold flex items-center gap-1 hover:underline"
                      >
                        <span>TDS Solar Portal</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#contact"
              className="transition-colors duration-200 relative py-1 hover:text-amber-600 text-slate-700"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0 ml-5 xl:ml-6">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 hover:text-amber-600 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{COMPANY_INFO.formattedPhone}</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              onClick={() => (onOpenConsultation ? onOpenConsultation('General') : (window.location.href = '/#contact'))}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
              className="whitespace-nowrap font-bold shadow-sm"
            >
              Inquire Now
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <Button
              variant="primary"
              size="sm"
              onClick={() => (onOpenConsultation ? onOpenConsultation('General') : (window.location.href = '/#contact'))}
              className="text-[11px] px-3 py-1.5 font-bold whitespace-nowrap"
            >
              Inquire
            </Button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white text-slate-900 flex flex-col justify-between p-6 lg:hidden overflow-y-auto"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-200">
                <TdsLogo size="sm" variant="dark" />

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-600 hover:text-slate-900 bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col space-y-1.5 pt-5">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-display font-bold uppercase tracking-wider text-slate-800 hover:text-amber-600 transition-colors py-2.5 flex items-center justify-between border-b border-slate-100"
                >
                  <span>Home (Parent Company)</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="/agriculture"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-display font-bold uppercase tracking-wider text-slate-800 hover:text-amber-600 transition-colors py-2.5 flex items-center justify-between border-b border-slate-100"
                >
                  <span>1. Agriculture</span>
                  <Sprout className="w-4 h-4 text-emerald-600" />
                </Link>

                <Link
                  href="/imports"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-display font-bold uppercase tracking-wider text-slate-800 hover:text-amber-600 transition-colors py-2.5 flex items-center justify-between border-b border-slate-100"
                >
                  <span>2. Imports</span>
                  <PackageCheck className="w-4 h-4 text-blue-600" />
                </Link>

                <Link
                  href="/exports"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-display font-bold uppercase tracking-wider text-slate-800 hover:text-amber-600 transition-colors py-2.5 flex items-center justify-between border-b border-slate-100"
                >
                  <span>3. Exports (Agriculture)</span>
                  <Globe2 className="w-4 h-4 text-emerald-600" />
                </Link>

                <Link
                  href="/solar"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-display font-bold uppercase tracking-wider text-slate-800 hover:text-amber-600 transition-colors py-2.5 flex items-center justify-between border-b border-slate-100"
                >
                  <span>4. Solar (tdssolar.in)</span>
                  <Sun className="w-4 h-4 text-amber-500" />
                </Link>

                <Link
                  href="/motors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-display font-bold uppercase tracking-wider text-slate-800 hover:text-amber-600 transition-colors py-2.5 flex items-center justify-between border-b border-slate-100"
                >
                  <span>5. TDS Motors (Agri Machinery)</span>
                  <Wrench className="w-4 h-4 text-rose-600" />
                </Link>

                <Link
                  href="/directors"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-display font-bold uppercase tracking-wider text-slate-800 hover:text-amber-600 transition-colors py-2.5 flex items-center justify-between border-b border-slate-100"
                >
                  <span>Board of Directors</span>
                  <Users className="w-4 h-4 text-slate-500" />
                </Link>

                <Link
                  href="/group-companies"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-display font-bold uppercase tracking-wider text-slate-800 hover:text-amber-600 transition-colors py-2.5 flex items-center justify-between border-b border-slate-100"
                >
                  <span>Group Companies Hub</span>
                  <Building2 className="w-4 h-4 text-amber-600" />
                </Link>

                <Link
                  href="/#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-display font-bold uppercase tracking-wider text-slate-800 hover:text-amber-600 transition-colors py-2.5 flex items-center justify-between border-b border-slate-100"
                >
                  <span>Contact & Regional Office</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-5 space-y-3 border-t border-slate-200 mt-4">
              <Button
                variant="primary"
                size="lg"
                className="w-full shadow-md font-bold"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenConsultation) onOpenConsultation('General');
                  else window.location.href = '/#contact';
                }}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Get in Touch with TDS Agro
              </Button>

              <div className="flex flex-col gap-2 text-xs text-slate-600">
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-2 py-1 text-slate-900 hover:text-amber-600 transition-colors font-mono font-bold"
                >
                  <Phone className="w-4 h-4 text-amber-600" />
                  <span>Call: {COMPANY_INFO.formattedPhone}</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-1 text-slate-900 hover:text-emerald-700 transition-colors font-mono font-bold"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp: {COMPANY_INFO.formattedPhone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
