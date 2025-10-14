import { useState } from 'react';

export default function ChallengesContent({ masteryData, getColorClasses, onLessonClick }) {
  const [activeTab, setActiveTab] = useState('all');
  const [activeFilters, setActiveFilters] = useState(['THINK', 'Mathematics', 'Physics']);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const rowsPerPage = 5;
  const cardsPerView = 4;

  // Challenge categories with brand colors
  const categoryConfig = {
    THINK: {
      name: 'THINK',
      color: '#FE55A4',
      bgColor: 'bg-pink-500',
      lightBg: 'bg-pink-50',
      textColor: 'text-pink-600',
      svgImage: '/assets/progress-ui/think.svg'
    },
    MOVE: {
      name: 'MOVE', 
      color: '#3FC7FF',
      bgColor: 'bg-blue-400',
      lightBg: 'bg-blue-50',
      textColor: 'text-blue-600',
      svgImage: '/assets/progress-ui/move.svg'
    },
    CONNECT: {
      name: 'CONNECT',
      color: '#10B981',
      bgColor: 'bg-green-500',
      lightBg: 'bg-green-50', 
      textColor: 'text-green-600',
      svgImage: '/assets/progress-ui/connect.svg'
    },
    THRIVE: {
      name: 'THRIVE',
      color: '#DBFF4D',
      bgColor: 'bg-lime-400',
      lightBg: 'bg-lime-50',
      textColor: 'text-lime-600',
      svgImage: '/assets/progress-ui/thrive.svg'
    }
  };

  // Next challenge data organized by categories
  const nextChallengeData = [
    { 
      id: 1, 
      title: "Advanced Calculus Problem Solving", 
      subject: "Mathematics", 
      category: "THINK",
      challengeType: "Interactive Exercise", 
      points: 120, 
      progress: 76, 
      difficulty: "Advanced",
      estimatedTime: "45 min",
      isFavorite: true
    },
    { 
      id: 2, 
      title: "Scientific Method Lab", 
      subject: "Physics", 
      category: "THINK",
      challengeType: "Virtual Lab", 
      points: 90, 
      progress: 45, 
      difficulty: "Intermediate",
      estimatedTime: "60 min",
      isFavorite: false
    },
    { 
      id: 3, 
      title: "5K Morning Run Challenge", 
      subject: "Cardio Fitness", 
      category: "MOVE",
      challengeType: "Physical Activity", 
      points: 80, 
      progress: 30, 
      difficulty: "Beginner",
      estimatedTime: "30 min",
      isFavorite: true
    },
    { 
      id: 4, 
      title: "Strength Training Circuit", 
      subject: "Strength Building", 
      category: "MOVE",
      challengeType: "Workout Routine", 
      points: 100, 
      progress: 85, 
      difficulty: "Intermediate",
      estimatedTime: "45 min",
      isFavorite: false
    },
    { 
      id: 5, 
      title: "Mindfulness Meditation Session", 
      subject: "Mental Wellness", 
      category: "CONNECT",
      challengeType: "Guided Practice", 
      points: 60, 
      progress: 60, 
      difficulty: "Beginner",
      estimatedTime: "20 min",
      isFavorite: true
    },
    { 
      id: 6, 
      title: "Stress Management Workshop", 
      subject: "Emotional Health", 
      category: "CONNECT",
      challengeType: "Interactive Workshop", 
      points: 85, 
      progress: 40, 
      difficulty: "Intermediate",
      estimatedTime: "50 min",
      isFavorite: false
    },
    { 
      id: 7, 
      title: "Financial Planning Basics", 
      subject: "Money Management", 
      category: "THRIVE",
      challengeType: "Life Skill Module", 
      points: 110, 
      progress: 25, 
      difficulty: "Beginner",
      estimatedTime: "40 min",
      isFavorite: true
    },
    { 
      id: 8, 
      title: "Communication Skills Practice", 
      subject: "Social Skills", 
      category: "THRIVE",
      challengeType: "Role Playing", 
      points: 95, 
      progress: 70, 
      difficulty: "Intermediate",
      estimatedTime: "35 min",
      isFavorite: false
    }
  ];

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

  // All challenges data organized by categories
  const allChallengesData = [
    // THINK Challenges (Knowledge)
    { 
      id: 1,
      category: 'THINK', 
      subject: 'Mathematics', 
      lesson: 'Advanced Calculus Problem Solving', 
      challengeType: 'Interactive Exercise',
      credits: '180', 
      mastery: 88, 
      progress: 76, 
      time: '45 min', 
      difficulty: 'Advanced',
      level: '12',
      deadline: '2h 30m',
      status: 'in_progress', 
      buttonText: 'Continue' 
    },
    { 
      id: 2,
      category: 'THINK', 
      subject: 'Physics', 
      lesson: 'Quantum Mechanics Lab Simulation', 
      challengeType: 'Virtual Lab',
      credits: '100', 
      mastery: 75, 
      progress: 45, 
      time: '60 min', 
      difficulty: 'Advanced',
      level: '11',
      deadline: '5h 15m',
      status: 'in_progress', 
      buttonText: 'Continue' 
    },
    { 
      id: 3,
      category: 'THINK', 
      subject: 'Chemistry', 
      lesson: 'Organic Compound Analysis', 
      challengeType: 'Problem Set',
      credits: '160', 
      mastery: 92, 
      progress: 80, 
      time: '50 min', 
      difficulty: 'Intermediate',
      level: '10',
      deadline: '1h 45m',
      status: 'in_progress', 
      buttonText: 'Continue' 
    },
    { 
      id: 4,
      category: 'THINK', 
      subject: 'Computer Science', 
      lesson: 'Algorithm Design Patterns', 
      challengeType: 'Coding Challenge',
      credits: '140', 
      mastery: 85, 
      progress: 70, 
      time: '75 min', 
      difficulty: 'Advanced',
      level: '12',
      deadline: '12h 20m',
      status: 'in_progress', 
      buttonText: 'Continue' 
    },
    
    // MOVE Challenges (Physical Health)
    { 
      id: 5,
      category: 'MOVE', 
      subject: 'Cardio Fitness', 
      lesson: '5K Running Challenge', 
      challengeType: 'Physical Activity',
      credits: '80', 
      mastery: 0, 
      progress: 30, 
      time: '30 min', 
      difficulty: 'Beginner',
      level: '9',
      deadline: '3h 45m',
      status: 'in_progress', 
      buttonText: 'Continue' 
    },
    { 
      id: 6,
      category: 'MOVE', 
      subject: 'Strength Training', 
      lesson: 'Full Body Circuit Workout', 
      challengeType: 'Workout Routine',
      credits: '100', 
      mastery: 0, 
      progress: 85, 
      time: '45 min', 
      difficulty: 'Intermediate',
      level: '10',
      deadline: '8h 10m',
      status: 'in_progress', 
      buttonText: 'Continue' 
    },
    { 
      id: 7,
      category: 'MOVE', 
      subject: 'Flexibility', 
      lesson: 'Daily Yoga Flow Session', 
      challengeType: 'Guided Practice',
      credits: '60', 
      mastery: 0, 
      progress: 75, 
      time: '25 min', 
      difficulty: 'Beginner',
      level: '9',
      deadline: 'Completed',
      status: 'completed', 
      buttonText: 'Completed' 
    },
    
    // CONNECT Challenges (Mental Health)
    { 
      id: 8,
      category: 'CONNECT', 
      subject: 'Mental Wellness', 
      lesson: 'Mindfulness Meditation Practice', 
      challengeType: 'Guided Practice',
      credits: '60', 
      mastery: 0, 
      progress: 60, 
      time: '20 min', 
      difficulty: 'Beginner',
      level: '9',
      deadline: '4h 20m',
      status: 'in_progress', 
      buttonText: 'Continue' 
    },
    { 
      id: 9,
      category: 'CONNECT', 
      subject: 'Emotional Health', 
      lesson: 'Stress Management Techniques', 
      challengeType: 'Interactive Workshop',
      credits: '85', 
      mastery: 0, 
      progress: 40, 
      time: '50 min', 
      difficulty: 'Intermediate',
      level: '10',
      deadline: '6h 55m',
      status: 'in_progress', 
      buttonText: 'Continue' 
    },
    { 
      id: 10,
      category: 'CONNECT', 
      subject: 'Social Skills', 
      lesson: 'Active Listening Workshop', 
      challengeType: 'Role Playing',
      credits: '70', 
      mastery: 0, 
      progress: 55, 
      time: '40 min', 
      difficulty: 'Intermediate',
      level: '11',
      deadline: '9h 30m',
      status: 'in_progress', 
      buttonText: 'Continue' 
    },
    
    // THRIVE Challenges (Life Skills)
    { 
      id: 11,
      category: 'THRIVE', 
      subject: 'Money Management', 
      lesson: 'Personal Budget Planning', 
      challengeType: 'Life Skill Module',
      credits: '110', 
      mastery: 0, 
      progress: 25, 
      time: '40 min', 
      difficulty: 'Beginner',
      level: '9',
      deadline: '15h 00m',
      status: 'in_progress', 
      buttonText: 'Start' 
    },
    { 
      id: 12,
      category: 'THRIVE', 
      subject: 'Communication', 
      lesson: 'Public Speaking Fundamentals', 
      challengeType: 'Skill Building',
      credits: '95', 
      mastery: 0, 
      progress: 70, 
      time: '35 min', 
      difficulty: 'Intermediate',
      level: '11',
      deadline: '7h 25m',
      status: 'in_progress', 
      buttonText: 'Continue' 
    },
    { 
      id: 13,
      category: 'THRIVE', 
      subject: 'Time Management', 
      lesson: 'Productivity Systems Design', 
      challengeType: 'Planning Workshop',
      credits: '80', 
      mastery: 0, 
      progress: 90, 
      time: '30 min', 
      difficulty: 'Beginner',
      level: '12',
      deadline: '45m',
      status: 'in_progress', 
      buttonText: 'Continue' 
    }
  ];

  // Get all available filter options
  const availableFilters = [
    { id: 'THINK', label: 'Knowledge', color: '#FE55A4' },
    { id: 'MOVE', label: 'Physical Health', color: '#3FC7FF' },
    { id: 'CONNECT', label: 'Mental Health', color: '#10B981' },
    { id: 'THRIVE', label: 'Life Skills', color: '#DBFF4D' },
    { id: 'Mathematics', label: 'Math', color: '#6B7280' },
    { id: 'Physics', label: 'Physics', color: '#6B7280' },
    { id: 'Chemistry', label: 'Chemistry', color: '#6B7280' },
    { id: 'Computer Science', label: 'Computer Science', color: '#6B7280' },
    { id: 'Cardio Fitness', label: 'Cardio', color: '#6B7280' },
    { id: 'Strength Training', label: 'Strength', color: '#6B7280' },
    { id: 'Mental Wellness', label: 'Wellness', color: '#6B7280' },
    { id: 'Communication', label: 'Communication', color: '#6B7280' }
  ];

  // Filter and search logic
  const getCurrentData = () => {
    let filteredData = allChallengesData;

    // Apply category/subject filters
    if (activeFilters.length > 0) {
      filteredData = filteredData.filter(item => 
        activeFilters.includes(item.category) || activeFilters.includes(item.subject)
      );
    }

    // Apply search filter
    if (searchQuery.trim()) {
      filteredData = filteredData.filter(item =>
        item.lesson.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.challengeType.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply completed filter
    if (!showCompleted) {
      filteredData = filteredData.filter(item => item.status !== 'completed');
    }

    return filteredData;
  };

  // Toggle filter
  const toggleFilter = (filterId) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
    setCurrentPage(1); // Reset to first page when filtering
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
    const maxIndex = Math.max(0, nextChallengeData.length - cardsPerView);
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

  // Challenges section component (filters + table)
  const ChallengesSection = () => (
      <div className="bg-white p-6 mb-6">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 uppercase font-['Oswald']">YOUR CHALLENGES</h2>
      
      {/* Filters Row */}
      <div className="flex items-center justify-between mb-6">
        {/* Filter Tags */}
        <div className="flex items-center space-x-3 relative">
          <div className="relative">
            <button 
              onClick={() => setShowFilterDropdown(!showFilterDropdown)}
              className="p-2 bg-black text-white hover:bg-gray-800 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
              </svg>
            </button>
            
            {/* Filter Dropdown */}
            {showFilterDropdown && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg border border-gray-200 z-10">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Filter by Category</h3>
                  <div className="space-y-2">
                    {availableFilters.slice(0, 4).map((filter) => (
                      <label key={filter.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={activeFilters.includes(filter.id)}
                          onChange={() => toggleFilter(filter.id)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{filter.label}</span>
                      </label>
                    ))}
        </div>
        
                  <h3 className="text-sm font-semibold text-gray-900 mb-3 mt-4">Filter by Subject</h3>
                  <div className="space-y-2">
                    {availableFilters.slice(4).map((filter) => (
                      <label key={filter.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={activeFilters.includes(filter.id)}
                          onChange={() => toggleFilter(filter.id)}
                          className="mr-2"
                        />
                        <span className="text-sm text-gray-700">{filter.label}</span>
                      </label>
                    ))}
                </div>
                </div>
              </div>
                )}
              </div>
              
          {activeFilters.map((filterId) => {
            const filter = availableFilters.find(f => f.id === filterId);
            return (
              <div key={filterId} className="flex items-center space-x-1 px-3 py-1 bg-gray-100 text-gray-700">
                <span className="text-sm font-medium">{filter?.label}</span>
                <button 
                  onClick={() => toggleFilter(filterId)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                </button>
                  </div>
            );
          })}
                </div>
                
        {/* Controls */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Sort by</span>
            <select className="border border-gray-300 px-3 py-1 text-sm bg-white">
              <option>Tags</option>
              <option>Level</option>
              <option>Hyper Credits</option>
              <option>Deadline</option>
              <option>Progress</option>
            </select>
                  </div>
          
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-700">Show completed</span>
            <div className="relative">
              <input 
                type="checkbox" 
                id="showCompleted"
                checked={showCompleted}
                onChange={(e) => setShowCompleted(e.target.checked)}
                className="sr-only"
              />
              <label 
                htmlFor="showCompleted"
                className="block w-12 h-6 rounded-full cursor-pointer transition-colors duration-200 flex items-center"
                style={{ 
                  backgroundColor: showCompleted ? '#121214' : '#E8EBFB',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                }}
              >
                <div 
                  className="w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200"
                  style={{ 
                    transform: showCompleted ? 'translateX(28px)' : 'translateX(2px)'
                  }}
                    ></div>
              </label>
                  </div>
                </div>
              </div>
            </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative max-w-md">
          <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-base text-gray-900">Challenge</th>
              <th className="text-left py-3 px-4 font-semibold text-base text-gray-900">Tags</th>
              <th className="text-left py-3 px-4 font-semibold text-base text-gray-900">Level</th>
              <th className="text-left py-3 px-4 font-semibold text-base text-gray-900">Hyper Credits</th>
              <th className="text-left py-3 px-4 font-semibold text-base text-gray-900">Deadline</th>
              <th className="text-left py-3 px-4 font-semibold text-base text-gray-900">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentLessons.map((lesson, index) => {
              const categoryInfo = categoryConfig[lesson.category];
              return (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer" onClick={onLessonClick}>
                  <td className="py-4 px-4 text-base font-medium text-gray-900">{lesson.lesson}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 text-xs font-medium bg-black text-white">
                        {categoryInfo.name}
                    </span>
                      <span className="px-2 py-1 text-xs font-medium bg-black text-white">
                        {lesson.challengeType}
                      </span>
                      <span className="px-2 py-1 text-xs font-medium bg-black text-white">
                        {lesson.subject}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-base text-gray-900 font-medium">
                    {lesson.level}
                  </td>
                  <td className="py-4 px-4 text-base text-gray-600">{lesson.credits}</td>
                  <td className="py-4 px-4">
                    <span className={`text-base font-medium ${
                      lesson.deadline === 'Completed' ? 'text-green-600' :
                      lesson.deadline.includes('00h') ? 'text-red-600' :
                      lesson.deadline.includes('01h') || lesson.deadline.includes('02h') || lesson.deadline.includes('03h') ? 'text-orange-600' :
                      'text-gray-600'
                    }`}>
                      {lesson.deadline}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                  {lesson.status === 'completed' ? (
                        <button className="border border-black text-black bg-transparent px-4 py-2 text-sm font-medium hover:bg-black hover:text-white transition-colors">
                          Completed
                    </button>
                  ) : lesson.status === 'in_progress' ? (
                        <button className="text-black px-4 py-2 text-sm font-medium hover:opacity-80 transition-colors" style={{ backgroundColor: '#DBFF4D' }}>
                          Continue
                    </button>
                  ) : (
                        <button className="bg-black text-white px-4 py-2 text-sm font-medium hover:opacity-80 transition-colors">
                          Start
                    </button>
                  )}
                </td>
              </tr>
              );
            })}
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
            className={`flex items-center px-3 py-2 text-base font-medium ${
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
                className={`px-3 py-2 text-base font-medium ${
                  currentPage === page
                    ? 'bg-black text-white'
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
            className={`flex items-center px-3 py-2 text-base font-medium ${
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
            </div>
  );

  // Find Your Next Challenge section component
  const NextChallengeSection = () => {
    const visibleCards = nextChallengeData.slice(carouselIndex, carouselIndex + cardsPerView);
    const canGoPrev = carouselIndex > 0;
    const canGoNext = carouselIndex < nextChallengeData.length - cardsPerView;

    return (
      <div className="p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 uppercase font-['Oswald']">FIND YOUR NEXT CHALLENGE</h2>
          <div className="flex space-x-2">
            <button 
              onClick={prevCarousel}
              disabled={!canGoPrev}
              className={`p-2 transition-colors ${
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
              className={`p-2 transition-colors ${
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
               style={{ transform: `translateX(-${carouselIndex * (320 + 16)}px)` }}>
            {nextChallengeData.map((challenge) => {
              const categoryInfo = categoryConfig[challenge.category];
              return (
                <div key={challenge.id} className="flex-shrink-0 w-80 bg-white overflow-hidden cursor-pointer" onClick={onLessonClick}>
                  {/* Category Wave Background */}
                  <div 
                    className="relative h-40 overflow-hidden"
                    style={{
                      backgroundImage: `url(${categoryInfo.svgImage})`,
                      backgroundSize: '100% auto',
                      backgroundPosition: 'bottom center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center text-black">
                        <img src="/assets/icons/Hyper credits.png" alt="Hyper Credits" className="w-4 h-5 mr-1" />
                        <span className="text-2xl font-bold text-black">{challenge.points}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card content */}
                  <div className="p-4">
                    {/* Tags */}
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-3 py-1 text-xs font-medium bg-black text-white">
                        {categoryInfo.name}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-white text-black border border-black">
                        {challenge.subject}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 uppercase">CHALLENGE</h3>
                    <p className="text-sm text-gray-600 mb-4">This is a short description of the activity</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm font-bold">{challenge.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2">
                        <div 
                          className="h-2 transition-all duration-300" 
                          style={{ 
                            width: `${challenge.progress}%`,
                            backgroundColor: challenge.progress > 0 ? '#000' : 'transparent'
                          }}
                        ></div>
                      </div>
                      
                      {/* Action Button */}
                      <button 
                        className={`w-full py-3 text-sm font-bold uppercase transition-colors ${
                          challenge.progress > 0 
                            ? 'text-black hover:opacity-80' 
                            : 'bg-black text-white hover:bg-gray-800'
                        }`}
                        style={challenge.progress > 0 ? { backgroundColor: '#DBFF4D' } : {}}
                      >
                        {challenge.progress > 0 ? 'Continue' : 'Start'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
              </div>
            </div>
    </div>
  );
  };

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
      <MasterySection />
      <ChallengesSection />
      <NextChallengeSection />
      {showAllSubjects && <AllSubjectsModal />}
    </>
  );
}