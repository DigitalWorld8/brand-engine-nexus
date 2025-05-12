
import React, { useState } from 'react';
import { Palette, Globe, Brain, Code, LineChart, Settings } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import ServicePanel from '@/components/ServicePanel';

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceCategory {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  services: ServiceItem[];
  image?: string;
  cta?: {
    text: string;
    link: string;
  };
}

const Services = () => {
  const [activeService, setActiveService] = useState<ServiceCategory | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  const serviceCategories: ServiceCategory[] = [
    {
      icon: Code,
      color: 'bg-[#1b1464]',
      title: 'Digital Services',
      description: 'Transform your business with intelligent solutions for automation, AI integration, and digital transformation.',
      image: '/placeholder.svg',
      cta: {
        text: 'Explore Digital Solutions',
        link: '#contact'
      },
      services: [
        { title: 'AI Solutions', description: 'Implement AI chat agents, persona-based lead bots, and multilingual support assistants.' },
        { title: 'Digital Transformation', description: 'Build custom websites, e-commerce solutions, and mobile-first UX strategies.' },
        { title: 'Digital Automation', description: 'Streamline operations with smart booking systems, CRM integration, and workflow automation.' },
        { title: 'Multilingual Support', description: 'Create fully localized digital experiences for diverse language audiences.' },
        { title: 'Custom Web Applications', description: 'Develop tailored web solutions that address your specific business challenges.' },
        { title: 'System Integration', description: 'Connect and optimize your business tools for seamless data flow and productivity.' }
      ]
    },
    {
      icon: Globe,
      color: 'bg-[#596ae9]',
      title: 'Digital Marketing',
      description: 'Drive visibility and engagement through strategic content, SEO optimization and targeted campaigns.',
      image: '/placeholder.svg',
      cta: {
        text: 'Discover Marketing Services',
        link: '#contact'
      },
      services: [
        { title: 'Search Engine Optimization (SEO)', description: 'Data-driven strategies to improve visibility and drive relevant traffic.' },
        { title: 'Web Content Writing', description: 'Compelling copy that engages visitors and converts them to customers.' },
        { title: 'Blogging (English + Arabic)', description: 'Regular, bilingual content to establish thought leadership and boost SEO.' },
        { title: 'Email Marketing Campaigns', description: 'Targeted email strategies that nurture leads and strengthen customer relationships.' },
        { title: 'Social Media Strategy', description: 'Platform-specific content calendars and growth strategies.' },
        { title: 'Performance Analytics & Tracking', description: 'Comprehensive reporting on KPIs and ROI for continuous optimization.' }
      ]
    },
    {
      icon: Palette,
      color: 'bg-[#09a4d5]',
      title: 'Design & Branding',
      description: 'Crafting visual identities that communicate trust, style, and purpose. From logos to complete brand guidelines.',
      image: '/placeholder.svg',
      cta: {
        text: 'View Design Portfolio',
        link: '#portfolio'
      },
      services: [
        { title: 'Brand Identity Design', description: 'Comprehensive brand identity development to establish your unique market position.' },
        { title: 'Logo Design (English + Arabic)', description: 'Professional bilingual logo design that resonates with diverse audiences.' },
        { title: 'Social Media Visuals', description: 'Eye-catching templates and graphics optimized for social media platforms.' },
        { title: 'Business Cards & Stationery', description: 'Professional print materials that extend your brand presence offline.' },
        { title: 'Brand Guidelines Creation', description: 'Detailed documentation to ensure brand consistency across all touchpoints.' },
        { title: 'Rebranding & Brand Refresh', description: 'Revitalize your existing brand while preserving brand equity and recognition.' }
      ]
    }
  ];

  const handleServiceClick = (service: ServiceCategory) => {
    setActiveService(service);
    setIsSheetOpen(true);
  };

  return (
    <section id="services" className="section bg-brand-light-gray py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-70"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-gray-600">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        {/* Panel-based Service Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-10">
          {serviceCategories.map((category, index) => (
            <ServicePanel 
              key={index}
              category={category}
              onClick={() => handleServiceClick(category)}
            />
          ))}
        </div>
        
        {/* Mobile Sheet View for Services */}
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
            {activeService && (
              <>
                <SheetHeader className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${activeService.color}`}>
                    <activeService.icon className="h-8 w-8 text-white" />
                  </div>
                  <SheetTitle className="text-2xl font-bold">{activeService.title}</SheetTitle>
                  <SheetDescription className="text-lg">{activeService.description}</SheetDescription>
                </SheetHeader>
                
                <div className="space-y-6">
                  {activeService.services.map((service, idx) => (
                    <div key={idx} className="py-4 border-b border-gray-100 last:border-0 hover:bg-brand-light-gray/50 p-4 rounded-lg transition-all">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <h4 className="text-lg font-semibold mb-2 cursor-pointer">{service.title}</h4>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold">{service.title}</h4>
                            <p className="text-sm">
                              {service.description}
                            </p>
                          </div>
                        </HoverCardContent>
                      </HoverCard>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </SheetContent>
        </Sheet>

        <div className="mt-16 text-center animate-fade-in-up">
          <a href="#contact" className="inline-flex items-center px-8 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white font-medium transition-all hover:scale-105 relative overflow-hidden group">
            <span className="relative z-10">Let's Discuss Your Project</span>
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand-accent-blue group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
