import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/Authen";
import "./Sidebar.css";

const GamerSidebar = () => {
  const location = useLocation();
  const { logout, user } = useAuth();
  const currentPath = location.pathname;
  const handleLogout = () => {
   
      logout(); 
      window.location.href = "/";
    
  };
  return (
    <aside className="w-24 lg:w-64 glass-panel border-r border-white/5 flex flex-col hidden md:flex z-50 shrink-0">
      
      {/* LOGO & HEADER */}
      <div className="p-6 flex items-center justify-center lg:justify-start gap-3">
        <div className="w-10 h-10 bg-[#00F2EA] skew-x-[-10deg] flex items-center justify-center shadow-[0_0_20px_rgba(0,242,234,0.4)]">
          <span className="font-rajdhani font-bold text-[#0B0E14] text-xl skew-x-[10deg]">C</span>
        </div>
        <div className="hidden lg:block">
          <span className="font-rajdhani font-bold text-2xl text-white tracking-widest block leading-none">CAG</span>
          <span className="font-montserrat text-[8px] font-bold text-slate-400 tracking-[0.3em]">ECOSYSTEM</span>
        </div>
      </div>

      <nav className="flex-1 px-4 py-8 space-y-4">
        
        {/* Tab 1: Cộng Đồng CAG */}
        <Link className={`
                flex flex-col lg:flex-row items-center gap-3 px-3 py-4 rounded-xl transition-all duration-300 group
                ${currentPath === '/cong-dong-cag' ? 'bg-white/5 border border-white/10' : 'hover:bg-white/5'}
              `} to="/cong-dong-cag" data-discover="true" {...(currentPath === '/cong-dong-cag' ? { 'aria-current': 'page' } : {})}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/cong-dong-cag' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/cong-dong-cag' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500 group-hover:text-slate-300'}`}>
            <path d="M3 10L12 2L21 10V20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20V10Z"></path>
            <path d="M9 21V15"></path>
            <path d="M15 21V15"></path>
            <circle cx="12" cy="15" r="1.5" fill={currentPath === '/cong-dong-cag' ? "currentColor" : "none"} className="stroke-none"></circle>
            <path d="M12 2V6"></path>
            <circle cx="12" cy="6" r="1" fill="currentColor"></circle>
          </svg>
          <span className={`font-rajdhani font-bold tracking-widest text-sm hidden lg:block ${currentPath === '/cong-dong-cag' ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>Cộng Đồng CAG</span>
          {currentPath === '/cong-dong-cag' && <div className="absolute left-0 w-1 h-8 bg-[#00F2EA] rounded-r-full shadow-[0_0_10px_#00F2EA]"></div>}
        </Link>

        {/* Tab 2: Pro Cloud Save */}
        <Link className={`
                flex flex-col lg:flex-row items-center gap-3 px-3 py-4 rounded-xl transition-all duration-300 group
                ${currentPath === '/pro-cloud-save' ? 'bg-white/5 border border-white/10' : 'hover:bg-white/5'}
              `} to="/pro-cloud-save" data-discover="true" {...(currentPath === '/pro-cloud-save' ? { 'aria-current': 'page' } : {})}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/pro-cloud-save' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/pro-cloud-save' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500 group-hover:text-slate-300'}`}>
            <path d="M17.5 15c0-1.7-1.3-3-3-3h-1.1c-.2-3.4-3-6-6.4-6-3.6 0-6.5 2.8-6.5 6.3 0 .7.1 1.4.4 2"></path>
            <rect x="6" y="13" width="12" height="6" rx="2"></rect>
            <path d="M8 16h2"></path>
            <path d="M9 15v2"></path>
            <circle cx="15" cy="16" r="0.5" fill="currentColor"></circle>
            <circle cx="14" cy="15" r="0.5" fill="currentColor"></circle>
          </svg>
          <span className={`font-rajdhani font-bold tracking-widest text-sm hidden lg:block ${currentPath === '/pro-cloud-save' ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>Pro Cloud Save</span>
          {currentPath === '/pro-cloud-save' && <div className="absolute left-0 w-1 h-8 bg-[#00F2EA] rounded-r-full shadow-[0_0_10px_#00F2EA]"></div>}
        </Link>

        {/* Tab 3: CAG Guide */}
        <Link className={`
                flex flex-col lg:flex-row items-center gap-3 px-3 py-4 rounded-xl transition-all duration-300 group
                ${currentPath === '/offices' ? 'bg-white/5 border border-white/10' : 'hover:bg-white/5'}
              `} to="/offices" data-discover="true" {...(currentPath === '/offices' ? { 'aria-current': 'page' } : {})}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/offices' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/offices' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500 group-hover:text-slate-300'}`}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            <path d="M12 8v4"></path>
            <path d="M12 16h.01"></path>
            <circle cx="12" cy="12" r="9" strokeOpacity="0.2"></circle>
            {currentPath === '/offices' && <path d="M12 7l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3z" className="fill-[#FFD700] stroke-none"></path>}
          </svg>
          <span className={`font-rajdhani font-bold tracking-widest text-sm hidden lg:block ${currentPath === '/offices' ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>CAG Guide</span>
          {currentPath === '/offices' && <div className="absolute left-0 w-1 h-8 bg-[#00F2EA] rounded-r-full shadow-[0_0_10px_#00F2EA]"></div>}
        </Link>

        {/* Tab 4: Ví Của Tôi */}
        <Link className={`
                flex flex-col lg:flex-row items-center gap-3 px-3 py-4 rounded-xl transition-all duration-300 group
                ${currentPath === '/wallet' ? 'bg-white/5 border border-white/10' : 'hover:bg-white/5'}
              `} to="/wallet" data-discover="true" {...(currentPath === '/wallet' ? { 'aria-current': 'page' } : {})}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/wallet' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/wallet' ? 'text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]' : 'text-slate-500 group-hover:text-slate-300'}`}>
            <path d="M12 2l9 5v10l-9 5-9-5V7z"></path>
            <circle cx="12" cy="10" r="3"></circle>
            <path d="M16 18c0-2-2-3-4-3s-4 1-4 3"></path>
          </svg>
          {/* SỬA LẠI: Chữ trả về text-white, Vạch kẻ trả về bg-[#00F2EA] */}
          <span className={`font-rajdhani font-bold tracking-widest text-sm hidden lg:block ${currentPath === '/wallet' ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>Ví Của Tôi</span>
          {currentPath === '/wallet' && <div className="absolute left-0 w-1 h-8 bg-[#00F2EA] rounded-r-full shadow-[0_0_10px_#00F2EA]"></div>}
        </Link>
      </nav>

      {/* USER PROFILE */}
      <div className="p-4 border-t border-white/5 flex flex-col items-center lg:items-start">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 p-0.5">
            <img alt="User" className="w-full h-full rounded-lg object-cover" src={user?.avatar || "https://i.pravatar.cc/300?img=11"} />
          </div>
          <div className="hidden lg:block">
            <p className="text-xs font-bold font-rajdhani text-white truncate w-32 uppercase">{user?.fullName || "Gamer"}</p>
            <p className="text-[10px] text-[#FFD700] font-bold uppercase tracking-wider">DIAMOND</p>
          </div>
        </div>
        <button
        onClick={handleLogout}
        className="lg:w-full p-2 lg:px-4 lg:py-2 rounded-lg border border-red-900/30 text-red-500 hover:bg-red-900/20 hover:text-red-400 transition-all text-xs font-bold uppercase tracking-widest">
          <span className="hidden lg:inline">LOGOUT</span><span className="lg:hidden">⏻</span>
        </button>
      </div>

    </aside>
  );
};

export default GamerSidebar;