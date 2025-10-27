<!-- 3f6287c5-b72b-49f7-9826-6e5bea3b8533 591d185a-17a3-4ff4-bae9-3360c240855b -->
# Complete First-Time Onboarding Flow - Wireframe Specification

## Overview

This plan covers the **first-time student onboarding** experience after authentication. Users arrive from an existing signup/login flow.

**Entry Point:** User has already authenticated via existing login screen.

## Recommended Architecture

**Wizard (Stages 1-4)** → **Multi-Page Quiz (Stages 5-6)** → **Results & Tour (Stages 7-8)** → **Dashboard**

- **Stages 1-4:** Single-page wizard (Profile, Year Assignment, Subject Selection, Goal Settings)
- **Stages 5-6:** Multi-page quiz experience (Overview → Individual quizzes)
- **Stage 7:** Results & Course Assignment
- **Stage 8:** Dashboard Tour (optional overlay)

---

## Stage 1: Profile Creation (Wizard Step 1 of 4)

### UI Components

**Layout:** Full-screen centered card (max-width: 650px) on `#E8EBFB` background

**Header:**

- Logo at top (60px height)
- H2: "LET'S GET TO KNOW YOU!"
- Body: "Just a few quick questions. This will only take 2 minutes!"

**Progress Indicator:**

- Linear progress bar: 25% filled (Step 1 of 4)
- Height: 8px, background: `#BEEBFF`, fill: `#3FC7FF`
- Step labels below bar (small Outfit text):
  - **"Your Info"** (bold/active) → "Year & Grade" → "Pick Subjects" → "Set Goals"

**Form Card (white background, padding: 40px):**

**Personal Information:**

1. **First Name** (text input)
2. **Last Name** (text input)
3. **Date of Birth** (date picker: three dropdowns side by side)

   - Month (dropdown)
   - Day (dropdown)
   - Year (dropdown)

4. **State** (dropdown with all 50 US states + DC, alphabetical)
5. **Preferred Language** (dropdown)

   - Default: "English (US)"
   - Options: Spanish, French

6. **Current/Most Recent Grade** (dropdown)

   - "6th Grade" through "12th Grade"

**Avatar Section:**

- Label: "CHOOSE YOUR AVATAR (OPTIONAL)"
- Grid of 6-8 default avatar options (circular, 60px each)
- Upload button: "Or upload your own"
- Selected avatar shows checkmark overlay

**Parent/Guardian Section** *(conditional: only shows if DOB indicates under 18)*

- Divider line
- H6: "PARENT OR GUARDIAN INFO"
- Body text: "We'll send progress updates to help support your learning!"
- Fields:
  - Parent/Guardian Name (text input)
  - Parent/Guardian Email (email input)
- Small note: "Optional, but recommended for students under 18"

**Input Styling:**

- All inputs: Border 2px solid `#E8EBFB`, focus: 2px solid `#3FC7FF`
- Padding: 12px 16px
- Font: Outfit, 16px
- Labels: Oswald, 14px uppercase, `#121214`
- Placeholders in light gray

**Privacy Note:**

- Small text at bottom: "We keep your information private and secure. Learn more"
- Color: `#6B7280`, Font: Outfit 12px

**CTA:**

- Full-width button: "CONTINUE"
- Style: Primary (black background, white text)
- Disabled (gray) until all required fields filled
- Hover: slight opacity change

---

## Stage 2: Year Assignment (Wizard Step 2 of 4)

### UI Components

**Same wrapper layout as Stage 1**

**Progress Indicator:**

- 50% filled (Step 2 of 4)
- "Year & Grade" step highlighted

**Content Card (white, centered content, padding: 60px):**

**Visual:**

- Large icon at top: level badge icon or graduation cap (120px, centered)
- Could use existing level-icon.png

**Text:**

- H3: "YOU'RE IN YEAR [X]!" (dynamic based on grade selected)
- Body: "Based on your grade, we've placed you in Year [X]. This determines which courses and content you'll see."

**Mapping Logic:**

- 6th Grade = Year 6
- 7th Grade = Year 7
- 8th Grade = Year 8
- etc.

**Info Box:**

- Background: `#BEEBFF`, padding: 20px, centered
- Icon: lightbulb.svg (small, inline)
- Text: "Don't worry—you can work at your own pace and level up in any subject!"

**Override Option (subtle):**

- Very small text link at bottom of card
- "Think you should be in a different year? Contact us"
- Color: `#6B7280`
- Opens help/contact modal (not a prominent flow)

**CTA Buttons:**

- Primary: "CONTINUE" (full-width)
- Secondary: "← BACK" (text-only link, left-aligned above primary)

