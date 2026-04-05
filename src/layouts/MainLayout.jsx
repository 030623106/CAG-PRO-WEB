// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import GuestSidebar from './GuestSidebar';
import AdminSidebar from './AdminSidebar';
import OwnerSidebar from './OwnerSidebar';
import GamerSidebar from './GamerSidebar';
import ChatWidget from '../components/ChatWidget/ChatWidget';
import OwnerChatWidget from '../components/ChatWidget/OwnerChatWidget';
import SystemView from '../components/SystemView/SystemView'; 
import './Sidebar.css';
import MobileBottomNav from './MobileBottomNav';
import './MobileBottomNav.css';
import VipBenefits from '../components/VipBenefits/VipBenefits';
import { useAuth } from '../contexts/Authen';
const MainLayout = () => {
 const { user } = useAuth(); 

  let currentRole = 'guest';
  if (user) {
    const roleId = Number(user.role || user.userType);

    if (roleId === 1) currentRole = 'admin';
    else if (roleId === 2) currentRole = 'owner';
    else if (roleId === 4) currentRole = 'gamer';
  }

  const renderSidebar = () => {
    switch(currentRole) {
      case 'gamer': return <GamerSidebar />;
      case 'owner': return <OwnerSidebar />;
      case 'admin': return <AdminSidebar />;
      default: return <GuestSidebar />; 
    }
  };

  const renderChatWidget = () => {
    if (currentRole === 'guest') return null; 
    return currentRole === 'owner' ? <OwnerChatWidget /> : <ChatWidget />;
  };

  return (
    <div className="flex h-screen bg-[#0B0E14] text-slate-100 overflow-hidden font-montserrat relative">
      {renderSidebar()} 
      
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <main className="flex-1 overflow-y-auto pb-24 md:pb-0 scroll-smooth">
          <div className="w-full h-full">
            <Outlet />
          </div>
        </main>
        
        <MobileBottomNav role={currentRole} />
        {renderChatWidget()} 
        
        {/* Giữ nguyên z-[9999] như bản gốc HTML của bạn */}
        <div className="fixed bottom-[100px] left-2 md:bottom-4 md:left-4 z-[9999] font-mono flex gap-2 items-end">
          <SystemView /> 
          <VipBenefits role={currentRole} />
        </div>
        
      </div>
    </div>
  );
};

export default MainLayout;