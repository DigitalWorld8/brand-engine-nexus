
import { Code, Globe, Palette } from 'lucide-react';
import { ServiceCategory } from '@/types/services.types';

export const serviceCategories: ServiceCategory[] = [
  {
    icon: Code,
    color: 'bg-gradient-to-r from-[#1b1464] to-[#3a2b9e]',
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
  },
  {
    icon: Globe,
    color: 'bg-gradient-to-r from-[#596ae9] to-[#7986f1]',
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
    icon: Palette,
    color: 'bg-gradient-to-r from-[#09a4d5] to-[#35bde8]',
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
  }
];
