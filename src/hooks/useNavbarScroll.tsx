
import { useState, useEffect, useRef } from 'react';

export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialView, setIsInitialView] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  // Track initial scroll amount to create a threshold effect
  const [initialScrollBuffer, setInitialScrollBuffer] = useState(0);
  // New state to track if first scroll has been completed
  const [hasCompletedFirstScroll, setHasCompletedFirstScroll] = useState(false);
  // Ref to track initial load
  const initialLoadRef = useRef(true);

  useEffect(() => {
    // Auto-scroll to top on first load with slight delay for better UX
    if (initialLoadRef.current) {
      initialLoadRef.current = false;
      
      // Set a small timeout to allow for initial render
      const initialTimer = setTimeout(() => {
        if (window.scrollY > 0) {
          // If page loads scrolled down, smoothly bring back to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 300);
      
      return () => clearTimeout(initialTimer);
    }
  }, []);

  useEffect(() => {
    // For a smoother initial load experience
    const initialScrollCheck = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
        setIsInitialView(false);
        setHasScrolled(true);
        
        // If we're already scrolled on load, consider first scroll completed
        if (!hasCompletedFirstScroll) {
          setHasCompletedFirstScroll(true);
        }
      } else {
        setIsScrolled(false);
        setIsInitialView(true);
        // Reset buffer when at the top
        setInitialScrollBuffer(0);
      }
    };
    
    initialScrollCheck();
    
    // Advanced debounce technique for smoother iPhone-like transitions
    let lastScrollY = window.scrollY;
    let ticking = false;
    let scrollTimeoutId: number;
    let transitionTimeoutId: number;
    
    const handleScroll = () => {
      // Calculate how much the user has scrolled
      const currentScrollY = window.scrollY;
      
      // First scroll behavior - handle the initial scroll specially
      if (!hasCompletedFirstScroll && currentScrollY > 20) {
        // Instead of auto-scrolling to top, let the first scroll complete naturally
        // This allows the user to see the initial scroll animation
        // Then mark first scroll as completed for future scrolls
        setHasCompletedFirstScroll(true);
        
        // On first scroll, trigger visual changes but don't interfere with scroll
        setIsScrolled(true);
        setIsInitialView(false);
        return; // Exit early after handling first scroll
      }
      
      // Check if user has scrolled back to top with increased buffer zone
      if (currentScrollY <= 40) {
        setIsScrolled(false);
        setIsInitialView(true);
        setInitialScrollBuffer(0);
      }
      
      // Normal scrolling behavior after first scroll is completed
      if (hasCompletedFirstScroll) {
        // If we're not ticking, request animation frame for performance
        if (!ticking) {
          window.requestAnimationFrame(() => {
            // Clear existing timeouts to prevent jerking
            if (scrollTimeoutId) {
              window.clearTimeout(scrollTimeoutId);
            }
            
            // Set timeout for actual state update with increased delay for smoother transitions
            scrollTimeoutId = window.setTimeout(() => {
              // Smooth transition between states with increased threshold
              if (lastScrollY > 70) {
                if (!isScrolled) {
                  setIsScrolled(true);
                  
                  // Delay the initial view transition slightly
                  transitionTimeoutId = window.setTimeout(() => {
                    setIsInitialView(false);
                  }, 200);
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
            }, 60);
          });
          
          ticking = true;
        }
      } else {
        // Implement scroll resistance for initial scrolling behavior
        if (currentScrollY < 200 && !hasCompletedFirstScroll) {
          // Visual indication of scrolling before actual page movement
          if (currentScrollY > 70 && !isScrolled) { 
            setIsScrolled(true);
            
            // Delay the initial view transition to create a smoother stepped effect
            transitionTimeoutId = window.setTimeout(() => {
              setIsInitialView(false);
            }, 400);
          }
          
          if (initialScrollBuffer < 90) {
            // Let the visual effects happen but delay actual scrolling
            setInitialScrollBuffer(prev => Math.min(prev + 5, 100));
          } else {
            // Mark as complete once buffer threshold is reached
            setHasCompletedFirstScroll(true);
          }
        }
      }
      
      lastScrollY = window.scrollY;
      
      // Set hasScrolled to true when user scrolls beyond threshold
      if (!hasScrolled && lastScrollY > 120) {
        setHasScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutId) window.clearTimeout(scrollTimeoutId);
      if (transitionTimeoutId) window.clearTimeout(transitionTimeoutId);
    };
  }, [isScrolled, hasScrolled, initialScrollBuffer, hasCompletedFirstScroll]);

  return { 
    isScrolled, 
    scrollProgress, 
    isInitialView, 
    hasScrolled, 
    initialScrollBuffer,
    hasCompletedFirstScroll
  };
}
