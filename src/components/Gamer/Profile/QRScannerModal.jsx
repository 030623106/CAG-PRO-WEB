import React, { useState, useEffect } from 'react';

const QRScannerModal = ({ isOpen, onClose, profileData }) => {
  // Quản lý trạng thái bên trong Modal này thôi
  const [isScanning, setIsScanning] = useState(true);
  const [isScanSuccess, setIsScanSuccess] = useState(false);

  // Reset lại trạng thái mỗi khi mở Modal lên
  useEffect(() => {
    if (isOpen) {
      setIsScanning(true);
      setIsScanSuccess(false);
    }
  }, [isOpen]);

  // Logic đếm 2 giây
  useEffect(() => {
    let timer;
    if (isOpen && isScanning) {
      timer = setTimeout(() => {
        setIsScanning(false);
        setIsScanSuccess(true);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isOpen, isScanning]);

  if (!isOpen) return null;

  return (
    <>
      {/* GIAO DIỆN SCANNING */}
      {isScanning && (
        <div className="fixed inset-0 z-[1000] bg-[#0B0E14] flex flex-col items-center justify-center animate-fade-in">
          <div className="relative w-72 h-72 border-2 border-[#00F2EA] rounded-[32px] overflow-hidden shadow-[0_0_100px_rgba(0,242,234,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00F2EA]/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00F2EA] shadow-[0_0_20px_#00F2EA] animate-[scan_2s_infinite]"></div>
            <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-[#00F2EA]"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-[#00F2EA]"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-[#00F2EA]"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-[#00F2EA]"></div>
          </div>
          <p className="font-rajdhani font-bold text-[#00F2EA] text-xl mt-8 tracking-[0.2em] animate-pulse">SYSTEM SCANNING...</p>
          <p className="font-montserrat text-slate-500 text-xs mt-2 uppercase tracking-wide">Align QR Code within frame</p>
          <button 
            onClick={onClose}
            className="mt-8 text-slate-500 hover:text-white border border-slate-700 px-4 py-2 rounded uppercase text-xs transition-colors"
          >
            Cancel
          </button>
        </div>
      )}

      {/* GIAO DIỆN SUCCESS */}
      {isScanSuccess && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-[#0B0E14] w-full max-w-md rounded-3xl border-2 border-[#00F2EA] shadow-[0_0_50px_rgba(0,242,234,0.2)] overflow-hidden text-center relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#00F2EA] to-transparent animate-[shimmer_2s_infinite]"></div>
            <div className="p-8 relative z-10">
              <div className="w-24 h-24 bg-[#00F2EA]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#00F2EA]/50 shadow-[0_0_30px_rgba(0,242,234,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00F2EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-[pulse_2s_infinite]">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2 className="text-3xl font-black text-white font-[Rajdhani] uppercase tracking-widest mb-2 drop-shadow-[0_0_10px_rgba(0,242,234,0.5)]">CHECK-IN THÀNH CÔNG</h2>
              <p className="text-slate-400 text-sm mb-8 font-[Montserrat]">Hệ thống đã ghi nhận bạn tại phòng máy.</p>
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mb-8 text-left">
                <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Địa điểm</span>
                  <span className="text-sm text-white font-bold">Flash Gaming Center</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Máy</span>
                  <span className="text-sm text-[#00F2EA] font-mono font-bold text-lg">VIP-05</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Tài khoản</span>
                  <span className="text-sm text-white font-mono">
                    {profileData?.username || "GUEST"}
                  </span>
                </div>
              </div>
              <button 
                onClick={onClose} 
                className="w-full bg-gradient-to-r from-[#00F2EA] to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-black py-4 rounded-xl shadow-[0_0_20px_rgba(0,242,234,0.4)] transition-all uppercase tracking-widest text-sm"
              >
                BẮT ĐẦU CHƠI GAME
              </button>
            </div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00F2EA]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default QRScannerModal;