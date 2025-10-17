import { useState } from 'react';

export default function QuizView({ challengeTitle, onExit }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [correctInRow, setCorrectInRow] = useState(7);
  const [totalQuestions] = useState(10);
  const [credits, setCredits] = useState(45);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Sample question data
  const question = {
    text: "What is the slope-intercept form of a linear equation?",
    options: [
      "y = mx + b",
      "ax + by = c",
      "y - y₁ = m(x - x₁)",
      "x = my + b"
    ],
    correctAnswer: 0
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === question.correctAnswer) {
      setCorrectInRow(correctInRow + 1);
      setCredits(credits + 10);
    } else {
      setCorrectInRow(0);
    }
    
    // Move to next question
    if (currentQuestion < totalQuestions) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b-2 border-gray-200 p-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <button 
            onClick={onExit}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
            </svg>
            <span className="font-medium">Exit Quiz</span>
          </button>

          <h1 className="text-xl font-bold text-gray-900">{challengeTitle}</h1>

          <div className="flex items-center space-x-4">
            <div className="text-sm">
              <span className="text-gray-600">Question </span>
              <span className="font-bold">{currentQuestion}/{totalQuestions}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Stats */}
      <div className="bg-white border-b-2 border-gray-200 p-4">
        <div className="flex items-center justify-center space-x-8 max-w-4xl mx-auto">
          {/* Mastery Progress */}
          <div className="flex items-center space-x-2">
            <div className="text-sm text-gray-600">Mastery Progress:</div>
            <div className="flex items-center space-x-1">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span className="text-lg font-bold text-gray-900">{correctInRow}/{totalQuestions}</span>
              <span className="text-sm text-gray-600">correct in a row</span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-8 w-px bg-gray-300"></div>

          {/* Credits */}
          <div className="flex items-center space-x-2">
            <div className="text-sm text-gray-600">Credits Earned:</div>
            <div className="flex items-center space-x-1">
              <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
              </svg>
              <span className="text-lg font-bold text-gray-900">{credits}</span>
            </div>
          </div>

          {/* Streak Indicator */}
          {correctInRow >= 3 && (
            <>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 rounded">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                </svg>
                <span className="text-sm font-bold text-green-700">On Fire! 🔥</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-3xl mx-auto p-8">
        <div className="bg-white border-2 border-gray-200 p-8 rounded-lg">
          {/* Question */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Question {currentQuestion}
            </h2>
            <p className="text-lg text-gray-700">
              {question.text}
            </p>
          </div>

          {/* Answer Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 border-2 rounded transition-colors ${
                  selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400 bg-white'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-400'
                  }`}>
                    {selectedAnswer === index && (
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-lg text-gray-900">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className={`px-8 py-3 font-bold text-white rounded transition-colors ${
                selectedAnswer === null
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black hover:bg-gray-800'
              }`}
            >
              Submit Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

