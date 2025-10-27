import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useOnboardingState } from '../../hooks/useOnboardingState';

// Mock function to calculate levels based on quiz answers
const calculateLevel = (answers) => {
  if (!answers || Object.keys(answers).length === 0) return 5; // Default to intermediate
  const correctCount = Object.values(answers).filter(a => a !== null).length;
  // Simple logic: more answers = higher level
  if (correctCount === 3) return Math.floor(Math.random() * 2) + 6; // 6-7
  if (correctCount === 2) return Math.floor(Math.random() * 2) + 4; // 4-5
  return Math.floor(Math.random() * 2) + 2; // 2-3
};

const getLevelLabel = (level) => {
  if (level <= 2) return 'Beginner';
  if (level <= 4) return 'Foundation';
  if (level <= 6) return 'Intermediate';
  return 'Advanced';
};

const getPillarColor = (subject) => {
  const knowledgeSubjects = ['Math', 'Science', 'English/Language Arts', 'History', 'Computer Science', 'Foreign Languages'];
  const lifeSubjects = ['Personal Finance', 'Career Readiness', 'Critical Thinking'];
  const thriveSubjects = ['Health & Wellness', 'Social Skills'];
  const moveSubjects = ['Physical Education'];

  if (knowledgeSubjects.includes(subject)) return '/assets/pillars/think.svg';
  if (lifeSubjects.includes(subject)) return '/assets/pillars/thrive.svg';
  if (thriveSubjects.includes(subject)) return '/assets/pillars/connect.svg';
  if (moveSubjects.includes(subject)) return '/assets/pillars/move.svg';
  return '/assets/pillars/think.svg';
};

export default function CourseAssignmentResults() {
  const navigate = useNavigate();
  const { selectedSubjects, quizAnswers, completeOnboarding } = useOnboardingState();

  const results = selectedSubjects.map(subject => {
    const level = calculateLevel(quizAnswers[subject]);
    return {
      subject,
      level,
      levelLabel: getLevelLabel(level),
      topics: ['Topic 1', 'Topic 2', 'Topic 3'],
      credits: Math.floor(Math.random() * 200) + 100,
      wave: getPillarColor(subject)
    };
  });

  const totalCredits = results.reduce((sum, r) => sum + r.credits, 0);
  const totalTopics = results.length * 10; // Assume 10 topics per subject

  const handleGoToDashboard = () => {
    completeOnboarding();
    navigate('/dashboard?tour=true');
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E8EBFB' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img 
              src="/assets/icons/check_circle.png" 
              alt="" 
              className="w-32 h-32"
            />
          </div>
          <h1 className="text-brand-black mb-4">YOU'RE ALL SET!</h1>
          <p className="font-outfit text-lg text-gray-900 max-w-2xl mx-auto">
            Here's your personalized learning path based on your results.
          </p>
        </div>

        {/* Results Summary */}
        <div className="text-center mb-12">
          <div className="font-oswald text-3xl text-brand-orange mb-2">
            {selectedSubjects.length} SUBJECTS READY TO GO!
          </div>
          <div className="font-oswald text-2xl text-brand-blue">
            EARN UP TO {totalCredits} HYPER CREDITS!
          </div>
        </div>

        {/* Subject Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {results.map((result, index) => (
            <div key={index} className="bg-white">
              {/* Wave Header */}
              <div className="w-full h-[100px] overflow-hidden">
                <img 
                  src={result.wave} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h5 className="text-brand-black mb-3">{result.subject}</h5>
                
                {/* Level */}
                <div className="flex items-center space-x-3 mb-4">
                  <img src="/assets/icons/level-icon.png" alt="" className="w-12 h-12" />
                  <div>
                    <div className="font-oswald text-xl text-gray-900">
                      LEVEL {result.level} - {result.levelLabel}
                    </div>
                  </div>
                </div>

                {/* Topics Preview */}
                <div className="mb-4">
                  <div className="font-outfit font-medium text-sm text-gray-700 mb-2">
                    You'll start with:
                  </div>
                  <ul className="font-outfit text-sm text-gray-600 space-y-1">
                    {result.topics.map((topic, i) => (
                      <li key={i}>• {topic}</li>
                    ))}
                  </ul>
                </div>

                {/* Credits */}
                <div className="flex items-center space-x-2 font-outfit text-sm text-gray-700">
                  <img src="/assets/icons/Hyper credits.png" alt="" className="w-4 h-4" />
                  <span>Earn up to {result.credits} Hyper Credits in this subject!</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path Preview */}
        <div className="bg-white p-8 mb-8">
          <h4 className="text-brand-black mb-4">YOUR LEARNING PATH</h4>
          <p className="font-outfit text-base text-gray-900 mb-6">
            You have {totalTopics} topics ready to master across {selectedSubjects.length} subjects
          </p>
          {/* Simple progress bar */}
          <div className="h-4 bg-gray-200">
            <div className="h-full bg-brand-blue w-0"></div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={handleGoToDashboard}
            className="bg-brand-black text-white py-4 px-12 font-oswald uppercase text-lg hover:opacity-90 transition-opacity flex items-center space-x-3"
          >
            <span>Go to My Dashboard</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="font-outfit text-base text-brand-blue hover:underline">
            View Full Curriculum
          </button>
        </div>
      </div>
    </div>
  );
}

