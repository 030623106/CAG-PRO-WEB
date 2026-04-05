
import React,{useState} from 'react';
import PostCommentSection from './PostCommentSection';
const FollowingFeed = ({ onOpenBookingModal }) => {
  const [openComments, setOpenComments] = useState({});
    const toggleComment = (postId) => {
      setOpenComments((prev) => ({
        ...prev,
        [postId]: !prev[postId]
      }));
    };
  return (
    <div className="space-y-6">
      {/* Bài review 1 - Thành Long */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden relative group transition-all">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#/profile" className="relative cursor-pointer">
              <div className="relative overflow-hidden w-10 h-10 rounded-full border-2 border-slate-600 hover:border-cyan-500 transition-colors">
                <img
                  alt="Thành Long"
                  loading="lazy"
                  decoding="async"
                  className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover"
                  src="https://picsum.photos/50/50?random=8"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-cyan-500 text-black p-0.5 rounded-full border border-slate-900" title="Thổ Địa Quán Net">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </a>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">Thành Long</span>
                <span className="text-[10px] bg-slate-700 text-slate-300 px-1 rounded">CAG Creator</span>
                <span className="text-[10px] bg-yellow-500/20 text-yellow-400 px-1 rounded border border-yellow-500/30" title="Đại Gia Giờ Chơi">VIP</span>
                <button className="ml-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-all bg-slate-700 text-green-400 border border-green-900 hover:bg-red-900/50 hover:text-red-400 hover:border-red-900">
                  ✓ Đang theo dõi
                </button>
              </div>
              <p className="text-xs text-slate-400">15 phút trước</p>
            </div>
          </div>
          <div className="relative">
            <button className="text-slate-500 hover:text-white p-1 rounded-full hover:bg-slate-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-4 mb-2">
          <div className="flex items-center gap-4 bg-slate-900/50 p-2 rounded-lg border border-slate-700/50">
            <div className="text-center px-2 border-r border-slate-700">
              <div className="text-2xl font-black text-yellow-400 leading-none">4.5</div>
              <div className="text-[9px] text-slate-500 uppercase">Điểm TB</div>
            </div>
            <div className="flex-1 grid grid-cols-4 gap-2 text-[10px] text-center">
              <div><span className="block text-slate-400">Cấu hình</span><span className="font-bold text-cyan-400">5</span></div>
              <div><span className="block text-slate-400">Không gian</span><span className="font-bold text-white">4</span></div>
              <div><span className="block text-slate-400">Phục vụ</span><span className="font-bold text-white">5</span></div>
              <div><span className="block text-slate-400">Giá</span><span className="font-bold text-white">3</span></div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-2 text-sm text-slate-200 leading-relaxed">
          Review nhẹ Flash Gaming Center: Máy mượt, ghế êm, máy lạnh run người. Ae ghé test ngay dàn RTX 4090 nhé! ❄️
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-green-900/30 text-green-400 border border-green-700/50 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 cursor-help" title="Đã chơi 180 phút">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Verified Player
            </span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#ReviewQuan</span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#KiemTienOnline</span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#NetCo</span>
          </div>
        </div>

        <div className="relative overflow-hidden mt-2 w-full h-64 bg-slate-900 rounded-lg">
          <img
            alt="Post content"
            loading="lazy"
            decoding="async"
            className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover"
            src="https://picsum.photos/500/300?random=9"
          />
        </div>

        <div className="bg-slate-900/50 p-4 flex flex-col sm:flex-row justify-between items-center border-t border-slate-700/50 gap-4">
          <div className="flex flex-col cursor-pointer">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Địa điểm: <span className="text-white font-bold ml-1 hover:text-cyan-400 hover:underline transition-colors">Flash Gaming Center</span>
            </span>
          </div>
          <button
          onClick={() => onOpenBookingModal({
              authorName: "Thành Long",
              authorAvatar: "https://picsum.photos/50/50?random=114",
              location: "Flash Gaming Center",
              pricePerHour: 15000
            })} className="text-white text-xs font-bold px-4 py-2 rounded shadow-lg flex items-center gap-2 transition-all transform hover:scale-105 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
            ĐẶT ĐÚNG MÁY NÀY (-10%)
          </button>
        </div>

        <div className="p-3 border-t border-slate-700 flex justify-between text-slate-400 bg-slate-800/80">
          <button className="flex items-center gap-2 text-xs font-bold hover:text-pink-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            154 Yêu thích
          </button>
          <button onClick={() => toggleComment('post_6')} className="flex items-center gap-2 text-xs font-bold hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            2 Bình luận
          </button>
          <button className="flex items-center gap-2 text-xs font-bold hover:text-green-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            Chia sẻ
          </button>
        </div>
        <PostCommentSection isOpen={openComments['post_6']} />
      </div>

      {/* Bài review 2 - Minh Hằng */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden relative group transition-all">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#/profile" className="relative cursor-pointer">
              <div className="relative overflow-hidden w-10 h-10 rounded-full border-2 border-slate-600 hover:border-cyan-500 transition-colors">
                <img
                  alt="Minh Hằng"
                  loading="lazy"
                  decoding="async"
                  className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover"
                  src="https://picsum.photos/50/50?random=7"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-cyan-500 text-black p-0.5 rounded-full border border-slate-900" title="Thổ Địa Quán Net">
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </a>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">Minh Hằng</span>
                <span className="text-[10px] bg-slate-700 text-slate-300 px-1 rounded">CAG Creator</span>
                <button className="ml-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-all bg-slate-700 text-green-400 border border-green-900 hover:bg-red-900/50 hover:text-red-400 hover:border-red-900">
                  ✓ Đang theo dõi
                </button>
              </div>
              <p className="text-xs text-slate-400">1 giờ trước</p>
            </div>
          </div>
          <div className="relative">
            <button className="text-slate-500 hover:text-white p-1 rounded-full hover:bg-slate-700 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-4 mb-2">
          <div className="flex items-center gap-4 bg-slate-900/50 p-2 rounded-lg border border-slate-700/50">
            <div className="text-center px-2 border-r border-slate-700">
              <div className="text-2xl font-black text-yellow-400 leading-none">4.1</div>
              <div className="text-[9px] text-slate-500 uppercase">Điểm TB</div>
            </div>
            <div className="flex-1 grid grid-cols-4 gap-2 text-[10px] text-center">
              <div><span className="block text-slate-400">Cấu hình</span><span className="font-bold text-cyan-400">4</span></div>
              <div><span className="block text-slate-400">Không gian</span><span className="font-bold text-white">3</span></div>
              <div><span className="block text-slate-400">Phục vụ</span><span className="font-bold text-white">5</span></div>
              <div><span className="block text-slate-400">Giá</span><span className="font-bold text-white">5</span></div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-2 text-sm text-slate-200 leading-relaxed">
          Speed Gaming 2 đang có khuyến mãi mua 1 tặng 1 Sting. Máy lạnh hơi lạnh quá, nhưng gear ngon. Chấm 8/10.
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-green-900/30 text-green-400 border border-green-700/50 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 cursor-help" title="Đã chơi 65 phút">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Verified Player
            </span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#ReviewQuan</span>
          </div>
        </div>

        <div className="bg-slate-900/50 p-4 flex flex-col sm:flex-row justify-between items-center border-t border-slate-700/50 gap-4">
          <div className="flex flex-col cursor-pointer">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Địa điểm: <span className="text-white font-bold ml-1 hover:text-cyan-400 hover:underline transition-colors">Speed Gaming 2</span>
            </span>
          </div>
          <button onClick={() => onOpenBookingModal({
              authorName: "Minh Hằng",
              authorAvatar: "https://picsum.photos/50/50?random=114",
              location: "Speed Gaming 2",
              pricePerHour: 15000
            })}
           className="text-white text-xs font-bold px-4 py-2 rounded shadow-lg flex items-center gap-2 transition-all transform hover:scale-105 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
            ĐẶT ĐÚNG MÁY NÀY (-10%)
          </button>
        </div>

        <div className="p-3 border-t border-slate-700 flex justify-between text-slate-400 bg-slate-800/80">
          <button className="flex items-center gap-2 text-xs font-bold hover:text-pink-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            12 Yêu thích
          </button>
          <button onClick={() => toggleComment('post_5')} className="flex items-center gap-2 text-xs font-bold hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            0 Bình luận
          </button>
          <button className="flex items-center gap-2 text-xs font-bold hover:text-green-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            Chia sẻ
          </button>
        </div>
        <PostCommentSection isOpen={openComments['post_5']} />
      </div>
    </div>
  );
};

export default FollowingFeed;