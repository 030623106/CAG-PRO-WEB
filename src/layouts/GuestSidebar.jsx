import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

import LoginModal from "../pages/login/LoginPage";
import Register from "../pages/register/RegisterPage";
import Forgot from "../pages/forgot/ForgotPassword";

const GuestSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // State quản lý bật/tắt Popup Login & Register
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [loginRole, setLoginRole] = useState("gamer");
  const [openForgot, setOpenForgot] = useState(false);
  return (
    <>
      <aside className="w-24 lg:w-64 glass-panel border-r border-white/5 flex flex-col hidden md:flex z-50 shrink-0">
        {/* =====================================
            1. LOGO & HEADER SECTION
        ===================================== */}
        <div className="p-6 flex items-center justify-center lg:justify-start gap-3">
          <div className="w-10 h-10 bg-[#00F2EA] skew-x-[-10deg] flex items-center justify-center shadow-[0_0_20px_rgba(0,242,234,0.4)]">
            <span className="font-rajdhani font-bold text-[#0B0E14] text-xl skew-x-[10deg]">
              C
            </span>
          </div>
          <div className="hidden lg:block">
            <span className="font-rajdhani font-bold text-2xl text-white tracking-widest block leading-none">
              CAG
            </span>
            <span className="font-montserrat text-[8px] font-bold text-slate-400 tracking-[0.3em]">
              ECOSYSTEM
            </span>
          </div>
        </div>

        {/* =====================================
            2. NAVIGATION (CÁC TAB MENU)
        ===================================== */}
        <nav className="flex-1 px-4 py-8 space-y-4">
          {/* --- TAB 1: CỘNG ĐỒNG CAG (/cong-dong-cag) (CHUYỂN TRANG BÌNH THƯỜNG) --- */}
          <Link
            to="/cong-dong-cag"
            data-discover="true"
            {...(currentPath === "/cong-dong-cag"
              ? { "aria-current": "page" }
              : {})}
            className={`
              flex flex-col lg:flex-row items-center gap-3 px-3 py-4 rounded-xl transition-all duration-300 group
              ${currentPath === "/cong-dong-cag" ? "bg-white/5 border border-white/10" : "hover:bg-white/5"}
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={currentPath === "/cong-dong-cag" ? "2" : "1.5"}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-300 ${currentPath === "/cong-dong-cag" ? "text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]" : "text-slate-500 group-hover:text-slate-300"}`}
            >
              <path d="M3 10L12 2L21 10V20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20V10Z"></path>
              <path d="M9 21V15"></path>
              <path d="M15 21V15"></path>
              <circle
                cx="12"
                cy="15"
                r="1.5"
                fill={
                  currentPath === "/cong-dong-cag" ? "currentColor" : "none"
                }
                className="stroke-none"
              ></circle>
              <path d="M12 2V6"></path>
              <circle cx="12" cy="6" r="1" fill="currentColor"></circle>
            </svg>
            <span
              className={`font-rajdhani font-bold tracking-widest text-sm hidden lg:block ${currentPath === "/cong-dong-cag" ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`}
            >
              Cộng Đồng CAG
            </span>
            {currentPath === "/cong-dong-cag" && (
              <div className="absolute left-0 w-1 h-8 bg-[#00F2EA] rounded-r-full shadow-[0_0_10px_#00F2EA]"></div>
            )}
          </Link>

          {/* --- TAB 2: PRO CLOUD SAVE (KHÓA: MỞ POPUP LOGIN) --- */}
          <div
            onClick={() => setOpenLogin(true)}
            className="flex flex-col lg:flex-row items-center gap-3 px-3 py-4 rounded-xl transition-all duration-300 group hover:bg-white/5 cursor-pointer w-full text-left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300 text-slate-500 group-hover:text-slate-300"
            >
              <path d="M17.5 15c0-1.7-1.3-3-3-3h-1.1c-.2-3.4-3-6-6.4-6-3.6 0-6.5 2.8-6.5 6.3 0 .7.1 1.4.4 2"></path>
              <rect x="6" y="13" width="12" height="6" rx="2"></rect>
              <path d="M8 16h2"></path>
              <path d="M9 15v2"></path>
              <circle cx="15" cy="16" r="0.5" fill="currentColor"></circle>
              <circle cx="14" cy="15" r="0.5" fill="currentColor"></circle>
            </svg>
            <span className="font-rajdhani font-bold tracking-widest text-sm hidden lg:block text-slate-500 group-hover:text-slate-300">
              Pro Cloud Save
            </span>
          </div>

          {/* --- TAB 3: CAG GUIDE (/offices) (CHUYỂN TRANG BÌNH THƯỜNG) --- */}
          <Link
            to="/offices"
            data-discover="true"
            {...(currentPath === "/offices" ? { "aria-current": "page" } : {})}
            className={`
              flex flex-col lg:flex-row items-center gap-3 px-3 py-4 rounded-xl transition-all duration-300 group
              ${currentPath === "/offices" ? "bg-white/5 border border-white/10" : "hover:bg-white/5"}
            `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={currentPath === "/offices" ? "2" : "1.5"}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-all duration-300 ${currentPath === "/offices" ? "text-[#00F2EA] drop-shadow-[0_0_8px_rgba(0,242,234,0.8)]" : "text-slate-500 group-hover:text-slate-300"}`}
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M12 8v4"></path>
              <path d="M12 16h.01"></path>
              <circle cx="12" cy="12" r="9" strokeOpacity="0.2"></circle>
              <path
                d="M12 7l1.5 3h3l-2.5 2 1 3-3-2-3 2 1-3-2.5-2h3z"
                className={
                  currentPath === "/offices"
                    ? "fill-[#FFD700] stroke-none"
                    : "hidden"
                }
              ></path>
            </svg>
            <span
              className={`font-rajdhani font-bold tracking-widest text-sm hidden lg:block ${currentPath === "/offices" ? "text-white" : "text-slate-500 group-hover:text-slate-300"}`}
            >
              CAG Guide
            </span>
            {currentPath === "/offices" && (
              <div className="absolute left-0 w-1 h-8 bg-[#00F2EA] rounded-r-full shadow-[0_0_10px_#00F2EA]"></div>
            )}
          </Link>

          {/* --- TAB 4: VÍ CỦA TÔI (KHÓA: MỞ POPUP LOGIN) --- */}
          <div
            onClick={() => setOpenLogin(true)}
            className="flex flex-col lg:flex-row items-center gap-3 px-3 py-4 rounded-xl transition-all duration-300 group hover:bg-white/5 cursor-pointer w-full text-left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-all duration-300 text-slate-500 group-hover:text-slate-300"
            >
              <path d="M12 2l9 5v10l-9 5-9-5V7z"></path>
              <circle cx="12" cy="10" r="3"></circle>
              <path d="M16 18c0-2-2-3-4-3s-4 1-4 3"></path>
            </svg>
            <span className="font-rajdhani font-bold tracking-widest text-sm hidden lg:block text-slate-500 group-hover:text-slate-300">
              Ví Của Tôi
            </span>
          </div>
        </nav>

        {/* =====================================
            3. KHU VỰC KHUYẾN KHÍCH ĐĂNG NHẬP
        ===================================== */}
        <div className="p-4 border-t border-white/5 flex flex-col items-center lg:items-start">
          <div className="w-full">
            <p className="text-xs text-slate-500 text-center mb-3">
              Bạn chưa đăng nhập
            </p>
            <button
              onClick={() => setOpenLogin(true)}
              className="w-full bg-[#00F2EA] text-[#0B0E14] font-bold py-3 rounded-lg hover:bg-white transition-all uppercase text-xs tracking-widest shadow-[0_0_15px_rgba(0,242,234,0.3)]"
            >
              Đăng Nhập Ngay
            </button>
          </div>
        </div>
      </aside>

      {/* =========================================
          KHU VỰC HIỂN THỊ POPUP ĐÈ LÊN MÀN HÌNH
      ========================================= */}
      {openLogin && (
        <LoginModal
          role={loginRole}
          showWarning={true}
          warningMsg="Chức năng này chỉ dành cho hội viên CAG, vui lòng đăng ký tk để sử dụng."
          onClose={() => setOpenLogin(false)}
          openForget={() => {
            setOpenLogin(false);
            setOpenForgot(true);
          }}
          openRegister={() => {
            setOpenLogin(false);
            setOpenRegister(true);
          }}
        />
      )}

      {openRegister && (
        <Register
          showWarning={true}
          warningMsg="Chức năng này chỉ dành cho hội viên CAG, vui lòng đăng ký tk để sử dụng."
          onClose={() => setOpenRegister(false)}
          openLogin={(role) => {
            setLoginRole(role);
            setOpenRegister(false);
            setOpenLogin(true);
          }}
        />
      )}

      {openForgot && (
        <Forgot
          showWarning={true}
          warningMsg="Chức năng này chỉ dành cho hội viên CAG, vui lòng đăng ký tk để sử dụng."
          onClose={() => setOpenForgot(false)}
          openLogin={() => {
            setOpenForgot(false);
            setOpenLogin(true);
          }}
          openRegister={() => {
            setOpenForgot(false);
            setOpenRegister(true);
          }}
        />
      )}
    </>
  );
};

export default GuestSidebar;
