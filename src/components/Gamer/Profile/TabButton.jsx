// src/components/Gamer/Profile/TabButton.jsx
const TabButton = ({ isActive, label, onClick }) => {
  // Tách class cho trạng thái Active và Inactive
  const activeClass = "bg-slate-800 border-cyan-500 text-cyan-400 shadow-[0_-5px_15px_rgba(6,182,212,0.1)]";
  const inactiveClass = "bg-transparent border-transparent text-slate-500 hover:text-white hover:bg-slate-900";

  return (
    <button 
      onClick={onClick}
      className={`flex-1 min-w-[100px] py-2 px-4 skew-x-[-12deg] border-t-2 border-x transition-all duration-300 group ${isActive ? activeClass : inactiveClass}`}
    >
      <span className="skew-x-[12deg] block text-[10px] md:text-xs font-black uppercase tracking-[0.15em]">
        {label}
      </span>
    </button>
  );
};

export default TabButton;