import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import generateUrl from "../Components/admin/utils/urlGenerate";

export default function useLogout() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const logutOutHandler = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const refresh_token = localStorage.getItem("refresh_token");
      if (!token) return;
      const api = `api/website/logout/`;
      const url = await generateUrl();
      const response = await fetch(url + api, {
        method: "Post",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          refresh_token: refresh_token,
          access_token: token,
        }),
      });
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
    } finally {
      setLoading(false);
    }
  };

  return { loading, logutOutHandler };
}
