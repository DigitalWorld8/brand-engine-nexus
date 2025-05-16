
import { useState, useEffect } from 'react';
import { ServiceCategory } from '@/types/services.types';

export const useServicesInteraction = () => {
  const [activeService, setActiveService] = useState<ServiceCategory | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [lastInteractedService, setLastInteractedService] = useState<string | null>(null);
  const [interactionCount, setInteractionCount] = useState(0);

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
    // Track if this is the same service being clicked again
    const isRepeatedClick = service.title === activeService?.title;
    
    // Update interaction metrics
    setLastInteractedService(service.title);
    setInteractionCount(prev => prev + 1);
    
    // Set animation states
    setIsAnimating(true);
    setActiveService(isRepeatedClick ? null : service);
    
    // Animation state reset
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return {
    activeService,
    isAnimating,
    isInView,
    lastInteractedService,
    interactionCount,
    handleServiceClick,
  };
};