---

## Stage 3: Subject Selection (Wizard Step 3 of 4)

### UI Components

**Progress Indicator:**

- 75% filled (Step 3 of 4)
- "Pick Subjects" highlighted

**Header:**

- H3: "WHAT DO YOU WANT TO LEARN?"
- Body: "Pick at least 3 subjects. You can add more anytime!"

**Subject Counter (below header):**

- Style: Pill/badge shape, background `#E8EBFB`
- Text: "[X] of 12 subjects selected" (updates live)
- Minimum 3 required

**Subject Grid:**

- Layout: 3 columns on desktop (1200px+), 2 on tablet (768-1199px), 1 on mobile (<768px)
- Gap: 16px between cards
- Multi-select interaction

**Each Subject Card:**

- Size: ~200px wide × 200px height (flexible based on grid)
- Background: white
- Border: 2px solid `#E8EBFB`
- **Hover:** Subtle lift (translateY(-4px)) + shadow
- **Selected state:**
  - Border: 4px solid [pillar color]
  - Checkmark icon in top-right corner (white circle with brand-blue check)

**Card Contents:**

- Wave header: 100px height (using pillar SVG pattern)
  - `/assets/pillars/think.svg` for Knowledge
  - `/assets/pillars/thrive.svg` for Thrive
  - `/assets/pillars/move.svg` for Move
  - `/assets/pillars/connect.svg` for Connect
- Subject name: Oswald, 22px, centered, padding: 16px
- Pillar tag: Small pill badge (Outfit, 10px uppercase)
  - Background: pillar color, white or black text depending on contrast

**Subjects List (12 total):**

**Knowledge Pillar (Rose `#FE55A4`):**

- Math
- Science
- English/Language Arts
- History
- Computer Science
- Foreign Languages

**Life Skills Pillar (Orange `#FC7E3A`):**

- Personal Finance
- Career Readiness
- Critical Thinking

**Thrive Pillar (Lilac `#6279E5`):**

- Health & Wellness
- Social Skills

**Move Pillar (Lime `#DBFF4D`):**

- Physical Education

**Encouragement Text:**

- Below grid: "Want to explore more? You can change topics next year!"
- Style: Outfit, 14px, `#6B7280`

**CTA Buttons:**

- Primary: "CONTINUE" (enabled when ≥3 selected)
- Secondary: "← BACK"

---

## Stage 4: Goal & Notification Settings (Wizard Step 4 of 4)

### UI Components

**Progress Indicator:**

- 100% filled (Step 4 of 4)
- "Set Goals" highlighted

**Header:**

- H3: "LET'S SET YOUR LEARNING GOALS!"
- Body: "Customize your experience to fit your schedule and preferences."

**Content Card (white, padding: 40px):**

**Section 1: Weekly Study Goal**

- Label: "HOW MUCH DO YOU WANT TO STUDY PER WEEK?"
- Radio button options (large, card-style):
  - "Light - 2-3 hours" (icon: 🌱)
  - "Moderate - 4-6 hours" (icon: ⚡) - **Default selected**
  - "Intensive - 7+ hours" (icon: 🔥)
- Each option is a clickable card with hover state

**Section 2: Notification Preferences**

- Label: "HOW SHOULD WE REMIND YOU?"
- Checkboxes (can select multiple):
  - "Email reminders" (default: checked)
  - "In-app notifications" (default: checked)
  - "Weekly progress summary" (default: checked)
- Each with small description text below

**Section 3: Best Study Time (optional)**

- Label: "WHEN DO YOU USUALLY STUDY? (OPTIONAL)"
- Dropdown: "Morning", "Afternoon", "Evening", "No preference"
- Helper text: "We'll suggest challenges at your preferred time"

**Reassurance Note:**

- Background: `#E8EBFB`, padding: 16px
- Icon: settings icon
- Text: "You can change these settings anytime in your account preferences."

**CTA Buttons:**

- Primary: "START SKILLS CHECK" (full-width)
- Secondary: "← BACK"

---

## Stage 5: Placement Quiz Overview

### UI Components

**Layout:** Full-screen centered card (max-width: 700px)

**Header:**

- Large icon: thunder-icon.svg (80px, animated pulse)
- H2: "TIME FOR A QUICK SKILLS CHECK!"
- Body: "We'll ask you a few questions for each subject to find your perfect starting level. Don't stress—there are no wrong answers!"

**Subject Checklist:**

