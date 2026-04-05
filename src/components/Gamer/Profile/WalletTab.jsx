// src/components/Gamer/Profile/WalletTab.jsx
const WalletTab = ({ data }) => {
  return (
    <div className="space-y-4 max-w-7xl mx-auto">
      
      {/* Main Balance Box */}
      <div className="bg-slate-900 border border-yellow-600/30 p-4 rounded-xl flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="text-center sm:text-left">
          <p className="text-slate-400 text-xs font-bold uppercase">Main Balance</p>
          <h2 className="text-3xl font-black text-white tracking-tight">
            {data?.walletBalance != null ? data.walletBalance.toLocaleString('vi-VN') : '2.500.000'} <span className="text-sm text-slate-500">VND</span>
          </h2>
        </div>
        <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-bold px-6 py-3 rounded-lg shadow-lg transition-colors w-full sm:w-auto">
          TOP UP
        </button>
      </div>

      {/* Linked Memberships Header */}
      <div className="flex justify-between items-end mb-2">
        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Linked Memberships</h3>
        <button className="text-[10px] font-bold text-cyan-400 border border-cyan-500/30 px-3 py-1.5 hover:bg-cyan-500/10 transition-colors uppercase">
          + Add Card
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        
        {/* Card 1: Diamond */}
        <div className="bg-[#0f172a] border border-slate-800 p-4 rounded-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all group relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-600 to-yellow-800"></div>
          <div className="w-12 h-12 rounded bg-black border border-slate-700 shrink-0 overflow-hidden">
            <div className="relative overflow-hidden w-full h-full">
              <img 
                alt="Flash Gaming Center" 
                loading="lazy" 
                decoding="async" 
                className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover opacity-80 group-hover:opacity-100" 
                src="https://picsum.photos/100/100?random=101" 
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-white text-sm truncate">Flash Gaming Center</h4>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            </div>
            <p className="text-[10px] text-slate-500 font-mono tracking-wider">4829 1023 4512 9981</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-black text-white tracking-tight">152.000<span className="text-[10px] text-slate-500 ml-1">VND</span></p>
            <p className="text-[9px] font-bold text-slate-500 uppercase">DIAMOND MEMBER</p>
          </div>
        </div>

        {/* Card 2: Gold */}
        <div className="bg-[#0f172a] border border-slate-800 p-4 rounded-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all group relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-600 to-red-800"></div>
          <div className="w-12 h-12 rounded bg-black border border-slate-700 shrink-0 overflow-hidden">
            <div className="relative overflow-hidden w-full h-full">
              <img 
                alt="Gaming House Pro" 
                loading="lazy" 
                decoding="async" 
                className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover opacity-80 group-hover:opacity-100" 
                src="https://picsum.photos/100/100?random=103" 
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-white text-sm truncate">Gaming House Pro</h4>
            </div>
            <p className="text-[10px] text-slate-500 font-mono tracking-wider">4001 2231 5566 1122</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-black text-white tracking-tight">85.000<span className="text-[10px] text-slate-500 ml-1">VND</span></p>
            <p className="text-[9px] font-bold text-slate-500 uppercase">GOLD MEMBER</p>
          </div>
        </div>

        {/* Card 3: Silver */}
        <div className="bg-[#0f172a] border border-slate-800 p-4 rounded-xl flex items-center gap-4 hover:border-cyan-500/50 transition-all group relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-slate-600 to-slate-800"></div>
          <div className="w-12 h-12 rounded bg-black border border-slate-700 shrink-0 overflow-hidden">
            <div className="relative overflow-hidden w-full h-full">
              <img 
                alt="Speed Gaming 2" 
                loading="lazy" 
                decoding="async" 
                className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover opacity-80 group-hover:opacity-100" 
                src="https://picsum.photos/100/100?random=102" 
              />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-bold text-white text-sm truncate">Speed Gaming 2</h4>
            </div>
            <p className="text-[10px] text-slate-500 font-mono tracking-wider">5123 8812 3321 0021</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-black text-white tracking-tight">12.000<span className="text-[10px] text-slate-500 ml-1">VND</span></p>
            <p className="text-[9px] font-bold text-slate-500 uppercase">SILVER MEMBER</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WalletTab;