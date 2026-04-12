import React from 'react';

const PostCard = ({ user, post, onAction }) => {
  if (!user || !post) return null;

  const handleApprove = () => {
    window.alert(`Đã duyệt bài viết. Trạng thái: ACTIVE`);
    if (onAction) onAction();
  };

  const handleReject = () => {
    window.alert(`Đã từ chối bài viết. Thông báo đã gửi cho user.`);
    if (onAction) onAction();
  };

  const handleBan = () => {
    window.alert('Đã KHÓA TÀI KHOẢN người dùng và chặn Device ID.');
    if (onAction) onAction();
  };

  return (
    <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col md:flex-row">
      
      {/* CỘT 1: THÔNG TIN USER */}
      <div className="bg-slate-800 p-6 md:w-64 flex flex-col items-center justify-center border-r border-slate-700 shrink-0">
        <img className="w-16 h-16 rounded-full border-2 border-slate-600 mb-3" src={user.avatar} alt={user.name} />
        <h4 className="font-bold text-white text-lg font-rajdhani uppercase ">{user.name}</h4>
        <div className="flex flex-col gap-1 items-center mt-2 w-full">
          <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">ID: {user.id}</span>
          <span className="text-[10px] bg-slate-700 px-2 py-0.5 rounded text-slate-300">Trust Score: {user.trustScore}</span>
          {/* Nhãn cảnh báo vi phạm chớp đỏ (animate-pulse) y như mẫu */}
          <span className="text-[10px] bg-red-900/50 text-red-400 px-2 py-0.5 rounded font-bold animate-pulse">Cảnh báo vi phạm</span>
        </div>
      </div>

      {/* CỘT 2: NỘI DUNG BÀI VIẾT */}
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className={`px-2 py-1 rounded text-[10px] font-bold ${post.statusColor}`}>
            {post.statusText}
          </span>
          <span className="text-slate-500 text-xs">{post.time}</span>
        </div>
        <p className="text-white text-base leading-relaxed bg-slate-800/50 p-4 rounded-lg border border-slate-700">
          {post.content}
        </p>
        <div className="flex gap-2 mt-3">
          {post.tags && post.tags.map((tag, index) => (
            <span key={index} className="text-xs text-cyan-500 bg-cyan-900/20 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CỘT 3: NÚT HÀNH ĐỘNG KÈM SVG ICON */}
      <div className="bg-slate-800 p-4 md:w-40 flex flex-col gap-3 justify-center border-l border-slate-700 shrink-0">
        <button onClick={handleApprove} className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded text-xs flex items-center justify-center gap-1 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          DUYỆT
        </button>
        <button onClick={handleReject} className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-2 rounded text-xs flex items-center justify-center gap-1 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          TỪ CHỐI
        </button>
        <div className="h-px bg-slate-600 my-1"></div>
        <button onClick={handleBan} className="bg-red-900 hover:bg-red-700 text-red-200 border border-red-700 font-bold py-2 rounded text-xs flex items-center justify-center gap-1 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
          </svg>
          BAN USER
        </button>
      </div>

    </div>
  );
};

export default PostCard;