
import React from 'react';
import { 
  Building, 
  ShoppingBag, 
  Heart, 
  School, 
  Utensils, 
  Briefcase, 
  Car, 
  Globe, 
  Store 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const industriesData = [
  {
    name: "Corporate",
    icon: Building,
    description: "Elevate your corporate identity with professional branding and strategic digital solutions that position your business as an industry leader.",
    examples: ["Finance & Banking", "Consulting Firms", "Legal Services", "Corporate Offices"]
  },
  {
    name: "Retail",
    icon: ShoppingBag,
    description: "Create memorable shopping experiences with captivating designs and seamless digital integration for both physical and online retail spaces.",
    examples: ["Fashion Boutiques", "Department Stores", "Electronics Retailers", "Home Goods"]
  },
  {
    name: "Healthcare",
    icon: Heart,
    description: "Build trust and accessibility with HIPAA-compliant digital solutions and compassionate branding that resonates with patients.",
    examples: ["Medical Clinics", "Dental Practices", "Wellness Centers", "Pharmacies"]
  },
  {
    name: "Education",
    icon: School,
    description: "Engage students and parents with intuitive educational platforms and clear, inspiring institutional branding.",
    examples: ["K-12 Schools", "Universities", "Training Centers", "Educational Startups"]
  },
  {
    name: "Hospitality",
    icon: Utensils,
    description: "Delight guests with immersive brand experiences and streamlined digital systems for bookings, loyalty, and customer service.",
    examples: ["Restaurants & Cafés", "Hotels & Resorts", "Entertainment Venues", "Travel Services"]
  },
  {
    name: "Professional Services",
    icon: Briefcase,
    description: "Establish credibility and showcase expertise with sophisticated branding and client-focused digital solutions.",
    examples: ["Accounting Firms", "Architecture Studios", "Marketing Agencies", "IT Consultancies"]
  },
  {
    name: "Automotive",
    icon: Car,
    description: "Drive engagement with powerful automotive branding and innovative digital showrooms that bring vehicles to life online.",
    examples: ["Car Dealerships", "Auto Repair Shops", "Parts Retailers", "Vehicle Customization"]
  },
  {
    name: "International Business",
    icon: Globe,
    description: "Bridge cultures with bilingual branding and localized digital experiences that resonate across borders and languages.",
    examples: ["Import/Export", "International Franchises", "Global Startups", "Multilingual Services"]
  },
  {
    name: "Small Business",
    icon: Store,
    description: "Compete effectively with tailored branding and affordable digital solutions designed to help small businesses thrive.",
    examples: ["Local Retailers", "Family Businesses", "Startups", "Service Providers"]
  }
];

const Industries = () => {
  return (
    <section id="industries" className="section py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
          <p className="text-lg text-gray-600">
            Brand Engine delivers tailored solutions across diverse industries, bringing industry-specific expertise to every project.
          </p>
        </div>

        <Tabs defaultValue="Corporate" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="h-auto p-2 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 bg-brand-light-gray rounded-xl">
              {industriesData.map((industry) => (
                <TabsTrigger 
                  key={industry.name} 
                  value={industry.name}
                  className="data-[state=active]:bg-white px-3 py-2 rounded-lg flex flex-col items-center gap-1 text-xs sm:text-sm"
                >
                  <industry.icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{industry.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {industriesData.map((industry) => (
            <TabsContent key={industry.name} value={industry.name} className="focus-visible:outline-none">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-brand-primary`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-lg mb-4">We work with:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {industry.examples.map((example, index) => (
                      <div key={index} className="bg-brand-light-gray rounded-lg p-4 text-center">
                        <p className="font-medium">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Don't see your industry? We work with businesses of all types and sizes.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 rounded-lg bg-brand-accent-blue hover:bg-brand-accent-blue/90 text-white font-medium transition-all hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
