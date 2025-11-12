import { useNavigate } from 'react-router-dom';

export default function YearAssignmentStep({ previousStep }) {
  const navigate = useNavigate();

  const handleStartPlacementTest = () => {
    // Navigate to placement test
    navigate('/placement-test');
  };

  const handleSkip = () => {
    // Skip to dashboard - in production, might navigate to /dashboard
    navigate('/dashboard');
  };

  return (
    <div className="w-full max-w-[900px]">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-gray-900 mb-8">WELCOME TO HYPER SCHOOL!</h2>
        
        <h4 className="text-gray-900 mb-4">What's next?</h4>
        <p className="font-outfit text-lg text-gray-900 leading-relaxed mb-8">
          We want to provide you with the learning content that is best for you! By completing this test, we can tailor your challenges to your skills.
        </p>

        {/* Info Box */}
        <div className="bg-gray-100 p-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-gray-900 flex items-center justify-center mt-1">
              <span className="font-outfit text-sm font-bold text-gray-900">i</span>
            </div>
            <div className="flex-1">
              <h6 className="text-gray-900 mb-2">Before you begin</h6>
              <p className="font-outfit text-base text-gray-900 leading-relaxed mb-3">
                This test will take about 30 minutes to complete. Once you start, you cannot pause until you have answered all questions.
              </p>
              <p className="font-outfit text-base text-gray-900 leading-relaxed">
                You can skip it for now, but <strong>you must submit the test before you can start completing the challenges and earn rewards.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <button
          onClick={handleStartPlacementTest}
          className="w-full py-4 bg-gray-900 font-outfit text-base uppercase font-medium text-white relative"
          style={{
            boxShadow: '0 4px 0 0 #FE55A4'
          }}
        >
          START PLACEMENT TEST
        </button>
        
        <div className="text-center">
          <button
            onClick={handleSkip}
            className="font-outfit text-base text-gray-900 border-b-2 border-gray-900"
          >
            Skip for now
          </button>
        </div>
      </div>
    </div>
  );
}
