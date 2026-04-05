// src/components/community/JoinRoomSuccessModal.jsx
import React from "react";

const JoinRoomSuccessModal = ({ isOpen, onClose, hostName, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="sticky top-0 left-0 w-full h-full min-h-[100vh] flex items-center justify-center p-4">
        <div className="bg-slate-900 w-full max-w-sm rounded-3xl border border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.15)] overflow-hidden transform transition-all scale-100">
          <div className="p-8 text-center">
            
            <div className="w-20 h-20 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-400 animate-bounce">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            
            <h2 className="text-2xl font-black text-white italic uppercase tracking-wider mb-2">LOBBY READY!</h2>
            <p className="text-slate-400 text-sm mb-6">
              Bạn đã tham gia thành công đội hình của <span className="text-white font-bold">{hostName}</span>.
            </p>
            
            <div className="bg-black/40 rounded-xl p-4 border border-slate-700/50 mb-6">
              <p className="text-[10px] text-slate-500 uppercase font-bold mb-1 tracking-wider">Thời gian bắt đầu</p>
              <p className="text-3xl font-mono text-green-400 font-bold drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">02:30:00</p>
              <p className="text-xs text-slate-500 mt-2 italic">Hệ thống sẽ nhắc bạn trước 5 phút.</p>
            </div>
            
            {/* SỰ KIỆN MỚI: Bấm vào đây sẽ gọi onConfirm (tăng số) rồi tự đóng */}
            <button 
              onClick={onConfirm} 
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-3.5 rounded-xl shadow-[0_4px_15px_rgba(34,197,94,0.3)] transition-all active:scale-95"
            >
              ĐÃ RÕ, CHIẾN THÔI!
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinRoomSuccessModal;