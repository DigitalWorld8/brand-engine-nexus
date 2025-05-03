
import React, { useState } from 'react';
import { Palette, Globe, Brain, Code, LineChart, Settings, ChevronDown } from 'lucide-react';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

interface ServiceItemProps {
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description }) => (
  <div className="py-4 border-b border-gray-100 last:border-b-0">
    <h4 className="text-lg font-semibold mb-1">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface ServiceCardProps {
  icon: React.ElementType;
  color: string;
  title: string;
  description: string;
  services: ServiceItemProps[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  icon: Icon, 
  color, 
  title, 
  description,
  services
}) => {
  return (
    <div className="service-card group">
      <div 
        className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${color}`}
      >
        <Icon className="h-8 w-8 text-white" />
      </div>
      
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="services">
          <AccordionTrigger className="text-brand-primary">
            View Services
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-2 pb-1">
              {services.map((service, idx) => (
                <ServiceItem 
                  key={idx} 
                  title={service.title} 
                  description={service.description} 
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

const Services = () => {
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
    <section id="services" className="section bg-brand-light-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-gray-600">
            We offer comprehensive digital solutions to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <ServiceCard 
              key={index} 
              icon={category.icon} 
              color={category.color} 
              title={category.title} 
              description={category.description}
              services={category.services}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
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
