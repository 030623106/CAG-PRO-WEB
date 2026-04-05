import { useEffect, useState } from "react";


export default function ForgotPasswordModal({
  onClose,
  openLogin,
  openRegister,
  showWarning = false, // có hiển thị warning không
  warningMsg = "", // nội dung warning
}) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("nguyenvana@gmail.com");
  const [loading, setLoading] = useState(false);
  const [warning, setWarning] = useState({
    show: showWarning,
    msg: warningMsg,
  });

  const handleSendRequest = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(2);
    }, 1000);
  };

  useEffect(() => {
    setWarning({ show: showWarning, msg: warningMsg });
  }, [showWarning, warningMsg]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md animate-fade-in p-4 font-montserrat">
      <div className="relative w-full max-w-[900px] bg-[#0B0E14] rounded-2xl border border-[#00F2EA]/30 shadow-[0_0_50px_rgba(0,242,234,0.15)] flex overflow-hidden">
        <div className="hidden md:flex w-[40%] bg-[#05070A] flex-col justify-center p-8 relative border-r border-white/5">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale"></div>
          <div className="relative z-10 text-left">
            <div className="mb-6">
              <span className="font-rajdhani font-bold text-4xl text-white tracking-widest block leading-none">
                CAG GUIDE
              </span>
              <span className="font-montserrat text-[10px] font-bold text-[#00F2EA] tracking-[0.4em] uppercase mt-1 block">
                Pro Ecosystem
              </span>
            </div>
            <h2 className="text-2xl font-black text-white italic mb-4 leading-tight uppercase">
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

        <div className="w-full md:w-[60%] p-6 md:p-8 relative bg-[#0B0E14] flex flex-col justify-center">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-20"
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
          
          {warning.show && warning.msg && (
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
          )}

          {/* NHẬP EMAIL  */}
          {step === 1 && (
            <div className="space-y-4 max-w-sm mx-auto w-full animate-fade-in">
              <h3 className="text-xl font-black text-[#00F2EA] text-center mb-2 uppercase font-rajdhani">
                Khôi Phục Mật Khẩu
              </h3>
              <p className="text-xs text-slate-400 text-center mb-6">
                CAG GUIDE sẽ hỗ trợ bạn lấy lại quyền truy cập tài khoản một
                cách an toàn nhất.
              </p>
              <form
                onSubmit={handleSendRequest}
                className="space-y-4 text-left"
              >
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                    Email đăng ký
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#05070A] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#00F2EA] focus:outline-none focus:shadow-[0_0_10px_rgba(0,242,234,0.2)] transition-all"
                    placeholder="nguyenvana@gmail.com"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#00F2EA] hover:bg-[#00d2ca] text-black font-black text-sm uppercase tracking-widest py-3 rounded-lg shadow-lg shadow-cyan-500/20 transition-all transform active:scale-95 mt-2"
                >
                  {loading ? "ĐANG GỬI YÊU CẦU..." : "GỬI MẬT KHẨU TẠM THỜI"}
                </button>
                <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-white/10 text-center">
                  <button
                    onClick={() => setStep(3)}
                    type="button"
                    className="text-xs text-[#FFD700] hover:underline font-bold"
                  >
                    Quên Email? Dò tìm bằng Số điện thoại
                  </button>
                  <button
                    onClick={openRegister}
                    type="button"
                    className="text-xs text-slate-400 hover:text-white hover:underline"
                  >
                    Quên tất cả? Tạo tài khoản mới hoàn toàn
                  </button>
                  <button
                    onClick={openLogin}
                    type="button"
                    className="text-xs text-slate-500 hover:text-white mt-2"
                  >
                    ← Quay lại Đăng nhập
                  </button>
                </div>
              </form>
            </div>
          )}
          {/* STEP 2: ĐỔI MẬT KHẨU MỚI */}
          {step === 2 && (
            <>
              <div className="mb-4 p-3 border rounded text-xs font-bold flex items-start gap-2 bg-green-900/20 border-green-500/30 text-green-400">
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
                  className="mt-0.5 flex-shrink-0"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span className="leading-relaxed">
                  Mật khẩu tạm thời đã được gửi đến {email}
                </span>
              </div>

              {/* Phần tiêu đề và Form */}
              <div className="space-y-4 max-w-sm mx-auto w-full animate-fade-in">
                <h3 className="text-xl font-black text-[#00F2EA] text-center mb-2 uppercase font-rajdhani">
                  Khôi phục Mật Khẩu
                </h3>
                <p className="text-xs text-slate-400 text-center mb-6">
                  CAG GUIDE sẽ hỗ trợ bạn lấy lại quyền truy cập tài khoản một
                  cách an toàn nhất.
                </p>

                <form className="space-y-4 text-left w-full">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase text-[#00F2EA] font-bold tracking-wider">
                      Mật khẩu tạm thời (từ Email)
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Nhập mật khẩu tạm thời"
                      className="w-full bg-[#00F2EA]/10 border border-[#00F2EA]/50 rounded-lg p-3 text-white text-sm focus:border-[#00F2EA] focus:outline-none transition-all font-mono tracking-widest"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                      Mật khẩu mới
                    </label>
                    <input
                      required
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-[#05070A] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#00F2EA] focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                      Nhập lại mật khẩu mới
                    </label>
                    <input
                      required
                      type="password"
                      placeholder="••••••••"
                      className="w-full bg-[#05070A] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#00F2EA] focus:outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#00F2EA] hover:bg-[#00d2ca] text-black font-black text-sm uppercase tracking-widest py-3 rounded-lg shadow-lg shadow-cyan-500/20 transition-all transform active:scale-95 disabled:opacity-50 mt-2"
                  >
                    XÁC NHẬN ĐỔI MẬT KHẨU
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full text-xs text-slate-500 hover:text-white mt-4"
                  >
                    ← Quay lại
                  </button>
                </form>
              </div>
            </>
          )}
          {/* STEP 3: DÒ TÌM SỐ ĐIỆN THOẠI */}
          {step === 3 && (
            <div className="space-y-4 max-w-sm mx-auto w-full animate-fade-in">
              <h3 className="text-xl font-black text-[#00F2EA] text-center mb-2 uppercase font-rajdhani">
                Khôi phục mật khẩu
              </h3>
              <p className="text-xs text-slate-400 text-center mb-6">
                {" "}
                CAG GUIDE sẽ hỗ trợ bạn lấy lại quyền truy cập tài khoản một
                cách an toàn nhất.{" "}
              </p>
              <form className="space-y-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded text-xs text-slate-300 mb-4 leading-relaxed">
                  Nhập số điện thoại bạn đã dùng để đăng ký. Hệ thống sẽ gợi ý
                  địa chỉ Email liên kết để bạn có thể nhớ ra.{" "}
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
                    Số điện thoại
                  </label>
                  <input
                    required
                    autoComplete="off"
                    className="w-full bg-[#05070A] border border-white/10 rounded-lg p-3 text-white text-sm focus:border-[#00F2EA] focus:outline-none transition-all font-mono"
                    placeholder="0912345678"
                    type="tel"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#FFD700] hover:bg-yellow-400 text-black font-black text-sm uppercase tracking-widest py-3 rounded-lg shadow-lg shadow-yellow-500/20 transition-all transform active:scale-95 disabled:opacity-50 mt-2"
                >
                  DÒ TÌM TÀI KHOẢN
                </button>
                <button
                  onClick={() => setStep(1)}
                  type="button"
                  className="w-full text-xs text-slate-500 hover:text-white mt-4"
                >
                  ← Quay lại Khôi phục bằng Email
                </button>
              </form>
            </div>
          )}
          <p className="text-[9px] text-slate-600 text-center mt-4">
            {" "}
            Nhấn phím ESC để thoát{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
}
