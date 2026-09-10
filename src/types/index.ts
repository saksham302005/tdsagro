export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
  isDropdown?: boolean;
}

export interface GroupCompany {
  id: string;
  name: string;
  slug: string;
  shortTag: string;
  headline: string;
  description: string;
  divisionType: 'Subsidiary' | 'Business Division';
  establishedYear: string;
  keyProducts: string[];
  externalUrl?: string;
  internalPath: string;
  badgeColor: string;
  accentColor: string;
  iconName: string;
  metrics: { label: string; value: string }[];
}

export interface AgricultureSolution {
  id: string;
  category: 'Crops' | 'Soil & Nutrition' | 'Agro Solutions' | 'Contract Farming' | 'Processing';
  title: string;
  description: string;
  details: string[];
  yieldBenefit: string;
  iconName: string;
  image: string;
}

export interface ImportProductCategory {
  id: string;
  category: 'Inverters' | 'Lighting' | 'Furniture' | 'Electronic Equipment';
  title: string;
  tagline: string;
  description: string;
  productRange: string[];
  image: string;
  iconName: string;
}

export interface ExportProductItem {
  id: string;
  commodity: string;
  variety: string;
  hsCode: string;
  origin: string;
  packaging: string[];
  certifications: string[];
  minimumOrder: string;
  destinationMarkets: string[];
  description: string;
  image: string;
}

export interface MotorEquipmentItem {
  id: string;
  name: string;
  category: 'Tractors' | 'Harvesters' | 'Rotavators & Tillers' | 'Planting & Leveling';
  powerRating: string;
  fuelEfficiency: string;
  workingWidth?: string;
  description: string;
  keyFeatures: string[];
  applications: string[];
  warrantyYears: number;
  image: string;
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: string;
  department: string;
  focus: string;
  initials: string;
  quote?: string;
  photoUrl?: string;
  experienceYears?: string;
}

export interface SolutionItem {
  id: string;
  category: string;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  imageUrl: string;
  badge?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'RESIDENTIAL' | 'COMMERCIAL' | 'ROOFTOP';
  location: string;
  capacity: string;
  type: string;
  imageUrl: string;
  summary: string;
  annualGeneration?: string;
  annualSavings?: string;
  co2Offset?: string;
  paybackPeriod?: string;
  modules?: string;
  inverter?: string;
  structure?: string;
  monitoring?: string;
  subsidyInfo?: string;
  highlights?: string[];
  detailedDescription?: string;
  recommendedFor?: string;
}

export interface PricingTier {
  capacityKw: number;
  systemType: string;
  grossPrice: number;
  subsidy: number;
  netPrice: number;
  monthlyUnitEst: string;
  spaceRequiredSqFt: string;
  annualSavingsEst: string;
  recommendedFor: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  shortDescription: string;
  detailedPoints: string[];
  timeline: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Agriculture' | 'Imports & Exports' | 'Solar' | 'TDS Motors';
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  divisionInterest: 'Agriculture' | 'Imports' | 'Exports' | 'Solar' | 'TDS Motors' | 'General';
  message: string;
}
