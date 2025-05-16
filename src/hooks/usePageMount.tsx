
import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from './use-mobile';

export function usePageMount() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);
  const isMobile = useIsMobile();
  const animationTimeoutRef = useRef<number | null>(null);
  
  useEffect(() => {
    // First set mounted to true
    setMounted(true);
    
    // Add class to body when mounted to control blur effects
    document.body.classList.add('page-loaded');
    
    // Skip animations on mobile
    if (isMobile) {
      setAnimationComplete(true);
      setScrollLocked(false);
      return;
    }
    
    // Add scroll lock class to body - make sure this is applied properly
    document.body.classList.add('scroll-locked');
    
    // Use requestAnimationFrame for smoother initial load
    requestAnimationFrame(() => {
      // Add a slight delay to ensure smooth animation completion
      animationTimeoutRef.current = window.setTimeout(() => {
        setAnimationComplete(true);
        
        // Release scroll lock after animations complete
        setTimeout(() => {
          setScrollLocked(false);
          document.body.classList.remove('scroll-locked');
          document.body.classList.add('animations-complete');
        }, 400); // Increased to 400ms to ensure animations are fully complete
      }, 500); // Increased from 300ms to 500ms
    });
    
    return () => {
      document.body.classList.remove('page-loaded');
      document.body.classList.remove('scroll-locked');
      document.body.classList.remove('animations-complete');
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [isMobile]);

  const handleBannerClick = () => {
    setShowBanner(false);
    
    // Only allow scrolling if animations are complete
    if (animationComplete) {
      // Scroll to the hero section with optimized animation
      const scrollOptions = { 
        top: window.innerHeight * 0.05,
        behavior: 'auto' as ScrollBehavior
      };
      
      // Use requestAnimationFrame for smoother scroll initiation
      requestAnimationFrame(() => {
        window.scrollTo(scrollOptions);
      });
    }
  };

  return {
    mounted,
    showBanner: showBanner && !isMobile, // Don't show banner on mobile
    setShowBanner,
    handleBannerClick,
    opacityFactor: mounted ? 1 : 0,
    animationComplete,
    scrollLocked
  };
}
