
import { 
  Building2, 
  ShoppingBag, 
  Heart, 
  GraduationCap, 
  Coffee, 
  Briefcase, 
  Car, 
  Globe, 
  Store,
  Scissors,
  Plane
} from 'lucide-react';
import { IndustryType } from '../types';

export const industriesData: IndustryType[] = [
  {
    name: "Corporate",
    icon: Building2,
    color: "bg-brand-primary",
    description: "Elevate your corporate identity with professional branding and strategic digital solutions that position your business as an industry leader.",
    examples: ["Finance & Banking", "Consulting Firms", "Legal Services", "Corporate Offices"]
  },
  {
    name: "Retail",
    icon: ShoppingBag,
    color: "bg-brand-accent-blue",
    description: "Create memorable shopping experiences with captivating designs and seamless digital integration for both physical and online retail spaces.",
    examples: ["Fashion Boutiques", "Department Stores", "Electronics Retailers", "Home Goods"]
  },
  {
    name: "Healthcare",
    icon: Heart,
    color: "bg-brand-accent-violet",
    description: "Build trust and accessibility with HIPAA-compliant digital solutions and compassionate branding that resonates with patients.",
    examples: ["Medical Clinics", "Dental Practices", "Wellness Centers", "Pharmacies"]
  },
  {
    name: "Education",
    icon: GraduationCap,
    color: "bg-brand-primary",
    description: "Engage students and parents with intuitive educational platforms and clear, inspiring institutional branding.",
    examples: ["K-12 Schools", "Universities", "Training Centers", "Educational Startups"]
  },
  {
    name: "Hospitality",
    icon: Coffee,
    color: "bg-brand-accent-blue",
    description: "Delight guests with immersive brand experiences and streamlined digital systems for bookings, loyalty, and customer service.",
    examples: ["Restaurants & Cafés", "Hotels & Resorts", "Entertainment Venues", "Travel Services"]
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    color: "bg-brand-accent-violet",
    description: "Establish credibility and showcase expertise with sophisticated branding and client-focused digital solutions.",
    examples: ["Accounting Firms", "Architecture Studios", "Marketing Agencies", "IT Consultancies"]
  },
  {
    name: "Automotive",
    icon: Car,
    color: "bg-brand-primary",
    description: "Drive engagement with powerful automotive branding and innovative digital showrooms that bring vehicles to life online.",
    examples: ["Car Dealerships", "Auto Repair Shops", "Parts Retailers", "Vehicle Customization"]
  },
  {
    name: "Hair Dresser Salons",
    icon: Scissors,
    color: "bg-brand-accent-blue",
    description: "Elevate your salon's presence with stylish branding and digital solutions that attract clients and streamline appointment bookings.",
    examples: ["Beauty Salons", "Barber Shops", "Hair Studios", "Spa & Wellness Centers"]
  },
  {
    name: "Airlines",
    icon: Plane,
    color: "bg-brand-accent-violet",
    description: "Create seamless travel experiences with intuitive digital platforms and distinctive branding that builds passenger loyalty and trust.",
    examples: ["Commercial Airlines", "Charter Services", "Travel Agencies", "Airport Services"]
  },
  {
    name: "International Business",
    icon: Globe,
    color: "bg-brand-accent-blue",
    description: "Bridge cultures with bilingual branding and localized digital experiences that resonate across borders and languages.",
    examples: ["Import/Export", "International Franchises", "Global Startups", "Multilingual Services"]
  },
  {
    name: "Small Business",
    icon: Store,
    color: "bg-brand-accent-violet",
    description: "Compete effectively with tailored branding and affordable digital solutions designed to help small businesses thrive.",
    examples: ["Local Retailers", "Family Businesses", "Startups", "Service Providers"]
  }
];
