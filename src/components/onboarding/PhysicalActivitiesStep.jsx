import { useState } from 'react';

const ACTIVITIES = [
  'Walking',
  'Running',
  'Swimming',
  'Cycling'
];

export default function PhysicalActivitiesStep({ 
  likedActivities = [], 
  dislikedActivities = [], 
  updateActivities, 
  nextStep, 
  previousStep,
  profileData,
  updateProfileData
}) {
  const [otherActivities, setOtherActivities] = useState(profileData?.otherActivities || '');
  const handlePreference = (activity, preference) => {
    let newLiked = [...likedActivities];
    let newDisliked = [...dislikedActivities];

    // Remove from both lists first
    newLiked = newLiked.filter(a => a !== activity);
    newDisliked = newDisliked.filter(a => a !== activity);

    // Add to appropriate list based on preference
    if (preference === 'like') {
      newLiked.push(activity);
    } else if (preference === 'dislike') {
      newDisliked.push(activity);
    }
    // If 'no-preference', just remove from both lists (already done)

    updateActivities({ likedActivities: newLiked, dislikedActivities: newDisliked });
  };

  const getPreference = (activity) => {
    if (likedActivities.includes(activity)) return 'like';
    if (dislikedActivities.includes(activity)) return 'dislike';
    return 'no-preference';
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-gray-900 mb-6">WHAT SPORTS AND ACTIVITIES DO YOU ENJOY?</h2>
        <p className="font-outfit text-lg text-gray-900 leading-relaxed">
          Physical activity is part of your daily goals, and everyone can find movement they enjoy! Whether it's high-intensity sports or low-impact activities, we have options for all abilities. Pick what appeals to you and skip the rest: no judgement!
        </p>
      </div>

      {/* Activities List */}
      <div className="space-y-8">
        {ACTIVITIES.map((activity) => {
          const preference = getPreference(activity);
          
          return (
            <div key={activity}>
              <h5 className="text-gray-900 mb-4">{activity}</h5>
              <div className="flex gap-3">
                {/* Like Button */}
                <button
                  onClick={() => handlePreference(activity, 'like')}
                  className={`px-6 py-3 border-2 border-gray-900 font-outfit text-base transition-colors flex items-center gap-2 ${
                    preference === 'like'
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-900'
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                  </svg>
                  Like
                </button>

                {/* Dislike Button */}
                <button
                  onClick={() => handlePreference(activity, 'dislike')}
                  className={`px-6 py-3 border-2 border-gray-900 font-outfit text-base transition-colors flex items-center gap-2 ${
                    preference === 'dislike'
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-900'
                  }`}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
                  </svg>
                  Dislike
                </button>

                {/* No Preference Button */}
                <button
                  onClick={() => handlePreference(activity, 'no-preference')}
                  className={`px-6 py-3 border-2 border-gray-900 font-outfit text-base transition-colors ${
                    preference === 'no-preference'
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-900'
                  }`}
                >
                  No preference
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Other Activities Section */}
      <div className="mt-12">
        <p className="font-outfit text-base text-gray-900 leading-relaxed mb-4">
          We're all different, and that's great! If none of the above fits your lifestyle, let us know what you enjoy and feel comfortable with.
        </p>
        <textarea
          value={otherActivities}
          onChange={(e) => {
            setOtherActivities(e.target.value);
            if (updateProfileData) {
              updateProfileData({ otherActivities: e.target.value });
            }
          }}
          placeholder="Tell us about other activities you enjoy..."
          rows={4}
          className="w-full border-2 border-gray-900 px-4 py-3 font-outfit text-base text-gray-900 focus:outline-none resize-none"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-16">
        <button
          onClick={previousStep}
          className="px-8 py-3 border-2 border-gray-900 bg-transparent font-outfit text-base uppercase font-medium text-gray-900"
        >
          BACK
        </button>
        <button
          onClick={nextStep}
          className="px-8 py-3 bg-gray-900 font-outfit text-base uppercase font-medium text-white"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
