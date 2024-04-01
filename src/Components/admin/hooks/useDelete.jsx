import { useState } from "react";
import { toast } from "react-toastify";
export default function useDelete() {
  const [deleteLoading, setDeleteLoading] = useState("");
  const [deleteMessage, setDeleteMessage] = useState("");

  const [deleteUserLoading, setDeleteUserLoading] = useState("");
  const [deleteUserMessage, setDeleteUserMessage] = useState("");

  const [deleteSiteLoading, setDeleteSiteLoading] = useState("");
  const [deleteSiteMessage, setDeleteSiteMessage] = useState("");

  const [deleteReportLoading, setDeleteReportLoading] = useState("");
  const [deleteReportMessage, setDeleteReportMessage] = useState("");

  const [deleteNotificationLoading, setDeleteNotificationLoading] =
    useState("");
  const [deleteNotificationMessage, setDeleteNotificationMessage] =
    useState("");

  const handleDelete = async (api) => {
    setDeleteLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "DELETE",
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
      toast.success(data.detail);
      setDeleteMessage((prev) => !prev);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleDeleteUser = async (api) => {
    setDeleteUserLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "DELETE",
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
      setDeleteUserMessage((prev) => !prev);
      toast.success(data.detail);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeleteUserLoading(false);
    }
  };

  const handleDeleteSite = async (api) => {
    setDeleteSiteLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "DELETE",
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
      setDeleteSiteMessage((prev) => !prev);
      toast.success(data.detail);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeleteSiteLoading(false);
    }
  };

  const handleDeleteReport = async (api) => {
    setDeleteReportLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "DELETE",
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
      setDeleteReportMessage((prev) => !prev);
      toast.success(data.detail);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setDeleteReportLoading(false);
    }
  };

  // -----------Notification-----------
  const handleDeleteNotification = async (api) => {
    setDeleteNotificationLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "DELETE",
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
      setDeleteNotificationMessage((prev) => !prev);
      toast.success(data.detail);
    } catch (err) {
      // console.log("Error :", err);
      toast.error(err.message);
    } finally {
      setDeleteNotificationLoading(false);
    }
  };
  return {
    deleteLoading,
    deleteMessage,
    deleteNotificationLoading,
    deleteUserLoading,
    deleteSiteLoading,
    deleteReportLoading,
    deleteUserMessage,
    deleteSiteMessage,
    deleteReportMessage,
    handleDelete,
    handleDeleteNotification,
    deleteNotificationMessage,
    handleDeleteUser,
    handleDeleteSite,
    handleDeleteReport,
  };
}
