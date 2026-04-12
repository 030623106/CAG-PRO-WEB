import React, { useState } from "react";
import FollowingFeed from "../../../components/Gamer/CongDong/FollowingFeed";
import NewsFeed from "../../../components/Gamer/CongDong/NewsFeed";
import RoundTableFeed from "../../../components/Gamer/CongDong/RoundTableFeed";
import FindTeammateFeed from "../../../components/Gamer/CongDong/FindTeammateFeed";
import ReviewModal from "../../../components/Gamer/CongDong/ReviewModal";
import HallOfFameModal from "../../../components/Gamer/CongDong/HallOfFameModal";
import BookingModal from "../../../components/Gamer/CongDong/BookingModal";
import CreateRoomModal from "../../../components/Gamer/CongDong/CreateRoomModal";
import JoinRoomSuccessModal from "../../../components/Gamer/CongDong/JoinRoomSuccessModal";
import CreateDiscussionModal from "../../../components/Gamer/CongDong/CreateDiscussionModal";
import { useOutletContext } from 'react-router-dom'; 
import { useAuth } from '../../../contexts/Authen';
import { Link } from "react-router-dom";
const CommunityFeed = () => {
  const { user } = useAuth();
  const { triggerAuth } = useOutletContext();

  const checkAuth = (message) => {
      if (!user || user.role === 'guest') { // Đổi lại thành logic check guest của bạn
          triggerAuth(message);
          return false;
      }
      return true;
  };
  const [activeTab, setActiveTab] = useState("news");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHallOfFameOpen, setIsHallOfFameOpen] = useState(false);
  const [bookingData, setBookingData] = useState(null);
  const [isCreateRoomOpen, setIsCreateRoomOpen] = useState(false);
  const [roomToJoin, setRoomToJoin] = useState(null);
  const [isCreateDiscussionOpen, setIsCreateDiscussionOpen] = useState(false);
  return (
    <div className="flex flex-col lg:flex-row gap-6 relative pb-20 w-full h-full overflow-y: scroll">
      {/* Phần chính (banner + tabs + nội dung feed) */}
      <div className="flex-1 space-y-6 min-w-0 max-w-full lg:max-w-[calc(100%-320px-1.5rem)">
        {/* Banner Review to Earn */}
        <div className="bg-gradient-to-r from-purple-900 to-indigo-900 rounded-2xl p-6 md:p-8 border border-purple-700/50 shadow-2xl relative overflow-hidden group flex-shrink-0">
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none group-hover:bg-pink-500/30 transition-all duration-700"></div>

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="inline-block bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 shadow-lg shadow-pink-500/50 animate-pulse">
                REVIEW TO EARN
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white italic tracking-tight mb-2">
                BẠN CHƠI - BẠN REVIEW -{" "}
                <span className="text-cyan-400">BẠN CÓ TIỀN</span>
              </h1>
              <p className="text-slate-300 text-sm max-w-xl leading-relaxed mb-4">
                Quy trình kiếm tiền: <br />
                1. Chơi game tại quán → 2. Viết Review → 3. Kéo khách đến chơi →
                4. <strong>Nhận hoa hồng trọn đời</strong>.
              </p>
              <div className="flex gap-3 flex-wrap">
                <button
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold px-6 py-2.5 rounded-lg shadow-lg flex items-center gap-2 transform hover:scale-105 transition-all"
                  onClick={() =>{
                     if (checkAuth("Đăng nhập để Review.")) {
                    setIsModalOpen(true)
                  }
                  }}
                 
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                  Viết Review Ngay
                </button>
                
                <Link
                  to="/wallet"
                  onClick={(e) => {
                    if (!checkAuth("Đăng nhập xem ví.")) {
                      e.preventDefault(); 
                    }
                  }}
                  className="bg-slate-800/80 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-lg border border-slate-600"
                >
                  Ví Của Tôi
                </Link>
              </div>
            </div>

           {user && (user.role === 'gamer' || user.userType === 4) && (
              <div className="bg-slate-950/50 p-4 rounded-xl border border-white/10 backdrop-blur-sm min-w-[240px] transform hover:scale-105 transition-transform cursor-pointer">
                <p className="text-xs text-slate-400 uppercase font-bold mb-1">
                  Thu nhập tháng này
                </p>
                <p className="text-3xl font-mono text-green-400 font-bold mb-2">
                  0 ₫
                </p>
                <div className="flex gap-2 text-[10px] text-slate-300">
                  <span className="bg-green-500/20 px-2 py-0.5 rounded text-green-400 font-bold">
                    Rút tiền ngay
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-700 sticky top-0 bg-slate-950/95 backdrop-blur z-20 pt-2 overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setActiveTab("news")}
            className={`pb-4 px-6 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === "news"
                ? "border-pink-500 text-pink-500"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 11a9 9 0 0 1 9 9"></path>
              <path d="M4 4a16 16 0 0 1 16 16"></path>
              <circle cx="5" cy="19" r="1"></circle>
            </svg>
            BẢNG TIN
          </button>

          <button
            onClick={() => {
              // ĐÂY LÀ CHỖ GỌI HÀM checkAuth ĐỂ CHẶN GUEST
              if (checkAuth("Đăng nhập để xem danh sách theo dõi.")) {
                setActiveTab("following");
              }
            }}
            className={`pb-4 px-6 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === "following"
                ? "border-green-500 text-green-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            ĐANG THEO DÕI
          </button>

          <button
            onClick={() => {
                setActiveTab("roundtable");
            }}
            className={`pb-4 px-6 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === "roundtable"
                ? "border-cyan-400 text-cyan-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            HỘI BÀN TRÒN
          </button>

          <button
            onClick={() => {
                setActiveTab("findteammate");
            }}
            className={`pb-4 px-6 text-sm font-bold border-b-2 transition-colors flex items-center gap-2 whitespace-nowrap ${
              activeTab === "findteammate"
                ? "border-green-500 text-green-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            TÌM ĐỒNG ĐỘI
          </button>
        </div>

        {/* Nội dung theo tab */}
        <div className="mt-6">
          {activeTab === "following" && (
            <FollowingFeed onOpenBookingModal={setBookingData} />
          )}
          {activeTab === "news" && (
            <NewsFeed checkAuth={checkAuth} onOpenBookingModal={setBookingData} openReview={setIsModalOpen} />
          )}
          {activeTab === "roundtable" && (
            <RoundTableFeed
            checkAuth={checkAuth}
              onOpenDiscussion={() => setIsCreateDiscussionOpen(true)}
            />
          )}
          {activeTab === "findteammate" && (
            <FindTeammateFeed
            checkAuth={checkAuth}

              onOpenCreateModal={() => setIsCreateRoomOpen(true)}
              onJoinRoom={setRoomToJoin}
            />
          )}
        </div>
      </div>
      <div className="w-80 space-y-6 lg:sticky lg:top-4 h-fit hidden lg:block shrink-0">
        {/* TOP REVIEWER TUẦN */}
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-yellow-500/10 rounded-full blur-2xl"></div>
          <h3 className="font-bold text-white mb-4 text-sm flex items-center gap-2 relative z-10">
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
              className="text-yellow-500"
            >
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
            TOP REVIEWER TUẦN
          </h3>
          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3 bg-slate-900/50 p-2 rounded-lg border border-slate-700/50 hover:bg-slate-700/50 transition-colors cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 rounded-full border border-slate-600 overflow-hidden">
                  <img
                    src="https://picsum.photos/40/40?random=20"
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-slate-800 bg-yellow-500 text-black">
                  1
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white text-xs font-bold">Thành Long</p>
                <p className="text-[10px] text-slate-400">CAG Creator</p>
              </div>
              <div className="text-right">
                <p className="text-green-400 font-mono font-bold text-xs">
                  +12.5M
                </p>
                <p className="text-[9px] text-slate-500">Doanh thu</p>
              </div>
            </div>

            {/* Rank 2 */}
            <div className="flex items-center gap-3 bg-slate-900/50 p-2 rounded-lg border border-slate-700/50 hover:bg-slate-700/50 transition-colors cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 rounded-full border border-slate-600 overflow-hidden">
                  <img
                    src="https://picsum.photos/40/40?random=21"
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-slate-800 bg-slate-300 text-black">
                  2
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white text-xs font-bold">Minh Hằng</p>
                <p className="text-[10px] text-slate-400">CAG Creator</p>
              </div>
              <div className="text-right">
                <p className="text-green-400 font-mono font-bold text-xs">
                  +8.2M
                </p>
                <p className="text-[9px] text-slate-500">Doanh thu</p>
              </div>
            </div>

            {/* Rank 3 */}
            <div className="flex items-center gap-3 bg-slate-900/50 p-2 rounded-lg border border-slate-700/50 hover:bg-slate-700/50 transition-colors cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 rounded-full border border-slate-600 overflow-hidden">
                  <img
                    src="https://picsum.photos/40/40?random=22"
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-2 -left-2 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-slate-800 bg-orange-700 text-white">
                  3
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white text-xs font-bold">Tuấn Đạt</p>
                <p className="text-[10px] text-slate-400">CAG Creator</p>
              </div>
              <div className="text-right">
                <p className="text-green-400 font-mono font-bold text-xs">
                  +5.1M
                </p>
                <p className="text-[9px] text-slate-500">Doanh thu</p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-700 text-center">
            <button
              className="text-xs text-yellow-500 font-bold hover:underline"
              onClick={() => setIsHallOfFameOpen(true)}
            >
              Xem Bảng Xếp Hạng Đầy Đủ
            </button>
          </div>
        </div>

        {/* CHỦ ĐỀ NÓNG */}
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
          <h3 className="font-bold text-white mb-4 text-sm flex items-center gap-2">
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
              className="text-red-500"
            >
              <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
            </svg>
            CHỦ ĐỀ NÓNG
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs hover:bg-red-500/20 hover:text-red-400 cursor-pointer transition-colors">
              #WukongVietHoa
            </span>
            <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs hover:bg-red-500/20 hover:text-red-400 cursor-pointer transition-colors">
              #CyberAllGameMoi
            </span>
            <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs hover:bg-red-500/20 hover:text-red-400 cursor-pointer transition-colors">
              #CyberAllGameMoi
            </span>
            <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs hover:bg-red-500/20 hover:text-red-400 cursor-pointer transition-colors">
              #TimDongDoiLoL
            </span>
            <span className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-xs hover:bg-red-500/20 hover:text-red-400 cursor-pointer transition-colors">
              #GiaiDauSinhVien
            </span>
          </div>
        </div>
      </div>
      <ReviewModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
      <HallOfFameModal
        isOpen={isHallOfFameOpen}
        onClose={() => setIsHallOfFameOpen(false)}
      />
      <BookingModal
        isOpen={!!bookingData}
        onClose={() => setBookingData(null)}
        data={bookingData}
      />
      <CreateRoomModal
        isOpen={isCreateRoomOpen}
        onClose={() => setIsCreateRoomOpen(false)}
      />
      <JoinRoomSuccessModal
        isOpen={!!roomToJoin}
        hostName={roomToJoin?.hostName}
        onClose={() => setRoomToJoin(null)}
        onConfirm={() => {
          if (roomToJoin?.onConfirm) roomToJoin.onConfirm();
          setRoomToJoin(null);
        }}
      />
      <CreateDiscussionModal
        isOpen={isCreateDiscussionOpen}
        onClose={() => setIsCreateDiscussionOpen(false)}
      />
    </div>
  );
};

export default CommunityFeed;
