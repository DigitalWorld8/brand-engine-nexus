
import React from 'react';
import { 
  Building2, 
  ShoppingBag, 
  Heart, 
  GraduationCap, 
  Coffee, 
  Briefcase, 
  Car, 
  Globe, 
  Store 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const industriesData = [
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

const Industries = () => {
  return (
    <section id="industries" className="section py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-brand-primary">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Brand Engine delivers tailored solutions across diverse industries, bringing industry-specific expertise to every project.
          </p>
        </div>

        <Tabs defaultValue="Corporate" className="w-full">
          <div className="flex justify-center mb-12">
            <Card className="border-none shadow-lg rounded-2xl overflow-hidden">
              <TabsList className="h-auto p-4 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4 bg-gray-50 rounded-xl">
                {industriesData.map((industry) => (
                  <TabsTrigger 
                    key={industry.name} 
                    value={industry.name}
                    className="data-[state=active]:bg-white data-[state=active]:shadow-md px-3 py-2.5 rounded-lg flex flex-col items-center gap-2 transition-all"
                  >
                    <div className={`${industry.color} text-white p-2.5 rounded-lg`}>
                      <industry.icon className="h-5 w-5" />
                    </div>
                    <span className="hidden sm:inline text-xs font-medium">{industry.name}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Card>
          </div>

          {industriesData.map((industry) => (
            <TabsContent key={industry.name} value={industry.name} className="focus-visible:outline-none">
              <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${industry.color} shadow-lg`}>
                      <industry.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{industry.name}</h3>
                      <p className="text-gray-600 text-lg">{industry.description}</p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h4 className="font-semibold text-lg mb-4">We work with:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {industry.examples.map((example, index) => (
                        <div 
                          key={index} 
                          className="bg-gray-50 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow"
                        >
                          <p className="font-medium">{example}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
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
