import { useState } from 'react';
import TopNavigation from './components/TopNavigation';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import LearningContent from './components/LearningContent';
import LessonContent from './components/LessonContent';
import SquadContent from './components/SquadContent';
import RewardsContent from './components/RewardsContent';
import RightPanel from './components/RightPanel';
import ChatButton from './components/ChatButton';

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
        <Sidebar />
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
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-2xl font-bold text-gray-900 uppercase">DAILY GOALS</h2>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>2 of 4 completed</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      {/* Think Goal */}
                      <div 
                        className={`relative bg-white p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                          dailyGoals.think.completed ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-blue-300'
                        }`}
                        onClick={() => handleGoalAction('think')}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            dailyGoals.think.completed ? 'bg-green-500' : 'bg-blue-100'
                          }`}>
                            <svg className={`w-5 h-5 ${dailyGoals.think.completed ? 'text-white' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          </div>
                          {dailyGoals.think.completed && (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Think</h3>
                        <p className="text-sm text-gray-600 mb-3">Complete learning lessons</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Progress</span>
                            <span className="font-semibold">{dailyGoals.think.current}/{dailyGoals.think.target}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-500 ${
                                dailyGoals.think.completed ? 'bg-green-500' : 'bg-blue-500'
                              }`}
                              style={{ width: `${Math.min((dailyGoals.think.current / dailyGoals.think.target) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                        <button className={`w-full mt-4 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                          dailyGoals.think.completed 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}>
                          {dailyGoals.think.completed ? 'Completed!' : 'Start Learning'}
                        </button>
                      </div>

                      {/* Move Goal */}
                      <div 
                        className={`relative bg-white p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                          dailyGoals.move.completed ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-orange-300'
                        }`}
                        onClick={() => handleGoalAction('move')}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            dailyGoals.move.completed ? 'bg-green-500' : 'bg-orange-100'
                          }`}>
                            <svg className={`w-5 h-5 ${dailyGoals.move.completed ? 'text-white' : 'text-orange-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          {dailyGoals.move.completed && (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Move</h3>
                        <p className="text-sm text-gray-600 mb-3">Stay active and healthy</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Steps</span>
                            <span className="font-semibold">{dailyGoals.move.current.toLocaleString()}/{dailyGoals.move.target.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-500 ${
                                dailyGoals.move.completed ? 'bg-green-500' : 'bg-orange-500'
                              }`}
                              style={{ width: `${Math.min((dailyGoals.move.current / dailyGoals.move.target) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                        <button className={`w-full mt-4 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                          dailyGoals.move.completed 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-orange-500 text-white hover:bg-orange-600'
                        }`}>
                          {dailyGoals.move.completed ? 'Goal Achieved!' : 'Track Activity'}
                        </button>
                      </div>

                      {/* Connect Goal */}
                      <div 
                        className={`relative bg-white p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                          dailyGoals.connect.completed ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-purple-300'
                        }`}
                        onClick={() => handleGoalAction('connect')}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            dailyGoals.connect.completed ? 'bg-green-500' : 'bg-purple-100'
                          }`}>
                            <svg className={`w-5 h-5 ${dailyGoals.connect.completed ? 'text-white' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          {dailyGoals.connect.completed && (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Connect</h3>
                        <p className="text-sm text-gray-600 mb-3">Track your mood & social</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Mood Score</span>
                            <span className="font-semibold">{dailyGoals.connect.current}/100</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-500 ${
                                dailyGoals.connect.completed ? 'bg-green-500' : 'bg-purple-500'
                              }`}
                              style={{ width: `${Math.min((dailyGoals.connect.current / dailyGoals.connect.target) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                        <button className={`w-full mt-4 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                          dailyGoals.connect.completed 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-purple-500 text-white hover:bg-purple-600'
                        }`}>
                          {dailyGoals.connect.completed ? 'Great Mood!' : 'Log Mood'}
                        </button>
                      </div>

                      {/* Thrive Goal */}
                      <div 
                        className={`relative bg-white p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg cursor-pointer ${
                          dailyGoals.thrive.completed ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-yellow-300'
                        }`}
                        onClick={() => handleGoalAction('thrive')}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            dailyGoals.thrive.completed ? 'bg-green-500' : 'bg-yellow-100'
                          }`}>
                            <svg className={`w-5 h-5 ${dailyGoals.thrive.completed ? 'text-white' : 'text-yellow-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                          {dailyGoals.thrive.completed && (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">Thrive</h3>
                        <p className="text-sm text-gray-600 mb-3">Develop life skills</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Skills</span>
                            <span className="font-semibold">{dailyGoals.thrive.current}/{dailyGoals.thrive.target}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full transition-all duration-500 ${
                                dailyGoals.thrive.completed ? 'bg-green-500' : 'bg-yellow-500'
                              }`}
                              style={{ width: `${Math.min((dailyGoals.thrive.current / dailyGoals.thrive.target) * 100, 100)}%` }}
                            ></div>
                          </div>
                        </div>
                        <button className={`w-full mt-4 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                          dailyGoals.thrive.completed 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-500 text-white hover:bg-yellow-600'
                        }`}>
                          {dailyGoals.thrive.completed ? 'Skills Mastered!' : 'Learn Skills'}
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

      <ChatButton />
    </div>
  );
}