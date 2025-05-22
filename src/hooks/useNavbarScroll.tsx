
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
  const [navbarState, setNavbarState] = useState<NavbarScrollState>({
    isScrolled: isMobile, // Start as scrolled on mobile
    scrollProgress: 0,
    isInitialView: !isMobile, // Not initial view on mobile
    hasScrolled: false,
    initialScrollBuffer: 0,
    isScrollingUp: false,
    initialScrollOccurred: false
  });
  
  // Use ref to track previous state to minimize unnecessary updates
  const prevScrollY = useRef(0);

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
    
    // Skip unnecessary updates for small scroll changes
    if (Math.abs(scrollY - prevScrollY.current) < 1 && navbarState.isScrolled === (scrollY > 1)) {
      return;
    }
    
    prevScrollY.current = scrollY;
    
    // Calculate scroll progress
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
    
    // Check if scrolling up
    const isScrollingUp = direction === 'up';
    
    // If user has scrolled down and is now scrolling up, instantly return to top state
    if (initialScrollOccurred && isScrollingUp && scrollY < 50) {
      setNavbarState({
        isScrolled: false,
        isInitialView: true,
        hasScrolled: scrollY > 0,
        initialScrollBuffer: 0,
        scrollProgress: Math.min(progress, 100),
        isScrollingUp,
        initialScrollOccurred
      });
      return;
    }
    
    // Simple threshold - immediate transition between initial and scrolled states
    setNavbarState({
      isScrolled: scrollY > 1,
      isInitialView: scrollY <= 1,
      hasScrolled: scrollY > 0,
      initialScrollBuffer: scrollY <= 1 ? scrollY * 10 : 0,
      scrollProgress: Math.min(progress, 100),
      isScrollingUp,
      initialScrollOccurred
    });
  }, [scrollY, isMobile, direction, initialScrollOccurred]);

  return navbarState;
}
