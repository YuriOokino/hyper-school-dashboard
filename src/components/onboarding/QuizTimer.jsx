import { useState, useEffect } from 'react';

export default function QuizTimer({ initialSeconds = 180, onTimeUp }) {
  const [secondsRemaining, setSecondsRemaining] = useState(initialSeconds);

  useEffect(() => {
    if (secondsRemaining <= 0) {
      if (onTimeUp) onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setSecondsRemaining(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsRemaining, onTimeUp]);

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;

  const isLowTime = secondsRemaining < 30;
  const timerColor = isLowTime ? '#FC7E3A' : '#3FC7FF';

  return (
    <div 
      className={`font-outfit text-lg font-medium ${isLowTime ? 'animate-pulse' : ''}`}
      style={{ color: timerColor }}
    >
      {timeString}
    </div>
  );
}

