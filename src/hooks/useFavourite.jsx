import { useState } from "react";
import readSubdomainFromFile from "../Components/admin/utils/readSubdomainFromFile";
import useLogout from "./useLogout";

export default function useFavourite() {
  const [message, setMessage] = useState("empty");
  const [status, setStatus] = useState({});
  const [bookMarkedSite, setBookMarkedSite] = useState({});

  const [subdomain, setSubdomain] = useState("");

  const { logutOutHandler } = useLogout();

  const handleAddToFavourite = async (id) => {
    try {
      const token = localStorage.getItem("access_token");
      const api = `api/user/favourites/add/${id}/`;
      const baseUrl = process.env.REACT_APP_BACKEND_URL;
      let domain = subdomain;
      if (!subdomain) {
        domain = await readSubdomainFromFile();
        setSubdomain(domain);
      }

      const url = "https://" + domain + "." + baseUrl;

      const response = await fetch(url + api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      setStatus((prevStatus) => ({ ...prevStatus, [id]: true }));
      setMessage(json.message);
    } catch (error) {
      // console.log("Error : ", error);
    }
  };

  const handleRemoveToFavourite = async (id) => {
    try {
      const token = localStorage.getItem("access_token");
      const api = `api/user/favourites/remove/${id}/`;
      const baseUrl = process.env.REACT_APP_BACKEND_URL;
      let domain = subdomain;
      if (!subdomain) {
        domain = await readSubdomainFromFile();
        setSubdomain(domain);
      }

      const url = "https://" + domain + "." + baseUrl;

      const response = await fetch(url + api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      setMessage((prev) => !prev);
      setStatus((prevStatus) => ({ ...prevStatus, [id]: false }));
    } catch (error) {
      // console.log("Error : ", error);
    }
  };

  return {
    message,
    status,
    setMessage,
    bookMarkedSite,
    setBookMarkedSite,
    handleAddToFavourite,
    handleRemoveToFavourite,
  };
}
