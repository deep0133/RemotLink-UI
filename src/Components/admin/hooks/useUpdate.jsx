import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function useUpdate() {
  const navigate = useNavigate();
  // api/sites/categories/update/3/
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");

  const [updateUserCategoryLoading, setUpdatUserCategoryeLoading] =
    useState(false);
  const [updateUserCategoryMessage, setUpdatUserCategoryeMessage] =
    useState("");

  const [updateUserLoading, setUpdateUserLoading] = useState(false);
  const [updateUserMessage, setUpdateUserMessage] = useState("");

  const [updateNotificationLoading, setUpdateNotificationLoading] =
    useState(false);
  const [updateNotificationMessage, setUpdateNotificationMessage] =
    useState("");

  const handleUpdate = async (api, formData, navLink) => {
    setUpdateLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "PATCH",
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
      setUpdateMessage(data);
      toast.success("Updated Successfully");
      navigate(navLink);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleUpdateUserCategory = async (api, formData) => {
    setUpdatUserCategoryeLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "PATCH",
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
      setUpdatUserCategoryeMessage(data.detail);
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setUpdatUserCategoryeLoading(false);
    }
  };

  const handleUpdateUser = async (api, formData) => {
    setUpdateUserLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const data = await response.json();
      setUpdateUserMessage(data.detail);
      toast.success("User Updated Succesfully");
      navigate("/admin/users");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdateUserLoading(false);
    }
  };

  const handleUpdateNotification = async (api, formData) => {
    setUpdateNotificationLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "PATCH",
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
      setUpdateNotificationMessage(data.detail);
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setUpdateNotificationLoading(false);
    }
  };

  return {
    updateLoading,
    updateUserCategoryLoading,
    updateUserLoading,
    updateNotificationLoading,
    updateMessage,
    updateUserMessage,
    updateNotificationMessage,
    updateUserCategoryMessage,
    handleUpdate,
    handleUpdateUserCategory,
    handleUpdateUser,
    handleUpdateNotification,
  };
}
