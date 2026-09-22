import { MotorEquipmentItem } from '@/types';

export const MOTOR_EQUIPMENT: MotorEquipmentItem[] = [
  {
    id: 'tractor-75hp',
    name: 'TDS Agro-Trac 7500 Heavy-Duty 4WD Tractor',
    category: 'Tractors',
    powerRating: '75 HP / 2200 RPM High Torque Turbo Diesel',
    fuelEfficiency: 'Up to 18% Higher Fuel Economy with CRDI Engine',
    workingWidth: 'Heavy-Duty 4WD Traction with Dual Clutch',
    description:
      'Engineered for large agricultural holdings and heavy haulage. Delivers massive pulling power, 12F+12R synchromesh shuttle shift transmission, and 2500kg hydraulic lift capacity.',
    keyFeatures: [
      '4-Cylinder Turbocharged Intercooled CRDI Diesel Engine',
      'Power Steering with Dual Speed 540 / 1000 RPM Independent PTO',
      'Advanced Heavy-Duty Planetary Rear Axle Reduction',
      'Ergonomic Air-Suspension Operator Seat with ROPS Deluxe Canopy',
    ],
    applications: ['Heavy Deep Tillage', 'Laser Land Leveling', 'Multi-Blade Reversible Ploughing', 'Commercial Trolley Haulage'],
    warrantyYears: 5,
    image: '/business-solar.jpg',
  },
  {
    id: 'tractor-50hp',
    name: 'TDS Power-Trac 5000 All-Rounder Tractor',
    category: 'Tractors',
    powerRating: '50 HP Direct Injection Engine',
    fuelEfficiency: 'Best-in-Class Fuel Consumption in Rotavator Mode',
    workingWidth: '2WD / 4WD Compact Maneuverability',
    description:
      'The ideal farm tractor balancing power and agility for paddy puddling, haulage, rotavator operations, and inter-crop cultivation.',
    keyFeatures: [
      'High-torque 3-cylinder diesel with low maintenance oil-immersed brakes',
      '8 Forward + 2 Reverse Constant Mesh Gearbox',
      '1800kg Lift Capacity with Automatic Depth & Draft Control (ADDC)',
      'High ground clearance suitable for muddy wetland and rough terrain',
    ],
    applications: ['Paddy Field Puddling', 'Rotary Tillage', 'Sowing & Seed Drilling', 'Farm Transport'],
    warrantyYears: 3,
    image: '/independent-rooftop.jpg',
  },
  {
    id: 'combine-harvester',
    name: 'TDS Crop-Master Multi-Crop Combine Harvester',
    category: 'Harvesters',
    powerRating: '101 HP Heavy Diesel Drive',
    fuelEfficiency: 'High Throughput Harvest at Low Litres/Acre',
    workingWidth: '12-Foot Heavy-Duty Cutter Bar with Hydraulic Reel',
    description:
      'High-capacity self-propelled multi-crop combine harvester suitable for wheat, paddy, soybean, mustard, and maize. Ensures clean grain separation with grain loss under 1%.',
    keyFeatures: [
      'Universal Rasp Bar Threshing Drum with Variable Speed Adjustment',
      'Double Sieves with High-Speed Centrifugal Cleaning Blower',
      '2.4 Cubic Metre Grain Hopper with Fast Hydraulic Unloader Auger',
      'Air-Conditioned Operator Cabin with 360-degree LED Night Work Lighting',
    ],
    applications: ['Paddy & Rice Harvesting', 'Wheat Harvesting', 'Soybean & Pulse Threshing', 'Oilseed Separation'],
    warrantyYears: 2,
    image: '/agro-procesing.jpg',
  },
  {
    id: 'rotavator-heavy',
    name: 'TDS Rotary Pro Heavy-Duty Rotavator / Tiller',
    category: 'Rotavators & Tillers',
    powerRating: 'Compatible with 40HP - 75HP Tractors',
    fuelEfficiency: 'Single-Pass Seedbed Preparation saves 40% Diesel',
    workingWidth: '6 Feet to 8 Feet Width (48 to 60 L/C Type Boron Blades)',
    description:
      'Precision engineered gear-drive rotavator designed for soil pulverization, eradication of crop stubble, and immediate seedbed readiness.',
    keyFeatures: [
      'Multi-speed gearbox for variable rotor speeds in hard and clay soils',
      'High-durability forged Boron steel blades with extended wear life',
      'Heavy-duty side gear drive in continuous oil bath lubrication',
      'Spring-loaded trailing board for uniform soil finishing and leveling',
    ],
    applications: ['Secondary Tillage', 'Stubble Incorporation', 'Paddy Wet Puddling', 'Dry Seedbed Preparation'],
    warrantyYears: 2,
    image: '/about-solar.jpg',
  },
  {
    id: 'power-tiller-15hp',
    name: 'TDS Agro-Tiller 15HP Walking Tractor',
    category: 'Rotavators & Tillers',
    powerRating: '15 HP Water-Cooled Diesel Engine',
    fuelEfficiency: '0.8 Litre / Hour Ultra Economical Operation',
    workingWidth: 'Rotary Tiller with 18 High-Tensile Curved Blades',
    description:
      'Compact multi-purpose power tiller designed for smallholder farmers, hilly terrains, horticulture orchards, and greenhouse cultivation.',
    keyFeatures: [
      'Self-start water-cooled diesel engine with high low-end torque',
      '6 Forward + 2 Reverse speeds with dual steering clutch levers',
      'Attachable seated sulky trailer, water pump, and ridger furrower',
      'Lightweight and easily transportable across narrow rural paths',
    ],
    applications: ['Small Farm Tillage', 'Orchard Weed Management', 'Sugarcane Earthing Up', 'Vegetable Bed Furrowing'],
    warrantyYears: 2,
    image: '/suburban.jpg',
  },
  {
    id: 'laser-leveler',
    name: 'TDS Precision Laser Land Leveler System',
    category: 'Planting & Leveling',
    powerRating: 'Operated with 50HP+ Tractors with Remote Dual Control',
    fuelEfficiency: 'Reduces Irrigation Water Usage by up to 35%',
    workingWidth: '7-Foot Heavy Scraper Bucket with Hardox Cutting Blade',
    description:
      'High-precision optical transmitter, mast receiver, and proportional hydraulic control valve ensuring millimeter-level flat farmland grading.',
    keyFeatures: [
      'High-accuracy laser transmitter with up to 500-metre operating radius',
      'Rapid-response proportional hydraulic valve for zero lag blade adjustments',
      'Heavy-gauge laser scraper bucket reinforced with wear-resistant side plates',
      'Improves fertilizer utilization and crop yield uniformity by over 20%',
    ],
    applications: ['Farmland Leveling', 'Water Conservation Grading', 'Pre-Sowing Topography Flattening', 'Civil Soil Grading'],
    warrantyYears: 3,
    image: '/high-efficiency.jpg',
  },
];

export const MOTORS_HIGHLIGHTS = [
  {
    title: 'Precision Farm Mechanization',
    desc: 'Increasing agricultural productivity, reducing manual labor overhead, and ensuring timely sowing and harvest cycles.',
  },
  {
    title: 'Robust Pan-UP Service & Spare Parts Network',
    desc: 'Fully stocked service centers in Fatehpur, Kanpur, Prayagraj, and regional hubs with trained mobile technicians.',
  },
  {
    title: 'Subsidized Agri-Equipment Loans & Schemes',
    desc: 'Guidance and tie-ups for state agriculture mechanization subsidies (UP Agriculture Department Portal / Krishi Vibhag).',
  },
];
