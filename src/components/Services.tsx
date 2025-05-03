
import React from 'react';
import { Palette, Globe, Brain, Code, LineChart, Settings } from 'lucide-react';

const ServiceCard = ({ 
  icon: Icon, 
  color, 
  title, 
  description
}: { 
  icon: React.ElementType; 
  color: string; 
  title: string; 
  description: string;
}) => (
  <div className="service-card group">
    <div 
      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${color}`}
    >
      <Icon className="h-8 w-8 text-white" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Palette,
      color: 'bg-brand-primary',
      title: 'Design & Branding',
      description: 'Crafting visual identities that communicate trust, style, and purpose. From logos to complete brand guidelines.',
    },
    {
      icon: Globe,
      color: 'bg-brand-accent-blue',
      title: 'Digital Marketing',
      description: 'Drive visibility and engagement through strategic content, SEO optimization and targeted campaigns.',
    },
    {
      icon: Brain,
      color: 'bg-brand-accent-violet',
      title: 'AI Solutions',
      description: 'Implement intelligent chat agents, persona-based lead bots, and multilingual support assistants.',
    },
    {
      icon: Code,
      color: 'bg-brand-secondary',
      title: 'Digital Transformation',
      description: 'Transform your business with custom websites, e-commerce solutions, and mobile-first UX strategies.',
    },
    {
      icon: LineChart,
      color: 'bg-brand-accent-blue',
      title: 'Performance Analytics',
      description: 'Track, measure, and optimize with comprehensive analytics and performance reporting.',
    },
    {
      icon: Settings,
      color: 'bg-brand-primary',
      title: 'Digital Automation',
      description: 'Streamline operations with smart booking systems, CRM integration, and workflow automation.',
    },
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
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              color={service.color} 
              title={service.title} 
              description={service.description} 
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
