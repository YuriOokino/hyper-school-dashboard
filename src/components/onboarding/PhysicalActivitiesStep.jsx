import { useState, useEffect } from 'react';

const ACTIVITIES = [
  'Walking',
  'Running',
  'Swimming',
  'Cycling',
  'Rope Jumping',
  'Hiking'
];

export default function PhysicalActivitiesStep({ 
  likedActivities = [], 
  dislikedActivities = [], 
  updateActivities, 
  nextStep, 
  previousStep 
}) {
  const toggleLikedActivity = (activity) => {
    let newLiked = [...likedActivities];
    let newDisliked = [...dislikedActivities];
    
    if (newLiked.includes(activity)) {
      // Remove from liked
      newLiked = newLiked.filter(a => a !== activity);
    } else {
      // Add to liked and remove from disliked if present
      newLiked.push(activity);
      newDisliked = newDisliked.filter(a => a !== activity);
    }
    
    updateActivities({ likedActivities: newLiked, dislikedActivities: newDisliked });
  };

  const toggleDislikedActivity = (activity) => {
    let newLiked = [...likedActivities];
    let newDisliked = [...dislikedActivities];
    
    if (newDisliked.includes(activity)) {
      // Remove from disliked
      newDisliked = newDisliked.filter(a => a !== activity);
    } else {
      // Add to disliked and remove from liked if present
      newDisliked.push(activity);
      newLiked = newLiked.filter(a => a !== activity);
    }
    
    updateActivities({ likedActivities: newLiked, dislikedActivities: newDisliked });
  };

  // Filter out activities selected in the other list
  const availableForLiked = ACTIVITIES.filter(a => !dislikedActivities.includes(a));
  const availableForDisliked = ACTIVITIES.filter(a => !likedActivities.includes(a));

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-brand-black mb-2">WHAT GETS YOU MOVING?</h3>
        <p className="font-outfit text-base text-gray-900 max-w-2xl mx-auto">
          Physical activity is part of your daily goals, and everyone moves differently! Pick activities you enjoy, from high-intensity sports to gentle options like walking or stretching. Skip the rest. We'll match you with challenges that work for YOU.
        </p>
      </div>

      {/* Content Container */}
      <div className="bg-white p-10">
        {/* I like section */}
        <div className="mb-8">
          <h5 className="text-brand-black mb-4">I like...</h5>
          <p className="font-outfit text-sm text-gray-600 mb-4">
            Choose as many as you want
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {availableForLiked.map((activity) => (
              <label 
                key={activity} 
                className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-50 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={likedActivities.includes(activity)}
                  onChange={() => toggleLikedActivity(activity)}
                  className="w-5 h-5 text-brand-lime border-2 border-gray-300 focus:ring-brand-lime"
                />
                <span className="font-outfit text-base">{activity}</span>
              </label>
            ))}
          </div>
        </div>

        {/* I don't like section */}
        <div className="mb-6">
          <h5 className="text-brand-black mb-4">I don't like...</h5>
          <p className="font-outfit text-sm text-gray-600 mb-4">
            Select the activities you don't want to or cannot carry on
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {availableForDisliked.map((activity) => (
              <label 
                key={activity} 
                className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-50 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={dislikedActivities.includes(activity)}
                  onChange={() => toggleDislikedActivity(activity)}
                  className="w-5 h-5 text-gray-500 border-2 border-gray-300 focus:ring-gray-500"
                />
                <span className="font-outfit text-base">{activity}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Info callout */}
        <div className="bg-brand-blue-light p-4 flex items-start space-x-3 mb-6">
          <span className="text-xl flex-shrink-0">💡</span>
          <p className="font-outfit text-sm text-gray-900">
            <strong>How are these tracked?</strong><br/>
            Connect your fitness tracker or device to automatically track your progress!
          </p>
        </div>

        {/* Buttons */}
        <button
          onClick={() => previousStep()}
          className="font-outfit text-sm text-gray-600 hover:text-gray-900 transition-colors mb-3"
        >
          ← Back
        </button>
        <button
          onClick={() => nextStep()}
          className="w-full py-3 px-6 font-oswald uppercase text-base transition-opacity bg-brand-black text-white hover:opacity-90 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}

