import { useState } from 'react';
import OnboardingModal from './onboarding/OnboardingModal';

export default function FirstTimeStudentDashboard({ assignedLevel, onSetupComplete }) {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleComplete = (profileData) => {
    console.log('Profile setup complete:', profileData);
    setShowOnboarding(false);
    onSetupComplete(profileData);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '60px 40px', 
        textAlign: 'center',
        borderBottom: '2px solid #e5e7eb'
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          marginBottom: '24px',
          fontWeight: 'bold',
          color: '#121214'
        }}>
          Welcome to Hyper School!
        </h1>
        <div style={{ 
          display: 'inline-block',
          backgroundColor: '#DBFF4D',
          padding: '20px 40px',
          marginTop: '20px'
        }}>
          <div style={{ 
            fontSize: '14px', 
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Your Level
          </div>
          <div style={{ 
            fontSize: '64px', 
            fontWeight: 'bold',
            lineHeight: 1
          }}>
            {assignedLevel}
          </div>
        </div>
      </div>

      {/* Empty State Content (Placeholder) */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '60px 40px',
        opacity: 0.3
      }}>
        {/* Placeholder Challenge Cards */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ 
            fontSize: '24px', 
            marginBottom: '24px',
            fontWeight: 'bold'
          }}>
            Your Challenges
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
            gap: '24px' 
          }}>
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  backgroundColor: 'white',
                  padding: '32px',
                  border: '2px solid #e5e7eb',
                  minHeight: '200px'
                }}
              >
                <div style={{ 
                  height: '20px', 
                  backgroundColor: '#e5e7eb', 
                  marginBottom: '16px',
                  width: '60%'
                }}></div>
                <div style={{ 
                  height: '40px', 
                  backgroundColor: '#e5e7eb', 
                  marginBottom: '16px'
                }}></div>
                <div style={{ 
                  height: '60px', 
                  backgroundColor: '#e5e7eb'
                }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder Progress Chart */}
        <div>
          <h2 style={{ 
            fontSize: '24px', 
            marginBottom: '24px',
            fontWeight: 'bold'
          }}>
            Your Progress
          </h2>
          <div style={{
            backgroundColor: 'white',
            padding: '60px',
            border: '2px solid #e5e7eb',
            minHeight: '300px'
          }}>
            <div style={{ 
              height: '200px', 
              backgroundColor: '#e5e7eb'
            }}></div>
          </div>
        </div>
      </div>

      {/* Onboarding Modal */}
      <OnboardingModal
        isOpen={showOnboarding}
        assignedLevel={assignedLevel}
        onComplete={handleComplete}
      />
    </div>
  );
}

