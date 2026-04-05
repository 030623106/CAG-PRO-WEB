// src/pages/register/RegisterPage.jsx
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/Authen";
import { registerService } from "../../services/registerService";
import {
  getProvinceService,
  getDistrictService,
} from "../../services/addressService";
export default function Register({
  role: initialRole,
  onRoleChange,
  onClose,
  openLogin,
  showWarning = false, // có hiển thị warning không
  warningMsg = "", // nội dung warning
}) {
  const [type, setType] = useState(initialRole || "gamer");
  const [agree, setAgree] = useState(false);
  const { api } = useAuth();
  const [countdown, setCountdown] = useState(0);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  //address
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
  const loadProvinces = async () => {
    const { data } = await getProvinceService();
    setProvinces(data);
  };

  loadProvinces();
}, []);

  // form
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    province: "",
    commune: "",
    address: "",
  });

  const [warning, setWarning] = useState({
    show: showWarning,
    msg: warningMsg,
  });

  useEffect(() => {
    setWarning({ show: showWarning, msg: warningMsg });
  }, [showWarning, warningMsg]);

  const handleTypeChange = (newType) => {
    setType(newType);
    onRoleChange?.(newType);
  };

  const [otpMessage, setOtpMessage] = useState(""); // để hiển thị OTP gửi thành công

  // Xử lý realTime khi nhập
  const [formErrors, setFormErrors] = useState({
    Commune: [],
    Email: [],
    FullName: [],
    Password: [],
    Province: [],
    Username: [],
    PhoneNumber: [],
    AddressDetail: [],
    ConfirmPassword: [],
  });

  //Validate realtime
  const validateField = (name, value) => {
    let errors = [];

    switch (name) {
      case "Username":
        if (!value) errors.push("Tên tài khoản không được để trống");
        else if (value.length < 3)
          errors.push("Tên tài khoản phải ít nhất 3 ký tự");
        break;
      case "Email":
        if (!value) errors.push("Email không được để trống");
        else if (!/\S+@\S+\.\S+/.test(value)) errors.push("Email không hợp lệ");
        break;
      case "FullName":
        if (!value) errors.push("Họ tên không được để trống");
        break;
      case "Password":
        if (!value) errors.push("Mật khẩu không được để trống");
        else if (value.length < 6 || value.length > 50)
          errors.push("Mật khẩu phải có ít nhất 6 ký tự và không quá 50 ký tự");
        break;
      case "ConfirmPassword":
        if (value !== form.password)
          errors.push("Vui lòng xác nhận lại mật khẩu");
        break;
      case "PhoneNumber":
        if (!value) errors.push("Số điện thoại là bắt buộc");
        else if (!/^\d{9,11}$/.test(value))
          errors.push("Số điện thoại không hợp lệ");
        break;
      case "Province":
        if (!value) errors.push("Thành phố không được để trống");
        break;
      case "Commune":
        if (!value) errors.push("Xã không được để trống");
        break;
      case "AddressDetail":
        if (!value) errors.push("Địa chỉ chi tiết không được để trống");
        break;
      default:
        break;
    }

    setFormErrors((prev) => ({ ...prev, [name]: errors }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };
  const handleSendOtp = () => {
    setShowOtpInput(true);
    setCountdown(60);
    setOtpSent(true); // thêm dòng này
    setOtpMessage(`Mã OTP đã được gửi tới email: ${form.email}`);

  
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kiểm tra các trường bắt buộc
    if (!agree) {
      alert("Bạn phải đồng ý với Điều Khoản Sử Dụng.");
      return;
    }

    // Kiểm tra Province & Commune
    let newErrors = {};
    if (!form.province) newErrors.Province = ["Thành phố không được để trống"];
    if (!form.commune) newErrors.Commune = ["Xã không được để trống"];

    if (Object.keys(newErrors).length > 0) {
      setFormErrors((prev) => ({ ...prev, ...newErrors }));
      return; // dừng submit
    }

    if (form.password !== form.confirmPassword) {
      alert("Mật khẩu không khớp");
      return;
    }
    if (showOtpInput && otp.length < 6) {
      alert("Vui lòng nhập đầy đủ 6 số OTP");
      return;
    }

    try {
      const userTypeMap = { gamer: 4, owner: 2 };
      const payload = {
        userType: userTypeMap[type] || 1,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword,
        fullName: form.name,
        phoneNumber: form.phone,
        username: form.username || form.phone,
        province: form.province,
        commune: form.commune,
        addressDetail: form.address,
      };
      console.log("Register payload:", payload);

      const { response, data } = await registerService(api, payload);

      if (!response.ok) {
        console.log("Server Error Data:", data);
        const msg = data.message || "";
        let serverErrors = {};

        // Dựa vào message để biết lỗi thuộc về ô nào
        if (msg.includes("Số điện thoại")) {
          serverErrors.PhoneNumber = [msg];
        } else if (msg.includes("Email")) {
          serverErrors.Email = [msg];
        } else {
          // Các lỗi validation khác nếu Backend trả về object { Username: [...], ... }
          // Hoặc hiện alert nếu là lỗi hệ thống lạ
          if (typeof data === "object" && !data.message) {
            serverErrors = data;
          } else {
            alert("❌ Lỗi: " + msg);
          }
        }

        // Cập nhật state để UI hiển thị thông báo đỏ dưới input
        setFormErrors((prev) => ({
          ...prev,
          ...serverErrors,
        }));
        return;
      }

      // server trả data bên trong data.data
      const user = data.data;

      // thành công
      alert(
        `✅ ĐĂNG KÝ THÀNH CÔNG!\n\nTài khoản: ${user.username}\nHọ tên: ${user.fullName}\nEmail: ${user.email}\nSĐT: ${user.phoneNumber}\nĐịa chỉ: ${user.province} - ${user.commune} - ${user.addressdetail}`,
      );
      console.log("Register Success:", user);

      openLogin(form.phone); //openLogin
    } catch (error) {
      console.error(error);
      alert("❌ Có lỗi xảy ra khi đăng ký, vui lòng thử lại sau.");
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (initialRole) setType(initialRole);
  }, [initialRole]);

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
            onClick={onClose}
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

          {/* OTP message */}
          {otpMessage && (
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
              <span className="leading-relaxed">{otpMessage}</span>
            </div>
          )}

          {warning.show && warning.msg && !showOtpInput && (
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

          <div className="flex border-b border-white/10 mb-6">
            <button
              onClick={() => {
                openLogin?.();
              }}
              className="flex-1 pb-3 text-sm font-black uppercase tracking-wider transition-colors text-slate-500 hover:text-white"
            >
              Đăng Nhập
            </button>
            <button className="flex-1 pb-3 text-sm font-black uppercase tracking-wider transition-colors text-[#00F2EA] border-b-2 border-[#00F2EA]">
              Đăng Ký
            </button>
          </div>

          <form
            className="space-y-3 max-w-sm mx-auto w-full"
            onSubmit={handleSubmit}
          >
            <h3 className="text-xl font-black text-[#00F2EA] text-center mb-2 uppercase font-rajdhani">
              Tạo Tài Khoản Mới
            </h3>

            {/* Role Selection */}
            <div className="flex gap-2 mb-3">
              <div
                onClick={() => handleTypeChange("gamer")}
                className={`flex-1 cursor-pointer p-2 rounded border transition-all text-center ${type === "gamer" ? "bg-[#00F2EA]/10 border-[#00F2EA] text-[#00F2EA]" : "bg-transparent border-white/10 text-slate-500 hover:border-white/30"}`}
              >
                <p className="text-xs font-black uppercase">Tôi là Game Thủ</p>
              </div>
              <div
                onClick={() => handleTypeChange("owner")}
                className={`flex-1 cursor-pointer p-2 rounded border transition-all text-center ${type === "owner" ? "bg-[#FFD700]/10 border-[#FFD700] text-[#FFD700]" : "bg-transparent border-white/10 text-slate-500 hover:border-white/30"}`}
              >
                <p className="text-xs font-black uppercase">Tôi là Chủ Quán</p>
              </div>
            </div>

            {/* Full Name */}
            <div className="space-y-1">
              <label className="text-[9px] text-slate-400 font-bold uppercase">
                Họ tên *
              </label>
              <input
                name="name"
                value={form.name}
                onChange={(e) => {
                  const val = e.target.value;
                  setForm((prev) => ({ ...prev, name: val }));
                  let errors = [];
                  if (!val) errors.push("Họ tên không được để trống");
                  setFormErrors((prev) => ({ ...prev, FullName: errors }));
                }}
                placeholder="Nguyễn Văn A"
                className="w-full bg-[#05070A] border border-white/10 rounded p-2 text-white text-xs focus:border-[#00F2EA] outline-none transition-colors"
                type="text"
                required
              />
              {formErrors.FullName?.length > 0 && (
                <p className="text-red-500 text-[9px] mt-1">
                  {formErrors.FullName[0]}
                </p>
              )}
            </div>

            {/* Phone / Username */}
            <div className="space-y-1">
              <label className="text-[9px] text-slate-400 font-bold uppercase">
                Số điện thoại (Tên đăng nhập) *
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={(e) => {
                  const val = e.target.value;
                  setForm((prev) => ({ ...prev, phone: val, username: val }));
                  let errors = [];
                  if (!val) errors.push("Số điện thoại là bắt buộc");
                  else if (!/^\d{9,11}$/.test(val))
                    errors.push("Số điện thoại không hợp lệ");
                  setFormErrors((prev) => ({ ...prev, PhoneNumber: errors }));
                }}
                placeholder="0912345678"
                className="w-full bg-[#05070A] border border-white/10 rounded p-2 text-white text-xs focus:border-[#00F2EA] outline-none transition-colors font-mono"
                type="text"
                required
              />
              {formErrors.PhoneNumber?.length > 0 && (
                <p className="text-red-500 text-[9px] mt-1">
                  {formErrors.PhoneNumber[0]}
                </p>
              )}
            </div>

            <div className="space-y-1">
              <label className="text-[9px] text-slate-400 font-bold uppercase">
                Gmail *
              </label>
              <div className="flex gap-2">
                <input
                  name="email"
                  value={form.email}
                  onChange={(e) => {
                    const val = e.target.value;
                    setForm((prev) => ({ ...prev, email: val }));
                    let errors = [];
                    if (!val) errors.push("Email không được để trống");
                    else if (!/\S+@\S+\.\S+/.test(val))
                      errors.push("Email không hợp lệ");
                    setFormErrors((prev) => ({ ...prev, Email: errors }));
                  }}
                  placeholder="nguyena@gmail.com"
                  className="flex-1 bg-[#05070A] border border-white/10 rounded p-2 text-white text-xs focus:border-[#00F2EA] outline-none transition-colors"
                  type="email"
                  required
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={!form.email || countdown > 0}
                  className="bg-white/10 hover:bg-white/20 text-white px-3 rounded text-[10px] font-bold uppercase transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  {countdown > 0 ? `Chờ ${countdown}s` : "Gửi OTP"}
                </button>
              </div>
              {formErrors.Email?.length > 0 && (
                <p className="text-red-500 text-[9px] mt-1">
                  {formErrors.Email[0]}
                </p>
              )}
            </div>

            {showOtpInput && (
              <div className="space-y-1 animate-fade-in">
                <label className="text-[9px] text-[#00F2EA] font-bold uppercase">
                  Mã OTP *
                </label>
                <input
                  value={otp}
                  onChange={(e) =>
                    setOtp(e.target.value.replace(/[^0-9]/g, ""))
                  }
                  placeholder="Nhập mã 6 số từ Email"
                  maxLength="6"
                  className="w-full bg-[#00F2EA]/10 border border-[#00F2EA]/50 rounded p-2 text-white text-xs focus:border-[#00F2EA] outline-none transition-colors font-mono tracking-widest text-center"
                  type="text"
                  required
                />
              </div>
            )}

            {/* Password + Confirm */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[9px] text-slate-400 font-bold uppercase">
                  Mật khẩu *
                </label>
                <input
                  name="password"
                  value={form.password}
                  onChange={(e) => {
                    const val = e.target.value;
                    setForm((prev) => ({ ...prev, password: val }));
                    let errors = [];
                    if (!val) errors.push("Mật khẩu không được để trống");
                    else if (val.length < 6 || val.length > 50)
                      errors.push(
                        "Mật khẩu phải có ít nhất 6 ký tự và không quá 50 ký tự",
                      );
                    setFormErrors((prev) => ({ ...prev, Password: errors }));
                  }}
                  placeholder="••••••"
                  className="w-full bg-[#05070A] border border-white/10 rounded p-2 text-white text-xs focus:border-[#00F2EA] outline-none transition-colors"
                  type="password"
                  required
                />
                {formErrors.Password?.length > 0 && (
                  <p className="text-red-500 text-[9px] mt-1">
                    {formErrors.Password[0]}
                  </p>
                )}
              </div>
              <div className="space-y-1">
                <label className="text-[9px] text-slate-400 font-bold uppercase">
                  Nhập lại MK *
                </label>
                <input
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={(e) => {
                    const val = e.target.value;
                    setForm((prev) => ({ ...prev, confirmPassword: val }));
                    let errors = [];
                    if (val !== form.password)
                      errors.push("Vui lòng xác nhận lại mật khẩu");
                    setFormErrors((prev) => ({
                      ...prev,
                      ConfirmPassword: errors,
                    }));
                  }}
                  placeholder="••••••"
                  className="w-full bg-[#05070A] border border-white/10 rounded p-2 text-white text-xs focus:border-[#00F2EA] outline-none transition-colors"
                  type="password"
                  required
                />
                {formErrors.ConfirmPassword?.length > 0 && (
                  <p className="text-red-500 text-[9px] mt-1">
                    {formErrors.ConfirmPassword[0]}
                  </p>
                )}
              </div>
            </div>

            {/* Province / Commune */}
            <div className="grid grid-cols-2 gap-3">
              <select
                name="province"
                value={form.province}
                onChange={async (e) => {
                  const val = e.target.value;

                  setForm((prev) => ({ ...prev, province: val }));

                  let errors = [];
                  if (!val) errors.push("Thành phố không được để trống");
                  setFormErrors((prev) => ({ ...prev, Province: errors }));

                  if (val) {
                    const { data } = await getDistrictService(val);
                    setDistricts(data);
                  }
                }}
                className="w-full bg-[#05070A] border border-white/10 rounded p-2 text-white text-xs outline-none focus:border-[#00F2EA]"
              >
                <option value="">Chọn Thành phố</option>

                {provinces.map((p) => (
                  <option key={p.code} value={p.code}>
                    {p.name}
                  </option>
                ))}
              </select>

              {formErrors.Province?.length > 0 && (
                <p className="text-red-500 text-[9px] mt-1">
                  {formErrors.Province[0]}
                </p>
              )}

              <select
                name="commune"
                value={form.commune}
                onChange={(e) => {
                  const val = e.target.value;

                  setForm((prev) => ({ ...prev, commune: val }));

                  let errors = [];
                  if (!val) errors.push("Xã không được để trống");
                  setFormErrors((prev) => ({ ...prev, Commune: errors }));
                }}
                className="w-full bg-[#05070A] border border-white/10 rounded p-2 text-white text-xs outline-none focus:border-[#00F2EA]"
              >
                <option value="">Chọn Quận / Phường</option>

                {districts.map((d) => (
                  <option key={d.code} value={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>

              {formErrors.Commune?.length > 0 && (
                <p className="text-red-500 text-[9px] mt-1">
                  {formErrors.Commune[0]}
                </p>
              )}
            </div>

            {/* Address */}
            <div className="space-y-1">
              <input
                name="address"
                value={form.address}
                placeholder="Địa chỉ chi tiết"
                onChange={(e) => {
                  const val = e.target.value;
                  setForm((prev) => ({ ...prev, address: val }));
                  let errors = [];
                  if (!val) errors.push("Địa chỉ chi tiết không được để trống");
                  setFormErrors((prev) => ({ ...prev, AddressDetail: errors }));
                }}
                className="w-full bg-[#05070A] border border-white/10 rounded p-2 text-white text-xs focus:border-[#00F2EA] outline-none transition-colors"
                required
              />
              {formErrors.AddressDetail?.length > 0 && (
                <p className="text-red-500 text-[9px] mt-1">
                  {formErrors.AddressDetail[0]}
                </p>
              )}
            </div>

            {/* Agree Terms */}
            <div className="flex items-center gap-2 mt-4">
              <input
                id="terms"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="accent-[#00F2EA]"
                type="checkbox"
              />
              <label htmlFor="terms" className="text-[10px] text-slate-400">
                Tôi đã đọc và đồng ý tất cả các{" "}
                <span className="text-[#00F2EA] cursor-pointer hover:underline">
                  Điều Khoản Sử Dụng
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!otpSent}
              className="w-full bg-[#00F2EA] hover:bg-white text-black py-3 rounded text-xs font-black uppercase shadow-[0_0_15px_rgba(0,242,234,0.3)] transition-all transform active:scale-95 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Đăng Ký Tài Khoản
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
