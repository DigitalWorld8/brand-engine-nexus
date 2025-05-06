
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
    
    // Update navbar state based on scroll position - show full navbar when scrolled past threshold
    if (scrollY > 50) {
      setNavbarState(prev => ({
        ...prev,
        isScrolled: true,
        isInitialView: false,
        hasScrolled: true,
        scrollProgress: Math.min(progress, 100)
      }));
    } else if (scrollY <= 20) {
      setNavbarState(prev => ({
        ...prev,
        isScrolled: false,
        isInitialView: true,
        initialScrollBuffer: 0,
        scrollProgress: Math.min(progress, 100)
      }));
    } else {
      // Handle the in-between zone (20-50px)
      setNavbarState(prev => ({
        ...prev,
        initialScrollBuffer: prev.initialScrollBuffer + 1,
        scrollProgress: Math.min(progress, 100)
      }));
    }
  }, [scrollY]);

  return navbarState;
}
