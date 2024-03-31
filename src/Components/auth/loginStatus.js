import { useState, useEffect } from "react";

const CheckLoginStatus = () => {
  const [loginStatus, setLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  /**
   * Check login Status
   */
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setLogin(true);

      const userData = localStorage.getItem("userdata");
      const parse = JSON.parse(userData);
      if (parse.is_admin) {
        setIsAdmin(true);
      }
    } else {
      setLogin(false);
    }
  }, []);

  return { loginStatus, isAdmin };
};

export default CheckLoginStatus;
