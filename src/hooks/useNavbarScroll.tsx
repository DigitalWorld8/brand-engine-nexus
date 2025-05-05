
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
      if (window.scrollY > 80) { // Increased threshold for better detection
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
    
    // Advanced debounce technique for smoother iPhone-like transitions
    let lastScrollY = window.scrollY;
    let ticking = false;
    let scrollTimeoutId: number;
    let transitionTimeoutId: number;
    
    const handleScroll = () => {
      // Calculate how much the user has scrolled
      const currentScrollY = window.scrollY;
      
      // Check if user has scrolled back to top with increased buffer zone
      if (currentScrollY <= 40) { // Improved threshold for top-of-page detection
        setIsScrolled(false);
        setIsInitialView(true);
        setInitialScrollBuffer(0);
      }
      
      // Implement scroll resistance for initial scrolling with more gradual progression (iPhone-like)
      if (currentScrollY < 200) { // Increased to allow more scroll before transitioning
        // Prevent default scroll behavior for initial movements
        if (!hasScrolled) {
          // Only increment buffer on downward scroll with reduced multiplier for smoother transition
          if (currentScrollY > lastScrollY) {
            setInitialScrollBuffer(prev => Math.min(prev + (currentScrollY - lastScrollY) * 0.12, 100)); 
          }
          
          // Only mark as scrolled once we pass the buffer threshold
          if (initialScrollBuffer > 90) { // Increased threshold for longer scroll experience
            setHasScrolled(true);
          }
          
          // Visual indication of scrolling before actual page movement
          if (currentScrollY > 70 && !isScrolled) { 
            setIsScrolled(true);
            
            // Delay the initial view transition to create a smoother stepped effect
            transitionTimeoutId = window.setTimeout(() => {
              setIsInitialView(false);
            }, 400); // Increased delay for smoother transition
          }
          
          // Prevent immediate default scrolling if we're still in buffer mode (iPhone-like resistance)
          if (initialScrollBuffer < 90 && currentScrollY < 200) {
            // Let the visual effects happen but delay actual scrolling with more gradual acceleration
            window.scrollTo({
              top: Math.min(10, currentScrollY * 0.06), // Reduced multiplier for slower scroll with more resistance
              behavior: 'auto'
            });
          }
        }
      }
      
      lastScrollY = window.scrollY;
      
      // Set hasScrolled to true when user scrolls beyond threshold
      if (!hasScrolled && lastScrollY > 120) { // Increased threshold
        setHasScrolled(true);
      }
      
      if (!ticking) {
        // Use requestAnimationFrame for better performance and smoother animations
        window.requestAnimationFrame(() => {
          // Clear existing timeouts to prevent jerking
          if (scrollTimeoutId) {
            window.clearTimeout(scrollTimeoutId);
          }
          
          // Set timeout for actual state update with increased delay for smoother transitions
          scrollTimeoutId = window.setTimeout(() => {
            // Smooth transition between states with increased threshold (iPhone-like smoothness)
            if (lastScrollY > 70) {
              if (!isScrolled) {
                setIsScrolled(true);
                
                // Delay the initial view transition slightly
                transitionTimeoutId = window.setTimeout(() => {
                  setIsInitialView(false);
                }, 200); // Increased delay
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
          }, 60); // Increased delay for smoother transitions
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
