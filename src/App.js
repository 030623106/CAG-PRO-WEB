// src/App.js
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProCloudSave from "./pages/Gamer/ProCloudSave/ProCloudSave";
import WelcomePage from "./pages/welcome/WelcomePage";
import ProfileGamer from "./pages/Gamer/Profile/ProfileGamer";
import { ProtectedRoute, RoleBasedRedirect } from "./protecteds/ProtectedRoute";
import { AuthProvider } from "./contexts/Authen";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          
          <Route element={<MainLayout />}>
            {/* guest & gamer */}
            <Route path="/cong-dong-cag" element={<ProtectedRoute allowedRoles={['guest', 'gamer']} />} />
            <Route path="/offices" element={<ProtectedRoute allowedRoles={['admin','guest', 'gamer']} />} />

            {/* gamer */}
            <Route path="/pro-cloud-save" element={<ProtectedRoute allowedRoles={['gamer']}><ProCloudSave /></ProtectedRoute>} />
            <Route path="/wallet" element={<ProtectedRoute allowedRoles={['gamer']}><ProfileGamer /></ProtectedRoute>} />

            {/* owner */}
            <Route path="/store" element={<ProtectedRoute allowedRoles={['owner']} />} />

            {/* admin */}
            <Route path="/mod"element={<ProtectedRoute allowedRoles={['admin']}><ProfileGamer /></ProtectedRoute>}  />
            {/* owner & admin (Gộp các đường dẫn trùng nhau) */}
            <Route path="/dashboard" element={<ProtectedRoute allowedRoles={['owner', 'admin']} />} />
            <Route path="/notifications" element={<ProtectedRoute allowedRoles={['owner', 'admin']} />} />
          </Route>
          <Route path="*" element={<RoleBasedRedirect />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;