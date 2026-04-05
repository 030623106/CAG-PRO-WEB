// src/components/community/CreateRoomModal.jsx
import React, { useState } from "react";

const CreateRoomModal = ({ isOpen, onClose }) => {
  const [playerCount, setPlayerCount] = useState(5);
  const [selectedGame, setSelectedGame] = useState("Valorant"); // State theo dõi Game đang chọn
  const [customGameName, setCustomGameName] = useState(""); // State lưu tên Game nhập tay

  if (!isOpen) return null;

  return (
    // Lớp mờ bao quanh, áp dụng công thức "absolute inset-0"
    <div className="absolute inset-0 z-50 bg-black/70 backdrop-blur-sm animate-fade-in">
      
      {/* Container sticky để căn giữa Modal */}
      <div className="sticky top-0 left-0 w-full h-full min-h-[100vh] flex items-center justify-center p-4">
        
        {/* Khung Modal */}
        <div className="bg-slate-900 w-full max-w-md rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className="bg-slate-800 p-4 flex justify-between items-center border-b border-slate-700">
            <h3 className="font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              TẠO PHÒNG TÌM ĐỒNG ĐỘI
            </h3>
            <button onClick={onClose} className="text-slate-400 hover:text-white translate-y-0.3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 space-y-4">
            
            <div>
              <label className="text-xs text-slate-400 uppercase font-bold block mb-1">Tên Game</label>
              <select 
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
                className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white text-sm focus:border-green-500 focus:outline-none cursor-pointer"
              >
                <option value="Valorant">Valorant</option>
                <option value="CS:GO 2">CS:GO 2</option>
                <option value="League of Legends">League of Legends</option>
                <option value="Black Myth: Wukong">Black Myth: Wukong</option>
                <option value="FIFA Online 4">FIFA Online 4</option>
                <option value="OTHER">Game Khác...</option>
              </select>

              {/* Ô Nhập tay sẽ chỉ hiện ra nếu chọn "Game Khác..." */}
              {selectedGame === "OTHER" && (
                <input 
                  placeholder="Nhập tên game bạn muốn chơi..." 
                  className="w-full bg-slate-800 border border-green-500/50 border-slate-600 rounded p-2 text-white text-sm focus:border-green-500 focus:outline-none mt-2 animate-fade-in" 
                  type="text" 
                  value={customGameName}
                  onChange={(e) => setCustomGameName(e.target.value)}
                />
              )}
            </div>

            <div>
              <label className="text-xs text-slate-400 uppercase font-bold block mb-1">Tiêu đề phòng</label>
              <input 
                placeholder="VD: Cần tìm 2 bạn rank Gold bắn chill" 
                className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white text-sm focus:border-green-500 focus:outline-none" 
                type="text" 
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-400 uppercase font-bold block mb-1">Khu vực</label>
                <input 
                  placeholder="VD: Gò Vấp / Online" 
                  className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white text-sm focus:border-green-500 focus:outline-none" 
                  type="text" 
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 uppercase font-bold block mb-1">Thời gian</label>
                <input 
                  placeholder="VD: 20h tối nay" 
                  defaultValue="Ngay bây giờ"
                  className="w-full bg-slate-800 border border-slate-600 rounded p-2 text-white text-sm focus:border-green-500 focus:outline-none" 
                  type="text" 
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-400 uppercase font-bold block mb-1">
                Số lượng người cần tìm: {playerCount}
              </label>
              {/* Đã xóa số 1 và 10, trả lại class 'accent-green-500' để thanh kéo có viền xanh chuẩn html */}
              <input 
                min="1" 
                max="10" 
                step="1" 
                className="w-full accent-green-500 cursor-pointer" 
                type="range" 
                value={playerCount}
                onChange={(e) => setPlayerCount(e.target.value)}
              />
            </div>

          </div>

          {/* Footer */}
          <div className="p-4 bg-slate-800 border-t border-slate-700 flex justify-end gap-2">
            <button onClick={onClose} className="px-4 py-2 text-slate-400 text-sm font-bold hover:text-white transition-colors">
              Hủy
            </button>
            <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded text-sm font-bold shadow-lg transition-all active:scale-95">
              Đăng Tin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRoomModal;