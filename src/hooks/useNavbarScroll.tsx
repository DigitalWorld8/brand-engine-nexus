
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
      if (window.scrollY > 20) {
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
      
      // Check if user has scrolled back to top
      if (currentScrollY <= 10) {
        setIsScrolled(false);
        setIsInitialView(true);
        setInitialScrollBuffer(0);
      }
      
      // Implement scroll resistance for initial scrolling
      if (currentScrollY < 100) {
        // Prevent default scroll behavior for initial movements
        if (!hasScrolled) {
          // Only increment buffer on downward scroll
          if (currentScrollY > lastScrollY) {
            setInitialScrollBuffer(prev => Math.min(prev + (currentScrollY - lastScrollY) * 0.3, 100));
          }
          
          // Only mark as scrolled once we pass the buffer threshold
          if (initialScrollBuffer > 80) {
            setHasScrolled(true);
          }
          
          // Visual indication of scrolling before actual page movement
          if (currentScrollY > 20 && !isScrolled) {
            setIsScrolled(true);
            
            // Delay the initial view transition to create a stepped effect
            transitionTimeoutId = window.setTimeout(() => {
              setIsInitialView(false);
            }, 150);
          }
          
          // Prevent immediate default scrolling if we're still in buffer mode
          if (initialScrollBuffer < 80 && currentScrollY < 100) {
            // Let the visual effects happen but delay actual scrolling
            window.scrollTo({
              top: Math.min(3, currentScrollY * 0.15),
              behavior: 'auto'
            });
          }
        }
      }
      
      lastScrollY = window.scrollY;
      
      // Set hasScrolled to true when user scrolls beyond threshold
      if (!hasScrolled && lastScrollY > 50) {
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
              // Reset buffer when back at the top
              setInitialScrollBuffer(0);
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
  }, [isScrolled, hasScrolled, initialScrollBuffer]);

  return { isScrolled, scrollProgress, isInitialView, hasScrolled, initialScrollBuffer };
}
