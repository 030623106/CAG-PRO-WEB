import React from 'react';

const RoundTableFeed = ({ onOpenDiscussion }) => {
  return (
    <div className="space-y-4">
      {/* Input bắt đầu thảo luận */}
      <div
      onClick={onOpenDiscussion}
       className="bg-slate-900 border border-cyan-900/50 p-4 rounded-xl flex items-center gap-4 cursor-pointer hover:bg-slate-800 transition-colors">
        <div className="w-10 h-10 rounded-full bg-cyan-900/30 flex items-center justify-center text-cyan-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </div>
        <span className="text-slate-400 text-sm font-medium">Bắt đầu thảo luận, hỏi đáp hoặc chia sẻ mẹo...</span>
      </div>

      {/* Các tag filter (Hot Topic, Phần Cứng, Wukong,...) */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button className="bg-cyan-600 text-white px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-lg shadow-cyan-600/20">
          Tất cả
        </button>
        <button className="bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-500 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors">
          🔥 Hot Topic
        </button>
        <button className="bg-slate-800 text-slate-300 border border-slate-700 hover:border-purple-500 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors">
          💻 Phần Cứng
        </button>
        <button className="bg-slate-800 text-slate-300 border border-slate-700 hover:border-green-500 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors">
          🎮 Wukong
        </button>
        <button className="bg-slate-800 text-slate-300 border border-slate-700 hover:border-red-500 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap transition-colors">
          ⚠️ Lỗi Game
        </button>
      </div>

      {/* Bài thảo luận mẫu */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition-all group">
        <div className="flex">
          {/* Vote up/down sidebar */}
          <div className="w-10 bg-slate-900/50 flex flex-col items-center pt-3 border-r border-slate-700/50 gap-1">
            <button className="text-slate-500 hover:text-orange-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m18 15-6-6-6 6"></path>
              </svg>
            </button>
            <span className="text-xs font-bold text-slate-300">3</span>
            <button className="text-slate-500 hover:text-blue-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>

          {/* Nội dung chính */}
          <div className="flex-1 p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="relative overflow-hidden w-5 h-5 rounded-full">
                <img
                  alt="Gamer Ẩn Danh"
                  loading="lazy"
                  decoding="async"
                  className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover"
                  src="https://picsum.photos/50/50?random=99"
                />
              </div>
              <span className="text-xs text-slate-400 font-bold hover:text-white transition-colors">Gamer Ẩn Danh</span>
              <button className="ml-1 text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded transition-all text-cyan-400 hover:underline">
                + Follow
              </button>
              <span className="text-[10px] text-slate-600">• 5 giờ trước</span>
            </div>

            <h3 className="font-bold text-white text-base mb-2 leading-snug group-hover:text-cyan-400 transition-colors">
              Lỗi save game Wukong không load được ở chapter 4, ai biết fix không cứu với :((
            </h3>

            <div className="flex flex-wrap gap-2 mt-3 items-center">
              <span className="bg-slate-900 border border-slate-700 text-slate-400 px-2 py-0.5 rounded-md text-[10px] font-mono hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                #LoiGame
              </span>
              <span className="bg-slate-900 border border-slate-700 text-slate-400 px-2 py-0.5 rounded-md text-[10px] font-mono hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                #Help
              </span>

              <div className="ml-auto flex items-center gap-4 text-xs text-slate-500">
                <button className="flex items-center gap-1 hover:text-cyan-400 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  10 bình luận
                </button>
                <button className="flex items-center gap-1 hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" y1="2" x2="12" y2="15"></line>
                  </svg>
                  Chia sẻ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bạn có thể thêm nhiều bài thảo luận khác ở đây, copy khối trên và chỉnh sửa nội dung */}
    </div>
  );
};

export default RoundTableFeed;