export default function DashboardContent({ activeTab, setActiveTab, currentChallenges }) {
  return (
    <>
      {/* Today's Challenges */}
      <div className="bg-white p-6 flex flex-col" style={{ height: '600px' }}>
        <div className="mb-6 flex-shrink-0">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900 uppercase">CHALLENGES</h2>
            <div className="relative">
              <button className="bg-gray-100 text-gray-700 px-4 py-2 -lg text-sm font-medium flex items-center space-x-2">
                <span>Today</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex space-x-6">
            <button 
              onClick={() => setActiveTab('all')}
              className={`pb-2 font-medium ${
                activeTab === 'all' 
                  ? 'text-black border-b-2' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setActiveTab('knowledge')}
              className={`pb-2 font-medium ${
                activeTab === 'knowledge' 
                  ? 'text-black border-b-2' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Knowledge
            </button>
            <button 
              onClick={() => setActiveTab('physical')}
              className={`pb-2 font-medium ${
                activeTab === 'physical' 
                  ? 'text-black border-b-2' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Physical Health
            </button>
            <button 
              onClick={() => setActiveTab('mental')}
              className={`pb-2 font-medium ${
                activeTab === 'mental' 
                  ? 'text-black border-b-2' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Mental health
            </button>
            <button 
              onClick={() => setActiveTab('life')}
              className={`pb-2 font-medium ${
                activeTab === 'life' 
                  ? 'text-black border-b-2' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Life skills
            </button>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto space-y-4">
          {currentChallenges.map((challenge) => (
            <div key={challenge.id} className="flex items-center p-4 -lg space-x-6">
              {/* Points on far left - black square with thunderbolt */}
              <div className="w-12 h-12 bg-black  flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-bold text-sm ml-1">{challenge.points}</span>
              </div>

              {/* Challenge content in middle */}
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{challenge.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                <div className="flex items-center space-x-3">
                  <div className="w-64 bg-gray-200 h-2 -full">
                    <div 
                      className="h-2 transition-all duration-300"
                      style={{ backgroundColor: '#3FC7FF', width: `${challenge.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500 font-medium min-w-[3rem]">{challenge.progress}%</span>
                </div>
              </div>

              {/* Status and action on far right */}
              <div className="flex flex-col items-end space-y-2">
                {challenge.status === 'completed' ? (
                  <>
                    <span className="text-sm font-medium" style={{ color: '#FF69B4' }}>Done!</span>
                    <button className="bg-black text-white px-4 py-2 text-sm font-medium -lg hover:bg-gray-800 transition-colors">
                      {challenge.action}
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-sm text-gray-500">-10:40:23</span>
                    <button className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium -lg hover:bg-gray-200 transition-colors">
                      {challenge.action}
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
