import React from "react";
import { topOfficesData } from "../../../data/cagGuiData";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

export function UserProfileStats() {
  return (
    <div className="bg-[#050505] p-8 rounded-[32px] border border-slate-900 relative overflow-hidden group shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0575E6]/10 to-transparent opacity-30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F260]/10 rounded-full blur-[40px]"></div>
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-tr from-[#00F260] via-white to-[#0575E6] mb-5 shadow-[0_0_30px_#0575E6] animate-[pulse_3s_infinite]">
          <img
            className="w-full h-full rounded-full border-[4px] border-black object-cover"
            src="https://i.pravatar.cc/300?img=11"
            alt="avatar"
          />
        </div>
        <h3 className="font-black text-2xl text-white uppercase tracking-wider mb-1">
          Lương Quang Vinh
        </h3>
        <div className="flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-[#00F260] rounded-full"></span>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
            Gamer Passport Verified
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full mb-6">
          <div className="bg-black/60 border border-slate-800 rounded-2xl p-4 hover:border-[#00F260] transition-colors group/stat">
            <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1 group-hover/stat:text-[#00F260]">
              Total Hours
            </p>
            <p className="text-white font-mono font-black text-2xl">2219</p>
          </div>
          <div className="bg-black/60 border border-slate-800 rounded-2xl p-4 hover:border-[#0575E6] transition-colors group/stat">
            <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mb-1 group-hover/stat:text-[#0575E6]">
              Completed
            </p>
            <p className="text-white font-mono font-black text-2xl">1</p>
          </div>
        </div>
        <button className="w-full bg-[#00F260] hover:bg-white text-black text-xs font-black uppercase tracking-widest py-4 rounded-xl shadow-[0_0_20px_rgba(0,242,96,0.3)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <line x1="20" y1="8" x2="20" y2="14"></line>
            <line x1="23" y1="11" x2="17" y2="11"></line>
          </svg>
          Mời bạn bè đua top
        </button>
      </div>
    </div>
  );
}

const chartData = [
  { name: "09", value: 0 },
  { name: "10", value: 36 },
  { name: "11", value: 0 },
  { name: "12", value: 0 },
  { name: "01", value: 0 },
  { name: "02", value: 0 },
  { name: "03", value: 0 },
];

export function SystemStats() {
  return (
    <div className="bg-[#050505] rounded-[32px] p-8 border border-slate-900 relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px]"></div>
      <h3 className="text-xs font-black text-white mb-6 uppercase tracking-[0.2em] flex items-center gap-3">
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
          className="text-purple-500"
        >
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
        Hệ Thống Pro Cloud Save
      </h3>
      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className="bg-slate-900/50 rounded-xl p-3 text-center border border-slate-800">
          <p className="text-[8px] text-slate-500 uppercase font-bold tracking-widest mb-1">
            Hôm nay
          </p>
          <p className="text-white font-mono font-black text-lg">37</p>
        </div>
        <div className="bg-slate-900/50 rounded-xl p-3 text-center border border-slate-800">
          <p className="text-[8px] text-slate-500 uppercase font-bold tracking-widest mb-1">
            Tháng này
          </p>
          <p className="text-white font-mono font-black text-lg">445</p>
        </div>
        <div className="bg-slate-900/50 rounded-xl p-3 text-center border border-slate-800">
          <p className="text-[8px] text-slate-500 uppercase font-bold tracking-widest mb-1">
            Tổng cộng
          </p>
          <p className="text-purple-400 font-mono font-black text-lg">2384</p>
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
          Top Phòng Máy Sử Dụng
        </h4>
        <div className="space-y-2">
          {topOfficesData.map((office) => (
            <div
              key={office.id}
              className="flex items-center justify-between bg-slate-900/30 p-2.5 rounded-lg border border-slate-800/50"
            >
              <div className="flex items-center gap-3">
                <span className={`text-xs font-black ${office.rankColor}`}>
                  {office.rank}
                </span>
                <span className="text-xs font-bold text-slate-300 truncate max-w-[120px]">
                  {office.name}
                </span>
              </div>
              <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                {office.users} users
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 space-y-4">
        <h4 className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
          Tăng Trưởng Game Hỗ Trợ
        </h4>
        <div className="h-40 pt-4 w-full relative">
          <div className="absolute inset-0 pt-4">
            <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00F260" stopOpacity={0.5} />
                  <stop offset="95%" stopColor="#00F260" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="name"
                stroke="#334155"
                fontSize={8}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#334155"
                fontSize={8}
                tickLine={false}
                axisLine={false}
                tickCount={5}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#00F260"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CareerTimeline() {
  return (
    <div className="bg-[#050505] rounded-[32px] p-8 border border-slate-900">
      <h3 className="text-xs font-black text-white mb-8 uppercase tracking-[0.2em] flex items-center gap-3">
        <span className="w-2 h-2 bg-[#00F260] rounded-sm rotate-45 shadow-[0_0_10px_#00F260]"></span>
        Timeline Sự Nghiệp
      </h3>
      <div className="relative pl-4 space-y-10 border-l-2 border-slate-800 ml-2">
        <div className="relative group cursor-pointer pl-6">
          <div className="absolute -left-[23px] top-1 w-4 h-4 rounded-sm rotate-45 border-2 border-black bg-[#0575E6] group-hover:scale-125 transition-transform shadow-[0_0_10px_currentColor] z-10"></div>
          <p className="text-[10px] text-slate-500 mb-1 font-mono uppercase tracking-wide">
            08:23 28/03/2026
          </p>
          <h4 className="text-sm font-black text-white group-hover:text-[#00F260] transition-colors uppercase tracking-wide leading-tight">
            Đối đầu Boss Nhện Tinh
          </h4>
          <p className="text-xs text-slate-400 mt-2 line-clamp-2">
            Đã lưu game ngay trước cửa hang.
          </p>
        </div>
        <div className="relative group cursor-pointer pl-6">
          <div className="absolute -left-[23px] top-1 w-4 h-4 rounded-sm rotate-45 border-2 border-black bg-[#00F260] group-hover:scale-125 transition-transform shadow-[0_0_10px_currentColor] z-10"></div>
          <p className="text-[10px] text-slate-500 mb-1 font-mono uppercase tracking-wide">
            08:23 27/03/2026
          </p>
          <h4 className="text-sm font-black text-white group-hover:text-[#00F260] transition-colors uppercase tracking-wide leading-tight">
            Leo Rank Thành Công
          </h4>
          <p className="text-xs text-slate-400 mt-2 line-clamp-2">
            Thăng hạng lên Kim Cương 1
          </p>
        </div>
        <div className="relative group cursor-pointer pl-6">
          <div className="absolute -left-[23px] top-1 w-4 h-4 rounded-sm rotate-45 border-2 border-black bg-yellow-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_currentColor] z-10"></div>
          <p className="text-[10px] text-slate-500 mb-1 font-mono uppercase tracking-wide">
            10:23 26/03/2026
          </p>
          <h4 className="text-sm font-black text-white group-hover:text-[#00F260] transition-colors uppercase tracking-wide leading-tight">
            Hoàn Thành Cốt Truyện
          </h4>
          <p className="text-xs text-slate-400 mt-2 line-clamp-2">
            Đạt danh hiệu Elden Lord
          </p>
        </div>
      </div>
    </div>
  );
}

export function FriendComparison({ onAddFriend }) {
  return (
    <div className="bg-[#050505] rounded-[32px] p-8 border border-slate-900">
      <h3 className="text-xs font-black text-white mb-6 uppercase tracking-[0.2em] flex items-center gap-3">
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
          className="text-red-500"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        So Kèo Bạn Bè
      </h3>
      <div className="space-y-4">
        <div className="flex items-center gap-4 bg-slate-900/30 p-3 rounded-2xl hover:bg-slate-900 transition-colors cursor-pointer border border-transparent hover:border-slate-800 group">
          <div className="relative">
            <img
              className="w-12 h-12 rounded-xl border border-slate-700 group-hover:border-white transition-colors"
              src="https://picsum.photos/50/50?random=100"
              alt="avatar"
            />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black bg-[#00F260]"></span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-black text-white uppercase tracking-wide truncate">
              Hùng
            </p>
            <p className="text-[10px] text-slate-500 truncate font-mono mt-0.5">
              Black Myth: Wukong
            </p>
          </div>
          <div className="text-[9px] font-black text-red-500 bg-red-900/10 px-3 py-1.5 rounded-lg border border-red-900/30 uppercase tracking-widest whitespace-nowrap">
            Hơn bạn 5 giờ chơi
          </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-900/30 p-3 rounded-2xl hover:bg-slate-900 transition-colors cursor-pointer border border-transparent hover:border-slate-800 group">
          <div className="relative">
            <img
              className="w-12 h-12 rounded-xl border border-slate-700 group-hover:border-white transition-colors"
              src="https://picsum.photos/50/50?random=101"
              alt="avatar"
            />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black bg-slate-500"></span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-black text-white uppercase tracking-wide truncate">
              Vinh
            </p>
            <p className="text-[10px] text-slate-500 truncate font-mono mt-0.5">
              League of Legends
            </p>
          </div>
          <div className="text-[9px] font-black text-red-500 bg-red-900/10 px-3 py-1.5 rounded-lg border border-red-900/30 uppercase tracking-widest whitespace-nowrap">
            Vừa đạt Rank Cao Thủ
          </div>
        </div>
        <div className="flex items-center gap-4 bg-slate-900/30 p-3 rounded-2xl hover:bg-slate-900 transition-colors cursor-pointer border border-transparent hover:border-slate-800 group">
          <div className="relative">
            <img
              className="w-12 h-12 rounded-xl border border-slate-700 group-hover:border-white transition-colors"
              src="https://picsum.photos/50/50?random=102"
              alt="avatar"
            />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black bg-[#00F260]"></span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-black text-white uppercase tracking-wide truncate">
              Trang
            </p>
            <p className="text-[10px] text-slate-500 truncate font-mono mt-0.5">
              Elden Ring
            </p>
          </div>
          <div className="text-[9px] font-black text-red-500 bg-red-900/10 px-3 py-1.5 rounded-lg border border-red-900/30 uppercase tracking-widest whitespace-nowrap">
            Phá đảo trước bạn
          </div>
        </div>
      </div>
      <button
        onClick={onAddFriend}
        className="w-full mt-6 text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white border border-dashed border-slate-800 p-4 rounded-xl hover:border-[#0575E6] hover:bg-[#0575E6]/10 transition-all flex items-center justify-center gap-2"
      >
        <span className="text-lg leading-none">+</span> Thêm bạn để đua top
      </button>
    </div>
  );
}
