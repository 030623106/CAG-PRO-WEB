import React, { useState } from "react";
import IdcGameLibrary, {
  ProCloudSaveBanner,
} from "../../../components/Gamer/ProCloudSave/IdcGameLibrary";
import {
  UserProfileStats,
  SystemStats,
  CareerTimeline,
  FriendComparison,
} from "../../../components/Gamer/ProCloudSave/SidebarWidgets";
import {
  FindOpponentModal,
  GamerPassportModal,
} from "../../../components/Gamer/ProCloudSave/ProCloudSaveModals";

// THÊM: Import file CloudSave vào để dùng
import CloudSave from "../../../components/Gamer/ProCloudSave/CloudSave"; 

export default function ProCloudSave() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPassportOpen, setIsPassportOpen] = useState(false);
  
  // THÊM: State để quản lý việc bật tắt màn hình Cloud Save
  const [showCloudSave, setShowCloudSave] = useState(false);

  const handleOpenPassport = () => {
    setIsPassportOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // THÊM: Nếu state bật, sẽ render nguyên màn hình CloudSave đè lên
  if (showCloudSave) {
    return <CloudSave onBack={() => setShowCloudSave(false)} />;
  }

  return (
    <div className="animate-fade-in pb-24 md:pb-10 w-full min-h-screen bg-black text-slate-200 selection:bg-[#00F260] selection:text-black font-sans p-4 md:p-8">
      <div className="flex flex-col xl:flex-row gap-8 w-full">
        <div className="flex-1 space-y-8 min-w-0">
          <div className="relative h-[60vh] md:h-[500px] w-full rounded-[32px] overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-slate-900/50">
            <div className="relative overflow-hidden ">
              <img
                alt="Black Myth: Wukong"
                loading="lazy"
                decoding="async"
                className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-105"
                src="https://picsum.photos/800/400?random=88"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-14 w-full xl:w-2/3 z-10">
              <div className="flex items-center gap-4 mb-3 md:mb-4">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-[#00F260]/30 shadow-[0_0_15px_rgba(0,242,96,0.2)]">
                  <span className="w-2 h-2 bg-[#00F260] rounded-full animate-pulse shadow-[0_0_10px_#00F260]"></span>
                  <span className="text-[#00F260] text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em]">
                    Đang chơi dở
                  </span>
                </div>
                <span className="text-slate-400 text-[10px] md:text-xs font-mono uppercase tracking-wider border-l border-slate-700 pl-3 md:pl-4">
                  08:23 28/03/2026
                </span>
              </div>
              <h1 className="text-4xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500 leading-[0.9] mb-4 md:mb-6 drop-shadow-2xl uppercase tracking-tighter italic">
                Black Myth: Wukong
              </h1>
              <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
                <div className="flex flex-col">
                  <span className="text-[9px] md:text-[10px] text-purple-400 uppercase font-bold tracking-widest mb-1 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                    </svg>
                    AI ƯỚC TÍNH TIẾN TRÌNH
                  </span>
                  <p className="text-white font-bold text-base md:text-xl flex items-center gap-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-mono text-xl md:text-3xl">
                      45%
                    </span>
                  </p>
                </div>
                <div className="h-8 md:h-10 w-px bg-slate-700"></div>
                <div className="flex flex-col">
                  <span className="text-[9px] md:text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">
                    Địa điểm
                  </span>
                  <p className="text-white font-bold text-base md:text-xl truncate max-w-[150px] md:max-w-none">
                    Flash Gaming Center
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                <a
                  className="bg-[#00F260] text-black font-black text-sm md:text-lg px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl hover:bg-white transition-colors flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,242,96,0.3)] uppercase tracking-widest transform hover:-translate-y-1 duration-300 group/btn w-full md:w-auto"
                  href="#/cag-gui?game=Black%20Myth%3A%20Wukong"
                  data-discover="true"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="group-hover/btn:scale-110 transition-transform"
                  >
                    <path d="M5 3l14 9-14 9V3z"></path>
                  </svg>
                  Chiến Tiếp
                </a>
                
                {/* SỬA CHỖ NÀY: Dùng onClick bật State thay vì navigate */}
                <button
                  onClick={() => setShowCloudSave(true)}
                  className="bg-black/40 backdrop-blur-md text-white font-bold text-sm md:text-base px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl border border-white/10 hover:border-[#0575E6] hover:text-[#0575E6] hover:bg-black/60 transition-all uppercase tracking-wider flex items-center justify-center gap-2 w-full md:w-auto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.5 19c0-1.7-1.3-3-3-3h-1.1c-.2-3.4-3-6-6.4-6-3.6 0-6.5 2.8-6.5 6.3 0 .7.1 1.4.4 2"></path>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Cloud Save
                </button>

              </div>
            </div>
            <div className="absolute top-4 right-4 md:top-8 md:right-8 z-20">
              <button
                onClick={handleOpenPassport}
                className="group relative bg-black/40 backdrop-blur-xl border border-[#00F2EA]/30 hover:border-[#00F2EA] text-white p-3 md:p-4 rounded-[16px] md:rounded-[20px] transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,242,234,0.4)] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#00F2EA]/20 to-[#0575E6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex flex-col items-center gap-1.5 z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#00F2EA] group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(0,242,234,0.8)]"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                  <span className="text-[8px] md:text-[9px] font-black uppercase tracking-widest text-white group-hover:text-[#00F2EA]">
                    Thẻ Đẳng Cấp
                  </span>
                </div>
              </button>
            </div>
          </div>
          <ProCloudSaveBanner onOpenPassport={handleOpenPassport} />
          <IdcGameLibrary />
        </div>
        <div className="w-full xl:w-96 space-y-8 shrink-0 hidden xl:block">
          <UserProfileStats />
          <SystemStats />
          <CareerTimeline />
          <FriendComparison onAddFriend={() => setIsModalOpen(true)} />
        </div>
      </div>
      {isModalOpen && (
        <FindOpponentModal onClose={() => setIsModalOpen(false)} />
      )}
      {isPassportOpen && (
        <GamerPassportModal onClose={() => setIsPassportOpen(false)} />
      )}
    </div>
  );
}