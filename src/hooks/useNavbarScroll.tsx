
import { useState, useEffect } from 'react';
import { useScroll } from './useScroll';

interface NavbarScrollState {
  isScrolled: boolean;
  scrollProgress: number;
  isInitialView: boolean;
}

export function useNavbarScroll() {
  const { scrollY } = useScroll();
  const [navbarState, setNavbarState] = useState<NavbarScrollState>({
    isScrolled: false,
    scrollProgress: 0,
    isInitialView: true,
  });

  useEffect(() => {
    // Calculate scroll progress
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollY / scrollHeight) * 100;
    
    // Update navbar state based on scroll position - show full navbar when scrolled past threshold
    if (scrollY > 50) {
      setNavbarState({
        isScrolled: true,
        isInitialView: false,
        scrollProgress: Math.min(progress, 100)
      });
    } else if (scrollY <= 20) {
      setNavbarState({
        isScrolled: false,
        isInitialView: true,
        scrollProgress: Math.min(progress, 100)
      });
    } else {
      // Handle the in-between zone (20-50px)
      setNavbarState(prev => ({
        ...prev,
        scrollProgress: Math.min(progress, 100)
      }));
    }
  }, [scrollY]);

  return navbarState;
}
