import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bgColor?: 'parchment' | 'white' | 'charcoal';
  id?: string;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  bgColor = 'parchment',
  id
}) => {
  const bgColors = {
    parchment: 'bg-spiced-parchment',
    white: 'bg-white',
    charcoal: 'bg-spiced-charcoal text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bgColor]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;