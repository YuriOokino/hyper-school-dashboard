import { useState } from 'react';

export default function LessonContent({ onBackToLearning }) {
  const [activeTab, setActiveTab] = useState('knowledge');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [masteryPoints, setMasteryPoints] = useState(120);
  const [masteryProgress, setMasteryProgress] = useState(30); // percentage
  const [showCelebration, setShowCelebration] = useState(false);

  const handleCheckAnswer = () => {
    if (selectedAnswer && !isAnswerChecked) {
      setIsAnswerChecked(true);
      
      // Check if answer is correct (lava is the correct answer)
      if (selectedAnswer === 'lava') {
        // Correct answer: increase both points and progress
        setMasteryPoints(prev => Math.min(prev + 20, 400)); // Add 20 points, max 400
        setMasteryProgress(prev => Math.min(prev + 5, 100)); // Add 5%, max 100%
        
        // Trigger celebration animation
        setShowCelebration(true);
        setTimeout(() => setShowCelebration(false), 1500);
      } else {
        // Wrong answer: decrease progress but keep points unchanged
        setMasteryProgress(prev => Math.max(prev - 5, 0)); // Decrease 5%, min 0%
      }
    }
  };

  const handleNext = () => {
    // Reset quiz state for next question
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#E8EBFB' }}>
      {/* Back Button */}
      <div className="p-6">
        <button 
          onClick={onBackToLearning}
          className="flex items-center space-x-2 text-gray-900 hover:text-gray-700"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Back</span>
        </button>
      </div>

      {/* Category Tabs */}
      <div className="px-6 pb-4">
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveTab('knowledge')}
            className={`px-6 py-2 font-bold uppercase text-sm transition-colors ${
              activeTab === 'knowledge'
                ? 'text-white'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
            style={activeTab === 'knowledge' ? { backgroundColor: '#6279E5' } : {}}
          >
            Knowledge
          </button>
          <button
            onClick={() => setActiveTab('science')}
            className={`px-6 py-2 font-bold uppercase text-sm transition-colors ${
              activeTab === 'science'
                ? 'text-white'
                : 'bg-white text-gray-900 hover:bg-gray-100'
            }`}
            style={activeTab === 'science' ? { backgroundColor: '#6279E5' } : {}}
          >
            Science
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-5 gap-6">
          {/* Left Column - Lesson Content (3 columns width) */}
          <div className="col-span-3 flex flex-col">
            {/* Title Section */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 uppercase mb-3">
                INTRODUCTION TO VOLCANOES
              </h1>
              <p className="text-gray-700 text-lg">
                Explore the exciting world of volcanoes and understand how eruptions happen.
              </p>
            </div>

            {/* Lesson Content */}
            <div className="bg-white p-8 space-y-8 flex-1 overflow-y-auto">
              {/* Section 1 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What is a volcano?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A volcano is an opening in the Earth's surface where hot melted rock, called magma, can escape. When magma reaches the surface, it becomes lava. Sometimes, gas and ash explode out too! Most volcanoes are shaped like mountains with a hole at the top called a crater. Volcanoes are powerful and can change landscapes quickly, but they also help create new land and improve soil for plants.
                </p>
                {/* Media Placeholder */}
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Why do volcanoes erupt?</h2>
                <p className="text-gray-700 leading-relaxed">
                  Deep under the ground, the Earth is made of layers. One of these layers, the mantle, is very hot and partly melted. When pressure builds up underground, the magma finds weak spots in the crust and pushes its way out — that's how an eruption happens! Some eruptions are gentle, with slow-moving lava, while others are explosive and fast. Scientists who study volcanoes work to understand these eruptions so people nearby can stay safe.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="col-span-2 flex flex-col space-y-6">
            {/* Mastery Progress */}
            <div className="bg-white p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-gray-900 uppercase">Mastery</h3>
                <div className="flex items-center space-x-2 relative">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2"/>
                  </svg>
                  <span className={`text-xl font-bold text-gray-900 transition-transform duration-300 ${showCelebration ? 'scale-125' : ''}`}>
                    {masteryPoints}/400
                  </span>
                  
                  {/* Celebration Stars */}
                  {showCelebration && (
                    <>
                      {[
                        { x: -50, y: -80 },
                        { x: 30, y: -60 },
                        { x: 50, y: -20 },
                        { x: 40, y: 30 },
                        { x: -50, y: 60 },
                        { x: -80, y: 40 },
                        { x: -90, y: -10 },
                        { x: -70, y: -50 }
                      ].map((pos, i) => (
                        <div
                          key={i}
                          className="absolute pointer-events-none"
                          style={{
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            animation: `sparkleOut${i} 1.5s ease-out forwards`,
                          }}
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2"/>
                          </svg>
                          <style>{`
                            @keyframes sparkleOut${i} {
                              0% { 
                                transform: translate(-50%, -50%) scale(0); 
                                opacity: 1; 
                              }
                              100% { 
                                transform: translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(1); 
                                opacity: 0; 
                              }
                            }
                          `}</style>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>
              <div className="w-full bg-gray-200 h-4">
                <div 
                  className="h-4 bg-pink-500 transition-all duration-500 ease-in-out" 
                  style={{ width: `${masteryProgress}%` }}
                ></div>
              </div>
            </div>

            {/* Progress Stepper */}
            <div className="bg-white p-6">
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4].map((step, index) => (
                  <div key={step} className="flex items-center flex-1">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-base flex-shrink-0 ${
                        step === 1 && isAnswerChecked
                          ? selectedAnswer === 'lava'
                            ? 'bg-black text-white'
                            : 'bg-gray-400 text-white'
                          : step === 1 
                            ? 'bg-black text-white' 
                            : 'border-2 border-gray-300 text-gray-900 bg-white'
                      }`}
                    >
                      {step === 1 && isAnswerChecked ? (
                        selectedAnswer === 'lava' ? (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )
                      ) : (
                        step
                      )}
                    </div>
                    {index < 3 && (
                      <div className="flex-1 h-0.5 bg-gray-300 mx-2"></div>
                    )}
                  </div>
                ))}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                What is magma called when it reaches the Earth's surface?
              </h3>
              <div className="space-y-3 mb-4">
                <div 
                  className={`flex items-center justify-between p-3 ${
                    !isAnswerChecked ? 'cursor-pointer hover:bg-gray-50' : ''
                  } ${
                    isAnswerChecked && selectedAnswer === 'ash'
                      ? 'bg-pink-200 border-2 border-pink-300'
                      : ''
                  }`}
                  onClick={() => !isAnswerChecked && setSelectedAnswer('ash')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === 'ash' ? 'border-gray-900' : 'border-gray-300'
                    }`}>
                      {selectedAnswer === 'ash' && (
                        <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                      )}
                    </div>
                    <span className={`text-gray-900 ${selectedAnswer === 'ash' ? 'font-bold' : ''}`}>Ash</span>
                  </div>
                  {isAnswerChecked && selectedAnswer === 'ash' && (
                    <span className="text-gray-900 font-bold">Wrong!</span>
                  )}
                </div>
                <div 
                  className={`flex items-center justify-between p-3 ${
                    !isAnswerChecked ? 'cursor-pointer hover:bg-gray-50' : ''
                  } ${
                    isAnswerChecked
                      ? 'bg-lime-300 border-2 border-lime-400'
                      : ''
                  }`}
                  onClick={() => !isAnswerChecked && setSelectedAnswer('lava')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === 'lava' ? 'border-gray-900' : 'border-gray-300'
                    }`}>
                      {selectedAnswer === 'lava' && (
                        <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                      )}
                    </div>
                    <span className={`text-gray-900 ${selectedAnswer === 'lava' ? 'font-bold' : ''}`}>Lava</span>
                  </div>
                  {isAnswerChecked && (
                    <span className="text-gray-900 font-bold">Correct!</span>
                  )}
                </div>
                <div 
                  className={`flex items-center justify-between p-3 ${
                    !isAnswerChecked ? 'cursor-pointer hover:bg-gray-50' : ''
                  } ${
                    isAnswerChecked && selectedAnswer === 'smoke'
                      ? 'bg-pink-200 border-2 border-pink-300'
                      : ''
                  }`}
                  onClick={() => !isAnswerChecked && setSelectedAnswer('smoke')}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === 'smoke' ? 'border-gray-900' : 'border-gray-300'
                    }`}>
                      {selectedAnswer === 'smoke' && (
                        <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                      )}
                    </div>
                    <span className={`text-gray-900 ${selectedAnswer === 'smoke' ? 'font-bold' : ''}`}>Smoke</span>
                  </div>
                  {isAnswerChecked && selectedAnswer === 'smoke' && (
                    <span className="text-gray-900 font-bold">Wrong!</span>
                  )}
                </div>
              </div>
              <button 
                onClick={isAnswerChecked ? handleNext : handleCheckAnswer}
                disabled={!selectedAnswer && !isAnswerChecked}
                className={`w-full py-3 font-bold uppercase transition-colors ${
                  isAnswerChecked 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : !selectedAnswer 
                      ? 'bg-transparent border-2 border-gray-300 text-gray-300 cursor-not-allowed' 
                      : 'bg-transparent border-2 border-black text-black hover:bg-gray-100'
                }`}
              >
                {isAnswerChecked ? 'NEXT' : 'CHECK'}
              </button>
            </div>

            {/* Help Section */}
            <div className="bg-white p-6 flex-1 flex flex-col" style={{ backgroundColor: '#C4CEFF' }}>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#6279E5' }}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Need help?</h3>
              </div>
              
              {/* Messages Area - grows to fill space */}
              <div className="flex-1 mb-4">
                {/* Chat messages would go here */}
              </div>
              
              {/* Text Input - pinned to bottom */}
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Ask any question"
                  className="flex-1 px-4 py-2 border-2 border-gray-300 focus:outline-none focus:border-gray-900"
                />
                <button className="p-2 bg-white border-2 border-gray-900 hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"/>
                  </svg>
                </button>
                <button className="p-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
                  <svg className="w-5 h-5 transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
