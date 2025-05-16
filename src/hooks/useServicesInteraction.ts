
import { useState, useEffect } from 'react';
import { ServiceCategory } from '@/types/services.types';

export const useServicesInteraction = () => {
  const [activeService, setActiveService] = useState<ServiceCategory | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInView, setIsInView] = useState(false);

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

  return {
    activeService,
    isAnimating,
    isInView,
    handleServiceClick,
  };
};
