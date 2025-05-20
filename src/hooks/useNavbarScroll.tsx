
import { useState, useEffect } from 'react';
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
    
    // Calculate scroll progress
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
    
    // Check if scrolling up
    const isScrollingUp = direction === 'up';
    
    // If user has scrolled down and is now scrolling up, instantly return to top state
    if (initialScrollOccurred && isScrollingUp && scrollY < 100) {
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
    
    // Highly responsive threshold - immediate transition between initial and scrolled states
    if (scrollY > 1) {
      setNavbarState({
        isScrolled: true,
        isInitialView: false,
        hasScrolled: true,
        initialScrollBuffer: 0,
        scrollProgress: Math.min(progress, 100),
        isScrollingUp,
        initialScrollOccurred
      });
    } else {
      setNavbarState({
        isScrolled: false,
        isInitialView: true,
        hasScrolled: scrollY > 0, 
        initialScrollBuffer: scrollY * 10,
        scrollProgress: Math.min(progress, 100),
        isScrollingUp,
        initialScrollOccurred
      });
    }
  }, [scrollY, isMobile, direction, initialScrollOccurred]);

  return navbarState;
}
