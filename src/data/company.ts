export const COMPANY_INFO = {
  name: 'TDS AGRO',
  parentName: 'TDS AGRO PRODUCER COMPANY LIMITED',
  fullName: 'TDS AGRO PRODUCER COMPANY LIMITED',
  tagline: 'Leading Agricultural Innovation, Global Imports & Exports, Clean Solar Energy and Farm Mechanization.',
  subTagline:
    'Parent entity orchestrating core agriculture, import & export trading, solar energy infrastructure, and modern agricultural equipment.',
  phone: '07800010016',
  formattedPhone: '+91 78000 10016',
  email: 'info@tdsagro.in',
  website: 'https://tdsagro.in',
  solarWebsite: 'https://tdssolar.in/',
  solarGroupUrl: 'https://tdssolar.in/tdsgroup.php',
  address: {
    street: 'VIP Road, Awas Vikas',
    city: 'Fatehpur',
    state: 'Uttar Pradesh',
    pincode: '212601',
    country: 'India',
    full: 'VIP Road, Awas Vikas, Fatehpur, Uttar Pradesh 212601, India',
  },
  operatingRegions: ['Uttar Pradesh', 'Fatehpur', 'Kanpur', 'Prayagraj', 'Lucknow & Pan-India'],
  whatsapp: {
    number: '917800010016',
    defaultMessage:
      'Hello TDS Agro team, I would like to inquire about your agricultural solutions, imports/exports, solar projects, and equipment.',
    url: 'https://wa.me/917800010016?text=Hello%20TDS%20Agro%20team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.',
  },
  trustPillars: [
    'PARENT COMPANY',
    'CORE AGRICULTURE',
    'GLOBAL IMPORTS & EXPORTS',
    'SOLAR INFRASTRUCTURE',
    'FARM MECHANIZATION',
  ],
  stats: [
    { label: 'Core Divisions', value: '5' },
    { label: 'Farmer Network', value: '15,000+' },
    { label: 'Solar Installations', value: '500+' },
    { label: 'Export Destinations', value: '12+ Countries' },
  ],
  verifiedNote: 'TDS AGRO PRODUCER COMPANY LIMITED — CORPORATE HEADQUARTERS',
};

// Main Top Navigation Links (Parent Website Structure)
export const NAV_ITEMS = [
  { label: 'Agriculture', href: '/agriculture' },
  { label: 'Imports', href: '/imports' },
  { label: 'Exports', href: '/exports' },
  { label: 'Solar', href: '/solar' },
  { label: 'TDS Motors', href: '/motors' },
  { label: 'Directors', href: '/directors' },
  { label: 'Group Companies', href: '/group-companies' },
  { label: 'Contact', href: '/#contact' },
];

export const DESKTOP_NAV_ITEMS = [
  { label: 'Agriculture', href: '/agriculture' },
  { label: 'Imports', href: '/imports' },
  { label: 'Exports', href: '/exports' },
  { label: 'Solar', href: '/solar' },
  { label: 'TDS Motors', href: '/motors' },
  { label: 'Directors', href: '/directors' },
  { label: 'Group Companies', href: '/group-companies', isDropdown: true },
  { label: 'Contact', href: '/#contact' },
];
