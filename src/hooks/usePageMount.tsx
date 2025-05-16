
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
    
    // Add scroll lock class to body
    if (!isMobile) {
      document.body.classList.add('scroll-locked');
    }
    
    // Skip animations on mobile
    if (isMobile) {
      setAnimationComplete(true);
      setScrollLocked(false);
      return;
    }
    
    // Use requestAnimationFrame for smoother initial load
    requestAnimationFrame(() => {
      // Add a slight delay to ensure smooth animation completion
      animationTimeoutRef.current = window.setTimeout(() => {
        setAnimationComplete(true);
        
        // Release scroll lock after animations complete
        setTimeout(() => {
          setScrollLocked(false);
          document.body.classList.remove('scroll-locked');
        }, 200);
      }, 300); // Reduced from 600ms to 300ms
    });
    
    return () => {
      document.body.classList.remove('page-loaded');
      document.body.classList.remove('scroll-locked');
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
        behavior: 'auto' as ScrollBehavior // Changed from 'smooth' to 'auto' for faster response
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