- List of selected subjects (from Stage 3)
- Each row shows:
  - Subject name (Oswald, 18px)
  - Pillar color accent on left (4px vertical bar)
  - "3 questions" badge
  - Estimated time: "~2 min"
  - Circular checkbox (unchecked, filled when complete)

**What to Expect Box:**

- Background: `#E8EBFB`, padding: 24px
- Lightbulb icon at top
- Bullet points (Outfit, 16px):
  - "3 quick questions per subject"
  - "Takes 2-5 minutes total"
  - "Helps us match you to the right level"
  - "You can always adjust later"

**Total Time Estimate:**

- Prominent display: "[X] MINUTES TOTAL" (calculated: num_subjects × 2)
- Style: Large text, brand-orange color

**CTA:**

- Large button: "START SKILLS CHECK" with thunder icon
- Full-width, prominent

---

## Stage 6: Placement Quiz (Per Subject)

### UI Components

**Layout:** Full-screen, immersive (no distractions)

**Top Bar (fixed at top, white background, shadow):**

- Left: Subject name in OSWALD uppercase: "[SUBJECT] SKILLS CHECK"
- Center: Timer countdown (MM:SS format)
  - 3:00 minutes per subject
  - Color: starts `#3FC7FF`, changes to `#FC7E3A` when < 0:30
  - Pulsing animation when time low
- Right: Close button "×"
  - On click: show confirmation modal
  - Modal: "Are you sure? Your progress will be saved and you can resume later."

**Progress Indicator (centered, below top bar):**

- Visual: Row of step dots (3 dots for 3 questions)
- Current question: Large dot, brand-orange
- Completed: Checkmark in brand-blue circle
- Upcoming: Small gray circle
- Text below: "Question [X] of 3"

**Question Card (centered, white, max-width 800px, padding: 60px):**

- Question text: Outfit, 24px, bold
- Image/diagram if needed (centered, max-width 600px)
- Answer options (4 choices):
  - Style: White background, border 2px `#E8EBFB`
  - Padding: 20px
  - Font: Outfit, 18px
  - **Hover:** Background `#BEEBFF`, smooth transition
  - **Selected:** Border `#3FC7FF` 4px + checkmark icon in circle
  - Letter labels: A, B, C, D (in circle, left side)

**Navigation Buttons (bottom of card):**

- Secondary: "← PREVIOUS QUESTION" (only if not on Q1)
  - Text-only link, left-aligned
- Primary: "NEXT QUESTION" (only enabled when answer selected)
  - Full-width or right-aligned
  - For Q3: Button text changes to "FINISH [SUBJECT]"

**Between Subjects (Transition Screen):**

- Background: `#E8EBFB`
- Large checkmark animation (brand-blue)
- H3: "GREAT JOB!"
- Body: "[SUBJECT] complete. Let's move to the next one!"
- Auto-advance after 2 seconds OR
- Manual button: "NEXT: [NEXT SUBJECT NAME]" with arrow

---

## Stage 7: Course Assignment & Results

### UI Components

**Layout:** Full-screen with celebration feel

**Header Section:**

- Large animated badge/checkmark (could use check_circle.png, 120px)
- H1: "YOU'RE ALL SET!"
- Body: "Here's your personalized learning path based on your results."

**Results Summary:**

- Total subjects: "[X] SUBJECTS READY TO GO!"
- Total credits potential: "EARN UP TO [X] HYPER CREDITS!"

**Subject Cards Grid:**

- Layout: 2 columns on desktop, 1 on mobile
- Gap: 20px

**Each Subject Card:**

- Wave header (100px) with pillar pattern
- Content padding: 24px
- **Subject name** (Oswald, 24px)
- **Level assigned:**
  - Large badge icon
  - Text: "LEVEL [X] - [LABEL]"
  - Labels: "Beginner" (1-2), "Foundation" (3-4), "Intermediate" (5-6), "Advanced" (7-8)
- **Starting topics preview:**
  - "You'll start with:"
  - Bulleted list of 3 topics
  - Style: Outfit, 14px
- **Credits info:**
  - Icon: Hyper credits.png (small)
  - Text: "Earn up to [X] Hyper Credits in this subject!"

**Learning Path Preview Section:**

- H4: "YOUR LEARNING PATH"
- Mini timeline visual (horizontal, simplified ProgressTimeline)
- Shows first 3-4 topics across all subjects
- Text: "You have [X] topics ready to master across [Y] subjects"

**CTA Buttons:**

- Primary (large): "GO TO MY DASHBOARD" with arrow icon →
- Secondary: "View Full Curriculum" (text link)

**Small Celebration Animation:**

- Confetti or sparkles briefly on page load
- Subtle, not overwhelming

---

