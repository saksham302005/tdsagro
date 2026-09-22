import { PricingTier } from '@/types';

export const PRICING_TIERS: PricingTier[] = [
  {
    capacityKw: 2,
    systemType: 'Rooftop On-Grid System',
    grossPrice: 120000,
    subsidy: 90000,
    netPrice: 30000,
    monthlyUnitEst: '240 – 260 Units',
    spaceRequiredSqFt: '160 – 200 sq.ft',
    annualSavingsEst: '₹22,000 – ₹26,000',
    recommendedFor: 'Small 1-2 BHK Homes, Basic appliances, lights, fans, and 1 inverter AC',
  },
  {
    capacityKw: 3,
    systemType: 'Rooftop On-Grid System',
    grossPrice: 180000,
    subsidy: 108000,
    netPrice: 72000,
    monthlyUnitEst: '360 – 390 Units',
    spaceRequiredSqFt: '240 – 300 sq.ft',
    annualSavingsEst: '₹34,000 – ₹40,000',
    recommendedFor: 'Standard 2-3 BHK Homes, 1-2 ACs, Refrigerator, Water Pump, washing machine',
  },
  {
    capacityKw: 4,
    systemType: 'Rooftop On-Grid System',
    grossPrice: 240000,
    subsidy: 108000,
    netPrice: 132000,
    monthlyUnitEst: '480 – 520 Units',
    spaceRequiredSqFt: '320 – 400 sq.ft',
    annualSavingsEst: '₹46,000 – ₹54,000',
    recommendedFor: 'Medium to Large Homes, 2-3 ACs, geysers, multiple refrigeration units',
  },
  {
    capacityKw: 5,
    systemType: 'Rooftop On-Grid System',
    grossPrice: 300000,
    subsidy: 108000,
    netPrice: 192000,
    monthlyUnitEst: '600 – 650 Units',
    spaceRequiredSqFt: '400 – 500 sq.ft',
    annualSavingsEst: '₹58,000 – ₹68,000',
    recommendedFor: 'Large Independent Bungalows, Multiple ACs, EV home charger, heavy daytime load',
  },
];

export const PRICING_DISCLAIMERS = [
  'Pricing and subsidy figures reflect standard state / PM Surya Ghar benchmark slabs from the existing portal database and should be verified with TDS Solar Energy before final contract issuance.',
  'Transportation, special high-rise structural civil work, and DISCOM net metering charges are calculated as extra based on site location.',
  'Actual generation depends on solar irradiance, roof orientation, ambient temperature, and local weather patterns.',
];
