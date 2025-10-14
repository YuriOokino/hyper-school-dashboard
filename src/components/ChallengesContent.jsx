import { useState } from 'react';

export default function ChallengesContent({ masteryData, getColorClasses, onLessonClick }) {
  const [showAllSubjects, setShowAllSubjects] = useState(false);

  // All subjects data for mastery overview
  const allSubjectsData = [
    { subject: 'Math', percentage: 60, level: 'Level 6', color: 'blue', currentPoints: 1200, nextLevelPoints: 2000 },
    { subject: 'Science', percentage: 75, level: 'Level 7', color: 'green', currentPoints: 2250, nextLevelPoints: 3000 },
    { subject: 'English', percentage: 45, level: 'Level 5', color: 'purple', currentPoints: 900, nextLevelPoints: 2000 },
    { subject: 'History', percentage: 80, level: 'Level 8', color: 'yellow', currentPoints: 3200, nextLevelPoints: 4000 },
    { subject: 'Physics', percentage: 35, level: 'Level 5', color: 'blue', currentPoints: 700, nextLevelPoints: 2000 },
    { subject: 'Chemistry', percentage: 70, level: 'Level 7', color: 'green', currentPoints: 2100, nextLevelPoints: 3000 },
    { subject: 'Biology', percentage: 55, level: 'Level 6', color: 'green', currentPoints: 1650, nextLevelPoints: 3000 },
    { subject: 'Geography', percentage: 40, level: 'Level 5', color: 'purple', currentPoints: 800, nextLevelPoints: 2000 },
    { subject: 'Art', percentage: 65, level: 'Level 6', color: 'yellow', currentPoints: 1950, nextLevelPoints: 3000 },
    { subject: 'Computer Science', percentage: 85, level: 'Level 8', color: 'blue', currentPoints: 2550, nextLevelPoints: 3000 }
  ];

  // Mastery section component
  const MasterySection = () => (
    <div className="mb-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-900 uppercase" style={{ fontFamily: 'Oswald' }}>MASTERY</h1>
        <button 
          onClick={() => setShowAllSubjects(true)}
          className="text-sm font-medium text-black hover:text-gray-600 transition-colors flex items-center space-x-1"
        >
          <span>View All</span>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
          </svg>
        </button>
      </div>

      {/* Mastery Cards Grid */}
      <div className="grid grid-cols-4 gap-2">
        {masteryData.map((subject, index) => {
          const colors = getColorClasses(subject.color);
          const circumference = 2 * Math.PI * 45;
          const strokeDasharray = circumference;
          const strokeDashoffset = circumference - (subject.percentage / 100) * circumference;
          
          const brandColor = subject.color === 'blue' ? '#3FC7FF' : subject.color === 'green' ? '#DBFF4D' : subject.color === 'purple' ? '#6279E5' : subject.color === 'yellow' ? '#FE55A4' : '#6279E5';
          
          return (
            <div key={index} className="bg-white border-2 border-gray-200 p-4 flex flex-col">
              {/* Level Badge */}
              <div className="flex justify-end mb-2">
                <div className="px-2 py-1 bg-gray-100 border border-gray-300 text-xs font-bold text-gray-900">
                  {subject.level}
                </div>
              </div>
              
              {/* Progress Circle */}
              <div className="flex justify-center mb-4">
                <div className="relative inline-block">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-gray-300"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke={brandColor}
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={strokeDasharray}
                      strokeDashoffset={strokeDashoffset}
                      className="transition-all duration-1000"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">{subject.percentage}%</span>
                  </div>
                </div>
              </div>
              
              {/* Subject Name */}
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{subject.subject}</h3>
              
              {/* Progress Bar */}
              <div className="mb-2">
                <div className="w-full bg-gray-300 h-2">
                  <div 
                    className="h-2"
                    style={{ width: `${subject.percentage}%`, backgroundColor: brandColor }}
                  ></div>
                </div>
              </div>

              {/* Points to Next Level */}
              <p className="text-xs text-gray-700 mb-4 flex items-center justify-center">
                <svg className="w-3 h-3 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                {subject.nextLevelPoints - subject.currentPoints} points to next level
              </p>
              
              {/* Action Button */}
              <button className="w-full text-sm font-bold py-2 px-3 bg-black text-white hover:bg-gray-800 transition-colors">
                {subject.percentage >= 80 ? '🎯 Level Up!' : subject.percentage >= 50 ? '⚡ Keep Going!' : '🔥 Practice More!'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Modal component for all subjects
  const AllSubjectsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white max-w-6xl w-full max-h-[95vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">All Subjects Mastery</h2>
            <button 
              onClick={() => setShowAllSubjects(false)}
              className="text-gray-500 hover:text-gray-700 text-3xl"
            >
              ×
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allSubjectsData.map((subject, index) => {
              const colors = getColorClasses(subject.color);
              const circumference = 2 * Math.PI * 50;
              const strokeDasharray = circumference;
              const strokeDashoffset = circumference - (subject.percentage / 100) * circumference;
              
              return (
                <div key={index} className="text-center p-6 pt-16 hover:shadow-md transition-shadow relative">
                  {/* Subject badge in top right */}
                  <div className={`absolute top-2 right-2 px-2 py-1 ${colors.light} ${colors.text} text-xs font-medium`}>
                    {subject.level}
                  </div>
                  
                  <div className="relative inline-block mb-4">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="9"
                        fill="none"
                        className="text-gray-200"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r="50"
                        stroke="currentColor"
                        strokeWidth="9"
                        fill="none"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className={`${colors.text} transition-all duration-1000`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold">{subject.percentage}%</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2">{subject.subject}</h3>
                  
                  {/* Progress to next level */}
                  <div className="mb-2">
                    <div className="w-full bg-gray-200 h-1">
                      <div 
                        className={`h-1 ${colors.bg}`}
                        style={{ width: `${subject.percentage}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 flex items-center justify-center">
                      <svg className="w-3 h-3 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      {subject.nextLevelPoints - subject.currentPoints} points to next level
                    </p>
                  </div>
                  
                  {/* Action button */}
                  <button className={`w-full text-sm font-medium py-3 px-4 transition-colors ${
                    subject.percentage >= 80 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : subject.percentage >= 50
                      ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                  }`}>
                    {subject.percentage >= 80 ? '🎯 Level Up!' : subject.percentage >= 50 ? '⚡ Keep Going!' : '🔥 Practice More!'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Daily Goal & Challenge Selection */}
      <div className="mb-8">
        {/* Daily Goal Status */}
        <div className="bg-white border-2 border-gray-200 p-6 mb-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 uppercase font-['Oswald'] mb-2">
              TODAY'S GOAL
            </h2>
            <p className="text-gray-600 mb-4">Complete one challenge from each pillar</p>
            
            <div className="mb-4">
              <div className="text-4xl font-bold text-gray-900 mb-2">1 / 4</div>
              <div className="text-lg text-gray-600 mb-3">Pillars Complete</div>
              <div className="w-full bg-gray-200 h-4 rounded-full max-w-md mx-auto">
                <div className="bg-black h-4 rounded-full transition-all duration-300" style={{width: '25%'}}></div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="text-xl">🔥</span>
                <span>7 Day Streak</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-xl">⭐</span>
                <span>20 Credits Earned</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar Progress Overview */}
        <div className="bg-white border-2 border-gray-200 p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase font-['Oswald']">
            Daily Balance
          </h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">✓</span>
              </div>
              <div className="text-sm font-bold text-gray-900">THINK</div>
              <div className="text-xs text-green-600">Complete</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-400">○</span>
              </div>
              <div className="text-sm font-bold text-gray-900">MOVE</div>
              <div className="text-xs text-gray-500">Pending</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-400">○</span>
              </div>
              <div className="text-sm font-bold text-gray-900">CONNECT</div>
              <div className="text-xs text-gray-500">Pending</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center mx-auto mb-2">
                <span className="text-gray-400">○</span>
              </div>
              <div className="text-sm font-bold text-gray-900">THRIVE</div>
              <div className="text-xs text-gray-500">Pending</div>
            </div>
          </div>
        </div>

        {/* Passive Goals Tracker */}
        <div className="bg-white border-2 border-gray-200 p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase font-['Oswald']">
            Daily Tracking
          </h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">7,342</div>
              <div className="text-sm text-gray-600 mb-2">Steps</div>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div className="bg-gray-600 h-3 rounded-full" style={{width: '73%'}}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Goal: 10,000</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">7.2h</div>
              <div className="text-sm text-gray-600 mb-2">Sleep</div>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div className="bg-gray-600 h-3 rounded-full" style={{width: '90%'}}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Goal: 8+ hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">420</div>
              <div className="text-sm text-gray-600 mb-2">Calories</div>
              <div className="w-full bg-gray-200 h-3 rounded-full">
                <div className="bg-gray-600 h-3 rounded-full" style={{width: '60%'}}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">Goal: 700</div>
            </div>
          </div>
        </div>

        {/* THINK Challenges - Completed */}
        <div className="bg-white border-2 border-gray-200 p-6 mb-6">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center mr-2">
              <span className="text-white text-sm">✓</span>
            </span>
            THINK - Academic Skills (Complete)
          </h4>
          <div className="border-2 border-green-200 bg-green-50 p-4 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-bold text-gray-900">Fractions Quiz</h5>
                <p className="text-sm text-gray-600">Completed at 10:30 AM • Current study topic</p>
              </div>
              <div className="text-lg font-bold text-green-600">+50</div>
            </div>
          </div>
        </div>

        {/* MOVE Challenges */}
        <div className="bg-white border-2 border-gray-200 p-6 mb-6">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center mr-2">
              <span className="text-gray-400 text-sm">○</span>
            </span>
            MOVE - Physical Health
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-gray-200 p-4 rounded-lg hover:border-gray-400 cursor-pointer transition-colors">
              <div className="mb-3">
                <h5 className="font-bold text-gray-900 mb-2">Complete Step Goal</h5>
                <p className="text-sm text-gray-600">2,658 steps remaining • Auto-sync available</p>
              </div>
              <div className="text-lg font-bold text-gray-900">+30 Credits</div>
            </div>
            <div className="border-2 border-gray-200 p-4 rounded-lg hover:border-gray-400 cursor-pointer transition-colors">
              <div className="mb-3">
                <h5 className="font-bold text-gray-900 mb-2">30-Minute Workout</h5>
                <p className="text-sm text-gray-600">Cardio, strength, or flexibility training</p>
              </div>
              <div className="text-lg font-bold text-gray-900">+40 Credits</div>
            </div>
          </div>
        </div>

        {/* CONNECT Challenges */}
        <div className="bg-white border-2 border-gray-200 p-6 mb-6">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center mr-2">
              <span className="text-gray-400 text-sm">○</span>
            </span>
            CONNECT - Mental & Social Wellness
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-gray-200 p-4 rounded-lg hover:border-gray-400 cursor-pointer transition-colors">
              <div className="mb-3">
                <h5 className="font-bold text-gray-900 mb-2">Evening Mood Check</h5>
                <p className="text-sm text-gray-600">Reflect on your day • Available after 6 PM</p>
              </div>
              <div className="text-lg font-bold text-gray-900">+20 Credits</div>
            </div>
            <div className="border-2 border-gray-200 p-4 rounded-lg hover:border-gray-400 cursor-pointer transition-colors">
              <div className="mb-3">
                <h5 className="font-bold text-gray-900 mb-2">Social Engagement</h5>
                <p className="text-sm text-gray-600">Comment on posts or message friends</p>
              </div>
              <div className="text-lg font-bold text-gray-900">+25 Credits</div>
            </div>
          </div>
        </div>

        {/* THRIVE Challenges */}
        <div className="bg-white border-2 border-gray-200 p-6">
          <h4 className="font-bold text-gray-900 mb-4 flex items-center">
            <span className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center mr-2">
              <span className="text-gray-400 text-sm">○</span>
            </span>
            THRIVE - Life Skills
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-gray-200 p-4 rounded-lg hover:border-gray-400 cursor-pointer transition-colors">
              <div className="mb-3">
                <h5 className="font-bold text-gray-900 mb-2">Money Management Lesson</h5>
                <p className="text-sm text-gray-600">Budgeting basics • 20 minutes</p>
              </div>
              <div className="text-lg font-bold text-gray-900">+40 Credits</div>
            </div>
            <div className="border-2 border-gray-200 p-4 rounded-lg hover:border-gray-400 cursor-pointer transition-colors">
              <div className="mb-3">
                <h5 className="font-bold text-gray-900 mb-2">Communication Practice</h5>
                <p className="text-sm text-gray-600">Active listening exercises • 15 minutes</p>
              </div>
              <div className="text-lg font-bold text-gray-900">+35 Credits</div>
            </div>
          </div>
        </div>
      </div>

      {showAllSubjects && <AllSubjectsModal />}
    </>
  );
}