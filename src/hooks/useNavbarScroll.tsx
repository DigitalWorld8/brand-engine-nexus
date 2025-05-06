
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
    const progress = (scrollY / scrollHeight) * 100;
    
    // Update navbar state based on scroll position - trigger sticky at 50px
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
        scrollProgress: Math.min(progress, 100)
      }));
    }
    
    // Implement scroll resistance for initial scrolling
    if (scrollY < 150 && !navbarState.hasScrolled) {
      setNavbarState(prev => {
        const newBuffer = Math.min(prev.initialScrollBuffer + scrollY * 0.2, 100);
        // Only mark as scrolled once we pass the buffer threshold
        const hasReachedThreshold = newBuffer > 90;
        
        return {
          ...prev,
          initialScrollBuffer: newBuffer,
          hasScrolled: hasReachedThreshold ? true : prev.hasScrolled
        };
      });
    }
  }, [scrollY, navbarState.hasScrolled]);

  return navbarState;
}
