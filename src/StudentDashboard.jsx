import { useState } from 'react';
import TopNavigation from './components/TopNavigation';
import Sidebar from './components/Sidebar';
import DashboardContent from './components/DashboardContent';
import LearningContent from './components/LearningContent';
import RightPanel from './components/RightPanel';
import ChatButton from './components/ChatButton';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('knowledge');
  const [activePage, setActivePage] = useState('dashboard');

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
      weakAreas: ["Calculus"]
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
      weakAreas: ["Organic Chemistry"]
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
      weakAreas: ["Writing", "Poetry"]
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
      weakAreas: []
    }
  ];

  const knowledgeChallenges = [
    {
      id: 1,
      name: "MATH QUIZ",
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
    <div className="min-h-screen bg-gray-50">
      <TopNavigation activePage={activePage} setActivePage={setActivePage} />
      
      <div className="flex h-screen">
        <Sidebar />
        
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Daily Goals - Full Width Above Everything */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">DAILY GOALS</h2>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white p-6 text-center h-32 flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Think</p>
                  <p className="text-xl font-bold">1/5 LESSONS</p>
                </div>
                <div className="bg-white p-6 text-center h-32 flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Move</p>
                  <p className="text-xl font-bold">6K/5K STEPS</p>
                </div>
                <div className="bg-white p-6 text-center h-32 flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Connect</p>
                  <p className="text-xl font-bold">87 MOOD SCORE</p>
                </div>
                <div className="bg-white p-6 text-center h-32 flex flex-col justify-center">
                  <p className="text-sm text-gray-500">Thrive</p>
                  <p className="text-xl font-bold">1/3 SKILLS</p>
                </div>
              </div>
            </div>

            {activePage === 'learning' ? (
              <>
                {/* Full Width Mastery Section */}
                <div className="mb-6">
                  <LearningContent 
                    masteryData={masteryData} 
                    getColorClasses={getColorClasses} 
                    showMasteryOnly={true}
                  />
                </div>
                
                {/* Two Column Layout for Rest of Content */}
                <div className="flex gap-4">
                  <div className="flex-1 space-y-4">
                    <LearningContent 
                      masteryData={masteryData} 
                      getColorClasses={getColorClasses} 
                      showMasteryOnly={false}
                    />
                  </div>
                  <div className="w-80">
                    <RightPanel />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex gap-4">
                {/* Middle Panel */}
                <div className="flex-1 space-y-4">
                  {activePage === 'dashboard' ? (
                    <DashboardContent 
                      activeTab={activeTab} 
                      setActiveTab={setActiveTab} 
                      currentChallenges={currentChallenges} 
                    />
                  ) : (
                    <div className="p-6">
                      <h1 className="text-2xl font-bold">Coming Soon</h1>
                      <p>This page is under development.</p>
                    </div>
                  )}
                </div>

                {/* Right Panel */}
                <div className="w-80">
                  <RightPanel />
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <ChatButton />
    </div>
  );
}