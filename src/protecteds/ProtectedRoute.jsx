import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/Authen'; 

const getCurrentRole = (user, isAuthenticated) => {
  if (!isAuthenticated || !user) return 'guest';
  
  const roleId = Number(user.role || user.userType);
  if (roleId === 1) return 'admin';
  if (roleId === 2) return 'owner';
  if (roleId === 4) return 'gamer';
  
  return 'guest';
};

export const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user, isAuthenticated } = useAuth();
  const currentRole = getCurrentRole(user, isAuthenticated);

  if (allowedRoles.includes(currentRole)) {
    return children;
  }

  return <RoleBasedRedirect />;
};

export const RoleBasedRedirect = () => {
  const { user, isAuthenticated } = useAuth();
  const currentRole = getCurrentRole(user, isAuthenticated);

  switch (currentRole) {
    case 'admin': return <Navigate to="/dashboard" replace />;
    case 'owner': return <Navigate to="/store" replace />;
    case 'gamer': 
    case 'guest': 
    default: 
      return <Navigate to="/cong-dong-cag" replace />; 
  }
};

export default ProtectedRoute;