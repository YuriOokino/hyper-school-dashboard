import { useState, useEffect } from 'react';

const STORAGE_KEY = 'onboarding_progress';

export const useOnboardingState = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [profileData, setProfileData] = useState({
    firstName: '',
    lastName: '',
    dobMonth: '',
    dobDay: '',
    dobYear: '',
    state: '',
    language: 'English (US)',
    grade: '',
    avatar: null,
    parentName: '',
    parentEmail: ''
  });
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [likedActivities, setLikedActivities] = useState([]);
  const [dislikedActivities, setDislikedActivities] = useState([]);
  const [goalSettings, setGoalSettings] = useState({
    weeklyGoal: 'moderate',
    emailReminders: true,
    inAppNotifications: true,
    weeklyProgressSummary: true,
    studyTime: 'No preference'
  });
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);

  // Load progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (data.currentStep) setCurrentStep(data.currentStep);
        if (data.profileData) setProfileData(data.profileData);
        if (data.selectedSubjects) setSelectedSubjects(data.selectedSubjects);
        if (data.likedActivities) setLikedActivities(data.likedActivities);
        if (data.dislikedActivities) setDislikedActivities(data.dislikedActivities);
        if (data.goalSettings) setGoalSettings(data.goalSettings);
        if (data.quizAnswers) setQuizAnswers(data.quizAnswers);
        if (data.quizResults) setQuizResults(data.quizResults);
      } catch (e) {
        console.error('Error loading onboarding progress:', e);
      }
    }
  }, []);

  // Save progress to localStorage whenever state changes
  useEffect(() => {
    const data = {
      currentStep,
      profileData,
      selectedSubjects,
      likedActivities,
      dislikedActivities,
      goalSettings,
      quizAnswers,
      quizResults
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, [currentStep, profileData, selectedSubjects, likedActivities, dislikedActivities, goalSettings, quizAnswers, quizResults]);

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const previousStep = () => {
    setCurrentStep(prev => Math.max(1, prev - 1));
  };

  const updateProfileData = (data) => {
    setProfileData(prev => ({ ...prev, ...data }));
  };

  const toggleSubject = (subject) => {
    setSelectedSubjects(prev => {
      if (prev.includes(subject)) {
        return prev.filter(s => s !== subject);
      } else {
        return [...prev, subject];
      }
    });
  };

  const updateActivities = (activities) => {
    if (activities.likedActivities !== undefined) {
      setLikedActivities(activities.likedActivities);
    }
    if (activities.dislikedActivities !== undefined) {
      setDislikedActivities(activities.dislikedActivities);
    }
  };

  const updateGoalSettings = (settings) => {
    setGoalSettings(prev => ({ ...prev, ...settings }));
  };

  const saveQuizAnswer = (subject, questionIndex, answer) => {
    setQuizAnswers(prev => ({
      ...prev,
      [subject]: {
        ...(prev[subject] || {}),
        [questionIndex]: answer
      }
    }));
  };

  const saveQuizResults = (results) => {
    setQuizResults(results);
  };

  const completeOnboarding = () => {
    localStorage.setItem('onboarding_completed', 'true');
    localStorage.removeItem(STORAGE_KEY);
  };

  const resetOnboarding = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('onboarding_completed');
    setCurrentStep(1);
    setProfileData({
      firstName: '',
      lastName: '',
      dobMonth: '',
      dobDay: '',
      dobYear: '',
      state: '',
      language: 'English (US)',
      grade: '',
      avatar: null,
      parentName: '',
      parentEmail: ''
    });
    setSelectedSubjects([]);
    setLikedActivities([]);
    setDislikedActivities([]);
    setGoalSettings({
      weeklyGoal: 'moderate',
      emailReminders: true,
      inAppNotifications: true,
      weeklyProgressSummary: true,
      studyTime: 'No preference'
    });
    setQuizAnswers({});
    setQuizResults(null);
  };

  return {
    currentStep,
    profileData,
    selectedSubjects,
    likedActivities,
    dislikedActivities,
    goalSettings,
    quizAnswers,
    quizResults,
    goToStep,
    nextStep,
    previousStep,
    updateProfileData,
    toggleSubject,
    updateActivities,
    updateGoalSettings,
    saveQuizAnswer,
    saveQuizResults,
    completeOnboarding,
    resetOnboarding
  };
};

