
import { useState, useEffect } from 'react';
import { useScroll } from './useScroll';

interface NavbarScrollState {
  isScrolled: boolean;
  scrollProgress: number;
  isInitialView: boolean;
  hasScrolled: boolean;
  initialScrollBuffer: number;
  isMorphed: boolean; // State for morph effect
}

export function useNavbarScroll() {
  const { scrollY } = useScroll();
  const [navbarState, setNavbarState] = useState<NavbarScrollState>({
    isScrolled: false,
    scrollProgress: 0,
    isInitialView: true,
    hasScrolled: false,
    initialScrollBuffer: 0,
    isMorphed: false
  });

  useEffect(() => {
    // Calculate scroll progress
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
    
    // Determine when to morph - engage morph effect after scrolling 35% of viewport height
    const morphThreshold = window.innerHeight * 0.35;
    const isMorphed = scrollY > morphThreshold;
    
    // More elegant threshold logic with additional subtle buffer zones
    if (scrollY > 5) {
      setNavbarState({
        isScrolled: true,
        isInitialView: false,
        hasScrolled: true,
        initialScrollBuffer: 0,
        scrollProgress: Math.min(progress, 100),
        isMorphed: isMorphed
      });
    } else {
      setNavbarState({
        isScrolled: false,
        isInitialView: true,
        hasScrolled: scrollY > 0, 
        initialScrollBuffer: scrollY * 5,
        scrollProgress: Math.min(progress, 100),
        isMorphed: false
      });
    }
  }, [scrollY]);

  return navbarState;
}
