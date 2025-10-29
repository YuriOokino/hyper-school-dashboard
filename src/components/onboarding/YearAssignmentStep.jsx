import { calculateYearFromDOB } from '../../utils/gradeToYearMapping';

export default function YearAssignmentStep({ profileData, nextStep, previousStep, navigate }) {
  // Calculate year based on DOB (age)
  const year = profileData.dobMonth && profileData.dobDay && profileData.dobYear
    ? calculateYearFromDOB(
        parseInt(profileData.dobMonth),
        parseInt(profileData.dobDay),
        parseInt(profileData.dobYear)
      )
    : 5; // Default to Year 5 if DOB not provided

  const squad = "THE THUNDERBOLTS"; // This could be dynamically assigned

  const handleStartPlacementTest = () => {
    // Navigate to placement quiz
    if (navigate) {
      navigate('/onboarding/quiz');
    } else {
      nextStep();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="bg-white p-10">
        <h2 className="text-brand-black mb-6">CONGRATULATIONS, {profileData.firstName?.toUpperCase() || 'JENNIFER'}!</h2>
        <p className="font-outfit text-base text-gray-900 mb-8">
          Welcome to Hyper School! Based on your profile, here's where you'll start:
        </p>

        {/* Year Box */}
        <div className="mb-6">
          <label className="block font-oswald text-sm uppercase text-brand-black mb-2">
            Year
          </label>
          <div className="border-2 border-brand-surface p-4 flex items-center justify-between">
            <span className="font-oswald text-4xl text-brand-black">{year}</span>
          </div>
          <p className="font-outfit text-sm italic text-gray-600 mt-2">
            Level up by mastering your curriculum
          </p>
        </div>

        {/* Squad Box */}
        <div className="mb-6">
          <label className="block font-oswald text-sm uppercase text-brand-black mb-2">
            Squad
          </label>
          <div className="border-2 border-brand-surface p-4">
            <span className="font-oswald text-xl text-brand-black">{squad}</span>
          </div>
          <p className="font-outfit text-sm italic text-gray-600 mt-2">
            Compete and win together!
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="bg-white p-10">
        <h4 className="text-brand-black mb-4">What's next?</h4>
        <p className="font-outfit text-base text-gray-900 mb-6">
          Next up: a quick 30-minute placement test to find your perfect starting level. You can pause anytime, and once complete, you'll unlock your personalized challenges and start earning rewards!
        </p>

        {/* Info Box */}
        <div className="bg-brand-blue-light p-4 flex items-start space-x-3 mb-6">
          <span className="text-xl flex-shrink-0">💡</span>
          <div>
            <div className="font-outfit font-medium text-sm text-gray-900 mb-1">
              Before you begin
            </div>
            <p className="font-outfit text-sm text-gray-900">
              This test takes about 30 minutes to complete. Once you start, you cannot pause until you have answered all questions. Make sure you set aside enough time to finish the test.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleStartPlacementTest}
            className="w-full bg-brand-black text-white py-3 px-6 font-oswald uppercase text-base hover:opacity-90 transition-opacity"
          >
            Start Placement Test
          </button>
          <button
            onClick={() => previousStep()}
            className="w-full font-outfit text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back
          </button>
          <button
            className="w-full font-outfit text-sm text-brand-blue hover:underline"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}

