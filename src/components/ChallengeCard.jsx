import React from 'react';
import Button from './ui/Button';

const ChallengeCard = ({
  title,
  pillar,
  category,
  typeLabel,
  buttonText,
  buttonVariant = 'challenge',
  credits,
  children,
  className = '',
  onClick
}) => {
  // Map pillars to their wave patterns and colors
  const pillarConfig = {
    knowledge: {
      wave: '/assets/pillars/think.svg',
      bgColor: '#FE55A4',
      textColor: '#FFFFFF'
    },
    physical: {
      wave: '/assets/pillars/connect.svg',
      bgColor: '#DBFF4D',
      textColor: '#121214'
    },
    mental: {
      wave: '/assets/pillars/move.svg',
      bgColor: '#6279E5',
      textColor: '#FFFFFF'
    },
    life: {
      wave: '/assets/pillars/thrive.svg',
      bgColor: '#FC7E3A',
      textColor: '#FFFFFF'
    }
  };

  const config = pillarConfig[pillar] || pillarConfig.knowledge;

  const CardWrapper = onClick ? 'button' : 'div';
  
  return (
    <CardWrapper 
      onClick={onClick}
      className={`bg-white flex flex-col group h-full ${className} ${onClick ? 'cursor-pointer hover:shadow-lg transition-shadow text-left w-full' : ''}`}
    >
      {/* Wave Header */}
      <div className="w-full h-[100px] overflow-hidden">
        <img 
          src={config.wave} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Tags Row */}
        {(category || typeLabel) && (
          <div className="flex gap-2 mb-3">
            {category && (
              <span 
                className="font-outfit uppercase px-3 py-1 text-xs"
                style={{ 
                  backgroundColor: config.bgColor,
                  color: config.textColor
                }}
              >
                {category}
              </span>
            )}
            {typeLabel && (
              <span className="font-outfit uppercase px-3 py-1 text-xs bg-gray-100 text-gray-900">
                {typeLabel}
              </span>
            )}
          </div>
        )}

        {/* Title */}
        <div className="mb-6 text-gray-900 font-outfit normal-case text-body-large">{title}</div>

        {/* Custom Content (e.g., mood selector, descriptions) */}
        {children && !buttonText && (
          <div className="flex-1 flex flex-col justify-end">
            {children}
          </div>
        )}

        {children && buttonText && (
          <div className="mb-4 flex-1">
            {children}
          </div>
        )}

        {/* Button */}
        {buttonText && (
          <div className="mt-auto">
            <Button 
              variant={buttonVariant}
              size="large"
              credits={credits}
              className="whitespace-nowrap"
            >
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export default ChallengeCard;

