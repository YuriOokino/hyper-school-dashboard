import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function QuizTransition() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const fromSubject = searchParams.get('from');
  const toSubject = searchParams.get('to');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (toSubject) {
        navigate(`/onboarding/quiz/${encodeURIComponent(toSubject)}`);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, toSubject]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: '#E8EBFB' }}
    >
      {/* Checkmark Animation */}
      <div 
        className="w-32 h-32 rounded-full flex items-center justify-center mb-6"
        style={{ backgroundColor: '#3FC7FF' }}
      >
        <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
        </svg>
      </div>

      <h3 className="text-brand-black mb-3">GREAT JOB!</h3>
      <p className="font-outfit text-lg text-gray-900 mb-6 text-center max-w-md">
        {fromSubject} complete. Let's move to the next one!
      </p>

      {toSubject && (
        <button
          onClick={() => navigate(`/onboarding/quiz/${encodeURIComponent(toSubject)}`)}
          className="bg-brand-black text-white py-3 px-8 font-oswald uppercase text-base hover:opacity-90 transition-opacity flex items-center space-x-2"
        >
          <span>Next: {toSubject}</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

