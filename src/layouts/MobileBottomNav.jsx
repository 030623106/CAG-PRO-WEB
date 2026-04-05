// src/layouts/MobileBottomNav.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
// Import Login và Register giống cách bạn làm ở WelcomePage
import LoginModal from "../pages/login/LoginPage"; 
import Register from "../pages/register/RegisterPage"; // Nhớ trỏ đúng đường dẫn thư mục của bạn

const MobileBottomNav = ({ role = "guest" }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // State quản lý QR
  const [isScanning, setIsScanning] = useState(false);

  // State quản lý Modal Đăng nhập / Đăng ký cho Guest
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [loginRole, setLoginRole] = useState("gamer");

  // ĐÃ XÓA useEffect tự động navigate để bạn có thể chuyển trang thoải mái!

  const renderNavItems = () => {
    switch (role) {
      case "owner":
        return (
          <>
            <Link 
              className={`flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 ${currentPath === '/store' ? 'active' : ''}`} 
              to="/store"
              data-discover="true" 
              {...(currentPath === '/store' ? { 'aria-current': 'page' } : {})}
            >
              {/* Quản Lý */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/store' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/store' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500'}`}>
                <path d="M3 10L12 2L21 10V20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20V10Z"></path>
                <path d="M9 21V15"></path>
                <path d="M15 21V15"></path>
                <circle cx="12" cy="15" r="1.5" fill={currentPath === '/store' ? "currentColor" : "none"} className="stroke-none"></circle>
                <path d="M12 2V6"></path>
                <circle cx="12" cy="6" r="1" fill="currentColor"></circle>
              </svg>
              <span className={`text-[8px] font-bold transition-colors duration-300 ${currentPath === '/store' ? 'text-[#00F2EA]' : 'text-slate-600'}`}>Quản Lý</span>
            </Link>
            
            <Link 
              className={`flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 ${currentPath === '/dashboard' ? 'active' : ''}`} 
              to="/dashboard"
              data-discover="true"
              {...(currentPath === '/dashboard' ? { 'aria-current': 'page' } : {})}
            >
              {/* Báo Cáo */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/dashboard' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/dashboard' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500'}`}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
                <circle cx="12" cy="12" r="9" strokeOpacity="0.2"></circle>
                <path d="M12 7l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3z" className={currentPath === '/dashboard' ? "fill-[#FFD700] stroke-none" : "hidden"}></path>
              </svg>
              <span className={`text-[8px] font-bold transition-colors duration-300 ${currentPath === '/dashboard' ? 'text-[#00F2EA]' : 'text-slate-600'}`}>Báo Cáo</span>
            </Link>
          </>
        );

      case "admin":
        return (
          <>
            <Link 
              className={`flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 ${currentPath === '/mod' ? 'active' : ''}`} 
              to="/mod"
              data-discover="true" 
              {...(currentPath === '/mod' ? { 'aria-current': 'page' } : {})}
            >
              {/* Kiểm Duyệt */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/mod' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/mod' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500'}`}>
                <path d="M3 10L12 2L21 10V20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20V10Z"></path>
                <path d="M9 21V15"></path>
                <path d="M15 21V15"></path>
                <circle cx="12" cy="15" r="1.5" fill={currentPath === '/mod' ? "currentColor" : "none"} className="stroke-none"></circle>
                <path d="M12 2V6"></path>
                <circle cx="12" cy="6" r="1" fill="currentColor"></circle>
              </svg>
              <span className={`text-[8px] font-bold transition-colors duration-300 ${currentPath === '/mod' ? 'text-[#00F2EA]' : 'text-slate-600'}`}>Kiểm Duyệt</span>
            </Link>
            
            <Link 
              className={`flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 ${currentPath === '/dashboard' ? 'active' : ''}`} 
              to="/dashboard"
              data-discover="true"
              {...(currentPath === '/dashboard' ? { 'aria-current': 'page' } : {})}
            >
              {/* Dashboard */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/dashboard' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/dashboard' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500'}`}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
                <circle cx="12" cy="12" r="9" strokeOpacity="0.2"></circle>
                <path d="M12 7l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3z" className={currentPath === '/dashboard' ? "fill-[#FFD700] stroke-none" : "hidden"}></path>
              </svg>
              <span className={`text-[8px] font-bold transition-colors duration-300 ${currentPath === '/dashboard' ? 'text-[#00F2EA]' : 'text-slate-600'}`}>Dashboard</span>
            </Link>
            
            <Link 
              className={`flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 ${currentPath === '/offices' ? 'active' : ''}`} 
              to="/offices"
              data-discover="true"
              {...(currentPath === '/offices' ? { 'aria-current': 'page' } : {})}
            >
              {/* Quản Lý Quán */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/offices' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/offices' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500'}`}>
                <path d="M17.5 15c0-1.7-1.3-3-3-3h-1.1c-.2-3.4-3-6-6.4-6-3.6 0-6.5 2.8-6.5 6.3 0 .7.1 1.4.4 2"></path>
                <rect x="6" y="13" width="12" height="6" rx="2"></rect>
                <path d="M8 16h2"></path>
                <path d="M9 15v2"></path>
                <circle cx="15" cy="16" r="0.5" fill="currentColor"></circle>
                <circle cx="14" cy="15" r="0.5" fill="currentColor"></circle>
              </svg>
              <span className={`text-[8px] font-bold transition-colors duration-300 ${currentPath === '/offices' ? 'text-[#00F2EA]' : 'text-slate-600'}`}>Quản Lý Quán</span>
            </Link>
          </>
        );

      case "gamer":
        return (
          <>
            <Link 
              className={`flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 ${currentPath === '/cong-dong-cag' ? 'active' : ''}`} 
              to="/cong-dong-cag"
              data-discover="true" 
              {...(currentPath === '/cong-dong-cag' ? { 'aria-current': 'page' } : {})}
            >
              {/* Cộng Đồng */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/cong-dong-cag' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/cong-dong-cag' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500'}`}>
                <path d="M3 10L12 2L21 10V20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20V10Z"></path>
                <path d="M9 21V15"></path>
                <path d="M15 21V15"></path>
                <circle cx="12" cy="15" r="1.5" fill={currentPath === '/cong-dong-cag' ? "currentColor" : "none"} className="stroke-none"></circle>
                <path d="M12 2V6"></path>
                <circle cx="12" cy="6" r="1" fill="currentColor"></circle>
              </svg>
              <span className={`text-[8px] font-bold transition-colors duration-300 ${currentPath === '/cong-dong-cag' ? 'text-[#00F2EA]' : 'text-slate-600'}`}>Cộng Đồng</span>
            </Link>

            <Link 
              className={`flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 ${currentPath === '/pro-cloud-save' ? 'active' : ''}`} 
              to="/pro-cloud-save"
              data-discover="true"
              {...(currentPath === '/pro-cloud-save' ? { 'aria-current': 'page' } : {})}
            >
              {/* Cloud Save */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/pro-cloud-save' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/pro-cloud-save' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500'}`}>
                <path d="M17.5 15c0-1.7-1.3-3-3-3h-1.1c-.2-3.4-3-6-6.4-6-3.6 0-6.5 2.8-6.5 6.3 0 .7.1 1.4.4 2"></path>
                <rect x="6" y="13" width="12" height="6" rx="2"></rect>
                <path d="M8 16h2"></path>
                <path d="M9 15v2"></path>
                <circle cx="15" cy="16" r="0.5" fill="currentColor"></circle>
                <circle cx="14" cy="15" r="0.5" fill="currentColor"></circle>
              </svg>
              <span className={`text-[8px] font-bold transition-colors duration-300 ${currentPath === '/pro-cloud-save' ? 'text-[#00F2EA]' : 'text-slate-600'}`}>Cloud Save</span>
            </Link>

            {/* Nút Giữa: Scan */}
            <div className="relative -top-6">
              <button 
                onClick={() => setIsScanning(true)}
                className="w-16 h-16 bg-[#0B0E14] clip-path-hexagon flex items-center justify-center border-2 border-[#00F2EA] shadow-[0_0_20px_rgba(0,242,234,0.3)] text-white relative z-10 group active:scale-95 transition-transform"
              >
                <div className="absolute inset-0 bg-[#00F2EA]/10 group-hover:bg-[#00F2EA]/20 transition-colors"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00F2EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_5px_#00F2EA]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="12" y1="2" x2="12" y2="4"></line>
                  <line x1="12" y1="20" x2="12" y2="22"></line>
                  <path d="M12 12 L17 7" className="animate-[spin_3s_linear_infinite] origin-center"></path>
                </svg>
              </button>
            </div>

            <Link 
              className={`flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 ${currentPath === '/offices' ? 'active' : ''}`} 
              to="/offices"
              data-discover="true"
              {...(currentPath === '/offices' ? { 'aria-current': 'page' } : {})}
            >
              {/* CAG Guide */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/offices' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/offices' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500'}`}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
                <circle cx="12" cy="12" r="9" strokeOpacity="0.2"></circle>
                <path d="M12 7l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3z" className={currentPath === '/offices' ? "fill-[#FFD700] stroke-none" : "hidden"}></path>
              </svg>
              <span className={`text-[8px] font-bold transition-colors duration-300 ${currentPath === '/offices' ? 'text-[#00F2EA]' : 'text-slate-600'}`}>CAG Guide</span>
            </Link>

            <Link 
              className={`flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 ${currentPath === '/wallet' ? 'active' : ''}`} 
              to="/wallet"
              data-discover="true"
              {...(currentPath === '/wallet' ? { 'aria-current': 'page' } : {})}
            >
              {/* Ví Của Tôi */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/wallet' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/wallet' ? 'text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]' : 'text-slate-500'}`}>
                <path d="M12 2l9 5v10l-9 5-9-5V7z"></path>
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M16 18c0-2-2-3-4-3s-4 1-4 3"></path>
              </svg>
              <span className={`text-[8px] font-bold transition-colors duration-300 ${currentPath === '/wallet' ? 'text-[#FFD700]' : 'text-slate-600'}`}>Ví Của Tôi</span>
            </Link>
          </>
        );

      case "guest":
      default:
        return (
          <>
            <Link 
              className={`flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 ${currentPath === '/cong-dong-cag' ? 'active' : ''}`} 
              to="/cong-dong-cag"
              data-discover="true" 
              {...(currentPath === '/cong-dong-cag' ? { 'aria-current': 'page' } : {})}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/cong-dong-cag' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/cong-dong-cag' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500'}`}>
                <path d="M3 10L12 2L21 10V20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20V10Z"></path>
                <path d="M9 21V15"></path>
                <path d="M15 21V15"></path>
                <circle cx="12" cy="15" r="1.5" fill={currentPath === '/cong-dong-cag' ? "currentColor" : "none"} className="stroke-none"></circle>
                <path d="M12 2V6"></path>
                <circle cx="12" cy="6" r="1" fill="currentColor"></circle>
              </svg>
              <span className={`text-[8px] font-bold transition-colors duration-300 ${currentPath === '/cong-dong-cag' ? 'text-[#00F2EA]' : 'text-slate-600'}`}>Cộng Đồng</span>
            </Link>

            {/* GUEST: Cloud Save (Mở Login Modal) */}
            <div 
              className="flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 cursor-pointer" 
              onClick={() => setOpenLogin(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 text-slate-500 group-hover:text-slate-400">
                <path d="M17.5 15c0-1.7-1.3-3-3-3h-1.1c-.2-3.4-3-6-6.4-6-3.6 0-6.5 2.8-6.5 6.3 0 .7.1 1.4.4 2"></path>
                <rect x="6" y="13" width="12" height="6" rx="2"></rect>
                <path d="M8 16h2"></path>
                <path d="M9 15v2"></path>
                <circle cx="15" cy="16" r="0.5" fill="currentColor"></circle>
                <circle cx="14" cy="15" r="0.5" fill="currentColor"></circle>
              </svg>
              <span className="text-[8px] font-bold transition-colors duration-300 text-slate-600 group-hover:text-slate-400">Cloud Save</span>
            </div>

            {/* Nút Giữa: Scan */}
            <div className="relative -top-6">
              <button 
                onClick={() => setOpenLogin(true)}
                className="w-16 h-16 bg-[#0B0E14] clip-path-hexagon flex items-center justify-center border-2 border-[#00F2EA] shadow-[0_0_20px_rgba(0,242,234,0.3)] text-white relative z-10 group active:scale-95 transition-transform"
              >
                <div className="absolute inset-0 bg-[#00F2EA]/10 group-hover:bg-[#00F2EA]/20 transition-colors"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00F2EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_5px_#00F2EA]">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                  <line x1="12" y1="2" x2="12" y2="4"></line>
                  <line x1="12" y1="20" x2="12" y2="22"></line>
                  <path d="M12 12 L17 7" className="animate-[spin_3s_linear_infinite] origin-center"></path>
                </svg>
              </button>
            </div>

            <Link 
              className={`flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 ${currentPath === '/offices' ? 'active' : ''}`} 
              to="/offices"
              data-discover="true"
              {...(currentPath === '/offices' ? { 'aria-current': 'page' } : {})}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={currentPath === '/offices' ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${currentPath === '/offices' ? 'text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]' : 'text-slate-500'}`}>
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <path d="M12 8v4"></path>
                <path d="M12 16h.01"></path>
                <circle cx="12" cy="12" r="9" strokeOpacity="0.2"></circle>
                <path d="M12 7l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3z" className={currentPath === '/offices' ? "fill-[#FFD700] stroke-none" : "hidden"}></path>
              </svg>
              <span className={`text-[8px] font-bold transition-colors duration-300 ${currentPath === '/offices' ? 'text-[#00F2EA]' : 'text-slate-600'}`}>CAG Guide</span>
            </Link>

            {/* GUEST: Ví Của Tôi (Mở Login Modal) */}
            <div 
              className="flex-1 flex flex-col items-center gap-1 group relative transition-all duration-300 cursor-pointer" 
              onClick={() => setOpenLogin(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-300 text-slate-500 group-hover:text-slate-400">
                <path d="M12 2l9 5v10l-9 5-9-5V7z"></path>
                <circle cx="12" cy="10" r="3"></circle>
                <path d="M16 18c0-2-2-3-4-3s-4 1-4 3"></path>
              </svg>
              <span className="text-[8px] font-bold transition-colors duration-300 text-slate-600 group-hover:text-slate-400">Ví Của Tôi</span>
            </div>
          </>
        );
    }
  };

  return (
    <>
      {/* TÍCH HỢP LOGIN & REGISTER GIỐNG WELCOME PAGE */}
      
      {openLogin && (
        <LoginModal
          role={loginRole}
          showWarning={true} // True nếu bạn muốn hiện thông báo "Vui lòng đăng nhập"
          onClose={() => setOpenLogin(false)}
          openRegister={() => {
            setOpenLogin(false);
            setOpenRegister(true);
          }}
        />
      )}

      {openRegister && (
        <Register
          showWarning={true}
          onClose={() => setOpenRegister(false)}
          openLogin={(role) => {
            if (role) setLoginRole(role);
            setOpenRegister(false); // Đóng register
            setOpenLogin(true);     // Mở login
          }}
        />
      )}

      {/* Giao diện quét QR */}
      {isScanning && (
        <div className="fixed inset-0 z-[1000] bg-[#0B0E14] flex flex-col items-center justify-center animate-fade-in">
          <div className="relative w-72 h-72 border-2 border-[#00F2EA] rounded-[32px] overflow-hidden shadow-[0_0_100px_rgba(0,242,234,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00F2EA]/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00F2EA] shadow-[0_0_20px_#00F2EA] animate-scan"></div>
            <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-[#00F2EA]"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-[#00F2EA]"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-[#00F2EA]"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-[#00F2EA]"></div>
          </div>
          
          <p className="font-rajdhani font-bold text-[#00F2EA] text-xl mt-8 tracking-[0.2em] animate-pulse">
            SYSTEM SCANNING...
          </p>
          <p className="font-montserrat text-slate-500 text-xs mt-2 uppercase tracking-wide">
            Align QR Code within frame
          </p>
          
          <button 
            onClick={() => setIsScanning(false)}
            className="mt-8 text-slate-500 hover:text-white border border-slate-700 px-4 py-2 rounded uppercase text-xs transition-colors duration-300"
          >
            Cancel
          </button>
        </div>
      )}

      {/* THANH BAR DƯỚI CÙNG */}
      <div className="md:hidden fixed bottom-0 w-full z-[999]">
        <div className="glass-panel border-t border-white/10 relative h-[80px] px-2 flex justify-between items-center pb-safe !bg-[#0B0E14]/90">
          {renderNavItems()}
        </div>
      </div>
    </>
  );
};

export default MobileBottomNav;