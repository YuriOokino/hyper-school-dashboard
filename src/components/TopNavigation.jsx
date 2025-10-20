import { useState, useEffect } from 'react';

export default function TopNavigation({ activePage, setActivePage, activeTab, setActiveTab, hyperCredits }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showFullNotifications, setShowFullNotifications] = useState(false);
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [prevCredits, setPrevCredits] = useState(hyperCredits);
  const [notificationsList, setNotificationsList] = useState([
    {
      id: 1,
      type: 'achievement',
      title: 'Level Up Achievement!',
      message: 'Congratulations! You\'ve reached Level 12 in Mathematics',
      time: '2 hours ago',
      isNew: true
    },
    {
      id: 2,
      type: 'reminder',
      title: 'Challenge Deadline Approaching',
      message: 'Complete "Quantum Mechanics Lab" before it expires in 45 minutes',
      time: '3 hours ago',
      isNew: true
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Hot Streak Milestone',
      message: 'Amazing! You\'ve maintained a 7-day learning streak',
      time: '1 day ago',
      isNew: false
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Daily Goals Reminder',
      message: 'Don\'t forget to complete your MOVE challenge today',
      time: '1 day ago',
      isNew: false
    },
    {
      id: 5,
      type: 'achievement',
      title: 'Perfect Score!',
      message: 'You scored 100% on your Chemistry Problem Set',
      time: '2 days ago',
      isNew: false
    },
    {
      id: 6,
      type: 'reminder',
      title: 'Study Session Reminder',
      message: 'Your scheduled Physics study session starts in 30 minutes',
      time: '3 days ago',
      isNew: false
    },
    {
      id: 7,
      type: 'achievement',
      title: 'Challenge Master',
      message: 'You\'ve completed 10 challenges this week!',
      time: '4 days ago',
      isNew: false
    }
  ]);
  
  const unreadCount = notificationsList.filter(n => n.isNew).length;
  const displayedNotifications = showUnreadOnly 
    ? notificationsList.filter(n => n.isNew)
    : notificationsList;
  
  // Helper functions
  const markAllAsRead = () => {
    setNotificationsList(prev => prev.map(n => ({ ...n, isNew: false })));
  };
  
  const deleteNotification = (id) => {
    setNotificationsList(prev => prev.filter(n => n.id !== id));
  };
  
  const handleViewAll = () => {
    setShowNotifications(false);
    setShowFullNotifications(true);
  };
  
  const closeSidebar = () => {
    setShowFullNotifications(false);
    setShowUnreadOnly(false);
  };
  
  // Watch for credits increase and trigger animation
  useEffect(() => {
    if (hyperCredits > prevCredits) {
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 1500);
    }
    setPrevCredits(hyperCredits);
  }, [hyperCredits]);
  
  return (
    <nav className="bg-black">
      <div className="px-6">
        <div className="grid grid-cols-12 gap-4 items-center h-16">
          <div className="col-span-8 flex items-center space-x-8">
            <button 
              onClick={() => {
                setActivePage('overview');
              }}
              className={`flex items-center space-x-2 px-4 py-2 h-12 transition-colors ${
                activePage === 'overview' 
                  ? 'text-white' 
                  : 'text-white hover:text-gray-200'
              }`}
              style={{
                backgroundColor: activePage === 'overview' ? '#FE55A4' : 'transparent'
              }}
            >
              <img src="/assets/icons/home.svg" alt="Overview" className="w-5 h-5" />
              <span className="font-oswald font-medium uppercase">Overview</span>
            </button>
            <button 
              onClick={() => {
                setActivePage('challenges');
                if (setActiveTab) setActiveTab('classes');
              }}
              className={`flex items-center space-x-2 px-4 py-2 h-12 transition-colors ${
                activePage === 'challenges' 
                  ? 'text-white' 
                  : 'text-white hover:text-gray-200'
              }`}
              style={{
                backgroundColor: activePage === 'challenges' ? '#FE55A4' : 'transparent'
              }}
            >
              <img src="/assets/icons/lightbulb.svg" alt="Challenges" className="w-5 h-5" />
              <span className="font-oswald font-medium uppercase">Challenges</span>
            </button>
            <button 
              onClick={() => setActivePage('squad')}
              className={`flex items-center space-x-2 px-4 py-2 h-12 transition-colors ${
                activePage === 'squad' 
                  ? 'text-white' 
                  : 'text-white hover:text-gray-200'
              }`}
              style={{
                backgroundColor: activePage === 'squad' ? '#FE55A4' : 'transparent'
              }}
            >
              <img src="/assets/icons/perm_contact_calendar.svg" alt="Squad" className="w-5 h-5" />
              <span className="font-oswald font-medium uppercase">Squad</span>
            </button>
            <button 
              onClick={() => setActivePage('rewards')}
              className={`flex items-center space-x-2 px-4 py-2 h-12 transition-colors ${
                activePage === 'rewards' 
                  ? 'text-white' 
                  : 'text-white hover:text-gray-200'
              }`}
              style={{
                backgroundColor: activePage === 'rewards' ? '#FE55A4' : 'transparent'
              }}
            >
              <img src="/assets/icons/shopping_bag.svg" alt="Rewards" className="w-5 h-5" />
              <span className="font-oswald font-medium uppercase">Rewards</span>
            </button>
          </div>
          <div className="col-span-4 flex items-center justify-end space-x-4">
            <div className="flex items-center space-x-2 relative">
              <img src="/assets/icons/Hyper credits.png" alt="Hyper Credits" className="w-5 h-5" />
              <span className={`font-semibold text-white transition-transform duration-300 ${showCelebration ? 'scale-125' : ''}`}>
                {hyperCredits || 240}
              </span>
              
              {/* Celebration Stars */}
              {showCelebration && (
                <>
                  {[
                    { x: -50, y: -80 },
                    { x: 30, y: -60 },
                    { x: 50, y: -20 },
                    { x: 40, y: 30 },
                    { x: -50, y: 60 },
                    { x: -80, y: 40 },
                    { x: -90, y: -10 },
                    { x: -70, y: -50 }
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className="absolute pointer-events-none"
                      style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        animation: `sparkleOut${i} 1.5s ease-out forwards`,
                      }}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#F59E0B" stroke="#F59E0B" strokeWidth="2"/>
                      </svg>
                      <style>{`
                        @keyframes sparkleOut${i} {
                          0% { 
                            transform: translate(-50%, -50%) scale(0); 
                            opacity: 1; 
                          }
                          100% { 
                            transform: translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px)) scale(1); 
                            opacity: 0; 
                          }
                        }
                      `}</style>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="text-gray-400 hover:text-gray-200 relative"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                {unreadCount > 0 && (
                  <div className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {unreadCount}
                  </div>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 top-full mt-2 w-80 bg-white shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                  <div className="p-4 border-b border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                    {unreadCount > 0 && (
                      <p className="text-sm text-gray-600">{unreadCount} new notifications</p>
                    )}
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {notificationsList.slice(0, 5).map((notification) => (
                      <div 
                        key={notification.id} 
                        className={`p-4 hover:bg-gray-50 cursor-pointer ${
                          notification.isNew ? 'bg-blue-50' : ''
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                            notification.type === 'achievement' 
                              ? 'bg-yellow-100 text-yellow-600' 
                              : 'bg-blue-100 text-blue-600'
                          }`}>
                            {notification.type === 'achievement' ? (
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {notification.title}
                              </p>
                              {notification.isNew && (
                                <div className="flex-shrink-0 w-2 h-2 bg-rose-500 rounded-full"></div>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                              {notification.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-4 border-t border-gray-200 bg-gray-50">
                    <button 
                      onClick={handleViewAll}
                      className="w-full text-center text-sm text-gray-600 hover:text-gray-800 font-medium"
                    >
                      View all notifications ({notificationsList.length})
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Full Notifications Sidebar */}
      {showFullNotifications && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeSidebar}
          ></div>
          
          {/* Sidebar */}
          <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
                <p className="text-sm text-gray-600 mt-1">
                  {displayedNotifications.length} notifications
                  {showUnreadOnly && ` (${unreadCount} unread)`}
                </p>
              </div>
              <button 
                onClick={closeSidebar}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
              </button>
            </div>
            
            {/* Controls */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-700">Show unread only</span>
                  <button
                    onClick={() => setShowUnreadOnly(!showUnreadOnly)}
                    className={`relative inline-flex h-6 w-11 items-center transition-colors ${
                      showUnreadOnly ? 'bg-black' : 'bg-gray-200'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform bg-white transition-transform ${
                        showUnreadOnly ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                
                {unreadCount > 0 && (
                  <button
                    onClick={markAllAsRead}
                    className="px-3 py-1 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-300 hover:border-gray-400 transition-colors"
                  >
                    Mark all as read
                  </button>
                )}
              </div>
            </div>
            
            {/* Notifications List */}
            <div className="flex-1 overflow-y-auto">
              {displayedNotifications.length === 0 ? (
                <div className="flex items-center justify-center h-32">
                  <p className="text-gray-500 text-sm">No notifications to show</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {displayedNotifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 hover:bg-gray-50 transition-colors ${
                        notification.isNew ? 'bg-blue-50' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                          notification.type === 'achievement' 
                            ? 'bg-yellow-100 text-yellow-600' 
                            : 'bg-blue-100 text-blue-600'
                        }`}>
                          {notification.type === 'achievement' ? (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                {notification.title}
                              </p>
                              {notification.isNew && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-rose-100 text-rose-800 mt-1">
                                  New
                                </span>
                              )}
                            </div>
                            <button
                              onClick={() => deleteNotification(notification.id)}
                              className="flex-shrink-0 ml-2 p-1 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                              </svg>
                            </button>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-gray-400 mt-2">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Footer */}
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Stay updated with your progress</span>
                <button className="text-gray-500 hover:text-gray-700">
                  Settings
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
