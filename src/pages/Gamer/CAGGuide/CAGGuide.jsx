import { useState } from "react";
import GalleryRow from "../../../components/CAGGui/GalleryRow";
import { trendingData, rtx40Data, coupleZoneData, diamondData } from "../../../data/cagGuiData";
import CyberInfoModal from "../../../components/CAGGui/CyberInfoModal";
import MapModal from "../../../components/CAGGui/MapModal";

const CAGGui = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative">
      <main className="flex-1 overflow-y-auto pb-24 md:pb-0 scroll-smooth no-scrollbar">
        <div className="w-full h-full">
          <div className="relative w-full min-h-screen bg-[#141414] text-white pb-24 overflow-x-hidden">
            {/* Hero Banner */}
            <div className="relative w-full h-[50vh] md:h-[80vh] overflow-hidden group">
              <div className="absolute inset-0">
                <div className="relative overflow-hidden">
                  <img
                    alt="Cyber All Game Q.7 VIP"
                    loading="lazy"
                    decoding="async"
                    className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover animate-fade-in transition-transform duration-[10s] scale-110"
                    src="https://picsum.photos/800/600?random=101"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#141414]/90 via-transparent to-transparent"></div>

              <div className="absolute top-0 left-0 w-full z-20 p-4 md:p-8 flex justify-between items-center bg-gradient-to-b from-[#0f0f0f] to-transparent">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-white text-xl md:text-3xl font-black tracking-tighter drop-shadow-lg flex items-center gap-1">
                      CAG <span className="text-yellow-500">GUIDE</span>
                    </span>
                    <p className="text-[7px] md:text-[9px] font-medium text-yellow-500/80 uppercase tracking-[0.2em] border-l-2 border-yellow-500 pl-2 mt-1">
                      Định vị tinh hoa
                    </p>
                  </div>
                  <div className="hidden md:flex gap-6 text-sm font-bold text-slate-300 ml-8 border-l border-slate-700 pl-8">
                    <span className="hover:text-white cursor-pointer transition-colors hover:underline decoration-yellow-500 underline-offset-4 decoration-2">
                      Trang chủ
                    </span>
                    <span className="hover:text-white cursor-pointer transition-colors">
                      Phòng máy
                    </span>
                    <span className="hover:text-white cursor-pointer transition-colors">
                      Mới &amp; Phổ biến
                    </span>
                    <span className="hover:text-white cursor-pointer transition-colors">
                      Danh sách của tôi
                    </span>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <button
                    onClick={() => setIsMapOpen(true)}
                    className="text-white hover:text-cyan-400 transition-colors"
                    title="Mở Bản Đồ"
                  >
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
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M16.2 7.8 7.8 16.2"></path>
                      <path d="M12 2a10 10 0 1 0 10 10"></path>
                    </svg>
                  </button>
                  <img
                    className="w-8 h-8 rounded border border-white/20"
                    alt="User"
                    src="https://picsum.photos/40/40"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-10 md:pb-24 z-20 max-w-4xl animate-fade-in">
                <div className="mb-4 md:mb-8 relative max-w-lg hidden md:block group/search">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500 animate-pulse"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover/search:border-yellow-500/50 transition-all"></div>
                  <input
                    placeholder="🔍 Tìm quán có giải đấu.."
                    className="block w-full pl-12 pr-4 py-4 rounded-full leading-5 bg-transparent text-white placeholder-slate-300 focus:outline-none sm:text-sm relative z-10 font-medium tracking-wide"
                    type="text"
                    defaultValue=""
                  />
                  <div className="absolute right-2 top-2 bottom-2">
                    <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 h-full rounded-full text-xs uppercase tracking-widest transition-colors shadow-lg">
                      Tìm Kiếm
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3 mb-2 md:mb-4">
                  <div className="flex items-center gap-1 bg-black/40 backdrop-blur px-2 py-1 border-l-2 border-red-600">
                    <span className="text-red-600 font-black tracking-widest text-xs">
                      CAG
                    </span>
                    <span className="text-white font-bold text-xs tracking-widest">
                      ORIGINAL
                    </span>
                  </div>
                  <span className="bg-cyan-500/20 backdrop-blur text-cyan-400 text-[8px] md:text-[10px] font-bold px-2 py-1 rounded border border-cyan-500/50 uppercase tracking-widest">
                    CAG PRO CERTIFIED
                  </span>
                </div>

                <h1 className="text-3xl md:text-7xl font-black text-white uppercase leading-[0.9] tracking-tighter mb-2 md:mb-4 drop-shadow-2xl">
                  Cyber All Game Q.7 VIP
                </h1>

                <div className="flex items-center gap-4 text-xs md:text-sm font-bold text-slate-300 mb-4">
                  <span className="text-green-500 font-black">98% Match</span>
                  <span>2024</span>
                  <span className="border border-slate-500 px-1 text-xs">
                    24GB
                  </span>
                  <span>120 PC</span>
                </div>

                <p className="text-white text-xs md:text-base font-medium mb-6 line-clamp-2 drop-shadow-md text-shadow-sm hidden md:block">
                  Máy lạnh • Đồ ăn • Giữ xe. Trải nghiệm đỉnh cao với không gian
                  Cyberpunk độc quyền chỉ có tại hệ thống CAG Pro.
                </p>

                <div className="flex gap-4">
                  <button className="bg-white text-black hover:bg-white/90 font-bold text-sm md:text-lg px-6 md:px-8 py-2 md:py-2.5 rounded flex items-center gap-2 transition-transform active:scale-95">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                    Khám Phá
                  </button>

                  <button
                    onClick={() =>
                      setSelectedItem({ name: "Cyber All Game Q.7 VIP" })
                    }
                    className="bg-gray-500/70 text-white hover:bg-gray-500/50 backdrop-blur font-bold text-sm md:text-lg px-6 md:px-8 py-2 md:py-2.5 rounded flex items-center gap-2 transition-transform active:scale-95"
                  >
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    Thông Tin
                  </button>
                </div>
              </div>
            </div>

            <div className="-mt-8 md:-mt-24 relative z-20 space-y-6">
              <GalleryRow title="Top Trending - Quán Hot Tuần Này" data={trendingData} onCardClick={setSelectedItem} />
              <GalleryRow title="Bom Tấn RTX 40 Series" data={rtx40Data} onCardClick={setSelectedItem} />
              <GalleryRow title="Couple Zone - Lãng Mạn & Riêng Tư" data={coupleZoneData} onCardClick={setSelectedItem} />
              <GalleryRow title="CAG Diamond Collection" description="Bộ sưu tập Cyber Game chuẩn thi đấu quốc tế - Chỉ có trên CAG." data={diamondData} onCardClick={setSelectedItem} />
            </div>


          </div>
        </div>
      </main>

      <div className="md:hidden fixed bottom-0 w-full z-[99]">
        <div className="glass-panel border-t border-white/10 relative h-[80px] px-2 flex justify-between items-center pb-safe bg-[#0B0E14]/90">
          <a
            className="flex-1 flex flex-col items-center gap-1 group"
            href="#/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300 text-slate-500"
            >
              <path d="M3 10L12 2L21 10V20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20V10Z"></path>
              <path d="M9 21V15"></path>
              <path d="M15 21V15"></path>
              <circle
                cx="12"
                cy="15"
                r="1.5"
                fill="none"
                className="stroke-none"
              ></circle>
              <path d="M12 2V6"></path>
              <circle cx="12" cy="6" r="1" fill="currentColor"></circle>
            </svg>
            <span className="text-[8px] font-bold text-slate-600">
              Cộng Đồng
            </span>
          </a>
          <a
            className="flex-1 flex flex-col items-center gap-1 group"
            href="#/library"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300 text-slate-500"
            >
              <path d="M17.5 15c0-1.7-1.3-3-3-3h-1.1c-.2-3.4-3-6-6.4-6-3.6 0-6.5 2.8-6.5 6.3 0 .7.1 1.4.4 2"></path>
              <rect x="6" y="13" width="12" height="6" rx="2"></rect>
              <path d="M8 16h2"></path>
              <path d="M9 15v2"></path>
              <circle cx="15" cy="16" r="0.5" fill="currentColor"></circle>
              <circle cx="14" cy="15" r="0.5" fill="currentColor"></circle>
            </svg>
            <span className="text-[8px] font-bold text-slate-600">
              Cloud Save
            </span>
          </a>
          <div className="relative -top-6">
            <button className="w-16 h-16 bg-[#0B0E14] clip-path-hexagon flex items-center justify-center border-2 border-[#00F2EA] shadow-[0_0_20px_rgba(0,242,234,0.3)] text-white relative z-10 group active:scale-95 transition-transform">
              <div className="absolute inset-0 bg-[#00F2EA]/10 group-hover:bg-[#00F2EA]/20 transition-colors"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#00F2EA"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_5px_#00F2EA]"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="12" y1="2" x2="12" y2="4"></line>
                <line x1="12" y1="20" x2="12" y2="22"></line>
                <path
                  d="M12 12 L17 7"
                  className="animate-[spin_3s_linear_infinite] origin-center"
                ></path>
              </svg>
            </button>
          </div>
          <a
            aria-current="page"
            className="flex-1 flex flex-col items-center gap-1 group active"
            href="#/offices"
          >
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
              className="transition-all duration-300 text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
              <circle cx="12" cy="12" r="9" strokeOpacity="0.2"></circle>
              <path
                d="M12 7l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3z"
                className="fill-[#FFD700] stroke-none"
              ></path>
            </svg>
            <span className="text-[8px] font-bold text-[#00F2EA]">
              CAG Guide
            </span>
          </a>
          <a
            className="flex-1 flex flex-col items-center gap-1 group"
            href="#/wallet"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300 text-slate-500"
            >
              <path d="M12 2l9 5v10l-9 5-9-5V7z"></path>
              <circle cx="12" cy="10" r="3"></circle>
              <path d="M16 18c0-2-2-3-4-3s-4 1-4 3"></path>
            </svg>
            <span className="text-[8px] font-bold text-slate-600">
              Ví Của Tôi
            </span>
          </a>
        </div>
      </div>



      {selectedItem && (
        <CyberInfoModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
      {isMapOpen && <MapModal onClose={() => setIsMapOpen(false)} />}
    </div>
  );
};

export default CAGGui;
