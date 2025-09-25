export default function RightPanel() {
  // User's personal achievements data
  const userAchievements = [
    {
      user: "Jennifer",
      achievement: "🎓 Level Up!",
      description: "Advanced to Level 6 in Mathematics",
      time: "1 hour ago",
      reactions: { likes: 28, fire: 15, congrats: 22 },
      comments: 8,
      canReact: false // Can't react to own achievements
    },
    {
      user: "Jennifer",
      achievement: "🔥 Hot Streak",
      description: "7-day learning streak maintained",
      time: "Yesterday",
      reactions: { likes: 19, fire: 12, congrats: 16 },
      comments: 4,
      canReact: false
    },
    {
      user: "Jennifer",
      achievement: "📝 Essay Excellence",
      description: "Received A+ on English literature essay",
      time: "2 days ago",
      reactions: { likes: 31, fire: 8, congrats: 25 },
      comments: 12,
      canReact: false
    },
    {
      user: "Jennifer",
      achievement: "🧮 Math Mastery",
      description: "Perfect score on Algebra II final exam",
      time: "3 days ago",
      reactions: { likes: 45, fire: 23, congrats: 38 },
      comments: 15,
      canReact: false
    }
  ];

  const handleReaction = (index, type) => {
    // Handle reactions to achievements
    console.log(`Reacted ${type} to achievement ${index}`);
  };

  return (
    <div className="space-y-4">
      {/* My Achievements - Moved from Squad tab */}
      <div className="bg-white flex flex-col" style={{ height: '600px' }}>
        <div className="p-6 flex-shrink-0">
          <h2 className="text-xl font-bold text-gray-900 uppercase">MY ACHIEVEMENTS</h2>
          <p className="text-sm text-gray-600 mt-1">Your recent accomplishments and progress</p>
        </div>
        <div className="flex-1 overflow-y-auto p-6" style={{ scrollBehavior: 'smooth' }}>
          <div className="space-y-4">
            {userAchievements.map((feed, index) => (
                <div key={index} className="bg-gray-50 p-3 hover:shadow-sm transition-all duration-200 hover:bg-gray-100">
                <div className="flex items-start space-x-3 mb-2">
                  <div className="w-10 h-10 flex items-center justify-center text-lg" style={{ backgroundColor: '#DBFF4D' }}>
                    <span>{feed.achievement.split(' ')[0]}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-base font-bold text-gray-900">{feed.achievement}</div>
                      <span className="text-xs text-gray-500">{feed.time}</span>
                    </div>
                    <div className="text-sm text-gray-700">{feed.description}</div>
                  </div>
                </div>
                
                  <div className="flex items-center justify-between mt-2 pt-2">
                  <div className="flex space-x-3 text-xs">
                    <button 
                      onClick={() => handleReaction(index, 'like')}
                      className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <span>👍</span>
                      <span>{feed.reactions.likes}</span>
                    </button>
                    <button 
                      onClick={() => handleReaction(index, 'fire')}
                      className="flex items-center space-x-1 text-gray-500 hover:text-orange-600 transition-colors"
                    >
                      <span>🔥</span>
                      <span>{feed.reactions.fire}</span>
                    </button>
                    <button 
                      onClick={() => handleReaction(index, 'congrats')}
                      className="flex items-center space-x-1 text-gray-500 hover:text-yellow-600 transition-colors"
                    >
                      <span>🎉</span>
                      <span>{feed.reactions.congrats}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
