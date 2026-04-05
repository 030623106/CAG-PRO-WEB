import { useState, useEffect } from 'react';
import { useAuth } from '../../../contexts/Authen'; 
import { getProfile } from '../../../services/userService'; 

import UpdateProfileModal from '../../../components/Gamer/Profile/UpdateProfileModal';
import TabButton from '../../../components/Gamer/Profile/TabButton';
import OverviewTab from '../../../components/Gamer/Profile/OverviewTab';
import WalletTab from '../../../components/Gamer/Profile/WalletTab';
import LootBoxTab from '../../../components/Gamer/Profile/LootBoxTab';
import SystemTab from '../../../components/Gamer/Profile/SystemTab';

const ProfileGamer = () => {
  const { api, token, isAuthenticated } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  // State để quản lý việc bật/tắt giao diện Scan QR và Success
  const [isScanning, setIsScanning] = useState(false);
  const [isScanSuccess, setIsScanSuccess] = useState(false);

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Logic đếm 2 giây rồi tắt Scan, bật Success
  useEffect(() => {
    let timer;
    if (isScanning) {
      timer = setTimeout(() => {
        setIsScanning(false);
        setIsScanSuccess(true);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isScanning]);

  useEffect(() => {
    const fetchProfileData = async () => {
      if (!isAuthenticated) {
        setLoading(false);
        return;
      }
      try {
        const data = await getProfile(api, token);
        setProfile(data);
      } catch (error) {
        console.log("Lỗi fetch profile:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [api, token, isAuthenticated]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab data={profile} />;
      case 'wallet': return <WalletTab data={profile} />;
      case 'lootbox': return <LootBoxTab />;
      case 'system': return <SystemTab />;
      default: return <OverviewTab data={profile} />;
    }
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-cyan-500 font-mono">Đang tải cấu hình...</div>;
  }

  const currentLevel = profile?.expPoints ? Math.floor(profile.expPoints / 100) + 1 : 8;

  return (
    <div className="w-full min-h-screen pb-24 font-mono text-sm bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#050505] to-black animate-fade-in text-slate-200">
      
      {/* Top Header Sticky */}
      <div className="p-4 md:p-6 border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md sticky top-0 z-20 w-full">
        <div className="flex flex-col md:flex-row items-center gap-5 w-full">
          <div className="flex items-center gap-5 w-full md:w-auto">
            <div 
              className="relative group cursor-pointer shrink-0"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="w-16 h-16 rounded-lg p-0.5 bg-gradient-to-br from-cyan-500 to-blue-600 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-transform group-hover:scale-105">
                <div className="relative overflow-hidden h-full w-full">
                  <img 
                    alt="Avatar" 
                    loading="lazy" 
                    decoding="async" 
                    className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full rounded-[6px] object-cover bg-black" 
                    src="https://i.pravatar.cc/300?img=11" 
                  />
                </div>
              </div>
              <div className="absolute -bottom-1.5 -right-1.5 bg-black border border-cyan-500 text-cyan-500 text-[9px] font-black px-1.5 py-0.5 uppercase tracking-tighter">
                LVL. {currentLevel}
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter italic leading-none">
                {profile?.fullName || profile?.username || "TÊN LỖI"}
              </h1>
              <p className="text-slate-500 text-xs font-bold tracking-widest mt-1 mb-2">
                ID: #{profile?.username?.toUpperCase() || "ID LỖI"}
              </p>
              <div className="flex items-center gap-3">
                <span className="text-[10px] bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-700 font-bold uppercase">
                  DIAMOND
                </span>
                <div className="h-3 w-px bg-slate-700"></div>
                <span className="text-[10px] text-yellow-500 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse"></span>
                  {profile?.expPoints?.toLocaleString('vi-VN') || "0"} PTS
                </span>
              </div>
            </div>
          </div>
          <div className="md:ml-auto w-full md:w-auto flex flex-col md:flex-row gap-2 mt-2 md:mt-0">
            <button 
              onClick={() => setIsScanning(true)}
              className="w-full md:w-auto flex justify-center items-center gap-2 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 px-4 py-3 md:py-2 rounded font-bold text-xs uppercase tracking-wider transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="5" height="5" x="3" y="3" rx="1"></rect>
                <rect width="5" height="5" x="16" y="3" rx="1"></rect>
                <rect width="5" height="5" x="3" y="16" rx="1"></rect>
                <path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
                <path d="M21 21v.01"></path>
                <path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
                <path d="M3 12h.01"></path>
                <path d="M12 3h.01"></path>
                <path d="M12 16v.01"></path>
                <path d="M16 12h1"></path>
                <path d="M21 12v.01"></path>
                <path d="M12 21v-1"></path>
              </svg>
              Scan QR
            </button>
            <button className="w-full md:w-auto flex justify-center items-center gap-2 bg-cyan-600/10 hover:bg-cyan-600/20 text-cyan-400 border border-cyan-500/50 px-4 py-3 md:py-2 rounded font-bold text-xs uppercase tracking-wider transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M16.2 7.8 7.8 16.2"></path>
                <path d="M12 2a10 10 0 1 0 10 10"></path>
              </svg>
              Find Match
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="w-full px-4 md:px-6 mt-6">
        <div className="flex gap-2 border-b border-slate-800 pb-1 overflow-x-auto scrollbar-hide">
          <TabButton 
            label="Tổng quan" 
            isActive={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')} 
          />
          <TabButton 
            label="Ví của tôi" 
            isActive={activeTab === 'wallet'} 
            onClick={() => setActiveTab('wallet')} 
          />
          <TabButton 
            label="Đổi thưởng" 
            isActive={activeTab === 'lootbox'} 
            onClick={() => setActiveTab('lootbox')} 
          />
          <TabButton 
            label="Cài đăt" 
            isActive={activeTab === 'system'} 
            onClick={() => setActiveTab('system')} 
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="w-full p-4 md:p-6 animate-fade-in">
        {renderTabContent()}
      </div>

      {/* Modal Cập Nhật */}
      <UpdateProfileModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        profileData={profile} 
      />

      {/* Giao diện SCAN QR Full Màn Hình */}
      {isScanning && (
        <div className="fixed inset-0 z-[1000] bg-[#0B0E14] flex flex-col items-center justify-center animate-fade-in">
          <div className="relative w-72 h-72 border-2 border-[#00F2EA] rounded-[32px] overflow-hidden shadow-[0_0_100px_rgba(0,242,234,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00F2EA]/10 to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00F2EA] shadow-[0_0_20px_#00F2EA] animate-[scan_2s_infinite]"></div>
            <div className="absolute top-4 left-4 w-8 h-8 border-t-4 border-l-4 border-[#00F2EA]"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-4 border-r-4 border-[#00F2EA]"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-4 border-l-4 border-[#00F2EA]"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-4 border-r-4 border-[#00F2EA]"></div>
          </div>
          <p className="font-[Rajdhani] font-bold text-[#00F2EA] text-xl mt-8 tracking-[0.2em] animate-pulse">SYSTEM SCANNING...</p>
          <p className="font-[Montserrat] text-slate-500 text-xs mt-2 uppercase tracking-wide">Align QR Code within frame</p>
          <button 
            onClick={() => setIsScanning(false)}
            className="mt-8 text-slate-500 hover:text-white border border-slate-700 px-4 py-2 rounded uppercase text-xs transition-colors"
          >
            Cancel
          </button>
        </div>
      )}

      {/* Giao diện CHECK-IN THÀNH CÔNG */}
      {isScanSuccess && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-[#0B0E14] w-full max-w-md rounded-3xl border-2 border-[#00F2EA] shadow-[0_0_50px_rgba(0,242,234,0.2)] overflow-hidden text-center relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#00F2EA] to-transparent animate-[shimmer_2s_infinite]"></div>
            <div className="p-8 relative z-10">
              <div className="w-24 h-24 bg-[#00F2EA]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#00F2EA]/50 shadow-[0_0_30px_rgba(0,242,234,0.3)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#00F2EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-[pulse_2s_infinite]">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h2 className="text-3xl font-black text-white font-[Rajdhani] uppercase tracking-widest mb-2 drop-shadow-[0_0_10px_rgba(0,242,234,0.5)]">CHECK-IN THÀNH CÔNG</h2>
              <p className="text-slate-400 text-sm mb-8 font-[Montserrat]">Hệ thống đã ghi nhận bạn tại phòng máy.</p>
              <div className="bg-white/5 rounded-2xl p-5 border border-white/10 mb-8 text-left">
                <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Địa điểm</span>
                  <span className="text-sm text-white font-bold">Flash Gaming Center</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-3">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Máy</span>
                  <span className="text-sm text-[#00F2EA] font-mono font-bold text-lg">VIP-05</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">Thời gian</span>
                  <span className="text-sm text-white font-mono">
                    {new Date().toLocaleTimeString('vi-VN', {hour: '2-digit', minute:'2-digit'})}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsScanSuccess(false)}
                className="w-full bg-gradient-to-r from-[#00F2EA] to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-black py-4 rounded-xl shadow-[0_0_20px_rgba(0,242,234,0.4)] transition-all uppercase tracking-widest text-sm"
              >
                BẮT ĐẦU CHƠI GAME
              </button>
            </div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#00F2EA]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProfileGamer;