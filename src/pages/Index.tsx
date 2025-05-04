
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
        leftSideCTA={
          <div className="flex flex-col items-center w-[150px] text-center">
            <Award className="h-10 w-10 text-brand-primary mb-2" />
            <p className="text-sm font-medium text-brand-primary">Award-winning design team</p>
            <ChevronRight className="mt-1 text-brand-accent-blue" />
          </div>
        }
        rightSideCTA={
          <div className="flex flex-col items-center w-[150px] text-center">
            <Button size="sm" variant="outline" className="mb-2 border-brand-accent-blue text-brand-accent-blue">
              <ExternalLink className="h-4 w-4 mr-1" /> Case Studies
            </Button>
            <p className="text-xs text-gray-600">See our success stories</p>
          </div>
        }
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
        leftSideCTA={
          <div className="flex flex-col items-center w-[150px] text-center">
            <div className="flex mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-brand-accent-violet fill-brand-accent-violet" />
              ))}
            </div>
            <p className="text-sm font-medium text-brand-accent-violet">5-star rated on Clutch</p>
          </div>
        }
        rightSideCTA={
          <div className="flex flex-col items-center w-[150px] text-center p-2">
            <p className="text-sm font-bold text-brand-accent-violet mb-1">Limited Time Offer</p>
            <p className="text-xs text-brand-primary mb-2">Free strategy session</p>
            <Button size="sm" className="bg-brand-accent-violet hover:bg-brand-accent-violet/80 text-white text-xs px-2 py-1">
              Book Now <ChevronRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        }
      />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
