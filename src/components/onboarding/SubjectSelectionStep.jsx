import { useState } from 'react';

const TOPICS = {
  arts: [
    'Creative Writing',
    'Digital Art and Design',
    'Photography',
    'Drawing & Painting',
    'Music',
    'Journalism'
  ],
  technology: [
    'Introduction to Coding',
    'Game Design',
    'Internet Safety',
    '3D Design & Printing'
  ],
  languagesCultures: [
    'Spanish',
    'French',
    'Mandarin Chinese',
    'American Sign Language (ASL)',
    'Global Cultures & Geography'
  ],
  personalGrowth: [
    'Study Skills & Organization',
    'Leadership',
    'Community Service',
    'Debate & Public Speaking',
    'Entrepreneurship',
    'Budgeting & Finance'
  ]
};

export default function SubjectSelectionStep({ selectedSubjects = [], toggleSubject, nextStep, previousStep }) {
  const minTopics = 7;
  const maxTopics = 13;
  const remaining = Math.max(0, minTopics - selectedSubjects.length);
  const canContinue = selectedSubjects.length >= minTopics;
  const atMaxCapacity = selectedSubjects.length >= maxTopics;

  const handleToggle = (topic) => {
    // If topic is already selected, allow deselection
    if (selectedSubjects.includes(topic)) {
      toggleSubject(topic);
    } else {
      // Only allow selection if under max capacity
      if (!atMaxCapacity) {
        toggleSubject(topic);
      }
    }
  };

  const isSelected = (topic) => selectedSubjects.includes(topic);
  const isDisabled = (topic) => !isSelected(topic) && atMaxCapacity;

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-gray-900 mb-6">WHAT DO YOU WANT TO MASTER THIS YEAR?</h2>
        <p className="font-outfit text-lg text-gray-900 leading-relaxed mb-6">
          Personalize your curriculum for the coming year! Choose the topics you would like to learn. You can change them at the start of the next year.
        </p>
        <div className="bg-gray-100 px-4 py-3 w-full">
          <p className="font-outfit text-base text-gray-900">
            {selectedSubjects.length === 0 
              ? 'Pick at least 7 topics.'
              : remaining > 0
                ? `Pick ${remaining} more ${remaining === 1 ? 'topic' : 'topics'}.`
                : atMaxCapacity
                  ? 'You have selected all available topics.'
                  : `You can choose up to ${maxTopics} topics.`
            }
          </p>
        </div>
      </div>

      {/* Topics Grid */}
      <div className="space-y-12">
        {/* Arts */}
        <div>
          <h5 className="text-gray-900 mb-4">Arts</h5>
          <div className="flex flex-wrap gap-3">
            {TOPICS.arts.map((topic) => (
              <button
                key={topic}
                onClick={() => handleToggle(topic)}
                disabled={isDisabled(topic)}
                className={`px-6 py-3 border-2 border-gray-900 font-outfit text-base transition-colors ${
                  isSelected(topic)
                    ? 'bg-gray-900 text-white'
                    : isDisabled(topic)
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-900'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Technology */}
        <div>
          <h5 className="text-gray-900 mb-4">Technology</h5>
          <div className="flex flex-wrap gap-3">
            {TOPICS.technology.map((topic) => (
              <button
                key={topic}
                onClick={() => handleToggle(topic)}
                disabled={isDisabled(topic)}
                className={`px-6 py-3 border-2 border-gray-900 font-outfit text-base transition-colors ${
                  isSelected(topic)
                    ? 'bg-gray-900 text-white'
                    : isDisabled(topic)
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-900'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Languages & Cultures */}
        <div>
          <h5 className="text-gray-900 mb-4">Languages & Cultures</h5>
          <div className="flex flex-wrap gap-3">
            {TOPICS.languagesCultures.map((topic) => (
              <button
                key={topic}
                onClick={() => handleToggle(topic)}
                disabled={isDisabled(topic)}
                className={`px-6 py-3 border-2 border-gray-900 font-outfit text-base transition-colors ${
                  isSelected(topic)
                    ? 'bg-gray-900 text-white'
                    : isDisabled(topic)
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-900'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Personal Growth */}
        <div>
          <h5 className="text-gray-900 mb-4">Personal Growth</h5>
          <div className="flex flex-wrap gap-3">
            {TOPICS.personalGrowth.map((topic) => (
              <button
                key={topic}
                onClick={() => handleToggle(topic)}
                disabled={isDisabled(topic)}
                className={`px-6 py-3 border-2 border-gray-900 font-outfit text-base transition-colors ${
                  isSelected(topic)
                    ? 'bg-gray-900 text-white'
                    : isDisabled(topic)
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-900'
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end items-center space-x-4 mt-16">
        {remaining > 0 && (
          <p className="font-outfit text-base text-gray-900">
            Pick {remaining} more!
          </p>
        )}
        <button
          onClick={previousStep}
          className="px-8 py-3 border-2 border-gray-900 bg-transparent font-outfit text-base uppercase font-medium text-gray-900"
        >
          BACK
        </button>
        <button
          onClick={nextStep}
          disabled={!canContinue}
          className={`px-8 py-3 font-outfit text-base uppercase font-medium ${
            canContinue
              ? 'bg-gray-900 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
