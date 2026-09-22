import { ExportProductItem } from '@/types';

export const EXPORT_PRODUCTS: ExportProductItem[] = [
  {
    id: 'basmati-rice',
    commodity: 'Premium Basmati Rice',
    variety: '1121 Extra Long Grain / Traditional Basmati (Raw, Steam, Sella)',
    hsCode: '1006.30.20',
    origin: 'Gangetic Plains, Uttar Pradesh, India',
    packaging: ['10kg, 20kg, 25kg, 50kg Non-Woven / BOPP Bags', 'Custom Jute Bags for Bulk Freight'],
    certifications: ['APEDA Registered', 'FSSAI Certified', 'ISO 22000:2018', 'Phytosanitary Certified'],
    minimumOrder: '1 Full Container Load (FCL) / 24 MT',
    destinationMarkets: ['Middle East (UAE, Saudi Arabia)', 'Europe', 'North America', 'Southeast Asia'],
    description:
      'Aromatic long-grain Indian Basmati rice aged to perfection. Unmatched fluffiness, non-sticky texture, and elongation ratio up to 2.5x upon cooking.',
    image: '/agro-procesing.jpg',
  },
  {
    id: 'non-basmati-rice',
    commodity: 'High-Grade Non-Basmati Rice',
    variety: 'PR-11, IR-64, Sona Masoori, Sharbati Rice',
    hsCode: '1006.30.90',
    origin: 'Uttar Pradesh & Central India',
    packaging: ['25kg & 50kg PP Woven Bags', '1000kg Jumbo Bulk Cargo Bags'],
    certifications: ['APEDA', 'FSSAI', 'SGS Pre-Shipment Inspection', 'Non-GMO Verified'],
    minimumOrder: '2 FCL / 50 MT',
    destinationMarkets: ['Africa', 'Middle East', 'Bangladesh', 'Southeast Asia'],
    description:
      'Uniform polished and parboiled grain with low broken grain percentage (<5%), high calorific value, and excellent shelf stability.',
    image: '/ware-house_disribution.jpg',
  },
  {
    id: 'milling-wheat',
    commodity: 'Durum & Milling Wheat',
    variety: 'High-Protein Sharbati / MP Durum Wheat',
    hsCode: '1001.99.10',
    origin: 'Uttar Pradesh Farm Belt',
    packaging: ['50kg Multi-Wall PP Bags', 'Break-Bulk Vessel Shipments'],
    certifications: ['FSSAI', 'Phytosanitary', 'Fumigation Certificate', 'Aflatoxin Tested'],
    minimumOrder: '100 MT Bulk / FCL Containerized',
    destinationMarkets: ['Middle East', 'East Africa', 'South Asia'],
    description:
      'Cleaned, destoned golden wheat with minimum 12.5% gluten/protein content, moisture under 11%, and high test weight ideal for fine milling and bakery production.',
    image: '/about-solar.jpg',
  },
  {
    id: 'organic-pulses',
    commodity: 'Organic Certified Pulses & Lentils',
    variety: 'Desi Chickpeas (Chana), Pigeon Peas (Toor Dal), Yellow Lentils (Moong Dal)',
    hsCode: '0713.20.00',
    origin: 'Certified Organic Farms, Uttar Pradesh',
    packaging: ['1kg/5kg Retail Vacuum Pouches', '25kg Kraft Paper / Woven Bags'],
    certifications: ['India Organic (NPOP)', 'USDA Organic Equivalent', 'FSSAI', 'APEDA'],
    minimumOrder: '1 FCL / 20 MT',
    destinationMarkets: ['United States', 'Canada', 'United Kingdom', 'EU Countries'],
    description:
      'Carefully sortex-cleaned, unpolished pulses rich in plant protein, free from synthetic pesticides, artificial colors, or chemical polish.',
    image: '/independent-rooftop.jpg',
  },
  {
    id: 'spices-oilseeds',
    commodity: 'Indian Whole Spices & Oilseeds',
    variety: 'Yellow Mustard, Cumin Seeds, Coriander Seeds, Turmeric Fingers (High Curcumin)',
    hsCode: '0909.31.29',
    origin: 'Selected Agro Belts, India',
    packaging: ['25kg & 50kg Jute Bags with Poly Liner', 'Custom Vacuum Foil Packs'],
    certifications: ['Spices Board of India', 'APEDA', 'ISO 9001', 'FSSAI'],
    minimumOrder: '5 MT to 1 FCL',
    destinationMarkets: ['Europe', 'North America', 'Gulf Region', 'Japan'],
    description:
      'Sun-dried, high-essential-oil content whole spices and cold-press oilseeds cleaned to 99.5% purity standards.',
    image: '/residential_solar.jpg',
  },
];

export const EXPORT_STRENGTHS = [
  {
    title: 'Port Connectivity & Freight Logistics',
    description: 'Seamless inland container depot (ICD) rail connectivity to major Indian ports (Mundra, JNPT, Kolkata) for rapid vessel loading.',
  },
  {
    title: 'Stringent Pre-Shipment Quality Testing',
    description: 'Every consignment undergoes third-party lab inspection (SGS / Bureau Veritas) for moisture, purity, grain length, and pesticide residues.',
  },
  {
    title: 'Custom Packaging & Private Labeling',
    description: 'Offering complete bespoke multi-color BOPP, non-woven, and vacuum packaging with international barcode compliance for global retail brands.',
  },
  {
    title: 'Direct Farmer Sourcing Advantage',
    description: 'Elimination of intermediaries ensures competitive FOB / CIF pricing, consistent harvest quality, and ethical fair-trade sourcing.',
  },
];
