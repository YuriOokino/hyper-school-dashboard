import { useState, useEffect } from 'react';

export default function SquadContent() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatMessages, setChatMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');
  const [activeLeaderboardTab, setActiveLeaderboardTab] = useState('students');
  const [showSquadModal, setShowSquadModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showComments, setShowComments] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [recentChatsState, setRecentChatsState] = useState([]);
  const [collapsedSections, setCollapsedSections] = useState({
    topChats: false,
    tutors: false,
    chatHistory: false
  });
  
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
    0: [ // AI Tutor
      { id: 1, sender: "AI Tutor", message: "Hi Jennifer! How did your calculus exam go yesterday?", time: "9:15 AM", isCurrentUser: false, date: "Monday, January 13" },
      { id: 2, sender: "Jennifer", message: "It went well, thanks for the help with derivatives!", time: "9:16 AM", isCurrentUser: true, date: "Monday, January 13" },
      { id: 3, sender: "AI Tutor", message: "Excellent! Ready for today's physics lesson?", time: "9:17 AM", isCurrentUser: false, date: "Monday, January 13" },
      { id: 4, sender: "Jennifer", message: "Actually, can we review integration by parts first?", time: "9:20 AM", isCurrentUser: true, date: "Monday, January 13" },
      { id: 5, sender: "AI Tutor", message: "Of course! Integration by parts: ∫u dv = uv - ∫v du. What's your specific question?", time: "9:21 AM", isCurrentUser: false, date: "Monday, January 13" },
      { id: 6, sender: "Jennifer", message: "I get confused choosing which function to use for u and dv", time: "9:22 AM", isCurrentUser: true, date: "Monday, January 13" },
      { id: 7, sender: "AI Tutor", message: "Great question! Use LIATE: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. Pick u from left to right.", time: "9:23 AM", isCurrentUser: false, date: "Monday, January 13" },
      { id: 8, sender: "Jennifer", message: "Yes, I'm struggling with momentum concepts", time: "10:30 AM", isCurrentUser: true, date: "Today", isNew: true },
      { id: 9, sender: "AI Tutor", message: "Perfect timing! Let's break down momentum = mass × velocity. What specific part is confusing?", time: "10:31 AM", isCurrentUser: false, date: "Today" },
      { id: 10, sender: "Jennifer", message: "The conservation of momentum in collisions", time: "10:32 AM", isCurrentUser: true, date: "Today" },
      { id: 11, sender: "AI Tutor", message: "In elastic collisions, both momentum and kinetic energy are conserved. In inelastic, only momentum is conserved.", time: "10:33 AM", isCurrentUser: false, date: "Today" },
      { id: 12, sender: "Jennifer", message: "Can you give me a practice problem?", time: "10:35 AM", isCurrentUser: true, date: "Today" }
    ],
    1: [ // Study Group Alpha
      { id: 1, sender: "Sarah", message: "Did everyone finish the chemistry lab report?", time: "3:20 PM", isCurrentUser: false, date: "Friday, January 10" },
      { id: 2, sender: "Leo", message: "Still working on the conclusion section", time: "3:22 PM", isCurrentUser: false, date: "Friday, January 10" },
      { id: 3, sender: "Jennifer", message: "I can share my notes if it helps", time: "3:25 PM", isCurrentUser: true, date: "Friday, January 10" },
      { id: 4, sender: "Maya", message: "That would be amazing, thank you!", time: "3:26 PM", isCurrentUser: false, date: "Friday, January 10" },
      { id: 5, sender: "Sarah", message: "Jennifer's notes are always so well organized", time: "3:28 PM", isCurrentUser: false, date: "Friday, January 10" },
      { id: 6, sender: "Leo", message: "Agreed! They saved me in organic chemistry", time: "3:30 PM", isCurrentUser: false, date: "Friday, January 10" },
      { id: 7, sender: "Maya", message: "Hey everyone! Ready for the study session tomorrow?", time: "7:45 PM", isCurrentUser: false, date: "Sunday, January 12" },
      { id: 8, sender: "Jennifer", message: "Yes! I'll bring the whiteboard markers", time: "7:47 PM", isCurrentUser: true, date: "Sunday, January 12" },
      { id: 9, sender: "Sarah", message: "I'll bring snacks and coffee", time: "7:48 PM", isCurrentUser: false, date: "Sunday, January 12" },
      { id: 10, sender: "Leo", message: "Perfect! See you all at 2 PM in the library", time: "7:50 PM", isCurrentUser: false, date: "Sunday, January 12" },
      { id: 11, sender: "Leo", message: "Anyone free for math help?", time: "2:15 PM", isCurrentUser: false, date: "Today", isNew: true },
      { id: 12, sender: "Jennifer", message: "I can help! What topic?", time: "2:16 PM", isCurrentUser: true, date: "Today" },
      { id: 13, sender: "Leo", message: "Quadratic equations are confusing me", time: "2:17 PM", isCurrentUser: false, date: "Today" },
      { id: 14, sender: "Maya", message: "I'm also struggling with those! Mind if I join?", time: "2:18 PM", isCurrentUser: false, date: "Today" },
      { id: 15, sender: "Jennifer", message: "Of course! The more the merrier 😊", time: "2:19 PM", isCurrentUser: true, date: "Today" }
    ],
    2: [ // Leo
      { id: 1, sender: "Leo", message: "Hey! Did you see the new assignment posted?", time: "4:30 PM", isCurrentUser: false, date: "Thursday, January 9" },
      { id: 2, sender: "Jennifer", message: "Yes, looks challenging but interesting", time: "4:35 PM", isCurrentUser: true, date: "Thursday, January 9" },
      { id: 3, sender: "Leo", message: "Want to work on it together this weekend?", time: "4:36 PM", isCurrentUser: false, date: "Thursday, January 9" },
      { id: 4, sender: "Jennifer", message: "Sounds great! Saturday afternoon work for you?", time: "4:38 PM", isCurrentUser: true, date: "Thursday, January 9" },
      { id: 5, sender: "Leo", message: "Perfect! My place or the library?", time: "4:40 PM", isCurrentUser: false, date: "Thursday, January 9" },
      { id: 6, sender: "Jennifer", message: "Library is good - quieter for studying", time: "4:42 PM", isCurrentUser: true, date: "Thursday, January 9" },
      { id: 7, sender: "Leo", message: "How did you find the science quiz?", time: "11:20 AM", isCurrentUser: false, date: "Monday, January 13" },
      { id: 8, sender: "Jennifer", message: "It was challenging but fair!", time: "11:25 AM", isCurrentUser: true, date: "Monday, January 13" },
      { id: 9, sender: "Leo", message: "I totally blanked on the molecular structure question", time: "11:27 AM", isCurrentUser: false, date: "Monday, January 13" },
      { id: 10, sender: "Jennifer", message: "That one was tricky! The benzene rings threw me off too", time: "11:30 AM", isCurrentUser: true, date: "Monday, January 13" },
      { id: 11, sender: "Leo", message: "At least we survived organic chemistry this semester 😅", time: "11:32 AM", isCurrentUser: false, date: "Monday, January 13" },
      { id: 12, sender: "Leo", message: "Great job on the quiz results! 🎉", time: "2:30 PM", isCurrentUser: false, date: "Today", isNew: true },
      { id: 13, sender: "Jennifer", message: "Thanks! Your study tips really helped", time: "2:32 PM", isCurrentUser: true, date: "Today" },
      { id: 14, sender: "Leo", message: "We should celebrate! Coffee after class?", time: "2:35 PM", isCurrentUser: false, date: "Today" },
      { id: 15, sender: "Jennifer", message: "Absolutely! I know a great café near campus", time: "2:37 PM", isCurrentUser: true, date: "Today" }
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
      subject: "Mathematics",
      availability: "Available now",
      rating: "4.9"
    },
    {
      subject: "Physics",
      availability: "Available now", 
      rating: "4.8"
    },
    {
      subject: "English",
      availability: "Available in 15 min",
      rating: "4.7"
    },
    {
      subject: "History",
      availability: "Available now",
      rating: "4.9"
    },
    {
      subject: "Computer Science",
      availability: "Busy until 5 PM",
      rating: "4.8"
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

  const handleConnectToTutor = (tutor) => {
    // Create a new chat with the tutor
    const newChat = {
      id: Date.now(), // Simple ID generation
      name: `${tutor.subject} Tutor`,
      type: 'tutor',
      avatar: tutor.subject.charAt(0),
      lastMessage: "Hi! I'm ready to help you with " + tutor.subject,
      time: "now",
      unread: 1,
      status: tutor.availability.includes('now') ? 'online' : 'idle'
    };

    // Add to the beginning of the chat list
    setRecentChatsState(prevChats => [newChat, ...prevChats]);
    
    // Initialize chat messages for this new chat
    setChatMessages(prevMessages => ({
      ...prevMessages,
      [newChat.id]: [
        {
          id: 1,
          sender: `${tutor.subject} Tutor`,
          message: `Hi Jennifer! I'm your ${tutor.subject} tutor. How can I help you today?`,
          time: "now",
          isCurrentUser: false
        }
      ]
    }));

    // Auto-select the new chat
    setSelectedChat(newChat);
    
    console.log(`Connected to ${tutor.subject} tutor`);
  };

  const filteredMembers = squadMembers.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Initialize chat state with recentChats data
  useEffect(() => {
    setRecentChatsState(recentChats);
  }, []);

  const handleChatWithMember = (member) => {
    console.log(`Starting chat with ${member.name}`);
    setShowSquadModal(false);
  };

  const toggleSection = (section) => {
    setCollapsedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
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


  return (
    <div className="space-y-4 pb-4">
      {/* Header with Squad Info */}
      <div className="p-3">
        <div className="flex items-start justify-between mb-4">
                <div>
            <h1 className="text-3xl font-bold text-gray-900 uppercase mb-2" style={{ fontFamily: 'Oswald' }}>LIGHTNING BOLTS</h1>
            <div className="flex items-center space-x-3 mb-1">
              <p className="text-lg text-gray-600">Squad Lead: Ms. Rodriguez</p>
              <button className="px-3 py-1 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors">
                Message
              </button>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg text-gray-600">95 Students</span>
              <button 
                onClick={() => setShowSquadModal(true)}
                className="text-sm font-medium text-black hover:text-gray-600 transition-colors flex items-center space-x-1"
              >
                <span>View All</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
                </button>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">#2</div>
            <div className="text-sm text-gray-600">Squad Rank</div>
          </div>
        </div>
        
              </div>
              

      {/* Main Content - Chat Interface */}
      <div className="mb-4">
        <div className="border border-gray-200 flex flex-col h-[600px]" style={{ 
          boxShadow: '0 0 0 1px #000'
        }}>
          {/* Search Bar and New Button - Top of Chat */}
          <div className="p-4 bg-gray-800">
            <div className="flex items-center justify-between">
              <div className="relative" style={{ width: '320px' }}>
                <svg className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                </svg>
                <input
                  type="text"
                  placeholder="Search contact"
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button className="px-6 py-3 text-sm font-medium text-white border border-green-400 hover:bg-green-400 transition-colors" style={{ backgroundColor: '#DBFF4D', color: '#000' }}>
                New ⊕
              </button>
            </div>
          </div>

          <div className="bg-white flex flex-1 min-h-0">
          {/* Chat Sidebar - Enhanced Design */}
          <div className="w-80 border-r border-gray-200 flex flex-col bg-white overflow-hidden">

            <div className="flex-1 overflow-y-auto min-h-0">
              {/* Top Chats Section */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={() => toggleSection('topChats')}>
                  <h3 className="text-sm font-medium text-gray-700">Top chats</h3>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${collapsedSections.topChats ? '-rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                
                {!collapsedSections.topChats && (
                  <div className="space-y-1">
                    {recentChatsState.filter(chat => chat.type !== 'ai' && chat.type !== 'tutor').map((chat) => (
                  <div 
                    key={chat.id} 
                    onClick={() => selectChat(chat)}
                    className={`flex items-center p-2 hover:bg-gray-50 cursor-pointer mb-1 ${
                      selectedChat?.id === chat.id ? 'bg-blue-100' : ''
                    }`}
                  >
                    <div className="relative mr-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#FF69B4' }}>
                        {chat.avatar}
                      </div>
                      {chat.type === 'individual' && (
                        <div className="absolute -bottom-1 -right-1">
                          <div className={`w-3 h-3 rounded-full border-2 border-white ${
                            chat.status === 'online' ? 'bg-green-500' : 
                            chat.status === 'idle' ? 'bg-yellow-500' : 'bg-gray-400'
                          }`}></div>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900 truncate">{chat.name}</span>
                        {chat.unread > 0 && (
                          <span className="ml-2 px-1 text-xs font-bold text-white bg-pink-500">New!</span>
                        )}
                      </div>
                      <div className="text-xs text-gray-600 capitalize">
                        {chat.type === 'individual' ? chat.status : `${chat.members} Online`}
                      </div>
                    </div>
                  </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tutors Section */}
              <div className="p-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={() => toggleSection('tutors')}>
                  <h3 className="text-sm font-medium text-gray-700">Tutors</h3>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${collapsedSections.tutors ? '-rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                
                {!collapsedSections.tutors && (
                  <div className="space-y-1">
                    {/* AI Tutor */}
                <div 
                  onClick={() => selectChat(recentChatsState.find(chat => chat.type === 'ai'))}
                  className={`flex items-center p-2 hover:bg-gray-50 cursor-pointer mb-1 ${
                    selectedChat?.type === 'ai' ? 'bg-blue-100' : ''
                  }`}
                >
                  <div className="relative mr-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#3FC7FF' }}>
                      <span className="text-white font-bold text-sm">AI</span>
                    </div>
                    <div className="absolute -bottom-1 -right-1">
                      <div className="w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">AI Tutor</span>
                      <button className="px-2 py-1 text-xs bg-gray-100 text-gray-700 hover:bg-gray-200">
                        Chat
                      </button>
                    </div>
                    <div className="text-xs text-green-600">Always active</div>
                  </div>
                </div>

                {/* Subject Tutors */}
                {availableTutors.slice(0, 4).map((tutor, index) => (
                  <div 
                    key={index}
                    onClick={() => handleConnectToTutor(tutor)}
                    className="flex items-center p-2 hover:bg-gray-50 cursor-pointer mb-1"
                  >
                    <div className="relative mr-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: '#666' }}>
                        {tutor.subject.charAt(0)}
                      </div>
                      <div className="absolute -bottom-1 -right-1">
                        <div className={`w-3 h-3 rounded-full border-2 border-white ${
                          tutor.availability.includes('now') ? 'bg-green-500' : 'bg-gray-400'
                        }`}></div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-900 truncate">{tutor.subject} Tutor</span>
                        <button className="px-2 py-1 text-xs bg-gray-100 text-gray-700 hover:bg-gray-200">
                          Chat
                        </button>
                      </div>
                      <div className="text-xs text-gray-600">{tutor.availability.includes('now') ? 'Online' : 'Back at 2:30PM'}</div>
                    </div>
                  </div>
                ))}
                  </div>
                )}
              </div>

              {/* All Chats */}
              <div className="p-3 border-t border-gray-100">
                <div className="flex items-center justify-between mb-2 cursor-pointer" onClick={() => toggleSection('chatHistory')}>
                  <h3 className="text-sm font-medium text-gray-700">All chats</h3>
                  <svg className={`w-4 h-4 text-gray-400 transition-transform ${collapsedSections.chatHistory ? '-rotate-90' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </div>
                
                {!collapsedSections.chatHistory && (
                  <div className="space-y-1">
                    <p className="text-xs text-gray-500 px-2">No additional chat history</p>
                  </div>
                )}
              </div>
            </div>

            {/* User Status */}
            <div className="p-3 border-t border-gray-200 bg-gray-900">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#DBFF4D', color: '#000' }}>
                    J
                  </div>
                  <div className="absolute -bottom-1 -right-1">
                    <div className="w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="font-medium text-white">Jennifer</div>
                  <div className="text-xs text-green-400">Online ●</div>
                </div>
              </div>
            </div>
          </div>

            {/* Chat Main Area */}
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
            {selectedChat ? (
              <>
                {/* Chat Header - Slack Style */}
                <div className="px-4 py-3 border-b border-gray-200 bg-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <h3 className="text-lg font-bold text-gray-900">
                        {selectedChat.type === 'group' && '# '}
                        {selectedChat.name}
                      </h3>
                      
                      {selectedChat.type === 'individual' && selectedChat.status && (
                        <div className="flex items-center space-x-1">
                          <div className={`w-2 h-2 rounded-full ${
                            selectedChat.status === 'online' ? 'bg-green-500' : 
                            selectedChat.status === 'idle' ? 'bg-yellow-500' : 'bg-gray-400'
                          }`}></div>
                          <span className="text-sm text-gray-600 capitalize">{selectedChat.status}</span>
                        </div>
                      )}
                      
                      {selectedChat.type === 'group' && (
                        <div className="flex items-center space-x-2">
                          {/* Member avatars */}
                          <div className="flex -space-x-2">
                            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-white" style={{ backgroundColor: '#C4CEFF' }}>
                              L
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-white" style={{ backgroundColor: '#FF69B4' }}>
                              A
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-white" style={{ backgroundColor: '#3FC7FF' }}>
                              S
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-semibold text-white" style={{ backgroundColor: '#DBFF4D', color: '#000' }}>
                              J
                            </div>
                            <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs font-semibold text-gray-600">
                              +{selectedChat.members - 4}
                            </div>
                          </div>
                          <span className="text-sm text-gray-600">{selectedChat.members} members</span>
                        </div>
                      )}
                      
                      {selectedChat.type === 'ai' && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium">AI Assistant</span>
                      )}
                      
                      {selectedChat.type === 'tutor' && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium">Subject Tutor</span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-1">
                      <button className="p-2 hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-gray-100 text-gray-600 hover:text-gray-800 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Messages Area - Slack Style */}
                <div className="flex-1 overflow-y-auto bg-gray-50 min-h-0">
                  <div className="p-4 space-y-1">
                    {getCurrentMessages().map((message, index) => {
                      const previousMessage = getCurrentMessages()[index - 1];
                      const showAvatar = !previousMessage || previousMessage.sender !== message.sender || previousMessage.isCurrentUser !== message.isCurrentUser;
                      const showDateSeparator = !previousMessage || previousMessage.date !== message.date;
                      const showNewSeparator = message.isNew && (!previousMessage || !previousMessage.isNew);
                      
                      
                      return (
                        <div key={message.id}>
                          {/* Date Separator */}
                          {showDateSeparator && (
                            <div className="flex items-center my-4 -mx-4 px-4">
                              <div className="flex-1 h-px bg-gray-300"></div>
                              <div className="px-4 text-xs font-medium text-gray-600 bg-gray-50">
                                {message.date}
                              </div>
                              <div className="flex-1 h-px bg-gray-300"></div>
                            </div>
                          )}
                          
                          {/* NEW Separator */}
                          {showNewSeparator && (
                            <div className="flex items-center my-3 -mx-4 px-4">
                              <div className="flex-1 h-px bg-red-300"></div>
                              <div className="px-3 py-1 text-xs font-bold text-red-600 bg-red-50 border border-red-200">
                                NEW
                              </div>
                              <div className="flex-1 h-px bg-red-300"></div>
                            </div>
                          )}
                          
                          <div className="group hover:bg-gray-50 -mx-4 px-4 py-1">
                            <div className="flex items-start space-x-3">
                              {showAvatar ? (
                                <div className="flex-shrink-0 mt-1">
                                  <div className="w-9 h-9 flex items-center justify-center text-sm font-semibold text-white" 
                                       style={{ 
                                         backgroundColor: message.isCurrentUser ? '#DBFF4D' : 
                                                        message.sender === 'AI Tutor' ? '#3FC7FF' :
                                                        message.sender.includes('Tutor') ? '#FF69B4' : '#C4CEFF'
                                       }}>
                                    {message.isCurrentUser ? 'J' : message.sender.charAt(0)}
                                  </div>
                                </div>
                              ) : (
                                <div className="w-9 flex-shrink-0 flex justify-center">
                                  <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 mt-1">
                                    {message.time}
                                  </div>
                                </div>
                              )}
                              
                              <div className="flex-1 min-w-0">
                                {showAvatar && (
                                  <div className="flex items-baseline space-x-2 mb-1">
                                    <span className="text-sm font-bold text-gray-900">
                                      {message.isCurrentUser ? 'Jennifer' : message.sender}
                                    </span>
                                    <span className="text-xs text-gray-500">
                                      {message.time}
                                    </span>
                                  </div>
                                )}
                                
                                <div className="text-sm text-gray-900 leading-relaxed">
                                  {message.message}
                                </div>
                                
                                {/* Message actions (appear on hover) */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity mt-1">
                <div className="flex items-center space-x-1">
                                    <button className="p-1 hover:bg-gray-200 text-gray-500 hover:text-gray-700 text-xs">
                                      😊
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Message Input - Slack Style */}
                <div className="p-4 bg-white">
                  <div className="relative">
                    <div className="border border-gray-300 focus-within:border-black focus-within:shadow-sm bg-white">
                      <div className="flex items-end p-3">
                        <div className="flex-1">
                          <input
                            type="text"
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder={`Message ${selectedChat.name}`}
                            className="w-full text-sm text-gray-900 placeholder-gray-500 border-0 focus:outline-none resize-none bg-transparent"
                            onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendChatMessage())}
                          />
                        </div>
                        
                        {/* Input toolbar */}
                        <div className="flex items-center space-x-2 ml-3">
                          <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                            </svg>
                          </button>
                          <button className="p-1 text-gray-500 hover:text-gray-700 hover:bg-gray-100">
                            😊
                          </button>
                          <button
                            onClick={handleSendChatMessage}
                            className="px-3 py-1 bg-black text-white hover:bg-gray-800 transition-colors text-xs font-medium"
                          >
                            Send
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Format toolbar (like Slack) */}
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                      <div className="flex items-center space-x-3">
                        <button className="hover:text-gray-700">
                          <strong>B</strong>
                        </button>
                        <button className="hover:text-gray-700">
                          <em>I</em>
                        </button>
                        <button className="hover:text-gray-700">
                          <s>S</s>
                        </button>
                        <button className="hover:text-gray-700">
                          + Add file
                        </button>
                        <button className="hover:text-gray-700">
                          🔗 Link
                        </button>
                      </div>
                      <div className="text-xs text-gray-400">
                        <span className="font-medium">Enter</span> to send, <span className="font-medium">Shift + Enter</span> for new line
                      </div>
                    </div>
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
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 mb-6">
        {/* Squad Achievements */}
        <div className="bg-white border border-gray-200 flex flex-col" style={{ boxShadow: '0 0 0 1px #000', maxHeight: '400px' }}>
          <div className="p-6 border-b border-gray-200 flex-shrink-0">
            <h2 className="text-xl font-bold text-gray-900 uppercase">SQUAD ACHIEVEMENTS</h2>
            <p className="text-sm text-gray-600 mt-1">Recent achievements from your squad</p>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
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

        {/* Leaderboard */}
        <div className="bg-white border border-gray-200 flex flex-col" style={{ boxShadow: '0 0 0 1px #000' }}>
          <div className="p-6 border-b border-gray-200">
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
                          <div className={`w-3 h-3 border border-white rounded-full ${
                            user.status === 'online' ? 'bg-green-500' : 
                            user.status === 'idle' ? 'bg-pink-400' : 'bg-gray-400'
                          }`}></div>
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
                    className="flex items-center space-x-3 p-2 text-sm hover:bg-gray-50"
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
                    {!member.isCurrentUser && (
                      <button
                        onClick={() => handleChatWithMember(member)}
                        className="px-2 py-1 text-xs font-medium text-black hover:bg-gray-200 transition-colors"
                        style={{ backgroundColor: '#C4CEFF' }}
                      >
                        Chat
                      </button>
                    )}
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
