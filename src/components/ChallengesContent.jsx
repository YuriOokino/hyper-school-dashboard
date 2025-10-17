import { useState } from 'react';

export default function ChallengesContent() {
  // Sample challenges data
  const knowledgeChallenges = [
    {
      id: 1,
      title: 'ALGEBRAIC EXPRESSIONS',
      subject: 'Math',
      mastery: 100,
      points: 90,
      maxPoints: 90,
      status: 'completed',
      difficulty: 'Fast Quiz'
    },
    {
      id: 2,
      title: 'CELL BIOLOGY BASICS',
      subject: 'Biology',
      mastery: 50,
      points: 25,
      maxPoints: 50,
      status: 'continue',
      difficulty: 'Review'
    },
    {
      id: 3,
      title: 'AMERICAN HISTORY 1900S',
      subject: 'History',
      mastery: 0,
      points: 0,
      maxPoints: 130,
      status: 'start',
      difficulty: 'Test'
    }
  ];

  const lifeSkillsChallenges = [
    {
      id: 1,
      title: 'BUDGETING 101',
      subject: 'Finance',
      progress: 90,
      points: 60,
      maxPoints: 80,
      status: 'continue'
    },
    {
      id: 2,
      title: 'INTERVIEW PREPARATION',
      subject: 'Career Development',
      progress: 50,
      points: 50,
      maxPoints: 100,
      status: 'continue'
    },
    {
      id: 3,
      title: 'LEADERSHIP FUNDAMENTALS',
      subject: 'Leadership',
      progress: 50,
      points: 50,
      maxPoints: 100,
      status: 'start'
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
      <h2 className="text-3xl font-bold text-gray-900 uppercase">
        TODAY'S CHALLENGES
      </h2>

      {/* Main Container */}
      <div className="bg-white border-2 border-gray-200 p-6">
        <div className="flex gap-6">
          {/* Left: Knowledge Section */}
          <div className="flex-[2]">
            <h3 className="text-2xl font-bold text-gray-900 uppercase mb-4">
              KNOWLEDGE
            </h3>
            
            <div className="space-y-4">
              {knowledgeChallenges.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-b border-gray-200 pb-4 last:border-0">
                  {/* Subject Badge */}
                  <div className="w-24 h-16 flex-shrink-0 bg-gray-200 flex items-center justify-center">
                    <span className="font-bold text-base text-gray-700">{item.subject}</span>
                  </div>
                  
                  {/* Challenge Info */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                      <span className="px-2 py-1 border border-gray-300 text-sm">{item.difficulty}</span>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2 text-base">
                          <span className="text-gray-600">Mastery:</span>
                          <span className="font-bold text-gray-900">{item.mastery}%</span>
                        </div>
                        <div className="flex items-center text-base">
                          <span className="font-bold text-gray-900">{item.points}/{item.maxPoints}</span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-300 h-2">
                        <div 
                          className="h-2 bg-blue-500 transition-all duration-300" 
                          style={{ width: `${item.mastery}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button 
                    className={`py-2 px-6 text-base font-bold transition-colors flex-shrink-0 w-36 ${
                      item.status === 'completed' 
                        ? 'text-gray-900' 
                        : item.status === 'continue' 
                        ? 'bg-gray-900 text-white hover:bg-gray-800' 
                        : 'bg-white text-gray-900 border-2 border-gray-300 hover:bg-gray-50'
                    }`}
                    style={item.status === 'completed' ? { backgroundColor: '#DBFF4D' } : {}}
                  >
                    {item.status === 'completed' ? 'COMPLETED' : item.status === 'continue' ? 'CONTINUE' : 'START'}
                  </button>
                </div>
              ))}
            </div>

            {/* Life Skills Section */}
            <h3 className="text-2xl font-bold text-gray-900 uppercase mb-4 mt-8">
              LIFE SKILLS
            </h3>
            
            <div className="space-y-4">
              {lifeSkillsChallenges.map((skill) => (
                <div key={skill.id} className="flex items-center gap-4 border-b border-gray-200 pb-4 last:border-0">
                  <div className="w-24 h-16 flex-shrink-0 bg-gray-200 flex items-center justify-center">
                    <span className="font-bold text-sm text-center text-gray-700">{skill.subject}</span>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-2">
                    <h4 className="font-bold text-lg text-gray-900">{skill.title}</h4>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2 text-base">
                          <span className="text-gray-600">Progress:</span>
                          <span className="font-bold text-gray-900">{skill.progress}%</span>
                        </div>
                        <div className="flex items-center text-base">
                          <span className="font-bold text-gray-900">{skill.points}/{skill.maxPoints}</span>
                        </div>
                      </div>
                      
                      <div className="w-full bg-gray-300 h-2">
                        <div 
                          className="h-2 bg-blue-500 transition-all duration-300" 
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <button className="py-2 px-6 text-base font-bold transition-colors flex-shrink-0 w-36 bg-gray-900 text-white hover:bg-gray-800">
                    {skill.status === 'continue' ? 'CONTINUE' : 'START'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Mastery Section */}
          <div className="flex-1">
            <div className="bg-gray-100 p-4 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 uppercase">
                  MASTERY
                </h3>
                <button className="flex items-center space-x-2 text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
                  <span>What is Mastery?</span>
                  <img 
                    src="/assets/icons/AI chat icon.png" 
                    alt="Ask AI" 
                    className="w-5 h-5"
                  />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
