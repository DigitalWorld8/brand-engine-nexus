import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Industries from '@/components/Industries';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import FAQCollapsible from '@/components/FAQCollapsible';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CTABanner from '@/components/cta/CTABanner';
import { useIsMobile } from '@/hooks/use-mobile';
type PageContentProps = {
  isInitialView: boolean;
};
const PageContent: React.FC<PageContentProps> = ({
  isInitialView
}) => {
  const isMobile = useIsMobile();
  return <>
      {/* Show hero section with proper spacing for navbar */}
      <div className="pt-0 py-0">
        <Hero />
      </div>
      
      {/* The rest of the content with reduced blur effect - no blur on mobile */}
      <div className={isInitialView && !isMobile ? 'opacity-95' : ''}>
        <Services />
        <CTABanner variant="gradient" title="Ready for Innovative Solutions?" subtitle="Discover how our cutting-edge approaches can transform your business operations and drive growth in today's competitive landscape." tags={["Strategy", "Innovation", "Results", "Support"]} primaryButtonText="Schedule a Consultation" secondaryButtonText="Explore Services" />
        <Industries />
        <About />
        <Testimonials />
        <FAQCollapsible />
        <CTABanner variant="purple-dots" title="Let's Build Something Amazing" subtitle="Join the ranks of our successful clients who have experienced remarkable growth through our partnership and expertise." tags={["Partnership", "Excellence", "Growth", "Success"]} primaryButtonText="Start Your Journey" secondaryButtonText="View Case Studies" />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </>;
};
export default PageContent;