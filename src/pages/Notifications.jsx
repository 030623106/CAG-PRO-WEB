import React, { useState } from "react";

// Thêm prop `role` vào component, mặc định là 'OWNER' nếu không truyền vào
const Notification = ({ role = "OWNER" }) => {
  const [activeTab, setActiveTab] = useState("form");

  // State cho phần Gửi thông báo
  const [title, setTitle] = useState("");
  const [type, setType] = useState("INFO");
  const [recipient, setRecipient] = useState("ALL");
  const [content, setContent] = useState("");
  
  const [history, setHistory] = useState([
    {
      title: "Khuyến mãi 50% giờ chơi",
      type: "PROMO",
      recipient: "ALL",
      content: "Nhân dịp khai trương cơ sở mới, giảm 50% giờ chơi cho tất cả hội viên tại CAG Cyber Cầu Giấy.",
      time: "08:55:35 11/4/2026",
    },
    {
      title: "Bảo trì hệ thống",
      type: "WARNING",
      recipient: "ALL",
      content: "Hệ thống nạp tiền sẽ bảo trì từ 2h-4h sáng mai. Mong quý khách thông cảm.",
      time: "09:55:35 10/4/2026",
    },
  ]);

  // State cho phần Cấu hình sinh nhật (Chỉ Admin dùng)
  const [isAutoBirthdayEnabled, setIsAutoBirthdayEnabled] = useState(true);
  const [birthdayMessage, setBirthdayMessage] = useState(
    "Chúc mừng sinh nhật {name}! CAG tặng bạn 50,000 VNĐ vào tài khoản để chiến game thả ga. Chúc bạn một ngày sinh nhật vui vẻ!"
  );
  const [applyGamer, setApplyGamer] = useState(true);
  const [applyOwner, setApplyOwner] = useState(true);

  // Xử lý Gửi thông báo mới
  const handleSubmitNotification = (e) => {
    e.preventDefault();

    // Nếu là Owner, ép cứng đối tượng nhận là GAMER. Nếu Admin thì lấy theo state recipient.
    const finalRecipient = role === "OWNER" ? "GAMER" : recipient;

    const newNoti = {
      title,
      type,
      recipient: finalRecipient,
      content,
      time:
        new Date().toLocaleTimeString("vi-VN") +
        " " +
        new Date().toLocaleDateString("vi-VN"),
    };

    setHistory([newNoti, ...history]);
    console.log("Thông báo mới:", newNoti);
    alert("Thông báo đã được gửi thành công!");

    // Reset form
    setTitle("");
    setContent("");
    setType("INFO");
    setRecipient("ALL");
  };

  const handleSaveBirthdayConfig = (e) => {
    e.preventDefault();
    console.log("Cấu hình sinh nhật:", { isAutoBirthdayEnabled, birthdayMessage, applyGamer, applyOwner });
    alert("Lưu cấu hình sinh nhật thành công!");
  };

  return (
    <div className="w-full h-full">
      <div className="p-6 max-w-6xl mx-auto">
        
        {/* HEADER: Thay đổi text dựa vào Role và Tab */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">QUẢN LÝ THÔNG BÁO</h1>
          <p className="text-slate-400">
            {role === "ADMIN" 
              ? (activeTab === "birthday" ? "Gửi thông báo toàn hệ thống và cấu hình tự động." : "Gửi thông báo toàn hệ thống.") 
              : "Gửi thông báo khuyến mãi, chăm sóc khách hàng cho hội viên của bạn."}
          </p>
        </div>

        {/* TABS NAVIGATION */}
        <div className="flex space-x-4 mb-6 border-b border-slate-700">
          <button
            onClick={() => setActiveTab("form")}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === "form" ? "text-cyan-400 border-b-2 border-cyan-400" : "text-slate-400 hover:text-white"
            }`}
          >
            Gửi Thông Báo Mới
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`pb-3 px-4 font-medium transition-colors ${
              activeTab === "history" ? "text-cyan-400 border-b-2 border-cyan-400" : "text-slate-400 hover:text-white"
            }`}
          >
            Lịch Sử Gửi
          </button>
          
          {/* PHÂN QUYỀN: Chỉ ADMIN mới thấy Tab Cấu Hình Sinh Nhật */}
          {role === "ADMIN" && (
            <button
              onClick={() => setActiveTab("birthday")}
              className={`pb-3 px-4 font-medium transition-colors ${
                activeTab === "birthday" ? "text-cyan-400 border-b-2 border-cyan-400" : "text-slate-400 hover:text-white"
              }`}
            >
              Cấu Hình Sinh Nhật
            </button>
          )}
        </div>

        {/* TAB CONTENT */}
        {activeTab === "form" ? (
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
            <form className="space-y-6" onSubmit={handleSubmitNotification}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Tiêu đề thông báo</label>
                  <input
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
                    placeholder="VD: Khuyến mãi x2 tài khoản..."
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Loại thông báo</label>
                  <select
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value="INFO">Thông tin chung</option>
                    <option value="PROMO">Khuyến mãi / Ưu đãi</option>
                    <option value="WARNING">Cảnh báo / Bảo trì</option>
                  </select>
                </div>
              </div>
              
              {/* PHÂN QUYỀN GIAO DIỆN Ở ĐÂY */}
              {role === "ADMIN" ? (
                // Nếu là Admin thì hiện ô chọn đối tượng nhận
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Đối tượng nhận</label>
                  <select 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  >
                    <option value="ALL">Tất cả mọi người</option>
                    <option value="GAMER">Chỉ Gamer</option>
                    <option value="OWNER">Chỉ Chủ Phòng Máy (Owner)</option>
                  </select>
                </div>
              ) : (
                // Nếu là Owner thì hiện dòng lưu ý
                <div className="bg-cyan-900/20 border border-cyan-800/50 rounded-lg p-4 text-sm text-cyan-200">
                  <span className="font-bold">Lưu ý:</span> Thông báo này sẽ chỉ
                  được gửi đến các Gamer là hội viên của phòng máy bạn.
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nội dung chi tiết</label>
                <textarea
                  rows="5"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 resize-none"
                  placeholder="Nhập nội dung thông báo..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-lg font-medium transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path>
                  </svg>
                  Gửi Thông Báo
                </button>
              </div>
            </form>
          </div>
        ) : activeTab === "history" ? (
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
            <div className="space-y-4">
              {history.length === 0 ? (
                <p className="text-slate-400 text-center py-4">Chưa có thông báo nào được gửi.</p>
              ) : (
                history.map((item, index) => (
                  <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider border 
                          ${item.type === 'INFO' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 
                            item.type === 'PROMO' ? 'bg-orange-500/20 text-orange-400 border-orange-500/30' : 
                            'bg-red-500/20 text-red-400 border-red-500/30'}`}
                        >
                          {item.type}
                        </span>
                        <h3 className="text-white font-medium">{item.title}</h3>
                      </div>
                      <p className="text-sm text-slate-400 line-clamp-1">{item.content}</p>
                      <div className="text-xs text-slate-500 mt-2 flex items-center gap-3">
                        <span>Gửi tới: {
                          item.recipient === 'ALL' ? 'Tất cả' : 
                          item.recipient === 'GAMER' ? 'Gamer' : 'Chủ phòng máy'
                        }</span>
                        <span>•</span>
                        <span>{item.time}</span>
                      </div>
                    </div>
                    <button className="text-sm text-cyan-400 hover:text-cyan-300 whitespace-nowrap">Xem chi tiết</button>
                  </div>
                ))
              )}
            </div>
          </div>
        ) : (
          /* TAB CẤU HÌNH SINH NHẬT - Chỉ render khi activeTab === 'birthday' (và do phân quyền ở trên, Owner sẽ không bao giờ bấm vào được tab này) */
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 p-6">
             {/* ... (Toàn bộ Form Cấu hình sinh nhật giữ nguyên như cũ) ... */}
            <form className="space-y-6" onSubmit={handleSaveBirthdayConfig}>
              <div className="flex items-center justify-between bg-slate-900 p-4 rounded-lg border border-slate-700">
                <div>
                  <h3 className="text-white font-medium mb-1">Kích hoạt chúc mừng sinh nhật tự động</h3>
                  <p className="text-sm text-slate-400">Hệ thống sẽ tự động gửi thông báo và quà tặng vào ngày sinh nhật của user.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    className="sr-only peer" 
                    type="checkbox" 
                    checked={isAutoBirthdayEnabled}
                    onChange={(e) => setIsAutoBirthdayEnabled(e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                </label>
              </div>
              
              <div className={`transition-opacity ${isAutoBirthdayEnabled ? 'opacity-100' : 'opacity-50 pointer-events-none'}`}>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">Mẫu tin nhắn chúc mừng</label>
                  <textarea 
                    rows="4" 
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500 resize-none"
                    value={birthdayMessage}
                    onChange={(e) => setBirthdayMessage(e.target.value)}
                  />
                  <p class="text-xs text-slate-500 mt-2">Sử dụng <code class="text-cyan-400 bg-slate-900 px-1 rounded">{"{name}"}</code> để thay thế bằng tên người dùng.</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Đối tượng áp dụng</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                      <input 
                        className="rounded border-slate-600 text-cyan-500 focus:ring-cyan-500 bg-slate-900" 
                        type="checkbox" 
                        checked={applyGamer}
                        onChange={(e) => setApplyGamer(e.target.checked)}
                      />
                      Gamer
                    </label>
                    <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
                      <input 
                        className="rounded border-slate-600 text-cyan-500 focus:ring-cyan-500 bg-slate-900" 
                        type="checkbox" 
                        checked={applyOwner}
                        onChange={(e) => setApplyOwner(e.target.checked)}
                      />
                      Chủ Phòng Máy (Owner)
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-slate-700">
                <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
                  Lưu Cấu Hình
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;