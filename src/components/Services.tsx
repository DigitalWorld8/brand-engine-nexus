
import React, { useState, useEffect } from 'react';
import { 
  Palette, Globe, Code, Brain, Settings, BarChart3, ShieldCheck 
} from 'lucide-react';
import ServicesHeader from './services/ServicesHeader';
import ServicesList from './services/ServicesList';
import ServicesCallToAction from './services/ServicesCallToAction';
import ServicesBackgroundElements from './services/ServicesBackgroundElements';
import { motion } from 'framer-motion';

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
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  // Track when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.25 }
    );
    
    const section = document.getElementById('services');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const serviceCategories: ServiceCategory[] = [
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

  const handleServiceClick = (service: ServiceCategory) => {
    setIsAnimating(true);
    setActiveService(service);
    
    // Scroll to services section when a service is selected
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Animation state reset
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <motion.section 
      id="services" 
      className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-brand-light-gray/20 to-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated Path SVG */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path 
            d="M0,100 Q300,150 600,100 T1200,150" 
            stroke="rgba(27, 20, 100, 0.05)" 
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          <motion.path 
            d="M0,200 Q300,250 600,200 T1200,250" 
            stroke="rgba(9, 164, 213, 0.05)" 
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
          />
        </svg>
      </div>
      
      {/* Background Elements */}
      <ServicesBackgroundElements 
        activeService={Boolean(activeService)} 
        isAnimating={isAnimating} 
      />
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 md:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Floating animated circles */}
        <motion.div 
          className="absolute -top-10 -right-20 w-40 h-40 rounded-full bg-brand-accent-blue/5"
          animate={{ 
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute bottom-40 -left-20 w-60 h-60 rounded-full bg-brand-primary/5"
          animate={{ 
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse",
            delay: 1
          }}
        />
        
        {/* Section Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <ServicesHeader />
        </motion.div>

        {/* Service Categories with enhanced inline display */}
        <ServicesList 
          serviceCategories={serviceCategories} 
          onServiceClick={handleServiceClick}
          activeServiceId={activeService?.title} 
        />

        {/* Call to Action with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative"
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-br from-brand-accent-violet/10 to-transparent blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div 
            className="absolute -bottom-5 right-10 w-16 h-16 rounded-full bg-gradient-to-tl from-brand-accent-blue/10 to-transparent blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          
          <ServicesCallToAction />
        </motion.div>
      </motion.div>
      
      {/* Animated corner accent */}
      <div className="absolute bottom-0 right-0 w-40 h-40 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-brand-primary/10 to-transparent rounded-tl-[100%]"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
        />
      </div>
    </motion.section>
  );
};

export default Services;
