import { useState } from 'react';

export default function RewardsContent() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [userPoints, setUserPoints] = useState(2500); // User's current points

  const categories = [
    { id: 'all', name: 'All Items', icon: '🛍️' },
    { id: 'electronics', name: 'Electronics', icon: '📱' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'giftcards', name: 'Gift Cards', icon: '💳' },
    { id: 'accessories', name: 'Accessories', icon: '🎧' }
  ];

  const rewards = [
    // Electronics
    {
      id: 1,
      name: "iPhone 15 Pro",
      description: "Latest Apple smartphone with advanced camera system",
      points: 50000,
      category: "electronics",
      image: "📱",
      originalPrice: "$999",
      discount: "50%",
      inStock: true,
      featured: true
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      description: "Premium Android smartphone with AI features",
      points: 45000,
      category: "electronics",
      image: "📱",
      originalPrice: "$799",
      discount: "44%",
      inStock: true,
      featured: true
    },
    {
      id: 3,
      name: "MacBook Air M3",
      description: "Ultra-thin laptop with M3 chip for productivity",
      points: 75000,
      category: "electronics",
      image: "💻",
      originalPrice: "$1099",
      discount: "32%",
      inStock: true,
      featured: false
    },
    {
      id: 4,
      name: "iPad Pro 12.9\"",
      description: "Professional tablet for creative work",
      points: 60000,
      category: "electronics",
      image: "📱",
      originalPrice: "$1099",
      discount: "45%",
      inStock: true,
      featured: false
    },
    {
      id: 5,
      name: "DJI Mini 4 Pro Drone",
      description: "4K camera drone with obstacle avoidance",
      points: 35000,
      category: "electronics",
      image: "🚁",
      originalPrice: "$759",
      discount: "54%",
      inStock: true,
      featured: true
    },

    // Gaming
    {
      id: 6,
      name: "PlayStation 5",
      description: "Next-gen gaming console with 4K gaming",
      points: 40000,
      category: "gaming",
      image: "🎮",
      originalPrice: "$499",
      discount: "20%",
      inStock: true,
      featured: true
    },
    {
      id: 7,
      name: "Xbox Series X",
      description: "Microsoft's most powerful gaming console",
      points: 38000,
      category: "gaming",
      image: "🎮",
      originalPrice: "$499",
      discount: "24%",
      inStock: true,
      featured: false
    },
    {
      id: 8,
      name: "Nintendo Switch OLED",
      description: "Handheld gaming with vibrant OLED display",
      points: 25000,
      category: "gaming",
      image: "🎮",
      originalPrice: "$349",
      discount: "28%",
      inStock: true,
      featured: false
    },
    {
      id: 9,
      name: "Steam Deck",
      description: "Portable PC gaming handheld",
      points: 30000,
      category: "gaming",
      image: "🎮",
      originalPrice: "$399",
      discount: "25%",
      inStock: false,
      featured: false
    },

    // Accessories
    {
      id: 10,
      name: "AirPods Pro (2nd Gen)",
      description: "Active noise cancellation wireless earbuds",
      points: 8000,
      category: "accessories",
      image: "🎧",
      originalPrice: "$249",
      discount: "68%",
      inStock: true,
      featured: false
    },
    {
      id: 11,
      name: "Sony WH-1000XM5",
      description: "Premium noise-canceling headphones",
      points: 12000,
      category: "accessories",
      image: "🎧",
      originalPrice: "$399",
      discount: "70%",
      inStock: true,
      featured: false
    },
    {
      id: 12,
      name: "Apple Watch Series 9",
      description: "Advanced health and fitness tracking",
      points: 18000,
      category: "accessories",
      image: "⌚",
      originalPrice: "$399",
      discount: "55%",
      inStock: true,
      featured: true
    },
    {
      id: 13,
      name: "Magic Keyboard for iPad",
      description: "Backlit keyboard with trackpad",
      points: 6000,
      category: "accessories",
      image: "⌨️",
      originalPrice: "$299",
      discount: "80%",
      inStock: true,
      featured: false
    },

    // Gift Cards
    {
      id: 14,
      name: "Amazon Gift Card",
      description: "Digital gift card for Amazon purchases",
      points: 1000,
      category: "giftcards",
      image: "💳",
      originalPrice: "$10",
      discount: "0%",
      inStock: true,
      featured: false
    },
    {
      id: 15,
      name: "Apple Gift Card",
      description: "Digital gift card for Apple Store",
      points: 2000,
      category: "giftcards",
      image: "💳",
      originalPrice: "$20",
      discount: "0%",
      inStock: true,
      featured: false
    },
    {
      id: 16,
      name: "Google Play Gift Card",
      description: "Digital gift card for apps and games",
      points: 1500,
      category: "giftcards",
      image: "💳",
      originalPrice: "$15",
      discount: "0%",
      inStock: true,
      featured: false
    },
    {
      id: 17,
      name: "Robux (1000)",
      description: "Virtual currency for Roblox games",
      points: 500,
      category: "giftcards",
      image: "🎮",
      originalPrice: "$10",
      discount: "50%",
      inStock: true,
      featured: false
    },
    {
      id: 18,
      name: "V-Bucks (1000)",
      description: "Virtual currency for Fortnite",
      points: 400,
      category: "giftcards",
      image: "🎮",
      originalPrice: "$8",
      discount: "50%",
      inStock: true,
      featured: false
    },
    {
      id: 19,
      name: "Steam Gift Card",
      description: "Digital gift card for Steam games",
      points: 2500,
      category: "giftcards",
      image: "💳",
      originalPrice: "$25",
      discount: "0%",
      inStock: true,
      featured: false
    }
  ];

  const filteredRewards = (selectedCategory === 'all' 
    ? rewards 
    : rewards.filter(reward => reward.category === selectedCategory)
  ).sort((a, b) => a.points - b.points);

  const canAfford = (points) => userPoints >= points;

  const handleRedeem = (reward) => {
    if (canAfford(reward.points)) {
      setUserPoints(userPoints - reward.points);
      alert(`Congratulations! You've redeemed ${reward.name}!`);
    } else {
      alert(`You need ${reward.points - userPoints} more points to redeem this item.`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 font-['Oswald'] uppercase">REWARDS</h1>
          <p className="text-gray-600 mt-1">Redeem your Hyper Points for amazing prizes!</p>
        </div>
        <div className="px-6 py-3">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">⚡</span>
            <div>
              <div className="text-sm text-gray-600">Your Points</div>
              <div className="text-2xl font-bold text-gray-900">{userPoints.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 whitespace-nowrap transition-colors ${
              selectedCategory === category.id
                ? 'text-white'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
            style={{
              backgroundColor: selectedCategory === category.id ? '#FE55A4' : 'white'
            }}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="font-medium">{category.name}</span>
          </button>
        ))}
      </div>

      {/* All Items */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4 font-['Oswald'] uppercase">
          {selectedCategory === 'all' ? 'ALL ITEMS' : categories.find(c => c.id === selectedCategory)?.name.toUpperCase()}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRewards.map((reward) => (
            <div key={reward.id} className="bg-white overflow-hidden h-64" style={{}}>
              <div className="p-4 h-full flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <div className="text-3xl">{reward.image}</div>
                  {!reward.inStock && (
                    <div className="bg-red-100 text-red-800 px-2 py-1 text-xs font-bold">
                      SOLD OUT
                    </div>
                  )}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{reward.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-grow">{reward.description}</p>
                
                <div className="flex items-center justify-center mb-3">
                  <div className="flex items-center space-x-1">
                    <span className="text-lg">⚡</span>
                    <span className="text-lg font-bold" style={{ color: '#3FC7FF' }}>{reward.points.toLocaleString()}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleRedeem(reward)}
                  disabled={!canAfford(reward.points) || !reward.inStock}
                  className={`w-full py-2 px-3 font-medium transition-colors text-sm ${
                    canAfford(reward.points) && reward.inStock
                      ? 'text-white hover:opacity-90'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
                  style={{
                    backgroundColor: canAfford(reward.points) && reward.inStock ? '#FE55A4' : undefined
                  }}
                >
                  {!reward.inStock ? 'Out of Stock' : canAfford(reward.points) ? 'Redeem' : 'Need More Points'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Points Earning Tips */}
      <div className="p-6" style={{ backgroundColor: '#C4CEFF' }}>
        <h3 className="text-lg font-bold text-gray-900 mb-3 font-['Oswald'] uppercase">💡 HOW TO EARN MORE POINTS</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#3FC7FF' }}>1</div>
            <div>
              <div className="font-medium text-gray-900">Complete Lessons</div>
              <div className="text-sm text-gray-600">Earn 50-200 points per lesson</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#DBFF4D' }}>2</div>
            <div>
              <div className="font-medium text-gray-900">Daily Challenges</div>
              <div className="text-sm text-gray-600">Complete daily goals for bonus points</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 flex items-center justify-center text-white font-bold" style={{ backgroundColor: '#FE55A4' }}>3</div>
            <div>
              <div className="font-medium text-gray-900">Streak Bonuses</div>
              <div className="text-sm text-gray-600">Maintain learning streaks for multipliers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
