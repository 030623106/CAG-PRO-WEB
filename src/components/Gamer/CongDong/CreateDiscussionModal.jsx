import React from 'react';

const CreateDiscussionModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    // 1. Lớp bọc ngoài: Dùng "absolute" để KHÔNG đè lên sidebar (chỉ nằm gọn trong phần nội dung chính)
    <div className="absolute inset-0 z-[9999] bg-black/70 backdrop-blur-sm rounded-xl">
      
      {/* 2. Thẻ hỗ trợ CĂN GIỮA: Dùng "sticky" và "flex items-center justify-center" để luôn nằm giữa màn hình khi cuộn */}
      <div className="sticky top-0 left-0 w-full h-full min-h-[100vh] flex items-center justify-center p-4">
        
        {/* Container chính của Form */}
        <div className="bg-slate-900 w-full max-w-lg rounded-2xl border border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
          
          {/* Header */}
          <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center shrink-0">
            <h3 className="font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
              Tạo Thảo Luận Mới
            </h3>
            <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors">x</button>
          </div>

          {/* Nội dung chính: Thêm "overflow-y-auto" để hiện THANH CUỘN nếu màn hình quá nhỏ */}
          <div className="p-6 overflow-y-auto custom-scrollbar">
            
            <div className="bg-slate-800/50 p-3 rounded mb-4 border border-slate-700">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-slate-400 uppercase">Quy tắc đăng bài</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                <li>Nội dung văn minh, lịch sự.</li>
                <li>Không spam, không quảng cáo trái phép.</li>
                <li className="text-yellow-500 font-bold">Để tối ưu tốc độ, bài thảo luận không hỗ trợ đính kèm hình ảnh.</li>
              </ul>
            </div>
            
            <textarea 
              className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white h-40 focus:border-cyan-500 focus:outline-none transition-all text-sm mb-2" 
              placeholder="Bạn đang nghĩ gì? Chia sẻ kinh nghiệm, hỏi đáp về game, gear..."
            ></textarea>
            
            <div className="flex justify-between items-center text-xs text-slate-500 mb-4">
              <span>0 ký tự</span>
            </div>
            
            <div className="flex justify-end gap-2">
              <button onClick={onClose} className="px-4 py-2 text-slate-400 text-sm font-bold hover:text-white transition-colors">
                Hủy
              </button>
              <button className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold px-6 py-2 rounded-lg shadow-lg transition-all">
                Đăng Bài
              </button>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CreateDiscussionModal;