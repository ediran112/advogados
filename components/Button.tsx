import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  icon,
  href,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center transition-all duration-300 font-medium tracking-wide uppercase text-sm py-3 px-6 rounded-sm group";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-gold to-[#EFA356] text-black hover:brightness-110 hover:shadow-[0_0_15px_rgba(249,219,171,0.3)]",
    outline: "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black",
    text: "text-white hover:text-brand-gold bg-transparent"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const content = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
      {variant !== 'text' && (
        <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <a 
        href={href} 
        className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};