import { useAuth } from "../contexts/Authen";
// import OwnerDashboard from "../components/Owner/dashboard/OwnerDashboard";
import AdminDashboard from "../pages/Admin/AdminDashboard";

function DashboardRouter() {
  const { user } = useAuth();

  const roleId = Number(user?.role || user?.userType);

  if (roleId === 1) {
    return <AdminDashboard />;
  }

  if (roleId === 2) {
    // return <OwnerDashboard />;
  }

  return <div>Không có quyền truy cập</div>;
}

export default DashboardRouter;