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
  credits,
  ...props 
}) => {
  const baseStyles = 'font-outfit uppercase font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-brand-black text-brand-white hover:bg-opacity-90',
    secondary: 'bg-brand-lime text-brand-black hover:bg-opacity-90',
    tertiary: 'border-2 border-brand-black text-brand-black bg-transparent hover:bg-brand-black hover:text-brand-white',
    complete: 'bg-brand-lime text-brand-black hover:bg-opacity-90',
    continue: 'border-2 border-brand-black text-brand-black bg-transparent hover:bg-brand-black hover:text-brand-white',
    challenge: 'border-2 border-brand-black text-brand-black bg-transparent hover:bg-brand-black hover:text-brand-white',
  };
  
  const sizes = {
    default: 'w-[130px] h-[30px] text-[13px]',
    large: 'w-full h-[40px] text-sm px-3',
  };

  // For complete variant, override children and add checkmark
  const content = variant === 'complete' ? 'Completed' : children;
  const leadingIcon = variant === 'complete' ? (
    <img src="/assets/icons/checkmark.svg" alt="" className="w-4 h-4" />
  ) : icon;
  
  // For primary, challenge, and continue variants with credits (not complete)
  const trailingContent = (variant === 'primary' || variant === 'challenge' || variant === 'continue') && credits !== undefined ? (
    <div className="flex items-center gap-1 flex-shrink-0">
      <img src="/assets/icons/Hyper credits.png" alt="" className="h-4 w-auto" />
      <span>{credits}</span>
    </div>
  ) : null;

  // Get size class and adjust for credits display
  let sizeClass = sizes[size];
  if ((variant === 'primary' || variant === 'challenge' || variant === 'continue') && credits !== undefined && size === 'default') {
    sizeClass = 'px-4 h-[30px] w-auto text-[13px]';
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizeClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {leadingIcon}
      {content}
      {trailingContent}
    </button>
  );
};

export default Button;

