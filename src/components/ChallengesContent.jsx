import { useState } from 'react';

export default function ChallengesContent({ masteryData, getColorClasses, onLessonClick }) {
  const [timeView, setTimeView] = useState('year');
  const [showMoodHistory, setShowMoodHistory] = useState(false);
  const [currentMood, setCurrentMood] = useState(4);
  const [socialActivity, setSocialActivity] = useState(4);

  // Mock data for the bar chart
  const monthlyData = [
    { month: 'Jan', value: 65 },
    { month: 'Feb', value: 72 },
    { month: 'Mar', value: 80 },
    { month: 'Apr', value: 75 },
    { month: 'May', value: 85 },
    { month: 'Jun', value: 70 },
    { month: 'Jul', value: 78 },
    { month: 'Aug', value: 82 },
    { month: 'Sep', value: 88 },
    { month: 'Oct', value: 92 },
    { month: 'Nov', value: 90 },
    { month: 'Dec', value: 95 }
  ];

  // Mock data for mood history (last 7 days)
  const moodHistory = [
    { day: 'Mon', value: 4 },
    { day: 'Tue', value: 5 },
    { day: 'Wed', value: 3 },
    { day: 'Thu', value: 4 },
    { day: 'Fri', value: 5 },
    { day: 'Sat', value: 4 },
    { day: 'Sun', value: 4 }
  ];

  // Knowledge items data
  const knowledgeItems = [
    {
      id: 1,
      title: 'KNOWLEDGE ONE',
      subject: 'Math',
      mastery: 100,
      points: 90,
      maxPoints: 90,
      status: 'completed',
      difficulty: 'Fast Quiz'
    },
    {
      id: 2,
      title: 'KNOWLEDGE TWO',
      subject: 'Science',
      mastery: 50,
      points: 25,
      maxPoints: 50,
      status: 'continue',
      difficulty: 'Review'
    },
    {
      id: 3,
      title: 'KNOWLEDGE THREE',
      subject: 'History',
      mastery: 0,
      points: 0,
      maxPoints: 130,
      status: 'start',
      difficulty: 'Test'
    }
  ];

  // Mastery subjects data
  const masterySubjects = [
    { subject: 'Science', percentage: 45, color: '#B8C5FF' },
    { subject: 'Math', percentage: 75, color: '#B8C5FF' },
    { subject: 'History', percentage: 35, color: '#FFB3E6' },
    { subject: 'English', percentage: 85, color: '#FF1493' },
    { subject: 'Biology', percentage: 70, color: '#FF1493' },
    { subject: 'Chemistry', percentage: 55, color: '#D4B5FF' }
  ];

  // Life skills data
  const lifeSkills = [
    {
      id: 1,
      title: 'LIFE SKILL ONE',
      progress: 90,
      points: 60,
      maxPoints: 80
    },
    {
      id: 2,
      title: 'LIFE SKILL TWO',
      progress: 50,
      points: 50,
      maxPoints: 100
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Section - on background */}
      <div>
        <h1 className="text-xl font-bold text-gray-900 mb-2">
          👋 Hi, Jennifer!
        </h1>
        <p className="text-gray-600 text-sm">
          This is where you can track your progress and find what you need to hit your daily goals!
        </p>
      </div>

      {/* ONE ROW with 4 separate wrappers - 5 columns grid */}
      <div className="grid grid-cols-5 gap-4">
        {/* Wrapper 1: 4 Goals - spans 2 columns */}
        <div className="col-span-2 bg-white border-2 border-gray-200 p-4">
          <div className="flex items-center mb-3">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h2 className="text-sm font-bold text-gray-900 uppercase">TODAY'S GOALS</h2>
          </div>
          <div className="grid grid-cols-4 gap-2">
            <div className="p-3 text-center opacity-30" style={{ backgroundColor: '#6279E5' }}>
              <h3 className="font-bold text-white text-xs">Knowledge</h3>
            </div>
            <div className="p-3 text-center" style={{ backgroundColor: '#3FC7FF' }}>
              <h3 className="font-bold text-white text-xs">Physical Health</h3>
            </div>
            <div className="p-3 text-center" style={{ backgroundColor: '#6279E5' }}>
              <h3 className="font-bold text-white text-xs">Mental Health</h3>
            </div>
            <div className="p-3 text-center opacity-30" style={{ backgroundColor: '#DBFF4D' }}>
              <h3 className="font-bold text-gray-900 text-xs">Life Skills</h3>
            </div>
          </div>
        </div>

        {/* Wrapper 2: Level 6 */}
        <div className="bg-white border-2 border-gray-200 p-4 flex flex-col items-center justify-center">
          <div className="flex items-center mb-3">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <h2 className="text-sm font-bold text-gray-900 uppercase">LEVEL 6</h2>
          </div>
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-20 h-20">
              <polygon points="50,5 95,35 80,90 20,90 5,35" fill="#FF8C00" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">79%</span>
            </div>
          </div>
        </div>

        {/* Wrapper 3: New Badges */}
        <div className="bg-white border-2 border-gray-200 p-4">
          <div className="flex items-center mb-3">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <h2 className="text-sm font-bold text-gray-900 uppercase">NEW BADGES</h2>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="text-xs font-bold text-gray-900">English Genius</div>
              <button className="text-xs text-blue-600 hover:underline flex items-center">
                Share
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Wrapper 4: Streak */}
        <div className="bg-white border-2 border-gray-200 p-4">
          <div className="flex items-center mb-3">
            <svg className="w-4 h-4 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            <h2 className="text-sm font-bold text-gray-900 uppercase">STREAK</h2>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-1">4 days</div>
            <div className="text-xs text-blue-600 flex items-center justify-center">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              4h 12m of focus today
            </div>
          </div>
        </div>
      </div>

      {/* MASTERY PROGRESS Section Header - OUTSIDE white container */}
      <h2 className="text-2xl font-bold text-gray-900 uppercase" style={{ fontFamily: 'Oswald' }}>
        MASTERY PROGRESS
      </h2>

      {/* Mastery Progress Chart - White Container */}
      <div className="bg-white border-2 border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <button className="hover:text-gray-900">◀</button>
            <span className="font-medium">2026-2027</span>
            <button className="hover:text-gray-900">▶</button>
          </div>
          <div className="flex space-x-2">
            <button onClick={() => setTimeView('year')} className={`px-4 py-2 text-sm font-medium transition-colors ${timeView === 'year' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Year
            </button>
            <button onClick={() => setTimeView('month')} className={`px-4 py-2 text-sm font-medium transition-colors ${timeView === 'month' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Month
            </button>
            <button onClick={() => setTimeView('week')} className={`px-4 py-2 text-sm font-medium transition-colors ${timeView === 'week' ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Week
            </button>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="relative h-64 flex items-end space-x-4 px-4">
          {monthlyData.map((data, index) => {
            const maxValue = Math.max(...monthlyData.map(d => d.value));
            const heightPercentage = (data.value / maxValue) * 100;
            
            return (
              <div key={index} className="flex-1 flex flex-col items-center group">
                <div className="relative w-full mb-2">
                  <div className="w-full bg-gray-300 hover:bg-gray-400 transition-colors cursor-pointer relative" style={{ height: `${heightPercentage * 2}px` }}>
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {data.value}%
                    </div>
                  </div>
                </div>
                <span className="text-xs text-gray-600 font-medium">{data.month}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* TODAY'S CHALLENGES Section Header */}
      <h2 className="text-2xl font-bold text-gray-900 uppercase" style={{ fontFamily: 'Oswald' }}>
        TODAY'S CHALLENGES
      </h2>

      {/* ONE white container with Knowledge and Mastery side by side */}
      <div className="bg-white border-2 border-gray-200 p-6">
        <div className="flex gap-6 items-stretch">
          {/* Left: Knowledge Section - larger */}
          <div className="flex-[2]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase" style={{ fontFamily: 'Oswald' }}>
                KNOWLEDGE
              </h3>
            </div>
            
            <div className="space-y-4">
              {knowledgeItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-b-2 border-gray-200 last:border-b-0 pb-4 last:pb-0">
                  {/* Left: Pink rectangle with subject */}
                  <div className="w-32 h-20 flex-shrink-0 bg-gradient-to-b from-pink-400 to-pink-600 flex items-end justify-center p-2">
                    <span className="text-white font-bold text-sm">{item.subject}</span>
                  </div>
                  
                  {/* Center: Vertical flex with challenge info */}
                  <div className="flex-1 flex flex-col gap-2">
                    {/* Challenge name + tag */}
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <span className="px-2 py-1 border border-gray-300 text-xs">{item.difficulty}</span>
                    </div>

                    {/* Progress section */}
                    <div>
                      {/* Mastery level + credits on same line */}
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2 text-sm">
                          <span className="text-gray-600">Mastery:</span>
                          <span className="font-bold text-gray-900">{item.mastery}%</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <svg className="w-4 h-4 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                          <span className="font-bold text-gray-900">{item.points}/{item.maxPoints}</span>
                        </div>
                      </div>
                      
                      {/* Progress bar below */}
                      <div className="w-full bg-gray-300 h-2">
                        <div className="h-2 bg-blue-500 transition-all duration-300" style={{ width: `${item.mastery}%` }}></div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Status button */}
                  <button className={`py-2 px-6 text-sm font-bold transition-colors flex-shrink-0 w-32 ${item.status === 'completed' ? 'text-gray-900' : item.status === 'continue' ? 'bg-gray-900 text-white hover:bg-gray-800' : 'bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50'}`} style={item.status === 'completed' ? { backgroundColor: '#DBFF4D' } : {}}>
                    {item.status === 'completed' ? 'COMPLETED' : item.status === 'continue' ? 'CONTINUE' : 'START'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mastery Section */}
          <div className="flex-1">
            <div className="bg-gray-100 p-4 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900 uppercase" style={{ fontFamily: 'Oswald' }}>
                  MASTERY
                </h3>
                <button className="text-sm font-medium text-black hover:text-gray-600 transition-colors flex items-center space-x-1">
                  <span>View all</span>
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-6">
              {masterySubjects.map((subject, index) => {
                const percentage = subject.percentage;
                const strokeDasharray = 157;
                const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage / 100);

                return (
                  <div key={index} className="text-center">
                    <div className="relative w-24 h-12 mx-auto mb-2">
                      <svg className="w-24 h-12" viewBox="0 0 100 50">
                        <path d="M 5,45 A 45,45 0 0,1 95,45" fill="none" stroke="#E5E7EB" strokeWidth="8" strokeLinecap="round" />
                        <path d="M 5,45 A 45,45 0 0,1 95,45" fill="none" stroke={subject.color} strokeWidth="8" strokeLinecap="round" strokeDasharray={strokeDasharray} strokeDashoffset={strokeDashoffset} className="transition-all duration-1000" />
                      </svg>
                    </div>
                    <div className="text-sm font-bold text-gray-900">{subject.subject}</div>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LIFE SKILLS Section Header */}
      <h2 className="text-2xl font-bold text-gray-900 uppercase" style={{ fontFamily: 'Oswald' }}>
        LIFE SKILLS
      </h2>

      <div className="space-y-4">
        {lifeSkills.map((skill) => (
          <div key={skill.id} className="bg-white border-2 border-gray-200 flex">
            <div className="w-2 bg-gradient-to-b from-orange-400 to-orange-600 flex-shrink-0"></div>
            <div className="flex-1 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2">{skill.title}</h3>
                  <div className="text-sm text-gray-600 mb-2">
                    Progress: <span className="font-bold text-gray-900">{skill.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-300 h-2 mb-2">
                    <div className="h-2 transition-all duration-300" style={{ width: `${skill.progress}%`, backgroundColor: '#3B82F6' }}></div>
                  </div>
                </div>
                <div className="ml-4 text-right">
                  <div className="flex items-center text-sm">
                    <svg className="w-4 h-4 text-purple-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    <span className="font-bold text-gray-900">{skill.points}/{skill.maxPoints}</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gray-900 text-white py-2 px-4 text-sm font-bold hover:bg-gray-800 transition-colors">
                CONTINUE
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Physical Health and Mental Health Row */}
      <div className="grid grid-cols-2 gap-6">
        {/* Physical Health Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 uppercase" style={{ fontFamily: 'Oswald' }}>
            PHYSICAL HEALTH
          </h2>

          <div className="bg-white border-2 border-gray-200 p-6">
            <div className="flex items-center justify-end mb-4">
              <span className="px-3 py-1 bg-yellow-300 text-gray-900 text-xs font-bold">
                // DONE!
              </span>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-900 uppercase mb-2">STEPS</h3>
              <div className="flex items-baseline space-x-1 mb-2">
                <span className="text-4xl font-bold text-gray-900">8,230</span>
                <span className="text-gray-500 text-lg">/8,000</span>
              </div>
              <div className="w-full bg-gray-300 h-3 mb-2 relative">
                <div className="h-3 bg-blue-500 transition-all duration-500 relative" style={{ width: '100%' }}>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-gray-900 uppercase mb-2">SLEEP TIME</h3>
              <div className="flex items-center space-x-2 mb-1">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-3xl font-bold text-gray-900">7h 15m</span>
              </div>
              <p className="text-sm text-pink-600">↓ 20m less from yesterday</p>
            </div>

            <button className="w-full bg-gray-900 text-white py-3 px-4 font-bold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
              <span>Sync</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mental Health Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 uppercase" style={{ fontFamily: 'Oswald' }}>
            MENTAL HEALTH
          </h2>

          <div className="bg-white border-2 border-gray-200 p-6">
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 uppercase mb-3">MOOD CHECK</h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl font-bold text-gray-900">{currentMood}/5</span>
                <svg className="w-8 h-8 ml-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                </svg>
              </div>
              <button className="w-full bg-gray-900 text-white py-2 px-4 text-sm font-bold hover:bg-gray-800 transition-colors">
                New check
              </button>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 uppercase mb-3">SOCIAL ACTIVITY</h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl font-bold text-gray-900">{socialActivity}/5</span>
                <svg className="w-8 h-8 ml-2 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                </svg>
              </div>
              <button className="w-full bg-gray-900 text-white py-2 px-4 text-sm font-bold hover:bg-gray-800 transition-colors">
                New check
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
