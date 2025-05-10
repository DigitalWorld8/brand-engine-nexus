
import { useState, useEffect } from 'react';

export function usePageMount() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  
  useEffect(() => {
    // Prevent animation during initial render
    document.body.classList.add('preload');
    
    // Small delay to ensure DOM is ready before animations start
    const mountTimer = setTimeout(() => {
      setMounted(true);
      document.body.classList.add('page-loaded');
      document.body.classList.remove('preload');
      
      // After a short delay, mark initial render complete
      setTimeout(() => {
        setInitialRender(false);
      }, 100);
    }, 50);
    
    // Add a slight delay to ensure smooth animation completion
    const animationTimer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000); // Increased animation completion time for smoother transitions
    
    return () => {
      document.body.classList.remove('page-loaded');
      document.body.classList.remove('preload');
      clearTimeout(mountTimer);
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
    animationComplete,
    initialRender
  };
}
