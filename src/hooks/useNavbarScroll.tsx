
import { useState, useEffect } from 'react';

export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialView, setIsInitialView] = useState(true);
  const [isPausedOnHero, setIsPausedOnHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section'); // First section is Hero
      const heroRect = heroSection?.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Determine if the page has been scrolled past threshold
      if (window.scrollY > 20) {
        setIsScrolled(true);
        setIsInitialView(false);
      } else {
        setIsScrolled(false);
        setIsInitialView(true);
      }

      // Check if we should pause on Hero section
      if (heroRect && heroRect.bottom > 0 && heroRect.bottom < viewportHeight * 1.2) {
        setIsPausedOnHero(true);
      } else {
        setIsPausedOnHero(false);
      }

      // Calculate scroll progress percentage (0-100)
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled, scrollProgress, isInitialView, isPausedOnHero };
}
