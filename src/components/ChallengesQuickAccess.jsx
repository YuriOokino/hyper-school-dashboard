import { useState } from 'react';

export default function ChallengesQuickAccess({ setActivePage, setActiveTab }) {
  const [activeTab, setActiveTabLocal] = useState('all');
  const [showCompleted, setShowCompleted] = useState(true);

  const handleTabChange = (tab) => {
    setActiveTabLocal(tab);
  };

  const handleViewAll = () => {
    setActivePage('challenges');
    setActiveTab('classes');
  };

  // Sample challenges data
  const challengesData = {
    all: [
      { id: 1, name: "Complete Math Quiz", description: "Finish the linear equations quiz", points: 50, progress: 80, status: 'in_progress', category: 'knowledge' },
      { id: 2, name: "30-min Workout", description: "Complete your daily exercise routine", points: 30, progress: 100, status: 'completed', category: 'physical' },
      { id: 3, name: "Meditation Session", description: "10 minutes of mindfulness practice", points: 20, progress: 60, status: 'in_progress', category: 'mental' },
      { id: 4, name: "Learn New Recipe", description: "Master cooking a healthy meal", points: 40, progress: 25, status: 'in_progress', category: 'life' }
    ],
    knowledge: [
      { id: 1, name: "Complete Math Quiz", description: "Finish the linear equations quiz", points: 50, progress: 80, status: 'in_progress', category: 'knowledge' },
      { id: 5, name: "Science Reading", description: "Read chapter 5 of biology textbook", points: 25, progress: 45, status: 'in_progress', category: 'knowledge' }
    ],
    physical: [
      { id: 2, name: "30-min Workout", description: "Complete your daily exercise routine", points: 30, progress: 100, status: 'completed', category: 'physical' },
      { id: 6, name: "Morning Run", description: "Go for a 2-mile run", points: 35, progress: 0, status: 'pending', category: 'physical', buttonText: 'Sync activity' }
    ],
    mental: [
      { id: 3, name: "Meditation Session", description: "10 minutes of mindfulness practice", points: 20, progress: 60, status: 'in_progress', category: 'mental' },
      { id: 7, name: "Journal Entry", description: "Write about your day", points: 15, progress: 100, status: 'completed', category: 'mental' }
    ],
    life: [
      { id: 4, name: "Learn New Recipe", description: "Master cooking a healthy meal", points: 40, progress: 25, status: 'in_progress', category: 'life' },
      { id: 8, name: "Budget Planning", description: "Create monthly budget", points: 30, progress: 0, status: 'pending', category: 'life' }
    ]
  };

  // Color mapping based on category
  const getCategoryColor = (category) => {
    switch (category) {
      case 'knowledge':
        return '#FE55A4'; // brand-rose for think/lessons
      case 'physical':
        return '#DBFF4D'; // brand-lime
      case 'mental':
        return '#6279E5'; // brand-lilac
      case 'life':
        return '#FC7E3A'; // orange for life skills/thrive
      default:
        return '#FE55A4'; // default to rose
    }
  };

  const currentChallenges = challengesData[activeTab] || challengesData.all;

  return (
    <div className="bg-white p-6 flex flex-col" style={{ height: '600px' }}>
      <div className="mb-6 flex-shrink-0">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-4">
            <h2 className="text-2xl font-bold text-gray-900 uppercase">CHALLENGES</h2>
            <button 
              onClick={handleViewAll}
              className="text-black hover:text-gray-800 font-medium text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-700">Show completed</span>
            <div className="relative">
              <input 
                type="checkbox" 
                id="showCompleted"
                checked={showCompleted}
                onChange={(e) => setShowCompleted(e.target.checked)}
                className="sr-only"
              />
              <label 
                htmlFor="showCompleted"
                className="block w-12 h-6 rounded-full cursor-pointer transition-colors duration-200 flex items-center"
                style={{ 
                  backgroundColor: showCompleted ? '#121214' : '#E8EBFB',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <div 
                  className="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200"
                  style={{ 
                    transform: showCompleted ? 'translateX(28px)' : 'translateX(2px)'
                  }}
                ></div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex space-x-6">
          <button 
            onClick={() => handleTabChange('all')}
            className={`pb-2 font-medium ${
              activeTab === 'all' 
                ? 'text-black border-b-2' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => handleTabChange('knowledge')}
            className={`pb-2 font-medium ${
              activeTab === 'knowledge' 
                ? 'text-black border-b-2' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Knowledge
          </button>
          <button 
            onClick={() => handleTabChange('physical')}
            className={`pb-2 font-medium ${
              activeTab === 'physical' 
                ? 'text-black border-b-2' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Physical Health
          </button>
          <button 
            onClick={() => handleTabChange('mental')}
            className={`pb-2 font-medium ${
              activeTab === 'mental' 
                ? 'text-black border-b-2' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Mental health
          </button>
          <button 
            onClick={() => handleTabChange('life')}
            className={`pb-2 font-medium ${
              activeTab === 'life' 
                ? 'text-black border-b-2' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Life skills
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto space-y-4">
        {currentChallenges.map((challenge) => (
          <div key={challenge.id} className="flex items-center p-4 space-x-6 hover:bg-gray-50 transition-colors">
            {/* Points on far left - colored square with thunderbolt */}
            <div 
              className="w-16 h-16 flex items-center justify-center"
              style={{ backgroundColor: getCategoryColor(challenge.category) }}
            >
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                style={{ color: challenge.category === 'physical' ? '#121214' : 'white' }}
              >
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span 
                className="font-bold text-sm ml-1"
                style={{ color: challenge.category === 'physical' ? '#121214' : 'white' }}
              >
                {challenge.points}
              </span>
            </div>

            {/* Challenge content in middle */}
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 text-lg mb-1">{challenge.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
              <div className="flex items-center space-x-3">
                <div className="w-64 bg-gray-200 h-2">
                  <div 
                    className="h-2 transition-all duration-300 bg-brand-blue"
                    style={{ width: `${challenge.progress}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500 font-medium min-w-[3rem]">{challenge.progress}%</span>
              </div>
            </div>

            {/* Status and action on far right */}
            <div className="flex flex-col items-end space-y-2">
              {challenge.status === 'completed' ? (
                <>
                  <span className="text-sm text-gray-500">-6h 10m</span>
                  <button className="border border-brand-black text-brand-black bg-transparent px-4 py-2 text-sm font-medium hover:bg-brand-black hover:text-white transition-colors">
                    Completed
                  </button>
                </>
              ) : challenge.status === 'in_progress' ? (
                <>
                  <span className="text-sm text-gray-500">-6h 10m</span>
                  <button className="bg-brand-lime text-brand-black px-4 py-2 text-sm font-medium hover:opacity-80 transition-colors">
                    Continue
                  </button>
                </>
              ) : (
                <>
                  <span className="text-sm text-gray-500">-6h 10m</span>
                  <button className="bg-brand-black text-white px-4 py-2 text-sm font-medium hover:opacity-80 transition-colors">
                    {challenge.buttonText || 'Start'}
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
