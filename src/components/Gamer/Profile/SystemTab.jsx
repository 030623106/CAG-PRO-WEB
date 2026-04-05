
const SystemTab = () => {
  return (
      <div className="max-w-2xl mx-auto space-y-px bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
        
        {/* Edit Profile Data */}
        <button className="w-full bg-[#0f172a] p-4 flex justify-between items-center hover:bg-slate-800 transition-colors group">
          <span className="text-xs font-bold text-slate-300 uppercase group-hover:text-white">Edit Profile Data</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </button>

        {/* Security Protocol */}
        <button className="w-full bg-[#0f172a] p-4 flex justify-between items-center hover:bg-slate-800 transition-colors group">
          <span className="text-xs font-bold text-slate-300 uppercase group-hover:text-white">Security Protocol</span>
          <span className="text-[10px] text-green-500 font-mono">ENCRYPTED</span>
        </button>

        {/* Linked Accounts */}
        <button className="w-full bg-[#0f172a] p-4 flex justify-between items-center hover:bg-slate-800 transition-colors group">
          <span className="text-xs font-bold text-slate-300 uppercase group-hover:text-white">Linked Accounts</span>
          <span className="text-[10px] text-slate-500">GOOGLE, FACEBOOK</span>
        </button>

        {/* Terminate Session */}
        <button className="w-full bg-[#0f172a] p-4 flex justify-between items-center hover:bg-red-900/20 transition-colors group border-t border-slate-800 mt-4">
          <span className="text-xs font-black text-red-500 uppercase tracking-widest group-hover:text-red-400">Terminate Session</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16 17 21 12 16 7"></polyline>
            <line x1="21" x2="9" y1="12" y2="12"></line>
          </svg>
        </button>
        
      </div>
  );
};

export default SystemTab;