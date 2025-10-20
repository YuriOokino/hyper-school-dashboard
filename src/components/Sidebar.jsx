import { useState, useEffect } from 'react';

export default function Sidebar({ setActivePage, onCollapseChange, setSelectedChatFromSidebar, triggerSidebarChat, setTriggerSidebarChat }) {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isChatsExpanded, setIsChatsExpanded] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Notify parent about collapse state changes
  useEffect(() => {
    if (onCollapseChange) {
      onCollapseChange(isCollapsed);
    }
  }, [isCollapsed, onCollapseChange]);

  // Handle external trigger to open specific chat
  useEffect(() => {
    if (triggerSidebarChat) {
      const chat = chats.find(c => c.id === triggerSidebarChat.id);
      if (chat) {
        setSelectedChat({
          ...chat,
          masteryQuestion: triggerSidebarChat.masteryQuestion
        });
        setIsChatOpen(true);
        setIsAccountOpen(false);
        // Clear the trigger
        if (setTriggerSidebarChat) {
          setTriggerSidebarChat(null);
        }
      }
    }
  }, [triggerSidebarChat]);

  // Tutor chats
  const chats = [
    { 
      id: 1,
      name: "English Tutor", 
      lastMessage: "Let's review your essay tomorrow",
      time: "1 day ago",
      unread: 0,
      type: "tutor",
      status: "online",
      isNew: true
    },
    { 
      id: 2,
      name: "Math Tutor", 
      lastMessage: "Great work on the calculus homework",
      time: "2 days ago",
      unread: 0,
      type: "tutor",
      status: "online"
    },
    { 
      id: 3,
      name: "AI Tutor", 
      lastMessage: "I'm here to help you learn",
      time: "Just now",
      unread: 0,
      type: "ai",
      status: "online"
    }
  ];

  // Sample chat messages
  const chatMessages = {
    1: [
      { id: 1, sender: "English Tutor", message: "Lorem ipsum dolor sit amet consectetur. Dolor enim vulputate pretium ultricies vestibulum scelerisque adipiscing quam pulvinar. Vulputate cum nec odio dictum. Sed vel arcu malesuada eget malesuada orci. Elit eget at viverra in ut vitae massa risus in.", time: "Yesterday 5:31 PM", isCurrentUser: false, isNew: false },
      { id: 2, sender: "Jennifer", message: "Lorem ipsum dolor sit amet consectetur!", time: "Yesterday 5:31 PM", isCurrentUser: true, isNew: false },
      { id: 3, sender: "Jennifer", message: "Lorem ipsum dolor sit amet consectetur. Odio varius sagittis nunc velit magna leo volutpat interdum quam. Ut consequat ipsum aliquet ante rutrum purus neque varius. Nec purus eu porttitor elementum pulvinar ornare nec volutpat. Vehicula vitae urna interdum imperdiet elementum odio.", time: "Yesterday 5:31 PM", isCurrentUser: true, isNew: false },
      { id: 4, sender: "English Tutor", message: "Lorem ipsum dolor sit amet consectetur. Dolor enim vulputate pretium ultricies vestibulum scelerisque adipiscing quam pulvinar. Vulputate cum nec odio dictum. Sed vel arcu malesuada eget malesuada orci. Elit eget at viverra in ut vitae massa risus in.", time: "Today 9:12 AM", isCurrentUser: false, isNew: true }
    ],
    2: [
      { id: 1, sender: "Math Tutor", message: "Hi Jennifer! Ready to tackle some calculus problems?", time: "2:00 PM", isCurrentUser: false, isNew: false },
      { id: 2, sender: "Jennifer", message: "Yes! I'm struggling with integration by parts", time: "2:05 PM", isCurrentUser: true, isNew: false },
      { id: 3, sender: "Math Tutor", message: "Let's start with the LIATE method. It's a helpful way to choose u and dv", time: "2:06 PM", isCurrentUser: false, isNew: false },
      { id: 4, sender: "Jennifer", message: "That makes so much more sense now!", time: "2:10 PM", isCurrentUser: true, isNew: false },
      { id: 5, sender: "Math Tutor", message: "Great work on the calculus homework", time: "3:15 PM", isCurrentUser: false, isNew: true }
    ],
    3: [
      { id: 1, sender: "AI Tutor", message: "Hi Jennifer! I'm here to help you learn. What subject would you like to work on today?", time: "Just now", isCurrentUser: false, isNew: true },
      { id: 2, sender: "AI Tutor", message: "I can assist you with Math, Science, English, History, and many other subjects. Just let me know what you need help with!", time: "Just now", isCurrentUser: false, isNew: true }
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
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
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
          <div className="flex space-x-2 mb-2">
            <div className="relative group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center cursor-pointer">
                <span className="text-white text-xs">🏆</span>
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                Quiz Master
              </div>
            </div>
            <div className="relative group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center cursor-pointer">
                <span className="text-white text-xs">💡</span>
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                Problem Solver
              </div>
            </div>
            <div className="relative group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center cursor-pointer">
                <span className="text-white text-xs">⭐</span>
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                Star Student
              </div>
            </div>
            <div className="relative group">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center cursor-pointer">
                <span className="text-white text-xs">🎯</span>
              </div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                Goal Achiever
              </div>
            </div>
          </div>
          <div className="flex items-center cursor-pointer mt-2">
            <span className="text-sm text-gray-400">View all</span>
            <svg className="w-4 h-4 text-gray-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
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
      
      {/* CONVERSATIONS Section */}
      <div className={`${isCollapsed ? 'px-2' : 'px-4'} mb-4 flex-1`}>
        {!isCollapsed && (
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsChatsExpanded(!isChatsExpanded)}>
              <h3 className="text-sm font-bold text-white">CONVERSATIONS</h3>
              <svg 
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isChatsExpanded ? 'rotate-180' : ''}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </div>
            <button className="p-1 hover:bg-gray-800">
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
        )}
        
        {isChatsExpanded && (
          <div className="space-y-1">
            {!isCollapsed ? (
              <>
                {/* Tutor Chats */}
                {chats.map((chat) => (
                  <div key={chat.id} className="group flex items-center space-x-3 p-2 hover:bg-gray-800 cursor-pointer relative" onClick={() => handleChatClick(chat)}>
                    <div className="relative">
                      <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-sm text-white font-semibold">
                        {chat.name.charAt(0)}
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5">
                        <div className={`w-3 h-3 border-2 border-black rounded-full ${
                          chat.status === 'online' ? 'bg-green-500' : 
                          chat.status === 'idle' ? 'bg-yellow-500' : 
                          'bg-gray-500'
                        }`}></div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-white">{chat.name}</div>
                    </div>
                    {chat.isNew && (
                      <span className="px-2 py-1 bg-pink-500 text-white text-xs rounded-full font-medium">New!</span>
                    )}
                  </div>
                ))}
              </>
            ) : (
              /* Collapsed Chat Icon */
              <div className="flex justify-center">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-xs text-white cursor-pointer hover:bg-blue-700" onClick={() => handleChatClick(chats[0])}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            )}
          </div>
        )}
        
        {!isCollapsed && (
          <div className="flex items-center cursor-pointer mt-2" onClick={() => setActivePage('squad')}>
            <span className="text-sm text-gray-400">View all</span>
            <svg className="w-4 h-4 text-gray-400 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
          </div>
        )}
      </div>
      
      <div className={`${isCollapsed ? 'p-2' : 'p-4'}`}>
        {/* Chat with AI Tutor Button */}
        {!isCollapsed ? (
          <button 
            className="w-full flex items-center justify-center space-x-2 text-white py-3 px-4 transition-colors"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
            onClick={() => handleChatClick(chats[2])}
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
              className="w-10 h-10 text-white flex items-center justify-center transition-colors"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)'}
              onClick={() => handleChatClick(chats[2])}
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
            width: '628px',
            minHeight: '100vh',
            maxHeight: '100vh',
            marginLeft: isAccountOpen ? '400px' : '0px' // Push right if account panel is open
          }}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between px-6 py-2 border-b bg-gray-100">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm text-white font-semibold ${
                selectedChat.id === 1 ? 'bg-orange-500' : 
                selectedChat.id === 2 ? 'bg-blue-500' : 
                'bg-purple-500'
              }`}>
                {selectedChat.name.split(' ')[0].charAt(0)}
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900">{selectedChat.name}</h3>
                <span className={`text-sm ${getStatusDisplay(selectedChat.status).color}`}>
                  {getStatusDisplay(selectedChat.status).text}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => {
                  if (setSelectedChatFromSidebar) {
                    setSelectedChatFromSidebar(selectedChat);
                  }
                  setActivePage('squad');
                  setIsChatOpen(false);
                }}
                className="p-2 hover:bg-gray-100 transition-colors"
                title="Open in new window"
              >
                <img 
                  src="/assets/icons/open_in_new.png" 
                  alt="Open in new" 
                  className="w-5 h-5"
                />
              </button>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-2 hover:bg-gray-100 transition-colors"
                title="Close"
              >
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto bg-white">
            <div className="space-y-6 pt-6">
              {(() => {
                let messages;
                
                // Show mastery conversation if flag is set
                if (selectedChat.masteryQuestion && selectedChat.id === 3) {
                  messages = [
                    { 
                      id: 1, 
                      sender: "Jennifer", 
                      message: "What is mastery?", 
                      time: "Just now", 
                      isCurrentUser: true, 
                      isNew: false 
                    },
                    { 
                      id: 2, 
                      sender: "AI Tutor", 
                      message: "Great question! Mastery is all about truly understanding a topic.\n\nThere are two types of mastery we track:\n\n1. Topic Mastery: You need to answer a certain number of questions correctly in a row to show you've mastered a single topic. This proves you really understand it!\n\n2. Curriculum Mastery: This tracks how many topics you've mastered out of all the topics in your curriculum. It's like a completion percentage for your whole learning journey.\n\nAs you progress and master more topics, you'll see your overall curriculum mastery increase. The dashboard shows you both your progress toward mastering individual topics and your overall curriculum completion!", 
                      time: "Just now", 
                      isCurrentUser: false, 
                      isNew: false 
                    }
                  ];
                } else {
                  messages = chatMessages[selectedChat.id] || [];
                }
                
                return messages.map((message, index) => {
                  const showNewDivider = index > 0 && !messages[index - 1].isNew && message.isNew;
                
                return (
                  <div key={message.id}>
                    {showNewDivider && (
                      <div className="flex items-center justify-center py-4">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-4 text-sm font-medium text-gray-500">NEW</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                      </div>
                    )}
                    <div className="px-6">
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm text-white font-semibold ${
                          message.isCurrentUser ? 'bg-pink-500' : 
                          selectedChat.id === 1 ? 'bg-orange-500' : 
                          selectedChat.id === 2 ? 'bg-blue-500' : 
                          'bg-purple-500'
                        }`}>
                          {message.sender.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline space-x-2 mb-1">
                            <span className="text-base font-bold text-gray-900">{message.sender}</span>
                            <span className="text-sm text-gray-500">{message.time}</span>
                          </div>
                          <p className="text-sm text-gray-900 leading-relaxed whitespace-pre-line">{message.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                });
              })()}
            </div>
          </div>
          
          {/* Message Input */}
          <div className="px-6 py-4 border-t bg-white">
            <div className="flex items-center space-x-3 px-4 py-3 border border-gray-300 bg-white">
              <input
                type="text"
                placeholder="Type your message"
                className="flex-1 text-sm text-gray-600 focus:outline-none placeholder-gray-400"
              />
              <button className="p-1 hover:bg-gray-100 transition-colors" title="Attach file">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 transition-colors" title="Emoji">
                <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="p-2 bg-gray-900 hover:bg-gray-800 transition-colors" title="Send">
                <svg className="w-5 h-5 text-white transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
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
