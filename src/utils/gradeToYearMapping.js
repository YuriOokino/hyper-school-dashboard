// Calculate year based on date of birth
export const calculateYearFromDOB = (dobMonth, dobDay, dobYear) => {
  const today = new Date();
  const birthDate = new Date(dobYear, dobMonth - 1, dobDay);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  // Map age to year
  // Age 11-12 = Year 6, Age 12-13 = Year 7, etc.
  // Typically: Year = Age - 5
  const year = age - 5;
  
  // Clamp between Year 6 and Year 12
  return Math.max(6, Math.min(12, year));
};

// Grade to Year mapping utility (for reference/fallback)
export const gradeToYear = (grade) => {
  const gradeMap = {
    "6th Grade": 6,
    "7th Grade": 7,
    "8th Grade": 8,
    "9th Grade": 9,
    "10th Grade": 10,
    "11th Grade": 11,
    "12th Grade": 12
  };
  
  return gradeMap[grade] || 6;
};

export const yearToGrade = (year) => {
  return `${year}th Grade`;
};

