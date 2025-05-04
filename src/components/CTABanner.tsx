
import React from 'react';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const CTABanner = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section 
      ref={ref} 
      className={`py-16 px-4 relative overflow-hidden bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent-violet ${isVisible ? 'reveal active' : 'reveal'}`}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
              Ready to Transform Your Business?
            </h2>
            <p className="text-white/80 text-lg mb-6">
              Take the first step toward digital excellence. Let's create innovative solutions together.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-brand-primary hover:bg-white/90 transition-all"
            >
              Schedule a Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
            >
              View Our Process <ChevronRight className="ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
