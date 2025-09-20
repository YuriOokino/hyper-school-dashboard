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
              className={`flex items-center space-x-2 pb-4 ${
                activePage === 'dashboard' 
                  ? 'text-white border-b-2' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              style={{
                borderBottomColor: activePage === 'dashboard' ? '#FE55A4' : undefined
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="font-medium">Overview</span>
            </button>
            <button 
              onClick={() => {
                setActivePage('learning');
                if (setActiveTab) setActiveTab('classes');
              }}
              className={`flex items-center space-x-2 pb-4 ${
                activePage === 'learning' 
                  ? 'text-white border-b-2' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              style={{
                borderBottomColor: activePage === 'learning' ? '#FE55A4' : undefined
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Learning</span>
            </button>
            <button 
              onClick={() => setActivePage('rewards')}
              className={`flex items-center space-x-2 pb-4 ${
                activePage === 'rewards' 
                  ? 'text-white border-b-2' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              style={{
                borderBottomColor: activePage === 'rewards' ? '#FE55A4' : undefined
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">Rewards</span>
            </button>
            <button 
              onClick={() => setActivePage('squad')}
              className={`flex items-center space-x-2 pb-4 ${
                activePage === 'squad' 
                  ? 'text-white border-b-2' 
                  : 'text-gray-400 hover:text-gray-200'
              }`}
              style={{
                borderBottomColor: activePage === 'squad' ? '#FE55A4' : undefined
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              <span className="font-medium">Squad</span>
            </button>
          </div>
          <div className="col-span-4 flex items-center justify-end space-x-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5" fill="#FE55A4" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-white">2,500</span>
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
