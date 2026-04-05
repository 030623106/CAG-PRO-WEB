// src/components/ChatWidget/OwnerChatWidget.jsx
import React, { useState } from "react";

const OwnerChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Xin chào chủ quán! 🏪\n\nTôi có thể giúp gì cho quán của bạn hôm nay? Quản lý doanh thu, nhân viên hay khuyến mãi?",
      sender: "ai",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickQuestions = [
    { icon: "📊", text: "Doanh thu hôm nay" },
    { icon: "👥", text: "Quản lý nhân viên" },
    { icon: "🎁", text: "Tạo khuyến mãi" },
    { icon: "📈", text: "Báo cáo tháng" },
    { icon: "🖥️", text: "Tình trạng máy" },
  ];

  return (
    <>
      {/* Nút floating - Màu vàng cam */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 md:bottom-6 right-4 md:right-6 w-14 h-14 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all z-50 group hover:scale-110 bg-gradient-to-r from-yellow-600 to-orange-600"
      >
        <div className="relative">
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-black"
            >
              <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
              <path d="m4.93 10.93 1.41 1.41"></path>
              <path d="M12 18v4"></path>
              <path d="m17.66 12.34 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          ) : (
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
              className="text-black"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          )}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
          )}
        </div>
      </button>

      {/* Khung chat - Màu vàng cam cho header */}
      {isOpen && (
        <div className="fixed bottom-36 md:bottom-24 right-4 md:right-6 w-[90vw] md:w-96 bg-[#0B0E14] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50 h-[60vh] md:h-[600px] animate-fade-in font-montserrat">
          
          {/* Header - Gradient vàng cam */}
          <div className="p-4 bg-gradient-to-r from-yellow-600 to-orange-600 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
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
                  className="text-white"
                >
                  <path d="M3 10L12 2L21 10V20C21 20.6 20.6 21 20 21H4C3.4 21 3 20.6 3 20V10Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-black text-white text-sm uppercase tracking-wide font-rajdhani">
                  OWNER CONCIERGE
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-white/80">
                    Hỗ trợ quản lý quán
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#0B0E14]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-yellow-600 to-orange-600 text-white rounded-br-none"
                      : "bg-[#131720] text-slate-200 rounded-bl-none border border-white/10"
                  }`}
                >
                  {msg.text.split("\n").map((line, i) => (
                    <p key={i} className="mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="px-4 py-3 bg-[#131720] border-t border-white/5 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2">
            {quickQuestions.map((q, index) => (
              <button
                key={index}
                className="text-[10px] font-bold text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full transition-all hover:text-white hover:border-yellow-500 hover:bg-yellow-500/10"
              >
                {q.icon} {q.text}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-[#131720] border-t border-white/5">
            <div className="flex gap-2">
              <input
                placeholder="Nhập câu hỏi về quản lý quán..."
                className="flex-1 bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all placeholder-slate-600 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button className="text-black rounded-xl p-3 transition-colors shadow-lg bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500">
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
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OwnerChatWidget;