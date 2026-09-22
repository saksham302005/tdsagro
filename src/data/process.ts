import { ProcessStep } from '@/types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Consultation',
    shortDescription: 'Understanding your power consumption, DISCOM bill history, and property objectives.',
    detailedPoints: [
      'Analysis of previous 6-12 months electricity bills',
      'Evaluation of daylight vs. night-time energy demand patterns',
      'Initial discussion on subsidy eligibility and system payback expectations',
    ],
    timeline: 'Day 1',
    iconName: 'MessageSquareText',
  },
  {
    stepNumber: '02',
    title: 'Site Assessment',
    shortDescription: 'Comprehensive technical roof audit, structural integrity, and 3D shadow path analysis.',
    detailedPoints: [
      'Precise roof measurement and load-bearing assessment',
      'Sun-path and shadow mapping for surrounding trees and buildings',
      'Evaluation of cable routing, earthing pit locations, and meter point',
    ],
    timeline: 'Day 2 – 3',
    iconName: 'Compass',
  },
  {
    stepNumber: '03',
    title: 'System Design',
    shortDescription: 'Custom 3D CAD engineering, string layout, single line diagram (SLD), and DISCOM paperwork.',
    detailedPoints: [
      'Optimized tilt angle and module layout simulation',
      'Selection of Tier-1 modules, MPPT inverters, and DCDB/ACDB switchgear',
      'Filing of online net-metering feasibility application with local DISCOM',
    ],
    timeline: 'Day 4 – 6',
    iconName: 'Cpu',
  },
  {
    stepNumber: '04',
    title: 'Installation',
    shortDescription: 'Precision mechanical mounting, electrical interconnection, earthing, and safety testing.',
    detailedPoints: [
      'Erection of corrosion-resistant HDGI/Aluminium mounting frames',
      'Module placement, DC solar cable conduits, and surge arrestor setup',
      'Dual-layer chemical earthing and lightning protection (LA) verification',
    ],
    timeline: 'Day 7 – 10',
    iconName: 'Wrench',
  },
  {
    stepNumber: '05',
    title: 'Support & Commissioning',
    shortDescription: 'DISCOM bi-directional net meter synchronization, app setup, and ongoing O&M support.',
    detailedPoints: [
      'DISCOM inspection clearance and bi-directional meter synchronization',
      'IoT mobile app handover for real-time kWh generation tracking',
      'Annual maintenance inspection schedules and responsive technical support',
    ],
    timeline: 'Day 11 & Ongoing',
    iconName: 'ShieldCheck',
  },
];
