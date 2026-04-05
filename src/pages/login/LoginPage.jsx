import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/Authen";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/authService";
export default function LoginModal({
  showWarning = false, // Hiển thị warning đỏ từ trang khác (ví dụ quyền)
  warningMsg = "", // Nội dung warning động
  onClose,
  openForget,
  openRegister,
  successMsg, // Thông báo xanh từ đăng ký thành công
}) {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
  const { login, api } = useAuth();

  // default warning từ trang cha
  const getDefaultWarning = () => ({
    show: showWarning,
    msg: warningMsg,
  });

  // Thông báo đỏ (warning) nội bộ // warning hiện tại (có thể bị ghi đè)
  const [warning, setWarning] = useState(getDefaultWarning());

  // Thông báo xanh nội bộ
  const [internalSuccess, setInternalSuccess] = useState(successMsg || "");

  // Sync khi props đổi / mở modal
  useEffect(() => {
    setWarning(getDefaultWarning());
    // Nếu warning đỏ hiện → xanh bị reset
    if (!getDefaultWarning().show) {
      setInternalSuccess(successMsg || "");
    } else {
      setInternalSuccess("");
    }
  }, [showWarning, warningMsg, successMsg]);

  // Hàm kiểm tra Phone Real-time
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    const onlyNums = value.replace(/[^0-9]/g, "");
    setPhoneNumber(onlyNums);

    if (!onlyNums) {
      setPhoneError("Vui lòng nhập số điện thoại");
      return;
    }
    if (onlyNums.length < 10) {
      setPhoneError("Số điện thoại chưa đủ 10 số");
    } else if (onlyNums.length > 10) {
      setPhoneError("Số điện thoại không được vượt quá 10 số");
    } else {
      const vnf_regex = /^(09|03|07|08|05)[0-9]{8}$/;
      if (!vnf_regex.test(onlyNums)) {
        setPhoneError("Đầu số không hợp lệ (Phải là 09, 03, 07, 08, 05)");
      } else {
        setPhoneError("");
      }
    }
  };

  // Hàm kiểm tra Password Real-time
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!value) {
      setPasswordError("Vui lòng nhập mật khẩu");
    } else if (value.length < 6) {
      setPasswordError("Mật khẩu phải có ít nhất 6 ký tự");
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading || !phoneNumber || !password) return;

    setLoading(true);

    try {
      //fetch
      const { response, data: result } = await loginService(
        api,
        phoneNumber,
        password
      );
      //
      if (response.ok && result.success) {
        await login(
          result.data.accessToken,
          result.data.refreshToken,
          result.data.refreshTokenExpires,
          rememberMe,
        );

        // Chuyển trang theo role
        const role = result.data.role;

        if (role === "1") navigate("/dashboard");
        else if (role === "2") navigate("/store");
        else navigate("/cong-dong-cag");

        // Login thành công → reset tất cả thông báo
        setWarning({ show: false, msg: "" });
        setInternalSuccess("");
      } else {
        // Login thất bại → đỏ hiện, xanh biến mất
        setWarning({ show: true, msg: result.message || "Đăng nhập thất bại" });
        setInternalSuccess("");
        setPassword("");
      }
    } catch (error) {
      setWarning({ show: true, msg: "Không thể kết nối server" });
      setInternalSuccess("");
    } finally {
      setLoading(false);
    }
  };

  // ================= SWITCH TAB =================
  const handleOpenRegister = () => {
    setWarning(getDefaultWarning()); // luôn lấy mới từ props
    setInternalSuccess("");
    openRegister?.();
  };

  // ================= CLOSE =================
  const handleClose = () => {
    setWarning(getDefaultWarning()); // luôn đúng theo trang cha
    setInternalSuccess("");
    onClose?.();
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in p-4 font-montserrat">
      <div className="relative w-full max-w-[900px] bg-[#0B0E14] rounded-2xl border border-[#00F2EA]/30 shadow-[0_0_50px_rgba(0,242,234,0.15)] flex overflow-hidden">
        {/* Left Side */}
        <div className="hidden md:flex w-[40%] bg-[#05070A] flex-col justify-center p-8 relative border-r border-white/5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale"></div>
          <div className="relative z-10">
            <div className="mb-6">
              <span className="font-rajdhani font-bold text-4xl text-white tracking-widest block leading-none">
                CAG GUIDE
              </span>
              <span className="font-montserrat text-[10px] font-bold text-[#00F2EA] tracking-[0.4em] uppercase mt-1 block">
                Pro Ecosystem
              </span>
            </div>
            <h2 className="text-2xl font-black text-white italic mb-4 leading-tight">
              CHỌN QUÁN ĐÚNG GU
              <br />
              <span className="text-[#00F2EA]">CHIẾN GAME ĐÚNG CHỖ</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#00F2EA]/10 flex items-center justify-center text-[#00F2EA]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs font-bold">
                    Cộng Đồng Gamer
                  </p>
                  <p className="text-slate-500 text-[10px]">
                    Kết bạn, tạo team, leo rank
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#FFD700]/10 flex items-center justify-center text-[#FFD700]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-white text-xs font-bold">
                    Hệ Thống Chủ Quán
                  </p>
                  <p className="text-slate-500 text-[10px]">
                    Quản lý doanh thu, Marketing 0đ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-[60%] p-6 md:p-8 relative bg-[#0B0E14] flex flex-col justify-center">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-10"
          >
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
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {warning.show && warning.msg ? (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded text-xs text-red-400 font-bold flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
              {warning.msg}
            </div>
          ) : (
            internalSuccess && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-[12px] text-green-400 font-bold flex items-start gap-3 animate-fade-in shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                <svg
                  className="shrink-0 mt-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="leading-relaxed">{internalSuccess}</span>
              </div>
            )
          )}
                    
          <div className="flex border-b border-white/10 mb-6">
            <button className="flex-1 pb-3 text-sm font-black uppercase tracking-wider transition-colors text-[#00F2EA] border-b-2 border-[#00F2EA]">
              Đăng Nhập
            </button>
            <button
              onClick={handleOpenRegister}
              className="flex-1 pb-3 text-sm font-black uppercase tracking-wider transition-colors text-slate-500 hover:text-white"
            >
              Đăng Ký
            </button>
          </div>

          <form
            className="space-y-4 max-w-sm mx-auto w-full"
            onSubmit={handleLogin}
          >
            <div className="space-y-1">
              <label className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                Số điện thoại đăng nhập
              </label>
              <input
                className="w-full bg-[#05070A] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#00F2EA] focus:outline-none focus:shadow-[0_0_10px_rgba(0,242,234,0.2)] transition-all font-mono"
                placeholder="0912345678"
                type="text"
                value={phoneNumber}
                onChange={handlePhoneChange}
              />
              {phoneError && (
                <p className="text-[10px] text-red-500 mt-1 animate-fade-in">
                  {phoneError}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                Mật khẩu
              </label>
              <input
                className="w-full bg-[#05070A] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#00F2EA] focus:outline-none focus:shadow-[0_0_10px_rgba(0,242,234,0.2)] transition-all font-mono"
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <p className="text-[10px] text-red-500 mt-1 animate-fade-in">
                  {passwordError}
                </p>
              )}
            </div>

            <div className="flex justify-between items-center text-xs text-slate-500">
              <label className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
                <input
                  className="accent-[#00F2EA]"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Ghi nhớ đăng nhập
              </label>
              <button
                type="button"
                onClick={openForget}
                className="hover:text-white transition-colors"
              >
                Quên mật khẩu?
              </button>
            </div>

            <button
              type="submit"
              disabled={
                loading ||
                phoneError ||
                passwordError ||
                !phoneNumber ||
                !password
              }
              className="w-full bg-[#00F2EA] hover:bg-[#00d2ca] text-black font-black text-sm uppercase tracking-widest py-3 rounded-lg shadow-lg shadow-cyan-500/20 transition-all transform active:scale-95 disabled:opacity-50 mt-4"
            >
              {loading ? "ĐANG XÁC THỰC..." : "ĐĂNG NHẬP NGAY"}
            </button>
          </form>

          <p className="text-[9px] text-slate-600 text-center mt-4">
            Nhấn phím ESC để thoát
          </p>
        </div>
      </div>
    </div>
  );
}
