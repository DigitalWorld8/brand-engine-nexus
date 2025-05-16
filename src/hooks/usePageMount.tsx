
import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from './use-mobile';

export function usePageMount() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);
  const isMobile = useIsMobile();
  const animationTimeoutRef = useRef<number | null>(null);
  
  // Add a listener to prevent scroll events
  useEffect(() => {
    const preventScroll = (e: Event) => {
      if (scrollLocked && !isMobile) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
      return true;
    };

    // Apply multiple event listeners to capture all scroll attempts
    if (scrollLocked && !isMobile) {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('keydown', (e) => {
        // Prevent arrow keys, space, page up/down from scrolling
        if ([32, 33, 34, 37, 38, 39, 40].includes(e.keyCode) && scrollLocked) {
          e.preventDefault();
          return false;
        }
        return true;
      }, { passive: false });
    }
    
    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScroll);
    };
  }, [scrollLocked, isMobile]);
  
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
      // Longer delay to ensure smooth animation completion
      animationTimeoutRef.current = window.setTimeout(() => {
        setAnimationComplete(true);
        
        // Release scroll lock after animations complete with a longer delay
        setTimeout(() => {
          setScrollLocked(false);
          document.body.classList.remove('scroll-locked');
          document.body.classList.add('animations-complete');
          console.log('Animations complete, scroll unlocked');
        }, 700); // Increased to 700ms to ensure animations are fully complete
      }, 800); // Increased from 500ms to 800ms for more complete animation
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
