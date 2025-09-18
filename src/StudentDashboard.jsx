import { useState } from 'react';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('knowledge');

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
      status: "in-progress",
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
      action: "Redeem points",
      progress: 100
    },
    {
      id: 2,
      name: "10 MIN BREATHING EXERCISE",
      description: "0 minutes logged",
      points: 50,
      status: "pending",
      action: "Sync data",
      progress: 0
    },
    {
      id: 3,
      name: "BEAT YOUR JUMP-ROPE RECORD",
      description: "Do 30+ consecutive jumps",
      points: 90,
      status: "pending",
      action: "Sync data",
      progress: 0
    },
    {
      id: 4,
      name: "20 MIN BIKE RIDE",
      description: "0 minutes logged",
      points: 150,
      status: "pending",
      action: "Sync data",
      progress: 0
    }
  ];

  const currentChallenges = activeTab === 'knowledge' ? knowledgeChallenges : physicalHealthChallenges;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="flex items-center">
                <img 
                  src="/src/assets/icons/Logo-light.png" 
                  alt="Hyper School Logo" 
                  className="h-12 w-auto"
                />
              </div>
              <a href="#" className="flex items-center space-x-2 text-blue-600 border-b-2 border-blue-600 pb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="font-medium">Dashboard</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 pb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Rewards</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 pb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Learning</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 pb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                <span className="font-medium">Squad</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">240/500</span>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 00-15 0v5h5l-5 5-5-5h5v-5a7.5 7.5 0 0115 0v5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-12 gap-4 p-6">
        {/* Sidebar */}
        <aside className="col-span-2 bg-white flex flex-col">
          {/* Image Placeholder */}
          <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        <div className="p-4 flex-1">
          <div className="mb-4 flex flex-row items-start space-x-3">
            <div className="w-16 h-16 bg-gray-200 rounded-full" />
            <div>
              <h2 className="text-md font-semibold">Name Surname</h2>
              <p className="text-sm text-gray-500">7th grade</p>
              <p className="text-sm text-gray-500">Level 4</p>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1">Progress</h3>
            <div className="w-full bg-gray-100 h-2">
              <div className="bg-green-500 h-2" style={{ width: '79%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Level 4</span>
              <span>Level 5</span>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Achievements</h3>
            <ul className="text-xs text-gray-500 mt-2 space-y-1">
              <li>✔️ Completed 20 challenges</li>
              <li>🔥 5-day streak</li>
              <li>🏆 Earned 1000 points</li>
            </ul>
          </div>
        </div>
        <div className="text-xs text-gray-500 space-y-2 p-4 mt-auto">
          <button className="flex items-center gap-1"><span>?</span> Support</button>
          <button className="flex items-center gap-1"><span>⚙️</span> Settings</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="col-span-6 space-y-4">
        {/* Goal Overview */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-6 text-center h-32 flex flex-col justify-center">
            <p className="text-sm text-gray-500">Think</p>
            <p className="text-xl font-bold">1/5 Lessons</p>
          </div>
          <div className="bg-white p-6 text-center h-32 flex flex-col justify-center">
            <p className="text-sm text-gray-500">Move</p>
            <p className="text-xl font-bold">6K / 5K Steps</p>
          </div>
          <div className="bg-white p-6 text-center h-32 flex flex-col justify-center">
            <p className="text-sm text-gray-500">Connect</p>
            <p className="text-xl font-bold">87 Mood Score</p>
          </div>
          <div className="bg-white p-6 text-center h-32 flex flex-col justify-center">
            <p className="text-sm text-gray-500">Thrive</p>
            <p className="text-xl font-bold">1/3 Skills</p>
          </div>
        </div>

        {/* Challenges List */}
        <div className="bg-white p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">TODAY'S CHALLENGES</h2>
            <select className="text-sm border border-gray-300 px-3 py-2 bg-white">
              <option>Today</option>
              <option>This Week</option>
            </select>
          </div>
          <div className="flex space-x-6 text-sm mb-6 border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('knowledge')}
              className={`pb-2 font-medium ${
                activeTab === 'knowledge' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Knowledge
            </button>
            <button 
              onClick={() => setActiveTab('physical')}
              className={`pb-2 font-medium ${
                activeTab === 'physical' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Physical Health
            </button>
            <button className="text-gray-500 hover:text-gray-700 pb-2">Mental health</button>
            <button className="text-gray-500 hover:text-gray-700 pb-2">Life skills</button>
          </div>
          <div className="space-y-4">
            {currentChallenges.map((challenge) => (
              <div key={challenge.id} className="flex items-center justify-between p-4 border border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-800 flex items-center justify-center">
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white font-bold text-sm">{challenge.points}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{challenge.name}</div>
                    <div className="text-sm text-gray-600">{challenge.description}</div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="w-40 bg-gray-200 h-1">
                        <div className="bg-blue-500 h-1" style={{ width: `${challenge.progress}%` }}></div>
                      </div>
                      <span className="text-xs text-gray-500 font-medium">{challenge.progress}%</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  {challenge.status === 'completed' ? (
                    <>
                      <span className="text-sm font-medium text-green-600">Done!</span>
                      <button className="bg-black text-white px-4 py-2 text-sm font-medium flex items-center space-x-2">
                        <span>{challenge.action}</span>
                      </button>
                    </>
                  ) : (
                    <>
                      <span className="text-sm text-gray-500">-10:40:23</span>
                      <button className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium flex items-center space-x-2">
                        <span>{challenge.action}</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="col-span-4">
        <div className="w-full flex flex-col gap-4">
          {/* Quick Actions */}
          <div className="bg-white p-6 h-32 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-3 text-gray-900">QUICK ACTIONS</h2>
            <div className="grid grid-cols-3 gap-2">
              <button className="bg-gray-100 p-2 text-sm hover:bg-gray-200">Start Lesson</button>
              <button className="bg-gray-100 p-2 text-sm hover:bg-gray-200">Learn a Skill</button>
              <button className="bg-gray-100 p-2 text-sm hover:bg-gray-200">Review a Topic</button>
            </div>
          </div>

          {/* Today's Summary */}
          <div className="bg-white p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">TODAY'S SUMMARY</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-sm">
                <p className="text-gray-500 mb-1">HC earned today</p>
                <p className="text-lg font-bold text-gray-900">240</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-500 mb-1">Mood Check-In</p>
                <p className="text-lg font-bold text-gray-900">98</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-500 mb-1">Challenges completed</p>
                <p className="text-lg font-bold text-gray-900">3/5</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-500 mb-1">Las Challenge</p>
                <p className="text-lg font-bold text-gray-900">Walk 5K steps</p>
              </div>
            </div>
          </div>

          {/* Social & Support */}
          <div className="bg-white p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">CONNECT</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Name Lastname</p>
                  <p className="text-sm text-gray-500">Title</p>
                </div>
                <a href="#" className="text-blue-600 text-sm font-medium">Chat</a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">Name Lastname</p>
                  <p className="text-sm text-gray-500">Title</p>
                </div>
                <a href="#" className="text-blue-600 text-sm font-medium">Chat</a>
              </div>
            </div>
          </div>
        </div>
      </aside>
      </div>
    </div>
  );
}
