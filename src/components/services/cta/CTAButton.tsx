
import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CTAButtonProps {
  isPrimary?: boolean;
  children: React.ReactNode;
  icon?: 'arrow' | 'message';
}

const CTAButton = ({ isPrimary = true, children, icon }: CTAButtonProps) => {
  return isPrimary ? (
    <Button 
      size="lg" 
      className="bg-gradient-to-r from-brand-primary to-brand-accent-blue hover:from-brand-primary/90 hover:to-brand-accent-blue/90 text-white font-medium transition-all hover:scale-105 shadow-lg hover:shadow-xl px-8"
    >
      <span className="relative z-10 text-lg">{children}</span>
      {icon === 'arrow' && <ArrowRight className="ml-2 h-5 w-5" />}
    </Button>
  ) : (
    <Button 
      variant="outline" 
      size="lg" 
      className="bg-white border border-brand-primary/20 text-brand-primary font-medium transition-all hover:scale-105 shadow-md hover:shadow-lg hover:bg-brand-primary/5 px-8"
    >
      {icon === 'message' && <MessageSquare className="mr-2 h-5 w-5" />}
      <span>{children}</span>
    </Button>
  );
};

export default CTAButton;
