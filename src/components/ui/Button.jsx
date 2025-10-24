import React from 'react';

const Button = ({ 
  variant = 'primary', 
  size = 'default',
  children, 
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  icon,
  ...props 
}) => {
  const baseStyles = 'font-outfit uppercase font-medium text-[13px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-brand-black text-brand-white hover:bg-opacity-90',
    secondary: 'bg-brand-lime text-brand-black hover:bg-opacity-90',
    tertiary: 'border-2 border-brand-black text-brand-black bg-transparent hover:bg-brand-black hover:text-brand-white',
    complete: 'bg-brand-lime text-brand-black hover:bg-opacity-90',
  };
  
  const sizes = {
    default: 'w-[130px] h-[30px]',
    // small size will be added later
  };

  // For complete variant, override children
  const content = variant === 'complete' ? 'Completed' : children;
  const leadingIcon = variant === 'complete' ? (
    <img src="/assets/icons/checkmark.svg" alt="" className="w-4 h-4" />
  ) : icon;

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {leadingIcon}
      {content}
    </button>
  );
};

export default Button;

