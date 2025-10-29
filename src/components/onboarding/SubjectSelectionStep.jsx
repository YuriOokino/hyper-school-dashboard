import { useState } from 'react';
import { validateSubjects } from '../../utils/onboardingValidation';
import SubjectCard from './SubjectCard';

const SUBJECTS = [
  // Knowledge Pillar
  { name: 'English', pillar: 'knowledge' },
  { name: 'Math', pillar: 'knowledge' },
  { name: 'History', pillar: 'knowledge' },
  { name: 'Biology', pillar: 'knowledge' },
  { name: 'Algebra', pillar: 'knowledge' },
  { name: 'Environmental Science', pillar: 'knowledge' },
  { name: 'Philosophy', pillar: 'knowledge' },
  { name: 'Creative Writing', pillar: 'knowledge' },
  { name: 'Science', pillar: 'knowledge' },
  { name: 'Geometry', pillar: 'knowledge' },
  { name: 'Computer Science', pillar: 'knowledge' },
  { name: 'Physics', pillar: 'knowledge' },
  // Life Skills Pillar
  { name: 'Cooking', pillar: 'life' },
  { name: 'Public Speaking', pillar: 'life' },
  { name: 'Job Interview Practice', pillar: 'life' },
  { name: 'Sewing', pillar: 'life' },
  { name: 'Gardening', pillar: 'life' },
  { name: 'Coding', pillar: 'life' },
  { name: 'Budgeting', pillar: 'life' },
  { name: 'Project Management', pillar: 'life' },
  { name: 'Engineering', pillar: 'life' },
  { name: 'Video Editing', pillar: 'life' }
];

export default function SubjectSelectionStep({ selectedSubjects, toggleSubject, nextStep, previousStep }) {
  const [error, setError] = useState('');
  const [showInfoBox, setShowInfoBox] = useState(false);

  const handleContinue = () => {
    // Skip validation for preview mode
    nextStep();
    
    // Uncomment below for production validation
    // const validation = validateSubjects(selectedSubjects);
    // if (validation.isValid) {
    //   nextStep();
    // } else {
    //   setError(validation.error);
    // }
  };

  const handleToggle = (subjectName) => {
    toggleSubject(subjectName);
    if (error) setError('');
  };

  const knowledgeSubjects = SUBJECTS.filter(s => s.pillar === 'knowledge');
  const lifeSkillsSubjects = SUBJECTS.filter(s => s.pillar === 'life');

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-brand-black mb-2">WHAT DO YOU WANT TO MASTER THIS YEAR?</h3>
        <p className="font-outfit text-base text-gray-900">
          Pick at least 3 subjects. You can update these at the start of each school year.
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border-2 border-red-500 px-4 py-3 mb-6 text-center">
          <p className="font-outfit text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Content Container */}
      <div className="bg-white p-10">
        {/* Knowledge Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-brand-rose">KNOWLEDGE</h5>
            <span className="font-outfit text-sm text-gray-600">
              {selectedSubjects.filter(s => knowledgeSubjects.some(ks => ks.name === s)).length} of {knowledgeSubjects.length} selected
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {knowledgeSubjects.map((subject) => (
              <label key={subject.name} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(subject.name)}
                  onChange={() => handleToggle(subject.name)}
                  className="w-5 h-5 text-brand-rose border-2 border-gray-300 focus:ring-brand-rose"
                />
                <span className="font-outfit text-base">{subject.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Life Skills Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-brand-orange">LIFE SKILLS</h5>
            <span className="font-outfit text-sm text-gray-600">
              {selectedSubjects.filter(s => lifeSkillsSubjects.some(ls => ls.name === s)).length} of {lifeSkillsSubjects.length} selected
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {lifeSkillsSubjects.map((subject) => (
              <label key={subject.name} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-50 transition-colors">
                <input
                  type="checkbox"
                  checked={selectedSubjects.includes(subject.name)}
                  onChange={() => handleToggle(subject.name)}
                  className="w-5 h-5 text-brand-orange border-2 border-gray-300 focus:ring-brand-orange"
                />
                <span className="font-outfit text-base">{subject.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-brand-blue-light p-4 flex items-start space-x-3 mb-6">
          <span className="text-xl flex-shrink-0">💡</span>
          <div>
            <div className="font-outfit font-medium text-sm text-gray-900 mb-1">
              What's the difference between Knowledge and Life Skills?
            </div>
            <p className="font-outfit text-sm text-gray-900">
              <strong>Knowledge</strong> subjects are what you learn in class - Math, Science, English, and more. They build your academic foundation.<br/>
              <strong>Life Skills</strong> teach you things you'll actually use every day - like managing your money, landing your dream job, and making smart decisions in the real world!
            </p>
          </div>
        </div>

        {/* Buttons */}
        <button
          onClick={() => previousStep()}
          className="font-outfit text-sm text-gray-600 hover:text-gray-900 transition-colors mb-3"
        >
          ← Back
        </button>
        <button
          onClick={handleContinue}
          className="w-full py-3 px-6 font-oswald uppercase text-base transition-opacity bg-brand-black text-white hover:opacity-90 cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

