import { useState } from 'react';

export default function OverviewContent() {
  const [timeView, setTimeView] = useState('year');

  // Sample data for curriculum mastery
  const yearlyData = [
    { month: 'Jan', topicsMastered: 12, percentage: 45 },
    { month: 'Feb', topicsMastered: 15, percentage: 50 },
    { month: 'Mar', topicsMastered: 18, percentage: 55 },
    { month: 'Apr', topicsMastered: 14, percentage: 58 },
    { month: 'May', topicsMastered: 20, percentage: 65 },
    { month: 'Jun', topicsMastered: 16, percentage: 68 },
    { month: 'Jul', topicsMastered: 17, percentage: 72 },
    { month: 'Aug', topicsMastered: 19, percentage: 76 },
    { month: 'Sep', topicsMastered: 21, percentage: 79 },
    { month: 'Oct', topicsMastered: 18, percentage: 82 },
    { month: 'Nov', topicsMastered: 16, percentage: 85 },
    { month: 'Dec', topicsMastered: 14, percentage: 87 }
  ];

  const weeklyData = [
    { day: 'Mon', topicsMastered: 3, percentage: 79 },
    { day: 'Tue', topicsMastered: 2, percentage: 80 },
    { day: 'Wed', topicsMastered: 4, percentage: 82 },
    { day: 'Thu', topicsMastered: 1, percentage: 83 },
    { day: 'Fri', topicsMastered: 3, percentage: 84 },
    { day: 'Sat', topicsMastered: 2, percentage: 85 },
    { day: 'Sun', topicsMastered: 1, percentage: 86 }
  ];

  const monthlyData = [
    { week: 'Week 1', topicsMastered: 8, percentage: 75 },
    { week: 'Week 2', topicsMastered: 10, percentage: 78 },
    { week: 'Week 3', topicsMastered: 12, percentage: 82 },
    { week: 'Week 4', topicsMastered: 9, percentage: 85 }
  ];

  const getCurrentData = () => {
    switch (timeView) {
      case 'week':
        return weeklyData;
      case 'month':
        return monthlyData;
      case 'year':
        return yearlyData;
      default:
        return yearlyData;
    }
  };

  const currentData = getCurrentData();
  const maxTopics = Math.max(...currentData.map(d => d.topicsMastered));
  const totalTopicsMastered = 31;
  const totalTopics = 50;
  const percentageComplete = 79; // Should match Level 6 progress

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          👋 Hi, Jennifer!
        </h1>
        <p className="text-gray-600 text-base">
          Track your overall progress and see how you're advancing through the curriculum.
        </p>
      </div>

      {/* Daily Goals Stats */}
      <div className="grid grid-cols-5 gap-4">
        {/* Today's Goals */}
        <div className="col-span-2 bg-white border-2 border-gray-200 p-4">
          <h2 className="font-bold text-gray-900 uppercase mb-4 text-base">TODAY'S GOALS</h2>
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center">
              <div className="text-sm font-bold mb-1">Knowledge</div>
              <div className="w-full h-16 bg-gray-200 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold mb-1">Physical Health</div>
              <div className="w-full h-16 bg-green-100 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold mb-1">Mental Health</div>
              <div className="w-full h-16 bg-green-100 flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-sm font-bold mb-1">Life Skills</div>
              <div className="w-full h-16 bg-gray-200 flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
            </div>
          </div>
        </div>

        {/* Level 6 */}
        <div className="bg-white border-2 border-gray-200 p-4">
          <h2 className="font-bold text-gray-900 uppercase mb-4 text-base">LEVEL 6</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl font-bold text-gray-900">79%</div>
            <div className="text-sm text-gray-600 mt-2">Progress</div>
          </div>
        </div>

        {/* New Badges */}
        <div className="bg-white border-2 border-gray-200 p-4">
          <h2 className="font-bold text-gray-900 uppercase mb-4 text-base">NEW BADGES</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center mb-2">
              <span className="text-white text-xl">⭐</span>
            </div>
            <div className="text-sm font-bold text-gray-900">English Genius</div>
          </div>
        </div>

        {/* Streak */}
        <div className="bg-white border-2 border-gray-200 p-4">
          <h2 className="font-bold text-gray-900 uppercase mb-4 text-base">STREAK</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="text-5xl font-bold text-gray-900">4</div>
            <div className="text-sm text-gray-600 mt-2">days</div>
          </div>
        </div>
      </div>

      {/* Mastery Progress */}
      <h2 className="text-2xl font-bold text-gray-900 uppercase">
        MASTERY PROGRESS
      </h2>

      <div className="bg-white border-2 border-gray-200 p-6">
        <div className="flex gap-6">
          {/* Left: Chart (2/3 width) */}
          <div className="flex-[2]">
            {/* Time View Selector */}
            <div className="flex space-x-2 mb-6">
              <button
                onClick={() => setTimeView('year')}
                className={`px-4 py-2 text-base font-medium transition-colors ${
                  timeView === 'year' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Year
              </button>
              <button
                onClick={() => setTimeView('month')}
                className={`px-4 py-2 text-base font-medium transition-colors ${
                  timeView === 'month' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Month
              </button>
              <button
                onClick={() => setTimeView('week')}
                className={`px-4 py-2 text-base font-medium transition-colors ${
                  timeView === 'week' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Week
              </button>
            </div>

            {/* Combined Chart */}
            <div className="relative">
              {/* Y-axis for bars (left) */}
              <div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-sm text-gray-500">
                <span>{maxTopics}</span>
                <span>{Math.round(maxTopics * 0.75)}</span>
                <span>{Math.round(maxTopics * 0.5)}</span>
                <span>{Math.round(maxTopics * 0.25)}</span>
                <span>0</span>
              </div>

              {/* Y-axis for line (right) */}
              <div className="absolute right-0 top-0 bottom-8 w-12 flex flex-col justify-between text-sm text-gray-500 text-right">
                <span>100%</span>
                <span>75%</span>
                <span>50%</span>
                <span>25%</span>
                <span>0%</span>
              </div>

              {/* Chart area */}
              <div className="mx-12 relative h-64">
                {/* Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  <div className="border-t border-gray-200"></div>
                  <div className="border-t border-gray-200"></div>
                  <div className="border-t border-gray-200"></div>
                  <div className="border-t border-gray-200"></div>
                  <div className="border-t border-gray-200"></div>
                </div>

                {/* Bars */}
                <div className="relative h-full flex items-end space-x-2 px-4">
                  {currentData.map((data, index) => {
                    const barHeight = (data.topicsMastered / maxTopics) * 240;

                    return (
                      <div key={index} className="flex-1 flex flex-col items-center group relative">
                        {/* Bar */}
                        <div
                          className="w-full bg-gray-300 hover:bg-gray-400 transition-colors cursor-pointer mb-2"
                          style={{ height: `${barHeight}px` }}
                        >
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                            Topics: {data.topicsMastered} | Overall: {data.percentage}%
                          </div>
                        </div>

                        {/* X-axis label */}
                        <span className="text-sm text-gray-600 font-medium mt-2">
                          {data.month || data.week || data.day}
                        </span>
                      </div>
                    );
                  })}
                  
                  {/* Line overlay - using path for better control */}
                  <svg 
                    className="absolute pointer-events-none" 
                    style={{ 
                      left: '16px',
                      right: '16px',
                      top: 0,
                      bottom: '32px',
                      width: 'calc(100% - 32px)',
                      height: '240px'
                    }}
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                  >
                    <polyline
                      points={currentData.map((data, index) => {
                        const x = ((index + 0.5) / currentData.length) * 100;
                        const y = 100 - data.percentage;
                        return `${x},${y}`;
                      }).join(' ')}
                      fill="none"
                      stroke="#FE55A4"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-300"></div>
                  <span className="text-base text-gray-600">Topics Mastered per Period</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-1 bg-pink-500"></div>
                  <span className="text-base text-gray-600">Overall Curriculum Completion (%)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Pie Chart (1/3 width) */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <div className="relative w-40 h-40 mb-4">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="20"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="60"
                    fill="none"
                    stroke="#FE55A4"
                    strokeWidth="20"
                    strokeDasharray={`${percentageComplete * 3.77} 377`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-gray-900">{totalTopicsMastered}/{totalTopics}</div>
                </div>
              </div>
              <div className="text-base text-gray-600">
                <div>Topics Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

