
import { useState, useEffect } from 'react';

export function usePageMount() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Add class to body when mounted to control blur effects
    if (mounted) {
      document.body.classList.add('page-loaded');
    }
    
    return () => {
      document.body.classList.remove('page-loaded');
    };
  }, [mounted]);

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
    opacityFactor: mounted ? 1 : 0
  };
}
