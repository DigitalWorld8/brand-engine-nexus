
import { useEffect } from 'react';

export function useScrollReveal(selector = '.scroll-fade-up') {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(selector);

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}

export default useScrollReveal;
