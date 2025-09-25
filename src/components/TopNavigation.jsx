import { useState } from 'react';

export default function TopNavigation({ activePage, setActivePage, activeTab, setActiveTab }) {
  return (
    <nav className="bg-black">
      <div className="px-6">
        <div className="grid grid-cols-12 gap-4 items-center h-16">
          <div className="col-span-8 flex items-center space-x-8">
            <button 
              onClick={() => {
                setActivePage('dashboard');
                if (setActiveTab) setActiveTab('knowledge');
              }}
              className={`flex items-center space-x-2 px-4 py-2 h-12 transition-colors ${
                activePage === 'dashboard' 
                  ? 'text-white' 
                  : 'text-white hover:text-gray-200'
              }`}
              style={{
                backgroundColor: activePage === 'dashboard' ? '#FE55A4' : 'transparent'
              }}
            >
              <img src="/assets/icons/home.svg" alt="Overview" className="w-5 h-5" />
              <span className="font-oswald font-medium uppercase">Overview</span>
            </button>
            <button 
              onClick={() => {
                setActivePage('learning');
                if (setActiveTab) setActiveTab('classes');
              }}
              className={`flex items-center space-x-2 px-4 py-2 h-12 transition-colors ${
                activePage === 'learning' 
                  ? 'text-white' 
                  : 'text-white hover:text-gray-200'
              }`}
              style={{
                backgroundColor: activePage === 'learning' ? '#FE55A4' : 'transparent'
              }}
            >
              <img src="/assets/icons/lightbulb.svg" alt="Learning" className="w-5 h-5" />
              <span className="font-oswald font-medium uppercase">Learning</span>
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
          </div>
          <div className="col-span-4 flex items-center justify-end space-x-4">
            <div className="flex items-center space-x-2">
              <img src="/assets/icons/Hyper credits.png" alt="Hyper Credits" className="w-5 h-5" />
              <span className="font-semibold text-white">240</span>
            </div>
            <button className="text-gray-400 hover:text-gray-200">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
