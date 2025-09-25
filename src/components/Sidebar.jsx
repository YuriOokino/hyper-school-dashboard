import { useState, useEffect } from 'react';

export default function Sidebar({ setActivePage, onCollapseChange }) {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [dynamicChats, setDynamicChats] = useState([]);
  const [isChatsExpanded, setIsChatsExpanded] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Notify parent about collapse state changes
  useEffect(() => {
    if (onCollapseChange) {
      onCollapseChange(isCollapsed);
    }
  }, [isCollapsed, onCollapseChange]);

  // Chat data from Squad tab
  const chats = [
    { 
      id: 1,
      name: "Leo", 
      lastMessage: "Great job on the science quiz!",
      time: "15 min ago",
      unread: 0,
      type: "individual",
      status: "online"
    },
    { 
      id: 2,
      name: "Hannah", 
      lastMessage: "Thanks for the help with calculus",
      time: "1 hour ago",
      unread: 2,
      type: "individual",
      status: "idle"
    },
    { 
      id: 3,
      name: "Math study group", 
      lastMessage: "Anyone free for math help?",
      time: "2 hours ago",
      unread: 3,
      type: "group",
      status: "online"
    },
    { 
      id: 4,
      name: "English tutor", 
      lastMessage: "Let's review your essay tomorrow",
      time: "1 day ago",
      unread: 0,
      type: "tutor",
      status: "inactive"
    }
  ];

  // Sample chat messages
  const chatMessages = {
    1: [
      { id: 1, sender: "Leo", message: "Hey! Did you see the new assignment posted?", time: "4:30 PM", isCurrentUser: false },
      { id: 2, sender: "Jennifer", message: "Yes, looks challenging but interesting", time: "4:35 PM", isCurrentUser: true },
      { id: 3, sender: "Leo", message: "Want to work on it together this weekend?", time: "4:36 PM", isCurrentUser: false },
      { id: 4, sender: "Jennifer", message: "Sounds great! Saturday afternoon work for you?", time: "4:38 PM", isCurrentUser: true },
      { id: 5, sender: "Leo", message: "Great job on the science quiz! 🎉", time: "2:30 PM", isCurrentUser: false }
    ],
    2: [
      { id: 1, sender: "Hannah", message: "Hi Jennifer! Can you help me with calculus?", time: "2:00 PM", isCurrentUser: false },
      { id: 2, sender: "Jennifer", message: "Of course! What topic are you working on?", time: "2:05 PM", isCurrentUser: true },
      { id: 3, sender: "Hannah", message: "Integration by parts - I'm so confused", time: "2:06 PM", isCurrentUser: false },
      { id: 4, sender: "Jennifer", message: "No worries! Let me explain the LIATE method", time: "2:10 PM", isCurrentUser: true },
      { id: 5, sender: "Hannah", message: "Thanks for the help with calculus", time: "3:15 PM", isCurrentUser: false }
    ],
    3: [
      { id: 1, sender: "Sarah", message: "Did everyone finish the chemistry lab report?", time: "3:20 PM", isCurrentUser: false },
      { id: 2, sender: "Leo", message: "Still working on the conclusion section", time: "3:22 PM", isCurrentUser: false },
      { id: 3, sender: "Jennifer", message: "I can share my notes if it helps", time: "3:25 PM", isCurrentUser: true },
      { id: 4, sender: "Maya", message: "That would be amazing, thank you!", time: "3:26 PM", isCurrentUser: false },
      { id: 5, sender: "Leo", message: "Anyone free for math help?", time: "2:15 PM", isCurrentUser: false }
    ],
    4: [
      { id: 1, sender: "English Tutor", message: "Hi Jennifer, how's your essay coming along?", time: "10:00 AM", isCurrentUser: false },
      { id: 2, sender: "Jennifer", message: "Making good progress! Almost done with the first draft", time: "10:15 AM", isCurrentUser: true },
      { id: 3, sender: "English Tutor", message: "Excellent! Remember to focus on your thesis statement", time: "10:20 AM", isCurrentUser: false },
      { id: 4, sender: "Jennifer", message: "Will do! Thanks for the guidance", time: "10:25 AM", isCurrentUser: true },
      { id: 5, sender: "English Tutor", message: "Let's review your essay tomorrow", time: "Yesterday", isCurrentUser: false }
    ],
    'ai_tutor': [
      { id: 1, sender: "AI Tutor", message: "Hi Jennifer! I'm here to help you learn. What subject would you like to work on today?", time: "Just now", isCurrentUser: false },
      { id: 2, sender: "AI Tutor", message: "I can assist you with Math, Science, English, History, and many other subjects. Just let me know what you need help with!", time: "Just now", isCurrentUser: false }
    ]
  };

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
    setIsChatOpen(true);
    setIsAccountOpen(false); // Close account panel if open
  };

  const getStatusDisplay = (status) => {
    switch (status) {
      case 'online':
        return { text: 'Online', color: 'text-green-500' };
      case 'idle':
        return { text: 'Idle', color: 'text-yellow-500' };
      case 'inactive':
        return { text: 'Inactive', color: 'text-gray-500' };
      default:
        return { text: 'Inactive', color: 'text-gray-500' };
    }
  };

  const handleAITutorClick = () => {
    const aiTutorChat = {
      id: 'ai_tutor',
      name: "AI Tutor",
      type: "ai",
      lastMessage: "Hi Jennifer! I'm here to help you learn.",
      time: "Just now",
      unread: 0,
      isNew: true,
      status: "online"
    };

    // Check if AI Tutor chat already exists in dynamic chats
    const existingChat = dynamicChats.find(chat => chat.id === 'ai_tutor');
    if (!existingChat) {
      // Add AI Tutor chat to the top of the dynamic chats list
      setDynamicChats(prev => [aiTutorChat, ...prev]);
    }

    setSelectedChat(aiTutorChat);
    setIsChatOpen(true);
    setIsAccountOpen(false); // Close account panel if open
  };

  return (
    <div className="relative">
      <aside className={`bg-black flex flex-col overflow-y-auto transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`} style={{ minHeight: '100vh', maxHeight: '100vh' }}>
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
      
      {/* Circular Profile Image */}
      <div className={`flex ${isCollapsed ? 'justify-center' : 'justify-center'} pt-4 pb-4`}>
        <div className="relative group">
          <div className={`${isCollapsed ? 'w-10 h-10' : 'w-32 h-32'} rounded-full border-[1.5px] border-white overflow-hidden cursor-pointer`}>
            <img 
              src="/assets/Images/account-user.png" 
              alt="User profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Edit Tooltip */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <div className="flex items-center space-x-1 text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
              </svg>
              <span className="text-sm font-medium">Edit</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Profile Info */}
      {!isCollapsed && (
        <div className="p-4 text-center">
          <div className="flex items-center justify-center space-x-3 cursor-pointer" onClick={() => {
            console.log('Clicked! Current state:', isAccountOpen);
            setIsAccountOpen(!isAccountOpen);
          }}>
            <h2 className="text-xl font-bold text-white">Jennifer Roswell</h2>
            <svg className={`w-4 h-4 text-gray-400 transition-transform ${isAccountOpen ? '-rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </div>
          <div className="text-sm text-gray-400 mt-1">Level 6</div>
        </div>
      )}
      
      {/* Collapsed Level Display */}
      {isCollapsed && (
        <div className="flex justify-center mb-4">
          <div className="bg-purple-600 text-white px-2 py-1 text-xs font-bold">LV 6</div>
        </div>
      )}
      
      {/* Progress Section */}
      {!isCollapsed && (
        <div className="px-4 mb-4 mt-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-bold text-white">PROGRESS</span>
            <span className="text-sm font-bold text-white">79%</span>
          </div>
          <div className="w-full bg-gray-700 h-2 overflow-hidden">
            <div className="h-full" style={{ width: '79%', backgroundColor: '#DBFF4D' }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Level 6</span>
            <span>Level 7</span>
          </div>
        </div>
      )}
      
      {/* Achievements Section */}
      {!isCollapsed && (
        <div className="px-4 mb-4">
          <h3 className="text-sm font-bold text-white mb-3">ACHIEVEMENTS</h3>
          <div className="flex space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white text-xs">🏆</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white text-xs">💡</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <span className="text-white text-xs">⭐</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <span className="text-white text-xs">🎯</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Collapsed Achievements */}
      {isCollapsed && (
        <div className="flex justify-center mb-4">
          <div className="bg-purple-600 text-white p-2 rounded-full">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
        </div>
      )}
      
      {/* CHATS Section */}
      <div className={`${isCollapsed ? 'px-2' : 'px-4'} mb-4 flex-1`}>
        {!isCollapsed && (
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsChatsExpanded(!isChatsExpanded)}>
              <h3 className="text-sm font-bold text-white">CHATS</h3>
              <svg 
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isChatsExpanded ? 'rotate-180' : ''}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-800">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-800">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                </svg>
              </button>
            </div>
          </div>
        )}
        
        {isChatsExpanded && (
          <div className="space-y-1">
            {!isCollapsed ? (
              <>
                {/* Dynamic Chats (AI Tutor, etc.) */}
                {dynamicChats.map((chat) => (
                  <div key={chat.id} className="flex items-center space-x-3 p-2 hover:bg-gray-800 cursor-pointer" onClick={() => handleChatClick(chat)}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-white">
                      {chat.name === "AI Tutor" ? (
                        <img 
                          src="/assets/icons/AI chat icon.png" 
                          alt="AI Chat" 
                          className="w-4 h-4"
                        />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">
                          {chat.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white">{chat.name}</div>
                    </div>
                    {chat.isNew && (
                      <span className="px-2 py-1 bg-pink-500 text-white text-xs rounded-full">New!</span>
                    )}
                  </div>
                ))}
                
                {/* Static Chats */}
                <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 cursor-pointer" onClick={() => handleChatClick(chats[0])}>
                  <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">
                    L
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white">Leo</div>
                  </div>
                  <span className="px-2 py-1 bg-pink-500 text-white text-xs rounded-full">New!</span>
                </div>
                
                <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 cursor-pointer" onClick={() => handleChatClick(chats[1])}>
                  <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">
                    H
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white">Hannah</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 cursor-pointer" onClick={() => handleChatClick(chats[2])}>
                  <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">
                    M
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white">Math study group</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-2 hover:bg-gray-800 cursor-pointer" onClick={() => handleChatClick(chats[3])}>
                  <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-xs text-white">
                    E
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white">English tutor</div>
                  </div>
                </div>
                
                <div 
                  className="flex items-center justify-between p-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => setActivePage('squad')}
                >
                  <span className="text-sm text-gray-400">View all chats</span>
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </>
            ) : (
              /* Collapsed Chat Icon */
              <div className="flex justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white cursor-pointer hover:bg-blue-700" onClick={() => handleChatClick(dynamicChats[0] || {id: 'ai', name: 'AI Tutor'})}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className={`${isCollapsed ? 'p-2' : 'p-4'}`}>
        {/* Chat with AI Tutor Button */}
        {!isCollapsed ? (
          <button 
            className="w-full flex items-center justify-center space-x-2 hover:bg-gray-800 text-white py-3 px-4 transition-colors"
            onClick={handleAITutorClick}
          >
            <img 
              src="/assets/icons/AI chat icon.png" 
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
              className="w-10 h-10 hover:bg-gray-800 text-white flex items-center justify-center transition-colors"
              onClick={handleAITutorClick}
            >
              <img 
                src="/assets/icons/AI chat icon.png" 
                alt="AI Chat" 
                className="w-5 h-5"
              />
            </button>
          </div>
        )}
      </div>
      
      </aside>
      
      {/* Account Panel - Fixed positioned next to sidebar */}
      {isAccountOpen && (
        <div 
          className="absolute top-0 left-full bg-white shadow-2xl z-50 overflow-y-auto"
          style={{
            width: '400px',
            minHeight: '100vh',
            maxHeight: '100vh'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6">
            <h2 className="text-xl font-bold text-gray-900">STUDENT ACCOUNT</h2>
            <button 
              onClick={() => setIsAccountOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
          
          
          {/* Content */}
          <div className="px-6 pb-6 space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
              <div className="flex justify-between items-center">
                <span className="text-gray-900">Jennifer Roswell</span>
                <button className="text-sm text-gray-600 hover:text-gray-800">Change</button>
              </div>
              <hr className="mt-3 border-gray-200" />
            </div>
            
            {/* Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
              <div className="text-gray-900">Level 6</div>
              <hr className="mt-3 border-gray-200" />
            </div>
            
            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <div className="flex justify-between items-start">
                <p className="text-gray-900 text-sm leading-relaxed flex-1 pr-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse varius enim in eros elementum tristique. Duis cursus, mi 
                  quis viverra ornare, eros dolor interdum nulla, ut commodo diam 
                  libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem 
                  imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
                <button className="text-sm text-gray-600 hover:text-gray-800">Change</button>
              </div>
              <hr className="mt-3 border-gray-200" />
            </div>
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
              <div className="flex justify-between items-center">
                <span className="text-gray-900">email@example.com</span>
                <button className="text-sm text-gray-600 hover:text-gray-800">Change</button>
              </div>
              <hr className="mt-3 border-gray-200" />
            </div>
            
            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="flex justify-between items-center">
                <span className="text-gray-900">*******</span>
                <button className="text-sm text-gray-600 hover:text-gray-800">Change</button>
              </div>
              <hr className="mt-3 border-gray-200" />
            </div>
            
            {/* Language */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
              <div className="flex justify-between items-center">
                <span className="text-gray-900">English</span>
                <button className="text-sm text-gray-600 hover:text-gray-800">Change</button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat Panel */}
      {isChatOpen && selectedChat && (
        <div 
          className="absolute top-0 left-full bg-white shadow-2xl z-50 overflow-hidden flex flex-col"
          style={{
            width: '400px',
            minHeight: '100vh',
            maxHeight: '100vh',
            marginLeft: isAccountOpen ? '400px' : '0px' // Push right if account panel is open
          }}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between p-4 border-b bg-gray-50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-sm text-white font-semibold">
                {selectedChat.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{selectedChat.name}</h3>
                <span className={`text-xs ${getStatusDisplay(selectedChat.status).color}`}>
                  {getStatusDisplay(selectedChat.status).text}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button 
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                title="Call"
              >
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </button>
              <button 
                onClick={() => {
                  setActivePage('squad');
                  setIsChatOpen(false);
                }}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                title="Open in Squad tab"
              >
                <img 
                  src="/assets/icons/open_in_new.png" 
                  alt="Open in new tab" 
                  className="w-5 h-5"
                />
              </button>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                title="Close chat"
              >
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            <div className="space-y-4">
              {chatMessages[selectedChat.id]?.map((message) => (
                <div key={message.id} className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 ${
                    message.isCurrentUser 
                      ? 'bg-black text-white' 
                      : 'bg-white text-gray-900 border'
                  }`}>
                    {!message.isCurrentUser && (
                      <div className="text-xs font-semibold mb-1 text-gray-600">
                        {message.sender}
                      </div>
                    )}
                    <div className="text-sm">{message.message}</div>
                    <div className={`text-xs mt-1 ${
                      message.isCurrentUser ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Message Input */}
          <div className="p-4 border-t bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
              />
              <button className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors">
                <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
