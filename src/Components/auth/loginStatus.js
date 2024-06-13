import { useState, useEffect } from "react";

const CheckLoginStatus = () => {
  const [loginStatus, setLogin] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateState();
  }, []);

  const updateState = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setLogin(true);
      const userData = localStorage.getItem("userdata");
      const parse = JSON.parse(userData);
      if (parse && parse.is_admin) {
        setIsAdmin(true);
      }
    } else {
      setLogin(false);
    }
    setLoading(false);
  };

  return { loginStatus, isAdmin, loading, updateState };
};

export default CheckLoginStatus;
