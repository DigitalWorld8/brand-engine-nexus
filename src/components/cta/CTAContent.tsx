
import React from 'react';
import CTATags from './CTATags';

interface CTAContentProps {
  variant?: 'gradient' | 'dark' | 'purple-dots';
  title: string;
  subtitle: string;
  tags: string[];
}

const CTAContent = ({
  variant = 'gradient',
  title,
  subtitle,
  tags
}: CTAContentProps) => {
  // Define styles based on variant
  const titleStyles = {
    gradient: 'text-brand-primary',
    dark: 'text-white',
    'purple-dots': 'text-brand-primary'
  };

  const accentStyles = {
    gradient: 'text-brand-secondary',
    dark: 'text-brand-accent-blue',
    'purple-dots': 'text-brand-accent-violet'
  };

  const subtitleStyles = {
    gradient: 'text-gray-600',
    dark: 'text-gray-200',
    'purple-dots': 'text-gray-600'
  };

  // Split title to apply accent color to last word
  const titleWords = title.split(' ');
  const lastWord = titleWords.pop();
  const titleStart = titleWords.join(' ');

  return (
    <div className="max-w-2xl">
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 leading-tight ${titleStyles[variant]}`}>
        <span>{titleStart} </span>
        <span className={accentStyles[variant]}>{lastWord}</span>
      </h2>
      <p className={`text-lg mb-8 font-medium ${subtitleStyles[variant]}`}>
        {subtitle}
      </p>
      <CTATags tags={tags} variant={variant} />
    </div>
  );
};

export default CTAContent;
