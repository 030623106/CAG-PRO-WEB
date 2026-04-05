import React, { useState } from "react";
import ZoneCard from "./ZoneCard";
import MapModal from "./MapModal";
import VisualBookingModal from "./VisualBookingModal";

const zonesData = [
  {
    zoneId: "PUB",
    title: "PUBLIC ZONE",
    color: "rgb(59, 130, 246)",
    guestPrice: "8,000đ",
    memberPrice: "7,000đ",
    specs: { cpu: "i3 10100F", vga: "GTX 1660S", screen: "144Hz", gear: "Full Cơ" },
    features: ["Ghế Gaming", "Màn hình phẳng"],
  },
  {
    zoneId: "VIP",
    title: "VIP ZONE",
    color: "rgb(234, 179, 8)",
    guestPrice: "12,000đ",
    memberPrice: "10,000đ",
    specs: { cpu: "i5 12400F", vga: "RTX 3060", screen: "165Hz", gear: "Full Cơ" },
    features: ["Màn hình cong", "Ghế ngả lưng"],
  },
  {
    zoneId: "FPS",
    title: "FPS / COMPETITIVE",
    color: "rgb(6, 182, 212)",
    guestPrice: "15,000đ",
    memberPrice: "12,000đ",
    specs: { cpu: "i7 12700K", vga: "RTX 3080", screen: "Zowie 240Hz", gear: "Full Cơ" },
    features: ["Màn hình Zowie", "Chuột G-Pro", "Khu vực cấm hút thuốc"],
  },
  {
    zoneId: "CPL",
    title: "COUPLE ZONE",
    color: "rgb(236, 72, 153)",
    guestPrice: "20,000đ",
    memberPrice: "18,000đ",
    specs: { cpu: "i7 13700K", vga: "RTX 4070", screen: "2K 165Hz", gear: "Full Cơ" },
    features: ["Ghế Sofa đôi", "Không gian riêng tư", "Combo đồ ăn"],
  },
  {
    zoneId: "STR",
    title: "STREAM ROOM",
    color: "rgb(168, 85, 247)",
    guestPrice: "50,000đ",
    memberPrice: "45,000đ",
    specs: { cpu: "i9 13900K", vga: "RTX 4090", screen: "4K OLED", gear: "Full Cơ" },
    features: ["Phòng riêng cách âm", "2 Màn hình", "Webcam 4K"],
  },
  {
    zoneId: "VIPP",
    title: "VIP ZONE",
    color: "rgb(234, 179, 8)",
    guestPrice: "25,000đ",
    memberPrice: "22,000đ",
    specs: { cpu: "i9 13900K", vga: "RTX 4090", screen: "4K OLED", gear: "Full Cơ" },
    features: ["Phòng cách âm", "Ghế Massage"],
  },
];

