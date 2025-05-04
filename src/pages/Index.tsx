
import React from 'react';
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
import CTABanner from '@/components/CTABanner';
import { ExternalLink, ChevronRight, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
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
  );
};

export default Index;
