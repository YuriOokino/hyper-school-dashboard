import { useState } from 'react';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('knowledge');
  const [activePage, setActivePage] = useState('dashboard');

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
          <div className="grid grid-cols-12 gap-4 items-center h-16">
            <div className="col-span-2 flex items-center">
              <img 
                src="/src/assets/icons/Logo-light.png" 
                alt="Hyper School Logo" 
                className="h-12 w-auto"
              />
            </div>
            <div className="col-span-6 flex items-center space-x-8">
              <button 
                onClick={() => setActivePage('dashboard')}
                className={`flex items-center space-x-2 pb-4 ${
                  activePage === 'dashboard' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="font-medium">Dashboard</span>
              </button>
              <button 
                onClick={() => setActivePage('rewards')}
                className={`flex items-center space-x-2 pb-4 ${
                  activePage === 'rewards' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Rewards</span>
              </button>
              <button 
                onClick={() => setActivePage('learning')}
                className={`flex items-center space-x-2 pb-4 ${
                  activePage === 'learning' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Learning</span>
              </button>
              <button 
                onClick={() => setActivePage('squad')}
                className={`flex items-center space-x-2 pb-4 ${
                  activePage === 'squad' 
                    ? 'text-blue-600 border-b-2 border-blue-600' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
                <span className="font-medium">Squad</span>
              </button>
            </div>
            <div className="col-span-4 flex items-center justify-end space-x-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">240/500</span>
              </div>
              <button className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {activePage === 'dashboard' ? (
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
      ) : activePage === 'learning' ? (
        <div className="p-6">
          <div className="grid grid-cols-12 gap-4">
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
                  <div className="flex space-x-2 mt-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
                    <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-500 space-y-2 p-4 mt-auto">
                <button className="flex items-center gap-1"><span>?</span> Support</button>
                <button className="flex items-center gap-1"><span>⚙️</span> Settings</button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="col-span-10 space-y-6">
              {/* Mastery Section */}
              <div className="bg-white p-6">
                <h2 className="text-2xl font-bold mb-6">MASTERY</h2>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <h3 className="text-sm font-semibold mb-2">Math</h3>
                    <div className="text-3xl font-bold">60%</div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-semibold mb-2">Science</h3>
                    <div className="text-3xl font-bold">60%</div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-semibold mb-2">English</h3>
                    <div className="text-3xl font-bold">60%</div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm font-semibold mb-2">History</h3>
                    <div className="text-3xl font-bold">60%</div>
                  </div>
                </div>
              </div>

              {/* Continue Where You Left Off */}
              <div className="bg-white p-6">
                <h2 className="text-2xl font-bold mb-6">CONTINUE WHERE YOU LEFT OFF</h2>
                <div className="grid grid-cols-4 gap-4">
                  <div className="border border-gray-200">
                    <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1">Math</span>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-semibold">80</span>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">Lesson name</h3>
                      <div className="w-full bg-gray-200 h-1 mb-1">
                        <div className="bg-blue-500 h-1" style={{ width: '76%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">76%</span>
                    </div>
                  </div>
                  <div className="border border-gray-200">
                    <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1">Science</span>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-semibold">80</span>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">Lesson name</h3>
                      <div className="w-full bg-gray-200 h-1 mb-1">
                        <div className="bg-blue-500 h-1" style={{ width: '76%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">76%</span>
                    </div>
                  </div>
                  <div className="border border-gray-200">
                    <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1">History</span>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-semibold">80</span>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">Lesson name</h3>
                      <div className="w-full bg-gray-200 h-1 mb-1">
                        <div className="bg-blue-500 h-1" style={{ width: '76%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">76%</span>
                    </div>
                  </div>
                  <div className="border border-gray-200">
                    <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
                      <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1">English</span>
                        <div className="flex items-center space-x-1">
                          <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm font-semibold">80</span>
                        </div>
                      </div>
                      <h3 className="font-semibold mb-2">Lesson name</h3>
                      <div className="w-full bg-gray-200 h-1 mb-1">
                        <div className="bg-blue-500 h-1" style={{ width: '76%' }}></div>
                      </div>
                      <span className="text-sm text-gray-600">76%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* All Lessons */}
              <div className="bg-white p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">ALL LESSONS</h2>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Search lesson or subject"
                        className="pl-10 pr-4 py-2 border border-gray-300 w-64"
                      />
                      <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">Show completed</span>
                      <input type="checkbox" className="rounded" />
                    </div>
                    <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                      </svg>
                      <span className="text-sm">Filters</span>
                    </button>
                  </div>
                </div>

                {/* Lessons Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold">Subject</th>
                        <th className="text-left py-3 px-4 font-semibold">Lesson</th>
                        <th className="text-left py-3 px-4 font-semibold">Hyper Credits</th>
                        <th className="text-left py-3 px-4 font-semibold">Mastery Score</th>
                        <th className="text-left py-3 px-4 font-semibold">Progress</th>
                        <th className="text-left py-3 px-4 font-semibold">Time</th>
                        <th className="text-left py-3 px-4 font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Math</td>
                        <td className="py-3 px-4">Understanding Linear Eq...</td>
                        <td className="py-3 px-4">180/200</td>
                        <td className="py-3 px-4">
                          <span className="bg-green-100 text-green-800 px-2 py-1 text-sm">100%</span>
                        </td>
                        <td className="py-3 px-4">99%</td>
                        <td className="py-3 px-4">4h20m</td>
                        <td className="py-3 px-4">
                          <button className="flex items-center space-x-1 text-blue-600">
                            <span>Continue</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4">Science</td>
                        <td className="py-3 px-4">Exploring Earth's System...</td>
                        <td className="py-3 px-4">100/200</td>
                        <td className="py-3 px-4">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 text-sm">85%</span>
                        </td>
                        <td className="py-3 px-4">50%</td>
                        <td className="py-3 px-4">1h15m</td>
                        <td className="py-3 px-4">
                          <button className="flex items-center space-x-1 text-blue-600">
                            <span>Continue</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <h1 className="text-2xl font-bold">Coming Soon</h1>
          <p>This page is under development.</p>
        </div>
      )}
    </div>
  );
}
