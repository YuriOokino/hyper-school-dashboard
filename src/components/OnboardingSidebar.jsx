import { useState } from 'react';

export default function OnboardingSidebar({ 
  assignedLevel,
  isAccountPanelOpen,
  onAccountOpenChange
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="relative">
      <aside className={`bg-black flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`} style={{ minHeight: '100vh', maxHeight: '100vh' }}>
        <div className="flex-1 overflow-y-auto">
          {/* Toggle Button */}
          <div className="flex justify-end p-2">
            <button 
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="p-2 hover:bg-gray-800 transition-colors"
            >
              <svg className={`w-4 h-4 text-white transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
          
          {/* Profile Picture - Empty */}
          <div className={`flex justify-center pt-4 pb-4`} id="profile-picture-target">
            <div className="relative group">
              <div className={`${isCollapsed ? 'w-10 h-10' : 'w-32 h-32'} rounded-full border-[1.5px] border-white overflow-hidden cursor-pointer bg-gray-200`}>
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">
                  👤
                </div>
              </div>
              
              {/* Edit Tooltip */}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer">
                <input 
                  type="file" 
                  accept="image/*"
                  className="hidden"
                  id="profile-pic-upload"
                />
                <label htmlFor="profile-pic-upload" className="flex items-center space-x-1 text-white cursor-pointer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                  </svg>
                  <span className="text-sm font-medium">Edit</span>
                </label>
              </div>
            </div>
          </div>
          
          {/* Profile Info */}
          {!isCollapsed && (
            <div className="p-4 text-center">
              <div className="flex items-center justify-center space-x-3 cursor-pointer" onClick={() => onAccountOpenChange(!isAccountPanelOpen)}>
                <p className="text-xl font-semibold text-white">Student</p>
                <img src="/assets/icons/settings-icon.svg" alt="Settings" className="w-4 h-4" />
              </div>
              <div className="bg-brand-lilac-medium text-brand-black px-3 py-1 text-sm mt-2 inline-block">Level {assignedLevel}</div>
            </div>
          )}
          
          {/* Collapsed Level Display */}
          {isCollapsed && (
            <div className="flex justify-center mb-4">
              <div className="bg-purple-600 text-white px-2 py-1 text-xs font-bold">LV {assignedLevel}</div>
            </div>
          )}
          
          {/* Progress Section */}
          {!isCollapsed && (
            <div className="px-4 mb-4 mt-6">
              <div className="flex justify-between items-center mb-2">
                <h6 className="text-white">Progress</h6>
                <span className="text-sm font-bold text-white">0%</span>
              </div>
              <div className="relative w-full bg-gray-700 h-2 overflow-visible">
                <div className="h-full" style={{ width: '0%', backgroundColor: '#DBFF4D' }}></div>
              </div>
              <div className="flex justify-between text-xs text-white mt-1">
                <span>Level {assignedLevel}</span>
                <span>Level {assignedLevel + 1}</span>
              </div>
            </div>
          )}
          
          {/* Achievements Section - Empty */}
          {!isCollapsed && (
            <div className="px-4 mb-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-white" style={{ fontFamily: 'Outfit', fontSize: '20px', fontWeight: 400 }}>Achievements</div>
              </div>
            </div>
          )}
          
          {/* Conversations Section - Empty but with + button */}
          <div className={`${isCollapsed ? 'px-2' : 'px-4'} mb-4 flex-1`}>
            {!isCollapsed && (
              <div className="flex items-center justify-between mb-3">
                <div className="text-white" style={{ fontFamily: 'Outfit', fontSize: '20px', fontWeight: 400 }}>Conversations</div>
                <div className="flex items-center space-x-1">
                  <button className="p-1 hover:bg-gray-800">
                    <img 
                      src="/assets/icons/create_new.svg" 
                      alt="Create" 
                      className="w-4 h-4"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className={`${isCollapsed ? 'p-2' : 'p-4'}`}>
          {/* Chat with AI Tutor Button */}
          {!isCollapsed ? (
            <button 
              className="w-full flex items-center justify-center space-x-2 text-white py-3 px-4 transition-colors"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
            >
              <img 
                src="/assets/icons/ai-chat.svg" 
                alt="AI Chat" 
                className="w-5 h-5"
              />
              <span className="font-medium">Chat with AI Tutor</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
            </button>
          ) : (
            <div className="flex justify-center">
              <button 
                className="w-10 h-10 text-white flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
              >
                <img 
                  src="/assets/icons/ai-chat.svg" 
                  alt="AI Chat" 
                  className="w-5 h-5"
                />
              </button>
            </div>
          )}
        </div>
      </aside>
      
      {/* Account Panel */}
      {isAccountPanelOpen && (
        <div 
          className="absolute top-0 left-full bg-white shadow-2xl overflow-y-auto"
          style={{
            width: '400px',
            minHeight: '100vh',
            maxHeight: '100vh',
            zIndex: 10001
          }}
        >
          <div className="flex items-center justify-between p-6">
            <h2 className="text-xl font-bold text-gray-900">STUDENT ACCOUNT</h2>
            <button 
              onClick={() => onAccountOpenChange(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
          
          <div className="px-6 pb-6 space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
              <div className="flex justify-between items-center">
                <span className="text-gray-900">Student</span>
                <button className="text-sm text-gray-600 hover:text-gray-800">Change</button>
              </div>
              <hr className="mt-3 border-gray-200" />
            </div>
            
            {/* Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
              <div>Level {assignedLevel}</div>
              <hr className="mt-3 border-gray-200" />
            </div>
            
            {/* Bio */}
            <div id="bio-section">
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <div className="flex justify-between items-start">
                <p className="text-gray-900 text-sm leading-relaxed flex-1 pr-4">
                  Add a short bio to tell your squad about yourself...
                </p>
                <button className="text-sm text-gray-600 hover:text-gray-800">Change</button>
              </div>
              <hr className="mt-3 border-gray-200" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