## Stage 8: Dashboard Tour (First-Time Welcome)

### Approach: Optional Guided Tour

User clicks "GO TO MY DASHBOARD" → Lands on main dashboard → Optional tour triggers

**Welcome Modal (overlay):**

- Backdrop: Semi-transparent black (40% opacity)
- Modal card: White, centered, max-width 500px, padding: 40px
- Icon: hello-icon.svg (60px)
- H3: "WELCOME TO YOUR DASHBOARD!"
- Body: "Want a quick tour? We'll show you around in 30 seconds."
- Two options:
  - Primary button: "SHOW ME AROUND"
  - Text link: "I'll explore myself"

**If Tour Accepted:**

Uses coach marks / tooltips (Popper-style positioning)

- Style: Light background `#BEEBFF`, padding: 20px
- Arrow pointer to target element
- Shadow for depth
- Max-width: 300px

**Tour Steps (6 total):**

1. **Today's Goals** (point to top goal cards)

   - Text: "Track your daily progress across all 4 pillars: Knowledge, Physical Health, Life Skills, and Mental Health."
   - Button: "NEXT"

2. **Level Progress** (point to level card in overview)

   - Text: "Level up as you master topics! Each subject has its own level progression."
   - Button: "NEXT"

3. **Jump Right In / Challenges** (point to challenge cards)

   - Text: "Start here! These are your active lessons and activities. Click any card to begin."
   - Button: "NEXT"

4. **Mastery Progress Chart** (point to chart)

   - Text: "See how you're advancing through your curriculum over time."
   - Button: "NEXT"

5. **Sidebar** (point to left sidebar)

   - Text: "Access your tutors, check achievements, and chat with your AI helper anytime."
   - Button: "NEXT"

6. **Top Navigation** (point to top nav tabs)

   - Text: "Switch between your dashboard, challenges, learning progress, squad, and rewards."
   - Button: "GOT IT!"

**Tour Controls:**

- "Skip tour" link in bottom-left of each tooltip
- Step indicator: "Step [X] of 6" in small text
- Keyboard navigation: ESC to close, Arrow keys to navigate

---

## Onboarding Complete

### After Tour (or Skip)

**Success Notification (toast/banner):**

- Position: Top-center of dashboard
- Background: `#DBFF4D` (lime)
- Icon: thunder-icon.svg
- Text: "You earned 50 Hyper Credits for completing onboarding!"
- Dismiss button: "×"
- Auto-dismiss after 5 seconds

**Dashboard State:**

- First available challenge highlighted with subtle pulse animation
- Small "START HERE" indicator/arrow
- OR auto-scroll to challenges section

**First-Week Helper Elements:**

- Small "NEW" badges on key features (3-5 days, then fade)
- Empty state helper text: "Complete your first challenge to start earning badges!"
- Sidebar achievement section shows "Welcome" badge unlocked

---

## Yearly Re-Enrollment Flow (Brief Overview)

For **returning students**, use a lighter flow:

1. **Welcome Back Screen**

   - "Welcome back, [Name]!"
   - Summary of last year's progress

2. **Year Confirmation**

   - Auto-increment year, allow manual adjustment

3. **Update Subject Selection**

   - Pre-selected from last year, can add/remove

4. **Optional Skills Check**

   - "Want to retake the placement quiz for new subjects?"
   - Skip option prominent

5. **Dashboard**

   - No tour, just return to main experience

---

## Design System Reference

### Colors

- **Primary Black:** `#121214`
- **Surface:** `#E8EBFB`
- **Knowledge (Rose):** `#FE55A4`
- **Thrive (Lilac):** `#6279E5`
- **Move (Lime):** `#DBFF4D`
- **Life Skills (Orange):** `#FC7E3A`
- **Progress (Blue):** `#3FC7FF`
- **Light variants:** Add "-light" suffix (e.g., `#BEEBFF` for blue-light)

### Typography

- **Headings:** Oswald, uppercase, bold (700)
  - H1: 72px, H2: 60px, H3: 44px, H4: 36px, H5: 28px, H6: 22px
- **Body:** Outfit, normal case, regular (400) or medium (500)
  - Base: 16px, Small: 14px, Large: 18px
- **CTAs:** Oswald, uppercase, medium (500)

### Component Patterns

- **Cards:** White background, sharp corners (no border-radius), subtle shadow on hover
- **Buttons:** Full-width in forms, auto-width in grids
- **Inputs:** 2px border, 12-16px padding, focus state with blue border
- **Wave headers:** 100px height on subject/challenge cards
- **Icons:** From existing asset library

### Interactions

