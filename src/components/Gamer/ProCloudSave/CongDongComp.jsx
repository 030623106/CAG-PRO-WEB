import React, { useState } from "react";
export default function CongDongComp() {
  const [isWritingReview, setIsWritingReview] = useState(false);
  return (
    <div className="space-y-8 animate-fade-in w-full">
      <div className="relative bg-[#050505] p-8 rounded-[32px] border border-slate-800 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/10 via-transparent to-transparent"></div>
        <div className="absolute right-0 top-0 p-10 opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
          </svg>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-[6px] border-slate-800"></div>
              <div className="absolute inset-0 rounded-full border-[6px] border-yellow-500 border-t-transparent border-l-transparent rotate-45 shadow-[0_0_20px_#eab308]"></div>
              <div className="text-center">
                <span className="text-5xl font-black text-white tracking-tighter">
                  N/A
                </span>
                <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                  / 5.0 SCORE
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 uppercase italic">
                Cộng Đồng Đánh Giá
              </h3>
              <p className="text-slate-400 text-xs font-mono mt-1 uppercase tracking-wide">
                Dựa trên 0 Verified Reviews
              </p>
              <div className="flex gap-2 mt-4">
                <button className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded border transition-all bg-yellow-500 text-black border-yellow-500">
                  NEWEST
                </button>
                <button className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded border transition-all text-slate-500 border-slate-800 hover:border-slate-500 hover:text-white">
                  HIGHEST
                </button>
                <button className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded border transition-all text-slate-500 border-slate-800 hover:border-slate-500 hover:text-white">
                  HARDCORE
                </button>
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsWritingReview(true)}
            className="bg-white text-black hover:bg-yellow-400 font-black text-sm uppercase tracking-widest py-4 px-8 rounded-xl shadow-lg flex items-center gap-2 transition-all transform hover:scale-105 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            Viết Review
          </button>
        </div>
      </div>
      {isWritingReview && (
        <div className="bg-[#050505] p-8 rounded-[24px] border border-slate-800 animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-500 to-transparent"></div>
          <h4 className="text-lg font-black text-white uppercase tracking-wider mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-sm"></span>Battle
            Report Log
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-yellow-500/50 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                  gameplay
                </label>
                <span className="text-yellow-400 font-black text-lg">5</span>
              </div>
              <input
                min="1"
                max="5"
                step="1"
                className="w-full accent-yellow-500 cursor-pointer"
                type="range"
                defaultValue="5"
              />
            </div>
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-yellow-500/50 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                  graphics
                </label>
                <span className="text-yellow-400 font-black text-lg">5</span>
              </div>
              <input
                min="1"
                max="5"
                step="1"
                className="w-full accent-yellow-500 cursor-pointer"
                type="range"
                defaultValue="5"
              />
            </div>
            <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800 hover:border-yellow-500/50 transition-colors">
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                  story
                </label>
                <span className="text-yellow-400 font-black text-lg">5</span>
              </div>
              <input
                min="1"
                max="5"
                step="1"
                className="w-full accent-yellow-500 cursor-pointer"
                type="range"
                defaultValue="5"
              />
            </div>
          </div>
          <div className="relative mb-6">
            <textarea
              className="w-full bg-slate-900 border border-slate-800 rounded-xl p-5 text-white text-sm focus:border-yellow-500 focus:outline-none min-h-[120px] font-mono tracking-wide placeholder-slate-600"
              placeholder="MISSION LOG: Ghi lại trải nghiệm chiến đấu của bạn..."
            ></textarea>
            <div className="absolute bottom-4 right-4 text-[10px] text-slate-500 font-black uppercase tracking-widest">
              0 Ký tự
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <button
              onClick={() => setIsWritingReview(false)}
              className="px-6 py-3 text-slate-500 hover:text-white text-xs font-black uppercase tracking-widest"
            >
              Hủy Bỏ
            </button>
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-lg font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)]">
              Gửi Báo Cáo
            </button>
          </div>
        </div>
      )}

      <div className="space-y-6">
        <div className="text-center py-20 bg-[#050505] rounded-[32px] border border-dashed border-slate-900">
          <p className="text-slate-600 text-sm font-mono uppercase tracking-widest">
            NO DATA RECORDS FOUND
          </p>
        </div>
      </div>
    </div>
  );
}
