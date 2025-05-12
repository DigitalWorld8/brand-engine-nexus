
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Palette, Globe, Brain, Code, LineChart, Settings, ChevronRight, Plus } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';
import ServicePopup from './services/ServicePopup';
import ServiceCard from './services/ServiceCard';
import ServiceFeature from './services/ServiceFeature';

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
}

const Services = () => {
  const [activeService, setActiveService] = useState<ServiceCategory | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const serviceCategories: ServiceCategory[] = [{
    icon: Code,
    color: 'bg-gradient-to-r from-[#1b1464] to-[#3a2b9e]',
    title: 'Digital Services',
    description: 'Transform your business with intelligent solutions for automation, AI integration, and digital transformation.',
    services: [{
      title: 'AI Solutions',
      description: 'Implement AI chat agents, persona-based lead bots, and multilingual support assistants.'
    }, {
      title: 'Digital Transformation',
      description: 'Build custom websites, e-commerce solutions, and mobile-first UX strategies.'
    }, {
      title: 'Digital Automation',
      description: 'Streamline operations with smart booking systems, CRM integration, and workflow automation.'
    }, {
      title: 'Multilingual Support',
      description: 'Create fully localized digital experiences for diverse language audiences.'
    }, {
      title: 'Custom Web Applications',
      description: 'Develop tailored web solutions that address your specific business challenges.'
    }, {
      title: 'System Integration',
      description: 'Connect and optimize your business tools for seamless data flow and productivity.'
    }]
  }, {
    icon: Globe,
    color: 'bg-gradient-to-r from-[#596ae9] to-[#7986f1]',
    title: 'Digital Marketing',
    description: 'Drive visibility and engagement through strategic content, SEO optimization and targeted campaigns.',
    services: [{
      title: 'Search Engine Optimization (SEO)',
      description: 'Data-driven strategies to improve visibility and drive relevant traffic.'
    }, {
      title: 'Web Content Writing',
      description: 'Compelling copy that engages visitors and converts them to customers.'
    }, {
      title: 'Blogging (English + Arabic)',
      description: 'Regular, bilingual content to establish thought leadership and boost SEO.'
    }, {
      title: 'Email Marketing Campaigns',
      description: 'Targeted email strategies that nurture leads and strengthen customer relationships.'
    }, {
      title: 'Social Media Strategy',
      description: 'Platform-specific content calendars and growth strategies.'
    }, {
      title: 'Performance Analytics & Tracking',
      description: 'Comprehensive reporting on KPIs and ROI for continuous optimization.'
    }]
  }, {
    icon: Palette,
    color: 'bg-gradient-to-r from-[#09a4d5] to-[#35bde8]',
    title: 'Design & Branding',
    description: 'Crafting visual identities that communicate trust, style, and purpose. From logos to complete brand guidelines.',
    services: [{
      title: 'Brand Identity Design',
      description: 'Comprehensive brand identity development to establish your unique market position.'
    }, {
      title: 'Logo Design (English + Arabic)',
      description: 'Professional bilingual logo design that resonates with diverse audiences.'
    }, {
      title: 'Social Media Visuals',
      description: 'Eye-catching templates and graphics optimized for social media platforms.'
    }, {
      title: 'Business Cards & Stationery',
      description: 'Professional print materials that extend your brand presence offline.'
    }, {
      title: 'Brand Guidelines Creation',
      description: 'Detailed documentation to ensure brand consistency across all touchpoints.'
    }, {
      title: 'Rebranding & Brand Refresh',
      description: 'Revitalize your existing brand while preserving brand equity and recognition.'
    }]
  }];

  const handleServiceClick = (service: ServiceCategory) => {
    setActiveService(service);
    setIsPopupOpen(true);
  };

  return (
    <section id="services" className="section py-24 relative overflow-hidden bg-gradient-to-b from-white via-brand-light-gray/30 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-brand-accent-blue/10 to-brand-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-brand-accent-violet/10 to-brand-primary/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-brand-primary/5 text-brand-primary text-sm font-medium">
            Our Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-brand-primary to-brand-accent-blue bg-clip-text text-transparent">
            Innovative Digital Solutions
          </h2>
          <p className="text-lg text-gray-600">
            We offer comprehensive digital services to help your business thrive in today's competitive landscape.
          </p>
        </div>

        {/* Desktop view - Interactive cards with hover effects */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-12">
          {serviceCategories.map((category, index) => (
            <ServiceCard 
              key={index}
              category={category}
              onClick={() => handleServiceClick(category)}
            />
          ))}
        </div>

        {/* Mobile/Tablet view - Enhanced Carousel */}
        <div className="lg:hidden mb-12 px-4">
          <Carousel className="w-full">
            <CarouselContent>
              {serviceCategories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-1">
                    <ServiceCard 
                      category={category}
                      onClick={() => handleServiceClick(category)}
                      isMobile={true}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="relative static transform-none h-9 w-9 rounded-full" />
              <CarouselNext className="relative static transform-none h-9 w-9 rounded-full" />
            </div>
          </Carousel>
        </div>

        {/* Key Features section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-16">
          <ServiceFeature 
            icon={Brain} 
            title="AI-Powered" 
            description="Leverage the latest in artificial intelligence to optimize your business processes" 
            gradient="from-purple-500 to-indigo-600"
          />
          <ServiceFeature 
            icon={Settings} 
            title="Customizable" 
            description="Solutions tailored to your specific industry needs and business goals" 
            gradient="from-blue-500 to-cyan-600"
          />
          <ServiceFeature 
            icon={LineChart} 
            title="Data-Driven" 
            description="Make informed decisions with comprehensive analytics and reporting" 
            gradient="from-cyan-500 to-teal-600"
          />
        </div>

        <div className="mt-16 text-center">
          <a href="#contact" className="inline-flex items-center px-8 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white font-medium transition-all hover:scale-105 relative overflow-hidden group">
            <span className="relative z-10">Let's Discuss Your Project</span>
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand-accent-blue group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
      
      {/* Popup for service details with improved UI */}
      <ServicePopup 
        service={activeService} 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
    </section>
  );
};

export default Services;
