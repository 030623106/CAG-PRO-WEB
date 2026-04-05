import React, { useState, useEffect } from "react";

const ReviewModal = ({ isOpen, onClose }) => {
  // State cho các chỉ số review
  const [ratings, setRatings] = useState({
    config: 5,
    space: 4,
    service: 4,
    price: 4,
  });
  const [content, setContent] = useState("");

  // Tính điểm tổng kết dựa trên trọng số (%)
  const [totalScore, setTotalScore] = useState(4.4);

  useEffect(() => {
    const score =
      ratings.config * 0.4 +
      ratings.space * 0.3 +
      ratings.service * 0.2 +
      ratings.price * 0.1;
    setTotalScore(score.toFixed(1));
  }, [ratings]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 lg:pl-[273px] pointer-events-none">
      <div className="bg-slate-900 w-full max-w-[512px] rounded-2xl border border-slate-700 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col overflow-y-auto pointer-events-auto">
        {/* Header */}
        <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center sticky top-0 z-10">
          <h3 className="font-bold text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            VIẾT REVIEW & NHẬN HOA HỒNG
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors text-lg leading-none"
          >
            x
          </button>
        </div>

        <div className="p-6">
          {/* Verified Session Data */}
          <div className="bg-gradient-to-r from-green-900/40 to-slate-900 border border-green-700/30 text-green-400 text-xs p-3 rounded mb-4">
            <div className="flex items-center gap-2 font-bold mb-1 uppercase tracking-wider">
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
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              VERIFIED SESSION DATA
            </div>
            <div className="grid grid-cols-2 gap-2 mt-2 text-slate-300">
              <div>
                <span className="text-slate-500">Địa điểm:</span>{" "}
                <b className="text-white">Flash Gaming Center</b>
              </div>
              <div>
                <span className="text-slate-500">Game:</span>{" "}
                <b className="text-white">Black Myth: Wukong</b>
              </div>
              <div>
                <span className="text-slate-500">Thời gian:</span>{" "}
                <b className="text-white">180 phút</b>
              </div>
              <div>
                <span className="text-slate-500">Máy:</span>{" "}
                <b className="text-white">VIP-05</b>
              </div>
              <div className="col-span-2 text-[10px] font-mono bg-black/30 p-1 rounded border border-white/10 mt-1 uppercase">
                SPEC: RTX 4090 - i9 13900K - RAM 64GB
              </div>
            </div>
          </div>

          {/* Ratings Grid */}
          <div className="space-y-4 mb-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Cấu hình (40%)", key: "config" },
                { label: "Không gian (30%)", key: "space" },
                { label: "Phục vụ (20%)", key: "service" },
                { label: "Giá cả (10%)", key: "price" },
              ].map((item) => (
                <div
                  key={item.key}
                  className="bg-slate-800 p-3 rounded border border-slate-700"
                >
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-400 font-bold uppercase">
                      {item.label}
                    </span>
                    <span className="text-cyan-400 font-bold">
                      {ratings[item.key]}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="0.5"
                    value={ratings[item.key]}
                    onChange={(e) =>
                      setRatings({
                        ...ratings,
                        [item.key]: parseFloat(e.target.value),
                      })
                    }
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>
              ))}
            </div>

            {/* Total Score Display */}
            <div className="flex justify-between items-center px-2">
              <span className="text-xs text-slate-500">
                Điểm tổng kết dự kiến:
              </span>
              <span className="text-2xl font-black text-yellow-400">
                {totalScore}{" "}
                <span className="text-sm font-normal text-slate-500">
                  / 5.0
                </span>
              </span>
            </div>

            {/* Textarea */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white h-32 focus:border-cyan-500 focus:outline-none transition-all text-sm"
              placeholder="Review chân thực về máy, gear, nhiệt độ... (Tối thiểu 50 ký tự để được duyệt)"
            ></textarea>

            <div className="flex justify-between items-center text-xs text-slate-500">
              <span>Quy tắc: Không thô tục, không chính trị.</span>
              <span
                className={
                  content.length < 50 ? "text-red-400" : "text-green-400"
                }
              >
                {content.length}/50 ký tự
              </span>
            </div>
          </div>

          {/* Benefits Info */}
          <div className="bg-yellow-900/10 border border-yellow-600/30 p-3 rounded mb-4 text-[11px] text-slate-300">
            <strong className="text-yellow-500 block mb-1">
              QUYỀN LỢI REVIEWER:
            </strong>
            Hệ thống tạo mã Coupon riêng. Bạn nhận <b>5% hoa hồng</b> mỗi khi có
            người dùng mã của bạn đặt máy.
          </div>

          <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 rounded-lg shadow-lg transition-all transform hover:scale-[1.02]">
            ĐĂNG BÀI (KIỂM DUYỆT TỰ ĐỘNG)
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
