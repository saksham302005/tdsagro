import { AgricultureSolution } from '@/types';

export const AGRICULTURE_SOLUTIONS: AgricultureSolution[] = [
  {
    id: 'crop-cultivation',
    category: 'Crops',
    title: 'High-Yield Certified Crop Cultivation',
    description:
      'Cultivating premium food grains, oilseeds, and pulses with scientific crop rotation, certified non-GMO seed genetics, and micro-irrigation management.',
    details: [
      'High-grade Basmati & aromatic paddy varieties with superior grain length',
      'Disease-resistant high-protein wheat and mustard seed production',
      'Organic pulses (chickpeas, pigeon peas, lentils) with zero harmful chemical residues',
      'Contract farming agreements with guaranteed minimum support and fair pricing',
    ],
    yieldBenefit: '+28% Crop Yield & Zero Wastage',
    iconName: 'Sprout',
    image: '/agro-procesing.jpg',
  },
  {
    id: 'soil-nutrition',
    category: 'Soil & Nutrition',
    title: 'Bio-Fertilizers & Soil Health Management',
    description:
      'Restoring microbial biodiversity and mineral balance with organic vermicompost, bio-stimulants, mycorrhiza inoculants, and automated soil testing labs.',
    details: [
      'Customized N-P-K nutrient balancing based on GPS-tagged soil lab reports',
      'Eco-friendly bio-pesticides and neem-based natural pest management',
      'Organic carbon enhancement programs to retain deep root moisture',
      'Carbon footprint reduction with zero stubble burning protocols',
    ],
    yieldBenefit: '40% Reduction in Synthetic Chemical Input',
    iconName: 'FlaskConical',
    image: '/about-solar.jpg',
  },
  {
    id: 'contract-farming',
    category: 'Contract Farming',
    title: 'Farmer Partnership & Cooperative Buyback',
    description:
      'Direct farm-to-enterprise partnerships empowering over 15,000 farmers in Uttar Pradesh with guaranteed buyback agreements, inputs, and agronomic guidance.',
    details: [
      'Pre-season buyback agreements eliminating market price fluctuation risks',
      'Subsidized high-quality seed, bio-input, and equipment distribution',
      'On-field agronomist visits for pest alerts, weather updates, and soil testing',
      'Transparent digital weighing and immediate direct bank transfer (DBT) payments',
    ],
    yieldBenefit: 'Guaranteed Market Assurance & Fair Pricing',
    iconName: 'Handshake',
    image: '/independent-rooftop.jpg',
  },
  {
    id: 'processing-storage',
    category: 'Processing',
    title: 'Modern Post-Harvest & Cold Storage Hubs',
    description:
      'State-of-the-art sorting, grading, moisture-controlled warehousing, and modern milling units to preserve crop vitality for domestic and global supply.',
    details: [
      'Solar-powered cold storage units reducing perishable produce post-harvest spoilage',
      'Automated optical color sorters and vibratory destoners for grain purity',
      'Hermetic packaging and multi-wall moisture barrier storage',
      'Certified APEDA & FSSAI testing laboratory integration on-site',
    ],
    yieldBenefit: '99.8% Grain Purity & Extended Shelf Life',
    iconName: 'Warehouse',
    image: '/ware-house_disribution.jpg',
  },
  {
    id: 'precision-agri',
    category: 'Agro Solutions',
    title: 'Precision Agri-Tech & Smart Irrigation',
    description:
      'Integrating IoT soil moisture telemetry, solar micro-drip networks, and automated agro-weather stations for high-efficiency farming.',
    details: [
      'Solar-powered submersible and surface pumps with automated timer controllers',
      'Drip and sprinkler micro-irrigation saving up to 60% ground water',
      'Mobile SMS crop advisory and automated fertilizer dosing schedules',
      'Drone-based aerial multispectral crop health surveillance',
    ],
    yieldBenefit: '60% Water Conservation & Optimized Inputs',
    iconName: 'Cpu',
    image: '/high-efficiency.jpg',
  },
];

export const AGRICULTURE_STATS = [
  { label: 'Farmland Under Cultivation', value: '25,000+ Acres' },
  { label: 'Registered Farmer Partners', value: '15,000+' },
  { label: 'Annual Crop Output', value: '75,000+ MT' },
  { label: 'Solar-Powered Cold Storage', value: '10,000 MT Cap' },
];
