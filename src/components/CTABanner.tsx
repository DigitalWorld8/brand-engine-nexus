
import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card, CardContent } from './ui/card';

const CTABanner = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section 
      ref={ref} 
      className={`py-20 px-4 relative overflow-hidden ${isVisible ? 'reveal active' : 'reveal'}`}
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-brand-primary/5 -z-10"></div>
      
      {/* Subtle Pattern - Reduced opacity */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B1464' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <Card className="border border-brand-primary/10 shadow-md bg-white">
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 leading-tight text-brand-primary">
                  Ready to Transform <span className="text-brand-secondary">Your Business?</span>
                </h2>
                <p className="text-gray-600 text-lg mb-8 font-medium">
                  Take the first step toward digital excellence with our innovative solutions. 
                  Our team of experts is ready to help you achieve your goals.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-4">
                  {["Strategy", "Innovation", "Results", "Support"].map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-brand-light-gray rounded-full text-sm text-gray-600 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-4 md:min-w-[240px]">
                <Button 
                  size="lg" 
                  className="bg-brand-primary text-white hover:bg-brand-accent-blue hover:text-white transition-all group relative overflow-hidden font-semibold"
                >
                  <span className="relative z-10">Schedule a Consultation</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-brand-primary text-brand-primary hover:bg-brand-primary/5 group font-semibold"
                >
                  View Our Process 
                  <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="mt-4 text-center">
                  <p className="text-gray-500 text-sm font-medium">Join 200+ satisfied clients</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTABanner;
