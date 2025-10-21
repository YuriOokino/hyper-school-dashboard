import { useState } from 'react';

export default function ChallengesContent({ onStartLesson, setTriggerSidebarChat }) {
  const [isUpdatingMood, setIsUpdatingMood] = useState(false);
  const [currentMood, setCurrentMood] = useState(4);

  const handleMoodSelect = (moodValue) => {
    setCurrentMood(moodValue);
    setIsUpdatingMood(false);
  };

  const handleWhatIsMastery = () => {
    // Trigger sidebar to open AI Tutor chat with mastery explanation
    if (setTriggerSidebarChat) {
      setTriggerSidebarChat({
        id: 3,
        masteryQuestion: true,
        timestamp: Date.now()
      });
    }
  };

  // Sample challenges data
  const knowledgeChallenges = [
    {
      id: 1,
      title: 'ALGEBRAIC EXPRESSIONS',
      subject: 'Math',
      mastery: 100,
      points: 90,
      status: 'completed',
      difficulty: 'Fast Quiz',
      image: '/assets/Images/placeholder-math.jpg' // Placeholder - will be replaced
    },
    {
      id: 2,
      title: 'CELL BIOLOGY BASICS',
      subject: 'Biology',
      mastery: 50,
      points: 25,
      status: 'continue',
      difficulty: 'Review',
      image: '/assets/Images/placeholder-biology.jpg' // Placeholder - will be replaced
    },
    {
      id: 3,
      title: 'AMERICAN HISTORY 1900S',
      subject: 'History',
      mastery: 0,
      points: 100,
      status: 'start',
      difficulty: 'Test',
      image: '/assets/Images/placeholder-history.jpg' // Placeholder - will be replaced
    }
  ];

  const lifeSkillsChallenges = [
    {
      id: 1,
      title: 'BUDGETING 101',
      subject: 'Finance',
      points: 60,
      status: 'continue',
      difficulty: 'Practice',
      image: '/assets/Images/placeholder-finance.jpg' // Placeholder - will be replaced
    },
    {
      id: 2,
      title: 'INTERVIEW PREPARATION',
      subject: 'Career Development',
      points: 50,
      status: 'continue',
      difficulty: 'Workshop',
      image: '/assets/Images/placeholder-career.jpg' // Placeholder - will be replaced
    },
    {
      id: 3,
      title: 'LEADERSHIP FUNDAMENTALS',
      subject: 'Leadership',
      points: 50,
      status: 'start',
      difficulty: 'Quiz',
      image: '/assets/Images/placeholder-leadership.jpg' // Placeholder - will be replaced
    }
  ];

  // Mastery subjects data (current level only)
  const masterySubjects = [
    { subject: 'English', percentage: 100 },
    { subject: 'Math', percentage: 75 },
    { subject: 'Biology', percentage: 50 },
    { subject: 'History', percentage: 35 },
    { subject: 'Chemistry', percentage: 55 },
    { subject: 'Finance', percentage: 70 },
    { subject: 'Leadership', percentage: 45 },
    { subject: 'Psychology', percentage: 60 },
    { subject: 'Algebra', percentage: 40 },
    { subject: 'Spanish', percentage: 30 },
    { subject: 'Career Development', percentage: 55 },
    { subject: 'Computer Science', percentage: 20 }
  ];

  return (
    <div className="space-y-6">
      {/* TODAY'S CHALLENGES Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 uppercase mb-2">
          TODAY'S CHALLENGES
        </h2>
        <p className="text-gray-600 text-base">
          Complete all of today's challenges to reach your daily learning goals and earn rewards.
        </p>
      </div>

      {/* Main Container - 2 columns */}
      <div className="flex gap-6">
        {/* Left Column: Knowledge & Life Skills */}
        <div className="flex-[2] flex flex-col gap-6">
          {/* Knowledge Section */}
          <div className="bg-white p-6 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 uppercase mb-4">
              KNOWLEDGE
            </h3>
            
            <div className="space-y-4 mt-auto">
              {knowledgeChallenges.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  {/* Category Icon */}
                  <img 
                    src="/assets/pillars/knonwledge icon.png" 
                    alt="Knowledge"
                    className="w-[172px] h-28 flex-shrink-0 object-contain"
                  />
                  
                  {/* Challenge Info */}
                  <div className="flex-1 flex flex-col gap-2">
                    <h4 className="font-bold text-xl text-gray-900">{item.title}</h4>
                    
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-sm font-medium text-white" style={{ backgroundColor: '#FE55A4' }}>
                        {item.subject}
                      </span>
                      <span className="px-3 py-1 text-sm font-medium text-gray-900" style={{ backgroundColor: '#F3F4F6' }}>
                        {item.difficulty}
                      </span>
                      <div className="flex items-center gap-2">
                        <img 
                          src="/assets/icons/Hyper credits.png" 
                          alt="Credits" 
                          className="w-5 h-5"
                        />
                        <span className="font-bold text-gray-900 text-base">{item.points}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    onClick={() => onStartLesson && onStartLesson()}
                    className={`py-2 px-6 text-base font-medium transition-colors flex-shrink-0 w-36 flex items-center justify-center gap-2 ${
                      item.status === 'completed' 
                        ? 'text-gray-900' 
                        : item.status === 'continue' 
                        ? 'bg-gray-900 text-white hover:bg-gray-800' 
                        : 'bg-white text-gray-900 border-2 border-black hover:bg-gray-50'
                    }`}
                    style={item.status === 'completed' ? { backgroundColor: '#DBFF4D' } : {}}
                  >
                    {item.status === 'completed' && (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    )}
                    {item.status === 'completed' ? 'COMPLETED' : item.status === 'continue' ? 'CONTINUE' : 'START'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Life Skills Section */}
          <div className="bg-white p-6 flex-1 flex flex-col">
            <h3 className="text-2xl font-bold text-gray-900 uppercase mb-4">
              LIFE SKILLS
            </h3>
            
            <div className="space-y-4 mt-auto">
              {lifeSkillsChallenges.map((skill) => (
                <div key={skill.id} className="flex items-center gap-4">
                  {/* Category Icon */}
                  <img 
                    src="/assets/pillars/life skills icon.png" 
                    alt="Life Skills"
                    className="w-[172px] h-28 flex-shrink-0 object-contain"
                  />
                  
                  {/* Challenge Info */}
                  <div className="flex-1 flex flex-col gap-2">
                    <h4 className="font-bold text-xl text-gray-900">{skill.title}</h4>
                    
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 text-sm font-medium text-white" style={{ backgroundColor: '#FF8C42' }}>
                        {skill.subject}
                      </span>
                      <span className="px-3 py-1 text-sm font-medium text-gray-900" style={{ backgroundColor: '#F3F4F6' }}>
                        {skill.difficulty}
                      </span>
                      <div className="flex items-center gap-2">
                        <img 
                          src="/assets/icons/Hyper credits.png" 
                          alt="Credits" 
                          className="w-5 h-5"
                        />
                        <span className="font-bold text-gray-900 text-base">{skill.points}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => onStartLesson && onStartLesson()}
                    className={`py-2 px-6 text-base font-medium transition-colors flex-shrink-0 w-36 ${
                      skill.status === 'continue' 
                        ? 'bg-gray-900 text-white hover:bg-gray-800' 
                        : 'bg-white text-gray-900 border-2 border-black hover:bg-gray-50'
                    }`}
                  >
                    {skill.status === 'continue' ? 'CONTINUE' : 'START'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Mastery */}
        <div className="flex-1">
          {/* Mastery Section */}
          <div className="bg-white p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900 uppercase">
                MASTERY
              </h3>
              <button 
                onClick={handleWhatIsMastery}
                className="flex items-center space-x-2 text-sm font-medium text-gray-900 px-3 py-2" 
                style={{ backgroundColor: '#C4CEFF' }}
              >
                <span>What is Mastery?</span>
                <img 
                  src="/assets/icons/AI chat icon.png" 
                  alt="Ask AI" 
                  className="w-5 h-5"
                />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-4 flex-1">
              {masterySubjects.map((subject, index) => {
                const percentage = subject.percentage;
                const radius = 40;
                const circumference = 2 * Math.PI * radius;
                const strokeDashoffset = circumference - (circumference * percentage / 100);
                const isComplete = percentage === 100;

                return (
                  <div key={index} className="text-center">
                    <div className="relative w-24 h-24 mx-auto mb-2">
                      <svg className="w-24 h-24 transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r={radius}
                          fill="none"
                          stroke="#E5E7EB"
                          strokeWidth="8"
                        />
                        <circle
                          cx="48"
                          cy="48"
                          r={radius}
                          fill="none"
                          stroke="#3FC7FF"
                          strokeWidth="8"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          className="transition-all duration-1000"
                        />
                      </svg>
                      {isComplete && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="text-sm font-bold text-gray-900">{subject.subject}</div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex justify-center mt-auto">
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

      {/* Health Dashboard */}
      <div className="grid grid-cols-2 gap-6">
        {/* PHYSICAL HEALTH */}
        <div className="bg-white p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 uppercase">PHYSICAL HEALTH</h2>
            </div>
            <button className="bg-black text-white px-4 py-2 flex items-center space-x-2 hover:bg-gray-800 transition-colors">
              <span className="font-bold uppercase text-sm">Sync</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
              </svg>
            </button>
          </div>

          {/* STEPS */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 uppercase mb-2">STEPS</h3>
            <div className="flex items-end space-x-1 mb-3">
              <span className="text-5xl font-bold text-gray-900">8,230</span>
              <span className="text-2xl text-gray-600 pb-1">/8,000</span>
            </div>
            <div className="w-full bg-gray-300 h-3">
              <div className="h-3 bg-blue-500" style={{ width: '100%' }}></div>
            </div>
          </div>

          {/* SLEEP TIME */}
          <div className="mb-6">
            <h3 className="text-lg font-bold text-gray-900 uppercase mb-4">SLEEP TIME</h3>
            <div className="flex items-center space-x-6">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#E5E7EB" strokeWidth="8"/>
                  <circle cx="64" cy="64" r="56" fill="none" stroke="#3B82F6" strokeWidth="8"
                    strokeDasharray="351.68" strokeDashoffset="87.92"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6l4 2"/>
                  </svg>
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gray-900 mb-2">7h 15m</div>
                <div className="text-sm text-gray-600">
                  Sleep Quality: <span className="font-bold text-gray-900">Good</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MENTAL HEALTH */}
        <div className="bg-white p-6">
          <h2 className="text-2xl font-bold text-gray-900 uppercase mb-6">MENTAL HEALTH</h2>

          {/* MOOD SCORE */}
          <div className="mb-6">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="9" cy="9" r="1.5"/>
                <circle cx="15" cy="9" r="1.5"/>
                <path d="M8 14s1.5 2 4 2 4-2 4-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <button 
              className={`w-full py-2 font-bold uppercase transition-colors h-12 flex items-center justify-center ${
                isUpdatingMood ? 'bg-transparent text-gray-900' : 'bg-black text-white hover:bg-gray-800'
              }`}
              onClick={() => setIsUpdatingMood(!isUpdatingMood)}
            >
              {isUpdatingMood ? (
                <div className="flex items-center justify-center space-x-6">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleMoodSelect(2); }}
                    className="text-3xl hover:scale-110 transition-transform"
                  >
                    😞
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleMoodSelect(3); }}
                    className="text-3xl hover:scale-110 transition-transform"
                  >
                    😐
                  </button>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleMoodSelect(4); }}
                    className="text-3xl hover:scale-110 transition-transform"
                  >
                    😊
                  </button>
                </div>
              ) : (
                'Update Mood'
              )}
            </button>
          </div>

          {/* SOCIAL ACTIVITIES */}
          <div className="grid grid-cols-3 gap-4">
            {/* Like 10 posts */}
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-3">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="40" fill="none" stroke="#E5E7EB" strokeWidth="8"/>
                  <circle cx="48" cy="48" r="40" fill="none" stroke="#EF4444" strokeWidth="8"
                    strokeDasharray="251.2" strokeDashoffset="0"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="font-bold text-base text-gray-900 mb-2">Like 10 posts</div>
              <div className="text-sm text-gray-600 mb-2">12/10</div>
              <button className="w-full py-2 text-sm font-medium text-black flex items-center justify-center gap-2" style={{ backgroundColor: '#DBFF4D' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Completed!
              </button>
            </div>

            {/* Leave 10 comments */}
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-3">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="40" fill="none" stroke="#E5E7EB" strokeWidth="8"/>
                  <circle cx="48" cy="48" r="40" fill="none" stroke="#F97316" strokeWidth="8"
                    strokeDasharray="251.2" strokeDashoffset="100.5"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="font-bold text-base text-gray-900 mb-2">Leave 10 comments</div>
              <div className="text-sm text-gray-600 mb-2">6/10</div>
              <button className="w-full bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                Connect
              </button>
            </div>

            {/* Check in */}
            <div className="text-center">
              <div className="relative w-24 h-24 mx-auto mb-3">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="40" fill="none" stroke="#E5E7EB" strokeWidth="8"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="font-bold text-base text-gray-900 mb-2">Check in</div>
              <div className="text-sm text-gray-600 mb-2">Pending</div>
              <button className="w-full text-white py-2 text-sm font-medium hover:bg-blue-600 transition-colors" style={{ backgroundColor: '#6279E5' }}>
                Chat with Ms Ramirez
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
