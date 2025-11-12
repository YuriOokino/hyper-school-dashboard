import { useNavigate } from 'react-router-dom';
import { useOnboardingState } from '../../hooks/useOnboardingState';
import OnboardingProgress from './OnboardingProgress';
import ProfileSetupStep from './ProfileSetupStep';
import SubjectSelectionStep from './SubjectSelectionStep';
import PhysicalActivitiesStep from './PhysicalActivitiesStep';
import YearAssignmentStep from './YearAssignmentStep';

const WIZARD_STEPS = ['Your Info', 'Choose Subjects', 'Choose Activities', 'Welcome!'];

export default function OnboardingWizard() {
  const navigate = useNavigate();
  const onboardingState = useOnboardingState();
  const { currentStep, goToStep } = onboardingState;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ProfileSetupStep {...onboardingState} />;
      case 2:
        return <SubjectSelectionStep {...onboardingState} />;
      case 3:
        return <PhysicalActivitiesStep {...onboardingState} />;
      case 4:
        return <YearAssignmentStep {...onboardingState} navigate={navigate} />;
      default:
        return <ProfileSetupStep {...onboardingState} />;
    }
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#E8EBFB' }}>
      {/* Left Sidebar with Steps - Fixed */}
      <div className="w-72 bg-white px-10 py-12 fixed left-0 top-0 h-screen">
        <div className="space-y-0">
          {WIZARD_STEPS.map((step, index) => {
            const stepNumber = index + 1;
            const isActive = currentStep === stepNumber;
            const isPast = currentStep > stepNumber;
            
            return (
              <div key={stepNumber} className="relative">
                <button
                  onClick={() => goToStep(stepNumber)}
                  className="flex items-center pb-8 w-full text-left cursor-pointer"
                >
                  {/* Step Number Circle */}
                  <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full border-2 ${
                    isActive || isPast ? 'border-gray-900 bg-gray-900' : 'border-gray-900 bg-white'
                  } flex items-center justify-center`}>
                    {isPast ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                    ) : (
                      <span className={`font-oswald text-base ${
                        isActive ? 'text-white' : 'text-gray-900'
                      }`}>
                        {stepNumber}
                      </span>
                    )}
                  </div>
                  
                  {/* Step Label */}
                  <div className="ml-5 flex-1">
                    <div className={`font-outfit text-base ${
                      isActive ? 'text-gray-900 font-medium' : 'text-gray-900'
                    }`}>
                      {step}
                    </div>
                  </div>
                </button>
                
                {/* Connector Line */}
                {index < WIZARD_STEPS.length - 1 && (
                  <div 
                    className="absolute left-[19px] top-10 w-0.5 h-8 bg-gray-900" 
                    style={{ height: '32px' }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content Area - Scrollable with left margin to account for fixed sidebar */}
      <div className="flex-1 ml-72 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-12 py-12">
          <div className="w-full max-w-[800px]">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}

