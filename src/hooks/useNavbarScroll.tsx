
import { useState, useEffect } from 'react';

export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialView, setIsInitialView] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // For a smoother initial load experience
    const initialScrollCheck = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
        setIsInitialView(false);
        setHasScrolled(true);
      }
    };
    
    initialScrollCheck();
    
    // Advanced debounce technique for smoother transitions
    let lastScrollY = window.scrollY;
    let ticking = false;
    let scrollTimeoutId: number;
    let transitionTimeoutId: number;
    
    const handleScroll = () => {
      lastScrollY = window.scrollY;
      
      // Set hasScrolled to true when user scrolls
      if (!hasScrolled && lastScrollY > 20) {
        setHasScrolled(true);
      }
      
      if (!ticking) {
        // Use requestAnimationFrame for better performance
        window.requestAnimationFrame(() => {
          // Clear existing timeouts to prevent jerking
          if (scrollTimeoutId) {
            window.clearTimeout(scrollTimeoutId);
          }
          
          // Set timeout for actual state update
          scrollTimeoutId = window.setTimeout(() => {
            // Smooth transition between states
            if (lastScrollY > 20) {
              if (!isScrolled) {
                setIsScrolled(true);
                
                // Delay the initial view transition slightly
                transitionTimeoutId = window.setTimeout(() => {
                  setIsInitialView(false);
                }, 50);
              }
            } else {
              setIsScrolled(false);
              setIsInitialView(true);
            }

            // Calculate scroll progress with improved smoothing
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (lastScrollY / scrollHeight) * 100;
            setScrollProgress(Math.min(progress, 100));
            
            ticking = false;
          }, 10);
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutId) window.clearTimeout(scrollTimeoutId);
      if (transitionTimeoutId) window.clearTimeout(transitionTimeoutId);
    };
  }, [isScrolled, hasScrolled]);

  return { isScrolled, scrollProgress, isInitialView, hasScrolled };
}
