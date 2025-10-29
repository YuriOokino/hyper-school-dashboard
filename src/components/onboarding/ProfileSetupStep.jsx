import { useState, useEffect } from 'react';
import { validateProfile, calculateAge } from '../../utils/onboardingValidation';

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming', 'District of Columbia'
];

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const GRADES = [
  '6th Grade', '7th Grade', '8th Grade', '9th Grade',
  '10th Grade', '11th Grade', '12th Grade'
];

const LANGUAGES = ['English (US)', 'Spanish', 'French'];

export default function ProfileSetupStep({ profileData, updateProfileData, nextStep }) {
  const [errors, setErrors] = useState({});
  const [isUnder18, setIsUnder18] = useState(false);

  // Check if user is under 18 whenever DOB changes
  useEffect(() => {
    if (profileData.dobMonth && profileData.dobDay && profileData.dobYear) {
      const age = calculateAge(
        parseInt(profileData.dobMonth),
        parseInt(profileData.dobDay),
        parseInt(profileData.dobYear)
      );
      setIsUnder18(age < 18);
    }
  }, [profileData.dobMonth, profileData.dobDay, profileData.dobYear]);

  const handleChange = (field, value) => {
    updateProfileData({ [field]: value });
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleContinue = () => {
    // Skip validation for preview mode
    nextStep();
    
    // Uncomment below for production validation
    // const validation = validateProfile({ ...profileData, isUnder18 });
    // if (validation.isValid) {
    //   nextStep();
    // } else {
    //   setErrors(validation.errors);
    // }
  };

  const isFormValid = () => {
    // Always return true for preview mode
    return true;
    
    // Uncomment below for production validation
    // return profileData.firstName && profileData.lastName &&
    //        profileData.dobMonth && profileData.dobDay && profileData.dobYear &&
    //        profileData.state && profileData.language && profileData.grade;
  };

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-brand-black mb-2">WELCOME, {profileData.firstName?.toUpperCase() || 'JENNIFER'}!</h2>
        <p className="font-outfit text-base text-gray-900 mb-4">
          You're about to create your own personalized learning journey! Before we dive in, let's make sure your profile is all set.
        </p>
        <p className="font-outfit text-sm text-gray-700">
          Check that everything looks good below.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white p-10">
        <div className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block font-oswald text-sm uppercase text-brand-black mb-2">
              First Name
            </label>
            <input
              type="text"
              value={profileData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              className={`w-full border-2 ${errors.firstName ? 'border-red-500' : 'border-brand-surface'} focus:border-brand-blue focus:outline-none px-4 py-3 font-outfit text-base transition-colors`}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1 font-outfit">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-oswald text-sm uppercase text-brand-black mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={profileData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              className={`w-full border-2 ${errors.lastName ? 'border-red-500' : 'border-brand-surface'} focus:border-brand-blue focus:outline-none px-4 py-3 font-outfit text-base transition-colors`}
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1 font-outfit">{errors.lastName}</p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block font-oswald text-sm uppercase text-brand-black mb-2">
              Date of Birth
            </label>
            <div className="grid grid-cols-3 gap-4">
              <select
                value={profileData.dobMonth}
                onChange={(e) => handleChange('dobMonth', e.target.value)}
                className={`border-2 ${errors.dob ? 'border-red-500' : 'border-brand-surface'} focus:border-brand-blue focus:outline-none px-4 py-3 font-outfit text-base transition-colors`}
              >
                <option value="">Month</option>
                {MONTHS.map((month, index) => (
                  <option key={month} value={index + 1}>{month}</option>
                ))}
              </select>
              <select
                value={profileData.dobDay}
                onChange={(e) => handleChange('dobDay', e.target.value)}
                className={`border-2 ${errors.dob ? 'border-red-500' : 'border-brand-surface'} focus:border-brand-blue focus:outline-none px-4 py-3 font-outfit text-base transition-colors`}
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <select
                value={profileData.dobYear}
                onChange={(e) => handleChange('dobYear', e.target.value)}
                className={`border-2 ${errors.dob ? 'border-red-500' : 'border-brand-surface'} focus:border-brand-blue focus:outline-none px-4 py-3 font-outfit text-base transition-colors`}
              >
                <option value="">Year</option>
                {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            {errors.dob && (
              <p className="text-red-500 text-sm mt-1 font-outfit">{errors.dob}</p>
            )}
          </div>

          {/* State */}
          <div>
            <label className="block font-oswald text-sm uppercase text-brand-black mb-2">
              State
            </label>
            <select
              value={profileData.state}
              onChange={(e) => handleChange('state', e.target.value)}
              className={`w-full border-2 ${errors.state ? 'border-red-500' : 'border-brand-surface'} focus:border-brand-blue focus:outline-none px-4 py-3 font-outfit text-base transition-colors`}
            >
              <option value="">Select your state</option>
              {US_STATES.map(state => (
                <option key={state} value={state}>{state}</option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-500 text-sm mt-1 font-outfit">{errors.state}</p>
            )}
          </div>

          {/* Preferred Language */}
          <div>
            <label className="block font-oswald text-sm uppercase text-brand-black mb-2">
              Preferred Language
            </label>
            <select
              value={profileData.language}
              onChange={(e) => handleChange('language', e.target.value)}
              className={`w-full border-2 ${errors.language ? 'border-red-500' : 'border-brand-surface'} focus:border-brand-blue focus:outline-none px-4 py-3 font-outfit text-base transition-colors`}
            >
              {LANGUAGES.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
            {errors.language && (
              <p className="text-red-500 text-sm mt-1 font-outfit">{errors.language}</p>
            )}
          </div>

          {/* Current/Most Recent Grade */}
          <div>
            <label className="block font-oswald text-sm uppercase text-brand-black mb-2">
              Current/Most Recent Grade
            </label>
            <select
              value={profileData.grade}
              onChange={(e) => handleChange('grade', e.target.value)}
              className={`w-full border-2 ${errors.grade ? 'border-red-500' : 'border-brand-surface'} focus:border-brand-blue focus:outline-none px-4 py-3 font-outfit text-base transition-colors`}
            >
              <option value="">Select your grade</option>
              {GRADES.map(grade => (
                <option key={grade} value={grade}>{grade}</option>
              ))}
            </select>
            {errors.grade && (
              <p className="text-red-500 text-sm mt-1 font-outfit">{errors.grade}</p>
            )}
          </div>

          {/* Parent/Guardian Section - Only show if under 18 */}
          {isUnder18 && (
            <>
              <div className="border-t border-gray-200 my-6"></div>
              <div>
                <h6 className="text-brand-black mb-2">PARENT OR GUARDIAN INFO</h6>
                <p className="font-outfit text-sm text-gray-600 mb-4">
                  We'll send progress updates to help support your learning!
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="block font-oswald text-sm uppercase text-brand-black mb-2">
                      Parent/Guardian Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={profileData.parentName}
                      onChange={(e) => handleChange('parentName', e.target.value)}
                      className="w-full border-2 border-brand-surface focus:border-brand-blue focus:outline-none px-4 py-3 font-outfit text-base transition-colors"
                      placeholder="Enter parent or guardian name"
                    />
                  </div>

                  <div>
                    <label className="block font-oswald text-sm uppercase text-brand-black mb-2">
                      Parent/Guardian Email (Optional)
                    </label>
                    <input
                      type="email"
                      value={profileData.parentEmail}
                      onChange={(e) => handleChange('parentEmail', e.target.value)}
                      className={`w-full border-2 ${errors.parentEmail ? 'border-red-500' : 'border-brand-surface'} focus:border-brand-blue focus:outline-none px-4 py-3 font-outfit text-base transition-colors`}
                      placeholder="parent@example.com"
                    />
                    {errors.parentEmail && (
                      <p className="text-red-500 text-sm mt-1 font-outfit">{errors.parentEmail}</p>
                    )}
                  </div>
                </div>

                <p className="font-outfit text-xs text-gray-500 mt-2">
                  Optional, but recommended for students under 18
                </p>
              </div>
            </>
          )}
        </div>

        {/* Privacy Note */}
        <p className="font-outfit text-xs text-gray-500 mt-6">
          We keep your information private and secure. <a href="#" className="text-brand-blue underline">Learn more</a>
        </p>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          disabled={!isFormValid()}
          className={`w-full mt-6 py-3 px-6 font-oswald uppercase text-base transition-opacity ${
            isFormValid()
              ? 'bg-brand-black text-white hover:opacity-90 cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

