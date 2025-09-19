export default function SquadContent() {
  const squadData = [
    {
      name: "Sarah",
      grade: "7th Grade",
      level: 4,
      badges: ["🔥", "🏅", "🎯"],
      points: 1250,
      streak: 7,
      lastActive: "2 hours ago"
    },
    {
      name: "Leo",
      grade: "7th Grade", 
      level: 5,
      badges: ["🏅", "⚡"],
      points: 1800,
      streak: 12,
      lastActive: "Online now"
    },
    {
      name: "Ava",
      grade: "7th Grade",
      level: 4,
      badges: ["🎖️", "🎯", "🔥"],
      points: 1420,
      streak: 5,
      lastActive: "1 hour ago"
    },
    {
      name: "Jayden",
      grade: "7th Grade",
      level: 3,
      badges: ["🏆"],
      points: 890,
      streak: 3,
      lastActive: "4 hours ago"
    }
  ];

  const tutors = [
    {
      name: "AI Tutor",
      subject: "All Subjects",
      status: "Available 24/7",
      rating: 4.9,
      students: 1200
    },
    {
      name: "Ms. Thompson",
      subject: "Math",
      status: "Available now",
      rating: 4.8,
      students: 340
    },
    {
      name: "Mr. Diaz",
      subject: "Science",
      status: "Available at 3:00 PM",
      rating: 4.7,
      students: 280
    },
    {
      name: "Ms. Chen",
      subject: "English",
      status: "Online",
      rating: 4.9,
      students: 450
    }
  ];

  const activities = [
    {
      user: "Ava",
      action: "completed 3 challenges today",
      time: "2 hours ago",
      type: "challenge"
    },
    {
      user: "Jayden", 
      action: "earned 400 points",
      time: "3 hours ago",
      type: "points"
    },
    {
      user: "Sarah",
      action: "unlocked a new badge",
      time: "5 hours ago", 
      type: "badge"
    },
    {
      user: "Leo",
      action: "reached Level 5",
      time: "1 day ago",
      type: "level"
    }
  ];

  const getStatusColor = (status) => {
    if (status.includes("Available now") || status.includes("Online")) return "text-green-600";
    if (status.includes("24/7")) return "text-blue-600";
    return "text-gray-500";
  };

  const getActivityIcon = (type) => {
    switch(type) {
      case "challenge": return "🎯";
      case "points": return "⚡";
      case "badge": return "🏆";
      case "level": return "📈";
      default: return "📝";
    }
  };

  return (
    <div className="space-y-6">
      {/* Squad Members */}
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">YOUR SQUAD</h2>
        <div className="grid grid-cols-2 gap-4">
          {squadData.map((member, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.grade} • Level {member.level}</p>
                  <p className="text-xs text-gray-400">{member.lastActive}</p>
                </div>
                <button className="bg-blue-100 text-blue-700 px-3 py-1 text-sm font-medium rounded-lg hover:bg-blue-200 transition-colors">
                  Message
                </button>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Points:</span>
                  <span className="font-semibold">{member.points.toLocaleString()}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Streak:</span>
                  <span className="font-semibold">{member.streak} days</span>
                </div>
                <div className="flex items-center space-x-1">
                  <span className="text-sm text-gray-600">Badges:</span>
                  <div className="flex space-x-1">
                    {member.badges.map((badge, idx) => (
                      <span key={idx} className="text-lg">{badge}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Available Tutors */}
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">AVAILABLE TUTORS</h2>
          <div className="space-y-3">
            {tutors.map((tutor, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{tutor.name}</h3>
                    <p className="text-sm text-gray-600">{tutor.subject}</p>
                  </div>
                  <button className="bg-green-100 text-green-700 px-3 py-1 text-sm font-medium rounded-lg hover:bg-green-200 transition-colors">
                    Connect
                  </button>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className={getStatusColor(tutor.status)}>{tutor.status}</span>
                  <div className="flex items-center space-x-2">
                    <span>⭐ {tutor.rating}</span>
                    <span>•</span>
                    <span>{tutor.students} students</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Feed */}
        <div className="bg-white p-6 rounded-lg">
          <h2 className="text-xl font-bold text-gray-900 mb-4">ACTIVITY FEED</h2>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="text-lg">{getActivityIcon(activity.type)}</div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-semibold text-gray-900">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
