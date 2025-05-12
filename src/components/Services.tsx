
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Palette, Globe, Brain, Code, LineChart, Settings, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceCarouselCard from './ServiceCarouselCard';

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
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(null);

  const serviceCategories: ServiceCategory[] = [{
    icon: Code,
    color: 'bg-[#1b1464]',
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
    color: 'bg-[#596ae9]',
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
    color: 'bg-[#09a4d5]',
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
    setIsSheetOpen(true);
  };

  const toggleCardSelection = (index: number) => {
    setSelectedCardIndex(selectedCardIndex === index ? null : index);
  };

  return (
    <section id="services" className="section bg-gradient-to-b from-white via-brand-light-gray/50 to-white py-24 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent opacity-80"></div>
      <div className="absolute top-20 -right-20 w-40 h-40 rounded-full bg-brand-accent-blue/5 blur-3xl"></div>
      <div className="absolute bottom-20 -left-20 w-40 h-40 rounded-full bg-brand-accent-violet/5 blur-3xl"></div>
      
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

        {/* Desktop view - 3 column grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-12">
          {serviceCategories.map((category, index) => (
            <Card 
              key={index}
              className="h-full transition-all duration-300 hover:shadow-xl hover:scale-[1.03] border-t-4 border-t-transparent hover:border-t-brand-primary group overflow-hidden cursor-pointer"
              onClick={() => handleServiceClick(category)}
            >
              <CardHeader className="relative">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 ${category.color} group-hover:rotate-3`}>
                  <category.icon className="h-7 w-7 text-white transition-transform group-hover:scale-110" />
                </div>
                <CardTitle className="text-xl md:text-2xl relative z-10">{category.title}</CardTitle>
                <CardDescription className="mt-2 text-gray-600 relative z-10">{category.description}</CardDescription>
                
                {/* Interactive background element */}
                <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-tr from-transparent to-brand-light-gray opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardHeader>
              <CardContent className="pb-6">
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center text-brand-primary font-medium">
                    <span>Explore services</span>
                    <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="text-xs text-gray-400">{category.services.length} solutions</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile/Tablet view - Carousel */}
        <div className="lg:hidden mb-12">
          <Carousel className="w-full">
            <CarouselContent>
              {serviceCategories.map((category, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <ServiceCarouselCard
                      icon={category.icon}
                      color={category.color}
                      title={category.title}
                      description={category.description}
                      services={category.services}
                      isSelected={selectedCardIndex === index}
                    />
                    <div className="flex justify-center mt-4">
                      <Button 
                        variant={selectedCardIndex === index ? "default" : "outline"}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCardSelection(index);
                        }}
                        className="text-sm"
                      >
                        {selectedCardIndex === index ? "Hide Details" : "Show Details"}
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-4">
              <CarouselPrevious className="relative static transform-none mr-2 h-8 w-8" />
              <CarouselNext className="relative static transform-none h-8 w-8" />
            </div>
          </Carousel>
        </div>

        {/* Services highlights in a more visual way */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Brain, title: "AI-Powered", desc: "Leverage the latest in artificial intelligence to optimize your business processes", color: "from-purple-500 to-indigo-600" },
            { icon: Settings, title: "Customizable", desc: "Solutions tailored to your specific industry needs and business goals", color: "from-blue-500 to-cyan-600" },
            { icon: LineChart, title: "Data-Driven", desc: "Make informed decisions with comprehensive analytics and reporting", color: "from-cyan-500 to-teal-600" }
          ].map((feature, idx) => (
            <div key={idx} 
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-brand-accent-blue/20 group"
            >
              <div className="mb-5">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up">
          <a href="#contact" className="inline-flex items-center px-8 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white font-medium transition-all hover:scale-105 relative overflow-hidden group">
            <span className="relative z-10">Let's Discuss Your Project</span>
            <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand-accent-blue group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
      
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
                        <h4 className="text-lg font-semibold mb-2 cursor-pointer flex justify-between items-center">
                          <span>{service.title}</span>
                          <ChevronRight className="h-5 w-5 text-brand-primary opacity-70" />
                        </h4>
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
              
              <div className="mt-8 flex justify-end">
                <Button onClick={() => setIsSheetOpen(false)}>
                  Close
                </Button>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Services;
