import React from "react";

const HallOfFameModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-[9999] bg-black/80 backdrop-blur-sm rounded-xl">
      <div className="sticky top-0 left-0 w-full h-full min-h-[100vh] flex items-center justify-center p-4">
        {/* Container chính của Modal */}
        <div className="bg-[#0f172a] w-full max-w-2xl rounded-3xl border border-slate-700 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden flex flex-col max-h-[90vh]">
          {/* Header */}
          <div className="bg-slate-900/80 p-4 border-b border-slate-800 flex justify-between items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 via-transparent to-transparent"></div>
            <div className="relative z-10 flex items-center gap-3">
              <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-2xl shadow-lg shadow-yellow-500/50">
                🏆
              </div>
              <div>
                <h2 className="text-xl font-black text-white italic tracking-wider uppercase">HALL OF FAME</h2>
                <p className="text-[10px] text-yellow-500 font-bold uppercase tracking-widest">Top Doanh Thu Tuần 42</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 p-2 rounded-full transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          {/* Nội dung thanh cuộn */}
          <div className="overflow-y-auto flex-1 custom-scrollbar">
            
            {/* Bục Vinh Quang Top 1, 2, 3 */}
            <div className="py-8 px-4 flex justify-center items-end gap-2 sm:gap-6 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed relative">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-[#0f172a]"></div>
              
              {/* Top 2 */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="w-20 h-20 rounded-full border-4 border-slate-300 shadow-[0_0_20px_rgba(203,213,225,0.4)] overflow-hidden">
                    <div className="relative overflow-hidden w-full h-full">
                      <img alt="Minh Hằng" loading="lazy" decoding="async" className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover" src="https://picsum.photos/100/100?random=7" />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-slate-300 text-slate-900 text-xs font-black px-2 py-0.5 rounded shadow-lg">#2</div>
                </div>
                <div className="text-center mt-2">
                  <p className="text-slate-200 font-bold text-sm truncate w-24">Minh Hằng</p>
                  <p className="text-green-400 font-mono font-bold text-xs">+8.2M</p>
                </div>
                <div className="h-16 w-20 bg-gradient-to-t from-slate-300/10 to-transparent mt-2 rounded-t-lg border-t border-slate-300/30"></div>
              </div>

              {/* Top 1 */}
              <div className="relative z-10 flex flex-col items-center -mt-6">
                <div className="absolute -top-10 text-4xl animate-bounce">👑</div>
                <div className="relative mb-2">
                  <div className="w-28 h-28 rounded-full border-4 border-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.6)] overflow-hidden ring-4 ring-yellow-500/20">
                    <div className="relative overflow-hidden w-full h-full">
                      <img alt="Thành Long" loading="lazy" decoding="async" className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover" src="https://picsum.photos/100/100?random=8" />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black text-sm font-black px-4 py-1 rounded-lg shadow-xl skew-x-[-10deg]">
                    <span className="skew-x-[10deg] block">TOP 1</span>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <p className="text-yellow-400 font-black text-lg truncate w-32">Thành Long</p>
                  <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">TOP 1 SERVER</p>
                  <p className="text-green-400 font-mono font-black text-sm bg-green-900/30 px-2 rounded mt-1 inline-block">+12.5M</p>
                </div>
                <div className="h-24 w-24 bg-gradient-to-t from-yellow-500/10 to-transparent mt-2 rounded-t-lg border-t border-yellow-500/30 relative">
                  <div className="absolute inset-0 bg-yellow-400/5 blur-xl"></div>
                </div>
              </div>

              {/* Top 3 */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-2">
                  <div className="w-20 h-20 rounded-full border-4 border-orange-600 shadow-[0_0_20px_rgba(234,88,12,0.4)] overflow-hidden">
                    <div className="relative overflow-hidden w-full h-full">
                      <img alt="Tuấn Đạt" loading="lazy" decoding="async" className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover" src="https://picsum.photos/100/100?random=12" />
                    </div>
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-orange-600 text-white text-xs font-black px-2 py-0.5 rounded shadow-lg">#3</div>
                </div>
                <div className="text-center mt-2">
                  <p className="text-slate-200 font-bold text-sm truncate w-24">Tuấn Đạt</p>
                  <p className="text-green-400 font-mono font-bold text-xs">+5.1M</p>
                </div>
                <div className="h-12 w-20 bg-gradient-to-t from-orange-600/10 to-transparent mt-2 rounded-t-lg border-t border-orange-600/30"></div>
              </div>
            </div>

            {/* Danh sách Top 4 -> 10 */}
            <div className="bg-slate-900 p-4 space-y-2">
              {[
                { rank: 4, name: "Huy Me", title: "Gamer Hardcore", amount: "+4.8M", trend: "▼", trendColor: "text-red-500", avatar: "50" },
                { rank: 5, name: "Lan Anh", title: "Support Cute", amount: "+3.2M", trend: "▲", trendColor: "text-green-500", avatar: "13" },
                { rank: 6, name: "Kevin Tuấn", title: "Newbie", amount: "+2.1M", trend: "-", trendColor: "text-slate-500", avatar: "99" },
                { rank: 7, name: "Bảo Thy", title: "Gamer", amount: "+1.9M", trend: "▼", trendColor: "text-red-500", avatar: "44" },
                { rank: 8, name: "Đức Bo", title: "Gamer", amount: "+1.5M", trend: "-", trendColor: "text-slate-500", avatar: "22" },
                { rank: 9, name: "Sơn Tùng", title: "Gamer", amount: "+0.9M", trend: "▲", trendColor: "text-green-500", avatar: "33" },
                { rank: 10, name: "Jack", title: "Gamer", amount: "+0.5M", trend: "▼", trendColor: "text-red-500", avatar: "11" },
              ].map((item) => (
                <div key={item.rank} className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 hover:bg-slate-800 transition-colors group">
                  <div className="w-8 text-center font-black text-slate-500 text-lg group-hover:text-white transition-colors">{item.rank}</div>
                  <div className="flex items-center gap-3 flex-1">
                    <div className="relative overflow-hidden w-10 h-10 rounded-full shrink-0">
                      <img alt={item.name} loading="lazy" decoding="async" className="transition-opacity duration-500 ease-in-out opacity-100 w-10 h-10 rounded-full border border-slate-600 object-cover" src={`https://picsum.photos/100/100?random=${item.avatar}`} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{item.name}</p>
                      <p className="text-[10px] text-slate-500">{item.title}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-mono font-bold text-sm">{item.amount}</p>
                    <div className={`text-[10px] font-bold flex items-center justify-end gap-1 ${item.trendColor}`}>
                      {item.trend}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-900 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-xs">Bảng xếp hạng cập nhật mỗi 15 phút. Reset vào 00:00 Thứ 2.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HallOfFameModal;