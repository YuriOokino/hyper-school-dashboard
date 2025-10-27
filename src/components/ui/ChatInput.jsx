import { useState } from 'react';

/**
 * Full-featured chat input with formatting toolbar and multiple attachment options
 * Used in Squad chat and other full-featured messaging contexts
 */
export default function ChatInput({ 
  value = '', 
  onChange, 
  onSend,
  placeholder = "Write your message...",
  className = ''
}) {
  const [showFormatting, setShowFormatting] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleSend = () => {
    if (value.trim() && onSend) {
      onSend(value);
    }
  };

  return (
    <div className={`bg-white border border-gray-300 rounded-lg ${className}`}>
      {/* Formatting Toolbar - Toggleable */}
      {showFormatting && (
        <div className="flex items-center space-x-1 px-3 py-2 text-gray-600 border-b border-gray-200">
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Bold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M12.5 4H7v12h5.5c1.93 0 3.5-1.57 3.5-3.5 0-1.07-.48-2.02-1.23-2.66.53-.66.83-1.48.83-2.34C15.1 5.57 14.43 4 12.5 4z"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Italic">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Strikethrough">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 4c2.76 0 5 2.24 5 5 0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1 0-2.76 2.24-5 5-5zM3 11h14v2H3v-2zm7 4c-2.21 0-4-1.79-4-4h2c0 1.1.9 2 2 2s2-.9 2-2h2c0 2.21-1.79 4-4 4z"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Link">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Bullet list">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zm0 4a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Numbered list">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4h1v4H3V4zm2 0h12v2H5V4zM3 10h1v4H3v-4zm2 0h12v2H5v-2z"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Code">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      )}

      {/* Input Area */}
      <textarea
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-full px-3 py-2 text-sm text-gray-900 focus:outline-none resize-none"
        rows="1"
      />

      {/* Bottom Toolbar with Attachments and Send */}
      <div className="flex items-center justify-between px-3 py-2 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Attach file">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"/>
            </svg>
          </button>
          <button 
            onClick={() => setShowFormatting(!showFormatting)}
            className={`p-1 hover:bg-gray-100 rounded transition-colors ${showFormatting ? 'bg-gray-100' : ''}`} 
            title="Text formatting"
          >
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 6h12v2H4V6zm0 4h12v2H4v-2z"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Emoji">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Mention">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Video">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="Voice message">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"/>
            </svg>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors" title="More options">
            <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
        
        <button 
          onClick={handleSend}
          disabled={!value.trim()}
          className="p-2 bg-gray-900 hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
          title="Send"
        >
          <svg className="w-5 h-5 text-white transform rotate-45" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

