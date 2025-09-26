import { useState } from 'react';

export default function ChallengesContent({ masteryData, getColorClasses, onLessonClick }) {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const rowsPerPage = 5;
  const cardsPerView = 4;

  // Continue where you left off data
  const continueLessonsData = [
    { 
      id: 1, 
      title: "Understanding Linear Equations", 
      subject: "Math", 
      type: "Class", 
      points: 80, 
      progress: 76, 
      image: "/api/placeholder/200/120",
      isFavorite: true
    },
    { 
      id: 2, 
      title: "Exploring Earth's Systems", 
      subject: "Science", 
      type: "Class", 
      points: 90, 
      progress: 45, 
      image: "/api/placeholder/200/120",
      isFavorite: false
    },
    { 
      id: 3, 
      title: "Social Communication Skills", 
      subject: "Social", 
      type: "Life skill", 
      points: 60, 
      progress: 30, 
      image: "/api/placeholder/200/120",
      isFavorite: true
    },
    { 
      id: 4, 
      title: "Business Fundamentals", 
      subject: "Business", 
      type: "Life skill", 
      points: 100, 
      progress: 85, 
      image: "/api/placeholder/200/120",
      isFavorite: false
    },
    { 
      id: 5, 
      title: "Advanced Grammar", 
      subject: "English", 
      type: "Class", 
      points: 70, 
      progress: 60, 
      image: "/api/placeholder/200/120",
      isFavorite: true
    },
    { 
      id: 6, 
      title: "World War II History", 
      subject: "History", 
      type: "Class", 
      points: 85, 
      progress: 40, 
      image: "/api/placeholder/200/120",
      isFavorite: false
    }
  ];

  // All subjects data for mastery overview
  const allSubjectsData = [
    { subject: 'Math', percentage: 60, level: 'Intermediate', color: 'blue', currentPoints: 1200, nextLevelPoints: 2000 },
    { subject: 'Science', percentage: 75, level: 'Advanced', color: 'green', currentPoints: 2250, nextLevelPoints: 3000 },
    { subject: 'English', percentage: 45, level: 'Beginner', color: 'purple', currentPoints: 900, nextLevelPoints: 2000 },
    { subject: 'History', percentage: 80, level: 'Expert', color: 'yellow', currentPoints: 3200, nextLevelPoints: 4000 },
    { subject: 'Physics', percentage: 35, level: 'Beginner', color: 'blue', currentPoints: 700, nextLevelPoints: 2000 },
    { subject: 'Chemistry', percentage: 70, level: 'Intermediate', color: 'green', currentPoints: 2100, nextLevelPoints: 3000 },
    { subject: 'Biology', percentage: 55, level: 'Intermediate', color: 'green', currentPoints: 1650, nextLevelPoints: 3000 },
    { subject: 'Geography', percentage: 40, level: 'Beginner', color: 'purple', currentPoints: 800, nextLevelPoints: 2000 },
    { subject: 'Art', percentage: 65, level: 'Intermediate', color: 'yellow', currentPoints: 1950, nextLevelPoints: 3000 },
    { subject: 'Computer Science', percentage: 85, level: 'Advanced', color: 'blue', currentPoints: 2550, nextLevelPoints: 3000 }
  ];

  // Lesson data array for Classes
  const classesData = [
    { subject: 'Math', lesson: 'Understanding Linear Equations', credits: '180/200', mastery: 100, progress: 99, time: '4h20m', masteryColor: 'green', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Science', lesson: 'Exploring Earth\'s Systems', credits: '100/200', mastery: 85, progress: 50, time: '1h15m', masteryColor: 'blue', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'English', lesson: 'Advanced Grammar and Syntax', credits: '45/150', mastery: 65, progress: 30, time: '2h45m', masteryColor: 'yellow', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'History', lesson: 'World War II: Causes and Effects', credits: '120/180', mastery: 92, progress: 67, time: '3h10m', masteryColor: 'green', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Physics', lesson: 'Mechanics: Force and Motion', credits: '75/200', mastery: 42, progress: 38, time: '1h50m', masteryColor: 'red', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Chemistry', lesson: 'Chemical Bonding and Reactions', credits: '160/200', mastery: 95, progress: 80, time: '5h30m', masteryColor: 'green', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Biology', lesson: 'Cell Structure and Function', credits: '90/150', mastery: 78, progress: 60, time: '2h20m', masteryColor: 'blue', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Geography', lesson: 'Climate Change and Global Impact', credits: '110/180', mastery: 70, progress: 61, time: '3h45m', masteryColor: 'yellow', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Art', lesson: 'Renaissance Art and Techniques', credits: '65/120', mastery: 55, progress: 54, time: '2h15m', masteryColor: 'orange', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Computer Science', lesson: 'Introduction to Python Programming', credits: '140/200', mastery: 88, progress: 70, time: '4h55m', masteryColor: 'green', status: 'in_progress', buttonText: 'Continue' }
  ];

  // Physical Health data array
  const physicalHealthData = [
    { subject: 'Physical Health', lesson: 'Morning Run Challenge', credits: '50/100', mastery: 0, progress: 50, time: '30m', masteryColor: 'blue', status: 'in_progress', buttonText: 'Sync activity' },
    { subject: 'Physical Health', lesson: 'Yoga Flow Session', credits: '0/80', mastery: 0, progress: 0, time: '45m', masteryColor: 'blue', status: 'not_started', buttonText: 'Start' },
    { subject: 'Physical Health', lesson: 'Strength Training', credits: '80/80', mastery: 0, progress: 100, time: '1h15m', masteryColor: 'blue', status: 'completed', buttonText: 'Completed' },
    { subject: 'Physical Health', lesson: 'Swimming Workout', credits: '0/60', mastery: 0, progress: 0, time: '40m', masteryColor: 'blue', status: 'not_started', buttonText: 'Start' }
  ];

  // Mental Health data array
  const mentalHealthData = [
    { subject: 'Mental Health', lesson: 'Meditation Practice', credits: '30/50', mastery: 0, progress: 60, time: '20m', masteryColor: 'blue', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Mental Health', lesson: 'Stress Management Workshop', credits: '0/90', mastery: 0, progress: 0, time: '1h30m', masteryColor: 'blue', status: 'not_started', buttonText: 'Start' },
    { subject: 'Mental Health', lesson: 'Mindfulness Journaling', credits: '45/45', mastery: 0, progress: 100, time: '25m', masteryColor: 'blue', status: 'completed', buttonText: 'Completed' },
    { subject: 'Mental Health', lesson: 'Breathing Exercises', credits: '15/30', mastery: 0, progress: 50, time: '15m', masteryColor: 'blue', status: 'in_progress', buttonText: 'Continue' }
  ];

  // Life Skills data array
  const lifeSkillsData = [
    { subject: 'Communication', lesson: 'Public Speaking and Presentation Skills', credits: '120/150', mastery: 80, progress: 80, time: '3h30m', masteryColor: 'blue', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Leadership', lesson: 'Team Management and Decision Making', credits: '90/120', mastery: 75, progress: 75, time: '2h45m', masteryColor: 'green', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Financial Literacy', lesson: 'Budgeting and Personal Finance', credits: '150/180', mastery: 83, progress: 83, time: '4h15m', masteryColor: 'green', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Time Management', lesson: 'Productivity and Goal Setting', credits: '75/100', mastery: 75, progress: 75, time: '2h20m', masteryColor: 'blue', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Problem Solving', lesson: 'Critical Thinking and Analysis', credits: '110/140', mastery: 79, progress: 79, time: '3h10m', masteryColor: 'green', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Emotional Intelligence', lesson: 'Self-Awareness and Empathy', credits: '95/120', mastery: 79, progress: 79, time: '2h50m', masteryColor: 'blue', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Digital Literacy', lesson: 'Online Safety and Digital Citizenship', credits: '85/110', mastery: 77, progress: 77, time: '2h35m', masteryColor: 'green', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Career Planning', lesson: 'Resume Writing and Interview Skills', credits: '130/160', mastery: 81, progress: 81, time: '3h45m', masteryColor: 'green', status: 'in_progress', buttonText: 'Continue' },
    { subject: 'Civic Engagement', lesson: 'Community Service and Social Responsibility', credits: '70/90', mastery: 78, progress: 78, time: '2h10m', masteryColor: 'blue', status: 'in_progress', buttonText: 'Continue' }
  ];

  // Get current data based on active tab
  const getCurrentData = () => {
    if (activeTab === 'all') {
      // Combine all data and limit to first 15 items for better performance
      const allData = [...classesData, ...physicalHealthData, ...mentalHealthData, ...lifeSkillsData];
      return allData.slice(0, 15);
    }
    if (activeTab === 'knowledge') return classesData;
    if (activeTab === 'physical') return physicalHealthData;
    if (activeTab === 'mental') return mentalHealthData;
    if (activeTab === 'life') return lifeSkillsData;
    return classesData;
  };

  const currentData = getCurrentData();
  const totalPages = Math.ceil(currentData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentLessons = currentData.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const nextCarousel = () => {
    const maxIndex = Math.max(0, continueLessonsData.length - cardsPerView);
    setCarouselIndex(prev => Math.min(prev + 1, maxIndex));
  };

  const prevCarousel = () => {
    setCarouselIndex(prev => Math.max(prev - 1, 0));
  };

  const getMasteryBadgeClass = (mastery) => {
    if (mastery >= 90) return 'bg-green-100 text-green-800';
    if (mastery >= 80) return 'bg-blue-100 text-blue-800';
    if (mastery >= 70) return 'bg-yellow-100 text-yellow-800';
    if (mastery >= 60) return 'bg-orange-100 text-orange-800';
    return 'bg-red-100 text-red-800';
  };

  // Mastery section component
  const MasterySection = () => (
    <div className="bg-white p-6 mb-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">MASTERY</h2>
        <button 
          onClick={() => setShowAllSubjects(true)}
          className="text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          View All →
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {masteryData.map((subject, index) => {
          const colors = getColorClasses(subject.color);
          const circumference = 2 * Math.PI * 45;
          const strokeDasharray = circumference;
          const strokeDashoffset = circumference - (subject.percentage / 100) * circumference;
          
          return (
            <div key={index} className="text-center p-3 rounded-lg hover:shadow-md transition-shadow relative">
              {/* Subject badge in top right */}
              <div className={`absolute top-2 right-2 px-2 py-1 ${colors.light} ${colors.text} text-xs font-medium rounded-full`}>
                {subject.level}
              </div>
              
              <div className="relative inline-block mb-3 mt-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-200"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    className={`${colors.text} transition-all duration-1000`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-bold">{subject.percentage}%</span>
                </div>
              </div>
              
              <h3 className="text-lg font-semibold mb-1">{subject.subject}</h3>
              
              {/* Progress to next level */}
              <div className="mb-2">
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div 
                    className={`h-1 rounded-full ${colors.bg}`}
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
              <button className={`w-full text-xs font-medium py-2 px-3 rounded-lg transition-colors ${
                subject.percentage >= 80 
                  ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                  : subject.percentage >= 50
                  ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
              }`}>
                {subject.percentage >= 80 ? `🎯 Level Up to ${subject.level === 'Expert' ? 'Master' : 'Expert'}!` : subject.percentage >= 50 ? '⚡ Keep Going!' : '🔥 Practice More!'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

  // Continue Where You Left Off section component
  const ContinueSection = () => {
    const visibleCards = continueLessonsData.slice(carouselIndex, carouselIndex + cardsPerView);
    const canGoPrev = carouselIndex > 0;
    const canGoNext = carouselIndex < continueLessonsData.length - cardsPerView;

    return (
      <div className="bg-white p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">CONTINUE WHERE YOU LEFT OFF</h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevCarousel}
              disabled={!canGoPrev}
              className={`p-2 rounded-full transition-colors ${
                canGoPrev 
                  ? 'hover:bg-gray-100 text-gray-600' 
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextCarousel}
              disabled={!canGoNext}
              className={`p-2 rounded-full transition-colors ${
                canGoNext 
                  ? 'hover:bg-gray-100 text-gray-600' 
                  : 'text-gray-300 cursor-not-allowed'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div className="flex space-x-4 transition-transform duration-300 ease-in-out" 
               style={{ transform: `translateX(-${carouselIndex * (256 + 16)}px)` }}>
            {continueLessonsData.map((lesson) => (
            <div key={lesson.id} className="flex-shrink-0 w-64 bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer" onClick={onLessonClick}>
              {/* Image placeholder */}
              <div className="relative h-32 bg-gray-200">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
                {lesson.isFavorite && (
                  <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm hover:bg-gray-50">
                    <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
              
              {/* Card content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex space-x-1">
                    <span className={`px-2 py-1 text-sm font-medium rounded-full ${
                      lesson.type === 'Class' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {lesson.type}
                    </span>
                    <span className="px-2 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700">
                      {lesson.subject}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg className="w-3 h-3 text-orange-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    {lesson.points}
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2 text-base">{lesson.title}</h3>
                
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{lesson.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full">
                    <div 
                      className="bg-blue-500 h-1.5 rounded-full transition-all duration-300" 
                      style={{ width: `${lesson.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    );
  };

  // Challenges section component (tabs + table)
  const ChallengesSection = () => (
    <div className="bg-white p-6 mb-6">
      {/* Tabs */}
      <div className="flex space-x-8 mb-6">
        <button
          onClick={() => setActiveTab('all')}
          className={`pb-2 text-xl font-semibold transition-opacity font-['Oswald'] ${
            activeTab === 'all'
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500 opacity-50 hover:opacity-75'
          }`}
        >
          ALL
        </button>
        <button
          onClick={() => setActiveTab('knowledge')}
          className={`pb-2 text-xl font-semibold transition-opacity font-['Oswald'] ${
            activeTab === 'knowledge'
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500 opacity-50 hover:opacity-75'
          }`}
        >
          THINK
        </button>
        <button
          onClick={() => setActiveTab('physical')}
          className={`pb-2 text-xl font-semibold transition-opacity font-['Oswald'] ${
            activeTab === 'physical'
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500 opacity-50 hover:opacity-75'
          }`}
        >
          MOVE
        </button>
        <button
          onClick={() => setActiveTab('mental')}
          className={`pb-2 text-xl font-semibold transition-opacity font-['Oswald'] ${
            activeTab === 'mental'
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500 opacity-50 hover:opacity-75'
          }`}
        >
          CONNECT
        </button>
        <button
          onClick={() => setActiveTab('life')}
          className={`pb-2 text-xl font-semibold transition-opacity font-['Oswald'] ${
            activeTab === 'life'
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500 opacity-50 hover:opacity-75'
          }`}
        >
          THRIVE
        </button>
      </div>
      
      {/* Tab Content */}
      {activeTab === 'all' && (
        <>
          <div className="flex items-center justify-between mb-6 w-full">
        <div className="relative" style={{ width: '400px' }}>
          <input 
            type="text" 
            placeholder="Search lesson or subject"
            className="pl-10 pr-4 py-2 border border-gray-300 w-full"
          />
          <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-base">Completed</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" defaultChecked />
              <div className="w-10 h-6 bg-blue-600 rounded-full shadow-inner"></div>
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform"></div>
            </div>
          </div>
          <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
            <span className="text-base">Filters</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="">
              <th className="text-left py-3 px-4 font-semibold text-base">Challenge</th>
              <th className="text-left py-3 px-4 font-semibold text-base">Hyper Credits</th>
              {activeTab === 'knowledge' && <th className="text-left py-3 px-4 font-semibold text-base">Mastery Score</th>}
              <th className="text-left py-3 px-4 font-semibold text-base">Progress</th>
              <th className="text-left py-3 px-4 font-semibold text-base">Time</th>
              <th className="text-left py-3 px-4 font-semibold text-base">Tags</th>
              <th className="text-left py-3 px-4 font-semibold text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentLessons.map((lesson, index) => (
              <tr key={index} className=" hover:bg-gray-50 cursor-pointer" onClick={onLessonClick}>
                <td className="py-3 px-4 text-base font-medium text-gray-900">{lesson.lesson}</td>
                <td className="py-3 px-4 text-base text-gray-600">{lesson.credits}</td>
                {activeTab === 'knowledge' && (
                  <td className="py-3 px-4">
                    <span className={`${getMasteryBadgeClass(lesson.mastery)} px-2 py-1 text-base font-medium rounded-full`}>
                      {lesson.mastery}%
                    </span>
                  </td>
                )}
                <td className="py-3 px-4 text-base text-gray-600">{lesson.progress}%</td>
                <td className="py-3 px-4 text-base text-gray-600">{lesson.time}</td>
                <td className="py-3 px-4 text-base text-gray-600">{lesson.subject}</td>
                <td className="py-3 px-4">
                  {lesson.status === 'completed' ? (
                    <button className="border border-brand-black text-brand-black bg-transparent px-4 py-2 text-sm font-medium hover:bg-brand-black hover:text-white transition-colors">
                      {lesson.buttonText}
                    </button>
                  ) : lesson.status === 'in_progress' ? (
                    <button className="bg-brand-lime text-brand-black px-4 py-2 text-sm font-medium hover:opacity-80 transition-colors">
                      {lesson.buttonText}
                    </button>
                  ) : (
                    <button className="bg-brand-black text-white px-4 py-2 text-sm font-medium hover:opacity-80 transition-colors">
                      {lesson.buttonText}
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-center mt-6">
        <div className="flex items-center space-x-2">
          {/* Previous Button */}
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
              currentPage === 1
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Previous
          </button>

          {/* Page Numbers */}
          <div className="flex space-x-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-2 text-base font-medium rounded-md ${
                  currentPage === page
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Next
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
        </>
      )}
      
      {activeTab === 'knowledge' && (
        <>
          <div className="flex items-center justify-between mb-6 w-full">
            <div className="relative" style={{ width: '400px' }}>
              <input 
                type="text" 
                placeholder="Search lesson or subject"
                className="pl-10 pr-4 py-2 border border-gray-300 w-full"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-base">Completed</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only" defaultChecked />
                  <div className="w-10 h-6 bg-blue-600 rounded-full shadow-inner"></div>
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform"></div>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
                <span className="text-base">Filters</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th className="text-left py-3 px-4 font-semibold text-base">Challenge</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Hyper Credits</th>
                  {activeTab === 'knowledge' && <th className="text-left py-3 px-4 font-semibold text-base">Mastery Score</th>}
                  <th className="text-left py-3 px-4 font-semibold text-base">Progress</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Time</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Tags</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentLessons.map((lesson, index) => (
                  <tr key={index} className=" hover:bg-gray-50 cursor-pointer" onClick={onLessonClick}>
                    <td className="py-3 px-4 text-base font-medium text-gray-900">{lesson.lesson}</td>
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.credits}</td>
                    {activeTab === 'knowledge' && (
                      <td className="py-3 px-4">
                        <span className={`${getMasteryBadgeClass(lesson.mastery)} px-2 py-1 text-base font-medium rounded-full`}>
                          {lesson.mastery}%
                        </span>
                      </td>
                    )}
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.progress}%</td>
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.time}</td>
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.subject}</td>
                    <td className="py-3 px-4">
                      <button className="bg-brand-lime text-brand-black px-4 py-2 text-sm font-medium hover:opacity-80 transition-colors">
                        Continue
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 text-base font-medium rounded-md ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Next
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
      
      {activeTab === 'physical' && (
        <>
          <div className="flex items-center justify-between mb-6 w-full">
            <div className="relative" style={{ width: '400px' }}>
              <input 
                type="text" 
                placeholder="Search physical challenge"
                className="pl-10 pr-4 py-2 border border-gray-300 w-full"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-base">Completed</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only" defaultChecked />
                  <div className="w-10 h-6 bg-blue-600 rounded-full shadow-inner"></div>
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform"></div>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
                <span className="text-base">Filters</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th className="text-left py-3 px-4 font-semibold text-base">Challenge</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Hyper Credits</th>
                  {activeTab === 'knowledge' && <th className="text-left py-3 px-4 font-semibold text-base">Mastery Score</th>}
                  <th className="text-left py-3 px-4 font-semibold text-base">Progress</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Time</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Tags</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentLessons.map((lesson, index) => (
                  <tr key={index} className=" hover:bg-gray-50 cursor-pointer" onClick={onLessonClick}>
                    <td className="py-3 px-4 text-base font-medium text-gray-900">{lesson.lesson}</td>
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.credits}</td>
                    {activeTab === 'knowledge' && (
                      <td className="py-3 px-4">
                        <span className={`${getMasteryBadgeClass(lesson.mastery)} px-2 py-1 text-base font-medium rounded-full`}>
                          {lesson.mastery}%
                        </span>
                      </td>
                    )}
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.progress}%</td>
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.time}</td>
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.subject}</td>
                    <td className="py-3 px-4">
                      <button className="bg-brand-lime text-brand-black px-4 py-2 text-sm font-medium hover:opacity-80 transition-colors">
                        Continue
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 text-base font-medium rounded-md ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Next
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
      
      {activeTab === 'mental' && (
        <>
          <div className="flex items-center justify-between mb-6 w-full">
            <div className="relative" style={{ width: '400px' }}>
              <input 
                type="text" 
                placeholder="Search mental challenge"
                className="pl-10 pr-4 py-2 border border-gray-300 w-full"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-base">Completed</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only" defaultChecked />
                  <div className="w-10 h-6 bg-blue-600 rounded-full shadow-inner"></div>
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform"></div>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
                <span className="text-base">Filters</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th className="text-left py-3 px-4 font-semibold text-base">Challenge</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Hyper Credits</th>
                  {activeTab === 'knowledge' && <th className="text-left py-3 px-4 font-semibold text-base">Mastery Score</th>}
                  <th className="text-left py-3 px-4 font-semibold text-base">Progress</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Time</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Tags</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentLessons.map((lesson, index) => (
                  <tr key={index} className=" hover:bg-gray-50 cursor-pointer" onClick={onLessonClick}>
                    <td className="py-3 px-4 text-base font-medium text-gray-900">{lesson.lesson}</td>
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.credits}</td>
                    {activeTab === 'knowledge' && (
                      <td className="py-3 px-4">
                        <span className={`${getMasteryBadgeClass(lesson.mastery)} px-2 py-1 text-base font-medium rounded-full`}>
                          {lesson.mastery}%
                        </span>
                      </td>
                    )}
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.progress}%</td>
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.time}</td>
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.subject}</td>
                    <td className="py-3 px-4">
                      <button className="bg-brand-lime text-brand-black px-4 py-2 text-sm font-medium hover:opacity-80 transition-colors">
                        Continue
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 text-base font-medium rounded-md ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Next
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
      
      {activeTab === 'life' && (
        <>
          <div className="flex items-center justify-between mb-6 w-full">
            <div className="relative" style={{ width: '400px' }}>
              <input 
                type="text" 
                placeholder="Search life skill or subject"
                className="pl-10 pr-4 py-2 border border-gray-300 w-full"
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-base">Completed</span>
                <div className="relative">
                  <input type="checkbox" className="sr-only" defaultChecked />
                  <div className="w-10 h-6 bg-blue-600 rounded-full shadow-inner"></div>
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform"></div>
                </div>
              </div>
              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
                </svg>
                <span className="text-base">Filters</span>
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th className="text-left py-3 px-4 font-semibold text-base">Challenge</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Hyper Credits</th>
                  {activeTab === 'knowledge' && <th className="text-left py-3 px-4 font-semibold text-base">Mastery Score</th>}
                  <th className="text-left py-3 px-4 font-semibold text-base">Progress</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Time</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Tags</th>
                  <th className="text-left py-3 px-4 font-semibold text-base">Action</th>
                </tr>
              </thead>
              <tbody>
                {currentLessons.map((lesson, index) => (
                  <tr key={index} className=" hover:bg-gray-50 cursor-pointer" onClick={onLessonClick}>
                    <td className="py-3 px-4 text-base font-medium text-gray-900">{lesson.lesson}</td>
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.credits}</td>
                    {activeTab === 'knowledge' && (
                      <td className="py-3 px-4">
                        <span className={`${getMasteryBadgeClass(lesson.mastery)} px-2 py-1 text-base font-medium rounded-full`}>
                          {lesson.mastery}%
                        </span>
                      </td>
                    )}
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.progress}%</td>
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.time}</td>
                    <td className="py-3 px-4 text-base text-gray-600">{lesson.subject}</td>
                    <td className="py-3 px-4">
                      <button className="bg-brand-lime text-brand-black px-4 py-2 text-sm font-medium hover:opacity-80 transition-colors">
                        Continue
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center space-x-2">
              {/* Previous Button */}
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Previous
              </button>

              {/* Page Numbers */}
              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={`px-3 py-2 text-base font-medium rounded-md ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center px-3 py-2 text-base font-medium rounded-md ${
                  currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Next
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );

  // Modal component for all subjects
  const AllSubjectsModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] overflow-y-auto">
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
                <div key={index} className="text-center p-6 pt-16 rounded-lg hover:shadow-md transition-shadow relative">
                  {/* Subject badge in top right */}
                  <div className={`absolute top-2 right-2 px-2 py-1 ${colors.light} ${colors.text} text-xs font-medium rounded-full`}>
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
                    <div className="w-full bg-gray-200 h-1 rounded-full">
                      <div 
                        className={`h-1 rounded-full ${colors.bg}`}
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
                  <button className={`w-full text-sm font-medium py-3 px-4 rounded-lg transition-colors ${
                    subject.percentage >= 80 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : subject.percentage >= 50
                      ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                      : 'bg-orange-100 text-orange-700 hover:bg-orange-200'
                  }`}>
                    {subject.percentage >= 80 ? `🎯 Level Up to ${subject.level === 'Expert' ? 'Master' : 'Expert'}!` : subject.percentage >= 50 ? '⚡ Keep Going!' : '🔥 Practice More!'}
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
      <MasterySection />
      <ChallengesSection />
      <ContinueSection />
      {showAllSubjects && <AllSubjectsModal />}
    </>
  );
}
