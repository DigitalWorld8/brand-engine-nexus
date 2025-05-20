
import { useState, useEffect, useRef } from 'react';
import { useScroll } from './useScroll';
import { useIsMobile } from './use-mobile';

interface NavbarScrollState {
  isScrolled: boolean;
  scrollProgress: number;
  isInitialView: boolean;
  hasScrolled: boolean;
  initialScrollBuffer: number;
  isScrollingUp: boolean;
  initialScrollOccurred: boolean;
}

export function useNavbarScroll() {
  const { scrollY, direction, initialScrollOccurred } = useScroll();
  const isMobile = useIsMobile();
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const [navbarState, setNavbarState] = useState<NavbarScrollState>({
    isScrolled: isMobile, // Start as scrolled on mobile
    scrollProgress: 0,
    isInitialView: !isMobile, // Not initial view on mobile
    hasScrolled: false,
    initialScrollBuffer: 0,
    isScrollingUp: false,
    initialScrollOccurred: false
  });

  useEffect(() => {
    // On mobile, we'll always treat it as scrolled
    if (isMobile) {
      setNavbarState({
        isScrolled: true,
        isInitialView: false,
        hasScrolled: true,
        initialScrollBuffer: 0,
        scrollProgress: 0,
        isScrollingUp: false,
        initialScrollOccurred: true
      });
      return;
    }
    
    // Use requestAnimationFrame for performance optimization
    const updateNavbarState = () => {
      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
      
      // Check if scrolling up
      const isScrollingUp = direction === 'up';
      
      // If user has scrolled down and is now scrolling up, instantly return to top state
      if (initialScrollOccurred && isScrollingUp && scrollY < 100) {
        setNavbarState(prev => {
          // Only update if values have changed to prevent unnecessary renders
          if (prev.isScrolled || !prev.isInitialView) {
            return {
              isScrolled: false,
              isInitialView: true,
              hasScrolled: scrollY > 0,
              initialScrollBuffer: 0,
              scrollProgress: Math.min(progress, 100),
              isScrollingUp,
              initialScrollOccurred
            };
          }
          return prev;
        });
        return;
      }
      
      // Highly responsive threshold - immediate transition between initial and scrolled states
      const newIsScrolled = scrollY > 1;
      const newIsInitialView = !newIsScrolled;
      const newInitialScrollBuffer = newIsInitialView ? scrollY * 10 : 0;
      
      setNavbarState(prev => {
        // Only update state if values have changed
        if (
          prev.isScrolled !== newIsScrolled || 
          prev.isInitialView !== newIsInitialView ||
          prev.initialScrollBuffer !== newInitialScrollBuffer ||
          prev.isScrollingUp !== isScrollingUp ||
          Math.abs(prev.scrollProgress - progress) > 0.5 // Only update progress when changed significantly
        ) {
          return {
            isScrolled: newIsScrolled,
            isInitialView: newIsInitialView,
            hasScrolled: scrollY > 0,
            initialScrollBuffer: newInitialScrollBuffer,
            scrollProgress: Math.min(progress, 100),
            isScrollingUp,
            initialScrollOccurred
          };
        }
        return prev;
      });
      
      lastScrollY.current = scrollY;
      ticking.current = false;
    };

    // Use RAF for smooth updates
    if (!ticking.current) {
      requestAnimationFrame(updateNavbarState);
      ticking.current = true;
    }
  }, [scrollY, isMobile, direction, initialScrollOccurred]);

  return navbarState;
}
