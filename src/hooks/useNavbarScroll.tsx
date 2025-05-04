
import { useState, useEffect } from 'react';

export function useNavbarScroll() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFlags, setShowFlags] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Show flags after scrolling down a bit
      if (window.scrollY > 200) {
        setShowFlags(true);
      } else {
        setShowFlags(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isScrolled, showFlags };
}
