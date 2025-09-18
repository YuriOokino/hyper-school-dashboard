export default function Sidebar() {
  return (
    <aside className="w-64 bg-white flex flex-col h-screen">
      {/* Image Placeholder */}
      <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
        <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      </div>
      <div className="p-4 flex-1">
        <div className="mb-4 flex flex-row items-start space-x-3">
          <div className="w-16 h-16 bg-gray-200 rounded-full" />
          <div>
            <h2 className="text-md font-semibold">Name Surname</h2>
            <p className="text-sm text-gray-500">7th grade</p>
            <p className="text-sm text-gray-500">Level 4</p>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-1">Progress</h3>
          <div className="w-full bg-gray-100 h-2">
            <div className="bg-green-500 h-2" style={{ width: '79%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Level 4</span>
            <span>Level 5</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Achievements</h3>
          <div className="flex space-x-2 mt-2">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
            <div className="w-8 h-8 border-2 border-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-500 space-y-2 p-4 mt-auto">
        <button className="flex items-center gap-1"><span>?</span> Support</button>
        <button className="flex items-center gap-1"><span>⚙️</span> Settings</button>
      </div>
    </aside>
  );
}
