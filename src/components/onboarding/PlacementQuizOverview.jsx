import { useNavigate } from 'react-router-dom';
import { useOnboardingState } from '../../hooks/useOnboardingState';

export default function PlacementQuizOverview() {
  const navigate = useNavigate();
  const { selectedSubjects } = useOnboardingState();

  const totalMinutes = selectedSubjects.length * 2;

  const handleStart = () => {
    if (selectedSubjects.length > 0) {
      navigate(`/onboarding/quiz/${encodeURIComponent(selectedSubjects[0])}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#E8EBFB' }}>
      <div className="w-full max-w-[700px] px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          {/* Thunder Icon */}
          <div className="flex justify-center mb-6">
            <img 
              src="/assets/icons/thunder-icon..svg" 
              alt="" 
              className="w-20 h-20 animate-pulse"
            />
          </div>

          <h2 className="text-brand-black mb-4">TIME FOR A QUICK SKILLS CHECK!</h2>
          <p className="font-outfit text-base text-gray-900 max-w-md mx-auto">
            We'll ask you a few questions for each subject to find your perfect starting level. Don't stress—there are no wrong answers!
          </p>
        </div>

        {/* Subject Checklist */}
        <div className="bg-white p-8 mb-6">
          <div className="space-y-3">
            {selectedSubjects.map((subject) => (
              <div key={subject} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0">
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-12 bg-brand-rose"></div>
                  <div>
                    <div className="font-oswald text-lg text-brand-black">{subject}</div>
                    <div className="font-outfit text-sm text-gray-600">3 questions · ~2 min</div>
                  </div>
                </div>
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* What to Expect Box */}
        <div className="bg-brand-surface p-6 mb-6">
          <div className="flex justify-center mb-4">
            <img src="/assets/icons/lightbulb.svg" alt="" className="w-8 h-8" />
          </div>
          <ul className="font-outfit text-base text-gray-900 space-y-2">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>3 quick questions per subject</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Takes 2-5 minutes total</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Helps us match you to the right level</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>You can always adjust later</span>
            </li>
          </ul>
        </div>

        {/* Total Time Estimate */}
        <div className="text-center mb-8">
          <div className="font-oswald text-4xl" style={{ color: '#FC7E3A' }}>
            {totalMinutes} MINUTES TOTAL
          </div>
        </div>

        {/* Start Button */}
        <button
          onClick={handleStart}
          className="w-full bg-brand-black text-white py-4 px-6 font-oswald uppercase text-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-3"
        >
          <span>Start Skills Check</span>
          <img src="/assets/icons/thunder-icon..svg" alt="" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

