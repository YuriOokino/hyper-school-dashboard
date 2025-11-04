import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import StudentDashboard from './StudentDashboard.jsx';
import FirstTimeStudentDashboard from './components/FirstTimeStudentDashboard.jsx';
import OnboardingWizard from './components/onboarding/OnboardingWizard.jsx';
import PlacementQuizOverview from './components/onboarding/PlacementQuizOverview.jsx';
import PlacementQuiz from './components/onboarding/PlacementQuiz.jsx';
import QuizTransition from './components/onboarding/QuizTransition.jsx';
import CourseAssignmentResults from './components/onboarding/CourseAssignmentResults.jsx';
import PlacementTest from './components/PlacementTest.jsx';

// Wrapper to handle state from placement test
function FirstTimeDashboardRoute() {
  const location = useLocation();
  const assignedLevel = location.state?.assignedLevel || 3; // Default to 3 for dev testing
  
  return (
    <FirstTimeStudentDashboard 
      assignedLevel={assignedLevel} 
      onSetupComplete={() => window.location.href = '/dashboard'} 
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Onboarding Routes */}
          <Route path="/onboarding" element={<OnboardingWizard />} />
          <Route path="/onboarding/quiz" element={<PlacementQuizOverview />} />
          <Route path="/onboarding/quiz/:subject" element={<PlacementQuiz />} />
          <Route path="/onboarding/quiz/transition" element={<QuizTransition />} />
          <Route path="/onboarding/results" element={<CourseAssignmentResults />} />
          
          {/* Dashboard Route */}
          <Route path="/dashboard" element={<StudentDashboard />} />
          
          {/* Dev Route: First-Time Dashboard with Onboarding */}
          <Route path="/dashboard-first-time" element={<FirstTimeDashboardRoute />} />
          
          {/* Placement Test Preview Route */}
          <Route path="/placement-test" element={<PlacementTest />} />
          
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
