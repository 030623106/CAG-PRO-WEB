
import React, { useState } from 'react';
import PostCommentSection from './PostCommentSection';
const NewsFeed = ({ onOpenBookingModal,openReview }) => {
  const [openComments, setOpenComments] = useState({});
  const toggleComment = (postId) => {
    setOpenComments((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };
  return (
    <div className="space-y-6">
      {/* Phần Nhiệm Vụ Chủ Quán (Săn Thưởng) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
          <h3 className="text-sm font-bold text-yellow-500 uppercase tracking-wide">Nhiệm Vụ Chủ Quán (Săn Thưởng)</h3>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {/* Nhiệm vụ 1 */}
          <div className="min-w-[280px] bg-slate-800 rounded-xl p-3 border border-yellow-500/30 flex gap-3 hover:bg-slate-750 transition-colors cursor-pointer group hover:border-yellow-500/60">
            <div className="relative overflow-hidden w-16 h-16 rounded-lg bg-slate-700 shrink-0">
              <img
                alt="Review trải nghiệm phòng VIP mới (RTX 4060)"
                loading="lazy"
                decoding="async"
                className="transition-opacity duration-500 ease-in-out opacity-100 w-16 h-16 rounded-lg object-cover"
                src="https://picsum.photos/100/100?random=201"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold text-sm line-clamp-1 group-hover:text-yellow-400">
                Review trải nghiệm phòng VIP mới (RTX 4060)
              </h4>
              <p className="text-xs text-slate-400 mb-1">StarGaming Q10</p>
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-bold text-xs bg-green-900/30 px-2 py-0.5 rounded">50.000đ + 1 Sting</span>
                <span className="text-[10px] text-red-400">Còn 2 ngày</span>
              </div>
            </div>
          </div>

          {/* Nhiệm vụ 2 */}
          <div className="min-w-[280px] bg-slate-800 rounded-xl p-3 border border-yellow-500/30 flex gap-3 hover:bg-slate-750 transition-colors cursor-pointer group hover:border-yellow-500/60">
            <div className="relative overflow-hidden w-16 h-16 rounded-lg bg-slate-700 shrink-0">
              <img
                alt="Check-in Menu Cơm Tấm Đêm"
                loading="lazy"
                decoding="async"
                className="transition-opacity duration-500 ease-in-out opacity-100 w-16 h-16 rounded-lg object-cover"
                src="https://picsum.photos/100/100?random=202"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-white font-bold text-sm line-clamp-1 group-hover:text-yellow-400">
                Check-in Menu Cơm Tấm Đêm
              </h4>
              <p className="text-xs text-slate-400 mb-1">Cyber All Game Gò Vấp</p>
              <div className="flex justify-between items-center">
                <span className="text-green-400 font-bold text-xs bg-green-900/30 px-2 py-0.5 rounded">Coupon 2h Chơi</span>
                <span className="text-[10px] text-red-400">Hết hạn hôm nay</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Review nhanh */}
      <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 flex gap-4">
        <img className="w-10 h-10 rounded-full border border-slate-600" src="https://i.pravatar.cc/300?img=11" alt="User avatar" />
        <div className="flex-1">
          <div onClick={() => openReview(true)} className="bg-slate-900 rounded-full px-4 py-2 mb-2 flex justify-between items-center cursor-pointer hover:bg-slate-700 transition-colors group">
            <span className="text-sm text-slate-400 group-hover:text-white transition-colors">
              Bạn vừa chơi ở đâu? Review ngay kiếm tiền...
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Bài post Ghim - CAG Guide */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden relative group transition-all">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#/profile" className="relative cursor-pointer">
              <div className="relative overflow-hidden w-10 h-10 rounded-full border-2 border-slate-600 hover:border-cyan-500 transition-colors">
                <img
                  alt="CAG Guide"
                  loading="lazy"
                  decoding="async"
                  className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover"
                  src="https://picsum.photos/50/50?random=999"
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
                <span className="font-bold text-white text-sm">CAG Guide</span>
                <span className="text-[10px] bg-slate-700 text-slate-300 px-1 rounded">CAG Creator</span>
                <span className="text-[10px] bg-yellow-500/20 text-yellow-400 px-1 rounded border border-yellow-500/30" title="Đại Gia Giờ Chơi">VIP</span>
                <button className="ml-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-all bg-cyan-900/30 text-cyan-400 border border-cyan-700/50 hover:bg-cyan-500 hover:text-black">
                  + Theo dõi
                </button>
              </div>
              <p className="text-xs text-slate-400">Ghim</p>
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

        <div className="px-4 pb-2 text-sm text-slate-200 leading-relaxed">
          CAG Guide - Pro Gaming Ecosystem: Nền tảng kết nối Gamer và Cyber Game hàng đầu Việt Nam. Tìm quán ngon, đặt máy xịn, nhận quà khủng!
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 shadow-lg shadow-pink-500/20 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              FEATURED
            </span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#CAGGuide</span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#ProGaming</span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#Ecosystem</span>
          </div>
        </div>

        <div className="p-3 border-t border-slate-700 flex justify-between text-slate-400 bg-slate-800/80">
          <button className="flex items-center gap-2 text-xs font-bold hover:text-pink-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            999 Yêu thích
          </button>
          <button onClick={() => toggleComment('post_1')} className="flex items-center gap-2 text-xs font-bold hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
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
        <PostCommentSection isOpen={openComments['post_1']} />
      </div>

      {/* Bài post Flash Gaming Center */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden relative group transition-all">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#/profile" className="relative cursor-pointer">
              <div className="relative overflow-hidden w-10 h-10 rounded-full border-2 border-slate-600 hover:border-cyan-500 transition-colors">
                <img
                  alt="Flash Gaming Center"
                  loading="lazy"
                  decoding="async"
                  className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover"
                  src="https://picsum.photos/50/50?random=114"
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
                <span className="font-bold text-white text-sm">Flash Gaming Center</span>
                <span className="text-[10px] bg-slate-700 text-slate-300 px-1 rounded">CAG Creator</span>
                <span className="text-[10px] bg-yellow-500/20 text-yellow-400 px-1 rounded border border-yellow-500/30" title="Đại Gia Giờ Chơi">VIP</span>
                <button className="ml-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-all bg-cyan-900/30 text-cyan-400 border border-cyan-700/50 hover:bg-cyan-500 hover:text-black">
                  + Theo dõi
                </button>
              </div>
              <p className="text-xs text-slate-400">5 giờ trước</p>
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

        <div className="px-4 pb-2 text-sm text-slate-200 leading-relaxed">
          🎉 MỪNG SINH NHẬT FLASH GAMING Q.7 🎉
          Giảm giá 50% tất cả các hạng phòng trong 3 ngày cuối tuần này. Nạp 100k tặng 100k. Đến ngay kẻo lỡ!
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#KhuyenMai</span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#SinhNhat</span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#FlashGaming</span>
          </div>
        </div>

        <div className="relative overflow-hidden mt-2 w-full h-64 bg-slate-900 rounded-lg">
          <img
            alt="Post content"
            loading="lazy"
            decoding="async"
            className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover"
            src="https://picsum.photos/500/300?random=115"
          />
        </div>

        <div className="bg-slate-900/50 p-4 flex flex-col sm:flex-row justify-between items-center border-t border-slate-700/50 gap-4">
          <div className="flex flex-col cursor-pointer">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Địa điểm: <span className="text-white font-bold ml-1 hover:text-cyan-400 hover:underline transition-colors">Cyber All Game Q.7 VIP</span>
            </span>
          </div>
          <button onClick={() => onOpenBookingModal({
              authorName: "Flash Gaming Center",
              authorAvatar: "https://picsum.photos/50/50?random=114",
              location: "Cyber All Game Q.7 VIP",
              pricePerHour: 15000
            })} className="text-white text-xs font-bold px-4 py-2 rounded shadow-lg flex items-center gap-2 transition-all transform hover:scale-105 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
            ĐẶT ĐÚNG MÁY NÀY (-10%)
          </button>
        </div>

        <div className="p-3 border-t border-slate-700 flex justify-between text-slate-400 bg-slate-800/80">
          <button className="flex items-center gap-2 text-xs font-bold hover:text-pink-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            890 Yêu thích
          </button>
          <button onClick={() => toggleComment('post_2')} className="flex items-center gap-2 text-xs font-bold hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            125 Bình luận
          </button>
          <button className="flex items-center gap-2 text-xs font-bold hover:text-green-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            Chia sẻ
          </button>
        </div>
        <PostCommentSection isOpen={openComments['post_2']} />
      </div>

      {/* Bài post Gaming House Pro */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden relative group transition-all">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#/profile" className="relative cursor-pointer">
              <div className="relative overflow-hidden w-10 h-10 rounded-full border-2 border-slate-600 hover:border-cyan-500 transition-colors">
                <img
                  alt="Gaming House Pro"
                  loading="lazy"
                  decoding="async"
                  className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover"
                  src="https://picsum.photos/50/50?random=103"
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
                <span className="font-bold text-white text-sm">Gaming House Pro</span>
                <span className="text-[10px] bg-slate-700 text-slate-300 px-1 rounded">CAG Creator</span>
                <button className="ml-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-all bg-cyan-900/30 text-cyan-400 border border-cyan-700/50 hover:bg-cyan-500 hover:text-black">
                  + Theo dõi
                </button>
              </div>
              <p className="text-xs text-slate-400">3 giờ trước</p>
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

        <div className="px-4 pb-2 text-sm text-slate-200 leading-relaxed">
          🔥 KHUYẾN MÃI GIỜ VÀNG 🔥 X2 tài khoản nạp từ 13h-16h hôm nay. Đến chơi ngay!
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#KhuyenMai</span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#HotDeal</span>
          </div>
        </div>

        <div className="bg-slate-900/50 p-4 flex flex-col sm:flex-row justify-between items-center border-t border-slate-700/50 gap-4">
          <div className="flex flex-col cursor-pointer">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Địa điểm: <span className="text-white font-bold ml-1 hover:text-cyan-400 hover:underline transition-colors">Gaming House Pro</span>
            </span>
          </div>
          <button onClick={() => onOpenBookingModal({
              authorName: "Gaming House Pro",
              authorAvatar: "https://picsum.photos/50/50?random=103",
              location: "Gaming House Pro Gò Vấp",
              pricePerHour: 12000
            })} className="text-white text-xs font-bold px-4 py-2 rounded shadow-lg flex items-center gap-2 transition-all transform hover:scale-105 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
            ĐẶT ĐÚNG MÁY NÀY (-10%)
          </button>
        </div>

        <div className="p-3 border-t border-slate-700 flex justify-between text-slate-400 bg-slate-800/80">
          <button className="flex items-center gap-2 text-xs font-bold hover:text-pink-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            156 Yêu thích
          </button>
          <button onClick={() => toggleComment('post_3')} className="flex items-center gap-2 text-xs font-bold hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            42 Bình luận
          </button>
          <button className="flex items-center gap-2 text-xs font-bold hover:text-green-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            Chia sẻ
          </button>
        </div>
        <PostCommentSection isOpen={openComments['post_3']} />
      </div>

      {/* Bài post Faker VN */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden relative group transition-all">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#/profile" className="relative cursor-pointer">
              <div className="relative overflow-hidden w-10 h-10 rounded-full border-2 border-slate-600 hover:border-cyan-500 transition-colors">
                <img
                  alt="Faker VN"
                  loading="lazy"
                  decoding="async"
                  className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover"
                  src="https://picsum.photos/50/50?random=111"
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
                <span className="font-bold text-white text-sm">Faker VN</span>
                <span className="text-[10px] bg-slate-700 text-slate-300 px-1 rounded">CAG Creator</span>
                <span className="text-[10px] bg-yellow-500/20 text-yellow-400 px-1 rounded border border-yellow-500/30" title="Đại Gia Giờ Chơi">VIP</span>
                <button className="ml-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-all bg-cyan-900/30 text-cyan-400 border border-cyan-700/50 hover:bg-cyan-500 hover:text-black">
                  + Theo dõi
                </button>
              </div>
              <p className="text-xs text-slate-400">2 giờ trước</p>
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
              <div><span className="block text-slate-400">Không gian</span><span className="font-bold text-white">5</span></div>
              <div><span className="block text-slate-400">Phục vụ</span><span className="font-bold text-white">4</span></div>
              <div><span className="block text-slate-400">Giá</span><span className="font-bold text-white">4</span></div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-2 text-sm text-slate-200 leading-relaxed">
          Mới test khu thi đấu ở Doragon Cyber Q.10. Màn Zowie 360Hz bắn CS2 dính đầu ầm ầm. Phím Wooting gõ sướng tay. 10 điểm không có nhưng! 🔥
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="bg-green-900/30 text-green-400 border border-green-700/50 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1 cursor-help" title="Đã chơi 240 phút">
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Verified Player
            </span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#ReviewQuan</span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#CS2</span>
            <span className="text-cyan-400 text-xs cursor-pointer hover:underline">#Esport</span>
          </div>
        </div>

        <div className="relative overflow-hidden mt-2 w-full h-64 bg-slate-900 rounded-lg">
          <img
            alt="Post content"
            loading="lazy"
            decoding="async"
            className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full object-cover"
            src="https://picsum.photos/500/300?random=112"
          />
        </div>

        <div className="bg-slate-900/50 p-4 flex flex-col sm:flex-row justify-between items-center border-t border-slate-700/50 gap-4">
          <div className="flex flex-col cursor-pointer">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Địa điểm: <span className="text-white font-bold ml-1 hover:text-cyan-400 hover:underline transition-colors">Doragon Cyber Q.10</span>
            </span>
          </div>
          <button onClick={() => onOpenBookingModal({
              authorName: "Faker VN", 
              authorAvatar: "https://picsum.photos/50/50?random=111",
              location: "Doragon Cyber Q.10",
              pricePerHour: 22000 
            })} className="text-white text-xs font-bold px-4 py-2 rounded shadow-lg flex items-center gap-2 transition-all transform hover:scale-105 bg-gradient-to-r from-green-700 to-green-600 hover:from-green-600 hover:to-green-500 animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="8.5" cy="7" r="4"></circle>
              <line x1="20" y1="8" x2="20" y2="14"></line>
              <line x1="23" y1="11" x2="17" y2="11"></line>
            </svg>
            ĐẶT ĐÚNG MÁY NÀY (-10%)
          </button>
        </div>

        <div className="p-3 border-t border-slate-700 flex justify-between text-slate-400 bg-slate-800/80">
          <button className="flex items-center gap-2 text-xs font-bold hover:text-pink-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            452 Yêu thích
          </button>
          <button onClick={() => toggleComment('post_4')} className="flex items-center gap-2 text-xs font-bold hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            38 Bình luận
          </button>
          <button className="flex items-center gap-2 text-xs font-bold hover:text-green-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
            Chia sẻ
          </button>
        </div>
        <PostCommentSection isOpen={openComments['post_4']} />
      </div>
    </div>
  );
};

export default NewsFeed;