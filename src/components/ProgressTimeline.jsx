import { useState } from 'react';

export default function ProgressTimeline() {
  const [timeFrame, setTimeFrame] = useState('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // The 4 learning categories with their brand colors
  const categories = [
    { name: 'THINK', color: '#FE55A4', label: 'Academic Skills' },
    { name: 'MOVE', color: '#3FC7FF', label: 'Physical Health' },
    { name: 'CONNECT', color: '#10B981', label: 'Mental Wellness' },
    { name: 'THRIVE', color: '#DBFF4D', label: 'Life Skills' }
  ];

  // Category mastery data: tracking average mastery % and total levels by category over time
  const masteryData = {
    monthly: [
      { 
        period: 'Sep',
        categories: [
          { name: 'THINK', mastery: 60, totalLevels: 13, color: '#FE55A4' },  // Math L6 + Science L7
          { name: 'MOVE', mastery: 30, totalLevels: 5, color: '#3FC7FF' },
          { name: 'CONNECT', mastery: 60, totalLevels: 5, color: '#10B981' },
          { name: 'THRIVE', mastery: 20, totalLevels: 6, color: '#DBFF4D' }
        ]
      },
      { 
        period: 'Oct',
        categories: [
          { name: 'THINK', mastery: 52, totalLevels: 14, color: '#FE55A4' },  // Math L6 + Science L8 (leveled up!)
          { name: 'MOVE', mastery: 65, totalLevels: 5, color: '#3FC7FF' },
          { name: 'CONNECT', mastery: 85, totalLevels: 5, color: '#10B981' },
          { name: 'THRIVE', mastery: 55, totalLevels: 6, color: '#DBFF4D' }
        ]
      },
      { 
        period: 'Nov',
        categories: [
          { name: 'THINK', mastery: 47, totalLevels: 15, color: '#FE55A4' },  // Math L7 (leveled up!) + Science L8
          { name: 'MOVE', mastery: 90, totalLevels: 5, color: '#3FC7FF' },
          { name: 'CONNECT', mastery: 20, totalLevels: 6, color: '#10B981' },  // Leveled up!
          { name: 'THRIVE', mastery: 80, totalLevels: 6, color: '#DBFF4D' }
        ]
      },
      { 
        period: 'Dec',
        categories: [
          { name: 'THINK', mastery: 72, totalLevels: 15, color: '#FE55A4' },
          { name: 'MOVE', mastery: 15, totalLevels: 6, color: '#3FC7FF' },  // Leveled up!
          { name: 'CONNECT', mastery: 50, totalLevels: 6, color: '#10B981' },
          { name: 'THRIVE', mastery: 10, totalLevels: 7, color: '#DBFF4D' }  // Leveled up!
        ]
      }
    ],
    weekly: [
      { period: 'Week 1', categories: [
        { name: 'THINK', mastery: 72, totalLevels: 15, color: '#FE55A4' },
        { name: 'MOVE', mastery: 15, totalLevels: 6, color: '#3FC7FF' },
        { name: 'CONNECT', mastery: 50, totalLevels: 6, color: '#10B981' },
        { name: 'THRIVE', mastery: 10, totalLevels: 7, color: '#DBFF4D' }
      ]},
      { period: 'Week 2', categories: [
        { name: 'THINK', mastery: 80, totalLevels: 15, color: '#FE55A4' },
        { name: 'MOVE', mastery: 30, totalLevels: 6, color: '#3FC7FF' },
        { name: 'CONNECT', mastery: 60, totalLevels: 6, color: '#10B981' },
        { name: 'THRIVE', mastery: 25, totalLevels: 7, color: '#DBFF4D' }
      ]},
      { period: 'Week 3', categories: [
        { name: 'THINK', mastery: 87, totalLevels: 15, color: '#FE55A4' },
        { name: 'MOVE', mastery: 45, totalLevels: 6, color: '#3FC7FF' },
        { name: 'CONNECT', mastery: 70, totalLevels: 6, color: '#10B981' },
        { name: 'THRIVE', mastery: 40, totalLevels: 7, color: '#DBFF4D' }
      ]},
      { period: 'Week 4', categories: [
        { name: 'THINK', mastery: 47, totalLevels: 16, color: '#FE55A4' },  // Leveled up!
        { name: 'MOVE', mastery: 60, totalLevels: 6, color: '#3FC7FF' },
        { name: 'CONNECT', mastery: 80, totalLevels: 6, color: '#10B981' },
        { name: 'THRIVE', mastery: 55, totalLevels: 7, color: '#DBFF4D' }
      ]}
    ],
    daily: [
      { period: 'Mon', categories: [{ name: 'THINK', mastery: 47, totalLevels: 16, color: '#FE55A4' }, { name: 'MOVE', mastery: 60, totalLevels: 6, color: '#3FC7FF' }, { name: 'CONNECT', mastery: 80, totalLevels: 6, color: '#10B981' }, { name: 'THRIVE', mastery: 55, totalLevels: 7, color: '#DBFF4D' }]},
      { period: 'Tue', categories: [{ name: 'THINK', mastery: 51, totalLevels: 16, color: '#FE55A4' }, { name: 'MOVE', mastery: 65, totalLevels: 6, color: '#3FC7FF' }, { name: 'CONNECT', mastery: 82, totalLevels: 6, color: '#10B981' }, { name: 'THRIVE', mastery: 58, totalLevels: 7, color: '#DBFF4D' }]},
      { period: 'Wed', categories: [{ name: 'THINK', mastery: 54, totalLevels: 16, color: '#FE55A4' }, { name: 'MOVE', mastery: 70, totalLevels: 6, color: '#3FC7FF' }, { name: 'CONNECT', mastery: 84, totalLevels: 6, color: '#10B981' }, { name: 'THRIVE', mastery: 61, totalLevels: 7, color: '#DBFF4D' }]},
      { period: 'Thu', categories: [{ name: 'THINK', mastery: 58, totalLevels: 16, color: '#FE55A4' }, { name: 'MOVE', mastery: 75, totalLevels: 6, color: '#3FC7FF' }, { name: 'CONNECT', mastery: 86, totalLevels: 6, color: '#10B981' }, { name: 'THRIVE', mastery: 64, totalLevels: 7, color: '#DBFF4D' }]},
      { period: 'Fri', categories: [{ name: 'THINK', mastery: 61, totalLevels: 16, color: '#FE55A4' }, { name: 'MOVE', mastery: 80, totalLevels: 6, color: '#3FC7FF' }, { name: 'CONNECT', mastery: 88, totalLevels: 6, color: '#10B981' }, { name: 'THRIVE', mastery: 67, totalLevels: 7, color: '#DBFF4D' }]},
      { period: 'Sat', categories: [{ name: 'THINK', mastery: 17, totalLevels: 17, color: '#FE55A4' }, { name: 'MOVE', mastery: 85, totalLevels: 6, color: '#3FC7FF' }, { name: 'CONNECT', mastery: 90, totalLevels: 6, color: '#10B981' }, { name: 'THRIVE', mastery: 70, totalLevels: 7, color: '#DBFF4D' }]},  // THINK leveled up!
      { period: 'Sun', categories: [{ name: 'THINK', mastery: 21, totalLevels: 17, color: '#FE55A4' }, { name: 'MOVE', mastery: 90, totalLevels: 6, color: '#3FC7FF' }, { name: 'CONNECT', mastery: 92, totalLevels: 6, color: '#10B981' }, { name: 'THRIVE', mastery: 73, totalLevels: 7, color: '#DBFF4D' }]}
    ]
  };

  const currentData = masteryData[timeFrame];

  // Filter categories based on selection
  const displayCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(c => c.name === selectedCategory);

  // Calculate average mastery across all categories
  const avgMastery = Math.round(
    currentData[currentData.length - 1].categories.reduce((sum, c) => sum + c.mastery, 0) / 
    currentData[currentData.length - 1].categories.length
  );

  return (
    <div className="mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-gray-900 uppercase" style={{ fontFamily: 'Oswald' }}>
          MASTERY PROGRESS
        </h2>
        
        {/* Time Frame Selector */}
        <div className="flex space-x-2">
          <button
            onClick={() => setTimeFrame('monthly')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              timeFrame === 'monthly'
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setTimeFrame('weekly')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              timeFrame === 'weekly'
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-900'
            }`}
          >
            Weekly
          </button>
          <button
            onClick={() => setTimeFrame('daily')}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              timeFrame === 'daily'
                ? 'bg-black text-white'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-900'
            }`}
          >
            Daily
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="bg-white border-2 border-gray-200 p-6">
        {/* Top Stats */}
        <div className="mb-6 pb-6 border-b-2 border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Current average mastery:</h3>
              <div className="flex items-center space-x-4">
                <div className="text-5xl font-bold text-gray-900">
                  {avgMastery}%
                </div>
                <div className="text-base text-gray-600">
                  <div>across all categories</div>
                  <div className="text-sm">Keep practicing to reach 100%!</div>
                </div>
              </div>
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-col items-end space-y-2">
              <div className="text-xs font-medium text-gray-600 uppercase">Filter by:</div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1 text-xs font-medium transition-colors ${
                    selectedCategory === 'all'
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-900'
                  }`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`px-3 py-1 text-xs font-medium transition-colors ${
                      selectedCategory === cat.name
                        ? 'text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-900'
                    }`}
                    style={selectedCategory === cat.name ? { backgroundColor: cat.color } : {}}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="mb-4 p-4 bg-gray-50 border border-gray-200">
          <p className="text-sm text-gray-700">
            <span className="font-bold">How to read this chart:</span> Each bar shows your average mastery progress (0-100%) for that category in that time period. 
            The number above each bar shows total levels completed in that category.
            When you reach 100% mastery, you level up and the bar drops back down as you start the next level.
          </p>
        </div>

        {/* Bar Chart */}
        <div className="mb-6">
          <div className="flex" style={{ height: '320px' }}>
            {/* Y-axis */}
            <div className="flex flex-col" style={{ width: '60px' }}>
              <div className="flex-1 flex flex-col justify-between pr-3 pt-2 pb-8">
                {[100, 80, 60, 40, 20, 0].map(value => (
                  <div key={value} className="text-xs font-medium text-gray-600 text-right">
                    {value}%
                  </div>
                ))}
              </div>
              <div className="text-xs font-bold text-gray-900 text-center">
                Mastery
              </div>
            </div>

            {/* Chart area */}
            <div className="flex-1 relative">
              {/* Grid lines */}
              <div className="absolute inset-0 pt-2 pb-8">
                {[100, 80, 60, 40, 20, 0].map((value, i) => (
                  <div
                    key={value}
                    className="absolute left-0 right-0 border-t border-gray-200"
                    style={{ top: `${(i / 5) * 100}%` }}
                  />
                ))}
              </div>

              {/* Bars */}
              <div className="absolute inset-0 flex justify-between pb-8 pt-2">
                {currentData.map((period, periodIndex) => (
                  <div key={periodIndex} className="flex-1 flex justify-center px-2">
                    <div className="flex space-x-1 w-full justify-center" style={{ maxWidth: '140px' }}>
                      {displayCategories.map((category) => {
                        const categoryData = period.categories.find(c => c.name === category.name);
                        const heightPercent = categoryData.mastery;
                        
                        return (
                          <div key={category.name} className="flex-1 flex flex-col items-center group relative">
                            {/* Total Levels Label on top */}
                            <div className="text-xs font-bold text-gray-900 mb-1">
                              {categoryData.totalLevels}
                            </div>
                            {/* Bar */}
                            <div 
                              className="w-full transition-all hover:opacity-80 cursor-pointer flex items-end"
                              style={{ 
                                height: `${heightPercent}%`,
                                minHeight: '2px'
                              }}
                            >
                              <div 
                                className="w-full h-full"
                                style={{ backgroundColor: category.color }}
                              >
                                {/* Tooltip on hover */}
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                                  <div className="font-bold">{category.name}</div>
                                  <div>{categoryData.totalLevels} total levels</div>
                                  <div>{categoryData.mastery}% mastery</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* X-axis labels */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t-2 border-gray-900" style={{ marginLeft: '60px' }}>
            {currentData.map((period, index) => (
              <div key={index} className="flex-1 text-center text-sm font-medium text-gray-900">
                {period.period}
              </div>
            ))}
          </div>
        </div>

        {/* Category Legend */}
        <div className="flex justify-center items-center space-x-6 pt-4 border-t-2 border-gray-200">
          {categories.map(category => (
            <div key={category.name} className="flex items-center space-x-2">
              <div
                className="w-4 h-4"
                style={{ backgroundColor: category.color }}
              />
              <span className="text-sm font-medium text-gray-900">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

