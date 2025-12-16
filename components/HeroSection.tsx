import React from 'react';
import Button from './Button';

interface HeroSectionProps {
  headline: string;
  subHeadline: string | React.ReactNode;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  primaryCtaAction?: () => void;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subHeadline,
  primaryCtaText,
  primaryCtaLink,
  primaryCtaAction,
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
}) => {
  return (
    <section className="relative min-h-[600px] flex flex-col justify-center py-20 overflow-hidden">
      {/* Background Image & Overlay */}
      {backgroundImage && (
        <>
          <div className="absolute inset-0 z-0">
            <img 
              src={backgroundImage} 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-spiced-parchment/90 z-0 backdrop-blur-[2px]"></div>
          {/* Gradient fade at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spiced-parchment to-transparent z-0"></div>
        </>
      )}

      {/* Decorative background element (only visible if no image, or blended) */}
      {!backgroundImage && (
        <>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-spiced-turmeric/5 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-spiced-paprika/5 blur-3xl"></div>
        </>
      )}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight text-spiced-charcoal mb-8 tracking-tight drop-shadow-sm">
          {headline}
        </h1>
        <div className="text-lg md:text-xl text-spiced-charcoal/80 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
          {subHeadline}
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {primaryCtaText && (
            <Button 
              variant="primary" 
              to={primaryCtaLink} 
              onClick={primaryCtaAction}
              className="w-full sm:w-auto"
            >
              {primaryCtaText}
            </Button>
          )}
          {secondaryCtaText && (
            <Button 
              variant="outline" 
              to={secondaryCtaLink}
              className="w-full sm:w-auto bg-white/50 backdrop-blur-sm"
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;