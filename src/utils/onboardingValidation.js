// Validation functions for onboarding forms

export const validateProfile = (data) => {
  const errors = {};

  if (!data.firstName || data.firstName.trim() === '') {
    errors.firstName = 'Oops! Please enter your first name';
  }

  if (!data.lastName || data.lastName.trim() === '') {
    errors.lastName = 'Oops! Please enter your last name';
  }

  if (!data.dobMonth || !data.dobDay || !data.dobYear) {
    errors.dob = 'Please enter your date of birth';
  }

  if (!data.state) {
    errors.state = 'Please select your state';
  }

  if (!data.language) {
    errors.language = 'Please select your preferred language';
  }

  if (!data.grade) {
    errors.grade = 'Please select your current or most recent grade';
  }

  // Validate parent/guardian info if under 18
  if (data.isUnder18) {
    if (data.parentName && data.parentName.trim() !== '' && !data.parentEmail) {
      errors.parentEmail = 'Please enter parent/guardian email';
    }
    if (data.parentEmail && data.parentEmail.trim() !== '' && !isValidEmail(data.parentEmail)) {
      errors.parentEmail = 'Please enter a valid email address';
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateSubjects = (subjects) => {
  if (!subjects || subjects.length < 3) {
    return {
      isValid: false,
      error: 'Pick at least 3 subjects to continue'
    };
  }
  return { isValid: true };
};

export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const calculateAge = (dobMonth, dobDay, dobYear) => {
  const today = new Date();
  const birthDate = new Date(dobYear, dobMonth - 1, dobDay);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  return age;
};

