import { useState, useEffect } from 'react';
import { brandColors } from '../styles/branding';

export default function SquadContent({ selectedChatFromSidebar, setSelectedChatFromSidebar }) {
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
    { name: "Jonathan", points: 4228, level: 7, status: "online", mastery: 95, streak: 12, badges: 8 },
    { name: "Jennifer", points: 3656, level: 6, status: "online", mastery: 88, isCurrentUser: true, streak: 7, badges: 5 },
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
    { name: "Lightning Hawks", points: 183900, members: 98, rank: 1, mastery: 92, avgLevel: 4.2, activeMembers: 87 },
    { name: "Thunderbolts", points: 123280, members: 98, rank: 2, mastery: 89, isCurrentSquad: true, avgLevel: 4.1, activeMembers: 82 },
    { name: "Storm Riders", points: 100450, members: 100, rank: 3, mastery: 87, avgLevel: 4.0, activeMembers: 85 },
    { name: "Fire Dragons", points: 42150, members: 89, rank: 4, mastery: 85, avgLevel: 3.9, activeMembers: 76 },
    { name: "Ocean Waves", points: 41800, members: 92, rank: 5, mastery: 83, avgLevel: 3.8, activeMembers: 78 }
  ];

  // Tutor chats data
  const tutorChats = [
    { 
      id: 3, // Matching sidebar chat id
      name: "AI Tutor",
      lastMessage: "Hi Jennifer! What subject are you working on today?",
      time: "Just now",
      unread: 0,
      type: "ai",
      avatar: "AI",
      status: "online"
    },
    { 
      id: 1, // Matching sidebar chat id
      name: "English Tutor",
      lastMessage: "Let's review your essay tomorrow",
      time: "1 day ago",
      unread: 0,
      type: "tutor",
      avatar: "E",
      status: "online"
    },
    { 
      id: 2, // Matching sidebar chat id
      name: "Math Tutor",
      lastMessage: "Great work on the calculus homework",
      time: "2 days ago",
      unread: 0,
      type: "tutor",
      avatar: "M",
      status: "online"
    }
  ];

  // Tutor chat messages
  const initialTutorMessages = {
    1: [ // English Tutor
      { id: 1, sender: "English Tutor", message: "Lorem ipsum dolor sit amet consectetur. Dolor enim vulputate pretium ultricies vestibulum scelerisque adipiscing quam pulvinar. Vulputate cum nec odio dictum. Sed vel arcu malesuada eget malesuada orci. Elit eget at viverra in ut vitae massa risus in.", time: "Yesterday 5:31 PM", isCurrentUser: false, date: "Yesterday", isNew: false },
      { id: 2, sender: "Jennifer", message: "Lorem ipsum dolor sit amet consectetur!", time: "Yesterday 5:31 PM", isCurrentUser: true, date: "Yesterday", isNew: false },
      { id: 3, sender: "Jennifer", message: "Lorem ipsum dolor sit amet consectetur. Odio varius sagittis nunc velit magna leo volutpat interdum quam. Ut consequat ipsum aliquet ante rutrum purus neque varius. Nec purus eu porttitor elementum pulvinar ornare nec volutpat. Vehicula vitae urna interdum imperdiet elementum odio.", time: "Yesterday 5:31 PM", isCurrentUser: true, date: "Yesterday", isNew: false },
      { id: 4, sender: "English Tutor", message: "Lorem ipsum dolor sit amet consectetur. Dolor enim vulputate pretium ultricies vestibulum scelerisque adipiscing quam pulvinar. Vulputate cum nec odio dictum. Sed vel arcu malesuada eget malesuada orci. Elit eget at viverra in ut vitae massa risus in.", time: "Today 9:12 AM", isCurrentUser: false, date: "Today", isNew: true }
    ],
    2: [ // Math Tutor
      { id: 1, sender: "Math Tutor", message: "Hi Jennifer! Ready to tackle some calculus problems?", time: "2:00 PM", isCurrentUser: false, date: "2 days ago", isNew: false },
      { id: 2, sender: "Jennifer", message: "Yes! I'm struggling with integration by parts", time: "2:05 PM", isCurrentUser: true, date: "2 days ago", isNew: false },
      { id: 3, sender: "Math Tutor", message: "Let's start with the LIATE method. It's a helpful way to choose u and dv", time: "2:06 PM", isCurrentUser: false, date: "2 days ago", isNew: false },
      { id: 4, sender: "Jennifer", message: "That makes so much more sense now!", time: "2:10 PM", isCurrentUser: true, date: "2 days ago", isNew: false },
      { id: 5, sender: "Math Tutor", message: "Great work on the calculus homework", time: "3:15 PM", isCurrentUser: false, date: "2 days ago", isNew: true }
    ],
    3: [ // AI Tutor
      { id: 1, sender: "AI Tutor", message: "Hi Jennifer! How did your calculus exam go yesterday?", time: "9:15 AM", isCurrentUser: false, date: "Monday, January 13", isNew: false },
      { id: 2, sender: "Jennifer", message: "It went well, thanks for the help with derivatives!", time: "9:16 AM", isCurrentUser: true, date: "Monday, January 13", isNew: false },
      { id: 3, sender: "AI Tutor", message: "Excellent! Ready for today's physics lesson?", time: "9:17 AM", isCurrentUser: false, date: "Monday, January 13", isNew: false },
      { id: 4, sender: "Jennifer", message: "Actually, can we review integration by parts first?", time: "9:20 AM", isCurrentUser: true, date: "Monday, January 13", isNew: false },
      { id: 5, sender: "AI Tutor", message: "Of course! Integration by parts: ∫u dv = uv - ∫v du. What's your specific question?", time: "9:21 AM", isCurrentUser: false, date: "Monday, January 13", isNew: false },
      { id: 6, sender: "Jennifer", message: "I get confused choosing which function to use for u and dv", time: "9:22 AM", isCurrentUser: true, date: "Monday, January 13", isNew: false },
      { id: 7, sender: "AI Tutor", message: "Great question! Use LIATE: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. Pick u from left to right.", time: "9:23 AM", isCurrentUser: false, date: "Monday, January 13", isNew: false },
      { id: 8, sender: "Jennifer", message: "Yes, I'm struggling with momentum concepts", time: "10:30 AM", isCurrentUser: true, date: "Today", isNew: true },
      { id: 9, sender: "AI Tutor", message: "Perfect timing! Let's break down momentum = mass × velocity. What specific part is confusing?", time: "10:31 AM", isCurrentUser: false, date: "Today", isNew: false },
      { id: 10, sender: "Jennifer", message: "The conservation of momentum in collisions", time: "10:32 AM", isCurrentUser: true, date: "Today", isNew: false },
      { id: 11, sender: "AI Tutor", message: "In elastic collisions, both momentum and kinetic energy are conserved. In inelastic, only momentum is conserved.", time: "10:33 AM", isCurrentUser: false, date: "Today", isNew: false },
      { id: 12, sender: "Jennifer", message: "Can you give me a practice problem?", time: "10:35 AM", isCurrentUser: true, date: "Today", isNew: false }
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
      case "idle": return <div className="w-3 h-3 border-2 border-white rounded-full" style={{ backgroundColor: brandColors.rose }}></div>;
      case "offline": return <div className="w-3 h-3 border-2 border-white rounded-full" style={{ backgroundColor: '#9CA3AF' }}></div>;
      default: return <div className="w-3 h-3 border-2 border-white rounded-full" style={{ backgroundColor: '#9CA3AF' }}></div>;
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

  // Handle chat selection from sidebar
  useEffect(() => {
    if (selectedChatFromSidebar) {
      // Find matching tutor by id
      const matchingTutor = tutorChats.find(t => t.id === selectedChatFromSidebar.id);
      if (matchingTutor) {
        setSelectedTutor(matchingTutor);
        // Clear the selection to avoid triggering again
        if (setSelectedChatFromSidebar) {
          setSelectedChatFromSidebar(null);
        }
      }
    }
  }, [selectedChatFromSidebar]);

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
    <div className="pb-4">
      {/* Full Width Banner */}
      <div 
        className="relative px-8 py-10 mb-4 overflow-hidden"
        style={{
          backgroundImage: 'url(/assets/Images/thunderbolts%20banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '140px'
        }}
      >
        <h1 className="text-5xl font-bold text-white uppercase" style={{ fontFamily: 'Oswald', textShadow: '3px 3px 10px rgba(0,0,0,0.8)' }}>
          THE THUNDERBOLTS
        </h1>
      </div>

      {/* Horizontal Flex Container */}
      <div className="flex gap-4 mb-4">
        {/* Left Content - Vertical Stack of Cards */}
        <div className="flex flex-col gap-4" style={{ width: '360px' }}>
          {/* Rank Badge Card - FIRST CARD */}
          <div className="bg-white p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-6xl">🏆</div>
              <span className="text-5xl font-bold text-gray-900">#2</span>
            </div>
            <div className="text-base font-bold text-gray-900 mb-1">98 Students</div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">49 Online</span>
            </div>
          </div>

          {/* Squad Leader Card */}
          <div className="bg-white p-6">
            <h3 className="font-bold text-gray-900 uppercase mb-4 text-sm">LEADER</h3>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg" style={{ backgroundColor: brandColors.lilac }}>
                  MR
                </div>
                <div className="absolute bottom-0 right-0">
                  <div className="w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">Ms Ramirez</div>
                <div className="text-xs text-green-600">Online</div>
              </div>
            </div>
            <button className="w-full px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors" style={{ backgroundColor: brandColors.blue }}>
              Chat
            </button>
          </div>
        </div>

        {/* Right Content - Full Width Leaderboard */}
        <div className="flex-1 bg-white p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 uppercase">LEADERBOARD</h2>
            <button className="text-sm font-medium text-gray-900 hover:text-gray-600 transition-colors flex items-center space-x-1">
              <span>View all</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            {/* Top Students */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm">TOP STUDENTS</h3>
              <div className="space-y-0">
                {individualLeaderboard.slice(0, 3).map((user, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center py-4`}
                    style={{ backgroundColor: user.isCurrentUser ? brandColors.lime : 'transparent' }}
                  >
                    <span className="text-3xl font-bold text-gray-900 w-16">{`#${index + 1}`}</span>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-base">{user.name}</div>
                      <div className="text-sm text-gray-600">{user.points.toLocaleString()} | Lv. {user.level}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Squads */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm">TOP SQUADS</h3>
              <div className="space-y-0">
                {squadLeaderboard.slice(0, 3).map((squad, index) => (
                  <div 
                    key={index} 
                    className={`flex items-center py-4`}
                    style={{ backgroundColor: squad.isCurrentSquad ? brandColors.lime : 'transparent' }}
                  >
                    <span className="text-3xl font-bold text-gray-900 w-16">{`#${squad.rank}`}</span>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-base">{squad.name}</div>
                      <div className="text-sm text-gray-600">{squad.points.toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
              

      {/* Squad Feed - Supervised Group Chat + Achievements */}
      <div className="mb-4">
        <div className="bg-white flex" style={{ height: 'calc(100vh - 100px)' }}>
          {/* Left Sidebar - Tutors */}
          <div className="w-80 flex flex-col bg-white">
            <div className="px-6 flex items-center" style={{ backgroundColor: brandColors.black, minHeight: '88px' }}>
              <h3 className="font-bold uppercase text-white text-lg">SQUAD CHAT</h3>
            </div>

            <div className="flex-1 overflow-y-auto p-3">
              {/* Squad Feed Link */}
              <div 
                onClick={() => setSelectedTutor(null)}
                className={`flex items-center p-3 cursor-pointer mb-3 transition-all border ${
                  !selectedTutor ? 'bg-white border-gray-300 shadow-sm' : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="relative mr-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold" style={{ backgroundColor: brandColors.lime, color: brandColors.black }}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-gray-900">Squad Feed</div>
                  <div className="text-xs text-gray-600">95 members online</div>
                </div>
              </div>

              <div className="border-t border-gray-300 my-3"></div>
              <h4 className="text-xs font-semibold uppercase px-2 mb-2 text-gray-500">Private Tutoring</h4>

              {/* Display all tutor chats */}
              {tutorChats.map((tutor) => {
                const isAI = tutor.type === 'ai';
                const isEnglish = tutor.id === 1;
                const isMath = tutor.id === 2;
                
                let bgColor = brandColors.blue; // AI blue
                if (isEnglish) bgColor = brandColors.rose; // Rose for English
                if (isMath) bgColor = brandColors.lilac; // Lilac for Math
                
                return (
                  <div 
                    key={tutor.id}
                    onClick={() => selectTutor(tutor)}
                    className={`flex items-center p-3 cursor-pointer mb-2 transition-all border ${
                      selectedTutor?.id === tutor.id ? 'bg-white border-gray-300 shadow-sm' : 'bg-white border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="relative mr-3">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: bgColor }}>
                        <span className="text-white font-bold text-sm">{tutor.avatar}</span>
                      </div>
                      <div className="absolute -bottom-1 -right-1">
                        <div className="w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-gray-900">{tutor.name}</div>
                      <div className="text-xs font-medium text-green-600">Online</div>
                    </div>
                  </div>
                );
              })}

              <div className="border-t border-gray-300 my-3"></div>
              <h4 className="text-xs font-semibold uppercase px-2 mb-2 text-gray-500">Connect to New Tutor</h4>

              {availableTutors.filter(t => !['English', 'Mathematics'].includes(t.subject)).map((tutor, index) => (
                <div 
                  key={index}
                  onClick={() => handleConnectToTutor(tutor)}
                  className={`flex items-center p-3 cursor-pointer mb-2 transition-all border ${
                    selectedTutor?.name === `${tutor.subject} Tutor` ? 'bg-white border-gray-300 shadow-sm' : 'bg-white border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="relative mr-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white" style={{ backgroundColor: brandColors.lilac }}>
                      {tutor.subject.charAt(0)}
                    </div>
                    <div className="absolute -bottom-1 -right-1">
                      <div className={`w-3 h-3 rounded-full border-2 border-white ${
                        tutor.availability.includes('now') ? 'bg-green-500' : ''
                      }`} style={{ backgroundColor: tutor.availability.includes('now') ? undefined : '#9CA3AF' }}></div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm text-gray-900">{tutor.subject}</div>
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
                      <div className="text-xs text-green-600">Online - Private Session</div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto bg-white p-6">
                  <div className="space-y-6">
                    {getCurrentTutorMessages().map((message, index) => {
                      const messages = getCurrentTutorMessages();
                      const showNewDivider = index > 0 && !messages[index - 1].isNew && message.isNew;
                      
                      const getTutorBgColor = () => {
                        if (selectedTutor.id === 1) return brandColors.rose; // English
                        if (selectedTutor.id === 2) return brandColors.lilac; // Math
                        return brandColors.blue; // AI
                      };
                      
                      return (
                        <div key={message.id}>
                          {showNewDivider && (
                            <div className="flex items-center justify-center py-4">
                              <div className="flex-1 border-t border-gray-300"></div>
                              <span className="px-4 text-sm font-medium text-gray-500">NEW</span>
                              <div className="flex-1 border-t border-gray-300"></div>
                            </div>
                          )}
                          <div className="flex items-start space-x-3">
                            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm text-white font-semibold`}
                              style={{ backgroundColor: message.isCurrentUser ? brandColors.rose : getTutorBgColor() }}>
                              {message.sender.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline space-x-2 mb-1">
                                <span className="text-base font-bold text-gray-900">{message.sender}</span>
                                <span className="text-sm text-gray-500">{message.time}</span>
                              </div>
                              <p className="text-sm text-gray-900 leading-relaxed">{message.message}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="px-6 py-4 border-t bg-white">
                  <div className="flex items-center space-x-3 px-4 py-3 border border-gray-300 bg-white">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your message"
                      className="flex-1 text-sm text-gray-600 focus:outline-none placeholder-gray-400"
                      onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendTutorMessage())}
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
                    <button 
                      onClick={handleSendTutorMessage}
                      className="p-2 bg-gray-900 hover:bg-gray-800 transition-colors" 
                      title="Send"
                    >
                      <svg className="w-5 h-5 text-white transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              /* Unified Feed - Achievements + Messages */
              <>
                {/* Black Header Banner */}
                <div className="px-6 flex items-center justify-between" style={{ backgroundColor: brandColors.black, minHeight: '88px' }}>
                  <span className="text-white font-bold text-lg">Thunderbolts Main Hall</span>
                </div>

                <div className="flex-1 overflow-y-auto bg-white p-6">
                  <div className="space-y-6">
                    {squadFeedItems.map((item) => (
                      <div key={item.id}>
                        {item.type === 'achievement' ? (
                          /* Achievement Card */
                          <div className="p-6 bg-white border-2" 
                            style={{ 
                              borderColor: brandColors.lime
                            }}>
                            <div className="flex items-start space-x-4 mb-4">
                              <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg" 
                                   style={{ backgroundColor: brandColors.blue }}>
                                {item.user.charAt(0)}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                  <span className="font-bold text-gray-900">{item.user}</span>
                                  <span className="text-sm text-gray-600">{item.time}</span>
                                </div>
                                <div className="text-xl font-bold text-gray-900 mb-2">{item.achievement}</div>
                                <div className="text-sm text-gray-800">{item.description}</div>
                              </div>
                            </div>
                            
                            {/* Reactions */}
                            <div className="flex items-center space-x-4">
                              <button 
                                onClick={() => handleReaction(item.id, 'likes')}
                                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                              >
                                <span className="text-lg">👍</span>
                                <span className="text-sm font-medium">{item.reactions.likes}</span>
                              </button>
                              <button 
                                onClick={() => handleReaction(item.id, 'fire')}
                                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                              >
                                <span className="text-lg">🔥</span>
                                <span className="text-sm font-medium">{item.reactions.fire}</span>
                              </button>
                              <button 
                                onClick={() => handleReaction(item.id, 'comments')}
                                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                              >
                                <span className="text-lg">💬</span>
                                <span className="text-sm font-medium">{item.reactions.comments}</span>
                              </button>
                              <button 
                                onClick={() => handleReaction(item.id, 'congrats')}
                                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900"
                              >
                                <span className="text-lg">🎉</span>
                                <span className="text-sm font-medium">{item.reactions.congrats}</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* Regular Message - No container */
                          <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0" 
                                 style={{ backgroundColor: brandColors.rose }}>
                              {item.user.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-bold text-gray-900">{item.user}</span>
                                <span className="text-sm text-gray-600">{item.time}</span>
                              </div>
                              <div className="text-base text-gray-800 mb-2">{item.message}</div>
                              
                              {/* Message Reactions */}
                              <div className="flex items-center space-x-3">
                                <button 
                                  onClick={() => handleReaction(item.id, 'likes')}
                                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                                >
                                  <span>👍</span>
                                  {item.reactions.likes > 0 && <span className="text-sm">{item.reactions.likes}</span>}
                                </button>
                                <button 
                                  onClick={() => handleReaction(item.id, 'fire')}
                                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                                >
                                  <span>🔥</span>
                                  {item.reactions.fire > 0 && <span className="text-sm">{item.reactions.fire}</span>}
                                </button>
                                <button 
                                  onClick={() => handleReaction(item.id, 'comments')}
                                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                                >
                                  <span>💬</span>
                                  {item.reactions.comments > 0 && <span className="text-sm">{item.reactions.comments}</span>}
                                </button>
                                <button 
                                  onClick={() => handleReaction(item.id, 'heart')}
                                  className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
                                >
                                  <span>❤️</span>
                                  {item.reactions.heart > 0 && <span className="text-sm">{item.reactions.heart}</span>}
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message Input for Squad Feed */}
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <div className="flex items-center space-x-3 px-4 py-3 border border-gray-300 bg-white">
                    <input
                      type="text"
                      value={newSquadMessage}
                      onChange={(e) => setNewSquadMessage(e.target.value)}
                      placeholder="Type your message"
                      className="flex-1 text-sm text-gray-600 focus:outline-none placeholder-gray-400"
                      onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSendSquadMessage())}
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
                    <button 
                      onClick={handleSendSquadMessage}
                      className="p-2 bg-gray-900 hover:bg-gray-800 transition-colors" 
                      title="Send"
                    >
                      <svg className="w-5 h-5 text-white transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                      </svg>
                    </button>
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
                          member.status === 'online' ? 'bg-green-500' : ''
                        }`} style={{ 
                          backgroundColor: member.status === 'online' ? undefined : 
                                         member.status === 'idle' ? brandColors.rose : '#9CA3AF'
                        }}></div>
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
