
import { useState, useEffect, useRef } from 'react';
import { useIsMobile } from './use-mobile';

export function usePageMount() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const isMobile = useIsMobile();
  const animationTimeoutRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Check if user has seen animations before
    const hasSeenAnimations = localStorage.getItem('hasSeenAnimations') === 'true';
    
    // First set mounted to true
    setMounted(true);
    
    // Add class to body when mounted to control blur effects
    document.body.classList.add('page-loaded');
    
    // Skip animations on mobile or if already seen
    if (isMobile || hasSeenAnimations) {
      setAnimationComplete(true);
      return;
    }
    
    // Make sure scroll is at top on load for best animation experience
    window.scrollTo(0, 0);
        
    // Use requestAnimationFrame for smoother initial load
    requestAnimationFrame(() => {
      // Short delay for smooth animation
      animationTimeoutRef.current = window.setTimeout(() => {
        setAnimationComplete(true);
        document.body.classList.add('animations-complete');
        
        // Mark animations as seen for future visits
        localStorage.setItem('hasSeenAnimations', 'true');
      }, 100);
    });
    
    return () => {
      document.body.classList.remove('page-loaded');
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
        behavior: 'smooth' as ScrollBehavior
      };
      
      // Use requestAnimationFrame for smoother scroll initiation
      requestAnimationFrame(() => {
        window.scrollTo(scrollOptions);
      });
    }
  };

  return {
    mounted,
    showBanner: showBanner && !isMobile,
    setShowBanner,
    handleBannerClick,
    opacityFactor: mounted ? 1 : 0,
    animationComplete,
    scrollLocked: false
  };
}
