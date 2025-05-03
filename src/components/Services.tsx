
import React, { useState } from 'react';
import { Palette, Globe, Brain, Code, LineChart, Settings } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServiceCarouselCard from './ServiceCarouselCard';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  
  const serviceCategories = [
    {
      icon: Palette,
      color: 'bg-brand-primary',
      title: 'Design & Branding',
      description: 'Crafting visual identities that communicate trust, style, and purpose. From logos to complete brand guidelines.',
      services: [
        {
          title: 'Brand Identity Design',
          description: 'Comprehensive brand identity development to establish your unique market position.'
        },
        {
          title: 'Logo Design (English + Arabic)',
          description: 'Professional bilingual logo design that resonates with diverse audiences.'
        },
        {
          title: 'Social Media Visuals',
          description: 'Eye-catching templates and graphics optimized for social media platforms.'
        },
        {
          title: 'Business Cards & Stationery',
          description: 'Professional print materials that extend your brand presence offline.'
        },
        {
          title: 'Brand Guidelines Creation',
          description: 'Detailed documentation to ensure brand consistency across all touchpoints.'
        },
        {
          title: 'Rebranding & Brand Refresh',
          description: 'Revitalize your existing brand while preserving brand equity and recognition.'
        }
      ]
    },
    {
      icon: Globe,
      color: 'bg-brand-accent-blue',
      title: 'Digital Marketing',
      description: 'Drive visibility and engagement through strategic content, SEO optimization and targeted campaigns.',
      services: [
        {
          title: 'Search Engine Optimization (SEO)',
          description: 'Data-driven strategies to improve visibility and drive relevant traffic.'
        },
        {
          title: 'Web Content Writing',
          description: 'Compelling copy that engages visitors and converts them to customers.'
        },
        {
          title: 'Blogging (English + Arabic)',
          description: 'Regular, bilingual content to establish thought leadership and boost SEO.'
        },
        {
          title: 'Email Marketing Campaigns',
          description: 'Targeted email strategies that nurture leads and strengthen customer relationships.'
        },
        {
          title: 'Social Media Strategy',
          description: 'Platform-specific content calendars and growth strategies.'
        },
        {
          title: 'Performance Analytics & Tracking',
          description: 'Comprehensive reporting on KPIs and ROI for continuous optimization.'
        }
      ]
    },
    {
      icon: Code,
      color: 'bg-brand-secondary',
      title: 'Digital Services',
      description: 'Transform your business with intelligent solutions for automation, AI integration, and digital transformation.',
      services: [
        {
          title: 'AI Solutions',
          description: 'Implement AI chat agents, persona-based lead bots, and multilingual support assistants.'
        },
        {
          title: 'Digital Transformation',
          description: 'Build custom websites, e-commerce solutions, and mobile-first UX strategies.'
        },
        {
          title: 'Digital Automation',
          description: 'Streamline operations with smart booking systems, CRM integration, and workflow automation.'
        },
        {
          title: 'Multilingual Support',
          description: 'Create fully localized digital experiences for diverse language audiences.'
        },
        {
          title: 'Custom Web Applications',
          description: 'Develop tailored web solutions that address your specific business challenges.'
        },
        {
          title: 'System Integration',
          description: 'Connect and optimize your business tools for seamless data flow and productivity.'
        }
      ]
    }
  ];

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
        
        <div className="mb-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onSelect={(index) => {
              if (typeof index === 'number') {
                setActiveCardIndex(index);
              }
            }}
          >
            <CarouselContent>
              {serviceCategories.map((category, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div 
                    className="animate-fade-in-up h-full cursor-pointer"
                    style={{ animationDelay: `${index * 150}ms` }}
                    onClick={() => setActiveCardIndex(index)}
                  >
                    <ServiceCarouselCard 
                      icon={category.icon} 
                      color={category.color} 
                      title={category.title} 
                      description={category.description}
                      services={category.services}
                      isSelected={activeCardIndex === index}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>

        <div className="flex justify-center mt-6 gap-3">
          {serviceCategories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCardIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeCardIndex === index ? 'bg-brand-primary scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-fade-in-up">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 rounded-lg bg-brand-primary hover:bg-brand-primary/90 text-white font-medium transition-all hover:scale-105"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
