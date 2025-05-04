
import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import CTAContent from './CTAContent';
import CTAActions from './CTAActions';
import { cn } from '@/lib/utils';

interface CTABannerProps {
  variant?: 'gradient' | 'dark' | 'purple-dots';
  title?: string;
  subtitle?: string;
  tags?: string[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

const CTABanner = ({
  variant = 'gradient',
  title = 'Ready to Transform Your Business?',
  subtitle = 'Take the first step toward digital excellence with our innovative solutions. Our team of experts is ready to help you achieve your goals.',
  tags = ["Strategy", "Innovation", "Results", "Support"],
  primaryButtonText = 'Schedule a Consultation',
  secondaryButtonText = 'View Our Process',
}: CTABannerProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  // Define styles based on variant
  const bgStyles = {
    gradient: 'bg-brand-light-gray',
    dark: 'bg-brand-primary',
    'purple-dots': 'bg-gradient-to-tr from-brand-secondary/20 to-brand-accent-violet/30'
  };

  const patternStyles = {
    gradient: 'opacity-10',
    dark: 'opacity-5',
    'purple-dots': 'opacity-40'
  };

  const cardStyles = {
    gradient: 'border-brand-primary/10 shadow-md bg-white',
    dark: 'border-brand-accent-blue/20 shadow-lg bg-brand-primary/95 text-white',
    'purple-dots': 'border-brand-accent-violet/20 shadow-lg bg-white/95'
  };

  return (
    <section 
      ref={ref} 
      className={cn('py-20 px-4 relative overflow-hidden', isVisible ? 'reveal active' : 'reveal')}
    >
      {/* Background */}
      <div className={`absolute inset-0 ${bgStyles[variant]} -z-10`}></div>
      
      {/* Subtle Pattern with conditional rendering for purple dots */}
      {variant === 'purple-dots' ? (
        <div className="absolute inset-0 -z-5">
          {/* Purple Dot pattern */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-brand-accent-violet animate-float"
                style={{
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.5 + 0.2,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className={`absolute top-0 left-0 w-full h-full ${patternStyles[variant]} -z-10`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231B1464' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      )}
      
      {/* Main Card */}
      <div className="max-w-7xl mx-auto relative z-10">
        <Card className={`${cardStyles[variant]} w-full`}>
          <CardContent className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <CTAContent 
                variant={variant} 
                title={title} 
                subtitle={subtitle} 
                tags={tags} 
              />
              
              <CTAActions 
                variant={variant} 
                primaryButtonText={primaryButtonText} 
                secondaryButtonText={secondaryButtonText} 
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTABanner;
