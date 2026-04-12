import React, { useState } from 'react';

import PostCard from '../../components/Admin/KiemDuyet/PostCard';
import NetCard from '../../components/Admin/KiemDuyet/NetCard';
import UserTable from '../../components/Admin/KiemDuyet/UserTable';

const PageHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold text-white flex items-center gap-2 font-rajdhani">
        <span className="w-2 h-8 bg-red-600 rounded-full shadow-[0_0_15px_#dc2626]"></span>
        CAG GUARDIAN (ADMIN)
      </h2>
    </div>
  );
};

const TabsNavigation = ({ activeTab, setActiveTab, postsCount, netsCount }) => {
  return (
    <div className="flex gap-2 border-b border-slate-700 pb-2">
      <button 
        onClick={() => setActiveTab('posts')}
        className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${
          activeTab === 'posts' ? 'bg-red-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
        }`}
      >
        Kiểm Duyệt Bài Viết ({postsCount})
      </button>
      <button 
        onClick={() => setActiveTab('nets')}
        className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${
          activeTab === 'nets' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
        }`}
      >
        Duyệt Quán Net ({netsCount})
      </button>
      <button 
        onClick={() => setActiveTab('users')}
        className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${
          activeTab === 'users' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
        }`}
      >
        Quản Lý User
      </button>
    </div>
  );
};

const KiemDuyetPage = () => {
  const [activeTab, setActiveTab] = useState('posts');

  const [posts, setPosts] = useState([
    { id: 1, user: { name: "Gamer Ẩn Danh", avatar: "https://i.pravatar.cc/150?img=11", id: "Gamer Ẩn Danh", trustScore: 70 }, post: { statusText: "BỊ BÁO CÁO (1)", statusColor: "bg-red-600 text-white", time: "5 giờ trước", content: "Lỗi save game Wukong không load được ở chapter 4, ai biết fix không cứu với :((", tags: ["#LoiGame", "#Help"] } },
    { id: 2, user: { name: "Newbie123", avatar: "https://i.pravatar.cc/150?img=12", id: "Newbie123", trustScore: 50 }, post: { statusText: "CHỜ DUYỆT MỚI", statusColor: "bg-yellow-600 text-black", time: "Vừa xong", content: "Có ai biết cách hack tiền trong GTA V online không? Chỉ mình với, trả phí 50k thẻ cào.", tags: ["#HackGame", "#Cheat"] } }
  ]);

  const [nets, setNets] = useState([
    { id: 1, name: "Speed Gaming 2", status: "CHỜ DUYỆT", statusColor: "bg-blue-900/50 text-blue-400 border-blue-700/50", address: "123 Trần Hưng Đạo, Q.1", machines: 80, software: "CAG Pro 3.0" },
    { id: 2, name: "Gaming House Pro", status: "CẦN CẬP NHẬT", statusColor: "bg-blue-900/50 text-blue-400 border-blue-700/50", address: "70 Lê Lai, Q.1", machines: 100, software: "CAG Pro 3.0", note: "Cần cập nhật hình ảnh không gian quán." }
  ]);

  const [users, setUsers] = useState([
    { name: "Lương Quang Vinh", username: "@luongvinh3969", email: "vinh.luong@cag.vn", avatar: "https://i.pravatar.cc/300?img=11", role: "GAMER", roleColor: "bg-slate-700 text-slate-300", rank: "DIAMOND", points: "8888 pts", status: "ACTIVE", statusColor: "bg-green-900/50 text-green-400" },
    { name: "Nguyễn Văn Chủ", username: "@owner_flash", email: "owner@flashgaming.vn", avatar: "https://i.pravatar.cc/300?img=68", role: "OWNER", roleColor: "bg-blue-900/50 text-blue-400", rank: "DIAMOND", points: "100000 pts", status: "ACTIVE", statusColor: "bg-green-900/50 text-green-400" },
    { name: "Admin Hệ Thống", username: "@system_admin", email: "admin@cag.vn", avatar: "https://i.pravatar.cc/300?img=11", role: "ADMIN", roleColor: "bg-purple-900/50 text-purple-400", rank: "DIAMOND", points: "999999 pts", status: "ACTIVE", statusColor: "bg-green-900/50 text-green-400" },
    { name: "Nguyễn Văn A", username: "@hacker_pro", email: "hacker@example.com", avatar: "https://i.pravatar.cc/150?u=2", role: "GAMER", roleColor: "bg-slate-700 text-slate-300", rank: "BRONZE", points: "0 pts", status: "BANNED", statusColor: "bg-red-900/50 text-red-400" },
    { name: "Trần Thị B", username: "@cyber_owner", email: "owner@cyber.com", avatar: "https://i.pravatar.cc/150?u=3", role: "OWNER", roleColor: "bg-blue-900/50 text-blue-400", rank: "GOLD", points: "5000 pts", status: "ACTIVE", statusColor: "bg-green-900/50 text-green-400" }
  ]);

  // Các hàm xử lý
  const handleRemovePost = (postId) => setPosts(prev => prev.filter(p => p.id !== postId));
  const handleRemoveNet = (netId) => setNets(prev => prev.filter(n => n.id !== netId));
  const handleUserAction = (action, email) => {
    setUsers(prev => prev.map(user => {
      if (user.email === email) {
        if (action === 'BAN') return { ...user, status: "BANNED", statusColor: "bg-red-900/50 text-red-400" };
        if (action === 'UNBAN') return { ...user, status: "ACTIVE", statusColor: "bg-green-900/50 text-green-400" };
        if (action === 'MAKE_ADMIN') return { ...user, role: "ADMIN", roleColor: "bg-purple-900/50 text-purple-400" };
      }
      return user;
    }));
  };

  let renderContent = null;
  if (activeTab === 'posts') {
    renderContent = posts.length > 0 
      ? posts.map(data => <PostCard key={data.id} user={data.user} post={data.post} onAction={() => handleRemovePost(data.id)} />)
      : (
        <div className="text-center py-20 bg-slate-900 rounded-xl border border-slate-800">
          <div className="text-6xl mb-4">🛡️</div>
          <h3 className="text-xl font-bold text-white">Hệ thống sạch sẽ!</h3>
          <p className="text-slate-500">Không có bài viết nào cần duyệt lúc này.</p>
        </div>
      );
  } else if (activeTab === 'nets') {
    renderContent = nets.length > 0
      ? nets.map(net => <NetCard key={net.id} net={net} onAction={() => handleRemoveNet(net.id)} />)
      : (
        <div className="text-center py-20 bg-slate-900 rounded-xl border border-slate-800">
          <div className="text-6xl mb-4">🏢</div>
          <h3 className="text-xl font-bold text-white">Không có quán mới</h3>
          <p className="text-slate-500">Tất cả các quán đã được duyệt.</p>
        </div>
      );
  } else if (activeTab === 'users') {
    renderContent = <UserTable users={users} onAction={handleUserAction} />;
  }

  return (
    <>
      <style>
        {`
          .glass-panel {
            background: rgba(11, 14, 20, 0.7);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.04);
          }
        `}
      </style>

      <main className="flex-1 overflow-y-auto pb-24 md:pb-0 scroll-smooth no-scrollbar font-montserrat">
        <div className="w-full h-full">
          <div className="space-y-6 animate-fade-in pb-20">
            <PageHeader />
            <TabsNavigation 
              activeTab={activeTab} 
              setActiveTab={setActiveTab} 
              postsCount={posts.length} 
              netsCount={nets.length} 
            />
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {renderContent}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default KiemDuyetPage;