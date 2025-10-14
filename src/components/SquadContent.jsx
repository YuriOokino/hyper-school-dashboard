import { useState, useEffect } from 'react';

export default function SquadContent() {
  const [selectedTutor, setSelectedTutor] = useState(null);
  const [tutorMessages, setTutorMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');
  const [newSquadMessage, setNewSquadMessage] = useState('');
  const [showSquadModal, setShowSquadModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [squadFeedItems, setSquadFeedItems] = useState([]);
  
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

  // Tutor chats data
  const tutorChats = [
    { 
      id: 0,
      name: "AI Tutor",
      lastMessage: "Hi Jennifer! What subject are you working on today?",
      time: "Just now",
      unread: 0,
      type: "ai",
      avatar: "AI",
      status: "online"
    }
  ];

  // Tutor chat messages
  const initialTutorMessages = {
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
    ]
  };

  // Initial squad feed data - mix of achievements and messages
  const initialSquadFeed = [
    {
      id: 1,
      type: "achievement",
      user: "Leo",
      achievement: "🏆 Quiz Master",
      description: "Perfect score on Math quiz!",
      time: "2 min ago",
      timestamp: Date.now() - 120000,
      reactions: { likes: 15, fire: 8, congrats: 12 },
      userReactions: []
    },
    {
      id: 2,
      type: "message",
      user: "Maya",
      message: "Congrats Leo! That's amazing! 🎉",
      time: "3 min ago",
      timestamp: Date.now() - 180000,
      reactions: { likes: 3, fire: 0, congrats: 0 },
      userReactions: []
    },
    {
      id: 3,
      type: "message",
      user: "Jennifer",
      message: "Way to go! Can you share your study techniques?",
      time: "5 min ago",
      timestamp: Date.now() - 300000,
      reactions: { likes: 5, fire: 0, congrats: 0 },
      userReactions: []
    },
    {
      id: 4,
      type: "achievement",
      user: "Sophia",
      achievement: "🎯 Streak Champion",
      description: "20-day learning streak achieved",
      time: "15 min ago",
      timestamp: Date.now() - 900000,
      reactions: { likes: 23, fire: 5, congrats: 18 },
      userReactions: []
    },
    {
      id: 5,
      type: "message",
      user: "Ethan",
      message: "Sophia, you're an inspiration! Keep it up! 💪",
      time: "16 min ago",
      timestamp: Date.now() - 960000,
      reactions: { likes: 7, fire: 2, congrats: 0 },
      userReactions: []
    },
    {
      id: 6,
      type: "message",
      user: "Ava",
      message: "Does anyone have tips for the upcoming science test?",
      time: "30 min ago",
      timestamp: Date.now() - 1800000,
      reactions: { likes: 4, fire: 0, congrats: 0 },
      userReactions: []
    },
    {
      id: 7,
      type: "achievement",
      user: "Maya",
      achievement: "📚 Knowledge Seeker",
      description: "Completed 6 lessons today",
      time: "1 hour ago",
      timestamp: Date.now() - 3600000,
      reactions: { likes: 11, fire: 14, congrats: 7 },
      userReactions: []
    },
    {
      id: 8,
      type: "message",
      user: "Jordan",
      message: "Hey squad! Who's ready for this week's challenges?",
      time: "1.5 hours ago",
      timestamp: Date.now() - 5400000,
      reactions: { likes: 12, fire: 8, congrats: 0 },
      userReactions: []
    },
    {
      id: 9,
      type: "achievement",
      user: "Ethan",
      achievement: "💡 Problem Solver",
      description: "Solved advanced calculus challenge",
      time: "2 hours ago",
      timestamp: Date.now() - 7200000,
      reactions: { likes: 19, fire: 11, congrats: 15 },
      userReactions: []
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

  const handleReaction = (feedItemId, reactionType) => {
    setSquadFeedItems(prevItems => 
      prevItems.map(item => {
        if (item.id === feedItemId) {
          const hasReacted = item.userReactions.includes(reactionType);
          return {
            ...item,
            reactions: {
              ...item.reactions,
              [reactionType]: hasReacted 
                ? item.reactions[reactionType] - 1 
                : item.reactions[reactionType] + 1
            },
            userReactions: hasReacted
              ? item.userReactions.filter(r => r !== reactionType)
              : [...item.userReactions, reactionType]
          };
        }
        return item;
      })
    );
  };

  const handleConnectToTutor = (tutor) => {
    const tutorId = Date.now();
    const newTutor = {
      id: tutorId,
      name: `${tutor.subject} Tutor`,
      type: 'tutor',
      avatar: tutor.subject.charAt(0),
      lastMessage: "Hi! I'm ready to help you with " + tutor.subject,
      time: "now",
      unread: 1,
      status: tutor.availability.includes('now') ? 'online' : 'idle'
    };

    // Initialize messages for this tutor
    setTutorMessages(prev => ({
      ...prev,
      [tutorId]: [
        {
          id: 1,
          sender: `${tutor.subject} Tutor`,
          message: `Hi Jennifer! I'm your ${tutor.subject} tutor. How can I help you today?`,
          time: "now",
          isCurrentUser: false,
          date: "Today"
        }
      ]
    }));

    setSelectedTutor(newTutor);
  };

  const filteredMembers = squadMembers.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Initialize squad feed and tutor messages
  useEffect(() => {
    setSquadFeedItems(initialSquadFeed);
    setTutorMessages(initialTutorMessages);
  }, []);

  const handleChatWithMember = (member) => {
    console.log(`Starting chat with ${member.name}`);
    setShowSquadModal(false);
  };

  const selectTutor = (tutor) => {
    setSelectedTutor(tutor);
    if (!tutorMessages[tutor.id] && initialTutorMessages[tutor.id]) {
      setTutorMessages(prev => ({
        ...prev,
        [tutor.id]: initialTutorMessages[tutor.id]
      }));
    }
  };

  const getCurrentTutorMessages = () => {
    if (!selectedTutor) return [];
    return tutorMessages[selectedTutor.id] || initialTutorMessages[selectedTutor.id] || [];
  };

  const handleSendTutorMessage = () => {
    if (!newMessage.trim() || !selectedTutor) return;
    
    const newMsg = {
      id: Date.now(),
      sender: "Jennifer",
      message: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      isCurrentUser: true,
      date: "Today"
    };

    setTutorMessages(prev => ({
      ...prev,
      [selectedTutor.id]: [...(prev[selectedTutor.id] || []), newMsg]
    }));
    
    setNewMessage('');
    
    // AI/Tutor response simulation
    if (selectedTutor.type === 'ai' || selectedTutor.type === 'tutor') {
      setTimeout(() => {
        const response = {
          id: Date.now() + 1,
          sender: selectedTutor.name,
          message: "I understand you need help with that topic. Let me provide guidance and examples.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          isCurrentUser: false,
          date: "Today"
        };
        
        setTutorMessages(prev => ({
          ...prev,
          [selectedTutor.id]: [...(prev[selectedTutor.id] || []), response]
        }));
      }, 1000);
    }
  };

  const handleSendSquadMessage = () => {
    if (!newSquadMessage.trim()) return;
    
    const newMsg = {
      id: Date.now(),
      type: "message",
      user: "Jennifer",
      message: newSquadMessage,
      time: "Just now",
      timestamp: Date.now(),
      reactions: { likes: 0, fire: 0, congrats: 0 },
      userReactions: []
    };

    setSquadFeedItems(prev => [newMsg, ...prev]);
    setNewSquadMessage('');
  };


  return (
    <div className="space-y-4 pb-4">
      {/* Header with Squad Info */}
      <div>
        {/* Title and Rank */}
        <div className="flex items-center space-x-4 mb-4">
          <h1 className="text-3xl font-bold text-gray-900 uppercase" style={{ fontFamily: 'Oswald' }}>LIGHTNING BOLTS</h1>
          <div className="flex items-center space-x-2 px-4 py-2 bg-yellow-100 border-2 border-yellow-400">
            <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-2xl font-bold text-gray-900">#2</span>
            <span className="text-sm font-medium text-gray-600">Rank</span>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-4 gap-2">
          {/* Card 1: Squad Leader */}
          <div className="col-span-1 bg-white border-2 border-gray-200 p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-gray-900 uppercase mb-3">Squad Leader</h3>
              <div className="flex items-center space-x-3 mb-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
                    MR
                  </div>
                  <div className="absolute -bottom-1 -right-1">
                    <div className="w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900">Ms. Rodriguez</div>
                  <div className="text-xs text-green-600">● Online</div>
                </div>
              </div>
            </div>
            <button className="w-full px-3 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors">
              Message
            </button>
          </div>

          {/* Card 2: Squad Members */}
          <div className="col-span-1 bg-white border-2 border-gray-200 p-4 flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-gray-900 uppercase mb-3">Squad Members</h3>
              <div className="mb-3">
                <div className="text-3xl font-bold text-gray-900 mb-1">95</div>
                <div className="text-sm text-gray-600 mb-2">Total Students</div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">82 online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setShowSquadModal(true)}
              className="w-full px-3 py-2 text-sm font-medium border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
            >
              View All
            </button>
          </div>

          {/* Card 3: Leaderboard Preview (spans 2 columns) */}
          <div className="col-span-2 bg-white border-2 border-gray-200 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900 uppercase">Leaderboard Preview</h3>
              <button className="text-xs font-medium text-black hover:text-gray-600 transition-colors flex items-center space-x-1">
                <span>View Full Rankings</span>
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {/* Top 5 Students */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Top Students</h4>
                <div className="space-y-1">
                  {individualLeaderboard.slice(0, 5).map((user, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center justify-between text-sm py-1 px-2 ${
                        user.isCurrentUser ? 'bg-yellow-100 font-bold' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 font-medium">#{index + 1}</span>
                        <span className="truncate">{user.name}</span>
                      </div>
                      <span className="text-gray-600">{user.points}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top 5 Squads */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Top Squads</h4>
                <div className="space-y-1">
                  {squadLeaderboard.slice(0, 5).map((squad, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center justify-between text-sm py-1 px-2 ${
                        squad.isCurrentSquad ? 'bg-yellow-100 font-bold' : ''
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500 font-medium">#{squad.rank}</span>
                        <span className="truncate">{squad.name}</span>
                      </div>
                      <span className="text-gray-600">{squad.points}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
              

      {/* Squad Feed - Supervised Group Chat + Achievements */}
      <div className="mb-4">
        <div className="bg-white border border-gray-200 flex" style={{ minHeight: '600px' }}>
          {/* Left Sidebar - Tutors */}
          <div className="w-80 border-r border-gray-200 flex flex-col bg-gray-50">
            <div className="p-4 border-b border-gray-200 bg-white">
              <h3 className="font-bold text-gray-900 uppercase mb-1">Squad Chat</h3>
              <div className="flex items-center space-x-2 mt-2">
                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
                <span className="text-xs text-gray-600">
                  Supervised by <span className="font-semibold">Ms. Rodriguez</span>
                </span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-3">
              {/* Squad Feed Link */}
              <div 
                onClick={() => setSelectedTutor(null)}
                className={`flex items-center p-3 cursor-pointer mb-3 transition-all ${
                  !selectedTutor ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <div className="relative mr-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: '#DBFF4D', color: '#000' }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 text-sm">Squad Feed</div>
                  <div className="text-xs text-gray-600">95 members online</div>
                </div>
              </div>

              <div className="border-t border-gray-300 my-3"></div>
              <h4 className="text-xs font-semibold text-gray-500 uppercase px-2 mb-2">Private Tutoring</h4>

              {/* AI Tutor */}
              <div 
                onClick={() => selectTutor(tutorChats[0])}
                className={`flex items-center p-3 cursor-pointer mb-2 transition-all ${
                  selectedTutor?.id === tutorChats[0].id ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white hover:bg-gray-100 border border-gray-200'
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
                  <div className="font-semibold text-gray-900 text-sm">AI Tutor</div>
                  <div className="text-xs text-green-600 font-medium">● Always Available</div>
                </div>
              </div>

              {availableTutors.map((tutor, index) => (
                <div 
                  key={index}
                  onClick={() => handleConnectToTutor(tutor)}
                  className={`flex items-center p-3 cursor-pointer mb-2 transition-all ${
                    selectedTutor?.name === `${tutor.subject} Tutor` ? 'bg-blue-100 border-2 border-blue-500' : 'bg-white hover:bg-gray-100 border border-gray-200'
                  }`}
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
                    <div className="font-semibold text-gray-900 text-sm">{tutor.subject}</div>
                    <div className={`text-xs font-medium ${tutor.availability.includes('now') ? 'text-green-600' : 'text-gray-500'}`}>
                      {tutor.availability}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col">
            {selectedTutor ? (
              /* Tutor Chat Interface */
              <>
                {/* Back to Squad Feed Link */}
                <div className="px-4 py-3 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
                  <button 
                    onClick={() => setSelectedTutor(null)}
                    className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Back to Squad Feed</span>
                  </button>
                </div>

                <div className="p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" 
                         style={{ backgroundColor: selectedTutor.type === 'ai' ? '#3FC7FF' : '#666' }}>
                      <span className="text-white font-bold text-sm">
                        {selectedTutor.type === 'ai' ? 'AI' : selectedTutor.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{selectedTutor.name}</div>
                      <div className="text-xs text-green-600">● Online - Private Session</div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
                  <div className="space-y-3">
                    {getCurrentTutorMessages().map((message) => (
                      <div key={message.id} className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-md px-4 py-2 ${
                          message.isCurrentUser 
                            ? 'bg-black text-white' 
                            : 'bg-white border border-gray-200 text-gray-900'
                        }`}>
                          <div className="text-sm">{message.message}</div>
                          <div className={`text-xs mt-1 ${message.isCurrentUser ? 'text-gray-300' : 'text-gray-500'}`}>
                            {message.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="border border-gray-300 focus-within:border-black bg-white">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Ask a question..."
                      className="w-full px-3 py-3 text-sm focus:outline-none bg-transparent"
                      onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendTutorMessage())}
                    />
                    <div className="flex items-center justify-between px-3 pb-2">
                      <div className="flex items-center space-x-3">
                        <button className="text-gray-500 hover:text-gray-700 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 transition-colors font-bold text-sm">
                          B
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 transition-colors italic text-sm">
                          I
                        </button>
                        <button className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                          <s>S</s>
                        </button>
                      </div>
                      <button
                        onClick={handleSendTutorMessage}
                        className="px-4 py-1.5 bg-black text-white hover:bg-gray-800 transition-colors text-sm font-medium"
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              /* Unified Feed - Achievements + Messages */
              <>
                <div className="flex-1 overflow-y-auto bg-gray-50">
            <div className="max-w-4xl mx-auto p-4 space-y-3">
              {squadFeedItems.map((item) => (
                <div key={item.id}>
                  {item.type === 'achievement' ? (
                    /* Achievement Card - Prominent */
                    <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300 p-4 shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg" style={{ backgroundColor: '#FF69B4' }}>
                          {item.user.charAt(0)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-bold text-gray-900 text-base">{item.user}</span>
                            <span className="text-sm text-gray-500">{item.time}</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">{item.achievement}</div>
                          <div className="text-sm text-gray-700">{item.description}</div>
                        </div>
                      </div>
                      
                      {/* Prominent Reactions */}
                      <div className="flex items-center space-x-2 pt-3 border-t border-yellow-200">
                        <button 
                          onClick={() => handleReaction(item.id, 'likes')}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                            item.userReactions.includes('likes')
                              ? 'bg-blue-100 border-2 border-blue-500'
                              : 'bg-white border border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                          }`}
                        >
                          <span className="text-2xl">👍</span>
                          <span className="font-bold text-gray-900">{item.reactions.likes}</span>
                        </button>
                        <button 
                          onClick={() => handleReaction(item.id, 'fire')}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                            item.userReactions.includes('fire')
                              ? 'bg-orange-100 border-2 border-orange-500'
                              : 'bg-white border border-gray-300 hover:border-orange-400 hover:bg-orange-50'
                          }`}
                        >
                          <span className="text-2xl">🔥</span>
                          <span className="font-bold text-gray-900">{item.reactions.fire}</span>
                        </button>
                        <button 
                          onClick={() => handleReaction(item.id, 'congrats')}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                            item.userReactions.includes('congrats')
                              ? 'bg-green-100 border-2 border-green-500'
                              : 'bg-white border border-gray-300 hover:border-green-400 hover:bg-green-50'
                          }`}
                        >
                          <span className="text-2xl">🎉</span>
                          <span className="font-bold text-gray-900">{item.reactions.congrats}</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Regular Message */
                    <div className="bg-white border border-gray-200 p-3 hover:shadow-sm transition-all">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white" 
                             style={{ backgroundColor: item.user === 'Jennifer' ? '#DBFF4D' : '#C4CEFF' }}>
                          <span style={{ color: item.user === 'Jennifer' ? '#000' : '#FFF' }}>
                            {item.user.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-semibold text-gray-900">{item.user}</span>
                            <span className="text-xs text-gray-500">{item.time}</span>
                          </div>
                          <div className="text-sm text-gray-800">{item.message}</div>
                          
                          {/* Message Reactions - Smaller */}
                          <div className="flex items-center space-x-1 mt-2">
                            <button 
                              onClick={() => handleReaction(item.id, 'likes')}
                              className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs transition-all ${
                                item.userReactions.includes('likes')
                                  ? 'bg-blue-100'
                                  : 'hover:bg-gray-100'
                              }`}
                            >
                              <span>👍</span>
                              {item.reactions.likes > 0 && <span className="font-medium">{item.reactions.likes}</span>}
                            </button>
                            <button 
                              onClick={() => handleReaction(item.id, 'fire')}
                              className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs transition-all ${
                                item.userReactions.includes('fire')
                                  ? 'bg-orange-100'
                                  : 'hover:bg-gray-100'
                              }`}
                            >
                              <span>🔥</span>
                              {item.reactions.fire > 0 && <span className="font-medium">{item.reactions.fire}</span>}
                            </button>
                            <button 
                              onClick={() => handleReaction(item.id, 'congrats')}
                              className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs transition-all ${
                                item.userReactions.includes('congrats')
                                  ? 'bg-green-100'
                                  : 'hover:bg-gray-100'
                              }`}
                            >
                              <span>🎉</span>
                              {item.reactions.congrats > 0 && <span className="font-medium">{item.reactions.congrats}</span>}
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

                {/* Message Input for Squad Feed */}
                <div className="p-4 bg-white border-t border-gray-200">
                  <div className="max-w-4xl mx-auto">
                    <div className="border-2 border-gray-300 focus-within:border-black bg-white">
                      <div className="flex items-center px-3 pt-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0" style={{ backgroundColor: '#DBFF4D', color: '#000' }}>
                          J
                        </div>
                        <input
                          type="text"
                          value={newSquadMessage}
                          onChange={(e) => setNewSquadMessage(e.target.value)}
                          placeholder="Share with your squad..."
                          className="flex-1 mx-3 text-sm text-gray-900 placeholder-gray-500 border-0 focus:outline-none bg-transparent"
                          onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendSquadMessage())}
                        />
                      </div>
                      <div className="flex items-center justify-between px-3 pb-2 pt-2">
                        <div className="flex items-center space-x-3 ml-12">
                          <button className="text-gray-500 hover:text-gray-700 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 transition-colors font-bold text-sm">
                            B
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 transition-colors italic text-sm">
                            I
                          </button>
                          <button className="text-gray-500 hover:text-gray-700 transition-colors text-sm">
                            <s>S</s>
                          </button>
                        </div>
                        <button
                          onClick={handleSendSquadMessage}
                          className="px-4 py-1.5 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>


      {/* Squad Members Modal */}
      {showSquadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowSquadModal(false)}>
          <div className="bg-white w-full max-w-2xl max-h-[60vh] mx-4  flex flex-col" style={{}} onClick={(e) => e.stopPropagation()}>
            <div className="p-4  flex-shrink-0">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold text-gray-900 uppercase">SQUAD MEMBERS</h2>
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
                className="w-full px-3 py-2 border border-gray-300 text-base focus:outline-none focus:ring-2 focus:ring-black"
              />
              <p className="text-base text-gray-600 mt-2">{filteredMembers.length} students</p>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-1">
                {filteredMembers.map((member, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 p-3 text-base hover:bg-gray-50"
                  >
                    <div className="relative">
                      <div className="w-10 h-10 bg-gray-300 flex items-center justify-center text-base font-semibold">
                        {member.name.charAt(0)}
                      </div>
                      <div className="absolute -bottom-0.5 -right-0.5">
                        <div className={`w-3 h-3 border border-white rounded-full ${
                          member.status === 'online' ? 'bg-green-500' : 
                          member.status === 'idle' ? 'bg-pink-400' : 'bg-gray-400'
                        }`}></div>
                      </div>
                    </div>
                    <div className="flex-1 font-medium text-gray-900">{member.name}</div>
                    <div className="text-sm text-gray-500">Lv.{member.level}</div>
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
