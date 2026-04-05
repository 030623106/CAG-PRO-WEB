// src/components/ChatWidget/ChatWidget.jsx
import React, { useState } from "react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages] = useState([
    {
      id: 1,
      text: "Yo Khách Vãng Lai! 🎮\n\nCần tìm quán chiến *Wukong* hay fix lỗi game? Hỏi CAG AI ngay, data chuẩn 100%!",
      sender: "ai",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const quickQuestions = [
    { icon: "🐵", text: "Quán chơi Wukong" },
    { icon: "📍", text: "Tìm quán rẻ" },
    { icon: "🛠", text: "Máy bị màn hình xanh" },
  ];

  return (
    <>
      {/* Nút floating */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 md:bottom-6 right-4 md:right-6 w-14 h-14 rounded-full shadow-[0_0_20px_rgba(0,0,0,0.5)] flex items-center justify-center transition-all z-50 group hover:scale-110 bg-gradient-to-r from-[#00F2EA] to-blue-600"
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

      {/* Khung chat */}
      {isOpen && (
        <div className="fixed bottom-36 md:bottom-24 right-4 md:right-6 w-[90vw] md:w-96 bg-[#0B0E14] border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden z-50 h-[60vh] md:h-[600px] animate-fade-in font-montserrat">
          {/* Header */}
          <div className="p-4 bg-[#131720] border-b border-white/5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-black bg-gradient-to-r from-[#00F2EA] to-blue-600">
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
                  <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
                  <path d="m4.93 10.93 1.41 1.41"></path>
                  <path d="M12 18v4"></path>
                  <path d="m17.66 12.34 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
              </div>
              <div>
                <h3 className="font-black text-white text-sm uppercase tracking-wide font-rajdhani">
                  CAG CONCIERGE
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-slate-400">
                    Powered by Gemini
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
                      ? "bg-[#00F2EA] text-[#0B0E14] rounded-br-none"
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

          {/* Quick Questions  */}
          <div className="px-4 py-3 bg-[#131720] border-t border-white/5 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-2">
            {quickQuestions.map((q, index) => (
              <button
                key={index}
                className="text-[10px] font-bold text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full transition-all hover:text-white hover:border-[#00F2EA] hover:bg-[#00F2EA]/10"
              >
                {q.icon} {q.text}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 bg-[#131720] border-t border-white/5">
            <div className="flex gap-2">
              <input
                placeholder="Nhập câu hỏi của bạn..."
                className="flex-1 bg-black/50 border border-white/10 text-white rounded-xl px-4 py-3 text-sm focus:outline-none transition-all placeholder-slate-600 focus:border-[#00F2EA] focus:ring-1 focus:ring-[#00F2EA]"
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button className="text-black rounded-xl p-3 disabled:opacity-50 transition-colors shadow-lg bg-[#00F2EA] hover:bg-[#00e2da]">
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

export default ChatWidget;