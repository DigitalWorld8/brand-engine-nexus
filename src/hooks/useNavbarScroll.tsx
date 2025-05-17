
import { useState, useEffect } from 'react';
import { useScroll } from './useScroll';
import { useIsMobile } from './use-mobile';

interface NavbarScrollState {
  isScrolled: boolean;
  scrollProgress: number;
  isInitialView: boolean;
  hasScrolled: boolean;
  initialScrollBuffer: number;
}

export function useNavbarScroll() {
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();
  const [navbarState, setNavbarState] = useState<NavbarScrollState>({
    isScrolled: isMobile, // Start as scrolled on mobile
    scrollProgress: 0,
    isInitialView: !isMobile, // Not initial view on mobile
    hasScrolled: false,
    initialScrollBuffer: 0
  });

  useEffect(() => {
    // On mobile, we'll always treat it as scrolled
    if (isMobile) {
      setNavbarState({
        isScrolled: true,
        isInitialView: false,
        hasScrolled: true,
        initialScrollBuffer: 0,
        scrollProgress: 0
      });
      return;
    }
    
    // Calculate scroll progress
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
    
    // Highly responsive threshold - immediate transition between initial and scrolled states
    if (scrollY > 1) { // Reduced from 3 to 1 for almost immediate response
      setNavbarState({
        isScrolled: true,
        isInitialView: false,
        hasScrolled: true,
        initialScrollBuffer: 0,
        scrollProgress: Math.min(progress, 100)
      });
    } else {
      setNavbarState({
        isScrolled: false,
        isInitialView: true,
        hasScrolled: scrollY > 0, 
        initialScrollBuffer: scrollY * 10, // Increased from 8 to 10 for more amplified small scroll movements
        scrollProgress: Math.min(progress, 100)
      });
    }
  }, [scrollY, isMobile]);

  return navbarState;
}
