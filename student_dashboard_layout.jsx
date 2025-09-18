export default function StudentDashboard() {
  return (
    <div className="grid grid-cols-12 gap-4 p-6 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <aside className="col-span-2 bg-white shadow rounded-2xl p-4 flex flex-col justify-between">
        <div>
          <div className="mb-6">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-2" />
            <h2 className="text-md font-semibold">Name Surname</h2>
            <p className="text-sm text-gray-500">7th grade</p>
            <p className="text-sm text-gray-500">Level 4</p>
          </div>
          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-1">Progress</h3>
            <div className="w-full bg-gray-100 h-2 rounded-full">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '79%' }}></div>
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
        <div className="text-xs text-gray-500 space-y-2">
          <button className="flex items-center gap-1"><span>?</span> Support</button>
          <button className="flex items-center gap-1"><span>⚙️</span> Settings</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="col-span-7 space-y-4">
        {/* Goal Overview */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow text-center">
            <p className="text-sm text-gray-500">Think</p>
            <p className="text-xl font-bold">1/5 Lessons</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow text-center">
            <p className="text-sm text-gray-500">Move</p>
            <p className="text-xl font-bold">6K / 5K Steps</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow text-center">
            <p className="text-sm text-gray-500">Connect</p>
            <p className="text-xl font-bold">87 Mood Score</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow text-center">
            <p className="text-sm text-gray-500">Thrive</p>
            <p className="text-xl font-bold">1/3 Skills</p>
          </div>
        </div>

        {/* Challenges List */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Challenges</h2>
            <select className="text-sm border rounded px-2 py-1">
              <option>Today</option>
              <option>This Week</option>
            </select>
          </div>
          <div className="flex space-x-4 text-sm mb-4">
            <button className="text-blue-600 underline">Knowledge</button>
            <button>Physical health</button>
            <button>Mental health</button>
            <button>Life skills</button>
          </div>
          <ul className="space-y-3">
            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Challenge Name</p>
                <p className="text-xs text-gray-500">Progress</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-xs text-gray-400">Done!</p>
                <button className="text-sm bg-gray-100 px-3 py-1 rounded">Review</button>
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Challenge Name</p>
                <p className="text-xs text-gray-500">In progress</p>
              </div>
              <button className="text-sm bg-gray-100 px-3 py-1 rounded">Continue</button>
            </li>
            <li className="flex justify-between items-center">
              <div>
                <p className="font-semibold">Challenge Name</p>
              </div>
              <button className="text-sm bg-gray-100 px-3 py-1 rounded">Start</button>
            </li>
          </ul>
        </div>
      </main>

      {/* Right Panel */}
      <aside className="col-span-3">
        <div className="w-full flex flex-col gap-4">
          {/* Quick Actions */}
          <div className="bg-white shadow rounded-2xl p-4">
            <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
            <div className="grid grid-cols-3 gap-2">
              <button className="bg-gray-100 p-2 rounded-xl text-sm hover:bg-gray-200">Start Next Lesson</button>
              <button className="bg-gray-100 p-2 rounded-xl text-sm hover:bg-gray-200">Check-In with Guide</button>
              <button className="bg-gray-100 p-2 rounded-xl text-sm hover:bg-gray-200">Review Missed</button>
            </div>
          </div>

          {/* Today's Summary */}
          <div className="bg-white shadow rounded-2xl p-4">
            <h2 className="text-xl font-semibold mb-2">Today's Summary</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-sm">
                <p className="text-gray-500">Points Earned Today</p>
                <p className="text-lg font-bold">240</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-500">Challenges Completed</p>
                <p className="text-lg font-bold">3/5</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-500">Mood Check-in</p>
                <p className="text-lg font-bold">Yes</p>
              </div>
              <div className="text-sm">
                <p className="text-gray-500">Last Challenge</p>
                <p className="text-lg font-bold">Walk 5K Steps</p>
              </div>
            </div>
          </div>

          {/* Social & Support */}
          <div className="bg-white shadow rounded-2xl p-4">
            <h2 className="text-xl font-semibold mb-2">Connections</h2>
            <div className="space-y-2 text-sm">
              <p><span className="font-medium">Guide:</span> “Nice job on your last quiz! Ready for the next challenge?”</p>
              <p><span className="font-medium">Squad:</span> Sarah completed 3 challenges. Want to team up?</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
