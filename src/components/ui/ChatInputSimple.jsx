/**
 * Simplified chat input with basic options
 * Used in AI assistant, sidebar chat, and other minimal messaging contexts
 * Clean minimal design with outlined icons
 */
export default function ChatInputSimple({ 
  value = '', 
  onChange, 
  onSend,
  placeholder = "Type your message",
  className = '',
  showAttach = true,
  showEmoji = false
}) {
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
    <div className={`flex items-center gap-3 px-4 py-3 border border-gray-300 bg-white ${className}`}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1 text-base text-gray-900 focus:outline-none placeholder-gray-400 font-outfit"
      />
      
      <div className="flex items-center gap-3 flex-shrink-0">
        {showAttach && (
          <button 
            className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-gray-900" 
            title="Attach file"
          >
            <svg className="w-4 h-4 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        )}
        
        {showEmoji && (
          <button 
            className="w-8 h-8 flex items-center justify-center" 
            title="Emoji"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10"/>
              <circle cx="9" cy="9" r="1" fill="currentColor"/>
              <circle cx="15" cy="9" r="1" fill="currentColor"/>
              <path strokeLinecap="round" d="M8 14s1.5 2 4 2 4-2 4-2"/>
            </svg>
          </button>
        )}
        
        <button 
          onClick={handleSend}
          disabled={!value.trim()}
          className="disabled:cursor-not-allowed" 
          title="Send"
        >
          <svg className="w-8 h-8" viewBox="0 0 24 24">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="#121214"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

