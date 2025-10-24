import { useState, useEffect } from 'react';

export default function SquadContent({ selectedChatFromSidebar, setSelectedChatFromSidebar }) {
  const [selectedChat, setSelectedChat] = useState('main-hall');
  const [tutorsExpanded, setTutorsExpanded] = useState(true);
  const [newMessage, setNewMessage] = useState('');
  
  // Current user data
  const currentUser = {
    name: "Jennifer",
    status: "online"
  };

  // Squad chat messages with reactions
  const squadMessages = [
    {
      id: 1,
      sender: "Leo",
      time: "Yesterday 5:31 PM",
      message: "Just finished the physics quiz! That last question about momentum was tricky 😅",
      isAnnouncement: false
    },
    {
      id: 2,
      sender: "Samantha",
      time: "Yesterday 5:31 PM",
      message: "Level up!",
      subtitle: "Samantha just hit level 6! Celebrate with her!",
      isAnnouncement: true,
      reactions: {
        fire: 32,
        thumbsUp: 20,
        comments: 5,
        credits: 10
      },
      comments: [
        {
          id: 1,
          sender: "Leo",
          time: "Yesterday 5:35 PM",
          message: "Congrats Samantha! You've been crushing it! 🎉"
        },
        {
          id: 2,
          sender: "Alex",
          time: "Yesterday 5:40 PM",
          message: "Way to go! Keep up the great work!"
        },
        {
          id: 3,
          sender: "Jennifer",
          time: "Yesterday 5:42 PM",
          message: "Amazing! Can't wait to join you at level 6! 💪",
          isCurrentUser: true
        },
        {
          id: 4,
          sender: "Maya",
          time: "Yesterday 5:45 PM",
          message: "You're an inspiration! 🌟"
        },
        {
          id: 5,
          sender: "Ms Ramirez",
          time: "Yesterday 6:00 PM",
          message: "Outstanding progress, Samantha! Your dedication is truly admirable.",
          isLeader: true
        }
      ]
    },
    {
      id: 3,
      sender: "Ms Ramirez",
      time: "Yesterday 6:45 PM",
      message: "Great work everyone on this week's challenges! Remember, our team study session is tomorrow at 3 PM. Come prepared with questions!",
      isAnnouncement: false,
      isLeader: true
    },
    {
      id: 4,
      sender: "Alex",
      time: "8:10 AM",
      message: "Does anyone want to team up for the history project? We need to pick a topic by Friday.",
      isAnnouncement: false,
      date: "Today"
    },
    {
      id: 5,
      sender: "Maya",
      time: "8:15 AM",
      message: "I'm in! I was thinking about doing something on the Renaissance period.",
      isAnnouncement: false
    },
    {
      id: 6,
      sender: "Jennifer",
      time: "8:20 AM",
      message: "Count me in too! Renaissance sounds interesting 🎨",
      isAnnouncement: false,
      isCurrentUser: true
    }
  ];

  // Squad leader chat messages
  const leaderMessages = [
    {
      id: 1,
      sender: "Ms Ramirez",
      message: "Hi Jennifer! How are you finding the new math curriculum?",
      time: "Yesterday 2:30 PM",
      isCurrentUser: false,
      isLeader: true,
      isNew: false
    },
    {
      id: 2,
      sender: "Jennifer",
      message: "It's challenging but I'm really enjoying it! The calculus section is making more sense now.",
      time: "Yesterday 2:35 PM",
      isCurrentUser: true,
      isNew: false
    },
    {
      id: 3,
      sender: "Ms Ramirez",
      message: "That's wonderful to hear! I noticed you've been doing great on the practice problems. Keep up the excellent work!",
      time: "Yesterday 2:36 PM",
      isCurrentUser: false,
      isLeader: true,
      isNew: false
    },
    {
      id: 4,
      sender: "Jennifer",
      message: "Thank you! I have a question about the upcoming project though. Can we choose our own topics?",
      time: "9:00 AM",
      isCurrentUser: true,
      isNew: true,
      date: "Today"
    },
    {
      id: 5,
      sender: "Ms Ramirez",
      message: "Absolutely! I encourage students to pick topics they're passionate about. Just make sure it relates to what we've covered this semester. Feel free to run your ideas by me!",
      time: "9:05 AM",
      isCurrentUser: false,
      isLeader: true,
      isNew: true
    }
  ];

  // Chat tabs
  const chatTabs = [
    { id: 'main-hall', name: 'Thunderbolts', type: 'squad', onlineCount: 49, hasNew: true },
    { id: 'leader', name: 'Ms Ramirez', type: 'leader', status: 'online' }
  ];

  // Tutors - matching Sidebar.jsx structure
  const tutors = [
    { id: 3, name: 'AI Tutor', status: 'online', type: 'ai', lastMessage: "I'm here to help you learn" },
    { id: 1, name: 'English Tutor', status: 'online', type: 'tutor', hasNew: true, lastMessage: "Let's review your essay tomorrow" },
    { id: 2, name: 'Math Tutor', status: 'online', type: 'tutor', lastMessage: "Great work on the calculus homework" },
    { id: 4, name: 'History Tutor', status: 'offline', type: 'tutor', lastMessage: "Back at 2:30PM" }
  ];

  // Tutor chat messages - matching Sidebar.jsx
  const tutorMessages = {
    1: [
      { id: 1, sender: "English Tutor", message: "Hi Jennifer! I've reviewed your essay on Shakespeare's Hamlet. Overall, it's a strong analysis, but I have a few suggestions for improvement. Your thesis statement is clear, but we can make it even more compelling.", time: "Yesterday 5:31 PM", isCurrentUser: false, isNew: false },
      { id: 2, sender: "Jennifer", message: "Thank you! What specifically should I work on?", time: "Yesterday 5:35 PM", isCurrentUser: true, isNew: false },
      { id: 3, sender: "Jennifer", message: "I was trying to analyze the theme of revenge and how it drives the plot. I felt like I needed more textual evidence though. Should I add more quotes from the play?", time: "Yesterday 5:36 PM", isCurrentUser: true, isNew: false },
      { id: 4, sender: "English Tutor", message: "Exactly! More textual evidence will strengthen your argument significantly. Let's review your essay tomorrow and I'll help you identify the best quotes to support your points. Also, consider exploring how the theme of revenge affects different characters differently.", time: "Today 9:12 AM", isCurrentUser: false, isNew: true }
    ],
    2: [
      { id: 1, sender: "Math Tutor", message: "Hi Jennifer! Ready to tackle some calculus problems?", time: "Yesterday 2:00 PM", isCurrentUser: false, isNew: false },
      { id: 2, sender: "Jennifer", message: "Yes! I'm struggling with integration by parts. I understand the formula but I get confused about which part to choose as u and which as dv.", time: "Yesterday 2:05 PM", isCurrentUser: true, isNew: false },
      { id: 3, sender: "Math Tutor", message: "Let's start with the LIATE method. It's a helpful way to choose u and dv. LIATE stands for: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. Choose u based on what comes first in this list.", time: "Yesterday 2:06 PM", isCurrentUser: false, isNew: false },
      { id: 4, sender: "Jennifer", message: "That makes so much more sense now! So if I have x·sin(x), x is algebraic and sin(x) is trig, so I should pick u = x?", time: "Yesterday 2:10 PM", isCurrentUser: true, isNew: false },
      { id: 5, sender: "Math Tutor", message: "Perfect! You've got it! Great work on the calculus homework. Your solutions were correct and showed excellent understanding of the concepts.", time: "Yesterday 3:15 PM", isCurrentUser: false, isNew: true }
    ],
    3: [
      { id: 1, sender: "AI Tutor", message: "Hi Jennifer! I'm here to help you learn. What subject would you like to work on today?", time: "Just now", isCurrentUser: false, isNew: true },
      { id: 2, sender: "AI Tutor", message: "I can assist you with Math, Science, English, History, and many other subjects. Just let me know what you need help with!", time: "Just now", isCurrentUser: false, isNew: true }
    ],
    4: [
      { id: 1, sender: "History Tutor", message: "Hi Jennifer, I'm in a meeting right now but I'll be back at 2:30 PM. Feel free to leave a message and I'll respond as soon as I'm available!", time: "12:00 PM", isCurrentUser: false, isNew: false }
    ]
  };

  const getStatusColor = (status) => {
    if (status === 'online') return 'bg-green-500';
    if (status === 'idle') return 'bg-yellow-500';
    if (status === 'offline') return 'bg-gray-400';
    return 'bg-gray-400';
  };

  const getStatusText = (status) => {
    if (status === 'online') return 'Online';
    if (status === 'idle') return 'Idle';
    if (status === 'offline') return 'Offline';
    return status;
  };

  const getChatTitle = () => {
    if (selectedChat === 'main-hall') return 'Thunderbolts Main Hall';
    if (selectedChat === 'leader') return 'Ms Ramirez';
    const tutor = tutors.find(t => t.id === selectedChat);
    return tutor ? tutor.name : 'Chat';
  };

  const getCurrentMessages = () => {
    if (selectedChat === 'main-hall') return squadMessages;
    if (selectedChat === 'leader') return leaderMessages;
    return tutorMessages[selectedChat] || [];
  };

  return (
    <>
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <div className="flex flex-col scrollbar-hide" style={{ overflowY: 'auto', height: '100vh', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingTop: 0, marginTop: 0 }}>
        {/* Thunderbolts Banner - Top of entire Squad tab */}
      <div 
        className="relative bg-cover bg-center flex items-center justify-between px-8 py-6 flex-shrink-0"
        style={{ backgroundImage: "url('/assets/Images/thunderbolts banner.jpg')", height: '128px' }}
      >
        <div className="flex flex-col text-white z-10">
          <h1 className="text-5xl font-black uppercase tracking-wide">THE THUNDERBOLTS</h1>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-lg font-semibold">98 Students</span>
            <a href="#" className="text-sm underline hover:text-gray-200">View all &gt;</a>
          </div>
        </div>
        <div className="flex items-center space-x-2 z-10">
          <span className="text-5xl">🏆</span>
          <span className="text-5xl font-black text-white">#2</span>
        </div>
      </div>

      <div className="flex mt-6" style={{ height: 'calc(100vh - 64px - 128px - 24px - 48px)' }}>
        {/* Left Sidebar - Chat List */}
        <div className="w-64 bg-gray-50 flex flex-col border-r border-gray-200 overflow-hidden">
        {/* Sidebar Header */}
        <div className="bg-black text-white p-4 flex-shrink-0">
          <h2 className="text-lg font-bold uppercase">Squad Chat</h2>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {/* Main Hall Section */}
          <div className="px-4 pt-4 pb-2">
            <div className="text-xs font-bold text-gray-500 uppercase mb-2">Main Hall</div>
            <button
              onClick={() => setSelectedChat('main-hall')}
              className={`w-full flex items-center space-x-3 p-3 rounded transition-colors ${
                selectedChat === 'main-hall' ? 'bg-gray-200' : 'hover:bg-gray-100'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-purple-300 flex-shrink-0"></div>
              <div className="flex-1 text-left">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900 text-sm">Thunderbolts</span>
                  {chatTabs[0].hasNew && (
                    <span className="text-xs font-bold text-pink-500">New!</span>
                  )}
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>49 Online</span>
                </div>
              </div>
            </button>
          </div>

          {/* Squad Leader Section */}
          <div className="px-4 pt-4 pb-2">
            <div className="text-xs font-bold text-gray-500 uppercase mb-2">Squad Leader</div>
            <button
              onClick={() => setSelectedChat('leader')}
              className={`w-full flex items-center space-x-3 p-3 rounded transition-colors ${
                selectedChat === 'leader' ? 'bg-gray-200' : 'hover:bg-gray-100'
              }`}
            >
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">MR</span>
                </div>
                <div className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor('online')} border-2 border-white rounded-full`}></div>
              </div>
              <div className="flex-1 text-left">
                <span className="font-bold text-gray-900 text-sm block">Ms Ramirez</span>
                <span className="text-xs text-green-600">Online</span>
              </div>
            </button>
          </div>

          {/* Tutors Section */}
          <div className="px-4 pt-4 pb-2">
            <button
              onClick={() => setTutorsExpanded(!tutorsExpanded)}
              className="flex items-center justify-between w-full text-xs font-bold text-gray-500 uppercase mb-2"
            >
              <span>Tutors</span>
              <svg
                className={`w-4 h-4 transition-transform ${tutorsExpanded ? 'rotate-180' : ''}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
            
            {tutorsExpanded && (
              <div className="space-y-1">
                {tutors.map((tutor) => (
                  <button
                    key={tutor.id}
                    onClick={() => setSelectedChat(tutor.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded transition-colors ${
                      selectedChat === tutor.id ? 'bg-gray-200' : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="relative flex-shrink-0">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        tutor.id === 1 ? 'bg-orange-500' : 
                        tutor.id === 2 ? 'bg-blue-500' : 
                        tutor.id === 3 ? 'bg-purple-500' :
                        'bg-gray-500'
                      }`}>
                        <span className="text-white font-bold text-sm">{tutor.name.charAt(0)}</span>
                      </div>
                      <div className={`absolute bottom-0 right-0 w-3 h-3 ${getStatusColor(tutor.status)} border-2 border-white rounded-full`}></div>
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-gray-900 text-sm">{tutor.name}</span>
                        {tutor.hasNew && (
                          <span className="text-xs font-bold text-pink-500">New!</span>
                        )}
                      </div>
                      <span className={`text-xs ${
                        tutor.status === 'online' ? 'text-green-600' :
                        tutor.status === 'idle' ? 'text-yellow-600' :
                        'text-gray-600'
                      }`}>{getStatusText(tutor.status)}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Current User at Bottom */}
        <div className="bg-black text-white p-4 flex items-center space-x-3 flex-shrink-0">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-purple-300 flex-shrink-0"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></div>
          </div>
          <div>
            <div className="font-bold text-sm">{currentUser.name}</div>
          </div>
        </div>
      </div>

      {/* Right Side - Chat Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Chat Header */}
        <div className="bg-black text-white px-6 py-4 flex items-center justify-between flex-shrink-0">
          <h2 className="text-lg font-bold">{getChatTitle()}</h2>
          <button className="text-white hover:text-gray-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"/>
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto bg-white p-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="space-y-6">
            {getCurrentMessages().map((message, index) => {
              // For tutor/leader messages (different structure)
              if (message.isCurrentUser !== undefined) {
                const showNewDivider = index > 0 && !getCurrentMessages()[index - 1].isNew && message.isNew;
                const showDateDivider = message.date;
                
                return (
                  <div key={message.id}>
                    {showDateDivider && (
                      <div className="flex items-center justify-center py-4">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-4 text-sm font-medium text-gray-500">{message.date}</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                      </div>
                    )}
                    {showNewDivider && (
                      <div className="flex items-center justify-center py-4">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-4 text-sm font-medium text-gray-500">NEW</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                      </div>
                    )}
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm text-white font-semibold ${
                        message.isCurrentUser ? 'bg-pink-500' : 
                        message.isLeader ? 'bg-cyan-400' :
                        selectedChat === 1 ? 'bg-orange-500' : 
                        selectedChat === 2 ? 'bg-blue-500' : 
                        selectedChat === 3 ? 'bg-purple-500' :
                        'bg-gray-500'
                      }`}>
                        {message.sender.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline space-x-2 mb-1">
                          <span className="text-base font-bold text-gray-900">{message.sender}</span>
                          <span className="text-sm text-gray-500">{message.time}</span>
                        </div>
                        <div 
                          className={`p-3 rounded ${message.isLeader ? 'bg-blue-50' : 'bg-gray-50'}`}
                        >
                          <p className="text-sm text-gray-900 leading-relaxed">{message.message}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
              
              // For squad messages (original structure)
              const getAvatarColor = (sender) => {
                if (sender === 'Leo') return 'bg-orange-500';
                if (sender === 'Samantha') return 'bg-purple-500';
                if (sender === 'Ms Ramirez') return 'bg-cyan-400';
                if (sender === 'Alex') return 'bg-blue-500';
                if (sender === 'Maya') return 'bg-green-500';
                if (sender === 'Jennifer') return 'bg-pink-500';
                return 'bg-gray-500';
              };
              
              return (
                <div key={message.id}>
                  {/* Date Divider */}
                  {message.date && (
                    <div className="flex items-center justify-center py-4">
                      <div className="flex-1 border-t border-gray-300"></div>
                      <span className="px-4 text-sm font-medium text-gray-500">{message.date}</span>
                      <div className="flex-1 border-t border-gray-300"></div>
                    </div>
                  )}

                  <div className="flex items-start space-x-3">
                    {/* Avatar */}
                    <div className={`w-10 h-10 rounded-full ${getAvatarColor(message.sender)} flex-shrink-0 flex items-center justify-center text-white font-bold`}>
                      {message.sender.charAt(0)}
                    </div>

                    {/* Message Content */}
                    <div className="flex-1">
                      <div className="flex items-baseline space-x-2 mb-1">
                        <span className="font-bold text-gray-900">{message.sender}</span>
                        <span className="text-sm text-gray-500">{message.time}</span>
                      </div>
                      
                      {message.isAnnouncement ? (
                        <div className="bg-purple-50 p-4 rounded">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-yellow-400 flex items-center justify-center">
                              <span className="text-2xl">🏆</span>
                            </div>
                            <div>
                              <div className="font-bold text-lg text-gray-900">{message.message}</div>
                              <div className="text-sm text-gray-600">{message.subtitle}</div>
                            </div>
                          </div>
                          
                          {/* Reactions */}
                          {message.reactions && (
                            <div className="flex items-center space-x-4 mt-3">
                              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                                <span>🔥</span>
                                <span className="text-sm font-medium">{message.reactions.fire}</span>
                              </button>
                              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                                <span>👍</span>
                                <span className="text-sm font-medium">{message.reactions.thumbsUp}</span>
                              </button>
                              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                                </svg>
                                <span className="text-sm font-medium">{message.reactions.comments}</span>
                              </button>
                              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
                                <img 
                                  src="/assets/icons/Hyper credits.png" 
                                  alt="Credits" 
                                  className="w-4 h-4"
                                />
                                <span className="text-sm font-medium">{message.reactions.credits}</span>
                              </button>
                            </div>
                          )}

                          {/* Comments Section */}
                          {message.comments && message.comments.length > 0 && (
                            <>
                              <div className="border-t border-gray-300 mt-4"></div>
                              <div className="mt-4 ml-3 p-3">
                              <div className="space-y-3">
                                {message.comments.map((comment) => (
                                  <div key={comment.id} className="flex items-start space-x-2">
                                    <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white text-xs font-bold ${
                                      comment.isCurrentUser ? 'bg-pink-500' :
                                      comment.isLeader ? 'bg-cyan-400' :
                                      comment.sender === 'Leo' ? 'bg-orange-500' :
                                      comment.sender === 'Alex' ? 'bg-blue-500' :
                                      comment.sender === 'Maya' ? 'bg-green-500' :
                                      'bg-gray-500'
                                    }`}>
                                      {comment.sender.charAt(0)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <div className="flex items-baseline space-x-2">
                                        <span className="text-sm font-bold text-gray-900">{comment.sender}</span>
                                        <span className="text-xs text-gray-500">{comment.time}</span>
                                      </div>
                                      <p className="text-sm text-gray-800 mt-1">{comment.message}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            </>
                          )}
                        </div>
                      ) : (
                        <div className={`p-3 rounded ${message.isLeader ? 'bg-blue-50' : 'bg-gray-50'}`}>
                          <p className="text-sm text-gray-900 leading-relaxed">{message.message}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 p-3 flex-shrink-0">
          <div className="border border-gray-300 rounded-lg">
            {/* Formatting Toolbar */}
            <div className="flex items-center space-x-1 px-3 py-2 text-gray-600 hidden">
              <button className="p-1 hover:bg-gray-100 rounded" title="Bold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.5 4H7v12h5.5c1.93 0 3.5-1.57 3.5-3.5 0-1.07-.48-2.02-1.23-2.66.53-.66.83-1.48.83-2.34C15.1 5.57 14.43 4 12.5 4z"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded" title="Italic">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded" title="Strikethrough">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 4c2.76 0 5 2.24 5 5 0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1 0-2.76 2.24-5 5-5zM3 11h14v2H3v-2zm7 4c-2.21 0-4-1.79-4-4h2c0 1.1.9 2 2 2s2-.9 2-2h2c0 2.21-1.79 4-4 4z"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded" title="Link">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded" title="Bullet list">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded" title="Numbered list">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4h1v4H3V4zm2 0h12v2H5V4zM3 10h1v4H3v-4zm2 0h12v2H5v-2z"/>
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded" title="Code">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>

            {/* Input Area */}
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Write your message..."
              className="w-full px-3 py-2 text-sm text-gray-900 focus:outline-none resize-none"
              rows="1"
            />

            {/* Bottom Toolbar with Attachments and Send */}
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center space-x-2">
                <button className="p-1 hover:bg-gray-100 rounded" title="Attach file">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded" title="Text formatting">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 6h12v2H4V6zm0 4h12v2H4v-2z"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded" title="Emoji">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded" title="Mention">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded" title="Video">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded" title="Voice message">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded" title="More options">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
              </div>
              <button className="text-gray-400 hover:text-gray-600" title="Send">
                <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Squad Leader and Leaderboard Section */}
      <div className="flex gap-4 mt-6">
        {/* Squad Leader */}
        <div className="bg-white p-6" style={{ flex: '0 0 35%' }}>
          <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">Squad Leader</h3>
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-32 h-32 rounded-full bg-gray-300 flex-shrink-0 overflow-hidden">
              <img 
                src="https://i.pravatar.cc/" 
                alt="Ms Ramirez"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-gray-900">Ms Ramirez</h4>
              <span className="text-xs text-green-600 block mt-1 mb-2">Online</span>
              <p className="text-sm text-gray-600">Write a short bio to introduce yourself to the students.</p>
            </div>
          </div>
          <div className="mb-3">
            <p className="text-sm text-gray-600">Next check in: <span className="font-bold text-pink-500">TOMORROW</span></p>
          </div>
          <button className="w-full text-white py-2 font-medium" style={{ backgroundColor: '#6279E5' }}>
            CHAT NOW
          </button>
        </div>

        {/* Leaderboard */}
        <div className="flex-1 bg-white p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900 uppercase">Leaderboard</h3>
            <button className="text-sm text-gray-600 hover:text-gray-900">View all &gt;</button>
          </div>
          <div className="grid grid-cols-2 gap-8 items-start">
            {/* Top Students */}
            <div>
              <h4 className="text-base font-bold text-gray-900 mb-4">Top students</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2 py-2 px-3">
                  <span className="text-2xl font-bold text-gray-900">#1</span>
                  <div>
                    <p className="font-bold text-gray-900">Jonathan</p>
                    <p className="text-sm text-gray-500">4,228 | Lv. 7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 py-2 px-3">
                  <span className="text-2xl font-bold text-gray-900">#2</span>
                  <div>
                    <p className="font-bold text-gray-900">Sebastian</p>
                    <p className="text-sm text-gray-500">3,834 | Lv. 6</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 py-2 px-3" style={{ backgroundColor: '#DBFF4D' }}>
                  <span className="text-2xl font-bold text-gray-900">#3</span>
                  <div>
                    <p className="font-bold text-gray-900">Jennifer</p>
                    <p className="text-sm text-gray-900">3,456 | Lv. 6</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Squads */}
            <div>
              <h4 className="text-base font-bold text-gray-900 mb-4">Top squads</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-2 py-2 px-3">
                  <span className="text-2xl font-bold text-gray-900">#1</span>
                  <div>
                    <p className="font-bold text-gray-900">Lightning Hawks</p>
                    <p className="text-sm text-gray-500">183,900</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 py-2 px-3" style={{ backgroundColor: '#DBFF4D' }}>
                  <span className="text-2xl font-bold text-gray-900">#2</span>
                  <div>
                    <p className="font-bold text-gray-900">Thunderbolts</p>
                    <p className="text-sm text-gray-900">123,280</p>
                  </div>
                </div>
                <div className="flex items-start space-x-2 py-2 px-3">
                  <span className="text-2xl font-bold text-gray-900">#3</span>
                  <div>
                    <p className="font-bold text-gray-900">Storm riders</p>
                    <p className="text-sm text-gray-500">100,450</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
