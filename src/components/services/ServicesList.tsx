
import React, { useState, useEffect } from 'react';
import ServiceCard from './ServiceCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from 'lucide-react';

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

interface ServicesListProps {
  serviceCategories: ServiceCategory[];
  onServiceClick: (service: ServiceCategory) => void;
  activeServiceId?: string;
}

const ServicesList = ({ serviceCategories, onServiceClick, activeServiceId }: ServicesListProps) => {
  const [expandedService, setExpandedService] = useState<ServiceCategory | null>(null);
  const [previousActiveId, setPreviousActiveId] = useState<string | undefined>(undefined);
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  // Track active service changes to properly handle animations
  useEffect(() => {
    if (activeServiceId !== previousActiveId) {
      setPreviousActiveId(activeServiceId);
      
      // Find the expanded service based on active ID
      const active = serviceCategories.find(cat => cat.title === activeServiceId);
      if (active) {
        setExpandedService(active);
      } else {
        setExpandedService(null);
      }
    }
  }, [activeServiceId, previousActiveId, serviceCategories]);

  const handleServiceClick = (category: ServiceCategory) => {
    if (expandedService?.title === category.title) {
      setExpandedService(null);
    } else {
      setExpandedService(category);
    }
    onServiceClick(category);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  const serviceItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="mb-16">
      {/* Desktop view - Grid layout with animated cards */}
      <motion.div 
        className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {serviceCategories.map((category, index) => (
          <motion.div 
            key={index} 
            variants={cardVariants}
            onMouseEnter={() => setHoveredItemIndex(index)}
            onMouseLeave={() => setHoveredItemIndex(null)}
            className={hoveredItemIndex !== null && hoveredItemIndex !== index ? "opacity-90 scale-[0.98] transition-all" : ""}
          >
            <ServiceCard 
              category={category}
              onClick={() => handleServiceClick(category)}
              isActive={category.title === activeServiceId}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile/Tablet view - Enhanced Carousel with microinteractions */}
      <div className="lg:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {serviceCategories.map((category, index) => (
              <CarouselItem 
                key={index} 
                className="sm:basis-1/1 md:basis-1/2 p-1"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ServiceCard 
                    category={category}
                    onClick={() => handleServiceClick(category)}
                    isMobile={true}
                    isActive={category.title === activeServiceId}
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-3">
            <CarouselPrevious className="relative static transform-none rounded-full border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white transition-colors" />
            <CarouselNext className="relative static transform-none rounded-full border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white transition-colors" />
          </div>
        </Carousel>
      </div>
      
      {/* Service details section with enhanced microinteractions */}
      <AnimatePresence>
        {expandedService && (
          <motion.div
            className="mt-8 p-4 md:p-6 bg-white rounded-xl shadow-lg border border-gray-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <motion.div 
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center ${expandedService.color}`}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                {React.createElement(expandedService.icon, { className: "h-6 w-6 sm:h-7 sm:w-7 text-white" })}
              </motion.div>
              <motion.div
                initial={{ x: -5, opacity: 0.8 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-0">{expandedService.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{expandedService.description}</p>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-3 mt-4 flex items-center">
                <motion.span 
                  className="inline-block w-2 h-2 bg-brand-primary rounded-full mr-2"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                />
                Our Services
              </h3>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {expandedService.services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-3 sm:p-4 rounded-lg transition-all"
                  variants={serviceItemVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -3,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                    backgroundColor: "rgba(255,255,255,1)"
                  }}
                >
                  <h4 className="font-semibold text-sm sm:text-base flex items-center">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-brand-primary" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </motion.svg>
                    {service.title}
                  </h4>
                  <p className="mt-1 sm:mt-2 text-gray-600 text-xs sm:text-sm pl-5 sm:pl-6 mb-3">{service.description}</p>
                  <div className="pl-5 sm:pl-6">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs bg-white hover:bg-brand-primary hover:text-white border-brand-primary/30"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main CTA button */}
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Button 
          size="lg" 
          className="bg-brand-primary text-white hover:bg-brand-accent-blue group transition-all duration-300 px-8 py-6 text-lg shadow-lg hover:shadow-xl"
        >
          <span>Check All Our Services</span>
          <motion.div
            className="ml-2 inline-block"
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }}
          >
            <ArrowRight className="h-5 w-5" />
          </motion.div>
        </Button>
      </motion.div>
    </div>
  );
};

export default ServicesList;
