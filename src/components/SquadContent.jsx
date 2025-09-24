import { useState, useEffect } from 'react';

export default function SquadContent() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatMessages, setChatMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');
  const [activeLeaderboardTab, setActiveLeaderboardTab] = useState('students');
  const [chatWidth, setChatWidth] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const [showSquadModal, setShowSquadModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showComments, setShowComments] = useState(null);
  const [newComment, setNewComment] = useState('');
  
  // Current user data
  const currentUser = {
    name: "Jennifer",
    rank: 23,
    points: 1650,
      level: 4,
    status: "online"
  };

  // Individual leaderboard data
  const individualLeaderboard = [
    { name: "Leo", points: 1800, level: 5, status: "online", mastery: 95, streak: 12, badges: 8 },
    { name: "Jennifer", points: 1650, level: 4, status: "online", mastery: 88, isCurrentUser: true, streak: 7, badges: 5 },
    { name: "Ava", points: 1420, level: 4, status: "idle", mastery: 82, streak: 5, badges: 6 },
    { name: "Sarah", points: 1250, level: 4, status: "offline", mastery: 79, streak: 3, badges: 4 },
    { name: "Maya", points: 1180, level: 3, status: "online", mastery: 85, streak: 8, badges: 3 },
    { name: "Jordan", points: 1150, level: 3, status: "online", mastery: 77, streak: 4, badges: 5 },
    { name: "Emma", points: 1120, level: 3, status: "idle", mastery: 73, streak: 2, badges: 3 },
    { name: "Ryan", points: 1080, level: 3, status: "offline", mastery: 81, streak: 6, badges: 4 },
    { name: "Zoe", points: 1050, level: 3, status: "online", mastery: 90, streak: 9, badges: 7 },
    { name: "Marcus", points: 1020, level: 2, status: "online", mastery: 68, streak: 3, badges: 2 }
  ];

  // Squad leaderboard data
  const squadLeaderboard = [
    { name: "Thunder Hawks", points: 45680, members: 98, rank: 1, mastery: 92, avgLevel: 4.2, activeMembers: 87 },
    { name: "Lightning Bolts", points: 44320, members: 95, rank: 2, mastery: 89, isCurrentSquad: true, avgLevel: 4.1, activeMembers: 82 },
    { name: "Storm Riders", points: 43890, members: 100, rank: 3, mastery: 87, avgLevel: 4.0, activeMembers: 85 },
    { name: "Fire Dragons", points: 42150, members: 89, rank: 4, mastery: 85, avgLevel: 3.9, activeMembers: 76 },
    { name: "Ocean Waves", points: 41800, members: 92, rank: 5, mastery: 83, avgLevel: 3.8, activeMembers: 78 }
  ];

  // Recent chats data
  const recentChats = [
    { 
      id: 0,
      name: "AI Tutor",
      lastMessage: "Hi Jennifer! What subject are you working on today?",
      time: "Just now",
      unread: 0,
      type: "ai",
      avatar: "AI"
    },
    { 
      id: 1,
      name: "Study Group Alpha",
      lastMessage: "Anyone free for math help?",
      time: "2 min ago",
      unread: 3,
      type: "group",
      members: 8,
      avatar: "SG"
    },
    { 
      id: 2,
      name: "Leo",
      lastMessage: "Great job on the science quiz!",
      time: "15 min ago",
      unread: 1,
      type: "individual",
      status: "online",
      avatar: "L"
    }
  ];

  // Sample chat messages
  const sampleChatMessages = {
    0: [
      { id: 1, sender: "AI Tutor", message: "Hi Jennifer! I'm here to help with any subject.", time: "9:00 AM", isCurrentUser: false },
      { id: 2, sender: "Jennifer", message: "Hi! I need help with calculus", time: "9:01 AM", isCurrentUser: true }
    ],
    1: [
      { id: 1, sender: "Maya", message: "Working on algebra assignment", time: "10:30 AM", isCurrentUser: false },
      { id: 2, sender: "Jennifer", message: "Same here!", time: "10:32 AM", isCurrentUser: true }
    ],
    2: [
      { id: 1, sender: "Leo", message: "How did you find the science quiz?", time: "Yesterday", isCurrentUser: false },
      { id: 2, sender: "Jennifer", message: "It was challenging but fair!", time: "Yesterday", isCurrentUser: true }
    ]
  };

  // Live feed achievements
  const liveFeeds = [
    {
      user: "Leo",
      achievement: "🏆 Quiz Master",
      description: "Perfect score on Math quiz!",
      time: "2 min ago",
      reactions: { likes: 15, fire: 8, congrats: 12 },
      comments: 3,
      canReact: true
    },
    {
      user: "Sophia",
      achievement: "🎯 Streak Champion",
      description: "20-day learning streak achieved",
      time: "15 min ago",
      reactions: { likes: 23, fire: 5, congrats: 18 },
      comments: 7,
      canReact: true
    },
    {
      user: "Maya",
      achievement: "📚 Knowledge Seeker",
      description: "Completed 6 lessons today",
      time: "1 hour ago",
      reactions: { likes: 11, fire: 14, congrats: 7 },
      comments: 2,
      canReact: true
    },
    {
      user: "Ethan",
      achievement: "💡 Problem Solver",
      description: "Solved advanced calculus challenge",
      time: "2 hours ago",
      reactions: { likes: 19, fire: 11, congrats: 15 },
      comments: 5,
      canReact: true
    }
  ];

  // Available tutors
  const availableTutors = [
    {
      subjects: ["Mathematics", "Calculus", "Algebra"],
      availability: "Available now",
      rating: "4.9",
      responseTime: "< 2 min"
    },
    {
      subjects: ["Physics", "Chemistry"],
      availability: "Available now", 
      rating: "4.8",
      responseTime: "< 5 min"
    },
    {
      subjects: ["English", "Literature"],
      availability: "Available in 15 min",
      rating: "4.7", 
      responseTime: "< 10 min"
    }
  ];

  // Squad members data (full list)
  const squadMembers = [
    { name: "Jennifer", status: "online", level: 4, points: 1650, isCurrentUser: true },
    { name: "Leo", status: "online", level: 5, points: 1800 },
    { name: "Ava", status: "idle", level: 4, points: 1420 },
    { name: "Sarah", status: "offline", level: 4, points: 1250 },
    { name: "Maya", status: "online", level: 3, points: 1180 },
    { name: "Jordan", status: "online", level: 3, points: 1150 },
    { name: "Emma", status: "idle", level: 3, points: 1120 },
    { name: "Ryan", status: "offline", level: 3, points: 1080 },
    { name: "Zoe", status: "online", level: 3, points: 1050 },
    { name: "Marcus", status: "online", level: 2, points: 1020 },
    { name: "Isabella", status: "online", level: 4, points: 1340 },
    { name: "Ethan", status: "idle", level: 3, points: 980 },
    { name: "Sophia", status: "online", level: 5, points: 1720 },
    { name: "Liam", status: "offline", level: 2, points: 850 },
    { name: "Olivia", status: "online", level: 4, points: 1450 },
    { name: "Noah", status: "idle", level: 3, points: 1120 },
    { name: "Charlotte", status: "online", level: 4, points: 1380 },
    { name: "William", status: "offline", level: 2, points: 920 },
    { name: "Amelia", status: "online", level: 5, points: 1680 },
    { name: "James", status: "idle", level: 3, points: 1090 },
    ...Array.from({ length: 75 }, (_, i) => ({
      name: `Student ${i + 21}`,
      status: ["online", "idle", "offline"][Math.floor(Math.random() * 3)],
      level: Math.floor(Math.random() * 5) + 1,
      points: Math.floor(Math.random() * 1500) + 500
    }))
  ];

  // Helper functions
  const getStatusIndicator = (status) => {
    switch(status) {
      case "online": return <div className="w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>;
      case "idle": return <div className="w-3 h-3 border-2 border-white rounded-full" style={{ backgroundColor: '#FF69B4' }}></div>;
      case "offline": return <div className="w-3 h-3 bg-gray-400 border-2 border-white rounded-full"></div>;
      default: return <div className="w-3 h-3 bg-gray-400 border-2 border-white rounded-full"></div>;
    }
  };

  const getChangeIndicator = (change) => {
    if (change.startsWith('+')) return <span className="text-green-600 text-sm">↗ {change}</span>;
    if (change.startsWith('-')) return <span className="text-red-600 text-sm">↘ {change}</span>;
    return <span className="text-gray-500 text-sm">— {change}</span>;
  };

  const handleReaction = (achievementIndex, reactionType) => {
    console.log(`Reacted with ${reactionType} to achievement ${achievementIndex}`);
  };

  const handleComment = (feedIndex) => {
    setShowComments(showComments === feedIndex ? null : feedIndex);
  };

  const handleAddComment = (feedIndex) => {
    if (newComment.trim()) {
      // In a real app, this would update the backend
      console.log(`Added comment to feed ${feedIndex}: ${newComment}`);
      setNewComment('');
    }
  };

  const filteredMembers = squadMembers.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChatWithMember = (member) => {
    console.log(`Starting chat with ${member.name}`);
    setShowSquadModal(false);
  };

  const selectChat = (chat) => {
    setSelectedChat(chat);
    if (!chatMessages[chat.id]) {
      setChatMessages(prev => ({
        ...prev,
        [chat.id]: sampleChatMessages[chat.id] || []
      }));
    }
  };

  const getCurrentMessages = () => {
    if (!selectedChat) return [];
    return chatMessages[selectedChat.id] || sampleChatMessages[selectedChat.id] || [];
  };

  const handleSendChatMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;
    
    const newMsg = {
      id: Date.now(),
      sender: "Jennifer",
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCurrentUser: true
    };

    setChatMessages(prev => ({
      ...prev,
      [selectedChat.id]: [...(prev[selectedChat.id] || []), newMsg]
    }));
    
    setNewMessage('');
    
    // AI response simulation
    if (selectedChat.type === 'ai') {
      setTimeout(() => {
        const aiResponse = {
          id: Date.now() + 1,
          sender: "AI Tutor",
          message: "I understand you need help with that topic. Let me provide guidance and examples.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isCurrentUser: false
        };
        
        setChatMessages(prev => ({
          ...prev,
          [selectedChat.id]: [...(prev[selectedChat.id] || []), aiResponse]
        }));
      }, 1000);
    }
  };

  const handleMouseDown = (e) => {
    setIsResizing(true);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;
    
    const container = e.currentTarget.parentElement;
    const containerRect = container.getBoundingClientRect();
    const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
    
    if (newWidth >= 30 && newWidth <= 70) {
      setChatWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      const handleGlobalMouseMove = (e) => {
        const container = document.querySelector('[data-resize-container]');
        if (!container) return;
        
        const containerRect = container.getBoundingClientRect();
        const newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
        
        if (newWidth >= 30 && newWidth <= 70) {
          setChatWidth(newWidth);
        }
      };

      const handleGlobalMouseUp = () => {
        setIsResizing(false);
      };

      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleGlobalMouseMove);
        document.removeEventListener('mouseup', handleGlobalMouseUp);
      };
    }
  }, [isResizing]);

  return (
    <div className="space-y-6">
      {/* Header with Squad Info */}
      <div className="bg-white p-6 border border-gray-200" style={{ boxShadow: '0 0 0 1px #000' }}>
        <div className="flex items-start justify-between mb-4">
                <div>
            <h1 className="text-3xl font-bold text-gray-900 uppercase mb-2" style={{ fontFamily: 'Oswald' }}>LIGHTNING BOLTS</h1>
            <p className="text-lg text-gray-600 mb-1">Squad Lead: Ms. Rodriguez</p>
            <div className="flex items-center space-x-3">
              <span className="text-lg text-gray-600">95 Students</span>
              <button 
                onClick={() => setShowSquadModal(true)}
                className="px-3 py-1 text-sm font-medium text-black hover:bg-gray-200 transition-colors"
                style={{ backgroundColor: '#C4CEFF' }}
              >
                View All
                </button>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">#2</div>
            <div className="text-sm text-gray-600">Squad Rank</div>
          </div>
        </div>
              </div>
              

      {/* Main Content - Resizable Layout */}
      <div 
        className="flex gap-6 h-[700px]" 
        data-resize-container
      >
        {/* Chat Interface - Resizable */}
        <div className="bg-white border border-gray-200 flex relative" style={{ 
          boxShadow: '0 0 0 1px #000',
            width: `${chatWidth}%`
        }}>
          {/* Chat Sidebar */}
          <div className="w-80 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 uppercase">MESSAGES</h2>
              <p className="text-sm text-gray-600">Select a conversation</p>
            </div>
            <div className="flex-1 overflow-y-auto">
              {recentChats.map((chat) => (
                <div 
                  key={chat.id} 
                  onClick={() => selectChat(chat)}
                  className={`flex items-center p-4 hover:bg-gray-50 cursor-pointer border-l-4 ${
                    selectedChat?.id === chat.id ? 'border-black bg-gray-50' : 'border-transparent'
                  }`}
                >
                  <div className="relative mr-3">
                    {chat.type === 'ai' ? (
                      <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#3FC7FF' }}>
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    ) : (
                      <div className="w-12 h-12 flex items-center justify-center text-sm font-bold" style={{ backgroundColor: '#C4CEFF' }}>
                        {chat.avatar}
                      </div>
                    )}
                    {chat.type === 'individual' && (
                      <div className="absolute -bottom-1 -right-1">
                        {getStatusIndicator(chat.status)}
                      </div>
                    )}
                    {chat.type === 'ai' && (
                      <div className="absolute -bottom-1 -right-1">
                        <div className="w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                    )}
                    {chat.unread > 0 && (
                      <div className="absolute -top-1 -right-1 w-6 h-6 flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: '#FF69B4' }}>
                        {chat.unread}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900 truncate">{chat.name}</span>
                      <span className="text-xs text-gray-500 ml-2">{chat.time}</span>
                    </div>
                    <div className="text-sm text-gray-600 truncate">{chat.lastMessage}</div>
                    {chat.type === 'group' && (
                      <div className="text-xs text-gray-500">{chat.members} members</div>
                    )}
                    {chat.type === 'ai' && (
                      <div className="text-xs text-green-600 font-medium">AI Assistant • Always available</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Main Area */}
          <div className="flex-1 flex flex-col">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        {selectedChat.type === 'ai' ? (
                          <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: '#3FC7FF' }}>
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                            </svg>
                          </div>
                        ) : (
                          <div className="w-10 h-10 flex items-center justify-center font-semibold" style={{ backgroundColor: '#C4CEFF' }}>
                            {selectedChat.avatar}
                          </div>
                        )}
                        {selectedChat.type === 'individual' && (
                          <div className="absolute -bottom-1 -right-1">
                            {getStatusIndicator(selectedChat.status)}
                          </div>
                        )}
                        {selectedChat.type === 'ai' && (
                          <div className="absolute -bottom-1 -right-1">
                            <div className="w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">{selectedChat.name}</h3>
                        <p className="text-sm text-gray-600">
                          {selectedChat.type === 'ai' ? 'Always available • AI Assistant' : 
                           selectedChat.type === 'group' ? `${selectedChat.members} members` : selectedChat.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {getCurrentMessages().map((message) => (
                    <div key={message.id} className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 ${
                        message.isCurrentUser 
                          ? 'bg-black text-white' 
                          : 'bg-white border border-gray-200'
                      }`}>
                        {!message.isCurrentUser && (
                          <div className="text-xs font-semibold text-gray-600 mb-1">{message.sender}</div>
                        )}
                        <div className="text-sm">{message.message}</div>
                        <div className={`text-xs mt-1 ${message.isCurrentUser ? 'text-gray-300' : 'text-gray-500'}`}>
                          {message.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder={`Message ${selectedChat.name}...`}
                      className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm"
                      onKeyPress={(e) => e.key === 'Enter' && handleSendChatMessage()}
                    />
                    <button
                      onClick={handleSendChatMessage}
                      className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Select a conversation</h3>
                  <p className="text-gray-600">Choose from your recent messages to start chatting</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Resize Handle */}
          <div
            className="absolute top-0 right-0 w-4 h-full flex items-center justify-center cursor-col-resize hover:bg-gray-100 transition-colors group"
            onMouseDown={handleMouseDown}
          >
            <div className="flex space-x-1 opacity-60 group-hover:opacity-80 transition-opacity">
              <div className="w-1 h-6 bg-gray-500 rounded-full"></div>
              <div className="w-1 h-6 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Leaderboard Container - Same Height */}
        <div className="bg-white border border-gray-200 flex-1 flex flex-col" style={{ boxShadow: '0 0 0 1px #000' }}>
          {/* Leaderboard Header with Title and Tabs */}
          <div className="p-6 border-b border-gray-200 flex-shrink-0">
            <h2 className="text-xl font-bold text-gray-900 mb-4 uppercase">LEADERBOARD</h2>
            <div className="flex space-x-6">
              <button
                onClick={() => setActiveLeaderboardTab('students')}
                className={`pb-2 font-medium transition-colors ${
                  activeLeaderboardTab === 'students'
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Students
              </button>
              <button
                onClick={() => setActiveLeaderboardTab('squads')}
                className={`pb-2 font-medium transition-colors ${
                  activeLeaderboardTab === 'squads'
                    ? 'text-black border-b-2 border-black'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Squads
              </button>
            </div>
          </div>

          {/* Leaderboard Content */}
          <div className="p-6 flex-1 overflow-y-auto">
            {activeLeaderboardTab === 'students' ? (
              <div className="space-y-3">
                {individualLeaderboard.slice(0, 10).map((user, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-3 ${
                      user.isCurrentUser ? '' : 'bg-gray-50'
                    }`}
                    style={user.isCurrentUser ? { backgroundColor: '#DBFF4D' } : {}}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-lg font-bold text-gray-700">#{index + 1}</div>
                      <div className="relative">
                        <div className="w-8 h-8 bg-gray-300 flex items-center justify-center text-sm font-semibold">
                          {user.name.charAt(0)}
                        </div>
                        <div className="absolute -bottom-1 -right-1">
                          {getStatusIndicator(user.status)}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{user.name}</div>
                        <div className="text-sm text-gray-600">
                          {user.points.toLocaleString()} pts • Lv.{user.level} • {user.streak} day streak • {user.badges} badges
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{user.mastery}%</div>
                      <div className="text-xs text-gray-500">Mastery</div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {squadLeaderboard.slice(0, 10).map((squad, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center justify-between p-3 ${
                      squad.isCurrentSquad ? '' : 'bg-gray-50'
                    }`}
                    style={squad.isCurrentSquad ? { backgroundColor: '#DBFF4D' } : {}}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="text-lg font-bold text-gray-700">#{squad.rank}</div>
                      <div className="w-8 h-8 flex items-center justify-center text-xs font-bold" style={{ backgroundColor: '#FF69B4', color: 'white' }}>
                        {squad.name.split(' ').map((word) => word.charAt(0)).join('').substring(0, 2)}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{squad.name}</div>
                        <div className="text-sm text-gray-600">
                          {squad.points.toLocaleString()} pts • {squad.members} members • Avg Lv.{squad.avgLevel} • {squad.activeMembers} active
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-gray-900">{squad.mastery}%</div>
                      <div className="text-xs text-gray-500">Mastery</div>
              </div>
            </div>
          ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200" style={{ boxShadow: '0 0 0 1px #000' }}>
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 uppercase">SQUAD ACHIEVEMENTS</h2>
            <p className="text-sm text-gray-600 mt-1">Recent achievements from your squad</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {liveFeeds.map((feed, index) => (
                <div key={index} className="border border-gray-200 p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: '#FF69B4' }}>
                      <span className="text-sm font-semibold text-white">{feed.user.charAt(0)}</span>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">{feed.user}</div>
                      <div className="text-sm font-medium text-gray-800">{feed.achievement}</div>
                      <div className="text-sm text-gray-600">{feed.description}</div>
                      <div className="text-xs text-gray-500 mt-1">{feed.time}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-4 text-sm">
                      <button 
                        onClick={() => handleReaction(index, 'like')}
                        className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors"
                      >
                        <span>👍</span>
                        <span>{feed.reactions.likes}</span>
                      </button>
                      <button 
                        onClick={() => handleReaction(index, 'fire')}
                        className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors"
                      >
                        <span>🔥</span>
                        <span>{feed.reactions.fire}</span>
                      </button>
                      <button 
                        onClick={() => handleReaction(index, 'congrats')}
                        className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors"
                      >
                        <span>🎉</span>
                        <span>{feed.reactions.congrats}</span>
                      </button>
                      <button 
                        onClick={() => handleComment(index)}
                        className="flex items-center space-x-1 text-gray-600 hover:text-black transition-colors"
                      >
                        <span>💬</span>
                        <span>{feed.comments}</span>
                        <span className="text-xs ml-1">
                          {showComments === index ? 'Hide comments' : 'View comments'}
                        </span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Comments Section */}
                  {showComments === index && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="space-y-3">
                        {/* Sample comments */}
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: '#FF69B4' }}>
                            A
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">Alex</div>
                            <div className="text-sm text-gray-700">Amazing work! Keep it up! 🔥</div>
                            <div className="text-xs text-gray-500 mt-1">5 min ago</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start space-x-2">
                          <div className="w-6 h-6 flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: '#3FC7FF' }}>
                            S
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-medium text-gray-900">Sarah</div>
                            <div className="text-sm text-gray-700">Congrats! How did you manage to get perfect score?</div>
                            <div className="text-xs text-gray-500 mt-1">3 min ago</div>
                          </div>
                        </div>
                        
                        {/* Add comment input */}
                        <div className="flex space-x-2 mt-3">
                          <div className="w-6 h-6 flex items-center justify-center text-xs font-semibold" style={{ backgroundColor: '#DBFF4D' }}>
                            J
                          </div>
                          <div className="flex-1 relative">
                            <input
                              type="text"
                              value={newComment}
                              onChange={(e) => setNewComment(e.target.value)}
                              placeholder="Add a comment..."
                              className="w-full px-3 py-2 pr-16 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                              onKeyPress={(e) => e.key === 'Enter' && handleAddComment(index)}
                            />
                            <button
                              onClick={() => handleAddComment(index)}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-black text-white text-xs font-medium hover:bg-gray-800 transition-colors"
                            >
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200" style={{ boxShadow: '0 0 0 1px #000' }}>
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 uppercase">AVAILABLE TUTORS</h2>
            <p className="text-sm text-gray-600 mt-1">Expert help by subject</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 gap-4">
              {availableTutors.map((tutor, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center" style={{ backgroundColor: '#FF69B4' }}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" clipRule="evenodd"/>
                      </svg>
                    </div>
                <div className="flex-1">
                      <div className="flex flex-wrap gap-1 mb-2">
                        {tutor.subjects.slice(0, 2).map((subject, idx) => (
                          <span key={idx} className="px-2 py-1 text-black text-xs font-medium" style={{ backgroundColor: '#C4CEFF' }}>
                            {subject}
                          </span>
                        ))}
                        {tutor.subjects.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium">
                            +{tutor.subjects.length - 2} more
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <span className={tutor.availability.includes('now') ? 'text-green-600 font-medium' : 'text-orange-600 font-medium'}>
                          {tutor.availability}
                        </span>
                        <span className="text-gray-500">⭐ {tutor.rating}</span>
                        <span className="text-gray-500">{tutor.responseTime}</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-black text-white hover:bg-gray-800 transition-colors text-sm font-medium">
                    Connect
                  </button>
                </div>
              ))}
              </div>
          </div>
        </div>
      </div>

      {/* Squad Members Modal */}
      {showSquadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowSquadModal(false)}>
          <div className="bg-white w-full max-w-sm max-h-[60vh] mx-4 border border-gray-200 flex flex-col" style={{ boxShadow: '0 0 0 1px #000' }} onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200 flex-shrink-0">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-bold text-gray-900 uppercase">SQUAD MEMBERS</h2>
                <button 
                  onClick={() => setShowSquadModal(false)}
                  className="p-1 hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
              <input
                type="text"
                placeholder="Search students..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
              <p className="text-sm text-gray-600 mt-2">{filteredMembers.length} students</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-1">
                {filteredMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center space-x-3 p-2 text-sm ${
                      member.isCurrentUser ? '' : 'hover:bg-gray-50'
                    }`}
                    style={member.isCurrentUser ? { backgroundColor: '#DBFF4D' } : {}}
                  >
                    <div className="relative">
                      <div className="w-6 h-6 bg-gray-300 flex items-center justify-center text-xs font-semibold">
                        {member.name.charAt(0)}
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5">
                        <div className={`w-2 h-2 border border-white rounded-full ${
                          member.status === 'online' ? 'bg-green-500' : 
                          member.status === 'idle' ? 'bg-pink-400' : 'bg-gray-400'
                        }`}></div>
                      </div>
                    </div>
                    <div className="flex-1 font-medium text-gray-900">{member.name}</div>
                    <div className="text-xs text-gray-500">Lv.{member.level}</div>
                    <button
                      onClick={() => handleChatWithMember(member)}
                      className="px-2 py-1 text-xs font-medium text-black hover:bg-gray-200 transition-colors"
                      style={{ backgroundColor: '#C4CEFF' }}
                    >
                      Chat
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
