import { useState } from 'react';
import { validateSubjects } from '../../utils/onboardingValidation';
import SubjectCard from './SubjectCard';

const SUBJECTS = [
  // Knowledge Pillar
  { name: 'Math', pillar: 'knowledge' },
  { name: 'Science', pillar: 'knowledge' },
  { name: 'English/Language Arts', pillar: 'knowledge' },
  { name: 'History', pillar: 'knowledge' },
  { name: 'Computer Science', pillar: 'knowledge' },
  { name: 'Foreign Languages', pillar: 'knowledge' },
  // Life Skills Pillar
  { name: 'Personal Finance', pillar: 'life' },
  { name: 'Career Readiness', pillar: 'life' },
  { name: 'Critical Thinking', pillar: 'life' },
  // Thrive Pillar
  { name: 'Health & Wellness', pillar: 'thrive' },
  { name: 'Social Skills', pillar: 'thrive' },
  // Move Pillar
  { name: 'Physical Education', pillar: 'move' }
];

export default function SubjectSelectionStep({ selectedSubjects, toggleSubject, nextStep, previousStep }) {
  const [error, setError] = useState('');

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

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-brand-black mb-2">WHAT DO YOU WANT TO LEARN?</h3>
        <p className="font-outfit text-base text-gray-900">
          Pick at least 3 subjects. You can add more anytime!
        </p>
      </div>

      {/* Subject Counter */}
      <div className="flex justify-center mb-6">
        <div className="bg-brand-surface px-4 py-2 font-outfit text-sm">
          <span className="font-bold">{selectedSubjects.length}</span> of {SUBJECTS.length} subjects selected
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-100 border-2 border-red-500 px-4 py-3 mb-6 text-center">
          <p className="font-outfit text-sm text-red-700">{error}</p>
        </div>
      )}

      {/* Subject Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {SUBJECTS.map((subject) => (
          <SubjectCard
            key={subject.name}
            subject={subject.name}
            pillar={subject.pillar}
            isSelected={selectedSubjects.includes(subject.name)}
            onToggle={() => handleToggle(subject.name)}
          />
        ))}
      </div>

      {/* Encouragement Text */}
      <p className="font-outfit text-sm text-gray-500 text-center mb-6">
        Want to explore more? You can change topics next year!
      </p>

      {/* Buttons */}
      <div className="bg-white p-6">
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

