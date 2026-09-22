import { ImportProductCategory } from '@/types';

export const IMPORT_CATEGORIES: ImportProductCategory[] = [
  {
    id: 'inverters',
    category: 'Inverters',
    title: 'Hybrid, Residential, Commercial & Industrial Inverters',
    tagline: 'Reliable power conversion for homes, businesses, and high-load operations.',
    description:
      'A broad inverter portfolio sourced for dependable backup, solar integration, and power management across every project scale.',
    productRange: ['Hybrid inverters', 'Residential inverters', 'Commercial inverters', 'Industrial inverters'],
    image: '/battery-backup.jpg',
    iconName: 'Zap',
  },
  {
    id: 'lighting',
    category: 'Lighting',
    title: 'Solar, Outdoor & Interior Lighting',
    tagline: 'High-lumen lighting for public spaces, buildings, and everyday interiors.',
    description:
      'One curated lighting range spanning energy-efficient outdoor systems, solar illumination, and polished indoor fixtures.',
    productRange: ['Solar lights', 'Outdoor lights', 'Interior lights', 'Commercial LED systems'],
    image: '/educational-campus.jpg',
    iconName: 'Lightbulb',
  },
  {
    id: 'furniture',
    category: 'Furniture',
    title: 'Home, Office & Institutional Furniture',
    tagline: 'Practical furniture collections for homes, workplaces, and public institutions.',
    description:
      'A flexible furniture portfolio bringing together comfortable residential pieces and durable collections for offices and institutions.',
    productRange: ['Double beds', 'Sofa beds', 'Chairs', 'Almirahs', 'Office furniture'],
    image: '/suburban.jpg',
    iconName: 'Armchair',
  },
  {
    id: 'electronics',
    category: 'Electronic Equipment',
    title: 'Industrial Electronics & Smart Hardware',
    tagline: 'Precision testing equipment, smart meters, telemetry modules, and microcontrollers.',
    description:
      'Importing specialized electronic hardware including IoT farm sensors, bidirectional smart net-meters, power quality analyzers, high-speed circuit breakers, and industrial control electronics.',
    productRange: ['Smart meters', 'IoT sensors', 'Power quality equipment', 'Control hardware'],
    image: '/on-grid_solar.jpg',
    iconName: 'Cpu',
  },
];
