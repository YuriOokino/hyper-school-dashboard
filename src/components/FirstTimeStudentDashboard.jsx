import { useState } from 'react';
import GuidedOnboarding from './onboarding/GuidedOnboarding';
import OnboardingSidebar from './OnboardingSidebar';
import TopNavigation from './TopNavigation';
import SquadContent from './SquadContent';

export default function FirstTimeStudentDashboard({ assignedLevel, onSetupComplete }) {
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activePage, setActivePage] = useState('overview');
  const [activeTab, setActiveTab] = useState('knowledge');
  const [isAccountPanelOpen, setIsAccountPanelOpen] = useState(false);
  const [selectedChatFromSidebar, setSelectedChatFromSidebar] = useState(null);

  const handleComplete = (profileData) => {
    console.log('Profile setup complete:', profileData);
    setShowOnboarding(false);
    setIsAccountPanelOpen(false); // Close account panel
    onSetupComplete(profileData);
  };

  const handleOpenAccountPanel = () => {
    setIsAccountPanelOpen(true);
  };

  const handleCloseAccountPanel = () => {
    setIsAccountPanelOpen(false);
  };

  const handleNavigateToSquad = () => {
    setActivePage('squad');
  };

  const handleOpenMainHallChat = () => {
    // Just close the onboarding modal, user stays on squad page
    console.log('Opening Main Hall chat');
    setShowOnboarding(false);
  };

  return (
    <div className="h-screen flex overflow-hidden" style={{ backgroundColor: '#E8EBFB' }}>
      {/* Onboarding Sidebar */}
      <OnboardingSidebar 
        assignedLevel={assignedLevel}
        isAccountPanelOpen={isAccountPanelOpen}
        onAccountOpenChange={setIsAccountPanelOpen}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 h-screen">
        {/* Top Navigation */}
        <div className="flex-shrink-0">
          <TopNavigation 
            activePage={activePage} 
            setActivePage={setActivePage} 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            hyperCredits={0}
          />
        </div>
        
        {/* Main Content Area - Empty Dashboard */}
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            {activePage === 'overview' && (
              <>
                {/* Daily Goals - Empty State */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase font-['Oswald']">DAILY GOALS</h2>
                  <div className="grid grid-cols-5 gap-4 h-64">
                    {/* Think */}
                    <div 
                      className="bg-white p-6 relative overflow-hidden h-full"
                      style={{ opacity: 0.5 }}
                    >
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-black uppercase font-['Oswald'] mb-4">THINK</h3>
                        <div className="text-6xl font-bold text-gray-300">0%</div>
                      </div>
                    </div>

                    {/* Move */}
                    <div 
                      className="bg-white p-6 relative overflow-hidden h-full"
                      style={{ opacity: 0.5 }}
                    >
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-black uppercase font-['Oswald'] mb-4">MOVE</h3>
                        <div className="text-6xl font-bold text-gray-300">0%</div>
                      </div>
                    </div>

                    {/* Connect */}
                    <div 
                      className="bg-white p-6 relative overflow-hidden h-full"
                      style={{ opacity: 0.5 }}
                    >
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-black uppercase font-['Oswald'] mb-4">CONNECT</h3>
                        <div className="text-6xl font-bold text-gray-300">0%</div>
                      </div>
                    </div>

                    {/* Thrive */}
                    <div 
                      className="bg-white p-6 relative overflow-hidden h-full"
                      style={{ opacity: 0.5 }}
                    >
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-black uppercase font-['Oswald'] mb-4">THRIVE</h3>
                        <div className="text-6xl font-bold text-gray-300">0%</div>
                      </div>
                    </div>

                    {/* Mood Tracker - Empty */}
                    <div 
                      className="bg-white p-6 relative overflow-hidden h-full flex items-center justify-center"
                      style={{ opacity: 0.5 }}
                    >
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-400 uppercase font-['Oswald']">MOOD</h3>
                        <div className="text-4xl mt-2">😐</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mastery Section - Empty State */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase font-['Oswald']">MASTERY</h2>
                  <div className="grid grid-cols-4 gap-4">
                    {['Math', 'Science', 'English', 'History'].map((subject) => (
                      <div 
                        key={subject}
                        className="bg-white p-6"
                        style={{ opacity: 0.5 }}
                      >
                        <h3 className="text-lg font-bold text-gray-400 mb-4 uppercase">{subject}</h3>
                        <div className="h-32 bg-gray-100 flex items-center justify-center">
                          <div className="text-gray-300 text-sm">No data yet</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming Challenges - Empty State */}
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 uppercase font-['Oswald']">UPCOMING CHALLENGES</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((i) => (
                      <div 
                        key={i}
                        className="bg-white p-6"
                        style={{ opacity: 0.5 }}
                      >
                        <div className="h-20 bg-gray-100 mb-4"></div>
                        <div className="h-4 bg-gray-100 mb-2 w-3/4"></div>
                        <div className="h-4 bg-gray-100 w-1/2"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activePage === 'squad' && (
              <SquadContent 
                selectedChatFromSidebar={selectedChatFromSidebar}
                setSelectedChatFromSidebar={setSelectedChatFromSidebar}
              />
            )}
          </div>
        </main>
      </div>

      {/* Guided Onboarding Tour */}
      <GuidedOnboarding
        isOpen={showOnboarding}
        assignedLevel={assignedLevel}
        onComplete={handleComplete}
        onOpenAccountPanel={handleOpenAccountPanel}
        onCloseAccountPanel={handleCloseAccountPanel}
        isAccountPanelOpen={isAccountPanelOpen}
        onNavigateToSquad={handleNavigateToSquad}
        onOpenMainHallChat={handleOpenMainHallChat}
      />
    </div>
  );
}
