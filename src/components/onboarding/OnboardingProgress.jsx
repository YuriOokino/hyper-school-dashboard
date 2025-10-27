export default function OnboardingProgress({ currentStep, steps }) {
  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="w-full mb-8">
      {/* Progress Bar */}
      <div className="relative h-2 bg-brand-blue-light mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-brand-blue transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Step Labels */}
      <div className="flex justify-between items-center">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div
              key={step}
              className={`text-sm font-outfit transition-colors ${
                isActive
                  ? 'font-bold text-brand-black'
                  : isCompleted
                  ? 'text-gray-600'
                  : 'text-gray-400'
              }`}
            >
              {step}
            </div>
          );
        })}
      </div>
    </div>
  );
}

