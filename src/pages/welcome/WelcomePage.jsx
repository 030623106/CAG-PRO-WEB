import { useState } from "react";
import LoginModal from "../login/LoginPage";
import Register from "../register/RegisterPage";
import Forgot from "../forgot/ForgotPassword";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/Authen";
import { Navigate } from "react-router-dom";
export default function WelcomePage() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  
  const [lastRegisterRole, setLastRegisterRole] = useState("gamer");
  const navigate = useNavigate();
  const { user } = useAuth();

  // --- PHẦN LOGIC THÊM VÀO ---
  const [successMsg, setSuccessMsg] = useState("");

  const handleOpenLogin = (username = "") => {
    setOpenRegister(false);
    setOpenForgot(false);
    
    if (username && typeof username === "string") {
      setSuccessMsg(`✅ ĐĂNG KÝ THÀNH CÔNG! Tài khoản: ${username}. Cảm ơn bạn đã sử dụng CAG GUIDE. Vui lòng đăng nhập.`);
    } else {
      setSuccessMsg(""); 
    }
    setOpenLogin(true);
  };
  // ---------------------------
  
  //LOGIC ĐÁ VĂNG KẺ ĐÃ ĐĂNG NHẬP (Auto Redirect)
  if (user) {
    const roleValue = user.userType || user.role;
    const roleNum = Number(roleValue);

    if (roleNum === 1) return <Navigate to="/dashboard" replace />;
    else if (roleNum === 2) return <Navigate to="/store" replace />;
    else return <Navigate to="/cong-dong-cag" replace />;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-[#0B0E14] overflow-hidden flex flex-col items-center justify-end md:justify-center relative">
      {/*WElcome background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/60 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img
          alt="Cinematic Background"
          className="w-full h-full object-cover animate-[zoom-slow_20s_infinite_alternate]"
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
        />
      </div>

      {/*Header */}
      <div className="relative z-20 w-full max-w-md px-6 pb-12 md:pb-0 flex flex-col items-center text-center">
        <div className="mb-12 animate-fade-in">
          <div className="w-20 h-20 bg-[#00F2EA] skew-x-[-10deg] flex items-center justify-center shadow-[0_0_40px_rgba(0,242,234,0.6)] mx-auto mb-6">
            <span className="font-rajdhani font-black text-[#0B0E14] text-5xl skew-x-[10deg]">
              C
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter mb-2 font-rajdhani drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            CAG{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F2EA] to-blue-500">
              GUIDE
            </span>
          </h1>
          <div className="h-1 w-24 bg-[#FFD700] mx-auto mb-4 rounded-full shadow-[0_0_10px_#FFD700]"></div>
          <p className="text-slate-300 text-xs md:text-sm font-bold uppercase tracking-[0.15em] leading-relaxed max-w-[280px] md:max-w-none mx-auto">
            CHỌN QUÁN ĐÚNG GU <br />
            <span className="text-[#FFD700]">CHIẾN GAME ĐÚNG CHỖ</span>
          </p>
        </div>

        {/*Button*/}
        <div
          className="w-full space-y-4 animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            onClick={() => setOpenLogin(true)}
            className="w-full bg-gradient-to-r from-[#FFD700] to-[#E5C100] hover:to-[#FFD700] text-black font-black text-sm uppercase tracking-widest py-4 rounded-xl shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group"
          >
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
              className="group-hover:translate-x-1 transition-transform"
            >
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              <polyline points="10 17 15 12 10 7"></polyline>
              <line x1="15" y1="12" x2="3" y2="12"></line>
            </svg>
            Đăng Nhập Hội Viên
          </button>

          <button
            onClick={() => setOpenRegister(true)}
            className="w-full bg-transparent border border-white/30 hover:border-white text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            Đăng Ký Mới
          </button>

          <div className="pt-4">
            <button
              onClick={() => navigate("/cong-dong-cag")}
              className="text-slate-400 hover:text-[#00F2EA] text-[11px] font-bold uppercase tracking-widest flex items-center justify-center gap-1 mx-auto transition-colors group"
            >
              Bỏ qua, tôi muốn tham quan App trước
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="group-hover:translate-x-1 transition-transform"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
        {/*Footer */}
        <div className="absolute bottom-4 text-[8px] text-slate-600 uppercase tracking-widest">
          {" "}
          Powered by CAG Pro Ecosystem
        </div>
      </div>

{openLogin && (
        <LoginModal
          showWarning={false}
          warningMsg = ""
          successMsg={successMsg} // Truyền xuống LoginModal
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
          role={lastRegisterRole}
          onRoleChange={setLastRegisterRole}
          showWarning={false}
          warningMsg = ""
          onClose={() => setOpenRegister(false)}
          openLogin={handleOpenLogin} // Thay đổi ở đây
        />
      )}
      {openForgot && (
        <Forgot
          showWarning={false}
          warningMsg = ""
          openLogin={() => handleOpenLogin()} // Thay đổi ở đây
          onClose={() => setOpenForgot(false)}
          openRegister={() => {
            setOpenForgot(false);
            setOpenRegister(true);
          }}
        />
      )}
    </div>
  );
}
