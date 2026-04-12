import React from 'react';

// Nhận thêm prop onAction từ component cha
const NetCard = ({ net, onAction }) => {

  // Hàm xử lý khi bấm nút DUYỆT QUÁN
  const handleApprove = () => {
    window.alert(`Đã duyệt quán ID: ${net.id}`);
    if (onAction) onAction(net.id);
  };

  // Hàm xử lý khi bấm nút YÊU CẦU SỬA
  const handleRequestEdit = () => {
    window.alert(`Đã yêu cầu cập nhật quán ID: ${net.id}`);
    if (onAction) onAction(net.id);
  };

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700 p-6 shadow-2xl flex flex-col md:flex-row gap-6 font-montserrat">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl font-bold text-white font-rajdhani uppercase">{net.name}</h3>
          <span className={`px-2 py-1 rounded text-xs font-bold border ${net.statusColor}`}>
            {net.status}
          </span>
        </div>
        <p className="text-slate-400 text-sm mb-4">{net.address}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
            <div className="text-xs text-slate-500 mb-1">Tổng máy</div>
            <div className="text-lg font-bold text-white">{net.machines}</div>
          </div>
          <div className="bg-slate-800 p-3 rounded-lg border border-slate-700">
            <div className="text-xs text-slate-500 mb-1">Phần mềm</div>
            <div className="text-lg font-bold text-[#00F2EA]">{net.software}</div>
          </div>
        </div>
        {net.note && (
          <div className="bg-amber-900/20 border border-amber-700/50 p-3 rounded-lg text-amber-400 text-sm">
            <span className="font-bold">Ghi chú:</span> {net.note}
          </div>
        )}
      </div>
      
      {/* Gắn sự kiện onClick vào các nút */}
      <div className="flex flex-col gap-3 justify-center md:w-40 shrink-0">
        <button 
          onClick={handleApprove}
          className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg text-sm transition-colors"
        >
          DUYỆT QUÁN
        </button>
        <button 
          onClick={handleRequestEdit}
          className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-lg text-sm transition-colors"
        >
          YÊU CẦU SỬA
        </button>
      </div>
    </div>
  );
};

export default NetCard;