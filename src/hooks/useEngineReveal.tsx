
import { useEffect } from "react";

export function useEngineReveal() {
  useEffect(() => {
    const handleScroll = () => {
      const engineParts = document.querySelectorAll('[data-engine-part="true"]');
      
      engineParts.forEach(part => {
        const rect = part.getBoundingClientRect();
        // Check if element is in viewport
        if (rect.top < window.innerHeight - 100) {
          part.classList.add('engine-part-visible');
        }
      });
    };

    // Initial check
    setTimeout(handleScroll, 500);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
