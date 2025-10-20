import { useState } from 'react';

export default function LessonContent({ onBackToLearning, setHyperCredits }) {
  const [activeTab, setActiveTab] = useState('knowledge');
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [masteryProgress, setMasteryProgress] = useState(30); // percentage

  const handleCheckAnswer = () => {
    if (selectedAnswer && !isAnswerChecked) {
      setIsAnswerChecked(true);
      
      // Check if answer is correct (lava is the correct answer)
      if (selectedAnswer === 'lava') {
        // Correct answer: increase both credits and progress
        if (setHyperCredits) {
          setHyperCredits(prev => prev + 20); // Add 20 credits
        }
        setMasteryProgress(prev => Math.min(prev + 5, 100)); // Add 5%, max 100%
      } else {
        // Wrong answer: decrease progress but keep credits unchanged
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
      {/* Top Navigation Bar */}
      <div className="p-6 flex items-center justify-between">
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

      {/* Title Section - Full Width */}
      <div className="px-6 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 uppercase mb-3">
          INTRODUCTION TO VOLCANOES
        </h1>
        <p className="text-gray-700 text-lg">
          Explore the exciting world of volcanoes and understand how eruptions happen.
        </p>
      </div>

      {/* Main Content Container - Two Columns */}
      <div className="px-6 pb-6">
        <div className="grid grid-cols-5 gap-6">
          {/* Left Column - Lesson Content (3 columns width) */}
          <div className="col-span-3">
            {/* Lesson Content */}
            <div className="bg-white p-8 space-y-8">
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
                <p className="text-gray-700 leading-relaxed mb-4">
                  Deep under the ground, the Earth is made of layers. One of these layers, the mantle, is very hot and partly melted. When pressure builds up underground, the magma finds weak spots in the crust and pushes its way out — that's how an eruption happens! Some eruptions are gentle, with slow-moving lava, while others are explosive and fast. Scientists who study volcanoes work to understand these eruptions so people nearby can stay safe.
                </p>
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Parts of a volcano</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Volcanoes have several important parts. The crater is the opening at the top where lava, ash, and gases come out. Inside the volcano is a channel called the vent, which connects the crater to the magma chamber below. The magma chamber is a large underground pool of molten rock. When pressure builds up in the magma chamber, it forces the magma up through the vent and out of the crater!
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Types of volcanoes</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  There are three main types of volcanoes. Shield volcanoes are wide and flat, formed by layers of thin, runny lava. Composite volcanoes (also called stratovolcanoes) are tall and cone-shaped, built from layers of lava and ash. Cinder cone volcanoes are the smallest type, made from pieces of lava that cool and fall around the vent. Each type forms differently based on the kind of lava and how explosive the eruptions are.
                </p>
                <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Where are volcanoes found?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Most volcanoes are found along the edges of tectonic plates, which are huge pieces of Earth's crust that move slowly. The Pacific Ring of Fire is a famous area with many active volcanoes because several tectonic plates meet there. Volcanoes can also form over hot spots, which are places where hot magma rises from deep in the Earth. The Hawaiian Islands were formed by a hot spot volcano!
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Living with volcanoes</h2>
                <p className="text-gray-700 leading-relaxed">
                  Even though volcanoes can be dangerous, millions of people live near them. Volcanic soil is very fertile and great for farming. Volcanoes also create beautiful landscapes and tourist attractions. Scientists called volcanologists study volcanoes to predict eruptions and keep people safe. They use special tools to measure earthquakes, gas emissions, and changes in the volcano's shape to give early warnings before an eruption.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="col-span-2 flex flex-col space-y-6 sticky top-6 self-start" style={{ maxHeight: 'calc(100vh - 3rem)' }}>
            {/* Progress Stepper */}
            <div className="bg-white p-6 flex-shrink-0">
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
            <div 
              className="bg-white flex-1 p-6 flex flex-col overflow-hidden"
              style={{ backgroundColor: '#C4CEFF' }}
            >
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
              <div className="flex-1 mb-4 overflow-y-auto space-y-3">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-black text-white p-4 max-w-[85%]">
                    <p className="text-base leading-relaxed">I learned that magma comes from inside the Earth, but why does it sometimes explode out so fast during a volcanic eruption?</p>
                  </div>
                </div>

                {/* Bot Message */}
                <div className="flex justify-start">
                  <div className="bg-white p-4 max-w-[85%]">
                    <p className="text-base text-gray-900 leading-relaxed">Great question! Magma explodes out quickly when there is a lot of pressure built up underground from gases trapped inside the molten rock. When this pressure becomes too strong, it forces the magma to burst out rapidly through the volcano's opening!</p>
                  </div>
                </div>
              </div>
              
              {/* Text Input - pinned to bottom */}
              <div className="flex items-center space-x-3 px-4 py-3 border border-gray-300 bg-white">
                <input
                  type="text"
                  placeholder="Ask any question"
                  className="flex-1 text-sm text-gray-600 focus:outline-none placeholder-gray-400"
                />
                <button className="p-1 hover:bg-gray-100 transition-colors" title="Attach file">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 transition-colors" title="Emoji">
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 bg-gray-900 hover:bg-gray-800 transition-colors" title="Send">
                  <svg className="w-5 h-5 text-white transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
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
