
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  variant?: 'gradient' | 'dark' | 'purple-dots';
  isPrimary?: boolean;
  children: React.ReactNode;
  className?: string;
}

const CTAButton = ({ 
  variant = 'gradient', 
  isPrimary = true, 
  children, 
  className 
}: CTAButtonProps) => {
  
  // Determine styles based on variant and button type (primary/secondary)
  const primaryButtonStyles = {
    gradient: 'bg-brand-primary text-white hover:bg-brand-accent-blue hover:text-white',
    dark: 'bg-brand-accent-blue text-white hover:bg-brand-accent-violet hover:text-white',
    'purple-dots': 'bg-brand-accent-violet text-white hover:bg-brand-primary hover:text-white'
  };

  const secondaryButtonStyles = {
    gradient: 'border-brand-primary text-brand-primary hover:bg-brand-primary/5',
    dark: 'border-white text-white hover:bg-white/10',
    'purple-dots': 'border-brand-accent-violet text-brand-accent-violet hover:bg-brand-accent-violet/10'
  };

  const buttonStyles = isPrimary ? primaryButtonStyles[variant] : secondaryButtonStyles[variant];
  
  return (
    <Button 
      variant={isPrimary ? "default" : "outline"}
      size="lg" 
      className={cn(buttonStyles, 'group font-semibold transition-all', className)}
    >
      {children}
      {!isPrimary && (
        <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
      )}
    </Button>
  );
};

export default CTAButton;
