import React from 'react';

const Tab = ({ 
  active = false,
  children, 
  className = '',
  onClick,
  disabled = false,
  ...props 
}) => {
  const baseStyles = 'font-outfit font-normal text-[16px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center h-[30px] px-4';
  
  const activeStyles = 'bg-brand-rose text-white shadow-[-4px_3px_0_0_#121214]';
  const inactiveStyles = 'bg-transparent text-brand-black border-2 border-brand-black';

  return (
    <button
      type="button"
      className={`${baseStyles} ${active ? activeStyles : inactiveStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Tab;

