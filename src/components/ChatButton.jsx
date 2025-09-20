import { useState } from 'react';

export default function ChatButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 text-white p-4 transition-all duration-200 z-50 rounded-full"
        style={{ backgroundColor: '#FE55A4' }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 h-96 bg-white border border-gray-200 z-50 flex flex-col" style={{ boxShadow: '0 0 0 1px #000' }}>
          <div className="text-white p-4 flex items-center justify-between" style={{ backgroundColor: '#000' }}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: '#FE55A4' }}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Support Chat</h3>
                <p className="text-xs text-gray-300">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            <div className="flex items-start space-x-2">
              <div className="w-6 h-6 bg-gray-200 -full flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="bg-gray-100 -lg p-2 max-w-xs">
                <p className="text-sm">Hi! How can I help you today?</p>
                <p className="text-xs text-gray-500 mt-1">2:30 PM</p>
              </div>
            </div>
            <div className="flex items-start space-x-2 justify-end">
              <div className="p-2 max-w-xs" style={{ backgroundColor: '#C4CEFF', color: '#000' }}>
                <p className="text-sm" style={{ color: '#000' }}>I need help with my math assignment</p>
                <p className="text-xs mt-1" style={{ color: '#000' }}>2:31 PM</p>
              </div>
              <div className="w-6 h-6 flex items-center justify-center" style={{ backgroundColor: '#3FC7FF' }}>
                <span className="text-xs text-white font-semibold">Y</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 -lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="p-2 transition-colors" style={{ backgroundColor: 'transparent' }}>
                <svg className="w-4 h-4" fill="#000" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
