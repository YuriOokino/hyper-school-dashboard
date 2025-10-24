export default function ProgressPieChart({ 
  percentage, 
  size = 256, 
  strokeWidth = 16,
  progressColor = '#3FC7FF',
  backgroundColor = '#E5E7EB',
  iconSize = 48,
  children 
}) {
  const radius = (size / 2) - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;
  
  // Calculate thunder icon position at the bottom of the circle
  // Position it so the center of the icon aligns with the bottom edge of the stroke
  const iconBottom = strokeWidth / 2 - (iconSize / 2);

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
      
      <img 
        src="/assets/icons/thunder-icon.svg" 
        alt="" 
        style={{ 
          position: 'absolute',
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          bottom: `${iconBottom}px`,
          left: '50%',
          transform: 'translateX(-50%)'
        }}
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

