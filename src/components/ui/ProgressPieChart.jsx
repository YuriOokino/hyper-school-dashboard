export default function ProgressPieChart({ 
  percentage, 
  size = 256, 
  strokeWidth = 16,
  progressColor = '#3FC7FF',
  backgroundColor = '#E5E7EB',
  iconSize = 48,
  thunderIconFill = '#9CA3AF',
  thunderIconStroke = 'white',
  children 
}) {
  const radius = (size / 2) - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  
  // Calculate thunder icon position at the bottom of the circle
  // Position it so the center of the icon aligns with the bottom edge of the stroke
  const iconBottom = strokeWidth / 2 - (iconSize / 2);
  
  // Determine icon styling based on completion
  const isCompleted = percentage >= 100;
  const iconFill = isCompleted ? thunderIconFill : '#DAD9D9';
  const iconStroke = isCompleted ? thunderIconStroke : 'none';
  const iconStrokeWidth = isCompleted ? '1' : '0';

  return (
    <div className="relative" style={{ width: `${size}px`, height: `${size}px` }}>
      <svg 
        className="transform rotate-90"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={strokeWidth}
          strokeDasharray={`${percentage * circumference / 100} ${circumference}`}
        />
      </svg>
      
      <svg 
        style={{ 
          position: 'absolute',
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          bottom: `${iconBottom}px`,
          left: '50%',
          transform: 'translateX(-50%)'
        }}
        viewBox="0 0 16 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M15.3638 0L5.93874 2.12532L0 14.9686L5.11231 13.7012L1.94401 25L16 6.94156L10.6911 8.12894L15.3638 0Z" 
          fill={iconFill}
          stroke={iconStroke}
          strokeWidth={iconStrokeWidth}
        />
      </svg>
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

