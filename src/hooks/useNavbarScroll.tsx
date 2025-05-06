
import { useState, useEffect } from 'react';
import { useScroll } from './useScroll';

interface NavbarScrollState {
  isScrolled: boolean;
  scrollProgress: number;
  isInitialView: boolean;
  hasScrolled: boolean;
  initialScrollBuffer: number;
}

export function useNavbarScroll() {
  const { scrollY } = useScroll();
  const [navbarState, setNavbarState] = useState<NavbarScrollState>({
    isScrolled: false,
    scrollProgress: 0,
    isInitialView: true,
    hasScrolled: false,
    initialScrollBuffer: 0
  });

  useEffect(() => {
    // Calculate scroll progress
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollY / scrollHeight) * 100 : 0;
    
    // Use an extremely low threshold to ensure the navbar becomes sticky immediately upon scroll
    if (scrollY > 1) {
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
        initialScrollBuffer: 0,
        scrollProgress: Math.min(progress, 100)
      });
    }
  }, [scrollY]);

  return navbarState;
}
