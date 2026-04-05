import React, { useState } from "react";
// Đã loại bỏ useNavigate không dùng nữa
import CloudSaveComp from "./CloudSaveComp";
import CongDongComp from "./CongDongComp";

// THÊM: Nhận cái props onBack từ file cha truyền xuống
export default function CloudSave({ onBack }) {
  const [activeTab, setActiveTab] = useState("CLOUD_SAVE");

  const baseTabClass =
    "pb-4 md:pb-5 px-4 md:px-8 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] border-b-2 transition-colors flex items-center gap-2 md:gap-3 whitespace-nowrap";
  const activeTabClass = "border-[#00F260] text-[#00F260]";
  const inactiveTabClass = "border-transparent text-slate-500 hover:text-white";

  return (
    <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
      <div className="animate-fade-in pb-24 md:pb-10 w-full min-h-screen bg-black text-slate-200 selection:bg-[#00F260] selection:text-black font-sans p-4 md:p-8">
        <div className="animate-fade-in w-full">
          
          {/* SỬA CHỖ NÀY: Dùng onClick={onBack} thay vì navigate */}
          <button
            onClick={onBack}
            className="mb-4 md:mb-8 flex items-center gap-3 text-slate-500 hover:text-[#00F260] text-sm font-black uppercase tracking-widest group transition-colors px-0 md:px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-1 transition-transform"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Quay lại Thư Viện
          </button>

          <div className="bg-[#050505] rounded-[24px] md:rounded-[40px] border border-slate-900 overflow-hidden shadow-2xl w-full">
            <div className="relative h-64 md:h-[400px]">
              <div className="relative overflow-hidden w-full h-full bg-black">
                <img
                  alt="Black Myth: Wukong"
                  loading="lazy"
                  decoding="async"
                  className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover opacity-60"
                  src="https://picsum.photos/800/400?random=88"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 md:gap-8">
                <div>
                  <h1 className="text-4xl md:text-7xl font-black text-white tracking-tighter mb-2 md:mb-4 text-shadow-xl uppercase italic leading-none">
                    Black Myth: Wukong
                  </h1>
                  <div className="flex flex-wrap gap-2 md:gap-4 text-[10px] md:text-xs font-bold uppercase tracking-wider text-slate-400">
                    <span className="flex items-center gap-2 bg-black/60 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full border border-slate-800 backdrop-blur-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      45h Đã chơi
                    </span>
                    <span className="flex items-center gap-2 bg-black/60 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full border border-slate-800 backdrop-blur-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
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
                      Tại:{" "}
                      <span className="text-[#00F260] truncate max-w-[100px] md:max-w-none">
                        Flash Gaming Center
                      </span>
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-4 w-full md:w-auto">
                  <a
                    className="bg-[#0575E6] hover:bg-[#00F260] hover:text-black text-white font-black uppercase tracking-widest py-3 px-6 md:py-4 md:px-8 rounded-xl md:rounded-2xl shadow-[0_0_30px_rgba(5,117,230,0.4)] flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 text-xs md:text-sm w-full md:w-auto"
                    href="#/cag-gui?game=Black Myth: Wukong"
                    data-discover="true"
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
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    Tìm Quán Chơi Ngay
                  </a>
                </div>
              </div>
            </div>

            <div className="flex border-b border-slate-900 px-4 md:px-10 mt-4 md:mt-6 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab("CLOUD_SAVE")}
                className={`${baseTabClass} ${activeTab === "CLOUD_SAVE" ? activeTabClass : inactiveTabClass}`}
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
                  <path d="M17.5 19c0-1.7-1.3-3-3-3h-1.1c-.2-3.4-3-6-6.4-6-3.6 0-6.5 2.8-6.5 6.3 0 .7.1 1.4.4 2" />
                  <path d="M13 14l4-4 4 4" />
                  <path d="M17 10v9" />
                </svg>
                CLOUD SAVE
              </button>
              <button
                onClick={() => setActiveTab("COMMUNITY")}
                className={`${baseTabClass} ${activeTab === "COMMUNITY" ? activeTabClass : inactiveTabClass}`}
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
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                CỘNG ĐỒNG
              </button>
            </div>

            <div className="p-4 md:p-10 min-h-[300px]">
              {activeTab === "CLOUD_SAVE" && <CloudSaveComp />}
              {activeTab === "COMMUNITY" && <CongDongComp />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}