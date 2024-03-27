import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function useAdd() {
  const navigate = useNavigate();

  const [addLoading, setAddLoading] = useState(false);
  const [addMessage, setAddMessage] = useState("");

  const [addUserCategoryLoading, setAddUserCategoryLoading] = useState(false);
  const [addUserCategoryMessage, setAddUserCategoryMessage] = useState("");

  const [addNewUserLoading, setAddNewUserLoading] = useState(false);
  const [addNewUser, setAddNewUser] = useState({});

  const [addNewSiteLoading, setAddNewSiteLoading] = useState(false);
  const [addNewSite, setAddNewSite] = useState({});

  const [addNotificationLoading, setAddNotificationLoading] = useState(false);
  const [addNotificationData, setAddNotificationData] = useState({});

  const handleAdd = async (api, formData) => {
    setAddLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }
      const data = await response.json();
      setAddMessage(data.detail);
      toast.success(data.detail);
      navigate("/admin/category");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setAddLoading(false);
    }
  };

  const handleAddUserCategory = async (api, formData) => {
    setAddUserCategoryLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }
      const data = await response.json();
      setAddUserCategoryMessage(data.detail);
      toast.success(data.detail);
      navigate("/admin/category/user");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setAddUserCategoryLoading(false);
    }
  };

  const handleAddNewUser = async (api, formData) => {
    setAddNewUserLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      // /api/user/add/
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }
      const data = await response.json();
      setAddNewUser(data.detail);
      toast.success(data.detail);
      navigate("/admin/users");
    } catch (err) {
      toast.success(err.message);
    } finally {
      setAddNewUserLoading(false);
    }
  };

  const handleAddNewSite = async (api, formData) => {
    setAddNewSiteLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setAddNewSite(data.detail);
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setAddNewSiteLoading(false);
    }
  };

  const handleAddNotification = async (api, formData) => {
    setAddNotificationLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setAddNotificationData(data.detail);
      navigate("/admin/notifications");
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setAddNotificationLoading(false);
    }
  };

  return {
    addLoading,
    addUserCategoryLoading,
    addNewUserLoading,
    addNewSiteLoading,
    addNotificationLoading,
    addMessage,
    addNewUser,
    addUserCategoryMessage,
    addNewSite,
    addNotificationData,
    handleAdd,
    handleAddUserCategory,
    handleAddNewUser,
    handleAddNewSite,
    handleAddNotification,
  };
}
