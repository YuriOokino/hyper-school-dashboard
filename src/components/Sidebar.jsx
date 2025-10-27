import { useState, useEffect } from 'react';
import { ChatInputSimple } from './ui';

export default function Sidebar({ setActivePage, onCollapseChange, setSelectedChatFromSidebar, triggerSidebarChat, setTriggerSidebarChat }) {
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);
  const [isChatsExpanded, setIsChatsExpanded] = useState(true);
  const [isAchievementsExpanded, setIsAchievementsExpanded] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

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
        return { text: 'Online', color: 'text-brand-lime' };
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
            <p className="text-xl font-semibold text-white">Jennifer Roswell</p>
            <img src="/assets/icons/settings-icon.svg" alt="Settings" className="w-4 h-4" />
          </div>
          <div className="bg-brand-lilac-medium text-brand-black px-3 py-1 text-sm mt-2 inline-block">Level 6</div>
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
            <h6 className="text-white">Progress</h6>
            <span className="text-sm font-bold text-white">79%</span>
          </div>
          <div className="relative w-full bg-gray-700 h-2 overflow-visible">
            <div className="h-full" style={{ width: '79%', backgroundColor: '#DBFF4D' }}></div>
            <svg 
              className="absolute top-1/2 w-4 h-6"
              style={{ 
                left: '79%', 
                transform: 'translate(-50%, -50%)'
              }}
              viewBox="0 0 16 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M15.3638 0L5.93874 2.12532L0 14.9686L5.11231 13.7012L1.94401 25L16 6.94156L10.6911 8.12894L15.3638 0Z" 
                fill="#FE0D7E"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
          </div>
          <div className="flex justify-between text-xs text-white mt-1">
            <span>Level 6</span>
            <span>Level 7</span>
          </div>
        </div>
      )}
      
      {/* Achievements Section */}
      {!isCollapsed && (
        <div className="px-4 mb-4">
          <div className="flex items-center justify-between mb-3 group">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsAchievementsExpanded(!isAchievementsExpanded)}>
              <svg 
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isAchievementsExpanded ? 'rotate-180' : ''}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              <div className="text-white" style={{ fontFamily: 'Outfit', fontSize: '20px', fontWeight: 400 }}>Achievements</div>
            </div>
            <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1 hover:bg-gray-800">
                <img 
                  src="/assets/icons/open_in_new.svg" 
                  alt="Open" 
                  className="w-4 h-4"
                />
              </button>
            </div>
          </div>
          
          {isAchievementsExpanded && (
            <div className="flex space-x-2 mb-2">
              <div className="relative group">
                <div className="w-8 h-8 cursor-pointer">
                  <img src="/assets/icons/Badges/badge-1.png" alt="English Genius" className="w-full h-full object-contain" />
                </div>
                <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-white text-gray-900 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50" style={{ minWidth: '150px' }}>
                  <div className="font-semibold mb-1">English Genius</div>
                  <div className="text-gray-600 text-xs">Mastered 50 English topics</div>
                </div>
              </div>
              <div className="relative group">
                <div className="w-8 h-8 cursor-pointer">
                  <img src="/assets/icons/Badges/badge-2.png" alt="Math Wizard" className="w-full h-full object-contain" />
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-gray-900 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50" style={{ minWidth: '150px' }}>
                  <div className="font-semibold mb-1">Math Wizard</div>
                  <div className="text-gray-600 text-xs">Solved 100 math problems</div>
                </div>
              </div>
              <div className="relative group">
                <div className="w-8 h-8 cursor-pointer">
                  <img src="/assets/icons/Badges/badge-3.png" alt="Streak Champion" className="w-full h-full object-contain" />
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-gray-900 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50" style={{ minWidth: '150px' }}>
                  <div className="font-semibold mb-1">Streak Champion</div>
                  <div className="text-gray-600 text-xs">7-day learning streak</div>
                </div>
              </div>
              <div className="relative group">
                <div className="w-8 h-8 cursor-pointer">
                  <img src="/assets/icons/Badges/badge-4.png" alt="Goal Crusher" className="w-full h-full object-contain" />
                </div>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-white text-gray-900 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50" style={{ minWidth: '150px' }}>
                  <div className="font-semibold mb-1">Goal Crusher</div>
                  <div className="text-gray-600 text-xs">Completed 25 daily goals</div>
                </div>
              </div>
            </div>
          )}
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
          <div className="flex items-center justify-between mb-3 group">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsChatsExpanded(!isChatsExpanded)}>
              <svg 
                className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isChatsExpanded ? 'rotate-180' : ''}`} 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              <div className="text-white" style={{ fontFamily: 'Outfit', fontSize: '20px', fontWeight: 400 }}>Conversations</div>
            </div>
            <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1 hover:bg-gray-800" onClick={() => setActivePage('squad')}>
                <img 
                  src="/assets/icons/open_in_new.svg" 
                  alt="Open" 
                  className="w-4 h-4"
                />
              </button>
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
        
        {isChatsExpanded && (
          <div className="space-y-1">
            {!isCollapsed ? (
              <>
                {/* Tutor Chats */}
                {chats.map((chat) => {
                  const chatColors = {
                    1: 'bg-blue-500',
                    2: 'bg-orange-500'
                  };
                  
                  return (
                    <div key={chat.id} className="flex items-center space-x-3 p-2 hover:bg-gray-800 cursor-pointer" onClick={() => handleChatClick(chat)}>
                      {chat.id === 3 ? (
                        <img src="/assets/icons/ai-chat.svg" alt="AI" className="w-8 h-8" />
                      ) : (
                        <div className={`w-8 h-8 rounded-full ${chatColors[chat.id]}`}></div>
                      )}
                      <div className="flex-1">
                        <div className="text-sm text-white">{chat.name}</div>
                      </div>
                      {chat.isNew && (
                        <span className="text-xs font-semibold" style={{ color: '#FF1493' }}>New!</span>
                      )}
                    </div>
                  );
                })}
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
            onClick={() => handleChatClick(chats[2])}
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
              onClick={() => handleChatClick(chats[2])}
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
              <div>Level 6</div>
              <hr className="mt-3 border-gray-200" />
            </div>
            
            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <div className="flex justify-between items-start">
                <p className="text-gray-900 text-sm leading-relaxed flex-1 pr-4">
                  I love reading fantasy novels and writing short stories in my free time. I play volleyball on the school team and enjoy hanging out with my friends on weekends. My favorite subjects are English and Biology, and I'm really interested in marine science. I also love baking cookies and trying new recipes!
                </p>
                <button className="text-sm text-gray-600 hover:text-gray-800">Change</button>
              </div>
              <hr className="mt-3 border-gray-200" />
            </div>
            
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
              <div className="flex justify-between items-center">
                <span className="text-gray-900">jennifer.roswell@gmail.com</span>
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
          <div className="flex items-center justify-between px-4 py-2 bg-brand-black">
            <div className="flex items-center space-x-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm text-white font-semibold ${
                selectedChat.id === 1 ? 'bg-orange-500' : 
                selectedChat.id === 2 ? 'bg-blue-500' : 
                'bg-purple-500'
              }`}>
                {selectedChat.name.split(' ')[0].charAt(0)}
              </div>
              <div>
                <h3 className="text-base font-bold text-white">{selectedChat.name}</h3>
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
                className="p-2"
                title="Open in new window"
              >
                <img 
                  src="/assets/icons/open_in_new.svg" 
                  alt="Open in new" 
                  className="w-5 h-5"
                />
              </button>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="p-2"
                title="Close"
              >
                <svg className="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
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
            <ChatInputSimple
              value={chatMessage}
              onChange={setChatMessage}
              placeholder="Type your message"
              onSend={(message) => {
                console.log('Sidebar chat message:', message);
                setChatMessage('');
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
