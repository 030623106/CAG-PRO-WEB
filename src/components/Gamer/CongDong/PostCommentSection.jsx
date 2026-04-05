import React from 'react';

const PostCommentSection = ({ isOpen }) => {
  // Nếu isOpen là false thì không render gì cả
  if (!isOpen) return null;

  return (
    <div className="bg-slate-900 border-t border-slate-700 p-4 animate-fade-in">
      <div className="space-y-4 mb-4 max-h-60 overflow-y-auto custom-scrollbar">
        <p className="text-center text-slate-500 text-xs italic">
          Chưa có bình luận nào. Hãy là người đầu tiên!
        </p>
      </div>
      <div className="flex gap-2">
        <input 
          placeholder="Viết bình luận của bạn..." 
          className="flex-1 bg-slate-800 border border-slate-600 rounded-full px-4 py-2 text-xs text-white focus:outline-none focus:border-cyan-500" 
          type="text" 
        />
        <button className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PostCommentSection;