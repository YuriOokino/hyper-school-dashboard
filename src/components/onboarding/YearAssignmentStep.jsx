import { calculateYearFromDOB } from '../../utils/gradeToYearMapping';

export default function YearAssignmentStep({ profileData, nextStep, previousStep }) {
  // Calculate year based on DOB
  const year = profileData.dobMonth && profileData.dobDay && profileData.dobYear
    ? calculateYearFromDOB(
        parseInt(profileData.dobMonth),
        parseInt(profileData.dobDay),
        parseInt(profileData.dobYear)
      )
    : 6; // Default to Year 6 if DOB not provided

  return (
    <div>
      {/* Content Card */}
      <div className="bg-white p-[60px] text-center">
        {/* Icon - Using a large number display instead */}
        <div className="flex justify-center mb-6">
          <div className="w-[120px] h-[120px] rounded-full bg-brand-blue flex items-center justify-center">
            <span className="font-oswald text-6xl text-white">{year}</span>
          </div>
        </div>

        {/* Text */}
        <h3 className="text-brand-black mb-4">YOU'RE IN YEAR {year}!</h3>
        <p className="font-outfit text-base text-gray-900 mb-8 max-w-md mx-auto">
          Based on your age, we've placed you in Year {year}. This determines which courses and content you'll see.
        </p>

        {/* Info Box */}
        <div className="bg-brand-blue-light p-5 mx-auto max-w-md mb-8 flex items-start space-x-3">
          <img src="/assets/icons/lightbulb.svg" alt="" className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="font-outfit text-sm text-gray-900 text-left">
            Don't worry—you can work at your own pace and level up in any subject!
          </p>
        </div>

        {/* Override Option */}
        <p className="font-outfit text-xs text-gray-500 mb-8">
          Need to adjust your year level? <a href="#" className="text-brand-blue underline">Contact us</a>
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => previousStep()}
            className="font-outfit text-sm text-gray-600 hover:text-gray-900 transition-colors mb-2"
          >
            ← Back
          </button>
          <button
            onClick={() => nextStep()}
            className="w-full bg-brand-black text-white py-3 px-6 font-oswald uppercase text-base hover:opacity-90 transition-opacity"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

