
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Industries from '@/components/Industries';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CTABanner from '@/components/cta/CTABanner';
import ScrollIndicator from '@/components/ScrollIndicator';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';

const Index = () => {
  const { isInitialView, scrollProgress, isPausedOnHero } = useNavbarScroll();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    
    // Add scroll snapping behavior for Hero
    const handleWheel = (e) => {
      const hero = document.querySelector('section');
      if (isPausedOnHero) {
        const rect = hero.getBoundingClientRect();
        if ((rect.bottom > 0 && e.deltaY > 0) || (rect.top < window.innerHeight && e.deltaY < 0)) {
          e.preventDefault();
          window.scrollTo({
            top: e.deltaY > 0 ? rect.height : 0,
            behavior: 'smooth'
          });
        }
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isPausedOnHero]);

  // Scale factor that increases as user scrolls (90% to 100%)
  const initialScaleFactor = isInitialView ? 0.9 : 1;
  // Enhanced scale factor for Hero section when paused
  const scaleFactor = isPausedOnHero ? 1.05 : initialScaleFactor;
  const opacityFactor = mounted ? 1 : 0;
  
  return (
    <div 
      className="min-h-screen transition-all duration-700"
      style={{ opacity: opacityFactor }}
    >
      <Navbar />
      <div 
        className="transform-gpu transition-all duration-700" 
        style={{ 
          transform: `scale(${scaleFactor})`,
          transformOrigin: 'center top',
          marginBottom: isInitialView ? '-5vh' : '0'
        }}
      >
        <Hero />
        <Services />
        <CTABanner 
          variant="gradient"
          title="Ready for Innovative Solutions?"
          subtitle="Discover how our cutting-edge approaches can transform your business operations and drive growth in today's competitive landscape."
          tags={["Strategy", "Innovation", "Results", "Support"]}
          primaryButtonText="Schedule a Consultation"
          secondaryButtonText="Explore Services"
        />
        <Industries />
        <About />
        <Testimonials />
        <FAQ />
        <CTABanner 
          variant="purple-dots"
          title="Let's Build Something Amazing"
          subtitle="Join the ranks of our successful clients who have experienced remarkable growth through our partnership and expertise."
          tags={["Partnership", "Excellence", "Growth", "Success"]}
          primaryButtonText="Start Your Journey"
          secondaryButtonText="View Case Studies"
        />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      
      {/* Scroll indicator that shows only when at the top of the page */}
      <ScrollIndicator />
    </div>
  );
};

export default Index;
