import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import CheckLoginStatus from "./auth/loginStatus";

const AdminRoute = ({ children, setLoginModal }) => {
  const { loginStatus, isAdmin, loading } = CheckLoginStatus();

  useEffect(() => {
    if (!loading && !loginStatus) {
      setLoginModal(true);
    }
  }, [loading, loginStatus, setLoginModal]);

  if (loading) {
    return <div>Loading...</div>; // Replace with your loading spinner or component
  }

  if (!loginStatus) {
    return <Navigate to='/' />;
  }

  return isAdmin ? children : <Navigate to='/home' />;
};

export default AdminRoute;
