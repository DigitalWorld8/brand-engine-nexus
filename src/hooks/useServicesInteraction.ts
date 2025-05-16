
import { useState, useEffect, useCallback } from 'react';
import { ServiceCategory } from '@/types/services.types';

export const useServicesInteraction = () => {
  const [activeService, setActiveService] = useState<ServiceCategory | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Track when section comes into view with improved observer options
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          // Only reset view state when scrolled far away
          if (entry.intersectionRatio < 0.05) {
            setIsInView(false);
          }
        }
      },
      { threshold: [0.05, 0.25, 0.5], rootMargin: "0px 0px -10% 0px" }
    );
    
    const section = document.getElementById('services');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  // Enhanced service click handler with smoother transitions
  const handleServiceClick = useCallback((service: ServiceCategory) => {
    // Don't animate if clicking the already active service
    if (activeService?.title === service.title) {
      return;
    }
    
    setIsAnimating(true);
    setIsTransitioning(true);
    
    // Short delay before changing the active service for smoother transition
    setTimeout(() => {
      setActiveService(service);
    }, 50);
    
    // Scroll to services section with smoother animation
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      });
    }
    
    // Reset animation states with proper timing
    setTimeout(() => {
      setIsAnimating(false);
      
      // Additional delay before considering transition complete
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 500);
  }, [activeService]);

  return {
    activeService,
    isAnimating,
    isInView,
    isTransitioning,
    handleServiceClick,
  };
};
