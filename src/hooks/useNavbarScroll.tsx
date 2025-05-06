
import { useState, useEffect } from 'react';

export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialView, setIsInitialView] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [initialScrollBuffer, setInitialScrollBuffer] = useState(0);
  // Add scroll stage tracking for the zoom effect
  const [scrollStage, setScrollStage] = useState(0); // 0: initial, 1: first scroll, 2: second scroll, 3: fully zoomed

  useEffect(() => {
    // For a smoother initial load experience
    const initialScrollCheck = () => {
      if (window.scrollY > 50) {
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
      
      // Track scroll stages for zoom effect
      if (currentScrollY <= 20) {
        setScrollStage(0); // Initial view
      } else if (currentScrollY <= 100) {
        setScrollStage(1); // First scroll stage
      } else if (currentScrollY <= 200) {
        setScrollStage(2); // Second scroll stage
      } else {
        setScrollStage(3); // Fully zoomed stage
      }
      
      // Check if user has scrolled back to top
      if (currentScrollY <= 20) {
        setIsScrolled(false);
        setIsInitialView(true);
        setInitialScrollBuffer(0);
      }
      
      // Implement scroll resistance for initial scrolling
      if (currentScrollY < 150) {
        // Prevent default scroll behavior for initial movements
        if (!hasScrolled) {
          // Only increment buffer on downward scroll
          if (currentScrollY > lastScrollY) {
            setInitialScrollBuffer(prev => Math.min(prev + (currentScrollY - lastScrollY) * 0.2, 100));
          }
          
          // Only mark as scrolled once we pass the buffer threshold
          if (initialScrollBuffer > 90) {
            setHasScrolled(true);
          }
          
          // Visual indication of scrolling before actual page movement
          if (currentScrollY > 50 && !isScrolled) {
            setIsScrolled(true);
            
            // Delay the initial view transition to create a stepped effect
            transitionTimeoutId = window.setTimeout(() => {
              setIsInitialView(false);
            }, 200);
          }
          
          // Prevent immediate default scrolling if we're still in buffer mode
          if (initialScrollBuffer < 90 && currentScrollY < 150) {
            // Let the visual effects happen but delay actual scrolling
            window.scrollTo({
              top: Math.min(5, currentScrollY * 0.1),
              behavior: 'auto'
            });
          }
        }
      }
      
      lastScrollY = window.scrollY;
      
      // Set hasScrolled to true when user scrolls beyond threshold
      if (!hasScrolled && lastScrollY > 80) {
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
            if (lastScrollY > 50) {
              if (!isScrolled) {
                setIsScrolled(true);
                
                // Delay the initial view transition slightly
                transitionTimeoutId = window.setTimeout(() => {
                  setIsInitialView(false);
                }, 100);
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
          }, 20);
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

  return { isScrolled, scrollProgress, isInitialView, hasScrolled, initialScrollBuffer, scrollStage };
}
