import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  external = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-heading font-semibold transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-spiced-paprika text-white hover:bg-opacity-90 focus:ring-spiced-paprika shadow-md",
    secondary: "bg-spiced-charcoal text-white hover:bg-opacity-90 focus:ring-spiced-charcoal shadow-md",
    outline: "bg-transparent border-2 border-spiced-charcoal text-spiced-charcoal hover:bg-spiced-charcoal hover:text-white focus:ring-spiced-charcoal",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    if (external) {
      return (
        <a href={to} className={combinedStyles} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={to} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
};

export default Button;