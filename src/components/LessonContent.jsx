import { useState } from 'react';

export default function LessonContent({ onBackToLearning, activeTab: pageActiveTab, setActiveTab: setPageActiveTab, activePage, setActivePage }) {
  const [lessonActiveTab, setLessonActiveTab] = useState('chapters');
  const [videoState, setVideoState] = useState('paused'); // 'paused', 'playing', 'fullscreen'

  return (
    <div className="bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <button 
          onClick={onBackToLearning}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Back to Learning</span>
        </button>
      </div>

      {/* Top Row: Video, Title/Description, Action Button */}
      <div className="bg-white border-b border-gray-200 p-6">
        <div className={`flex items-start ${videoState === 'playing' ? 'flex-col' : 'flex-row'} ${videoState === 'playing' ? 'space-y-4' : 'space-x-6'}`}>
          {/* Video Section */}
          <div 
            className={`bg-gray-200 rounded-lg flex items-center justify-center relative cursor-pointer group hover:bg-gray-300 transition-all ${
              videoState === 'paused' ? 'w-96 h-72' : 
              videoState === 'playing' ? 'w-full h-96' : 
              'w-96 h-72'
            }`}
            onClick={() => {
              if (videoState === 'paused') {
                setVideoState('playing');
              }
            }}
          >
            <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            
            {/* Play Button Overlay */}
            {videoState === 'paused' && (
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center group-hover:bg-opacity-40 transition-all">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
            )}
            
            {/* Playing State - Show Full Screen Button */}
            {videoState === 'playing' && (
              <div className="absolute top-4 right-4 flex space-x-2">
                {/* Shrink Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setVideoState('paused');
                  }}
                  className="bg-black bg-opacity-50 text-white p-2 rounded hover:bg-opacity-70 transition-colors"
                  title="Shrink to normal view"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Full Screen Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setVideoState('fullscreen');
                  }}
                  className="bg-black bg-opacity-50 text-white p-2 rounded hover:bg-opacity-70 transition-colors"
                  title="Enter fullscreen"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 010-2h4z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Title and Description - Only show when not playing */}
          {videoState !== 'playing' && (
            <div className="flex-1 flex flex-col justify-between">
            <div>
              {/* Points Tag */}
              <div className="mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  150 points
                </span>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Understanding Linear Equations</h1>
              <p className="text-gray-600 mb-4">
                Learn the fundamentals of linear equations, including how to solve them step by step and apply them to real-world problems. This lesson covers basic concepts, solving techniques, and practical examples.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Mathematics</span>
                <span>•</span>
                <span>45 minutes</span>
                <span>•</span>
                <span>Intermediate</span>
              </div>
            </div>
              
              {/* Action Button - Bottom of right column */}
              <div className="mt-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Continue Lesson
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lesson Content */}
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6">

                  {/* Lesson Tabs */}
                  <div className="mb-6">
                  <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
                    <button
                      onClick={() => setLessonActiveTab('chapters')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        lessonActiveTab === 'chapters'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Chapters
                    </button>
                    <button
                      onClick={() => setLessonActiveTab('content')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        lessonActiveTab === 'content'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Content
                    </button>
                    <button
                      onClick={() => setLessonActiveTab('exercises')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        lessonActiveTab === 'exercises'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Exercises
                    </button>
                    <button
                      onClick={() => setLessonActiveTab('resources')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        lessonActiveTab === 'resources'
                          ? 'bg-white text-gray-900 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Resources
                    </button>
                  </div>
                </div>

          {/* Tab Content */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            {lessonActiveTab === 'chapters' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Lesson Chapters</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                          1
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Introduction to Linear Equations</h3>
                          <p className="text-gray-600 text-sm">Understanding what linear equations are and their basic properties</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">12 min</span>
                        <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                          2
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Solving Linear Equations</h3>
                          <p className="text-gray-600 text-sm">Step-by-step methods to solve linear equations</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">18 min</span>
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center font-semibold text-sm">
                          3
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Graphing Linear Equations</h3>
                          <p className="text-gray-600 text-sm">Visual representation of linear equations on coordinate planes</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">15 min</span>
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center font-semibold text-sm">
                          4
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">Real-World Applications</h3>
                          <p className="text-gray-600 text-sm">Applying linear equations to solve practical problems</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">12 min</span>
                        <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {lessonActiveTab === 'content' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Lesson Content</h2>
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">What are Linear Equations?</h3>
                  <p className="text-gray-700 mb-4">
                    A linear equation is an equation in which the highest power of the variable is 1. 
                    Linear equations can be written in the form ax + b = c, where a, b, and c are constants.
                  </p>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Solving Linear Equations</h3>
                  <p className="text-gray-700 mb-4">
                    To solve a linear equation, we use inverse operations to isolate the variable. 
                    The goal is to get the variable by itself on one side of the equation.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Example:</h4>
                    <p className="text-gray-700">Solve: 2x + 5 = 13</p>
                    <p className="text-gray-700">Step 1: Subtract 5 from both sides: 2x = 8</p>
                    <p className="text-gray-700">Step 2: Divide both sides by 2: x = 4</p>
                  </div>
                </div>
              </div>
            )}

            {lessonActiveTab === 'exercises' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Practice Exercises</h2>
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Exercise 1</h3>
                    <p className="text-gray-700 mb-3">Solve for x: 3x - 7 = 14</p>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="exercise1" className="mr-2" />
                        <span className="text-gray-700">x = 7</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="exercise1" className="mr-2" />
                        <span className="text-gray-700">x = 21</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="exercise1" className="mr-2" />
                        <span className="text-gray-700">x = 3</span>
                      </label>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Exercise 2</h3>
                    <p className="text-gray-700 mb-3">Solve for y: 2y + 10 = 24</p>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input type="radio" name="exercise2" className="mr-2" />
                        <span className="text-gray-700">y = 7</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="exercise2" className="mr-2" />
                        <span className="text-gray-700">y = 17</span>
                      </label>
                      <label className="flex items-center">
                        <input type="radio" name="exercise2" className="mr-2" />
                        <span className="text-gray-700">y = 12</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {lessonActiveTab === 'resources' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Tutorial</h3>
                    <p className="text-gray-700 mb-2">Watch a step-by-step video explanation of linear equations</p>
                    <span className="text-blue-600 text-sm font-medium">Watch Video →</span>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice Worksheet</h3>
                    <p className="text-gray-700 mb-2">Download additional practice problems</p>
                    <span className="text-blue-600 text-sm font-medium">Download PDF →</span>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 cursor-pointer">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Interactive Calculator</h3>
                    <p className="text-gray-700 mb-2">Use our equation solver to check your work</p>
                    <span className="text-blue-600 text-sm font-medium">Open Calculator →</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

          {/* Sidebar */}
          <div className="w-80 bg-gray-50 border-l border-gray-200 p-6">
          <div className="space-y-6">
            {/* Achievement */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold text-green-800">Achievement Unlocked!</span>
              </div>
              <p className="text-sm text-green-700">You've completed 90% of this lesson!</p>
            </div>

            {/* Related Lessons */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Lessons</h3>
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm cursor-pointer">
                  <h4 className="font-medium text-gray-900">Quadratic Equations</h4>
                  <p className="text-sm text-gray-600">Next lesson in sequence</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-gray-200 hover:shadow-sm cursor-pointer">
                  <h4 className="font-medium text-gray-900">Graphing Linear Functions</h4>
                  <p className="text-sm text-gray-600">Complementary topic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Lightbox Modal - State 3: Fullscreen */}
      {videoState === 'fullscreen' && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setVideoState('playing')}>
          <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button 
              onClick={() => setVideoState('playing')}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video Container */}
            <div className="relative w-full h-0 pb-[56.25%] bg-gray-900 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 text-white mb-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  <h3 className="text-xl font-semibold text-white mb-2">Understanding Linear Equations</h3>
                  <p className="text-gray-300">Click play to start the video lesson</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
