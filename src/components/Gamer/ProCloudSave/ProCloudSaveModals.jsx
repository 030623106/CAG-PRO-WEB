import React from "react";

export function FindOpponentModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-[#0f172a] w-full max-w-md rounded-2xl border border-slate-700 shadow-[0_0_50px_rgba(5,117,230,0.3)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-slate-900 p-4 border-b border-slate-800 flex justify-between items-center">
          <h3 className="font-black text-white uppercase italic tracking-wider flex items-center gap-2">
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
              className="text-[#0575E6]"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            TÌM ĐỐI THỦ
          </h3>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-white px-2 py-1"
          >
            x
          </button>
        </div>
        <div className="p-6">
          <div className="relative mb-6">
            <input
              placeholder="Nhập ID hoặc Tên người chơi..."
              className="w-full bg-slate-950 border border-slate-700 rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-600 focus:border-[#0575E6] focus:outline-none transition-all font-mono"
              type="text"
              defaultValue=""
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
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
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
          <div className="mb-6">
            <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-3">
              Gợi ý đối thủ
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-xl border border-slate-800 hover:bg-[#0575E6]/10 hover:border-[#0575E6] cursor-pointer transition-all group">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-[#0575E6] group-hover:border-[#0575E6]">
                  F
                </div>
                <span className="text-sm font-bold text-slate-300 group-hover:text-white flex-1">
                  FakerFake
                </span>
              </div>
              <div className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-xl border border-slate-800 hover:bg-[#0575E6]/10 hover:border-[#0575E6] cursor-pointer transition-all group">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-[#0575E6] group-hover:border-[#0575E6]">
                  S
                </div>
                <span className="text-sm font-bold text-slate-300 group-hover:text-white flex-1">
                  SofM_Clone
                </span>
              </div>
            </div>
          </div>
          <button
            disabled
            className="w-full bg-[#0575E6] hover:bg-blue-600 text-white font-black py-4 rounded-xl shadow-[0_0_20px_rgba(5,117,230,0.4)] uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            KẾT NỐI NGAY
          </button>
        </div>
      </div>
    </div>
  );
}

export function GamerPassportModal({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md perspective-1000"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rgb-border w-full bg-gradient-to-br from-slate-900 via-black to-slate-900 rounded-3xl border border-slate-700 p-1 shadow-[0_0_50px_rgba(0,242,234,0.3)] overflow-hidden relative group transform transition-transform duration-700">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform -translate-x-full group-hover:translate-x-full"></div>
          <div className="bg-[#050505] rounded-[22px] p-6 relative overflow-hidden h-full">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00F2EA]/20 rounded-full blur-[50px]"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#FFD700]/20 rounded-full blur-[50px]"></div>
            <div className="flex justify-between items-start relative z-10 mb-6">
              <div>
                <h3 className="text-[#FFD700] font-black text-2xl italic tracking-tighter uppercase leading-none">
                  CAG PRO
                  <br />
                  <span className="text-white">GLOBAL PASS</span>
                </h3>
                <p className="text-[8px] text-[#00F2EA] tracking-[0.2em] uppercase font-bold mt-1">
                  World-Class Offline Gaming
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FFD700"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12h20"></path>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div className="flex items-center gap-4 relative z-10 mb-6">
              <div className="w-20 h-20 rounded-xl p-[2px] bg-gradient-to-tr from-[#FFD700] to-[#00F2EA] shadow-lg shrink-0">
                <img
                  className="w-full h-full rounded-[10px] object-cover"
                  src="https://i.pravatar.cc/300?img=11"
                  alt="avatar"
                />
              </div>
              <div className="min-w-0">
                <h2 className="text-2xl font-black text-white uppercase tracking-wider truncate">
                  Lương Quang Vinh
                </h2>
                <div className="inline-block bg-[#FFD700]/20 border border-[#FFD700]/50 text-[#FFD700] text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest mt-1">
                  DIAMOND
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 relative z-10 mb-6 border-y border-white/10 py-4">
              <div className="text-center">
                <p className="text-[8px] text-slate-400 uppercase tracking-widest mb-1">
                  Giờ bay
                </p>
                <p className="text-white font-mono font-bold text-lg">2219h</p>
              </div>
              <div className="text-center border-x border-white/10">
                <p className="text-[8px] text-slate-400 uppercase tracking-widest mb-1">
                  Phá đảo
                </p>
                <p className="text-white font-mono font-bold text-lg">1</p>
              </div>
              <div className="text-center">
                <p className="text-[8px] text-slate-400 uppercase tracking-widest mb-1">
                  Cấp độ
                </p>
                <p className="text-[#00F2EA] font-mono font-bold text-lg">
                  VIP
                </p>
              </div>
            </div>
            <div className="relative z-10 bg-gradient-to-r from-[#00F2EA]/10 to-transparent p-3 rounded-lg border-l-2 border-[#00F2EA] mb-6">
              <p className="text-[9px] text-slate-300 leading-relaxed">
                <strong className="text-[#00F2EA]">ĐỒNG BỘ TOÀN CẦU:</strong> Dữ
                liệu game offline của bạn được bảo vệ và đồng bộ tức thì. Đăng
                nhập và chơi tiếp tại <strong>BẤT KỲ</strong> phòng máy nào sử
                dụng CAG Pro trên toàn thế giới.
              </p>
            </div>
            <div className="flex justify-between items-end relative z-10">
              <div className="space-y-1">
                <p className="text-[8px] text-slate-500 font-mono">
                  ID: CAG-1-PRO
                </p>
                <p className="text-[8px] text-slate-500 font-mono">
                  ISSUED: 2026
                </p>
              </div>
              <div className="w-12 h-12 bg-white p-1 rounded">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    d="M0 0h30v30H0zM10 10h10v10H10zM50 0h50v30H50zM60 10h30v10H60zM0 50h30v50H0zM10 60h10v30H10zM40 40h20v20H40z"
                    fill="#000"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-3">
          <button className="w-full bg-gradient-to-r from-[#FFD700] to-[#FDB931] hover:from-yellow-400 hover:to-yellow-500 text-black font-black py-4 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.3)] flex items-center justify-center gap-3 uppercase tracking-widest text-sm transition-transform hover:scale-105">
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
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            KHOE CHIẾN TÍCH NGAY
          </button>
          <button
            onClick={onClose}
            className="text-xs font-bold text-slate-500 hover:text-white uppercase tracking-widest py-2"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
}
