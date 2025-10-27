export default function SubjectCard({ subject, pillar, isSelected, onToggle }) {
  const pillarConfig = {
    knowledge: {
      wave: '/assets/pillars/think.svg',
      color: '#FE55A4',
      textColor: '#FFFFFF'
    },
    life: {
      wave: '/assets/pillars/thrive.svg',
      color: '#FC7E3A',
      textColor: '#FFFFFF'
    },
    thrive: {
      wave: '/assets/pillars/connect.svg',
      color: '#6279E5',
      textColor: '#FFFFFF'
    },
    move: {
      wave: '/assets/pillars/move.svg',
      color: '#DBFF4D',
      textColor: '#121214'
    }
  };

  const config = pillarConfig[pillar];

  return (
    <button
      onClick={onToggle}
      className={`bg-white text-left w-full h-[200px] relative transition-all duration-200 ${
        isSelected
          ? `border-4 shadow-lg transform -translate-y-1`
          : 'border-2 border-brand-surface hover:shadow-md hover:-translate-y-1'
      }`}
      style={{
        borderColor: isSelected ? config.color : undefined
      }}
    >
      {/* Wave Header */}
      <div className="w-full h-[100px] overflow-hidden">
        <img 
          src={config.wave} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Checkmark - Only show when selected */}
      {isSelected && (
        <div 
          className="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ backgroundColor: '#3FC7FF' }}
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <div className="font-oswald text-[22px] text-brand-black text-center leading-tight mb-2">
          {subject}
        </div>
        <div className="flex justify-center">
          <span 
            className="font-outfit text-[10px] uppercase px-2 py-1"
            style={{ 
              backgroundColor: config.color,
              color: config.textColor
            }}
          >
            {pillar === 'knowledge' ? 'Knowledge' : pillar === 'life' ? 'Life Skills' : pillar === 'thrive' ? 'Thrive' : 'Move'}
          </span>
        </div>
      </div>
    </button>
  );
}

