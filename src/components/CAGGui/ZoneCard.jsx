import React from "react";
import CyberTag from "./CyberTag";

const ZoneCard = ({
  title,
  color,
  guestPrice,
  memberPrice,
  specs,
  features,
  onBook,
}) => {
  return (
    <div
      className="snap-center flex-none w-[280px] md:w-[350px] bg-[#1E1E1E] rounded-[24px] overflow-hidden group transition-all shadow-xl hover:shadow-2xl border"
      style={{ borderColor: color }}
    >
      {/* Header */}
      <div className="p-5 border-b border-white/10 bg-white/5">
        <div className="flex justify-between items-start mb-2">
          <h4
            className="font-black text-lg uppercase italic tracking-wide"
            style={{ color: color }}
          >
            {title}
          </h4>
          <CyberTag 
            badge={{ 
              text: "Còn chỗ", 
              color: "bg-green-900/30", 
              textColor: "text-green-500", 
              textSize: "text-[9px]", 
              padding: "px-2 py-1", 
              fontWeight: "font-bold",
              tracking: "tracking-wider",
              shadow: "",
              extraClass: "border border-green-900" 
            }} 
          />
        </div>
        <div className="flex items-end gap-3 mt-3">
          <div>
            <span className="text-[10px] text-slate-500 uppercase font-bold block mb-0.5">
              Khách vãng lai
            </span>
            <span className="text-2xl font-sans font-black tracking-tighter text-white">
              {guestPrice}
            </span>
          </div>
          <div className="h-8 w-px bg-white/10 mx-1"></div>
          <div>
            <span className="text-[10px] text-yellow-600 uppercase font-bold block mb-0.5">
              Hội viên
            </span>
            <span className="text-lg font-sans font-bold tracking-tighter text-yellow-400">
              {memberPrice}
            </span>
          </div>
        </div>
      </div>

      {/* Body: Cấu hình */}
      <div className="p-5 space-y-4">
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="flex items-center gap-2 bg-black/20 p-2 rounded border border-white/10">
            <span className="text-lg">🧠</span>
            <div className="overflow-hidden">
              <p className="text-[9px] text-slate-500 font-bold uppercase">
                CPU
              </p>
              <p className="text-slate-300 font-bold truncate">{specs.cpu}</p>
            </div>
          </div>
          <div
            className="flex items-center gap-2 bg-black/20 p-2 rounded border border-white/10"
            style={{
              borderColor: color.replace(")", ", 0.25)").replace("rgb", "rgba"),
            }}
          >
            <span className="text-lg">🚀</span>
            <div className="overflow-hidden">
              <p className="text-[9px] text-slate-500 font-bold uppercase">
                VGA
              </p>
              <p className="font-black truncate" style={{ color: color }}>
                {specs.vga}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-black/20 p-2 rounded border border-white/10">
            <span className="text-lg">🖥️</span>
            <div className="overflow-hidden">
              <p className="text-[9px] text-slate-500 font-bold uppercase">
                Màn hình
              </p>
              <p className="text-cyan-400 font-bold truncate">{specs.screen}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-black/20 p-2 rounded border border-white/10">
            <span className="text-lg">⌨️</span>
            <div className="overflow-hidden">
              <p className="text-[9px] text-slate-500 font-bold uppercase">
                Gear
              </p>
              <p className="text-slate-300 font-bold truncate">{specs.gear}</p>
            </div>
          </div>
        </div>

        {/* Body: Tính năng thêm */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-xs text-slate-400"
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
                className="text-yellow-500"
              >
                <path d="M20 12v10H4V12"></path>
                <path d="M2 7h20v5H2z"></path>
                <path d="M12 22V7"></path>
                <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
              </svg>
              {feature}
            </div>
          ))}
        </div>

        {/* Nút Đặt Máy */}
        <button
          onClick={onBook}
          className="w-full py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-lg bg-white text-black hover:scale-[1.02] active:scale-95"
          style={{
            backgroundColor: color,
            color: "rgb(0, 0, 0)",
          }}
        >
          ĐẶT MÁY NGAY
        </button>
      </div>
    </div>
  );
};

export default ZoneCard;
