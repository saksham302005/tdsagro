export const COMPANY_INFO = {
  name: 'TDS AGRO',
  parentName: 'TDS AGRO PRODUCER COMPANY LIMITED',
  fullName: 'TDS AGRO PRODUCER COMPANY LIMITED',
  tagline: 'Leading Agricultural Innovation, Global Imports & Exports, Clean Solar Energy and Farm Mechanization.',
  subTagline:
    'Parent entity orchestrating core agriculture, import & export trading, solar energy infrastructure, and modern agricultural equipment.',
  phone: '07800010013',
  formattedPhone: '+91 78000 10013',
  email: 'tds@tdssolar.in',
  phoneLines: [
    { number: '07800010013', label: 'B2B & Bulk Enquiries', formatted: '+91 78000 10013' },
    { number: '07800010064', label: 'Residential Enquiries', formatted: '+91 78000 10064' },
    { number: '07800010016', label: 'C&I Enquiries', formatted: '+91 78000 10016' },
    { number: '07800070017', label: 'Service & Support', formatted: '+91 78000 70017' },
  ],
  emailAddresses: [
    { address: 'tds@tdssolar.in', label: 'Solar Desk' },
    { address: 'tdsagro@waareepartners.com', label: 'Waaree Partner Desk' },
    { address: 'tdssolarenergy@gmail.com', label: 'Solar Energy Desk' },
  ],
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
  googleForm: {
    url: 'https://forms.gle/TDtYg61vxViHSVw48',
    embedUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe-fNVpJqKT8SbOrutv3UzbNbomAEwEFh-BmPaFdkE6XE5dVQ/viewform?embedded=true',
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
