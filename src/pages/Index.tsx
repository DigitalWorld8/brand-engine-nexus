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
  const {
    isInitialView,
    scrollProgress
  } = useNavbarScroll();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  // Scale factor that increases as user scrolls (90% to 100%)
  const scaleFactor = isInitialView ? 0.9 : 1;
  const opacityFactor = mounted ? 1 : 0;
  return <div style={{
    opacity: opacityFactor
  }} className="min-h-screen transition-all duration-700 bg-[1b1464] bg-brand-primary">
      <Navbar />
      <div className="transform-gpu transition-all duration-700" style={{
      transform: `scale(${scaleFactor})`,
      transformOrigin: 'center top',
      marginBottom: isInitialView ? '-5vh' : '0'
    }}>
        <Hero />
        <Services />
        <CTABanner variant="gradient" title="Ready for Innovative Solutions?" subtitle="Discover how our cutting-edge approaches can transform your business operations and drive growth in today's competitive landscape." tags={["Strategy", "Innovation", "Results", "Support"]} primaryButtonText="Schedule a Consultation" secondaryButtonText="Explore Services" />
        <Industries />
        <About />
        <Testimonials />
        <FAQ />
        <CTABanner variant="purple-dots" title="Let's Build Something Amazing" subtitle="Join the ranks of our successful clients who have experienced remarkable growth through our partnership and expertise." tags={["Partnership", "Excellence", "Growth", "Success"]} primaryButtonText="Start Your Journey" secondaryButtonText="View Case Studies" />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
      
      {/* Scroll indicator that shows only when at the top of the page */}
      <ScrollIndicator />
    </div>;
};
export default Index;