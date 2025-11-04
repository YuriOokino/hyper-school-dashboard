# First-Time Student Onboarding Implementation Plan

---

## 🎯 PROJECT CONTEXT

### What's Been Completed:
- ✅ Placement Test component (`PlacementTest.jsx`)
  - 20-minute timer, 4 sections, 32 questions
  - Skip/Next buttons, smart navigation
  - Section locking after completion
  - Results page showing subject feedback + level (capped at Level 4)
  - "Get Started" button (currently links to `/`)

### Design System Notes:
- Flat, clean aesthetic
- NO hover effects, shadows, gradients, rounded borders (except circular icons)
- Sharp, square corners
- Brand black text (`text-gray-900`) by default
- Brand colors: Lime (#DBFF4D), Pink (#FE55A4), Blue (#6279E5), Orange (#FC7E3A)

### Mastery Level System:
- Placement assigns Level 1-4 max
- Levels 5-10 earned through mastery work
- Questions from grade-level tests (grades 6-12)
- Level based on performance, not grade

---

## 🎯 WHAT NEEDS TO BE BUILT

### 1. First-Time Dashboard View
- New component: `FirstTimeStudentDashboard.jsx`
- Shows assigned level prominently
- Empty state with placeholder content
- Auto-triggers onboarding modal

### 2. Onboarding Modal (3-Step Sequence)
- New component: `OnboardingModal.jsx`
- Cannot be dismissed until complete
- Progress indicator (Step X of 3)

**Steps:**
- **Step 1**: Profile Picture (upload or avatar picker)
- **Step 2**: Bio (textarea, 150 char max)
- **Step 3**: Squad Assignment (pick from list or auto-assign)

### 3. Update Placement Test
- Change "Go to Your Dashboard" button href from `/` to navigate with level data
- Pass `assignedLevel` to dashboard

### 4. Routing Logic
- Detect first-time user (check if profile complete)
- Show `FirstTimeStudentDashboard` vs regular `DashboardContent`

---

## 📁 FILE STRUCTURE

```
src/
  components/
    FirstTimeStudentDashboard.jsx    [CREATE]
    OnboardingModal.jsx               [CREATE]
    DashboardContent.jsx              [EXISTS - current dashboard]
    PlacementTest.jsx                 [UPDATE - CTA navigation]
  StudentDashboard.jsx                [UPDATE - routing logic]
```

---

## 🔧 IMPLEMENTATION STEPS

### Step 1: Create OnboardingModal Component

**Location:** `src/components/OnboardingModal.jsx`

**Props:**
- `isOpen` (boolean)
- `assignedLevel` (number 1-4)
- `onComplete` (callback when all steps done)

**State:**
- `currentStep` (1, 2, or 3)
- `profilePic` (url or null)
- `bio` (string)
- `selectedSquad` (squad id or null)

**UI Specs:**
- Semi-transparent backdrop (`rgba(0,0,0,0.5)`)
- White modal box, centered
- Progress text: "Step 1 of 3", "Step 2 of 3", "Step 3 of 3"
- No close button (can't dismiss)
- "Skip for now" links on Steps 1 & 2 (optional)
- Back/Next buttons (black buttons, full design system)

**Step 1 Content:**
- Title: "Let's set up your profile!"
- Upload area OR avatar picker grid
- Sample avatars: Use placeholder images or emoji-based avatars
- "Next" button (enabled when pic selected or skipped)

**Step 2 Content:**
- Title: "Tell us about yourself"
- Textarea with placeholder: "What do you love learning? What are your goals?"
- Character counter: "X/150"
- "Back" | "Next" buttons

**Step 3 Content:**
- Title: "Join your squad!"
- Show 3-4 squad cards:
  - Squad name
  - Member count
  - Brief description
  - Selectable (radio style)
- OR: "Auto-assign me" button option
- "Back" | "Complete Setup" buttons

**Completion Screen:**
- Title: "You're all set! 🎉"
- Show assigned level badge
- "Start Exploring" button → calls `onComplete()`

---

### Step 2: Create FirstTimeStudentDashboard Component

**Location:** `src/components/FirstTimeStudentDashboard.jsx`

**Props:**
- `assignedLevel` (number 1-4)
- `onSetupComplete` (callback)

**State:**
- `showOnboarding` (boolean, default true)

**UI Layout:**
```
┌─────────────────────────────────────┐
│  Welcome, [Name]! You're Level [X]  │  ← Hero section
├─────────────────────────────────────┤
│  [Empty challenge cards - greyed]   │  ← Placeholder content
│  [Empty progress chart]             │
└─────────────────────────────────────┘
    ↑
    OnboardingModal appears on top
```

**Implementation:**
```jsx
import OnboardingModal from './OnboardingModal';

const FirstTimeStudentDashboard = ({ assignedLevel, onSetupComplete }) => {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleComplete = (profileData) => {
    // Save profile data (API call or state update)
    setShowOnboarding(false);
    onSetupComplete();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white p-8 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome, [Student Name]!
        </h1>
        <div className="inline-block bg-lime px-6 py-3">
          <span className="text-2xl font-bold">Level {assignedLevel}</span>
        </div>
      </div>

      {/* Empty State Content */}
      <div className="max-w-6xl mx-auto p-8 opacity-50">
        {/* Placeholder cards */}
      </div>

      {/* Onboarding Modal */}
      <OnboardingModal
        isOpen={showOnboarding}
        assignedLevel={assignedLevel}
        onComplete={handleComplete}
      />
    </div>
  );
};
```

---

### Step 3: Update PlacementTest.jsx

**Current code (line ~785):**
```jsx
<a href="/" ...>
  Go to Your Dashboard
</a>
```

**Change to:**
```jsx
import { useNavigate } from 'react-router-dom';

// Inside component:
const navigate = useNavigate();

// Update button:
<button
  onClick={() => navigate('/', { state: { assignedLevel, isFirstTime: true }})}
  style={{...}}
>
  Get Started
</button>
```

---

### Step 4: Update StudentDashboard.jsx Routing

**Add logic to detect first-time user:**

```jsx
import { useLocation } from 'react-router-dom';
import FirstTimeStudentDashboard from './components/FirstTimeStudentDashboard';

const StudentDashboard = () => {
  const location = useLocation();
  const { assignedLevel, isFirstTime } = location.state || {};
  
  // In production, check actual user profile completeness from API
  const showFirstTimeView = isFirstTime || !userProfileComplete;

  if (showFirstTimeView) {
    return (
      <FirstTimeStudentDashboard 
        assignedLevel={assignedLevel || 1}
        onSetupComplete={() => {
          // Transition to normal dashboard
          setIsFirstTime(false);
        }}
      />
    );
  }

  // Normal dashboard
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main>...</main>
    </div>
  );
};
```

---

## 🎨 DESIGN NOTES

### Empty State Cards (placeholder while modal open):
- Grey out with opacity: 0.5
- Show structure but inactive
- Cards for: Challenges, Progress Chart, Squad

### Level Badge Display:
- Large, prominent
- Lime background (#DBFF4D)
- Black text
- No rounded corners (square)

### Modal Styling:
- White background
- Black borders (2px solid)
- No shadows or rounded corners
- Black buttons with white text
- Lime for selected/active states

### Squad Cards:
- Similar to ChallengeCard component
- Selectable state with lime border
- Square corners

---

## 📝 SAMPLE SQUAD DATA (for prototype)

```javascript
const SAMPLE_SQUADS = [
  { id: 1, name: 'Phoenix Squad', members: 12, description: 'Creative thinkers and problem solvers' },
  { id: 2, name: 'Atlas Squad', members: 15, description: 'Science and math enthusiasts' },
  { id: 3, name: 'Artemis Squad', members: 10, description: 'Literature and arts lovers' },
  { id: 4, name: 'Titan Squad', members: 14, description: 'Tech innovators and builders' }
];
```

---

## ✅ COMPLETION CHECKLIST

- [ ] Create `OnboardingModal.jsx` with 3 steps
- [ ] Create `FirstTimeStudentDashboard.jsx`
- [ ] Update `PlacementTest.jsx` - change CTA to "Get Started" with navigation
- [ ] Update `StudentDashboard.jsx` - add first-time routing logic
- [ ] Test flow: Placement → Results → Get Started → Dashboard → Modal → Complete
- [ ] Push to repo

---

## 🚀 PROMPT FOR NEW CHAT

Use this to brief the AI:

> "Continue implementation of first-time student onboarding for Hyper School dashboard. Review the attached implementation plan. We need to create:
> 1. OnboardingModal component (3-step profile setup)
> 2. FirstTimeStudentDashboard component
> 3. Update PlacementTest navigation
> 4. Update StudentDashboard routing
> 
> Follow the flat design system (no shadows/hover effects/rounded corners). The placement test already assigns Level 1-4. Start with Step 1: Create OnboardingModal component."

**Attach this entire document to the new chat.**

---

## 📌 USER FLOW SUMMARY

1. Student completes Placement Test
2. Views Results page (Level 1-4 assigned)
3. Clicks "Get Started" button
4. Lands on First-Time Dashboard (level displayed, modal auto-opens)
5. Completes modal: Profile Pic → Bio → Squad
6. Modal shows "You're all set! 🎉"
7. Clicks "Start Exploring"
8. Dashboard becomes interactive, onboarding complete
9. Future visits show normal dashboard (no modal)

