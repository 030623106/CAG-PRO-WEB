// src/components/Gamer/Profile/OverviewTab.jsx
const OverviewTab = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {/* Performance Stats */}
          <div className="bg-[#0f172a] border border-slate-800 p-6 relative overflow-hidden group rounded-xl">
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-cyan-500/20 to-transparent"></div>
            <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500"></div>
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V10"></path>
                <path d="M18 20V4"></path>
                <path d="M6 20v-4"></path>
              </svg>
              Performance Stats
            </h3>
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Trust Score</p>
                <p className="text-2xl font-black text-green-400">100</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Hours Played</p>
                <p className="text-2xl font-black text-white">1,240<span className="text-xs text-slate-600 font-medium">H</span></p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Win Rate</p>
                <p className="text-2xl font-black text-cyan-400">54<span className="text-xs text-slate-600 font-medium">%</span></p>
              </div>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Balance</p>
                <p className="text-2xl font-black text-yellow-500">
                  {data?.walletBalance != null ? data.walletBalance.toLocaleString('vi-VN') : '2.500.000'}
                  <span className="text-xs text-slate-600 font-medium ml-1">VND</span>
                </p>
              </div>
            </div>
          </div>

          {/* Access Pass Card */}
          <div className="bg-white text-black p-6 relative overflow-hidden flex flex-col justify-between group cursor-cell rounded-xl h-64 lg:h-auto">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <h3 className="text-lg font-black uppercase tracking-tighter italic">ACCESS_PASS</h3>
                <p className="text-[9px] font-bold uppercase tracking-widest text-slate-500 mt-1">CAG NETWORK VERIFIED</p>
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center font-black text-xs">C</div>
            </div>
            <div className="relative z-10 flex items-end justify-between mt-4">
              <div className="text-[9px] font-mono space-y-1">
                <p>ID: {data?.username || 'UNKNOWN'}</p>
                <p>EXP: LIFETIME</p>
                <p>SEC: LEVEL 4</p>
              </div>
              <img className="w-20 h-20 mix-blend-multiply" alt="QR" src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${data?.username || 'luongvinh3969'}`} />
            </div>
          </div>

          {/* System Logs */}
          <div className="lg:col-span-2 xl:col-span-1 bg-[#0f172a] border border-slate-800 p-6 rounded-xl">
            <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">System Logs (Transactions)</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-4 text-xs font-mono border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                <span className="text-slate-500 w-24 shrink-0">2026-03-19</span>
                <span className="font-bold uppercase shrink-0 w-20 text-blue-500">TOPUP</span>
                <span className="text-slate-300 truncate flex-1">Nạp qua Banking</span>
                <span className="font-bold text-green-400">+500.000</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                <span className="text-slate-500 w-24 shrink-0">2026-03-18</span>
                <span className="font-bold uppercase shrink-0 w-20 text-red-500">PAYMENT</span>
                <span className="text-slate-300 truncate flex-1">Flash Gaming Center (VIP Room)</span>
                <span className="font-bold text-red-400">-50.000</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono border-b border-slate-800 pb-2 last:border-0 last:pb-0">
                <span className="text-slate-500 w-24 shrink-0">2026-03-17</span>
                <span className="font-bold uppercase shrink-0 w-20 text-green-500">EARNING</span>
                <span className="text-slate-300 truncate flex-1">Thưởng Top Reviewer</span>
                <span className="font-bold text-green-400">+150.000</span>
              </div>
            </div>
          </div>
        </div>
  );
};

export default OverviewTab;