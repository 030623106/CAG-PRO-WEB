import React, { useState } from "react";

const BookingModal = ({ isOpen, onClose, data }) => {
  const [hours, setHours] = useState(2);

  if (!isOpen || !data) return null;

  const originalPrice = data.pricePerHour * hours;
  const discountedPrice = originalPrice * 0.9;

  const formatMoney = (amount) => {
    return new Intl.NumberFormat("vi-VN").format(amount) + " đ";
  };

  return (
    <div className="absolute inset-0 z-[9999] bg-black/70 backdrop-blur-sm animate-fade-in">
      
      <div className="sticky top-0 left-0 w-full h-full min-h-[100vh] flex items-center justify-center p-4">
        
        {/* ĐÃ XÓA: flex flex-col max-h-[90vh] */}
        <div className="bg-slate-900 w-full max-w-md rounded-2xl border border-green-500/50 shadow-[0_0_50px_rgba(34,197,94,0.1)] overflow-hidden">
          
          <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center">
            <h3 className="font-black text-white flex items-center gap-2 italic text-lg">
              <span className="text-green-500">BOOKING</span> CONFIRMATION
            </h3>
            <button onClick={onClose} className="text-slate-400 hover:text-white">x</button>
          </div>

          {/* ĐÃ XÓA: overflow-y-auto flex-1 custom-scrollbar */}
          <div className="p-6 space-y-4">
            
            <div className="flex items-center gap-3 bg-slate-800 p-3 rounded-xl border border-slate-700">
              <img className="w-12 h-12 rounded-full border-2 border-slate-600 object-cover" src={data.authorAvatar} alt={data.authorName} />
              <div>
                <p className="text-[10px] text-slate-400 uppercase font-bold">Theo gợi ý của</p>
                <p className="text-white font-bold">{data.authorName}</p>
                <p className="text-xs text-yellow-500">Mã giảm giá: <span className="font-mono bg-yellow-900/30 px-1 rounded border border-yellow-700">CAG10</span></p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
                <span className="text-slate-400">Địa điểm:</span>
                <span className="text-white font-bold">{data.location}</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
                <span className="text-slate-400">Máy chọn:</span>
                <span className="text-cyan-400 font-bold">Máy VIP 20</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-2">
                <span className="text-slate-400">Cấu hình:</span>
                <span className="text-slate-200 text-xs">RTX 4060 - 240Hz</span>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl">
              <div className="flex justify-between mb-2">
                <span className="text-xs font-bold text-slate-400 uppercase">Thời gian chơi</span>
                <span className="text-white font-bold">{hours} Giờ</span>
              </div>
              <input 
                min="1" 
                max="10" 
                step="0.5" 
                className="w-full accent-green-500 cursor-pointer" 
                type="range" 
                value={hours}
                onChange={(e) => setHours(parseFloat(e.target.value))}
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>1h</span>
                <span>10h</span>
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="text-xs text-slate-400">
                <p>Đơn giá: {formatMoney(data.pricePerHour)}/h</p>
                <p className="text-green-400">Giảm giá: -10%</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-500 line-through">{formatMoney(originalPrice)}</p>
                <p className="text-2xl font-black text-white">{formatMoney(discountedPrice)}</p>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-bold py-3 rounded-xl shadow-lg transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              XÁC NHẬN ĐẶT & THANH TOÁN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;