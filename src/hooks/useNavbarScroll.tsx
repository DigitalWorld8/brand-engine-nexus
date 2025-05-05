
import { useState, useEffect } from 'react';

export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialView, setIsInitialView] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Determine if the page has been scrolled past threshold
      if (window.scrollY > 20) {
        setIsScrolled(true);
        setIsInitialView(false);
      } else {
        setIsScrolled(false);
        setIsInitialView(true);
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

  return { isScrolled, scrollProgress, isInitialView };
}
