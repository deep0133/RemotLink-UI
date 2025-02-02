import { useState } from "react";
import { toast } from "react-toastify";
import useLogout from "../../../hooks/useLogout";
import generateUrl from "../utils/urlGenerate";
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

  const [deleteMessageLoading, setDeleteMessageLoading] = useState("");
  const [deleteMessageMsg, setDeleteMessageMsg] = useState("");

  const [deleteFaqLoading, setDeleteFaqLoading] = useState("");
  const [deleteFaqMsg, setDeleteFaqMsg] = useState("");

  const { logutOutHandler } = useLogout();

  const deleteRequest = async (api, setLoading, setMessage) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const url = await generateUrl();
      const response = await fetch(url + api, {
        method: "DELETE",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }
      const data = await response.json();
      setMessage((prev) => !prev);
      toast.success(data.detail);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (api) => {
    await deleteRequest(api, setDeleteLoading, setDeleteMessage);
  };

  const handleDeleteUser = async (api) => {
    await deleteRequest(api, setDeleteUserLoading, setDeleteUserMessage);
  };

  const handleDeleteSite = async (api) => {
    await deleteRequest(api, setDeleteSiteLoading, setDeleteSiteMessage);
  };

  const handleDeleteReport = async (api) => {
    await deleteRequest(api, setDeleteReportLoading, setDeleteReportMessage);
  };

  const handleDeleteNotification = async (api) => {
    await deleteRequest(
      api,
      setDeleteNotificationLoading,
      setDeleteNotificationMessage
    );
  };

  const handleDeleteMessageMsg = async (api) => {
    await deleteRequest(api, setDeleteMessageLoading, setDeleteMessageMsg);
  };

  const handleDeleteFaq = async (api) => {
    await deleteRequest(api, setDeleteFaqLoading, setDeleteFaqMsg);
  };

  return {
    deleteLoading,
    deleteMessage,
    deleteNotificationLoading,
    deleteUserLoading,
    deleteSiteLoading,
    deleteReportLoading,
    deleteMessageLoading,
    deleteFaqLoading,
    deleteUserMessage,
    deleteSiteMessage,
    deleteReportMessage,
    deleteMessageMsg,
    deleteFaqMsg,
    deleteNotificationMessage,
    handleDelete,
    handleDeleteNotification,
    handleDeleteUser,
    handleDeleteSite,
    handleDeleteReport,
    handleDeleteMessageMsg,
    handleDeleteFaq,
  };
}
