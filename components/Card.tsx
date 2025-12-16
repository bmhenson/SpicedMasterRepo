import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  linkTo: string;
  icon?: LucideIcon;
  variant?: 'default' | 'featured';
}

const Card: React.FC<CardProps> = ({ title, description, linkTo, icon: Icon, variant = 'default' }) => {
  return (
    <Link 
      to={linkTo} 
      className={`group block p-8 rounded-xl border transition-all duration-300 h-full flex flex-col justify-between
        ${variant === 'featured' 
          ? 'bg-spiced-charcoal text-white border-transparent shadow-xl hover:shadow-2xl hover:-translate-y-1' 
          : 'bg-white border-spiced-charcoal/10 hover:border-spiced-paprika/30 shadow-sm hover:shadow-lg hover:-translate-y-1'
        }`}
    >
      <div>
        {Icon && (
          <div className={`mb-6 inline-flex p-3 rounded-lg ${variant === 'featured' ? 'bg-white/10 text-spiced-turmeric' : 'bg-spiced-parchment text-spiced-paprika'}`}>
            <Icon size={28} />
          </div>
        )}
        <h3 className={`font-heading font-bold text-xl mb-3 ${variant === 'featured' ? 'text-white' : 'text-spiced-charcoal'}`}>
          {title}
        </h3>
        <p className={`leading-relaxed mb-6 ${variant === 'featured' ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
      <div className={`flex items-center font-semibold text-sm ${variant === 'featured' ? 'text-spiced-turmeric' : 'text-spiced-paprika'} group-hover:translate-x-1 transition-transform`}>
        Learn more <ArrowRight className="ml-2 w-4 h-4" />
      </div>
    </Link>
  );
};

export default Card;