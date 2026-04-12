// FeedbackCard.jsx
const FeedbackCard = ({ title, rating, totalReviews, highlights, color, iconType }) => {
  const getIcon = () => {
    if (iconType === 'owner') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <polyline points="16 11 18 13 22 9"/>
        </svg>
      );
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    );
  };

  
  const hexToRgba = (hex, opacity) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  return (
    <div 
      className="glass-panel rounded-xl p-6 shadow-lg" 
      style={{
        border: `0.8px solid ${color}`,
        borderLeft: `4px solid ${color}`
      }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-white font-rajdhani uppercase">{title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-black" style={{ color }}>{rating}</span>
            <div className="flex text-[#FFD700]">{'★'.repeat(Math.floor(rating))}</div>
            <span className="text-xs text-slate-400">({totalReviews.toLocaleString()} đánh giá)</span>
          </div>
        </div>
        <div className="p-3 rounded-lg" style={{ backgroundColor: hexToRgba(color, 0.1), color }}>
          {getIcon()}
        </div>
      </div>
      <ul className="space-y-3 text-sm text-slate-300 mt-4">
        {highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 flex-shrink-0" style={{ color }}>✓</span>
            <span className="leading-relaxed">{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackCard;