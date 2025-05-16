
import React, { useState, useEffect, useRef } from 'react';
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
  const [isExpanding, setIsExpanding] = useState(false);
  const expandedRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Track active service changes to properly handle animations
  useEffect(() => {
    if (activeServiceId !== previousActiveId) {
      setPreviousActiveId(activeServiceId);
      
      // Find the expanded service
      const service = serviceCategories.find(s => s.title === activeServiceId);
      
      if (service) {
        setIsExpanding(true);
        // Small delay for smoother animations
        setTimeout(() => {
          setExpandedService(service);
          setIsExpanding(false);
        }, 150);
      } else if (expandedService) {
        setIsExpanding(true);
        // Small delay before clearing expanded service
        setTimeout(() => {
          setExpandedService(null);
          setIsExpanding(false);
        }, 150);
      }
    }
  }, [activeServiceId, previousActiveId, serviceCategories, expandedService]);

  // Scroll expanded section into view with smooth animation
  useEffect(() => {
    if (expandedService && expandedRef.current) {
      setTimeout(() => {
        expandedRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });
      }, 300);
    }
  }, [expandedService]);

  const handleServiceClick = (category: ServiceCategory) => {
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
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 50,
        damping: 8
      } 
    }
  };

  // Enhanced expanded service variants
  const expandedVariants = {
    hidden: { opacity: 0, height: 0, y: -20 },
    visible: { 
      opacity: 1, 
      height: 'auto', 
      y: 0,
      transition: { 
        duration: 0.4,
        type: "spring",
        stiffness: 70,
        damping: 12
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      y: -10,
      transition: { duration: 0.3 }
    }
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
          <motion.div key={index} variants={cardVariants}>
            <ServiceCard 
              category={category}
              onClick={() => handleServiceClick(category)}
              isActive={category.title === activeServiceId}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile/Tablet view - Enhanced Carousel with improved animations */}
      <div className="lg:hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {serviceCategories.map((category, index) => (
              <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 p-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 50,
                    damping: 8
                  }}
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
            <CarouselPrevious className="relative static transform-none rounded-full border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white" />
            <CarouselNext className="relative static transform-none rounded-full border-brand-primary/20 text-brand-primary hover:bg-brand-primary hover:text-white" />
          </div>
        </Carousel>
      </div>
      
      {/* Service details section with improved animations */}
      <AnimatePresence mode="wait">
        {expandedService && (
          <motion.div
            ref={expandedRef}
            className="mt-8 p-4 md:p-6 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
            variants={expandedVariants}
            initial="hidden"
            animate={isExpanding ? "hidden" : "visible"}
            exit="exit"
            key={`expanded-${expandedService.title}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <motion.div 
                className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center ${expandedService.color}`}
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              >
                {React.createElement(expandedService.icon, { className: "h-6 w-6 sm:h-7 sm:w-7 text-white" })}
              </motion.div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-0">{expandedService.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{expandedService.description}</p>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold mb-3 mt-4">Our Services</h3>
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {expandedService.services.map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 p-3 sm:p-4 rounded-lg hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }}
                  whileHover={{ 
                    x: 5, 
                    backgroundColor: "rgba(240, 245, 255, 0.9)",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
                    transition: { duration: 0.2 } 
                  }}
                >
                  <h4 className="font-semibold text-sm sm:text-base flex items-center">
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-brand-primary" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                      initial={{ scale: 0.8, opacity: 0.8 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.08 + 0.2 }}
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </motion.svg>
                    {service.title}
                  </h4>
                  <p className="mt-1 sm:mt-2 text-gray-600 text-xs sm:text-sm pl-5 sm:pl-6">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesList;
