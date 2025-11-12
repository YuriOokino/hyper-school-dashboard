import { useState } from 'react';

const LANGUAGES = [
  { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
];

export default function ProfileSetupStep({ profileData, updateProfileData, nextStep }) {
  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState('');
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [tempDob, setTempDob] = useState('');
  const [tempFullName, setTempFullName] = useState('');
  const [tempEmail, setTempEmail] = useState('');
  const [tempPassword, setTempPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showYearModal, setShowYearModal] = useState(false);
  const [assignedYear, setAssignedYear] = useState(6);

  // Default user data (from wireframe)
  const firstName = profileData?.firstName || 'Jennifer';
  const lastName = profileData?.lastName || 'Roswell';
  
  const defaultData = {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    email: profileData?.email || 'jennyrose@gmail.com',
    password: '•••••••',
    dob: profileData?.dobMonth && profileData?.dobDay && profileData?.dobYear 
      ? `${String(profileData.dobMonth).padStart(2, '0')}/${String(profileData.dobDay).padStart(2, '0')}/${profileData.dobYear}`
      : '03/23/2018',
    language: profileData?.language || 'English (US)',
  };

  // Get the flag for the current language
  const currentLanguage = LANGUAGES.find(lang => lang.name === defaultData.language);
  const currentFlag = currentLanguage?.flag || '🇺🇸';

  const handleChange = (field) => {
    setEditingField(field);
    setTempValue(defaultData[field]);
  };

  const handleSave = (field) => {
    updateProfileData({ [field]: tempValue });
    setEditingField(null);
  };

  const handleCancel = () => {
    setEditingField(null);
    setTempValue('');
  };

  const calculateYearFromAge = (dob) => {
    if (!dob) return 6; // Default year
    
    const [month, day, year] = dob.split('/').map(Number);
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    // Age-based year assignment (age 7 = Year 1, age 8 = Year 2, etc.)
    const calculatedYear = Math.max(1, Math.min(13, age - 6));
    return calculatedYear;
  };

  const handleNext = () => {
    const year = calculateYearFromAge(defaultData.dob);
    setAssignedYear(year);
    setShowYearModal(true);
  };

  const handleYearModalClose = () => {
    setShowYearModal(false);
  };

  const handleYearModalContinue = () => {
    setShowYearModal(false);
    nextStep();
  };

  const handleLanguageSelect = (language) => {
    updateProfileData({ language: language.name });
    setShowLanguageModal(false);
  };

  const handleDobEdit = () => {
    setEditingField('dob');
    setTempDob(defaultData.dob);
  };

  const handleDobSave = () => {
    // Validate date format (MM/DD/YYYY)
    const datePattern = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
    if (datePattern.test(tempDob)) {
      // Parse the date and update profileData
      const [month, day, year] = tempDob.split('/');
      updateProfileData({ 
        dobMonth: month,
        dobDay: day,
        dobYear: year
      });
      setEditingField(null);
      setTempDob('');
    }
  };

  const handleDobCancel = () => {
    setEditingField(null);
    setTempDob('');
  };

  const handleDobChange = (e) => {
    let value = e.target.value.replace(/[^\d/]/g, ''); // Only allow digits and slashes
    
    // Auto-format as MM/DD/YYYY
    if (value.length === 2 && !value.includes('/')) {
      value = value + '/';
    } else if (value.length === 5 && value.split('/').length === 2) {
      value = value + '/';
    }
    
    // Limit to 10 characters (MM/DD/YYYY)
    if (value.length <= 10) {
      setTempDob(value);
    }
  };

  // Full Name handlers
  const handleFullNameEdit = () => {
    setEditingField('fullName');
    setTempFullName(defaultData.fullName);
  };

  const handleFullNameSave = () => {
    if (tempFullName.trim()) {
      const names = tempFullName.trim().split(' ');
      const firstName = names[0];
      const lastName = names.slice(1).join(' ') || names[0];
      updateProfileData({ firstName, lastName });
      setEditingField(null);
      setTempFullName('');
    }
  };

  const handleFullNameCancel = () => {
    setEditingField(null);
    setTempFullName('');
  };

  // Email handlers
  const handleEmailEdit = () => {
    setEditingField('email');
    setTempEmail(defaultData.email);
  };

  const handleEmailSave = () => {
    if (tempEmail.trim()) {
      updateProfileData({ email: tempEmail.trim() });
      setEditingField(null);
      setTempEmail('');
    }
  };

  const handleEmailCancel = () => {
    setEditingField(null);
    setTempEmail('');
  };

  // Password handlers
  const handlePasswordEdit = () => {
    setEditingField('password');
    setTempPassword('');
    setShowPassword(false);
  };

  const handlePasswordSave = () => {
    if (tempPassword.trim()) {
      updateProfileData({ password: tempPassword });
      setEditingField(null);
      setTempPassword('');
      setShowPassword(false);
    }
  };

  const handlePasswordCancel = () => {
    setEditingField(null);
    setTempPassword('');
    setShowPassword(false);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-gray-900 mb-6">HI, {defaultData.firstName.toUpperCase()}!</h2>
        <p className="font-outfit text-lg text-gray-900 leading-relaxed">
          Excited to have you here! We're going to set up your personalized learning experience. First, let's start with the basics about you.
        </p>
      </div>

      {/* Info Fields */}
      <div className="space-y-8">
        {/* Full Name */}
        <div>
          <label className="block font-oswald text-base uppercase text-gray-900 mb-3">
            Full name
          </label>
          <div className="flex items-center justify-between h-8">
            {editingField === 'fullName' ? (
              <>
                <input
                  type="text"
                  value={tempFullName}
                  onChange={(e) => setTempFullName(e.target.value)}
                  placeholder="Enter full name"
                  className="font-outfit text-lg text-gray-900 focus:outline-none bg-transparent border-none p-0"
                  autoFocus
                />
                <div className="flex items-center space-x-6 h-full">
                  <button
                    onClick={handleFullNameCancel}
                    className="font-outfit text-base text-gray-900 opacity-50 h-full flex items-center"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleFullNameSave}
                    className="px-4 h-full bg-gray-900 font-outfit text-base uppercase font-medium text-white flex items-center"
                  >
                    SAVE
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="font-outfit text-lg text-gray-900">{defaultData.fullName}</span>
                <button
                  onClick={handleFullNameEdit}
                  className="font-outfit text-base text-gray-900 border-b-2 border-gray-900 h-full flex items-center"
                >
                  Change
                </button>
              </>
            )}
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="block font-oswald text-base uppercase text-gray-900 mb-3">
            Email address
          </label>
          <div className="flex items-center justify-between h-8">
            {editingField === 'email' ? (
              <>
                <input
                  type="email"
                  value={tempEmail}
                  onChange={(e) => setTempEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="font-outfit text-lg text-gray-900 focus:outline-none bg-transparent border-none p-0"
                  autoFocus
                />
                <div className="flex items-center space-x-6 h-full">
                  <button
                    onClick={handleEmailCancel}
                    className="font-outfit text-base text-gray-900 opacity-50 h-full flex items-center"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleEmailSave}
                    className="px-4 h-full bg-gray-900 font-outfit text-base uppercase font-medium text-white flex items-center"
                  >
                    SAVE
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="font-outfit text-lg text-gray-900">{defaultData.email}</span>
                <button
                  onClick={handleEmailEdit}
                  className="font-outfit text-base text-gray-900 border-b-2 border-gray-900 h-full flex items-center"
                >
                  Change
                </button>
              </>
            )}
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block font-oswald text-base uppercase text-gray-900 mb-3">
            Password
          </label>
          <div className="flex items-center justify-between h-8">
            {editingField === 'password' ? (
              <>
                <div className="flex items-center space-x-2">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={tempPassword}
                    onChange={(e) => setTempPassword(e.target.value)}
                    placeholder="Enter new password"
                    className="font-outfit text-lg text-gray-900 focus:outline-none bg-transparent border-none p-0"
                    autoFocus
                  />
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-900 flex items-center"
                    type="button"
                  >
                    {showPassword ? (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                      </svg>
                    ) : (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    )}
                  </button>
                </div>
                <div className="flex items-center space-x-6 h-full">
                  <button
                    onClick={handlePasswordCancel}
                    className="font-outfit text-base text-gray-900 opacity-50 h-full flex items-center"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlePasswordSave}
                    className="px-4 h-full bg-gray-900 font-outfit text-base uppercase font-medium text-white flex items-center"
                  >
                    SAVE
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="font-outfit text-lg text-gray-900">{defaultData.password}</span>
                <button
                  onClick={handlePasswordEdit}
                  className="font-outfit text-base text-gray-900 border-b-2 border-gray-900 h-full flex items-center"
                >
                  Change
                </button>
              </>
            )}
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block font-oswald text-base uppercase text-gray-900 mb-3">
            Date of birth
          </label>
          <div className="flex items-center justify-between h-8">
            {editingField === 'dob' ? (
              <>
                <input
                  type="text"
                  value={tempDob}
                  onChange={handleDobChange}
                  placeholder="MM/DD/YYYY"
                  className="font-outfit text-lg text-gray-900 focus:outline-none bg-transparent border-none p-0"
                  autoFocus
                />
                <div className="flex items-center space-x-6 h-full">
                  <button
                    onClick={handleDobCancel}
                    className="font-outfit text-base text-gray-900 opacity-50 h-full flex items-center"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleDobSave}
                    className="px-4 h-full bg-gray-900 font-outfit text-base uppercase font-medium text-white flex items-center"
                  >
                    SAVE
                  </button>
                </div>
              </>
            ) : (
              <>
                <span className="font-outfit text-lg text-gray-900">{defaultData.dob}</span>
                <button
                  onClick={handleDobEdit}
                  className="font-outfit text-base text-gray-900 border-b-2 border-gray-900 h-full flex items-center"
                >
                  Change
                </button>
              </>
            )}
          </div>
        </div>

        {/* Language */}
        <div>
          <label className="block font-oswald text-base uppercase text-gray-900 mb-3">
            Language
          </label>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 flex items-center justify-center text-2xl">
                {currentFlag}
              </div>
              <span className="font-outfit text-lg text-gray-900">{defaultData.language}</span>
            </div>
            <button
              onClick={() => setShowLanguageModal(true)}
              className="font-outfit text-base text-gray-900 border-b-2 border-gray-900"
            >
              Change
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end space-x-4 mt-16">
        <button
          onClick={handleCancel}
          className="px-8 py-3 border-2 border-gray-900 bg-transparent font-outfit text-base uppercase font-medium text-gray-900"
        >
          CANCEL
        </button>
        <button
          onClick={handleNext}
          className="px-8 py-3 bg-gray-900 font-outfit text-base uppercase font-medium text-white"
        >
          NEXT
        </button>
      </div>

      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
          onClick={() => setShowLanguageModal(false)}
        >
          <div 
            className="bg-white p-8 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-gray-900 mb-6">SELECT LANGUAGE</h3>
            
            <div className="space-y-2">
              {LANGUAGES.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className={`w-full flex items-center space-x-4 p-4 border-2 text-left ${
                    defaultData.language === language.name 
                      ? 'border-gray-900 bg-gray-50' 
                      : 'border-gray-200'
                  }`}
                >
                  <span className="text-2xl">{language.flag}</span>
                  <span className="font-outfit text-base text-gray-900">{language.name}</span>
                  {defaultData.language === language.name && (
                    <span className="ml-auto text-gray-900 font-bold">✓</span>
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowLanguageModal(false)}
              className="w-full mt-6 px-8 py-3 border-2 border-gray-900 bg-white font-outfit text-base uppercase font-medium text-gray-900"
            >
              CANCEL
            </button>
          </div>
        </div>
      )}

      {/* Year Assignment Modal */}
      {showYearModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
        >
          <div 
            className="bg-white p-8 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleYearModalClose}
              className="absolute top-6 right-6 text-gray-900 text-2xl leading-none"
            >
              ×
            </button>

            {/* Content */}
            <div className="text-center">
              <p className="font-outfit text-sm uppercase tracking-wide text-gray-900 mb-2">
                YOU'RE IN
              </p>
              
              <h2 className="text-gray-900 mb-4">YEAR {assignedYear}</h2>
              
              <div className="text-5xl mb-6">🎉</div>
              
              <p className="font-outfit text-base text-gray-900 leading-relaxed mb-8">
                This is based on your age. Don't worry, you will get personalized lessons based on your skills!
              </p>

              <button
                onClick={handleYearModalContinue}
                className="w-full py-3 px-6 bg-gray-900 font-outfit text-base uppercase font-medium text-white"
              >
                SOUNDS GOOD!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
