
import { useState, useEffect } from 'react';

export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialView, setIsInitialView] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [initialScrollBuffer, setInitialScrollBuffer] = useState(0);
  const [scrollStage, setScrollStage] = useState(0); // 0: initial, 1: first scroll, 2: second scroll, 3: fully zoomed
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [scrollVelocity, setScrollVelocity] = useState(0);

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
    let lastScrollTime = Date.now();
    let ticking = false;
    let scrollTimeoutId: number;
    let transitionTimeoutId: number;
    
    const handleScroll = () => {
      // Calculate how much the user has scrolled
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeDelta = currentTime - lastScrollTime;
      
      // Calculate scroll velocity (pixels per millisecond)
      if (timeDelta > 0) {
        const rawVelocity = Math.abs(currentScrollY - lastScrollY) / timeDelta;
        // Apply some smoothing to velocity
        setScrollVelocity(prev => prev * 0.8 + rawVelocity * 0.2);
      }
      
      // Determine scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      // Track scroll stages for zoom effect with smoother transitions
      if (currentScrollY <= 20) {
        setScrollStage(0); // Initial view
      } else if (currentScrollY <= 150) {
        setScrollStage(1); // First scroll stage
      } else if (currentScrollY <= 300) {
        setScrollStage(2); // Second scroll stage
      } else {
        setScrollStage(3); // Fully zoomed stage
      }
      
      // Check if user has scrolled back to top with enhanced bounce
      if (currentScrollY <= 20) {
        setIsScrolled(false);
        setIsInitialView(true);
        setInitialScrollBuffer(0);
      }
      
      // Implement intelligent scroll resistance for initial scrolling
      if (currentScrollY < 150) {
        // Prevent default scroll behavior for initial movements
        if (!hasScrolled) {
          // Adjust buffer differently based on scroll direction
          if (currentScrollY > lastScrollY) {
            // Add resistance based on velocity - faster scrolls get more "give"
            const resistanceFactor = Math.min(0.3, 0.2 + scrollVelocity * 10);
            setInitialScrollBuffer(prev => Math.min(prev + (currentScrollY - lastScrollY) * resistanceFactor, 100));
          } else if (currentScrollY < lastScrollY) {
            // Less resistance when scrolling back up
            setInitialScrollBuffer(prev => Math.max(prev - (lastScrollY - currentScrollY) * 0.4, 0));
          }
          
          // Intelligent threshold for when to mark as scrolled based on velocity and direction
          const scrollThreshold = scrollVelocity > 0.1 ? 80 : 90;
          if (initialScrollBuffer > scrollThreshold) {
            setHasScrolled(true);
          }
          
          // Visual indication of scrolling before actual page movement with smarter timing
          if (currentScrollY > 50 && !isScrolled) {
            setIsScrolled(true);
            
            // Delay the initial view transition based on velocity
            const transitionDelay = Math.max(50, 200 - scrollVelocity * 1000);
            transitionTimeoutId = window.setTimeout(() => {
              setIsInitialView(false);
            }, transitionDelay);
          }
          
          // Prevent immediate default scrolling if we're still in buffer mode
          if (initialScrollBuffer < 90 && currentScrollY < 150) {
            // Intelligent scroll resistance - the faster you scroll, the less resistance
            const scrollFactor = Math.min(0.2, 0.1 + scrollVelocity * 5);
            window.scrollTo({
              top: Math.min(10, currentScrollY * scrollFactor),
              behavior: 'auto'
            });
          }
        }
      }
      
      lastScrollY = window.scrollY;
      lastScrollTime = currentTime;
      
      // Set hasScrolled to true when user scrolls beyond threshold with intelligence for fast scrolls
      if (!hasScrolled && (lastScrollY > 80 || scrollVelocity > 0.2)) {
        setHasScrolled(true);
      }
      
      if (!ticking) {
        // Use requestAnimationFrame for better performance
        window.requestAnimationFrame(() => {
          // Clear existing timeouts to prevent jerking
          if (scrollTimeoutId) {
            window.clearTimeout(scrollTimeoutId);
          }
          
          // Set timeout for actual state update with dynamic timing based on velocity
          const updateDelay = Math.max(10, 20 - scrollVelocity * 100);
          scrollTimeoutId = window.setTimeout(() => {
            // Smooth transition between states
            if (lastScrollY > 50) {
              if (!isScrolled) {
                setIsScrolled(true);
                
                // Delay the initial view transition slightly, shorter for fast scrolls
                const transDelay = Math.max(50, 100 - scrollVelocity * 500);
                transitionTimeoutId = window.setTimeout(() => {
                  setIsInitialView(false);
                }, transDelay);
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
          }, updateDelay);
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
  }, [isScrolled, hasScrolled, initialScrollBuffer, scrollVelocity]);

  return { 
    isScrolled, 
    scrollProgress, 
    isInitialView, 
    hasScrolled, 
    initialScrollBuffer, 
    scrollStage,
    scrollDirection,
    scrollVelocity
  };
}
