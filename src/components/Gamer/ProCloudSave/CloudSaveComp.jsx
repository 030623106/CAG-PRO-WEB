import React, { useState } from "react";

function SaveItemCard({ title, date, location, size, isLocked }) {
  return (
    <div className="bg-[#0a0a0a] p-4 md:p-6 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 border border-slate-900 hover:border-[#0575E6] transition-all hover:bg-slate-900/50 group hover:shadow-lg">
      <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto">
        <div className="p-3 md:p-5 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-[#0575E6] group-hover:text-[#0575E6] transition-colors shrink-0 text-[#00F260]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-white font-black text-sm md:text-lg uppercase tracking-wide group-hover:text-[#00F260] transition-colors truncate">
            {title}
          </h4>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-[10px] md:text-xs text-slate-500 mt-1 md:mt-2 font-mono uppercase tracking-wide">
            <span className="text-slate-300">{date}</span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span className="flex items-center gap-2 truncate">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              {location}
            </span>
            <span className="hidden sm:inline text-slate-800">|</span>
            <span className="text-[#0575E6] font-bold">{size}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-3 w-full md:w-auto">
        <button
          className={`flex-1 md:flex-none px-4 md:px-6 py-2 md:py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2 border-2 transition-all ${
            isLocked
              ? "bg-[#00F260]/10 text-[#00F260] border-[#00F260]"
              : "bg-transparent text-slate-500 border-slate-800 hover:border-slate-500 hover:text-white"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            {isLocked ? (
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            ) : (
              <path d="M7 11V7a5 5 0 0 1 9.9-1" />
            )}
          </svg>
          LOCK
        </button>
        {!isLocked && (
          <button className="flex-1 md:flex-none px-4 md:px-6 py-2 md:py-3 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] bg-red-900/10 text-red-500 hover:bg-red-600 hover:text-white border-2 border-red-900/50 hover:border-red-600 flex items-center justify-center gap-2 transition-all">
            DELETE
          </button>
        )}
      </div>
    </div>
  );
}

export default function CloudSaveComp() {
  const [showAI, setShowAI] = useState(false);

  const saveFilesData = [
    {
      id: 1,
      title: "AutoSave_Chapter4",
      date: "19:32 17/03/2026",
      location: "Flash Gaming Center",
      size: "15.2MB",
      isLocked: false,
    },
    {
      id: 2,
      title: "Manual_BossFight",
      date: "19:32 16/03/2026",
      location: "Gaming House Pro",
      size: "14.8MB",
      isLocked: true,
    },
  ];

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex justify-between items-center mb-6 md:mb-8">
        <span className="text-[9px] md:text-[10px] font-bold text-[#00F260] uppercase tracking-widest flex items-center gap-2 md:gap-3 bg-[#00F260]/10 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#00F260]/30 shadow-[0_0_15px_rgba(0,242,96,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F260] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F260]" />
          </span>
          Real-time Sync
        </span>
        <button
          onClick={() => setShowAI(!showAI)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white text-[10px] md:text-xs font-black uppercase tracking-widest px-4 py-2 md:px-6 md:py-3 rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.4)] flex items-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
          </svg>
          AI PHÂN TÍCH TIẾN TRÌNH
        </button>
      </div>

      {showAI && (
        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-2xl p-6 mb-8 animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-20 h-20 rounded-full border-4 border-purple-500/30 flex items-center justify-center shrink-0 relative">
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  className="text-slate-800"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                ></path>
                <path
                  className="text-purple-500"
                  strokeDasharray="46, 100"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                ></path>
              </svg>
              <span className="text-xl font-black text-white">46%</span>
            </div>
            <div className="flex-1">
              <h4 className="text-purple-400 font-black uppercase tracking-widest text-sm mb-2 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
                AI ĐÁNH GIÁ TIẾN TRÌNH
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                Dựa trên dữ liệu file save mới nhất, AI ước tính bạn đã hoàn thành{" "}
                <strong className="text-white">46%</strong> cốt truyện chính. Bạn đang ở giai đoạn giữa game, cốt truyện đang dần lên cao trào.
              </p>
            </div>
          </div>
        </div>
      )}

      {saveFilesData.map((file) => (
        <SaveItemCard key={file.id} {...file} />
      ))}
    </div>
  );
}
