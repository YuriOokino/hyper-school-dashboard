import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOnboardingState } from '../../hooks/useOnboardingState';
import QuizTimer from './QuizTimer';
import QuizProgressDots from './QuizProgressDots';

// Sample questions - in real app these would come from an API
const SAMPLE_QUESTIONS = {
  'Math': [
    {
      question: "What is 15% of 200?",
      options: ["20", "25", "30", "35"],
      correct: 2
    },
    {
      question: "Solve for x: 2x + 5 = 15",
      options: ["3", "5", "7", "10"],
      correct: 1
    },
    {
      question: "What is the area of a rectangle with length 8 and width 5?",
      options: ["13", "26", "40", "45"],
      correct: 2
    }
  ],
  'Science': [
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "N2"],
      correct: 0
    },
    {
      question: "What planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: 1
    },
    {
      question: "What is photosynthesis?",
      options: [
        "Process of eating food",
        "Process plants use to make food from sunlight",
        "Process of breathing",
        "Process of growing"
      ],
      correct: 1
    }
  ]
};

// Default questions for subjects not in sample
const DEFAULT_QUESTIONS = [
  {
    question: "Which best describes your current skill level in this subject?",
    options: ["Beginner", "Some experience", "Intermediate", "Advanced"],
    correct: 0
  },
  {
    question: "How comfortable are you with this subject's core concepts?",
    options: ["Not comfortable", "Somewhat comfortable", "Comfortable", "Very comfortable"],
    correct: 0
  },
  {
    question: "How would you rate your confidence in this subject?",
    options: ["Low", "Medium-Low", "Medium-High", "High"],
    correct: 0
  }
];

export default function PlacementQuiz() {
  const { subject } = useParams();
  const navigate = useNavigate();
  const { selectedSubjects, saveQuizAnswer, quizAnswers } = useOnboardingState();

  const decodedSubject = decodeURIComponent(subject);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExitModal, setShowExitModal] = useState(false);

  // Get questions for this subject
  const questions = SAMPLE_QUESTIONS[decodedSubject] || DEFAULT_QUESTIONS;
  const totalQuestions = questions.length;

  // Load saved answer if exists
  useEffect(() => {
    const savedAnswer = quizAnswers[decodedSubject]?.[currentQuestion - 1];
    if (savedAnswer !== undefined) {
      setSelectedAnswer(savedAnswer);
    } else {
      setSelectedAnswer(null);
    }
  }, [currentQuestion, decodedSubject, quizAnswers]);

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    saveQuizAnswer(decodedSubject, currentQuestion - 1, index);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleFinishSubject();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleFinishSubject = () => {
    // Find current subject index
    const currentIndex = selectedSubjects.indexOf(decodedSubject);
    
    // Check if there's a next subject
    if (currentIndex < selectedSubjects.length - 1) {
      const nextSubject = selectedSubjects[currentIndex + 1];
      // Show transition screen before going to next subject
      navigate(`/onboarding/quiz/transition?from=${encodeURIComponent(decodedSubject)}&to=${encodeURIComponent(nextSubject)}`);
    } else {
      // All subjects completed - go to results
      navigate('/onboarding/results');
    }
  };

  const handleClose = () => {
    setShowExitModal(true);
  };

  const confirmExit = () => {
    navigate('/onboarding/quiz');
  };

  const currentQuestionData = questions[currentQuestion - 1];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#E8EBFB' }}>
      {/* Top Bar */}
      <div className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="font-oswald text-lg uppercase text-brand-black">
          {decodedSubject} Skills Check
        </div>
        <QuizTimer initialSeconds={180} />
        <button 
          onClick={handleClose}
          className="text-gray-600 hover:text-gray-900 text-2xl"
        >
          ×
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="py-8">
        <QuizProgressDots totalQuestions={totalQuestions} currentQuestion={currentQuestion} />
      </div>

      {/* Question Card */}
      <div className="flex-1 flex items-center justify-center px-6 py-8">
        <div className="bg-white max-w-[800px] w-full p-[60px]">
          {/* Question */}
          <h4 className="font-outfit text-2xl font-bold text-gray-900 mb-8">
            {currentQuestionData.question}
          </h4>

          {/* Answer Options */}
          <div className="space-y-4 mb-8">
            {currentQuestionData.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const letter = String.fromCharCode(65 + index); // A, B, C, D

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full p-5 border-2 text-left transition-all flex items-center space-x-4 hover:bg-brand-blue-light ${
                    isSelected ? 'border-brand-blue bg-brand-blue-light' : 'border-brand-surface'
                  }`}
                >
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-outfit font-medium ${
                      isSelected ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {isSelected ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    ) : (
                      letter
                    )}
                  </div>
                  <span className="font-outfit text-lg">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 1}
              className={`font-outfit text-sm transition-colors ${
                currentQuestion === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              ← Previous Question
            </button>
            <button
              onClick={handleNext}
              className="py-3 px-8 font-oswald uppercase text-base transition-opacity bg-brand-black text-white hover:opacity-90 cursor-pointer"
            >
              {currentQuestion < totalQuestions ? 'Next Question' : `Finish ${decodedSubject}`}
            </button>
          </div>
        </div>
      </div>

      {/* Exit Confirmation Modal */}
      {showExitModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-8 max-w-md mx-4">
            <h4 className="text-brand-black mb-4">Are you sure?</h4>
            <p className="font-outfit text-base text-gray-900 mb-6">
              Your progress will be saved and you can resume later.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowExitModal(false)}
                className="flex-1 py-3 px-6 border-2 border-brand-black font-oswald uppercase text-base hover:bg-gray-100 transition-colors"
              >
                Keep Going
              </button>
              <button
                onClick={confirmExit}
                className="flex-1 py-3 px-6 bg-brand-black text-white font-oswald uppercase text-base hover:opacity-90 transition-opacity"
              >
                Exit Quiz
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

