import { useState } from "react";
import generateUrl from "../Components/admin/utils/urlGenerate";
import useLogout from "./useLogout";

export default function useFavourite() {
  const [message, setMessage] = useState("empty");
  const [status, setStatus] = useState({});

  const { logutOutHandler } = useLogout();

  const handleAddToFavourite = async (id) => {
    try {
      const token = localStorage.getItem("access_token");
      const api = `api/user/favourites/add/${id}/`;

      const url = await generateUrl();

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
      setMessage((prev) => !prev);
      setStatus((prevStatus) => ({ ...prevStatus, [id]: true }));
    } catch (error) {
      // console.log("Error : ", error);
    }
  };

  const handleRemoveToFavourite = async (id) => {
    try {
      const token = localStorage.getItem("access_token");
      const api = `api/user/favourites/remove/${id}/`;

      const url = await generateUrl();

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
    handleAddToFavourite,
    handleRemoveToFavourite,
  };
}
