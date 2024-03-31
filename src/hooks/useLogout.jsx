import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useLogout() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const logutOutHandler = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        `https://stage1.remotlink.com/api/website/logout/`,
        {
          method: "Get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }
      localStorage.clear();
      sessionStorage.clear();
      navigate("/");
      window.location.reload();
    } catch (err) {
      toast.error(err.message);
      console.error("Error :", err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logutOutHandler };
}
