export default function GoalSettingsStep({ goalSettings, updateGoalSettings, previousStep, navigate }) {
  const handleGoalChange = (goal) => {
    updateGoalSettings({ weeklyGoal: goal });
  };

  const handleCheckboxChange = (field) => {
    updateGoalSettings({ [field]: !goalSettings[field] });
  };

  const handleStudyTimeChange = (time) => {
    updateGoalSettings({ studyTime: time });
  };

  const handleContinue = () => {
    // Navigate to quiz overview
    navigate('/onboarding/quiz');
  };

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="text-brand-black mb-2">LET'S SET YOUR LEARNING GOALS!</h3>
        <p className="font-outfit text-base text-gray-900">
          Customize your experience to fit your schedule and preferences.
        </p>
      </div>

      {/* Content Card */}
      <div className="bg-white p-10">
        {/* Section 1: Weekly Study Goal */}
        <div className="mb-8">
          <label className="block font-oswald text-sm uppercase text-brand-black mb-4">
            How much do you want to study per week?
          </label>
          <div className="space-y-3">
            <button
              onClick={() => handleGoalChange('light')}
              className={`w-full p-4 border-2 text-left transition-all flex items-center space-x-3 ${
                goalSettings.weeklyGoal === 'light'
                  ? 'border-brand-blue bg-brand-blue-light'
                  : 'border-brand-surface hover:border-gray-300'
              }`}
            >
              <span className="text-2xl">🌱</span>
              <div>
                <div className="font-outfit font-medium">Light - 2-3 hours</div>
                <div className="font-outfit text-sm text-gray-600">Perfect for trying things out</div>
              </div>
            </button>

            <button
              onClick={() => handleGoalChange('moderate')}
              className={`w-full p-4 border-2 text-left transition-all flex items-center space-x-3 ${
                goalSettings.weeklyGoal === 'moderate'
                  ? 'border-brand-blue bg-brand-blue-light'
                  : 'border-brand-surface hover:border-gray-300'
              }`}
            >
              <span className="text-2xl">⚡</span>
              <div>
                <div className="font-outfit font-medium">Moderate - 4-6 hours</div>
                <div className="font-outfit text-sm text-gray-600">Recommended for steady progress</div>
              </div>
            </button>

            <button
              onClick={() => handleGoalChange('intensive')}
              className={`w-full p-4 border-2 text-left transition-all flex items-center space-x-3 ${
                goalSettings.weeklyGoal === 'intensive'
                  ? 'border-brand-blue bg-brand-blue-light'
                  : 'border-brand-surface hover:border-gray-300'
              }`}
            >
              <span className="text-2xl">🔥</span>
              <div>
                <div className="font-outfit font-medium">Intensive - 7+ hours</div>
                <div className="font-outfit text-sm text-gray-600">For dedicated learners</div>
              </div>
            </button>
          </div>
        </div>

        {/* Section 2: Notification Preferences */}
        <div className="mb-8">
          <label className="block font-oswald text-sm uppercase text-brand-black mb-4">
            How should we remind you?
          </label>
          <div className="space-y-3">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={goalSettings.emailReminders}
                onChange={() => handleCheckboxChange('emailReminders')}
                className="mt-1 w-5 h-5 text-brand-blue border-2 border-gray-300 focus:ring-brand-blue"
              />
              <div>
                <div className="font-outfit font-medium">Email reminders</div>
                <div className="font-outfit text-sm text-gray-600">Weekly learning tips and progress updates</div>
              </div>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={goalSettings.inAppNotifications}
                onChange={() => handleCheckboxChange('inAppNotifications')}
                className="mt-1 w-5 h-5 text-brand-blue border-2 border-gray-300 focus:ring-brand-blue"
              />
              <div>
                <div className="font-outfit font-medium">In-app notifications</div>
                <div className="font-outfit text-sm text-gray-600">Get notified when new content is available</div>
              </div>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={goalSettings.weeklyProgressSummary}
                onChange={() => handleCheckboxChange('weeklyProgressSummary')}
                className="mt-1 w-5 h-5 text-brand-blue border-2 border-gray-300 focus:ring-brand-blue"
              />
              <div>
                <div className="font-outfit font-medium">Weekly progress summary</div>
                <div className="font-outfit text-sm text-gray-600">See how you're doing each week</div>
              </div>
            </label>
          </div>
        </div>

        {/* Section 3: Best Study Time */}
        <div className="mb-8">
          <label className="block font-oswald text-sm uppercase text-brand-black mb-2">
            When do you usually study? (Optional)
          </label>
          <select
            value={goalSettings.studyTime}
            onChange={(e) => handleStudyTimeChange(e.target.value)}
            className="w-full border-2 border-brand-surface focus:border-brand-blue focus:outline-none px-4 py-3 font-outfit text-base transition-colors"
          >
            <option value="No preference">No preference</option>
            <option value="Morning">Morning (6 AM - 12 PM)</option>
            <option value="Afternoon">Afternoon (12 PM - 6 PM)</option>
            <option value="Evening">Evening (6 PM - 12 AM)</option>
          </select>
          <p className="font-outfit text-sm text-gray-600 mt-2">
            We'll suggest challenges at your preferred time
          </p>
        </div>

        {/* Reassurance Note */}
        <div className="bg-brand-surface p-4 flex items-start space-x-3 mb-6">
          <img src="/assets/icons/settings-icon.svg" alt="" className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="font-outfit text-sm text-gray-900">
            You can change these settings anytime in your account preferences.
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
          onClick={handleContinue}
          className="w-full bg-brand-black text-white py-3 px-6 font-oswald uppercase text-base hover:opacity-90 transition-opacity"
        >
          Start Skills Check
        </button>
      </div>
    </div>
  );
}

