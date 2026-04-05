import React, { useState, useEffect, useMemo } from "react";

function IdcGameCard({ title, type, isNew, updatedAt, timeAgo, timeAgoColor }) {
  return (
    <div className="bg-[#050505] p-5 rounded-2xl border border-slate-900 hover:border-[#00F2EA] transition-all group flex flex-col justify-between h-32 relative overflow-hidden">
      {isNew && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.6)] text-[9px] font-black px-2 py-1 rounded uppercase tracking-widest animate-badge-pulse">NEW UPDATE</div>
      )}
      <div className="pr-16">
        <h4
          className="text-white font-black text-lg uppercase tracking-wide truncate group-hover:text-[#00F2EA] transition-colors"
          title={title}
        >
          {title}
        </h4>
        <span className="inline-block mt-1 text-[9px] font-bold text-slate-400 bg-slate-900 px-2 py-1 rounded uppercase tracking-widest border border-slate-800">
          {type}
        </span>
      </div>
      <div className="flex items-center justify-between text-[8px] xl:text-[9px] 2xl:text-[10px] text-slate-500 font-mono mt-4 border-t border-slate-900 pt-3">
        <div className="flex items-center gap-1.5 truncate mr-2">
          <svg
            className="shrink-0"
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
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <span className="text-slate-300 truncate">{updatedAt}</span>
        </div>
        <span className={`${timeAgoColor || "text-orange-500"} font-bold shrink-0 whitespace-nowrap`}>
          {timeAgo}
        </span>
      </div>
    </div>
  );
}

export function ProCloudSaveBanner({ onOpenPassport }) {
  return (
    <div className="mb-8 bg-gradient-to-r from-[#00F2EA]/10 via-[#0575E6]/10 to-transparent border border-[#00F2EA]/30 rounded-2xl p-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 group">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity"></div>
      <div className="absolute -left-20 -top-20 w-40 h-40 bg-[#00F2EA]/20 rounded-full blur-[50px]"></div>
      <div className="flex-1 relative z-10">
        <h3 className="text-[#00F2EA] font-black text-xl md:text-2xl uppercase tracking-wider mb-2 flex items-center gap-2">
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
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
          PRO CLOUD SAVE - KHÔNG GIỚI HẠN VỊ TRÍ
        </h3>
        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
          Chơi tiếp tựa game AAA yêu thích của bạn ở <strong>BẤT KỲ</strong> đại
          lý nào sử dụng phần mềm CAG Pro. Dữ liệu save game offline được đồng
          bộ toàn cầu thông qua Internet với độ trễ bằng 0. Sân chơi đẳng cấp
          dành riêng cho cộng đồng game thủ offline.
        </p>
      </div>
      <div className="shrink-0 relative z-10 w-full md:w-auto">
        <button
          onClick={onOpenPassport}
          className="rgb-border w-full md:w-auto bg-gradient-to-r from-[#00F2EA] to-[#0575E6] hover:from-white hover:to-white text-black font-black px-6 py-4 rounded-xl uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(0,242,234,0.4)] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
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
            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
            <line x1="2" x2="22" y1="10" y2="10"></line>
          </svg>
          NHẬN THẺ ĐẲNG CẤP
        </button>
      </div>
    </div>
  );
}

