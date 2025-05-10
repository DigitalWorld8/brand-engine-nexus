
import { useState, useEffect } from 'react';

export function usePageMount() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    // First set mounted to true
    setMounted(true);
    
    // Add class to body when mounted to control blur effects
    document.body.classList.add('page-loaded');
    
    // Use requestAnimationFrame for smoother initial load
    requestAnimationFrame(() => {
      // Add a slight delay to ensure smooth animation completion
      const animationTimer = setTimeout(() => {
        setAnimationComplete(true);
      }, 600); // Reduced from 800ms to 600ms
      
      return () => clearTimeout(animationTimer);
    });
    
    return () => {
      document.body.classList.remove('page-loaded');
    };
  }, []);

  const handleBannerClick = () => {
    setShowBanner(false);
    // Scroll to the hero section with optimized animation
    const scrollOptions = { 
      top: window.innerHeight * 0.05,
      behavior: 'smooth' as ScrollBehavior
    };
    
    // Use requestAnimationFrame for smoother scroll initiation
    requestAnimationFrame(() => {
      window.scrollTo(scrollOptions);
    });
  };

  return {
    mounted,
    showBanner,
    setShowBanner,
    handleBannerClick,
    opacityFactor: mounted ? 1 : 0,
    animationComplete
  };
}