const CyberInfoModal = ({ onClose, item }) => {
  const [showMap, setShowMap] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const displayTitle = item?.name || "Cyber All Game Quận 7";

  if (showMap) {
    return <MapModal onClose={() => setShowMap(false)} />;
  }

  if (showBooking) {
    return (
      <VisualBookingModal
        onClose={() => setShowBooking(false)}
        shopName={displayTitle}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[60] bg-[#141414] overflow-y-auto animate-fade-in custom-scrollbar">
      {/* Nút Top Header (Đóng Modal Thông Tin) */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <button onClick={() => setShowBooking(true)} className="h-10 px-4 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-[#00F260] hover:text-black transition-all border border-white/10 text-xs font-bold uppercase tracking-wider">
          🗺️ Chọn Chỗ
        </button>
        <button
          onClick={onClose}
          className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all border border-white/10"
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
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div className="relative w-full h-[40vh] md:h-[50vh]">
        <div className="w-full h-full overflow-hidden relative">
          <div className="relative overflow-hidden h-full">
            <img
              alt={displayTitle}
              loading="lazy"
              decoding="async"
              className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover transition-transform duration-[20s] ease-linear scale-125"
              src={item?.imageSrc || "https://picsum.photos/800/600?random=101"}
            />
          </div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20">
          <h1 className="text-3xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-4 drop-shadow-2xl">
            {displayTitle}
          </h1>
          <div className="flex flex-wrap gap-2 md:gap-3 mb-4">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-500 text-black text-[9px] md:text-[10px] font-black px-3 py-1.5 rounded shadow-lg uppercase tracking-widest flex items-center gap-1">
              <span className="text-sm">🛡️</span>CAG DIAMOND PARTNER
            </span>
            <span className="bg-[#00F260] text-black text-[9px] md:text-[10px] font-black px-3 py-1.5 rounded shadow-lg uppercase tracking-widest flex items-center gap-1">
              <span className="text-sm">✅</span>CAG PRO INSTALLED
            </span>
            <span className="bg-yellow-500 text-black text-[9px] md:text-[10px] font-black px-3 py-1.5 rounded shadow-lg uppercase tracking-widest flex items-center gap-1 animate-pulse border border-white">
              <span className="text-sm">🎁</span>NẠP TẶNG 50%
            </span>
          </div>
          <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm font-bold text-slate-300">
            <span className="flex items-center gap-2">
              <span className="text-lg">🖥️</span> {item?.pcCount || 120} Máy
            </span>
            <div className="h-4 w-px bg-slate-600"></div>
            <span className="flex items-center gap-2">
              <span className="text-lg">📏</span> 500m²
            </span>
            <div className="h-4 w-px bg-slate-600"></div>
            <span className="flex items-center gap-2 truncate">
              <span className="text-lg">📍</span> Q.7
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-12 -mt-6 md:-mt-8 relative z-30 flex justify-end">
        <button onClick={() => setShowBooking(true)} className="bg-[#00F260] hover:bg-white text-black font-black text-xs md:text-sm uppercase tracking-widest py-3 px-6 md:py-4 md:px-8 rounded-xl shadow-[0_0_30px_rgba(0,242,96,0.3)] flex items-center gap-3 transform hover:scale-105 transition-all border-4 border-[#141414]">
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
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M3 9h18"></path>
            <path d="M9 21V9"></path>
          </svg>
          Giữ vị trí của nhà vô địch
        </button>
      </div>

      {/* Khu vực MAP Component ZoneCard */}
      <div className="px-6 md:px-12 py-8 w-full border-b border-slate-800">
        <h3 className="text-white font-black text-lg md:text-xl mb-6 flex items-center gap-2 uppercase tracking-wide">
          <span className="w-1.5 h-6 bg-yellow-500 rounded"></span>Chọn Khu Vực
          Chơi (Zones)
        </h3>
        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x">
          {zonesData.map((zone, index) => (
            <ZoneCard key={index} {...zone} onBook={() => setShowBooking(true)} />
          ))}
        </div>
      </div>

      <div className="px-6 md:px-12 py-10 w-full border-b border-slate-800">
        <div className="mb-8">
          <h3 className="text-white font-black text-xl flex items-center gap-2 uppercase tracking-wide">
            <span className="w-1.5 h-6 bg-cyan-500 rounded"></span>Tiện Ích Mở
            Rộng
          </h3>
          <p className="text-xs text-slate-400 mt-2 font-medium uppercase tracking-wide">
            Hơn cả một chỗ ngồi. Đây là hệ sinh thái Gaming toàn diện.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {[
            {
              icon: "🅿️",
              title: "Bãi xe rộng",
              desc: "Có bảo vệ trông, Free giữ xe",
            },
            {
              icon: "🚗",
              title: "Bãi Ô Tô",
              desc: "Đậu xe thoải mái, an ninh 24/7",
            },
            {
              icon: "🚿",
              title: "Phòng tắm",
              desc: "Nước nóng lạnh - Dành cho dân cày đêm",
            },
            {
              icon: "🚻",
              title: "WC Riêng",
              desc: "Nam/Nữ tách biệt, sạch sẽ thơm tho",
            },
            {
              icon: "🍝",
              title: "Bếp 5 Sao",
              desc: "Menu cơm văn phòng, pha chế ngon",
            },
            {
              icon: "🚬",
              title: "Khu hút thuốc",
              desc: "Tách biệt, thoáng khí, view đẹp",
            },
            {
              icon: "❤️",
              title: "Couple Zone",
              desc: "Ghế đôi Sofa, màn hình riêng tư",
            },
            {
              icon: "🏆",
              title: "Sân khấu",
              desc: "5 vs 5, màn chiếu Projector lớn",
            },
            {
              icon: "🎥",
              title: "Phòng Stream",
              desc: "Cách âm, PC 2 màn hình, Cam Mic xịn",
            },
            { icon: "❄️", title: "Máy Lạnh", desc: "Cam kết 18-20 độ C" },
          ].map((feature, index) => (
            <div
              key={index}
              className="group relative p-4 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 flex flex-col items-center text-center gap-3 overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 w-14 h-14 rounded-full bg-black/40 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300 border border-white/5 group-hover:border-cyan-500/30">
                {feature.icon}
              </div>
              <div className="relative z-10 w-full">
                <h4 className="text-xs md:text-sm font-black text-slate-200 group-hover:text-cyan-400 transition-colors uppercase tracking-wide mb-1.5">
                  {feature.title}
                </h4>
                <p className="text-[10px] text-slate-500 group-hover:text-slate-300 leading-relaxed px-1 line-clamp-2 group-hover:line-clamp-none transition-all">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phần Gallery */}
      <div className="px-6 md:px-12 py-10 w-full pb-24 md:pb-20">
        <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-wider text-center border-b border-slate-800 pb-4">
          Thư Viện Ảnh & Trailer
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="aspect-video bg-slate-800 rounded-lg overflow-hidden relative group cursor-pointer hover:shadow-xl transition-all"
            >
              <img
                alt=""
                loading="lazy"
                decoding="async"
                className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={`https://picsum.photos/300/200?random=${num}`}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="none"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* NÚT BẤM MỞ BẢN ĐỒ TOÀN MÀN HÌNH */}
        <div className="mt-12 flex gap-4 justify-center">
          <button
            onClick={() => setShowMap(true)}
            className="bg-slate-700/50 hover:bg-slate-600 text-white font-bold text-sm px-8 py-3 rounded-full border border-slate-600 flex items-center gap-2 transition-colors"
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
              <circle cx="12" cy="12" r="10" />
              <path d="M16.2 7.8 7.8 16.2" />
              <path d="M12 2a10 10 0 1 0 10 10" />
            </svg>
            XEM BẢN ĐỒ CHỈ ĐƯỜNG
          </button>
        </div>
      </div>


    </div>
  );
};

export default CyberInfoModal;
