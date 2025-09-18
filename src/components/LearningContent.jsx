import { useState } from 'react';

export default function LearningContent({ masteryData, getColorClasses, showMasteryOnly = false }) {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Lesson data array
  const lessonsData = [
    { subject: 'Math', lesson: 'Understanding Linear Equations', credits: '180/200', mastery: 100, progress: 99, time: '4h20m', masteryColor: 'green' },
    { subject: 'Science', lesson: 'Exploring Earth\'s Systems', credits: '100/200', mastery: 85, progress: 50, time: '1h15m', masteryColor: 'blue' },
    { subject: 'English', lesson: 'Advanced Grammar and Syntax', credits: '45/150', mastery: 65, progress: 30, time: '2h45m', masteryColor: 'yellow' },
    { subject: 'History', lesson: 'World War II: Causes and Effects', credits: '120/180', mastery: 92, progress: 67, time: '3h10m', masteryColor: 'green' },
    { subject: 'Physics', lesson: 'Mechanics: Force and Motion', credits: '75/200', mastery: 42, progress: 38, time: '1h50m', masteryColor: 'red' },
    { subject: 'Chemistry', lesson: 'Chemical Bonding and Reactions', credits: '160/200', mastery: 95, progress: 80, time: '5h30m', masteryColor: 'green' },
    { subject: 'Biology', lesson: 'Cell Structure and Function', credits: '90/150', mastery: 78, progress: 60, time: '2h20m', masteryColor: 'blue' },
    { subject: 'Geography', lesson: 'Climate Change and Global Impact', credits: '110/180', mastery: 70, progress: 61, time: '3h45m', masteryColor: 'yellow' },
    { subject: 'Art', lesson: 'Renaissance Art and Techniques', credits: '65/120', mastery: 55, progress: 54, time: '2h15m', masteryColor: 'orange' },
    { subject: 'Computer Science', lesson: 'Introduction to Python Programming', credits: '140/200', mastery: 88, progress: 70, time: '4h55m', masteryColor: 'green' }
  ];

  // Pagination logic
  const totalPages = Math.ceil(lessonsData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentLessons = lessonsData.slice(startIndex, endIndex);

  const goToPage = (page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
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
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold mb-6">MASTERY</h2>
      <div className="grid grid-cols-4 gap-6">
        {masteryData.map((subject, index) => {
          const colors = getColorClasses(subject.color);
          const circumference = 2 * Math.PI * 45;
          const strokeDasharray = circumference;
          const strokeDashoffset = circumference - (subject.percentage / 100) * circumference;
          
          return (
            <div key={index} className="text-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="relative inline-block mb-4">
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
              
              <h3 className="text-lg font-semibold mb-2">{subject.subject}</h3>
              
              <div className="space-y-1 mb-3">
                <div className={`inline-block px-2 py-1 ${colors.light} ${colors.text} text-xs font-medium rounded-full`}>
                  {subject.level}
                </div>
                <p className="text-xs text-gray-500">{subject.levelNumber}</p>
              </div>
              
              <p className="text-xs text-gray-600 mb-2">{subject.nextMilestone}</p>
              
              <div className="flex items-center justify-center space-x-2 text-xs text-gray-500">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.414L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>{subject.lastStudied}</span>
              </div>
              
              <div className="flex items-center justify-center space-x-1 mt-2">
                <svg className="w-3 h-3 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-600">{subject.streak} day streak</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // All Lessons section component
  const AllLessonsSection = () => (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold mb-6">ALL LESSONS</h2>
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
            <span className="text-sm">Incomplete only</span>
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
            <span className="text-sm">Filters</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold">Subject</th>
              <th className="text-left py-3 px-4 font-semibold">Lesson</th>
              <th className="text-left py-3 px-4 font-semibold">Hyper Credits</th>
              <th className="text-left py-3 px-4 font-semibold">Mastery Score</th>
              <th className="text-left py-3 px-4 font-semibold">Progress</th>
              <th className="text-left py-3 px-4 font-semibold">Time</th>
              <th className="text-left py-3 px-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentLessons.map((lesson, index) => (
              <tr key={index} className="border-b border-gray-100">
                <td className="py-3 px-4">{lesson.subject}</td>
                <td className="py-3 px-4">{lesson.lesson}</td>
                <td className="py-3 px-4">{lesson.credits}</td>
                <td className="py-3 px-4">
                  <span className={`${getMasteryBadgeClass(lesson.mastery)} px-2 py-1 text-sm`}>
                    {lesson.mastery}%
                  </span>
                </td>
                <td className="py-3 px-4">{lesson.progress}%</td>
                <td className="py-3 px-4">{lesson.time}</td>
                <td className="py-3 px-4">
                  <button className="flex items-center space-x-1 text-blue-600">
                    <span>Continue</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
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
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
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
                className={`px-3 py-2 text-sm font-medium rounded-md ${
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
            className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            Next
            <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414 1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  // Return based on showMasteryOnly prop
  if (showMasteryOnly) {
    return <MasterySection />;
  }

  return <AllLessonsSection />;
}