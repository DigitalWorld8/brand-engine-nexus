
import React from 'react';
import CTAButton from './CTAButton';

interface CTAActionsProps {
  variant?: 'gradient' | 'dark' | 'purple-dots';
  primaryButtonText: string;
  secondaryButtonText: string;
}

const CTAActions = ({
  variant = 'gradient',
  primaryButtonText,
  secondaryButtonText
}: CTAActionsProps) => {
  const clientTextStyles = {
    gradient: 'text-gray-500',
    dark: 'text-gray-300',
    'purple-dots': 'text-gray-500'
  };

  return (
    <div className="flex flex-col gap-4 md:min-w-[240px]">
      <CTAButton variant={variant} isPrimary={true}>
        {primaryButtonText}
      </CTAButton>
      
      <CTAButton variant={variant} isPrimary={false}>
        {secondaryButtonText}
      </CTAButton>
      
      <div className="mt-4 text-center">
        <p className={`text-sm font-medium ${clientTextStyles[variant]}`}>
          Join 200+ satisfied clients
        </p>
      </div>
    </div>
  );
};

export default CTAActions;
