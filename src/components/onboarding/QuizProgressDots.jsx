export default function QuizProgressDots({ totalQuestions, currentQuestion }) {
  return (
    <div className="flex flex-col items-center space-y-3">
      <div className="flex items-center space-x-3">
        {Array.from({ length: totalQuestions }).map((_, index) => {
          const questionNumber = index + 1;
          const isCurrent = questionNumber === currentQuestion;
          const isCompleted = questionNumber < currentQuestion;

          return (
            <div key={index} className="flex flex-col items-center">
              {isCompleted ? (
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#3FC7FF' }}
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              ) : isCurrent ? (
                <div 
                  className="w-12 h-12 rounded-full"
                  style={{ backgroundColor: '#FC7E3A' }}
                ></div>
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-300"></div>
              )}
            </div>
          );
        })}
      </div>
      <div className="font-outfit text-sm text-gray-600">
        Question {currentQuestion} of {totalQuestions}
      </div>
    </div>
  );
}

