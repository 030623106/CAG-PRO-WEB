import React from 'react';

const UpdateProfileModal = ({ isOpen, onClose, profileData }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-6 animate-fade-in">
      <div className="bg-[#0f172a] w-full max-w-md border border-cyan-500/30 shadow-[0_0_50px_rgba(34,211,238,0.1)] rounded-2xl overflow-hidden">
        
        {/* Modal Header */}
        <div className="bg-slate-900/50 p-4 border-b border-slate-800 flex justify-between items-center">
          <h3 className="font-black text-white text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-cyan-500"></span>
            Update Operator Data
          </h3>
          <button 
            onClick={onClose} 
            className="text-slate-500 hover:text-white text-lg leading-none transition-colors"
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          
          {/* Avatar Upload/Change */}
          <div className="flex justify-center mb-6">
            <div className="relative group cursor-pointer">
              <div className="w-20 h-20 rounded border-2 border-slate-600 overflow-hidden">
                <div className="relative overflow-hidden w-full h-full">
                  <img 
                    alt="Operator Avatar" 
                    loading="lazy" 
                    decoding="async" 
                    className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover" 
                    src="https://i.pravatar.cc/300?img=11" 
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-cyan-500/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-bold text-white uppercase">Change</span>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-1">
            <label className="text-[9px] font-bold text-slate-500 uppercase">Codename</label>
            {/* SỬA: Gắn defaultValue bằng tên thật lấy từ API */}
            <input 
              className="w-full bg-slate-950 border border-slate-700 p-2 text-white text-xs focus:border-cyan-500 focus:outline-none font-mono rounded" 
              type="text" 
              defaultValue={profileData?.fullName || ""} 
              placeholder="Nhập họ tên của bạn..."
            />
          </div>
          <div className="space-y-1">
            <label className="text-[9px] font-bold text-slate-500 uppercase">Comms (Phone)</label>
            <input 
              className="w-full bg-slate-950 border border-slate-700 p-2 text-white text-xs focus:border-cyan-500 focus:outline-none font-mono rounded " 
              type="tel" 
              defaultValue={profileData?.phoneNumber || ""} 
            />
          </div>

          {/* Action Button */}
          <button className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-black text-xs uppercase tracking-widest py-3 mt-4 shadow-lg rounded-lg transition-colors">
            Save Changes
          </button>

        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;