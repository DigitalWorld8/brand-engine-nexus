
import { useState, useEffect } from 'react';
import { useScroll } from './useScroll';

interface NavbarScrollState {
  isScrolled: boolean;
  scrollProgress: number;
  isInitialView: boolean;
  hasScrolled: boolean;
  initialScrollBuffer: number;
  scrollDirection: 'up' | 'down' | null;
  lastScrollY: number;
}

export function useNavbarScroll() {
  const { scrollY } = useScroll();
  const [navbarState, setNavbarState] = useState<NavbarScrollState>({
    isScrolled: false,
    scrollProgress: 0,
    isInitialView: true,
    hasScrolled: false,
    initialScrollBuffer: 0,
    scrollDirection: null,
    lastScrollY: 0
  });

  useEffect(() => {
    // Calculate scroll progress
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
    
    // Determine scroll direction
    const direction = scrollY > navbarState.lastScrollY ? 'down' : 
                      scrollY < navbarState.lastScrollY ? 'up' : 
                      navbarState.scrollDirection;
    
    // Highly responsive threshold - immediate transition between initial and scrolled states
    if (scrollY > 1) { // Reduced threshold for immediate response
      setNavbarState({
        isScrolled: true,
        isInitialView: false,
        hasScrolled: true,
        initialScrollBuffer: 0,
        scrollProgress: Math.min(progress, 100),
        scrollDirection: direction,
        lastScrollY: scrollY
      });
    } else {
      setNavbarState({
        isScrolled: false,
        isInitialView: true,
        hasScrolled: scrollY > 0, 
        initialScrollBuffer: scrollY * 10, // Amplified small scroll movements
        scrollProgress: Math.min(progress, 100),
        scrollDirection: direction,
        lastScrollY: scrollY
      });
    }
  }, [scrollY]);

  return navbarState;
}
