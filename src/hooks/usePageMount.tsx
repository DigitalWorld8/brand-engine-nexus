
import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from './use-mobile';

export function usePageMount() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [scrollLocked, setScrollLocked] = useState(true);
  const isMobile = useIsMobile();
  const animationTimeoutRef = useRef<number | null>(null);
  
  // Immediately apply scroll lock to html and body elements
  useEffect(() => {
    if (scrollLocked && !isMobile) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.left = '0';
      document.body.style.width = '100%';
      document.body.style.height = '100%';
      
      // Force the window to top
      window.scrollTo(0, 0);
      
      document.body.classList.add('scroll-locked');
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      document.body.classList.remove('scroll-locked');
      document.body.classList.add('animations-complete');
    }
    
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.width = '';
      document.body.style.height = '';
      
      document.body.classList.remove('scroll-locked');
      document.body.classList.remove('animations-complete');
    };
  }, [scrollLocked, isMobile]);
  
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
      window.addEventListener('wheel', preventScroll, { passive: false, capture: true });
      window.addEventListener('touchmove', preventScroll, { passive: false, capture: true });
      window.addEventListener('DOMMouseScroll', preventScroll, { passive: false, capture: true } as any);
      window.addEventListener('mousewheel', preventScroll, { passive: false, capture: true } as any);
      window.addEventListener('keydown', (e) => {
        // Prevent arrow keys, space, page up/down, home/end from scrolling
        if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode) && scrollLocked) {
          e.preventDefault();
          return false;
        }
        return true;
      }, { passive: false, capture: true });
      
      // Disable touch scrolling
      document.addEventListener('touchstart', preventScroll, { passive: false, capture: true });
      document.addEventListener('touchend', preventScroll, { passive: false, capture: true });
    }
    
    return () => {
      window.removeEventListener('wheel', preventScroll, { capture: true } as any);
      window.removeEventListener('touchmove', preventScroll, { capture: true } as any);
      window.removeEventListener('DOMMouseScroll', preventScroll, { capture: true } as any);
      window.removeEventListener('mousewheel', preventScroll, { capture: true } as any);
      window.removeEventListener('keydown', preventScroll, { capture: true } as any);
      document.removeEventListener('touchstart', preventScroll, { capture: true } as any);
      document.removeEventListener('touchend', preventScroll, { capture: true } as any);
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
    
    // Make sure scroll is at top on load
    window.scrollTo(0, 0);
        
    // Use requestAnimationFrame for smoother initial load
    requestAnimationFrame(() => {
      // Longer delay to ensure smooth animation completion
      animationTimeoutRef.current = window.setTimeout(() => {
        setAnimationComplete(true);
        
        // Release scroll lock after animations complete with a longer delay
        setTimeout(() => {
          console.log('Preparing to unlock scroll...');
          setScrollLocked(false);
          console.log('Animations complete, scroll unlocked');
        }, 1000); // Increased to 1000ms to ensure animations are fully complete
      }, 1200); // Increased from 800ms to 1200ms for more complete animation
    });
    
    return () => {
      document.body.classList.remove('page-loaded');
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
