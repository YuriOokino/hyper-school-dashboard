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
  const baseStyles = 'font-outfit uppercase font-medium text-[13px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-brand-black text-brand-white hover:bg-opacity-90',
    secondary: 'bg-brand-lime text-brand-black hover:bg-opacity-90',
    tertiary: 'border-2 border-brand-black text-brand-black bg-transparent hover:bg-brand-black hover:text-brand-white',
    complete: 'bg-brand-lime text-brand-black hover:bg-opacity-90',
    challenge: 'border-2 border-brand-black text-brand-black bg-transparent hover:bg-brand-black hover:text-brand-white',
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
  
  // For challenge variant with credits
  const trailingContent = variant === 'challenge' && credits !== undefined ? (
    <div className="flex items-center gap-1">
      <img src="/assets/icons/Hyper credits.png" alt="" className="w-4 h-4" />
      <span>{credits}</span>
    </div>
  ) : null;

  // Use auto width for challenge variant with credits
  const sizeClass = variant === 'challenge' && credits !== undefined 
    ? 'px-4 h-[30px] w-auto' 
    : sizes[size];

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

