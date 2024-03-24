import { useState } from "react";

export default function useFavourite() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({});
  const [bookMarkedSite, setBookMarkedSite] = useState({});
  const handleAddToFavourite = async (id) => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        `https://stage1.remotlink.com/api/user/favourites/add/${id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      setStatus((prevStatus) => ({ ...prevStatus, [id]: true }));
      setMessage(json.message);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const handleRemoveToFavourite = async (id) => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        `https://stage1.remotlink.com/api/user/favourites/remove/${id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      setMessage(json.message);
      setStatus((prevStatus) => ({ ...prevStatus, [id]: false }));
    } catch (error) {
      console.log("Error : ", error);
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