- **Hover:** Opacity 0.8-0.9 or subtle color shift
- **Transitions:** 200-300ms ease
- **Loading:** Skeleton screens or spinner (existing patterns)
- **Animations:** Subtle, purposeful (confetti, pulse, fade-in)

---

## Copy Voice & Tone

### Characteristics

- **Energetic & encouraging** - Make learning exciting
- **Direct & action-oriented** - Clear CTAs, no jargon
- **Gamified language** - Use "level up", "earn credits", "master"
- **Friendly second-person** - "you", "your" (not "students" or "users")
- **Positive reinforcement** - Celebrate progress, no negative language
- **Exclamation points** - Use sparingly for emphasis

### Example Phrases

- "Let's get you set up!"
- "You're crushing it!"
- "Great choice!"
- "Almost there!"
- "Ready to level up?"
- "Nice work!"
- "You've got this!"

---

## Technical Implementation

### State Management

- Use React Context or state management library (Redux/Zustand)
- Store onboarding progress in:
  - **LocalStorage** (for persistence across sessions)
  - **Backend API** (for recovery and analytics)
- Track:
  - Current step
  - Form data
  - Quiz answers
  - Completion status

### Validation

- **Real-time validation** on form fields (onChange)
- **Error messages** in brand voice:
  - "Oops! Please enter your first name"
  - "Pick at least 3 subjects to continue"
- **Prevent progression** until requirements met (disabled buttons)
- **Accessibility:** Screen reader announcements for errors

### Responsive Design

- **Mobile-first approach**
- **Breakpoints:**
  - Mobile: < 768px (stack layouts, 1 column)
  - Tablet: 768-1199px (2 columns)
  - Desktop: ≥ 1200px (3 columns for grids)
- **Touch targets:** Minimum 44×44px
- **Font scaling:** Reduce heading sizes on mobile

### Accessibility

- **Keyboard navigation:** Tab through all interactive elements
- **ARIA labels:** All buttons, inputs, custom controls
- **Focus indicators:** Visible focus rings (blue outline)
- **Screen readers:** Announce progress updates, errors, success states
- **Color contrast:** WCAG AA compliance minimum
- **Alt text:** All images and icons

### Components to Create

1. **Wizard:**

   - `OnboardingWizard.jsx` - Container with step management
   - `OnboardingProgress.jsx` - Progress bar component
   - `ProfileSetupStep.jsx` - Stage 1
   - `YearAssignmentStep.jsx` - Stage 2
   - `SubjectSelectionStep.jsx` - Stage 3
   - `GoalSettingsStep.jsx` - Stage 4
   - `SubjectCard.jsx` - Reusable subject selection card

2. **Quiz:**

   - `PlacementQuizOverview.jsx` - Stage 5
   - `PlacementQuiz.jsx` - Stage 6 (quiz UI)
   - `QuizQuestion.jsx` - Individual question component
   - `QuizTimer.jsx` - Countdown timer
   - `QuizProgressDots.jsx` - Step indicator

3. **Results:**

   - `CourseAssignmentResults.jsx` - Stage 7
   - `SubjectResultCard.jsx` - Result card for each subject

4. **Tour:**

   - `DashboardTour.jsx` - Tooltip tour overlay
   - `TourTooltip.jsx` - Individual tooltip component
   - `WelcomeModal.jsx` - Initial tour prompt

5. **Utilities:**

   - `useOnboardingState.js` - Custom hook for state
   - `onboardingValidation.js` - Form validation logic
   - `gradeToYearMapping.js` - Grade to Year conversion

### Routing

```
/onboarding - Wizard (steps 1-4) - Entry point after login
/onboarding/quiz - Quiz overview (stage 5)
/onboarding/quiz/:subject - Individual quiz pages (stage 6)
/onboarding/results - Results page (stage 7)
/dashboard?tour=true - Dashboard with tour trigger (stage 8)
```

### API Endpoints (to create/integrate)

```
POST /api/onboarding/profile - Save profile data
POST /api/onboarding/subjects - Save subject selection
POST /api/onboarding/goals - Save goal/notification preferences
POST /api/onboarding/quiz/submit - Submit quiz answers
GET /api/onboarding/results - Get placement results
POST /api/onboarding/complete - Mark onboarding complete
```

### To-dos

- [ ] Create OnboardingWizard and step components (AccountSetup, YearAssignment, SubjectSelection)
- [ ] Build PlacementQuiz components with timer, progress, and question UI
- [ ] Implement CourseAssignmentResults and DashboardTour components
- [ ] Set up routing and state management for onboarding flow
- [ ] Add form validation, error handling, and responsive design testing