import { useState, useEffect } from 'react';

export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialView, setIsInitialView] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  // Track initial scroll amount to create a threshold effect
  const [initialScrollBuffer, setInitialScrollBuffer] = useState(0);

  useEffect(() => {
    // For a smoother initial load experience
    const initialScrollCheck = () => {
      if (window.scrollY > 50) { // Increased scroll threshold to 50px
        setIsScrolled(true);
        setIsInitialView(false);
        setHasScrolled(true);
      } else {
        setIsScrolled(false);
        setIsInitialView(true);
        // Reset buffer when at the top
        setInitialScrollBuffer(0);
      }
    };
    
    initialScrollCheck();
    
    // Advanced debounce technique for smoother transitions
    let lastScrollY = window.scrollY;
    let ticking = false;
    let scrollTimeoutId: number;
    let transitionTimeoutId: number;
    
    const handleScroll = () => {
      // Calculate how much the user has scrolled
      const currentScrollY = window.scrollY;
      
      // Once scrolled past threshold, always keep navbar in scrolled state
      if (currentScrollY > 50) {
        if (!isScrolled) {
          setIsScrolled(true);
          
          // Delay the initial view transition slightly for smoother appearance
          transitionTimeoutId = window.setTimeout(() => {
            setIsInitialView(false);
          }, 100);
        }
        setHasScrolled(true);
      } 
      // Only reset to initial state if user goes completely back to top
      else if (currentScrollY <= 20) {
        setIsScrolled(false);
        setIsInitialView(true);
        setInitialScrollBuffer(0);
      }
      
      // Implement scroll resistance for initial scrolling
      if (currentScrollY < 150) {
        // Only increment buffer on downward scroll
        if (currentScrollY > lastScrollY && !hasScrolled) {
          setInitialScrollBuffer(prev => Math.min(prev + (currentScrollY - lastScrollY) * 0.2, 100));
        }
        
        // Only mark as scrolled once we pass the buffer threshold
        if (initialScrollBuffer > 90 && !hasScrolled) {
          setHasScrolled(true);
        }
      }
      
      lastScrollY = window.scrollY;
      
      // Calculate scroll progress with improved smoothing
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
          const progress = (lastScrollY / scrollHeight) * 100;
          setScrollProgress(Math.min(progress, 100));
          ticking = false;
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
  }, [isScrolled, hasScrolled, initialScrollBuffer]);

  return { isScrolled, scrollProgress, isInitialView, hasScrolled, initialScrollBuffer };
}
