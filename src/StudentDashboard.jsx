import { useState } from 'react';
import TopNavigation from './components/TopNavigation';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import LearningContent from './components/LearningContent';
import LessonContent from './components/LessonContent';
import SquadContent from './components/SquadContent';
import RewardsContent from './components/RewardsContent';
import RightPanel from './components/RightPanel';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('knowledge');
  const [activePage, setActivePage] = useState('dashboard');
  const [showLesson, setShowLesson] = useState(false);
  const [dailyGoals, setDailyGoals] = useState({
    think: { current: 1, target: 5, completed: false },
    move: { current: 6000, target: 5000, completed: true },
    connect: { current: 87, target: 80, completed: true },
    thrive: { current: 1, target: 3, completed: false }
  });

  const masteryData = [
    {
      subject: "Math",
      percentage: 60,
      level: "Intermediate",
      levelNumber: "3 of 5",
      nextMilestone: "50 points to Level 4",
      lastStudied: "2 days ago",
      streak: 3,
      icon: "calculator",
      color: "blue",
      topics: ["Algebra", "Geometry", "Statistics"],
      weakAreas: ["Calculus"],
      currentPoints: 1200,
      nextLevelPoints: 2000
    },
    {
      subject: "Science",
      percentage: 75,
      level: "Advanced",
      levelNumber: "4 of 5",
      nextMilestone: "25 points to Level 5",
      lastStudied: "1 day ago",
      streak: 5,
      icon: "atom",
      color: "green",
      topics: ["Physics", "Chemistry", "Biology"],
      weakAreas: ["Organic Chemistry"],
      currentPoints: 2250,
      nextLevelPoints: 3000
    },
    {
      subject: "English",
      percentage: 45,
      level: "Beginner",
      levelNumber: "2 of 5",
      nextMilestone: "75 points to Level 3",
      lastStudied: "3 days ago",
      streak: 1,
      icon: "book",
      color: "purple",
      topics: ["Grammar", "Literature"],
      weakAreas: ["Writing", "Poetry"],
      currentPoints: 900,
      nextLevelPoints: 2000
    },
    {
      subject: "History",
      percentage: 80,
      level: "Expert",
      levelNumber: "5 of 5",
      nextMilestone: "Mastered!",
      lastStudied: "Today",
      streak: 7,
      icon: "globe",
      color: "yellow",
      topics: ["World History", "Ancient Civilizations"],
      weakAreas: [],
      currentPoints: 3200,
      nextLevelPoints: 4000
    }
  ];

  const knowledgeChallenges = [
    {
      id: 1,
      name: "REVIEW LINEAR EQUATIONS",
      description: "Algebra basics",
      points: 90,
      status: "completed",
      action: "Review →",
      progress: 100
    },
    {
      id: 2,
      name: "SCIENCE READING",
      description: "Physics fundamentals",
      points: 110,
      status: "in_progress",
      action: "Continue ▷",
      progress: 60
    },
    {
      id: 3,
      name: "HISTORY LESSON",
      description: "World War II",
      points: 100,
      status: "pending",
      action: "Continue ▷",
      progress: 0
    },
    {
      id: 4,
      name: "LANGUAGE ARTS",
      description: "Creative writing",
      points: 80,
      status: "pending",
      action: "Start ▷",
      progress: 0
    }
  ];

  const physicalHealthChallenges = [
    {
      id: 1,
      name: "WALK 5K STEPS",
      description: "6,738 steps",
      points: 200,
      status: "completed",
      action: "Done!",
      progress: 100
    },
    {
      id: 2,
      name: "10 MIN BREATHING EXERCISE",
      description: "Meditation session",
      points: 50,
      status: "in_progress",
      action: "Start",
      progress: 0
    },
    {
      id: 3,
      name: "SYNC DATA",
      description: "Update fitness tracker",
      points: 25,
      status: "in_progress",
      action: "Sync data",
      progress: 0
    }
  ];

  const mentalHealthChallenges = [
    {
      id: 1,
      name: "MEDITATION SESSION",
      description: "10 minutes of mindfulness",
      points: 75,
      status: "in_progress",
      action: "Start",
      progress: 0
    },
    {
      id: 2,
      name: "STRESS MANAGEMENT",
      description: "Practice breathing exercises",
      points: 60,
      status: "in_progress",
      action: "Continue",
      progress: 30
    },
    {
      id: 3,
      name: "SLEEP TRACKING",
      description: "Log your sleep patterns",
      points: 50,
      status: "completed",
      action: "Done!",
      progress: 100
    }
  ];

  const lifeSkillsChallenges = [
    {
      id: 1,
      name: "BUDGET PLANNING",
      description: "Create a monthly budget",
      points: 80,
      status: "in_progress",
      action: "Start",
      progress: 0
    },
    {
      id: 2,
      name: "TIME MANAGEMENT",
      description: "Organize your daily schedule",
      points: 70,
      status: "in_progress",
      action: "Continue",
      progress: 40
    },
    {
      id: 3,
      name: "GOAL SETTING",
      description: "Define your short-term goals",
      points: 90,
      status: "completed",
      action: "Done!",
      progress: 100
    }
  ];

  const getCurrentChallenges = () => {
    switch (activeTab) {
      case 'knowledge':
        return knowledgeChallenges;
      case 'physical':
        return physicalHealthChallenges;
      case 'mental':
        return mentalHealthChallenges;
      case 'life':
        return lifeSkillsChallenges;
      default:
        return knowledgeChallenges;
    }
  };

  const currentChallenges = getCurrentChallenges();

  const handleGoalAction = (goalType) => {
    // Handle different goal actions
    switch (goalType) {
      case 'think':
        setActivePage('learning');
        break;
      case 'move':
        // Could open fitness tracking or suggest activities
        alert('Open fitness app or start a workout!');
        break;
      case 'connect':
        // Could open mood tracking or social features
        alert('Log your mood or connect with friends!');
        break;
      case 'thrive':
        setActiveTab('life');
        break;
      default:
        break;
    }
  };

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-600',
        light: 'bg-blue-100',
        ring: 'ring-blue-200'
      },
      green: {
        bg: 'bg-green-500',
        text: 'text-green-600',
        light: 'bg-green-100',
        ring: 'ring-green-200'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-600',
        light: 'bg-purple-100',
        ring: 'ring-purple-200'
      },
      yellow: {
        bg: 'bg-yellow-500',
        text: 'text-yellow-600',
        light: 'bg-yellow-100',
        ring: 'ring-yellow-200'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="h-screen bg-gray-50 flex overflow-hidden">
      <div className="w-64 flex-shrink-0 h-screen">
        <Sidebar setActivePage={setActivePage} />
      </div>
      
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        <div className="flex-shrink-0">
          <TopNavigation 
            activePage={activePage} 
            setActivePage={(page) => {
              setActivePage(page);
              if (page !== 'learning') {
                setShowLesson(false);
              }
            }} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
          />
        </div>
        
        <main className="flex-1 overflow-y-auto">
          {showLesson ? (
            <LessonContent 
              onBackToLearning={() => setShowLesson(false)} 
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          ) : (
            <div className="p-6">
              {activePage === 'learning' ? (
                <>
                  {/* Full Width Mastery Section */}
                  <div className="mb-6">
                    <LearningContent 
                      masteryData={masteryData} 
                      getColorClasses={getColorClasses} 
                      showMasteryOnly={true}
                      onLessonClick={() => setShowLesson(true)}
                    />
                  </div>
                  
                  {/* Full Width Content */}
                  <div className="space-y-4">
                    <LearningContent 
                      masteryData={masteryData} 
                      getColorClasses={getColorClasses} 
                      showMasteryOnly={false}
                      onLessonClick={() => setShowLesson(true)}
                    />
                  </div>
                </>
              ) : (
              <>
                {/* Daily Goals - Only on Dashboard */}
                {activePage === 'dashboard' && (
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase font-['Oswald']">DAILY GOALS</h2>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-white p-6 border border-gray-200">
                        {/* Half-circle progress indicator */}
                        <div className="mb-4">
                          <div className="relative w-full h-32 flex items-center justify-center">
                            <svg className="w-full h-28" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet">
                              {/* Background semicircle */}
                              <path
                                d="M 20 100 A 80 80 0 0 1 180 100"
                                stroke="#E0E0E0"
                                strokeWidth="16"
                                fill="none"
                                strokeLinecap="round"
                              />
                              {/* Progress semicircle */}
                              <path
                                d="M 20 100 A 80 80 0 0 1 180 100"
                                stroke="#5C5CFF"
                                strokeWidth="16"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="251.3"
                                strokeDashoffset="62.8"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-end justify-center pb-2">
                              <h3 className="text-2xl font-bold text-gray-900 uppercase font-['Oswald'] text-center">THINK</h3>
                            </div>
                          </div>
                        </div>
                        
                        {/* Checklist */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C4CEFF' }}>
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-600">Complete Math lesson</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-600">Review Science notes</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-600">Practice English grammar</span>
                          </div>
                        </div>

                        <button 
                          className="w-full py-2 px-4 text-sm font-medium transition-colors"
                          style={{ backgroundColor: '#000', color: '#fff' }}
                          onClick={() => handleGoalAction('think')}
                        >
                          REVIEW SCIENCE NOTES
                        </button>
                      </div>

                      <div className="bg-white p-6 border border-gray-200">
                        {/* Half-circle progress indicator */}
                        <div className="mb-4">
                          <div className="relative w-full h-32 flex items-center justify-center">
                            <svg className="w-full h-28" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet">
                              {/* Background semicircle */}
                              <path
                                d="M 20 100 A 80 80 0 0 1 180 100"
                                stroke="#E0E0E0"
                                strokeWidth="16"
                                fill="none"
                                strokeLinecap="round"
                              />
                              {/* Progress semicircle */}
                              <path
                                d="M 20 100 A 80 80 0 0 1 180 100"
                                stroke="#5C5CFF"
                                strokeWidth="16"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="251.3"
                                strokeDashoffset="82.9"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-end justify-center pb-2">
                              <h3 className="text-2xl font-bold text-gray-900 uppercase font-['Oswald'] text-center">MOVE</h3>
                            </div>
                          </div>
                        </div>
                        
                        {/* Checklist */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C4CEFF' }}>
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-600">Morning walk</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C4CEFF' }}>
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-600">Stretch break</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-600">Evening exercise</span>
                          </div>
                        </div>

                        <button 
                          className="w-full py-2 px-4 text-sm font-medium transition-colors"
                          style={{ backgroundColor: '#000', color: '#fff' }}
                          onClick={() => handleGoalAction('move')}
                        >
                          EVENING EXERCISE
                        </button>
                      </div>

                      <div className="bg-white p-6 border border-gray-200">
                        {/* Half-circle progress indicator */}
                        <div className="mb-4">
                          <div className="relative w-full h-32 flex items-center justify-center">
                            <svg className="w-full h-28" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet">
                              {/* Background semicircle */}
                              <path
                                d="M 20 100 A 80 80 0 0 1 180 100"
                                stroke="#E0E0E0"
                                strokeWidth="16"
                                fill="none"
                                strokeLinecap="round"
                              />
                              {/* Progress semicircle */}
                              <path
                                d="M 20 100 A 80 80 0 0 1 180 100"
                                stroke="#5C5CFF"
                                strokeWidth="16"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="251.3"
                                strokeDashoffset="62.8"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-end justify-center pb-2">
                              <h3 className="text-2xl font-bold text-gray-900 uppercase font-['Oswald'] text-center">CONNECT</h3>
                            </div>
                          </div>
                        </div>
                        
                        {/* Checklist */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center" style={{ backgroundColor: '#C4CEFF' }}>
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-sm text-gray-600">Log daily mood</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-600">Connect with friends</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-600">Practice gratitude</span>
                          </div>
                        </div>

                        <button 
                          className="w-full py-2 px-4 text-sm font-medium transition-colors"
                          style={{ backgroundColor: '#000', color: '#fff' }}
                          onClick={() => handleGoalAction('connect')}
                        >
                          CONNECT WITH FRIENDS
                        </button>
                      </div>

                      <div className="bg-white p-6 border border-gray-200">
                        {/* Half-circle progress indicator */}
                        <div className="mb-4">
                          <div className="relative w-full h-32 flex items-center justify-center">
                            <svg className="w-full h-28" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet">
                              {/* Background semicircle */}
                              <path
                                d="M 20 100 A 80 80 0 0 1 180 100"
                                stroke="#E0E0E0"
                                strokeWidth="16"
                                fill="none"
                                strokeLinecap="round"
                              />
                              {/* Progress semicircle */}
                              <path
                                d="M 20 100 A 80 80 0 0 1 180 100"
                                stroke="#5C5CFF"
                                strokeWidth="16"
                                fill="none"
                                strokeLinecap="round"
                                strokeDasharray="251.3"
                                strokeDashoffset="251.3"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-end justify-center pb-2">
                              <h3 className="text-2xl font-bold text-gray-900 uppercase font-['Oswald'] text-center">THRIVE</h3>
                            </div>
                          </div>
                        </div>
                        
                        {/* Checklist */}
                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-600">Learn new skill</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-600">Practice time management</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-4 h-4 border border-gray-300 rounded-full"></div>
                            <span className="text-sm text-gray-600">Set daily goals</span>
                          </div>
                        </div>

                        <button 
                          className="w-full py-2 px-4 text-sm font-medium transition-colors"
                          style={{ backgroundColor: '#000', color: '#fff' }}
                          onClick={() => handleGoalAction('thrive')}
                        >
                          LEARN NEW SKILL
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  {/* Middle Panel */}
                  <div className="flex-1 space-y-4">
                  {activePage === 'dashboard' ? (
                    <DashboardContent 
                      activeTab={activeTab} 
                      setActiveTab={setActiveTab} 
                      currentChallenges={currentChallenges} 
                    />
                  ) : activePage === 'squad' ? (
                    <SquadContent />
                  ) : activePage === 'rewards' ? (
                    <RewardsContent />
                  ) : (
                    <div className="p-6">
                      <h1 className="text-2xl font-bold">Coming Soon</h1>
                      <p>This page is under development.</p>
                    </div>
                  )}
                  </div>

                  {/* Right Panel - Only on Dashboard */}
                  {activePage === 'dashboard' && (
                    <div className="w-80">
                      <RightPanel />
                    </div>
                  )}
                </div>
              </>
            )}
            </div>
          )}
        </main>
      </div>

    </div>
  );
}