export default function IdcGameLibrary() {
  const [activeTab, setActiveTab] = useState("TẤT CẢ (IDC)");
  const [searchQuery, setSearchQuery] = useState("");
  const [gamesData, setGamesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showOnlyNew, setShowOnlyNew] = useState(false);
  const itemsPerPage = 20;

  useEffect(() => {
    let isMounted = true;
    const fetchGames = async () => {
      try {
        setLoading(true);
        // Sử dụng CodeTabs Proxy để vượt qua CORS và block Cloudflare
        const response = await fetch("https://api.codetabs.com/v1/proxy?quest=https://games.cagboot.com/checktimegame.php");
        if (!response.ok) {
          throw new Error("Lỗi kết nối máy chủ");
        }
        const result = await response.json();
        if (isMounted) {
          if (result && (result.data || Array.isArray(result))) {
            setGamesData(result.data || result);
            setError(null);
          } else {
            throw new Error("Dữ liệu không hợp lệ");
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchGames();
    return () => { isMounted = false; };
  }, []);

  const processGameData = (game) => {
    const updatedTimeMs = game.ThoiGianGoc * 1000;
    const diffTime = Date.now() - updatedTimeMs;
    
    const diffMinutes = Math.floor(diffTime / (1000 * 60));
    const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    let timeAgo = "";
    if (diffMinutes < 60) {
      timeAgo = `${Math.max(1, diffMinutes)} phút trước`;
    } else if (diffHours < 24) {
      const mins = diffMinutes % 60;
      timeAgo = mins > 0 ? `${diffHours} giờ ${mins} phút trước` : `${diffHours} giờ trước`;
    } else if (diffDays < 7) {
      const hours = diffHours % 24;
      timeAgo = hours > 0 ? `${diffDays} ngày ${hours} giờ trước` : `${diffDays} ngày trước`;
    } else {
      timeAgo = `${diffDays} ngày trước`;
    }
    
    let timeAgoColor = "text-slate-500";
    let isNew = false;
    
    // Tag NEW UPDATE rule: updated within 3 days
    if (diffDays <= 3) {
      isNew = true;
      timeAgoColor = "text-orange-500";
    }

    return {
      id: game.GameName,
      title: game.GameName,
      type: game.Folder || "Khác",
      isNew: isNew,
      updatedAt: game.ThoiGianFormat,
      timeAgo: timeAgo,
      timeAgoColor: timeAgoColor
    };
  };

  const processedGames = useMemo(() => {
    return gamesData.map(processGameData);
  }, [gamesData]);

  const tabs = useMemo(() => {
     return [
      { id: "TẤT CẢ (IDC)", label: "TẤT CẢ (IDC)", count: processedGames.length },
      { id: "ONLINE", label: "ONLINE", count: processedGames.filter(g => g.type.toLowerCase().includes('online')).length },
      { id: "OFFLINE", label: "OFFLINE", count: processedGames.filter(g => g.type.toLowerCase().includes('offline')).length },
      { id: "TOOLS", label: "TOOLS", count: processedGames.filter(g => g.type.toLowerCase().includes('tool')).length },
      { id: "GAME CỦA TÔI", label: "GAME CỦA TÔI", count: 0 },
    ];
  }, [processedGames]);

  // Tab and Search Filtering
  const filteredAndSearchedGames = useMemo(() => {
    return processedGames.filter((game) => {
      let typeMatches = false;
      const t = game.type.toLowerCase();
      if (activeTab === "TẤT CẢ (IDC)") typeMatches = true;
      else if (activeTab === "ONLINE") typeMatches = t.includes('online');
      else if (activeTab === "OFFLINE") typeMatches = t.includes('offline');
      else if (activeTab === "TOOLS") typeMatches = t.includes('tool');
      else if (activeTab === "GAME CỦA TÔI") typeMatches = false;
      
      const searchMatches = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      const newMatches = showOnlyNew ? game.isNew : true;
      return typeMatches && searchMatches && newMatches;
    });
  }, [processedGames, activeTab, searchQuery, showOnlyNew]);

  // Pagination Logic
  const totalPages = Math.ceil(filteredAndSearchedGames.length / itemsPerPage) || 1;
  
  useEffect(() => {
    setCurrentPage(1);
  }, [activeTab, searchQuery, showOnlyNew]);

  const currentGames = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredAndSearchedGames.slice(start, start + itemsPerPage);
  }, [filteredAndSearchedGames, currentPage]);

  const renderPagination = () => {
    let pages = [];
    if (totalPages <= 5) {
      for(let i=1; i<=totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, '...', totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
      }
    }

    return (
       <div className="flex items-center gap-1 flex-wrap">
        {pages.map((p, idx) => {
          if (p === '...') return <span key={`dots-${idx}`} className="text-slate-600 px-2">...</span>
          const isActive = p === currentPage;
          return (
            <button
               key={p}
               onClick={() => setCurrentPage(p)}
               className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm transition-all ${
                 isActive ? "bg-gradient-to-r from-[#00F260] to-[#0575E6] text-black shadow-[0_0_15px_rgba(5,117,230,0.4)]" : "bg-[#050505] border border-slate-800 text-slate-400 hover:text-white hover:border-[#00F2EA]"
               }`}
            >
               {p}
            </button>
          )
        })}
       </div>
    );
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-end mb-6 md:mb-8 border-b border-slate-900 pb-4 gap-4">
        <h2 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#00F260] via-white to-[#0575E6] uppercase tracking-widest italic drop-shadow-lg w-full sm:w-auto">
          THƯ VIỆN GAME
        </h2>
        <div className="flex w-full sm:w-auto gap-2 bg-[#050505] p-1 rounded-xl border border-slate-900 overflow-x-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 sm:flex-none text-[10px] font-black uppercase tracking-widest px-4 md:px-6 py-2.5 rounded-lg transition-all whitespace-nowrap flex items-center justify-center gap-2 ${
                  isActive
                    ? "bg-gradient-to-r from-[#00F260] to-[#0575E6] text-black shadow-[0_0_15px_rgba(5,117,230,0.4)]"
                    : "text-slate-500 hover:text-white hover:bg-slate-900"
                }`}
              >
                {tab.label}
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[9px] ${isActive ? "bg-black/20 text-black" : "bg-slate-800 text-slate-400"}`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <input
              placeholder="Tìm kiếm game trong kho IDC CAG Pro..."
              className="w-full bg-[#0a0a0a] border border-slate-800 rounded-xl py-4 pl-12 pr-4 text-white placeholder-slate-600 focus:border-[#00F2EA] focus:outline-none transition-all font-mono shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)]"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest bg-slate-900 px-2 py-1 rounded">
                {filteredAndSearchedGames.length} GAMES
              </span>
            </div>
          </div>
          <button 
            onClick={() => setShowOnlyNew(!showOnlyNew)}
            className={`px-6 py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all border shrink-0 ${
              showOnlyNew 
                ? "bg-[#00F2EA]/20 border-[#00F2EA] text-[#00F2EA] shadow-[0_0_15px_rgba(0,242,234,0.3)]" 
                : "bg-[#0a0a0a] border-slate-800 text-slate-400 hover:text-white hover:border-slate-600"
            }`}
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
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            LỌC GAME MỚI
          </button>
        </div>

        <div className="bg-[#0575E6]/10 border border-[#0575E6]/30 rounded-xl p-4 md:p-5">
          <h3 className="text-[#00F2EA] font-bold text-base md:text-lg mb-2 flex items-center gap-2">
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
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
            Kho Games Sẵn Có Trên Máy Chủ CAG Pro
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Hệ thống danh sách Game từ trạm IDC Master Center{" "}
            <strong className="text-white">{`=> Không phải trên menu game tại phòng máy này`}</strong>{" "}
            <br />
            {`=> Nếu phòng máy chưa tải game, vui lòng thông báo cho thu ngân / chủ phòng máy ... để hỗ trợ tải về cho bạn chiến nhé!`}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4">
          {loading ? (
             <div className="col-span-full text-center text-[#00F2EA] py-16 font-mono text-sm flex flex-col justify-center items-center gap-4">
               <svg className="animate-spin h-8 w-8 text-[#00F2EA]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
               </svg>
               Đang tải dữ liệu từ trạm IDC Center...
             </div>
          ) : error ? (
             <div className="col-span-full text-center text-red-500 py-10 font-mono text-sm border border-red-500/20 bg-red-500/10 rounded-xl">
                Lỗi tải dữ liệu: {error}
             </div>
          ) : currentGames.length > 0 ? (
            currentGames.map((game) => <IdcGameCard key={game.id} {...game} />)
          ) : (
            <div className="col-span-full text-center text-slate-500 py-10 font-mono text-sm">
              Không tìm thấy dữ liệu game.
            </div>
          )}
        </div>

        {!loading && filteredAndSearchedGames.length > 0 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
               onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
               disabled={currentPage === 1}
               className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#050505] border border-slate-800 text-slate-400 hover:text-white hover:border-[#00F2EA] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            
            {renderPagination()}
            
            <button
               onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
               disabled={currentPage === totalPages}
               className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#050505] border border-slate-800 text-slate-400 hover:text-white hover:border-[#00F2EA] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
