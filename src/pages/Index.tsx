
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

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <CTABanner />
      <Industries />
      <About />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
