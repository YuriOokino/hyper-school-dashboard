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
        <div className="col-span-2 bg-white p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-gray-900 uppercase text-base">TODAY'S GOALS</h2>
            <button className="px-4 py-2 border-2 border-black text-black font-medium text-sm uppercase">
              Go to challenges
            </button>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="text-center">
              <div className="w-full h-20 bg-gray-300 flex items-center justify-center relative">
              </div>
              <div className="bg-black text-white text-xs font-bold py-1 px-1">Knowledge</div>
            </div>
            <div className="text-center">
              <div className="w-full h-20 flex items-center justify-center relative" style={{ backgroundColor: '#6279E5' }}>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="bg-black text-white text-xs font-bold py-1 px-1">Physical Health</div>
            </div>
            <div className="text-center">
              <div className="w-full h-20 flex items-center justify-center relative" style={{ backgroundColor: '#3FC7FF' }}>
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="bg-black text-white text-xs font-bold py-1 px-1">Mental Health</div>
            </div>
            <div className="text-center">
              <div className="w-full h-20 bg-gray-300 flex items-center justify-center relative">
              </div>
              <div className="bg-black text-white text-xs font-bold py-1 px-1">Life Skills</div>
            </div>
          </div>
        </div>

        {/* Level 6 */}
        <div className="bg-white p-4">
          <h2 className="font-bold text-gray-900 uppercase mb-4 text-base">LEVEL 6</h2>
          <div className="flex flex-col items-center justify-center">
            <img 
              src="/assets/icons/level-icon.png" 
              alt="Level 6 - 79%" 
              className="w-20 h-20"
            />
          </div>
        </div>

        {/* New Badges */}
        <div className="bg-white p-4">
          <h2 className="font-bold text-gray-900 uppercase mb-4 text-base">NEW BADGES</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center mb-2">
              <span className="text-white text-xl">⭐</span>
            </div>
            <div className="text-sm font-bold text-gray-900 mb-2">English Genius</div>
            <button className="px-4 py-1 bg-gray-200 text-gray-900 text-xs font-medium flex items-center space-x-1 hover:bg-gray-300 transition-colors">
              <span>Share</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Streak */}
        <div className="bg-white p-4">
          <h2 className="font-bold text-gray-900 uppercase mb-4 text-base flex items-center space-x-1">
            <span>STREAK</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
            </svg>
          </h2>
          <div className="flex flex-col items-center justify-center">
            <div className="text-4xl font-bold mb-2" style={{ color: '#3FC7FF' }}>4 days</div>
            <div className="flex items-center space-x-1 text-xs" style={{ backgroundColor: '#E0F7FF', padding: '4px 8px' }}>
              <svg className="w-3 h-3" style={{ color: '#3FC7FF' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
              <span style={{ color: '#3FC7FF' }}>4h 12m of focus today</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mastery Progress */}
      <h2 className="text-2xl font-bold text-gray-900 uppercase">
        MASTERY PROGRESS
      </h2>

      <div className="bg-white p-6">
        <div className="flex gap-6">
          {/* Left: Chart (2/3 width) */}
          <div className="flex-[2]">
            {/* Time View Selector */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex space-x-2">
                <button
                  onClick={() => setTimeView('year')}
                  className={`px-4 py-2 text-base font-medium ${
                    timeView === 'year' ? 'text-white' : 'bg-white text-gray-700 border-2 border-gray-200'
                  }`}
                  style={timeView === 'year' ? { backgroundColor: '#FE55A4' } : {}}
                >
                  Year
                </button>
                <button
                  onClick={() => setTimeView('month')}
                  className={`px-4 py-2 text-base font-medium ${
                    timeView === 'month' ? 'text-white' : 'bg-white text-gray-700 border-2 border-gray-200'
                  }`}
                  style={timeView === 'month' ? { backgroundColor: '#FE55A4' } : {}}
                >
                  Month
                </button>
                <button
                  onClick={() => setTimeView('week')}
                  className={`px-4 py-2 text-base font-medium ${
                    timeView === 'week' ? 'text-white' : 'bg-white text-gray-700 border-2 border-gray-200'
                  }`}
                  style={timeView === 'week' ? { backgroundColor: '#FE55A4' } : {}}
                >
                  Week
                </button>
              </div>
              
              {/* Time Period Navigator */}
              <div className="flex items-center space-x-4">
                <button className="p-1 hover:bg-gray-100">
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </button>
                <span className="text-lg font-medium text-gray-900">
                  {timeView === 'year' && '2026-2027'}
                  {timeView === 'month' && 'October 2026'}
                  {timeView === 'week' && 'Oct 15-21, 2026'}
                </span>
                <button className="p-1 hover:bg-gray-100">
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
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
              <div className="mx-12 relative h-96">
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
                    const barHeight = (data.topicsMastered / maxTopics) * 360;

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
                      height: '360px'
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
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="relative w-64 h-64 mb-4">
                  <svg className="w-64 h-64 transform -rotate-90">
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="32"
                    />
                    <circle
                      cx="128"
                      cy="128"
                      r="96"
                      fill="none"
                      stroke="#FE55A4"
                      strokeWidth="32"
                      strokeDasharray={`${percentageComplete * 6.03} 603`}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-5xl font-bold text-gray-900">{totalTopicsMastered}/{totalTopics}</div>
                  </div>
                </div>
           
                  <div className="text-lg text-gray-600 font-bold">Topics Mastered</div>
                  <div className="text-md font-normal">Level 6</div>
            
              </div>
            </div>
            <div className="flex justify-center pb-4">
              <button className="px-4 py-2 border-2 border-black text-sm font-medium text-gray-900 flex items-center space-x-1">
                <span>View all topics</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

