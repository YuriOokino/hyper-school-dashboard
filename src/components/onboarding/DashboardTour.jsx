import { useState, useEffect } from 'react';

const TOUR_STEPS = [
  {
    id: 'goals',
    title: "Today's Goals",
    description: "Track your daily progress across all 4 pillars: Knowledge, Physical Health, Life Skills, and Mental Health.",
    target: 'goals-section' // CSS selector or element ID
  },
  {
    id: 'level',
    title: "Level Progress",
    description: "Level up as you master topics! Each subject has its own level progression.",
    target: 'level-card'
  },
  {
    id: 'challenges',
    title: "Jump Right In",
    description: "Start here! These are your active lessons and activities. Click any card to begin.",
    target: 'challenges-section'
  },
  {
    id: 'chart',
    title: "Mastery Progress",
    description: "See how you're advancing through your curriculum over time.",
    target: 'mastery-chart'
  },
  {
    id: 'sidebar',
    title: "Your Sidebar",
    description: "Access your tutors, check achievements, and chat with your AI helper anytime.",
    target: 'sidebar'
  },
  {
    id: 'nav',
    title: "Navigation",
    description: "Switch between your dashboard, challenges, learning progress, squad, and rewards.",
    target: 'top-nav'
  }
];

export default function DashboardTour({ onComplete, onSkip }) {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [tourActive, setTourActive] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && tourActive) {
        handleSkip();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [tourActive]);

  const handleStartTour = () => {
    setShowWelcome(false);
    setTourActive(true);
  };

  const handleSkipWelcome = () => {
    setShowWelcome(false);
    if (onSkip) onSkip();
  };

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleComplete();
    }
  };

  const handleSkip = () => {
    setTourActive(false);
    if (onSkip) onSkip();
  };

  const handleComplete = () => {
    setTourActive(false);
    if (onComplete) onComplete();
  };

  if (showWelcome) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
        <div className="bg-white p-10 max-w-lg mx-4 text-center">
          <div className="flex justify-center mb-6">
            <img src="/assets/icons/hello-icon.svg" alt="" className="w-16 h-16" />
          </div>
          <h3 className="text-brand-black mb-4">WELCOME TO YOUR DASHBOARD!</h3>
          <p className="font-outfit text-base text-gray-900 mb-8">
            Want a quick tour? We'll show you around in 30 seconds.
          </p>
          <div className="space-y-3">
            <button
              onClick={handleStartTour}
              className="w-full bg-brand-black text-white py-3 px-6 font-oswald uppercase text-base hover:opacity-90 transition-opacity"
            >
              Show Me Around
            </button>
            <button
              onClick={handleSkipWelcome}
              className="font-outfit text-base text-gray-600 hover:text-gray-900"
            >
              I'll explore myself
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!tourActive) {
    return null;
  }

  const step = TOUR_STEPS[currentStep];

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Tooltip - positioned relative to viewport for now */}
      {/* In production, you'd calculate position based on target element */}
      <div 
        className="absolute bg-brand-blue-light p-5 shadow-xl max-w-sm pointer-events-auto"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Arrow - would be positioned based on target */}
        <div 
          className="absolute w-4 h-4 bg-brand-blue-light transform rotate-45"
          style={{ top: '-8px', left: '50%', marginLeft: '-8px' }}
        ></div>

        <div className="relative">
          <h6 className="text-brand-black mb-2">{step.title}</h6>
          <p className="font-outfit text-sm text-gray-900 mb-4">
            {step.description}
          </p>

          <div className="flex items-center justify-between">
            <button
              onClick={handleSkip}
              className="font-outfit text-sm text-gray-600 hover:text-gray-900"
            >
              Skip tour
            </button>

            <div className="flex items-center space-x-3">
              <div className="font-outfit text-xs text-gray-600">
                Step {currentStep + 1} of {TOUR_STEPS.length}
              </div>
              <button
                onClick={handleNext}
                className="bg-brand-black text-white py-2 px-4 font-oswald uppercase text-sm hover:opacity-90 transition-opacity"
              >
                {currentStep < TOUR_STEPS.length - 1 ? 'Next' : 'Got It!'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

