// src/App.js
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProCloudSave from "./pages/Gamer/ProCloudSave/ProCloudSave";
import WelcomePage from "./pages/welcome/WelcomePage";
import ProfileGamer from "./pages/Gamer/Profile/ProfileGamer";
import { ProtectedRoute, RoleBasedRedirect } from "./protecteds/ProtectedRoute";
import CongDongCAG from "./pages/Gamer/CongDongCAG/CongDongCAG";
import CAGGuide from "./pages/Gamer/CAGGuide/CAGGuide";
import CAGEspostHub from "./pages/Gamer/CAG Espost Hub/Esports";
import DashboardRouter from "./protecteds/DashboardRouter";
import KiemDuyetPage from "./pages/Admin/KiemDuyetPage"
import Notification from "./pages/Notifications";
import { useAuth } from './contexts/Authen';

function App() {
  const { user } = useAuth();
  let currentRole = 'OWNER';
  if (user) {
    const roleId = Number(user.role || user.userType);
    if (roleId === 1) currentRole = 'ADMIN';
    else if (roleId === 2) currentRole = 'OWNER';
  }
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          
          <Route element={<MainLayout />}>
            {/* public */}
            <Route path="/cong-dong-cag" element={<ProtectedRoute allowedRoles={['guest', 'gamer']}><CongDongCAG /></ProtectedRoute>} />
            <Route path="/offices" element={<ProtectedRoute allowedRoles={['admin','guest', 'gamer']} ><CAGGuide /></ProtectedRoute>} />
            <Route path="/esports" element={<ProtectedRoute allowedRoles={['admin','guest', 'gamer']} >  <CAGEspostHub /></ProtectedRoute>} />

            {/* gamer */}
            <Route path="/pro-cloud-save" element={<ProtectedRoute allowedRoles={['gamer']}><ProCloudSave /></ProtectedRoute>} />
            <Route path="/wallet" element={<ProtectedRoute allowedRoles={['gamer']}><ProfileGamer /></ProtectedRoute>} />

            {/* owner */}
            <Route path="/store" element={<ProtectedRoute allowedRoles={['owner']} />} />

            {/* admin */}
            <Route path="/mod"element={<ProtectedRoute allowedRoles={['admin']}><KiemDuyetPage /></ProtectedRoute>}  />
            {/* owner & admin (Gộp các đường dẫn trùng nhau) */}
            <Route path="/dashboard" element={ <ProtectedRoute allowedRoles={['owner','admin']}><DashboardRouter /></ProtectedRoute>}/>
            <Route path="/notifications" element={ <ProtectedRoute allowedRoles={['owner','admin']}><Notification role={currentRole} /></ProtectedRoute>}/>
          </Route>
          <Route path="*" element={<RoleBasedRedirect />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;