import { useState } from "react";
import { toast } from "react-toastify";
export default function useFetch() {
  const [categoryLoading, setCetegoryLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const [userCategoryLoading, setUserCategoryLoading] = useState(false);
  const [userCategoryData, setUserCategoryData] = useState([]);

  const [userLoading, setUserLoading] = useState(false);
  const [usersData, setUsersData] = useState([]);

  const [siteLoading, setSiteLoading] = useState(false);
  const [siteData, setSiteData] = useState([]);

  const [notificationLoading, setNotificationLoading] = useState(false);
  const [notificationData, setNotificationData] = useState([]);

  // Category Fetching....
  const handleFetctData = async (api) => {
    setCetegoryLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setCategoryData(data.results);
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setCetegoryLoading(false);
    }
  };

  // User Category Fatching...
  const handleFetctUserCategoryData = async (api) => {
    setUserCategoryLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setUserCategoryData(data.results);
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setUserCategoryLoading(false);
    }
  };

  // Users Fatching...
  const handleFetctUsers = async (api) => {
    setUserLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "Get",
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
      const data = await response.json();
      try {
        const jsonData = JSON.parse(JSON.stringify(data.results));
        console.log("Congle user data :", jsonData);

        // If parsing succeeds, set the usersData state
        setUsersData((prev) => [...jsonData]);
      } catch (error) {
        console.error("Received data is not valid JSON:", error);
        // Handle the error, e.g., show a message to the user or retry fetching data
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUserLoading(false);
    }
  };

  // Sites Fatching...
  const handleFetctSites = async (api) => {
    setSiteLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setSiteData(data.results);
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setSiteLoading(false);
    }
  };

  // Notification Fatching...
  const handleFetctNotifications = async (api) => {
    setNotificationLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setNotificationData(data);
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setNotificationLoading(false);
    }
  };

  return {
    categoryLoading,
    userCategoryLoading,
    userLoading,
    siteLoading,
    notificationLoading,
    categoryData,
    userCategoryData,
    usersData,
    siteData,
    notificationData,
    handleFetctData,
    handleFetctUserCategoryData,
    handleFetctUsers,
    handleFetctSites,
    handleFetctNotifications,
  };
}
