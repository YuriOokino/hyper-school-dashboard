import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StudentDashboard from './StudentDashboard.jsx';
import OnboardingWizard from './components/onboarding/OnboardingWizard.jsx';
import PlacementQuizOverview from './components/onboarding/PlacementQuizOverview.jsx';
import PlacementQuiz from './components/onboarding/PlacementQuiz.jsx';
import QuizTransition from './components/onboarding/QuizTransition.jsx';
import CourseAssignmentResults from './components/onboarding/CourseAssignmentResults.jsx';

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
          
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
