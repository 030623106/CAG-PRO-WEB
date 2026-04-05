// src/components/VipBenefits/VipBenefits.jsx
import React, { useState } from "react";
import { createPortal } from "react-dom"; // <-- THÊM PORTAL VÀO ĐÂY
import "./VipBenefits.css"; 

const VipBenefits = ({ role = "guest" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderPopupContent = () => {
    switch (role) {
      case "admin":
        return (
          <>
            <div className="bg-gradient-to-r from-yellow-900/40 via-yellow-600/20 to-black p-8 text-center border-b border-yellow-500/20">
              <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 uppercase tracking-wider font-rajdhani">
                System Admin
              </h2>
              <p className="text-yellow-500/80 mt-2 text-sm">Toàn quyền quản trị hệ thống</p>
            </div>
            <div className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4 font-rajdhani">Xin chào Admin Hệ Thống</h3>
                <p className="text-slate-300">Bạn có toàn quyền truy cập vào tất cả các tính năng VIP của Gamer và Owner.</p>
              </div>
            </div>
          </>
        );

      case "owner":
        return (
          <>
            <div className="bg-gradient-to-r from-yellow-900/40 via-yellow-600/20 to-black p-8 text-center border-b border-yellow-500/20">
              <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 uppercase tracking-wider font-rajdhani">
                VIP Partner
              </h2>
              <p className="text-yellow-500/80 mt-2 text-sm">Mở khóa toàn bộ sức mạnh công nghệ cho Cyber của bạn</p>
            </div>
            <div className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4 font-rajdhani">Bạn đang là thành viên VIP!</h3>
                <p className="text-slate-300 mb-6">Tận hưởng các đặc quyền đẳng cấp nhất.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex gap-4 items-start">
                    <div className="text-2xl">🎯</div>
                    <div>
                      <h4 className="text-white font-bold text-sm font-rajdhani">AI Radar & Auto-Fill</h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">Tự động quét & kéo khách khi quán vắng.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="text-2xl">📊</div>
                    <div>
                      <h4 className="text-white font-bold text-sm font-rajdhani">Advanced Analytics</h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">Bản đồ nhiệt & dự đoán giờ cao điểm.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "gamer":
        return (
          <>
            <div className="bg-gradient-to-r from-yellow-900/40 via-yellow-600/20 to-black p-8 text-center border-b border-yellow-500/20">
              <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 uppercase tracking-wider font-rajdhani">
                Gamer VIP
              </h2>
              <p className="text-yellow-500/80 mt-2 text-sm">Đặc quyền đẳng cấp dành riêng cho bạn</p>
            </div>
            <div className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4 font-rajdhani">Bạn đang là thành viên VIP!</h3>
                <p className="text-slate-300 mb-6">Tận hưởng các đặc quyền đẳng cấp nhất.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="flex gap-4 items-start">
                    <div className="text-2xl">🎮</div>
                    <div>
                      <h4 className="text-white font-bold text-sm font-rajdhani">Ưu tiên đặt máy VIP</h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">Được quyền đặt trước các máy VIP, máy cấu hình cao mà không cần cọc.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="text-2xl">🍔</div>
                    <div>
                      <h4 className="text-white font-bold text-sm font-rajdhani">Combo Đồ Ăn VIP</h4>
                      <p className="text-slate-400 text-xs mt-1 leading-relaxed">Giảm giá 20% cho tất cả các combo đồ ăn, thức uống.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "guest":
      default:
        return (
          <>
            <div className="bg-gradient-to-r from-yellow-900/40 via-yellow-600/20 to-black p-8 text-center border-b border-yellow-500/20">
              <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-yellow-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200 uppercase tracking-wider font-rajdhani">
                Gamer VIP
              </h2>
              <p className="text-yellow-500/80 mt-2 text-sm">Đặc quyền đẳng cấp dành riêng cho bạn</p>
            </div>
            <div className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-4 font-rajdhani">Nâng cấp VIP ngay hôm nay!</h3>
                <p className="text-slate-300 mb-6">Trải nghiệm dịch vụ đẳng cấp và nhận nhiều ưu đãi hấp dẫn.</p>
                <button
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black font-black uppercase px-8 py-4 rounded-xl shadow-lg shadow-yellow-500/20 transition-all transform hover:scale-105"
                >
                  Nâng Cấp Ngay
                </button>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-yellow-500/90 text-black text-[10px] font-bold px-4 py-2.5 rounded-xl border border-yellow-400/50 shadow-lg backdrop-blur hover:bg-yellow-400 transition-all flex items-center gap-2"
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
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
        VIP Benefits
      </button>

      {/* SỬ DỤNG PORTAL NÉM MODAL RA TẬN BODY */}
      {isModalOpen && createPortal(
        <div 
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in font-montserrat"
          onClick={() => setIsModalOpen(false)} 
        >
          <div 
            className="bg-[#121212] border border-yellow-500/30 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl shadow-yellow-500/10 relative text-left"
            onClick={(e) => e.stopPropagation()} 
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white z-10 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>

            {renderPopupContent()}
            
          </div>
        </div>,
        document.body // Gắn thẳng vào thẻ body giống hệt HTML thuần
      )}
    </>
  );
};

export default VipBenefits;