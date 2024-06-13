import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import readSubdomainFromFile from "../Components/admin/utils/readSubdomainFromFile";

export default function useLogout() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const logutOutHandler = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      if (!token) return;
      const api = `api/website/logout/`;
      const baseUrl = process.env.REACT_APP_BACKEND_URL;
      const domain = await readSubdomainFromFile();

      const url = "https://" + domain + "." + baseUrl;

      const response = await fetch(url + api, {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
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

      // console.error("Error :", err);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logutOutHandler };
}
