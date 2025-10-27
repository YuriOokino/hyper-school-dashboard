import { useState } from 'react';
import TopNavigation from './components/TopNavigation';
import Sidebar from './components/Sidebar';
import OverviewContent from './components/OverviewContent';
import DashboardContent from './components/DashboardContent';
import LearningContent from './components/LearningContent';
import ChallengesContent from './components/ChallengesContent';
import ChallengesQuickAccess from './components/ChallengesQuickAccess';
import LessonContent from './components/LessonContent';
import SquadContent from './components/SquadContent';
import RewardsContent from './components/RewardsContent';
import RightPanel from './components/RightPanel';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('knowledge');
  const [activePage, setActivePage] = useState('overview');
  const [showLesson, setShowLesson] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedChatFromSidebar, setSelectedChatFromSidebar] = useState(null);
  const [triggerSidebarChat, setTriggerSidebarChat] = useState(null);
  const [hyperCredits, setHyperCredits] = useState(12450);
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
      level: "Level 6",
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
      level: "Level 7",
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
      level: "Level 5",
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
      level: "Level 8",
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
    <div className="h-screen flex overflow-hidden" style={{ backgroundColor: '#E8EBFB' }}>
      <div className={`${isSidebarCollapsed ? 'w-16' : 'w-64'} flex-shrink-0 h-screen transition-all duration-300`}>
        <Sidebar 
          setActivePage={setActivePage} 
          onCollapseChange={setIsSidebarCollapsed}
          setSelectedChatFromSidebar={setSelectedChatFromSidebar}
          triggerSidebarChat={triggerSidebarChat}
          setTriggerSidebarChat={setTriggerSidebarChat}
        />
      </div>
      
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        <div className="flex-shrink-0">
          <TopNavigation 
            activePage={activePage} 
            setActivePage={(page) => {
              setActivePage(page);
              if (page !== 'challenges') {
                setShowLesson(false);
              }
            }} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            hyperCredits={hyperCredits}
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
              setHyperCredits={setHyperCredits}
            />
          ) : (
            <div className="p-6">
              {activePage === 'overview' ? (
                <OverviewContent setActivePage={setActivePage} setShowLesson={setShowLesson} />
              ) : activePage === 'challenges' ? (
                <ChallengesContent 
                  onStartLesson={() => setShowLesson(true)} 
                  setTriggerSidebarChat={setTriggerSidebarChat}
                />
              ) : (
              <>
                {/* Daily Goals - Only on Dashboard */}
                {activePage === 'dashboard' && (
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase font-['Oswald']">DAILY GOALS</h2>
                    <div className="grid grid-cols-5 gap-4 h-64">
                      <div 
                        className="bg-white p-6 relative overflow-hidden h-full"
                        style={{
                          backgroundImage: 'url(/assets/progress-ui/think.svg)',
                          backgroundSize: '100% auto',
                          backgroundPosition: 'bottom center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      >
                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold text-black uppercase font-['Oswald'] mb-4">THINK</h3>
                          <div className="text-6xl font-bold text-black">57%</div>
                        </div>
                      </div>

                      <div 
                        className="bg-white p-6 relative overflow-hidden h-full"
                        style={{
                          backgroundImage: 'url(/assets/progress-ui/move.svg)',
                          backgroundSize: '100% auto',
                          backgroundPosition: 'bottom center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      >
                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold text-black uppercase font-['Oswald'] mb-4">MOVE</h3>
                          <div className="text-6xl font-bold text-black">25%</div>
                        </div>
                      </div>

                      <div 
                        className="bg-white p-6 relative overflow-hidden h-full"
                        style={{
                          backgroundImage: 'url(/assets/progress-ui/connect.svg)',
                          backgroundSize: '100% auto',
                          backgroundPosition: 'bottom center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      >
                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold text-black uppercase font-['Oswald'] mb-4">CONNECT</h3>
                          <div className="text-6xl font-bold text-black">49%</div>
                        </div>
                      </div>

                      <div 
                        className="bg-white p-6 relative overflow-hidden h-full"
                        style={{
                          backgroundImage: 'url(/assets/progress-ui/thrive.svg)',
                          backgroundSize: '100% auto',
                          backgroundPosition: 'bottom center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      >
                        <div className="relative z-10">
                          <h3 className="text-2xl font-bold text-black uppercase font-['Oswald'] mb-4">THRIVE</h3>
                          <div className="text-6xl font-bold text-black">80%</div>
                        </div>
                      </div>

                      {/* Today's Summary Card */}
                      <div className="bg-white p-6 ">
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-gray-900 uppercase font-['Oswald'] text-center mb-4">TODAY'S SUMMARY</h3>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Lessons completed</span>
                            <span className="text-sm font-semibold">2</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Points earned</span>
                            <span className="text-sm font-semibold">150</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Study time</span>
                            <span className="text-sm font-semibold">2h 30m</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Mood check-in</span>
                            <span className="text-sm font-semibold">98</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  {/* Middle Panel */}
                  <div className="flex-1 space-y-4">
                  {activePage === 'dashboard' ? (
                    <ChallengesQuickAccess 
                      setActivePage={setActivePage}
                      setActiveTab={setActiveTab}
                    />
                  ) : activePage === 'squad' ? (
                    <SquadContent 
                      selectedChatFromSidebar={selectedChatFromSidebar}
                      setSelectedChatFromSidebar={setSelectedChatFromSidebar}
                    />
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
                    <div className="w-96">
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