const StatCard = ({ title, value, change, changeType, cardClass }) => {
  return (
    <div className={`glass-panel rounded-r-xl p-4 shadow-lg flex flex-col justify-between h-32 ${cardClass}`}>
      <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider font-rajdhani">{title}</h3>
      <p className="text-3xl font-black text-white mt-1 font-rajdhani">{value}</p>
      <div className={`text-xs mt-2 ${changeType === 'up' ? 'text-green-400' : changeType === 'down' ? 'text-red-400' : 'text-green-400'}`}>
        {changeType === 'up' && '↑ '} 
        {changeType === 'down' && '↓ '} 
        {change}
      </div>
    </div>
  );
};

export default StatCard;