import { useState, useEffect } from 'react';

export default function GuidedOnboarding({ 
  isOpen, 
  assignedLevel, 
  onComplete,
  onOpenAccountPanel,
  onCloseAccountPanel,
  isAccountPanelOpen,
  onNavigateToSquad,
  onOpenMainHallChat
}) {
  const [currentStep, setCurrentStep] = useState(1);

  if (!isOpen) return null;

  const steps = [
    {
      id: 1,
      title: "Welcome to Hyper School!",
      description: `You've been assigned to Level ${assignedLevel}. Let's set up your account in 4 quick steps.`,
      targetId: null,
      position: 'center',
      action: null
    },
    {
      id: 2,
      title: "Add your profile picture",
      description: "Click on the profile image to upload a photo. Hover over the image and click 'Edit' to get started.",
      targetId: 'profile-picture-target',
      position: 'right',
      action: null
    },
    {
      id: 3,
      title: "Tell us about yourself",
      description: "Add a short bio to help your squad members get to know you. Click 'Change' to edit your bio.",
      targetId: 'bio-section',
      position: 'right',
      action: 'openAccountPanel'
    },
    {
      id: 4,
      title: "Welcome to your squad!",
      description: "You've been assigned to The Thunderbolts. Introduce yourself to your squad members!",
      targetId: null,
      position: 'center',
      action: 'navigateToSquad',
      isModal: true
    }
  ];

  const currentStepData = steps.find(s => s.id === currentStep);

  useEffect(() => {
    // Trigger actions when step changes
    if (currentStepData?.action === 'openAccountPanel' && !isAccountPanelOpen) {
      onOpenAccountPanel();
    } else if (currentStepData?.action === 'closeAccountPanel' && isAccountPanelOpen) {
      onCloseAccountPanel();
    } else if (currentStepData?.action === 'navigateToSquad') {
      // Close account panel first, then navigate to squad
      if (isAccountPanelOpen) {
        onCloseAccountPanel();
      }
      if (onNavigateToSquad) {
        onNavigateToSquad();
      }
    }
  }, [currentStep, currentStepData, isAccountPanelOpen, onOpenAccountPanel, onCloseAccountPanel, onNavigateToSquad]);

  // Add spotlight effect to target element and scroll into view
  useEffect(() => {
    if (currentStepData?.targetId) {
      const targetElement = document.getElementById(currentStepData.targetId);
      if (targetElement) {
        targetElement.style.position = 'relative';
        targetElement.style.zIndex = '10001'; // Same as account panel
        targetElement.style.pointerEvents = 'auto'; // Ensure it's clickable
        
        // Scroll element into view
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      
      return () => {
        if (targetElement) {
          targetElement.style.zIndex = '';
          targetElement.style.pointerEvents = '';
        }
      };
    }
  }, [currentStepData]);

  const handleNext = () => {
    if (currentStep === steps.length) {
      // Save completion status
      const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
      userProfile.onboardingComplete = true;
      userProfile.assignedLevel = assignedLevel;
      userProfile.assignedSquad = 'The Thunderbolts'; // Auto-assigned
      localStorage.setItem('userProfile', JSON.stringify(userProfile));
      onComplete(userProfile);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSkip = () => {
    const userProfile = {
      onboardingComplete: true,
      assignedLevel,
      assignedSquad: 'The Thunderbolts'
    };
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    onComplete(userProfile);
  };

  const handleIntroduceYourself = () => {
    // Save completion status
    const userProfile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    userProfile.onboardingComplete = true;
    userProfile.assignedLevel = assignedLevel;
    userProfile.assignedSquad = 'The Thunderbolts';
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    
    // Just close the modal and open main hall - don't call onComplete
    if (onOpenMainHallChat) {
      onOpenMainHallChat();
    }
  };

  const getTooltipStyle = () => {
    if (currentStepData.position === 'center') {
      return {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10003
      };
    }

    // Position tooltip near the target element
    const targetElement = currentStepData.targetId && document.getElementById(currentStepData.targetId);
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      const tooltipHeight = 400; // Approximate tooltip height
      
      if (currentStepData.position === 'right') {
        // Calculate top position and ensure it doesn't go off screen
        let topPosition = rect.top + rect.height / 2;
        const minTop = 20; // Minimum padding from top
        const maxTop = window.innerHeight - tooltipHeight - 20; // Maximum position
        
        // If centered position would be too high or too low, adjust
        if (topPosition - tooltipHeight / 2 < minTop) {
          topPosition = tooltipHeight / 2 + minTop;
        } else if (topPosition + tooltipHeight / 2 > window.innerHeight - 20) {
          topPosition = window.innerHeight - tooltipHeight / 2 - 20;
        }
        
        return {
          position: 'fixed',
          top: `${topPosition}px`,
          left: `${rect.right + 40}px`,
          transform: 'translateY(-50%)',
          zIndex: 10003
        };
      } else if (currentStepData.position === 'left') {
        let topPosition = rect.top + rect.height / 2;
        const minTop = 20;
        const maxTop = window.innerHeight - tooltipHeight - 20;
        
        if (topPosition - tooltipHeight / 2 < minTop) {
          topPosition = tooltipHeight / 2 + minTop;
        } else if (topPosition + tooltipHeight / 2 > window.innerHeight - 20) {
          topPosition = window.innerHeight - tooltipHeight / 2 - 20;
        }
        
        return {
          position: 'fixed',
          top: `${topPosition}px`,
          right: `${window.innerWidth - rect.left + 40}px`,
          transform: 'translateY(-50%)',
          zIndex: 10003
        };
      }
    }

    // Fallback to center
    return {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 10003
    };
  };

  return (
    <>
      {/* Dark Overlay - blocks clicks except on highlighted element */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 10000,
        pointerEvents: 'auto' // Block clicks on overlay
      }} 
      onClick={(e) => e.stopPropagation()}
      />


      {/* Tooltip/Popover */}
      <div style={{
        ...getTooltipStyle(),
        backgroundColor: 'white',
        padding: '32px',
        border: '2px solid black',
        maxWidth: '380px',
        width: '100%',
        pointerEvents: 'auto'
      }}>
        {/* Progress */}
        <div style={{ 
          fontSize: '11px', 
          color: '#666', 
          marginBottom: '16px', 
          textTransform: 'uppercase', 
          letterSpacing: '1.5px',
          fontWeight: '600'
        }}>
          Step {currentStep} of {steps.length}
        </div>

        {/* Content - Special for Squad Assignment */}
        {currentStepData.isModal ? (
          <>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>⚡</div>
            <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px' }}>
              Welcome to The Thunderbolts!
            </h3>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '28px', lineHeight: '1.6' }}>
              You've been assigned to The Thunderbolts - a group of creative thinkers and problem solvers.
            </p>
            <button 
              onClick={handleIntroduceYourself}
              style={{
                width: '100%',
                padding: '16px',
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginBottom: '12px'
              }}
            >
              Introduce Yourself
            </button>
            <button 
              onClick={handleNext}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'transparent',
                color: '#999',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px'
              }}
            >
              Skip for now
            </button>
          </>
        ) : (
          <>
            {/* Title */}
            <h3 style={{ 
              fontSize: '22px', 
              fontWeight: 'bold', 
              marginBottom: '12px',
              lineHeight: '1.3'
            }}>
              {currentStepData.title}
            </h3>

            {/* Description */}
            <p style={{ 
              fontSize: '15px', 
              color: '#666', 
              marginBottom: '28px',
              lineHeight: '1.5'
            }}>
              {currentStepData.description}
            </p>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {currentStep > 1 && (
                <button 
                  onClick={() => setCurrentStep(prev => prev - 1)} 
                  style={{
                    flex: 1,
                    padding: '14px 20px',
                    backgroundColor: 'transparent',
                    color: 'black',
                    border: '2px solid black',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                >
                  Back
                </button>
              )}
              <button 
                onClick={handleNext}
                style={{
                  flex: currentStep === 1 ? 1 : 1,
                  padding: '14px 20px',
                  backgroundColor: 'black',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {currentStep === steps.length ? 'Get Started' : 'Next'}
              </button>
            </div>

            {/* Skip */}
            <button 
              onClick={handleSkip} 
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: 'transparent',
                color: '#999',
                border: 'none',
                cursor: 'pointer',
                fontSize: '12px',
                marginTop: '12px'
              }}
            >
              Skip setup
            </button>
          </>
        )}
      </div>
    </>
  );
}
