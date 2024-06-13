import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import CheckLoginStatus from "./auth/loginStatus";

const ProtectedRoute = ({ children, setLoginModal }) => {
  const { loginStatus, loading } = CheckLoginStatus();

  useEffect(() => {
    if (!loading && loginStatus === false) {
      setLoginModal(true);
    }
  }, [loading, loginStatus, setLoginModal]);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a proper loading spinner
  }

  return loginStatus ? children : <Navigate to='/' />;
};

export default ProtectedRoute;
