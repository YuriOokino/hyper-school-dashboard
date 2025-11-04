import { useState } from 'react';

// Sample squad data for prototype
const SAMPLE_SQUADS = [
  { id: 1, name: 'Phoenix Squad', members: 12, description: 'Creative thinkers and problem solvers' },
  { id: 2, name: 'Atlas Squad', members: 15, description: 'Science and math enthusiasts' },
  { id: 3, name: 'Artemis Squad', members: 10, description: 'Literature and arts lovers' },
  { id: 4, name: 'Titan Squad', members: 14, description: 'Tech innovators and builders' }
];

// Default avatar options (emoji-based for prototype)
const DEFAULT_AVATARS = [
  { id: 1, emoji: '🦊', bg: '#FE55A4' },
  { id: 2, emoji: '🐼', bg: '#6279E5' },
  { id: 3, emoji: '🦁', bg: '#FC7E3A' },
  { id: 4, emoji: '🐸', bg: '#DBFF4D' },
  { id: 5, emoji: '🦄', bg: '#FE55A4' },
  { id: 6, emoji: '🐨', bg: '#6279E5' },
  { id: 7, emoji: '🦋', bg: '#FC7E3A' },
  { id: 8, emoji: '🐙', bg: '#DBFF4D' }
];

export default function OnboardingModal({ isOpen, assignedLevel, onComplete }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePic, setProfilePic] = useState(null);
  const [bio, setBio] = useState('');
  const [selectedSquad, setSelectedSquad] = useState(null);

  if (!isOpen) return null;

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Step 3 completed - show completion screen
      setCurrentStep(4);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    // Save to localStorage for prototype
    const profileData = {
      profilePic,
      bio,
      selectedSquad,
      assignedLevel,
      onboardingComplete: true,
      completedAt: new Date().toISOString()
    };
    
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    onComplete(profileData);
  };

  const handleSkip = () => {
    if (currentStep === 1) {
      setProfilePic(null);
      handleNext();
    } else if (currentStep === 2) {
      setBio('');
      handleNext();
    }
  };

  const canProceed = () => {
    if (currentStep === 3) {
      return selectedSquad !== null;
    }
    return true; // Steps 1 and 2 are optional (can skip)
  };

  // Completion Screen (Step 4)
  if (currentStep === 4) {
    return (
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '60px 40px',
          maxWidth: '500px',
          width: '90%',
          border: '2px solid #121214',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>🎉</div>
          <h2 style={{ fontSize: '32px', marginBottom: '16px', fontWeight: 'bold' }}>
            You're all set!
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '30px', color: '#4b5563' }}>
            Time to start your learning journey!
          </p>
          
          <div style={{
            backgroundColor: '#DBFF4D',
            padding: '20px',
            marginBottom: '30px'
          }}>
            <div style={{ fontSize: '14px', marginBottom: '8px', textTransform: 'uppercase' }}>
              Your Starting Level
            </div>
            <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
              {assignedLevel}
            </div>
          </div>

          <button
            onClick={handleComplete}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: '#121214',
              color: 'white',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer',
              textTransform: 'uppercase'
            }}
          >
            Start Exploring
          </button>
        </div>
      </div>
    );
  }

  // Main Modal Steps 1-3
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '40px',
        maxWidth: '600px',
        width: '90%',
        border: '2px solid #121214',
        maxHeight: '90vh',
        overflow: 'auto'
      }}>
        {/* Progress */}
        <div style={{ 
          fontSize: '14px', 
          color: '#6b7280', 
          marginBottom: '24px',
          textTransform: 'uppercase'
        }}>
          Step {currentStep} of 3
        </div>

        {/* Step 1: Profile Picture */}
        {currentStep === 1 && (
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '12px', fontWeight: 'bold' }}>
              Let's set up your profile!
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '30px', color: '#4b5563' }}>
              Choose an avatar that represents you
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '16px',
              marginBottom: '20px'
            }}>
              {DEFAULT_AVATARS.map((avatar) => (
                <button
                  key={avatar.id}
                  onClick={() => setProfilePic(avatar)}
                  style={{
                    padding: '20px',
                    backgroundColor: profilePic?.id === avatar.id ? avatar.bg : '#f3f4f6',
                    border: profilePic?.id === avatar.id ? '3px solid #121214' : '2px solid #e5e7eb',
                    cursor: 'pointer',
                    fontSize: '48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s'
                  }}
                >
                  {avatar.emoji}
                </button>
              ))}
            </div>

            <button
              onClick={handleSkip}
              style={{
                background: 'none',
                border: 'none',
                color: '#6b7280',
                fontSize: '14px',
                cursor: 'pointer',
                textDecoration: 'underline',
                marginBottom: '20px'
              }}
            >
              Skip for now
            </button>
          </div>
        )}

        {/* Step 2: Bio */}
        {currentStep === 2 && (
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '12px', fontWeight: 'bold' }}>
              Tell us about yourself
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '30px', color: '#4b5563' }}>
              What do you love learning? What are your goals?
            </p>

            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value.slice(0, 150))}
              placeholder="I love learning about..."
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '16px',
                border: '2px solid #e5e7eb',
                fontSize: '16px',
                fontFamily: 'Outfit, sans-serif',
                marginBottom: '8px',
                resize: 'vertical'
              }}
            />
            <div style={{ 
              fontSize: '14px', 
              color: '#6b7280', 
              marginBottom: '20px',
              textAlign: 'right'
            }}>
              {bio.length}/150
            </div>

            <button
              onClick={handleSkip}
              style={{
                background: 'none',
                border: 'none',
                color: '#6b7280',
                fontSize: '14px',
                cursor: 'pointer',
                textDecoration: 'underline',
                marginBottom: '20px'
              }}
            >
              Skip for now
            </button>
          </div>
        )}

        {/* Step 3: Squad Selection */}
        {currentStep === 3 && (
          <div>
            <h2 style={{ fontSize: '28px', marginBottom: '12px', fontWeight: 'bold' }}>
              Join your squad!
            </h2>
            <p style={{ fontSize: '16px', marginBottom: '30px', color: '#4b5563' }}>
              Connect with students who share your interests
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' }}>
              {SAMPLE_SQUADS.map((squad) => (
                <button
                  key={squad.id}
                  onClick={() => setSelectedSquad(squad)}
                  style={{
                    padding: '20px',
                    backgroundColor: 'white',
                    border: selectedSquad?.id === squad.id ? '3px solid #DBFF4D' : '2px solid #e5e7eb',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ 
                    fontSize: '18px', 
                    fontWeight: 'bold', 
                    marginBottom: '8px',
                    color: '#121214'
                  }}>
                    {squad.name}
                  </div>
                  <div style={{ 
                    fontSize: '14px', 
                    color: '#6b7280',
                    marginBottom: '4px'
                  }}>
                    {squad.description}
                  </div>
                  <div style={{ fontSize: '12px', color: '#6b7280' }}>
                    {squad.members} members
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                // Auto-assign to random squad
                const randomSquad = SAMPLE_SQUADS[Math.floor(Math.random() * SAMPLE_SQUADS.length)];
                setSelectedSquad(randomSquad);
                setTimeout(handleNext, 100);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#6b7280',
                fontSize: '14px',
                cursor: 'pointer',
                textDecoration: 'underline',
                marginBottom: '20px'
              }}
            >
              Auto-assign me
            </button>
          </div>
        )}

        {/* Navigation Buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          paddingTop: '20px', 
          borderTop: '2px solid #e5e7eb' 
        }}>
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            style={{
              padding: '14px 40px',
              border: '2px solid #121214',
              backgroundColor: 'white',
              cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
              opacity: currentStep === 1 ? 0.5 : 1,
              fontSize: '14px',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}
          >
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            style={{
              padding: '14px 40px',
              backgroundColor: canProceed() ? '#121214' : '#e5e7eb',
              color: canProceed() ? 'white' : '#9ca3af',
              border: 'none',
              cursor: canProceed() ? 'pointer' : 'not-allowed',
              fontSize: '14px',
              textTransform: 'uppercase',
              fontWeight: 'bold'
            }}
          >
            {currentStep === 3 ? 'Complete Setup' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}

