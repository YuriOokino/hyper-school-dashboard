import { useState } from 'react';

export default function Sidebar() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  return (
    <aside className="bg-black flex flex-col h-full relative w-full overflow-y-auto">
      {/* Circular Profile Image */}
      <div className="flex justify-center pt-8 pb-4">
        <div className="w-32 h-32 bg-gray-600 rounded-full border-4 border-white flex items-center justify-center">
          <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      {/* Profile Info */}
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-white">Jennifer Roswell</h2>
        <div className="flex justify-center space-x-2 mt-2">
          <span className="px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#C4CEFF', color: '#000' }}>7th grade</span>
          <span className="px-3 py-1 text-sm font-semibold" style={{ backgroundColor: '#DBFF4D', color: '#000' }}>Level 4</span>
        </div>
      </div>
      
      {/* Progress Section */}
      <div className="px-4 mb-4 mt-6">
        <h3 className="text-base font-bold uppercase mb-2 text-white">PROGRESS</h3>
        <div className="w-full bg-gray-100 h-2.5">
          <div className="h-2.5" style={{ width: '79%', backgroundColor: '#FE55A4' }}></div>
        </div>
        <div className="flex justify-between text-sm text-gray-300 mt-2">
          <span>Level 4</span>
          <span>Level 5</span>
        </div>
      </div>
      
      {/* Badges Section */}
      <div className="px-4 mb-4">
        <h3 className="text-base font-bold uppercase mb-2 text-white">BADGES</h3>
        <div className="flex space-x-2">
          <div className="w-8 h-8 bg-gray-500 -full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-8 h-8 bg-gray-500 -full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-8 h-8 bg-gray-500 -full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="w-8 h-8 border-2 border-gray-300 -full"></div>
          <div className="w-8 h-8 border-2 border-gray-300 -full"></div>
        </div>
      </div>
      <div className="text-sm text-gray-300 space-y-3 p-4 mt-auto">
        <button className="flex items-center gap-2 p-3 hover:bg-gray-800 rounded-lg w-full">
          <span className="text-lg">?</span> 
          <span className="font-medium">Support</span>
        </button>
        
        <div className="relative">
          <button 
            className="flex items-center gap-2 justify-between w-full hover:bg-gray-800 rounded-lg p-3 "
            onClick={() => setIsAccountOpen(!isAccountOpen)}
          >
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Account</span>
            </div>
            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.38672 0.672852C1.48754 0.672852 1.56452 0.703263 1.64258 0.78125L6.58691 5.72559C6.6408 5.7795 6.66598 5.82148 6.67773 5.84961V5.85059C6.69251 5.88615 6.70117 5.92591 6.70117 5.97461C6.70117 6.02331 6.69252 6.06307 6.67773 6.09863V6.09961C6.66598 6.12774 6.6408 6.16972 6.58691 6.22363L1.61816 11.1924C1.54039 11.2702 1.47326 11.292 1.39258 11.2891C1.29855 11.2856 1.21769 11.2537 1.13184 11.168C1.05371 11.0898 1.02246 11.013 1.02246 10.9121C1.02246 10.8112 1.05371 10.7344 1.13184 10.6562L5.81348 5.97461L1.10645 1.26758C1.02878 1.18988 1.00684 1.12357 1.00977 1.04297C1.01321 0.948702 1.04578 0.867305 1.13184 0.78125C1.20976 0.703441 1.28613 0.672928 1.38672 0.672852Z" fill="black" stroke="black"/>
            </svg>
          </button>
          
          {/* Account Submenu */}
          {isAccountOpen && (
            <div className="absolute left-full bottom-0 ml-2 w-48 bg-gray-800 border border-gray-600 z-50 max-h-80 overflow-y-auto rounded-lg" style={{ boxShadow: '0 0 0 1px #000' }}>
            <div className="py-2">
              <button className="w-full text-left px-4 py-3 text-base text-gray-300 hover:bg-gray-700 flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
                Profile
              </button>
              <button className="w-full text-left px-4 py-3 text-base text-gray-300 hover:bg-gray-700 flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Preferences
              </button>
              <button className="w-full text-left px-4 py-3 text-base text-gray-300 hover:bg-gray-700 flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Privacy
              </button>
              <button className="w-full text-left px-4 py-3 text-base text-gray-300 hover:bg-gray-700 flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Security
              </button>
              <div className="border-t border-gray-600 my-2"></div>
              <button className="w-full text-left px-4 py-3 text-base text-red-400 hover:bg-red-900 flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 12.586V8a1 1 0 112 0v4.586l1.293-1.293z" clipRule="evenodd" />
                </svg>
                Sign Out
              </button>
            </div>
          </div>
          )}
        </div>
      </div>
    </aside>
  );
}
