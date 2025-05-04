
import React from 'react';
import { cn } from '@/lib/utils';

interface CTATagsProps {
  tags: string[];
  variant?: 'gradient' | 'dark' | 'purple-dots';
}

const CTATags = ({ tags, variant = 'gradient' }: CTATagsProps) => {
  // Define styles based on variant
  const tagStyles = {
    gradient: 'bg-brand-light-gray text-gray-600',
    dark: 'bg-brand-primary/80 text-brand-accent-blue/90',
    'purple-dots': 'bg-brand-accent-violet/10 text-brand-accent-violet'
  };

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      {tags.map((tag, i) => (
        <span 
          key={i} 
          className={cn(`px-3 py-1 rounded-full text-sm font-medium ${tagStyles[variant]}`)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default CTATags;
