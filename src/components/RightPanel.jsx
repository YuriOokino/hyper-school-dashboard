export default function RightPanel() {
  return (
    <div className="space-y-4">
      {/* Quick Actions */}
      <div className="bg-white p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900 uppercase">QUICK ACTIONS</h2>
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-gray-100 p-2 text-xs hover:bg-gray-200  font-medium text-center">Start Lesson</button>
          <button className="bg-gray-100 p-2 text-xs hover:bg-gray-200  font-medium text-center">Learn a Skill</button>
          <button className="bg-gray-100 p-2 text-xs hover:bg-gray-200  font-medium text-center">Review a Topic</button>
        </div>
      </div>

      {/* Today's Summary */}
      <div className="bg-white p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900 uppercase">TODAY'S SUMMARY</h2>
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

      {/* Social & Support */}
      <div className="bg-white p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900 uppercase">CONNECT</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 -full"></div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Alex Johnson</p>
              <p className="text-xs text-gray-500">Online</p>
            </div>
            <a href="#" className="text-sm font-medium" style={{ color: '#3FC7FF' }}>Chat</a>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 -full"></div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Sarah Chen</p>
              <p className="text-xs text-gray-500">2 hours ago</p>
            </div>
            <a href="#" className="text-sm font-medium" style={{ color: '#3FC7FF' }}>Chat</a>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-200 -full"></div>
            <div className="flex-1">
              <p className="text-sm font-semibold">Mike Wilson</p>
              <p className="text-xs text-gray-500">Yesterday</p>
            </div>
            <a href="#" className="text-sm font-medium" style={{ color: '#3FC7FF' }}>Chat</a>
          </div>
        </div>
      </div>
    </div>
  );
}
