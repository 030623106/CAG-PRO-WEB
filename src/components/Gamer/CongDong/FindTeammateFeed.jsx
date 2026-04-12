import  { useState } from "react";

const FindTeammateFeed = ({ onOpenCreateModal, onJoinRoom,checkAuth }) => {
  const [players, setPlayers] = useState({
    room1: 3, 
    room2: 1  
  });

  const isRoom1Full = players.room1 >= 5;
  const isRoom2Full = players.room2 >= 5;

  const handleJoinClick = (roomId, hostName) => {
    if (!checkAuth("Đăng nhập để tham gia Squad.")) return;
    if (onJoinRoom) {
      onJoinRoom({
        hostName: hostName,
        onConfirm: () => {
          setPlayers(prev => ({
            ...prev,
            [roomId]: prev[roomId] + 1
          }));
        }
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-gradient-to-r from-green-900 to-emerald-900 p-1 rounded-xl shadow-lg border border-green-700/50">
        <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div>
              <h3 className="font-black text-white text-lg uppercase italic tracking-wide">TÌM ĐỒNG ĐỘI - LEO RANK</h3>
              <p className="text-xs text-green-300">Đừng chơi một mình! Tìm team hợp cạ ngay.</p>
            </div>
          </div>
          <button onClick={onOpenCreateModal} className="w-full sm:w-auto bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-3 rounded-lg text-sm shadow-[0_0_15px_rgba(34,197,94,0.4)] hover:scale-105 transition-all flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            TẠO PHÒNG
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        

        <div className="relative bg-slate-800 rounded-xl border border-slate-700 overflow-hidden group hover:border-green-500/50 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]">
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black/40 to-transparent z-0"></div>
          <div className="absolute top-0 right-0 px-3 py-1 text-[10px] font-black uppercase text-white rounded-bl-xl z-10 bg-yellow-600">CS:GO 2</div>
          <div className="p-5 relative z-10">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="relative overflow-hidden w-14 h-14 rounded-xl"><img alt="Tuấn Đạt" className="w-14 h-14 rounded-xl border-2 border-slate-600 object-cover" src="https://picsum.photos/50/50?random=12" /></div>
                <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-600 rounded p-0.5"><div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-[8px] font-bold text-black">G</div></div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-base line-clamp-1 group-hover:text-green-400 transition-colors">Cần tìm 2 bạn bắn CS:GO rank Gold</h4>
                <p className="text-xs text-slate-400 mb-2">Host: <span className="text-white font-medium">Tuấn Đạt</span></p>
                <div className="grid grid-cols-2 gap-y-1 gap-x-2 text-[10px] text-slate-300 mb-3">
                  <span className="flex items-center gap-1 bg-slate-900/50 px-2 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M20 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Khu vực Gò Vấp
                  </span>
                  <span className="flex items-center gap-1 bg-slate-900/50 px-2 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    20:00 Tối nay
                  </span>
                  <span className="flex items-center gap-1 bg-slate-900/50 px-2 py-1 rounded col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                    Micro: Bắt buộc
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between gap-4 pt-3 border-t border-slate-700/50">
              <div className="flex-1">
                <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                  <span>SLOT</span>
                  <span className={isRoom1Full ? "text-red-400" : "text-green-400"}>{players.room1}/5</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${isRoom1Full ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${(players.room1 / 5) * 100}%` }}></div>
                </div>
              </div>
              
              <button 
                onClick={() => handleJoinClick('room1', 'Tuấn Đạt')}
                disabled={isRoom1Full}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase shadow-lg transition-all active:scale-95 ${
                  isRoom1Full 
                    ? "bg-slate-700 text-slate-500 cursor-not-allowed" 
                    : "bg-white text-black hover:bg-green-400 hover:text-black"
                }`}
              >
                {isRoom1Full ? "ĐÃ FULL" : "Tham Gia"}
              </button>
            </div>
          </div>
        </div>

        
        <div className="relative bg-slate-800 rounded-xl border border-slate-700 overflow-hidden group hover:border-green-500/50 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]">
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-black/40 to-transparent z-0"></div>
          <div className="absolute top-0 right-0 px-3 py-1 text-[10px] font-black uppercase text-white rounded-bl-xl z-10 bg-red-500">Valorant</div>
          <div className="p-5 relative z-10">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="relative overflow-hidden w-14 h-14 rounded-xl"><img alt="Lan Anh" className="w-14 h-14 rounded-xl border-2 border-slate-600 object-cover" src="https://picsum.photos/50/50?random=13" /></div>
                <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-600 rounded p-0.5"><div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center text-[8px] font-bold text-black">G</div></div>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-white text-base line-clamp-1 group-hover:text-green-400 transition-colors">Tìm team full nữ bắn chill</h4>
                <p className="text-xs text-slate-400 mb-2">Host: <span className="text-white font-medium">Lan Anh</span></p>
                <div className="grid grid-cols-2 gap-y-1 gap-x-2 text-[10px] text-slate-300 mb-3">
                  <span className="flex items-center gap-1 bg-slate-900/50 px-2 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400"><path d="M20 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Online / Q.1
                  </span>
                  <span className="flex items-center gap-1 bg-slate-900/50 px-2 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    Ngay bây giờ
                  </span>
                  <span className="flex items-center gap-1 bg-slate-900/50 px-2 py-1 rounded col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
                    Micro: Bắt buộc
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between gap-4 pt-3 border-t border-slate-700/50">
              <div className="flex-1">
                <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                  <span>SLOT</span>
                  <span className={isRoom2Full ? "text-red-400" : "text-green-400"}>{players.room2}/5</span>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all duration-500 ${isRoom2Full ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${(players.room2 / 5) * 100}%` }}></div>
                </div>
              </div>
              
              <button 
                onClick={() => handleJoinClick('room2', 'Lan Anh')}
                disabled={isRoom2Full}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase shadow-lg transition-all active:scale-95 ${
                  isRoom2Full 
                    ? "bg-slate-700 text-slate-500 cursor-not-allowed" 
                    : "bg-white text-black hover:bg-green-400 hover:text-black"
                }`}
              >
                {isRoom2Full ? "ĐÃ FULL" : "Tham Gia"}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FindTeammateFeed;