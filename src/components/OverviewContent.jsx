import { useState } from 'react';
import { Tab, ProgressPieChart } from './ui';

export default function OverviewContent() {
  const [timeView, setTimeView] = useState('year');

  // Sample data for curriculum mastery
  // 800 total topics in school year / 12 months = ~67 topics per month
  const topicsPerMonth = 800 / 12;
  
  const yearlyData = [
    { month: 'Sep', topicsMastered: 45, percentage: 20 },
    { month: 'Oct', topicsMastered: 62, percentage: 28 },
    { month: 'Nov', topicsMastered: 48, percentage: 35 },
    { month: 'Dec', topicsMastered: 38, percentage: 40 },
    { month: 'Jan', topicsMastered: 66, percentage: 50 },
    { month: 'Feb', topicsMastered: 55, percentage: 57 },
    { month: 'Mar', topicsMastered: 43, percentage: 63 },
    { month: 'Apr', topicsMastered: 60, percentage: 71 },
    { month: 'May', topicsMastered: 59, percentage: 78 },
    { month: 'Jun', topicsMastered: 52, percentage: 84 },
    { month: 'Jul', topicsMastered: 41, percentage: 89 },
    { month: 'Aug', topicsMastered: 36, percentage: 93 }
  ];

  const weeklyData = [
    { day: 'Mon', topicsMastered: 8, percentage: 79 },
    { day: 'Tue', topicsMastered: 12, percentage: 80 },
    { day: 'Wed', topicsMastered: 6, percentage: 82 },
    { day: 'Thu', topicsMastered: 14, percentage: 83 },
    { day: 'Fri', topicsMastered: 10, percentage: 84 },
    { day: 'Sat', topicsMastered: 4, percentage: 84 },
    { day: 'Sun', topicsMastered: 7, percentage: 85 }
  ];

  const monthlyData = [
    { week: 'Week 1', topicsMastered: 12, percentage: 75 },
    { week: 'Week 2', topicsMastered: 15, percentage: 78 },
    { week: 'Week 3', topicsMastered: 14, percentage: 82 },
    { week: 'Week 4', topicsMastered: 13, percentage: 85 }
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
  
  // For weekly data: assume 800 topics / 52 weeks = ~15.4 topics per week
  const topicsPerWeek = 800 / 52;
  
  // For monthly data (4 weeks): assume 800 topics / 12 months / 4 weeks = ~16.7 topics per week
  const topicsPerWeekInMonth = topicsPerMonth / 4;
  const totalTopicsMastered = 680;
  const totalTopics = 800;
  const percentageComplete = 85; // (680/800 = 85%)

  // Get max topics for Y-axis based on current view
  const getMaxTopics = () => {
    switch (timeView) {
      case 'week':
        return 18; // ~15.4 rounded up
      case 'month':
        return 20; // ~16.7 rounded up
      case 'year':
        return 80; // ~67 rounded up
      default:
        return 80;
    }
  };

  const maxTopics = getMaxTopics();
  const yAxisLabels = [
    maxTopics,
    Math.round(maxTopics * 0.8),
    Math.round(maxTopics * 0.6),
    Math.round(maxTopics * 0.4),
    Math.round(maxTopics * 0.2),
    0
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          👋 Hi, Jennifer!
        </h1>
        <p className="text-gray-900 text-base">
          Track your overall progress and see how you're advancing through the curriculum.
        </p>
      </div>

      {/* Daily Goals Stats */}
      <div className="@container">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Today's Goals */}
          <div className="bg-white p-[10px] @[1111px]:p-[20px] lg:min-w-[500px] flex-shrink-0">
          <div className="mb-4">
            <h6>TODAY'S GOALS</h6>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="text-center">
              <ProgressPieChart
                percentage={33}
                size={120}
                strokeWidth={12}
                progressColor="var(--brand-rose)"
                backgroundColor="var(--brand-surface)"
                iconSize={32}
              >
                <div className="text-xl font-bold">1/3</div>
                <div className="text-xs">topics</div>
              </ProgressPieChart>
              <div className="text-xs py-1 px-1 mt-2">Knowledge</div>
            </div>
            <div className="text-center">
              <ProgressPieChart
                percentage={78}
                size={120}
                strokeWidth={12}
                progressColor="var(--brand-lilac)"
                backgroundColor="var(--brand-surface)"
                iconSize={32}
              >
                <div className="text-xl font-bold">6,230</div>
                <div className="text-xs">/8,000 steps</div>
              </ProgressPieChart>
              <div className="text-xs py-1 px-1 mt-2">Physical Health</div>
            </div>
            <div className="text-center">
              <ProgressPieChart
                percentage={100}
                size={120}
                strokeWidth={12}
                progressColor="var(--brand-orange)"
                backgroundColor="var(--brand-surface)"
                iconSize={32}
                thunderIconFill="#FC7E3A"
                thunderIconStroke="white"
              >
                <div className="rounded-full bg-brand-orange-light flex items-center justify-center" style={{ width: '74px', height: '74px' }}>
                  <svg className="w-8 h-8" fill="black" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                </div>
              </ProgressPieChart>
              <div className="text-xs py-1 px-1 mt-2">Life Skills</div>
            </div>
            <div className="text-center">
              <ProgressPieChart
                percentage={50}
                size={120}
                strokeWidth={12}
                progressColor="var(--brand-lime)"
                backgroundColor="var(--brand-surface)"
                iconSize={32}
              >
                <div className="text-xl font-bold">2/4</div>
                <div className="text-xs">interactions</div>
              </ProgressPieChart>
              <div className="text-xs py-1 px-1 mt-2">Mental Health</div>
            </div>
          </div>
        </div>

          {/* Level 6 */}
          <div className="bg-white p-[10px] @[1111px]:p-[20px] flex flex-col flex-1 min-w-[120px]">
          <div className="flex items-center gap-2 mb-4">
            <h6>LEVEL 6</h6>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            <h6>7</h6>
          </div>
          <div className="flex flex-col items-center justify-center flex-1">
            <img 
              src="/assets/icons/level-icon.png" 
              alt="Level 6 - 79%" 
              className="w-20 h-20"
            />
          </div>
        </div>

          {/* New Badges */}
          <div className="bg-white p-[10px] @[1111px]:p-[20px] flex flex-col flex-1 min-w-[120px]">
          <h6 className="mb-4">NEW BADGES</h6>
          <div className="flex flex-col items-center justify-center flex-1">
            <div className="relative group">
              <img 
                src="/assets/icons/Badges/badge-1.png" 
                alt="English Genius" 
                className="w-16 h-16 mb-2 cursor-pointer"
              />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-white text-gray-900 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                <div className="font-semibold mb-1">English Genius</div>
                <div className="text-gray-600">Mastered 50 English topics</div>
              </div>
            </div>
            <div className="text-sm mb-2">English Genius</div>
            <button className="px-4 py-1 bg-gray-200 text-xs flex items-center space-x-1 hover:bg-gray-300 transition-colors">
              <span>Share</span>
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"/>
              </svg>
            </button>
          </div>
        </div>

          {/* Streak */}
          <div className="bg-white p-[10px] @[1111px]:p-[20px] flex flex-col flex-1 min-w-[120px]">
          <h6 className="mb-4">STREAK</h6>
          <div className="flex flex-col items-center justify-center flex-1">
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
      </div>

      {/* Mastery Progress */}
      <h2 className="text-2xl font-bold text-gray-900 uppercase">
        MASTERY PROGRESS
      </h2>

      <div className="bg-white p-6">
        <div className="flex gap-4">
          {/* Left: Chart (compressed) */}
          <div className="flex-[1.5]">
            {/* Time View Selector */}
            <div className="flex items-center space-x-6">
              <div className="flex space-x-2">
                <Tab
                  active={timeView === 'year'}
                  onClick={() => setTimeView('year')}
                >
                  Year
                </Tab>
                <Tab
                  active={timeView === 'month'}
                  onClick={() => setTimeView('month')}
                >
                  Month
                </Tab>
                <Tab
                  active={timeView === 'week'}
                  onClick={() => setTimeView('week')}
                >
                  Week
                </Tab>
              </div>
              
              {/* Time Period Navigator */}
              <div className="flex items-center space-x-4">
                <button className="p-1 hover:bg-gray-100">
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </button>
                <span className="text-lg text-gray-900">
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
            <div className="mt-12">
              <div className="flex gap-0">
                {/* Y-axis for topic numbers (left) */}
                <div className="w-8 h-[280px] relative text-sm text-gray-900">
                  {yAxisLabels.map((label, index) => {
                    const positions = ['0%', '20%', '40%', '60%', '80%', '100%'];
                    return (
                      <span 
                        key={index} 
                        className="absolute"
                        style={{ 
                          top: positions[index],
                          transform: 'translateY(-50%)'
                        }}
                      >
                        {label}
                      </span>
                    );
                  })}
                </div>

                {/* Chart area */}
                <div className="flex-1 relative" style={{ height: '280px' }}>
                  {/* Grid lines - aligned with Y-axis labels at 100%, 80%, 60%, 40%, 20%, 0% */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="border-t border-gray-200" style={{ position: 'absolute', top: '0%', left: 0, right: 0 }}></div>
                    <div className="border-t border-gray-200" style={{ position: 'absolute', top: '20%', left: 0, right: 0 }}></div>
                    <div className="border-t border-gray-200" style={{ position: 'absolute', top: '40%', left: 0, right: 0 }}></div>
                    <div className="border-t border-gray-200" style={{ position: 'absolute', top: '60%', left: 0, right: 0 }}></div>
                    <div className="border-t border-gray-200" style={{ position: 'absolute', top: '80%', left: 0, right: 0 }}></div>
                    <div className="border-t border-gray-200" style={{ position: 'absolute', top: '100%', left: 0, right: 0 }}></div>
                  </div>

                  {/* Bars */}
                  <div className="relative w-full h-full flex items-end space-x-2 px-4">
                    {currentData.map((data, index) => {
                      // Calculate bar height based on maxTopics scale
                      // Chart height is 280px
                      const barHeight = Math.min((data.topicsMastered / maxTopics) * 280, 280);

                      return (
                        <div key={index} className="flex-1 flex flex-col items-center group relative">
                          {/* Bar */}
                          <div
                            className="w-full bg-brand-blue-light hover:bg-brand-blue transition-colors cursor-pointer relative"
                            style={{ height: `${barHeight}px` }}
                          >
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                              Topics: {data.topicsMastered} | Curriculum: {data.percentage}%
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Line overlay - using path for better control */}
                    <svg 
                      className="absolute pointer-events-none inset-0" 
                      style={{ 
                        left: '16px',
                        right: '16px',
                        width: 'calc(100% - 32px)',
                        height: '280px'
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
                        stroke="#FC7E3A"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </div>
                </div>

                {/* Level Labels - right side */}
                <div className="h-[280px] relative" style={{ width: '109px' }}>
                  <div className="absolute flex items-center justify-center opacity-50" style={{ width: '109px', height: '31px', top: '0', transform: 'translateY(-50%)' }}>
                    <img src="/assets/icons/chart-level-label.svg" alt="" className="absolute inset-0 w-full h-full" />
                    <span className="relative z-10 text-white text-sm">Level 7</span>
                  </div>
                  <div className="absolute flex items-center justify-center" style={{ width: '109px', height: '31px', top: '100%', transform: 'translateY(-50%)' }}>
                    <img src="/assets/icons/chart-level-label.svg" alt="" className="absolute inset-0 w-full h-full" />
                    <span className="relative z-10 text-white text-sm">Level 6</span>
                  </div>
                </div>
              </div>
              
              {/* X-axis labels */}
              <div className="flex">
                <div className="w-8"></div>
                <div className="flex-1 flex items-start px-4 mt-2">
                  {currentData.map((data, index) => (
                    <div key={index} className="flex-1 text-center">
                      <span className="text-sm text-gray-900">
                        {data.month || data.week || data.day}
                      </span>
                    </div>
                  ))}
                </div>
                <div style={{ width: '109px' }}></div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center space-x-6 mt-8">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-brand-blue-light"></div>
                <span className="text-base text-gray-900">Topics Mastered per Period</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-1 bg-brand-orange"></div>
                <span className="text-base text-gray-900">Overall Curriculum Completion (%)</span>
              </div>
            </div>
          </div>

          {/* Right: Pie Chart (compressed) */}
          <div className="flex flex-col justify-center" style={{ width: '280px' }}>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="mb-4">
                  <ProgressPieChart
                    percentage={percentageComplete}
                    size={256}
                    strokeWidth={16}
                    progressColor="var(--brand-blue)"
                    backgroundColor="var(--brand-surface)"
                  >
                    <div className="text-5xl font-bold text-brand-orange">{totalTopicsMastered}</div>
                    <div className="text-2xl font-medium">/{totalTopics}</div>
                  </ProgressPieChart>
                </div>
           
                  <div className="text-lg">Topics Mastered</div>
                  <div className="text-md">Level 6</div>
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

