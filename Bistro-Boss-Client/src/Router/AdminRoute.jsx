import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { isAdmin, adminLoading } = useAdmin();
  const location = useLocation();

  if (loading || adminLoading) {
    return <span className="loading loading-infinity w-full"></span>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
