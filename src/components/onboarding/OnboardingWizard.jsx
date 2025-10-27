import { useNavigate } from 'react-router-dom';
import { useOnboardingState } from '../../hooks/useOnboardingState';
import OnboardingProgress from './OnboardingProgress';
import ProfileSetupStep from './ProfileSetupStep';
import YearAssignmentStep from './YearAssignmentStep';
import SubjectSelectionStep from './SubjectSelectionStep';
import GoalSettingsStep from './GoalSettingsStep';

const WIZARD_STEPS = ['Your Info', 'Year & Grade', 'Pick Subjects', 'Set Goals'];

export default function OnboardingWizard() {
  const navigate = useNavigate();
  const onboardingState = useOnboardingState();
  const { currentStep } = onboardingState;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <ProfileSetupStep {...onboardingState} />;
      case 2:
        return <YearAssignmentStep {...onboardingState} />;
      case 3:
        return <SubjectSelectionStep {...onboardingState} />;
      case 4:
        return <GoalSettingsStep {...onboardingState} navigate={navigate} />;
      default:
        return <ProfileSetupStep {...onboardingState} />;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#E8EBFB' }}>
      <div className="w-full max-w-[650px] px-6 py-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img src="/assets/icons/Logo-light.png" alt="Hyper" className="h-[60px]" />
        </div>

        {/* Progress Indicator */}
        <OnboardingProgress currentStep={currentStep} steps={WIZARD_STEPS} />

        {/* Step Content */}
        {renderStep()}
      </div>
    </div>
  );
}

