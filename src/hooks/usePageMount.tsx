
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
    
    // Add a slight delay to ensure smooth animation completion
    const animationTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 800); // Match this with the duration of your initial animations
    
    return () => {
      document.body.classList.remove('page-loaded');
      clearTimeout(animationTimer);
    };
  }, []);

  const handleBannerClick = () => {
    setShowBanner(false);
    // Scroll to the hero section
    window.scrollTo({
      top: window.innerHeight * 0.05,
      behavior: 'smooth'
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
