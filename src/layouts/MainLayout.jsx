// src/layouts/MainLayout.jsx
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/Authen';

import ChatWidget from '../components/ChatWidget/ChatWidget';
import VipBenefits from '../components/VipBenefits/VipBenefits';
import LoginModal from "../pages/login/LoginPage";
import Register from "../pages/register/RegisterPage";
import Forgot from "../pages/forgot/ForgotPassword";

import './Sidebar.css';

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const currentPath = location.pathname;

  React.useEffect(() => {
    if (user && user.role !== 'guest') {
      setOpenLogin(false);
      setOpenRegister(false);
      setOpenForgot(false);
    }
  }, [user]);
  let currentRole = 'guest';
  if (user) {
    const roleId = Number(user.role || user.userType);
    if (roleId === 1) currentRole = 'admin';
    else if (roleId === 2) currentRole = 'owner';
    else if (roleId === 4) currentRole = 'gamer';
  }

  const [showQRScanner, setShowQRScanner] = useState(false);
  
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const [authMessage, setAuthMessage] = useState("");
  const [loginRole, setLoginRole] = useState("gamer");
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  
  const triggerAuth = (msg = "Chức năng này chỉ dành cho hội viên CAG, vui lòng đăng nhập để sử dụng.") => {
    setAuthMessage(msg);
    setOpenLogin(true);
  };

  const handleLogout = () => {
    setIsLoggingOut(true);
    
    setTimeout(() => {
      logout();
      window.location.href = "/";
    }, 300); 
  };

  const handleGuestAction = (e) => {
    if (e) e.preventDefault();
    triggerAuth(); 
  };

  const handleSimulateQRScan = () => {
    if (currentRole === 'guest') {
      triggerAuth("Vui lòng đăng nhập để sử dụng tính năng Check-in QR.");
      return;
    }
    setShowQRScanner(true);
    setTimeout(() => {
      setShowQRScanner(false);
      navigate('/?action=checkin_success');
    }, 2000);
  };

  const IconHome = ({ active }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${active ? "text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]" : "text-slate-500 group-hover:text-slate-300"}`}>
        <path d="M3 10L12 2L21 10V20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20V10Z" />
        <path d="M9 21V15" />
        <path d="M15 21V15" />
        <circle cx="12" cy="15" r="1.5" fill={active ? "currentColor" : "none"} className="stroke-none" />
        <path d="M12 2V6" />
        <circle cx="12" cy="6" r="1" fill="currentColor" />
    </svg>
  );

  const IconGuide = ({ active }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${active ? "text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]" : "text-slate-500 group-hover:text-slate-300"}`}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
        <circle cx="12" cy="12" r="9" strokeOpacity="0.2" />
        <path d="M12 7l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3z" className={active ? "fill-[#FFD700] stroke-none" : "hidden"}/>
    </svg>
  );

  const IconCloud = ({ active }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${active ? "text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]" : "text-slate-500 group-hover:text-slate-300"}`}>
        <path d="M17.5 15c0-1.7-1.3-3-3-3h-1.1c-.2-3.4-3-6-6.4-6-3.6 0-6.5 2.8-6.5 6.3 0 .7.1 1.4.4 2" />
        <rect x="6" y="13" width="12" height="6" rx="2" />
        <path d="M8 16h2" /> 
        <path d="M9 15v2" />
        <circle cx="15" cy="16" r="0.5" fill="currentColor" />
        <circle cx="14" cy="15" r="0.5" fill="currentColor" />
    </svg>
  );

  const IconProfile = ({ active }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${active ? "text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.8)]" : "text-slate-500 group-hover:text-slate-300"}`}>
        <path d="M12 2l9 5v10l-9 5-9-5V7z" />
        <circle cx="12" cy="10" r="3" />
        <path d="M16 18c0-2-2-3-4-3s-4 1-4 3" />
    </svg>
  );

  const IconEsports = ({ active }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? "2" : "1.5"} strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${active ? "text-[#0575E6] drop-shadow-[0_0_8px_rgba(5,117,230,0.8)]" : "text-slate-500 group-hover:text-slate-300"}`}>
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
        <path d="M4 22h16"/>
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
    </svg>
  );

  const IconRadar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00F2EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_5px_#00F2EA]">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <path d="M12 12 L17 7" className="animate-[spin_3s_linear_infinite] origin-center" />
    </svg>
  );

  const getNavItems = () => {
    if (currentRole === 'owner') {
      return [
        { path: '/store', label: 'QUẢN LÝ QUÁN', icon: IconHome },
        { path: '/dashboard', label: 'THỐNG KÊ', icon: IconGuide },
        { path: '/notifications', label: 'THÔNG BÁO', icon: IconCloud },
      ];
    }
    
    if (currentRole === 'admin') {
      return [
        { path: '/mod', label: 'KIỂM DUYỆT', icon: IconHome },
        { path: '/dashboard', label: 'DASHBOARD', icon: IconGuide },
        { path: '/offices', label: 'QUẢN LÝ QUÁN', icon: IconCloud },
        { path: '/notifications', label: 'THÔNG BÁO', icon: IconProfile },
      ];
    }

    if (currentRole === 'gamer') {
      return [
        { path: '/cong-dong-cag', label: 'Cộng Đồng CAG', icon: IconHome },
        { path: '/pro-cloud-save', label: 'Pro Cloud Save', icon: IconCloud },
        { path: '/offices', label: 'CAG Guide', icon: IconGuide },
        { path: '/esports', label: 'CAG eSports Hub', icon: IconEsports },
        { path: '/wallet', label: 'Ví Của Tôi', icon: IconProfile },
      ];
    }

    return [
      { path: '/cong-dong-cag', label: 'Cộng Đồng CAG', icon: IconHome },
      { path: '/pro-cloud-save', label: 'Pro Cloud Save', icon: IconCloud, isGuestLocked: true },
      { path: '/offices', label: 'CAG Guide', icon: IconGuide },
      { path: '/esports', label: 'CAG eSports Hub', icon: IconEsports },
      { path: '/wallet', label: 'Ví Của Tôi', icon: IconProfile, isGuestLocked: true },
    ];
  };

  const navItems = getNavItems();

  return (
    <div className="flex h-screen bg-[#0B0E14] text-slate-100 overflow-hidden font-montserrat relative">

      {isLoggingOut && (
        <div className="fixed inset-0 z-[99999] bg-[#0B0E14] flex items-center justify-center animate-fade-in">
           <div className="flex flex-col items-center gap-4">
              <div className="w-10 h-10 border-4 border-[#00F2EA] border-t-transparent rounded-full animate-spin"></div>
              <span className="text-[#00F2EA] font-bold tracking-widest text-sm animate-pulse">ĐANG ĐĂNG XUẤT...</span>
           </div>
        </div>
      )}
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="w-24 lg:w-64 glass-panel border-r border-white/5 flex flex-col hidden md:flex z-50 shrink-0">
        <div className="p-6 flex items-center justify-center lg:justify-start gap-3">
            <div className="w-10 h-10 bg-[#00F2EA] skew-x-[-10deg] flex items-center justify-center shadow-[0_0_20px_rgba(0,242,234,0.4)]">
                <span className="font-rajdhani font-bold text-[#0B0E14] text-xl skew-x-[10deg]">C</span>
            </div>
            <div className="hidden lg:block">
                <span className="font-rajdhani font-bold text-2xl text-white tracking-widest block leading-none">CAG</span>
                <span className="font-montserrat text-[8px] font-bold text-slate-400 tracking-[0.3em]">ECOSYSTEM</span>
            </div>
        </div>

        <nav className="flex-1 px-4 py-8 space-y-4">
          {navItems.map(item => {
            const isActive = currentPath === item.path;
            
            if (item.isGuestLocked) {
              return (
                <div key={item.path} onClick={handleGuestAction} className="flex flex-col lg:flex-row items-center gap-3 px-3 py-4 rounded-xl transition-all duration-300 group hover:bg-white/5 cursor-pointer">
                  <item.icon active={false} />
                  <span className="font-rajdhani font-bold tracking-widest text-sm hidden lg:block text-slate-500 group-hover:text-slate-300">{item.label}</span>
                </div>
              )
            }

            return (
              <NavLink key={item.path} to={item.path} className={`flex flex-col lg:flex-row items-center gap-3 px-3 py-4 rounded-xl transition-all duration-300 group ${isActive ? 'bg-white/5 border border-white/10' : 'hover:bg-white/5'}`}>
                  <item.icon active={isActive} />
                  <span className={`font-rajdhani font-bold tracking-widest text-sm hidden lg:block ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>{item.label}</span>
                  {isActive && <div className="absolute left-0 w-1 h-8 bg-[#00F2EA] rounded-r-full shadow-[0_0_10px_#00F2EA]"></div>}
              </NavLink>
            )
          })}
        </nav>

        <div className="p-4 border-t border-white/5 flex flex-col items-center lg:items-start">
          {currentRole === 'guest' ? (
              <div className="w-full">
                  <p className="text-xs text-slate-500 text-center mb-3">Bạn chưa đăng nhập</p>
                  <button onClick={handleGuestAction} className="w-full bg-[#00F2EA] text-[#0B0E14] font-bold py-3 rounded-lg hover:bg-white transition-all uppercase text-xs tracking-widest shadow-[0_0_15px_rgba(0,242,234,0.3)]">
                      Đăng Nhập Ngay
                  </button>
              </div>
          ) : (
              <>
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 p-0.5">
                        <img src={user?.avatar || 'https://i.pravatar.cc/300'} alt="User" className="w-full h-full rounded-lg object-cover" />
                    </div>
                    <div className="hidden lg:block">
                        <p className="text-xs font-bold font-rajdhani text-white truncate w-32 uppercase">{user?.fullName || 'Người Dùng'}</p>
                        <p className="text-[10px] text-[#FFD700] font-bold uppercase tracking-wider">{user?.rank || 'MEMBER'}</p>
                    </div>
                </div>
                <button onClick={handleLogout} className="lg:w-full p-2 lg:px-4 lg:py-2 rounded-lg border border-red-900/30 text-red-500 hover:bg-red-900/20 hover:text-red-400 transition-all text-xs font-bold uppercase tracking-widest">
                    <span className="hidden lg:inline">LOGOUT</span>
                    <span className="lg:hidden">⏻</span>
                </button>
              </>
          )}
        </div>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <main className="flex-1 overflow-y-auto pb-24 md:pb-0 scroll-smooth no-scrollbar">
          <div className="w-full h-full"> 
             {/* Bơm triggerAuth vào Outlet */}
             <Outlet context={{ triggerAuth }} />
          </div>
        </main>

        {/* ================= MOBILE BOTTOM NAV ================= */}
        <div className="md:hidden fixed bottom-0 w-full z-[999]">
            <div className="glass-panel border-t border-white/10 relative h-[80px] px-2 flex justify-between items-center pb-safe bg-[#0B0E14]/90">
                {navItems.map((item, index) => {
                  const isActive = currentPath === item.path;
                  // Tính toán index của nút QR dựa theo số lượng tab
                  const isMiddleItemForGamerGuest = (currentRole === 'gamer' || currentRole === 'guest') && index === 2;

                  return (
                    <React.Fragment key={item.path}>
                      {isMiddleItemForGamerGuest && (
                        <div className="relative -top-6">
                            <button onClick={handleSimulateQRScan} className="w-16 h-16 bg-[#0B0E14] clip-path-hexagon flex items-center justify-center border-2 border-[#00F2EA] shadow-[0_0_20px_rgba(0,242,234,0.3)] text-white relative z-10 group active:scale-95 transition-transform">
                                <div className="absolute inset-0 bg-[#00F2EA]/10 group-hover:bg-[#00F2EA]/20 transition-colors"></div>
                                <IconRadar />
                            </button>
                        </div>
                      )}

                      {item.isGuestLocked ? (
                        <div onClick={handleGuestAction} className="flex-1 flex flex-col items-center gap-1 group cursor-pointer">
                           <item.icon active={false} />
                           <span className="text-[8px] font-bold text-slate-600 group-hover:text-slate-400 transition-colors duration-300 truncate w-full text-center px-1">{item.label}</span>
                        </div>
                      ) : (
                        <NavLink to={item.path} className="flex-1 flex flex-col items-center gap-1 group">
                            <item.icon active={isActive} />
                            <span className={`text-[8px] font-bold transition-colors duration-300 truncate w-full text-center px-1 ${isActive ? (item.label === 'Ví Của Tôi' ? 'text-[#FFD700]' : (item.label === 'CAG eSports Hub' ? 'text-[#0575E6]' : 'text-[#00F2EA]')) : 'text-slate-600'}`}>
                              {item.label}
                            </span>
                        </NavLink>
                      )}
                    </React.Fragment>
                  )
                })}
            </div>
        </div>

        {/* ================= MODALS & WIDGETS ================= */}
        {showQRScanner && (
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
                <button onClick={() => setShowQRScanner(false)} className="mt-8 text-slate-500 hover:text-white border border-slate-700 px-4 py-2 rounded uppercase text-xs transition-colors duration-300">Cancel</button>
            </div>
        )}

        {/* Auth Modals cho Guest */}
        {openLogin && (
          <LoginModal
            role={loginRole}
            showWarning={true}
            warningMsg={authMessage}
            onClose={() => setOpenLogin(false)}
            openForget={() => { setOpenLogin(false); setOpenForgot(true); }}
            openRegister={() => { setOpenLogin(false); setOpenRegister(true); }}
          />
        )}
        {openRegister && (
          <Register
            showWarning={true}
            warningMsg="Vui lòng đăng ký tài khoản để sử dụng."
            onClose={() => setOpenRegister(false)}
            openLogin={(role) => { if (role) setLoginRole(role); setOpenRegister(false); setOpenLogin(true); }}
          />
        )}
        {openForgot && (
          <Forgot
            showWarning={true}
            onClose={() => setOpenForgot(false)}
            openLogin={() => { setOpenForgot(false); setOpenLogin(true); }}
            openRegister={() => { setOpenForgot(false); setOpenRegister(true); }}
          />
        )}

        {/* Chat Widget */}
        {currentRole !== 'guest' && <ChatWidget user={user} currentRole={currentRole} />}

        {/* VIP Benefits */}
        <div className="fixed bottom-[100px] left-2 md:bottom-4 md:left-4 z-[9999] font-mono flex gap-2 items-end">
            <VipBenefits  role={currentRole}  />
        </div>

      </div>
    </div>
  );
};

export default MainLayout;