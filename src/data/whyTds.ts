export interface WhyTdsFeature {
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  iconName: string;
}

export const WHY_TDS_FEATURES: WhyTdsFeature[] = [
  {
    title: 'Certified Tier-1 Equipment',
    subtitle: 'Uncompromising Component Quality',
    description:
      'We install only MNRE-approved and ALMM-listed Tier-1 photovoltaic modules and high-efficiency inverters with full manufacturer warranties.',
    highlight: '25-Year Linear Warranty',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Precision Site Engineering',
    subtitle: 'Custom Structural Design',
    description:
      'No one-size-fits-all mounting. We run 3D shadow analysis and structural wind-load simulations tailored specifically to your roof geometry.',
    highlight: '3D Shadow Mapping',
    iconName: 'Cpu',
  },
  {
    title: 'End-to-End Net Metering Liaison',
    subtitle: 'Zero Paperwork Hassle',
    description:
      'Our dedicated team handles the complete DISCOM approval workflow, documentation, safety certifications, and meter synchronizations for you.',
    highlight: 'DISCOM Clearance',
    iconName: 'FileCheck2',
  },
  {
    title: 'Comprehensive Lifecycle O&M',
    subtitle: 'Long-Term Generation Assurance',
    description:
      'From de-mineralized water cleaning to string diagnostics and thermal imaging, our post-installation care keeps your system operating at peak yield.',
    highlight: 'Preventive Health Checks',
    iconName: 'Wrench',
  },
  {
    title: 'PM Surya Ghar Subsidy Support',
    subtitle: 'Transparent Financial Assistance',
    description:
      'We guide residential clients through the National Portal registration, document verification, and direct DBT subsidy disbursal step by step.',
    highlight: 'Direct DBT Assistance',
    iconName: 'Coins',
  },
  {
    title: 'Direct Client Communication',
    subtitle: 'Accountable Regional Presence',
    description:
      'Based locally in Fatehpur, Uttar Pradesh with a physical service desk, prompt on-site engineering team, and dependable human support.',
    highlight: 'Regional Service Desk',
    iconName: 'Headphones',
  },
];
