import { SolutionItem } from '@/types';

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'residential-solar',
    category: 'Home & Living',
    title: 'Residential Solar',
    description: 'Custom rooftop systems engineered to reduce residential grid bills by up to 80% while qualifying for PM Surya Ghar central subsidies.',
    longDescription:
      'Engineered for Indian homes and villas. We design aesthetic, durable rooftop mounts with maximum energy yield even during cloudy conditions.',
    benefits: [
      'Substantial savings on monthly DISCOM electricity bills',
      'Eligible for direct government subsidies under PM Surya Ghar',
      '25-year linear performance warranty on photovoltaic modules',
      'Silent, eco-friendly rooftop energy generation',
    ],
    imageUrl: '/residential_solar.jpg',
    badge: 'High Subsidy',
  },
  {
    id: 'commercial-solar',
    category: 'Enterprise',
    title: 'Commercial Solar',
    description: 'Turn commercial rooftops, factories, and institutions into high-yield power plants with accelerated depreciation benefits.',
    longDescription:
      'Scalable megawatt & kilowatt installations for manufacturing units, schools, cold storages, hospitals, and agro-processing facilities.',
    benefits: [
      'Significant reduction in daytime peak industrial tariff costs',
      'Section 32 accelerated depreciation income tax benefits',
      'Protection against long-term commercial electricity rate hikes',
      'Enhanced green corporate sustainability compliance',
    ],
    imageUrl: '/commercial_solar.jpg',
    badge: 'High ROI',
  },
  {
    id: 'rooftop-solar',
    category: 'Engineering',
    title: 'Rooftop Solar Systems',
    description: 'Engineered structural mounting customized for flat RCC, sloped industrial tin sheds, and elevated terrace pergolas.',
    longDescription:
      'We use high-grade galvanized iron (HDGI) or anodized aluminium structures designed to withstand high wind speeds and harsh weather.',
    benefits: [
      'Non-invasive, leak-proof roof attachment technology',
      'Elevated structures preserve usable terrace living space',
      'Wind-load certified structural engineering calculations',
      'Dual-axis shading analysis to maximize solar irradiance',
    ],
    imageUrl: '/rooftop_solar.jpg',
  },
  {
    id: 'on-grid-solar',
    category: 'Grid-Tied',
    title: 'On-Grid Solar (Grid-Tie)',
    description: 'Cost-effective solar setups that sync directly with the DISCOM grid, eliminating the need for expensive battery replacements.',
    longDescription:
      'Surplus electricity generated during bright daylight hours is exported directly back to the grid for net billing credits on your utility meter.',
    benefits: [
      'Lowest upfront capital cost per kilowatt installed',
      'Zero battery maintenance and chemical replacement overhead',
      'High conversion efficiency exceeding 98.5% with grid sync',
      'Seamless automated switching with zero manual intervention',
    ],
    imageUrl: '/on-grid_solar.jpg',
    badge: 'Popular',
  },
  {
    id: 'solar-modules',
    category: 'Hardware',
    title: 'High-Efficiency Solar Modules',
    description: 'Tier-1 Mono PERC & TOPCon bifacial panels that convert maximum photon energy with superior low-light temperature coefficients.',
    longDescription:
      'Sourced from certified manufacturers (such as Waaree, Havells, and leading Tier-1 brands) with anti-PID and anti-reflective glass coatings.',
    benefits: [
      'High module conversion efficiency exceeding 21.5%',
      'Bifacial models generate bonus yield from ground albedo reflection',
      'Robust mechanical load rating for heavy hail and gust resistance',
      '12-year product warranty & 25-year linear performance warranty',
    ],
    imageUrl: '/high-efficiency.jpg',
  },
  {
    id: 'solar-inverters',
    category: 'Hardware',
    title: 'Intelligent Solar Inverters',
    description: 'Smart string and hybrid solar inverters with built-in Wi-Fi / IoT tracking for real-time mobile generation diagnostics.',
    longDescription:
      'Equipped with advanced Maximum Power Point Tracking (MPPT) algorithms to extract every watt of available solar potential throughout the day.',
    benefits: [
      'Dual & Multi-MPPT channels for split roof orientations',
      'Cloud mobile app monitoring for live generation & fault alerts',
      'IP65 / IP66 weatherproof outdoor enclosures',
      'Integrated DC disconnect switch, surge, and lightning protection',
    ],
    imageUrl: '/high-efficiency.jpg',
  },
  {
    id: 'net-metering',
    category: 'Liaison & Utility',
    title: 'Net Metering Liaison',
    description: 'Complete end-to-end DISCOM net meter processing, feasibility approvals, inspection, and bi-directional meter testing.',
    longDescription:
      'We take care of the entire paperwork, state electricity board documentation, structural inspection, and meter synchronization for your installation.',
    benefits: [
      'Zero-hassle paperwork managed by TDS liaison specialists',
      'Timely government portal filing and DISCOM inspection clearance',
      'Bi-directional meter installation and official commissioning report',
      'Guaranteed adherence to state solar grid interconnection codes',
    ],
    imageUrl: '/net-metering laison.jpg',
  },
  {
    id: 'solar-maintenance',
    category: 'Support & O&M',
    title: 'Solar Maintenance & O&M',
    description: 'Scheduled solar panel cleaning, thermal imaging scans, inverter diagnostics, string testing, and preventive health checkups.',
    longDescription:
      'Dust, bird soiling, and loose terminals can degrade generation by 15-25%. Our O&M programs safeguard your long-term energy yields.',
    benefits: [
      'De-mineralized water panel cleaning to prevent mineral scaling',
      'Infrared thermography to detect micro-cracks and hot spots',
      'String voltage, insulation resistance, and earthing pit resistance tests',
      'Guaranteed priority technician dispatch for downtime troubleshooting',
    ],
    imageUrl: '/solar-maintenance.jpg',
  },
  {
    id: 'battery-backup',
    category: 'Hybrid Storage',
    title: 'Battery Backup & Hybrid Systems',
    description: 'Hybrid lithium-ion and tubular solar storage solutions ensuring round-the-clock uninterrupted power during grid outages.',
    longDescription:
      'Combines the economic benefits of grid-tied export with the resilience of dedicated battery backup during power cuts and blackouts.',
    benefits: [
      'Zero changeover time for critical home and office equipment',
      'High-cycle Lithium Ferro Phosphate (LiFePO4) battery chemistry',
      'Smart energy management software prioritizing solar, battery, then grid',
      'Ideal for areas with frequent voltage fluctuations or grid downtime',
    ],
    imageUrl: '/battery-backup.jpg',
  },
];
