import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function useUpdate() {
  const navigate = useNavigate();
  // api/sites/categories/update/3/
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");

  const [updateUserLoading, setUpdateUserLoading] = useState(false);
  const [updateUserMessage, setUpdateUserMessage] = useState("");

  const [updateSiteLoading, setUpdateSiteLoading] = useState(false);
  const [updateSiteMessage, setUpdateSiteMessage] = useState("");

  const [updateNotificationLoading, setUpdateNotificationLoading] =
    useState(false);
  const [updateNotificationMessage, setUpdateNotificationMessage] =
    useState("");

  const [updateInstiLoading, setUpdateInstiLoading] = useState(false);
  const [updateInstinMessage, setUpdatInstiMessage] = useState("");

  const handleUpdate = async (api, formData) => {
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
      // const data = await response.json();
      setUpdateMessage((prev) => !prev);
      toast.success("Updated Successfully");
      navigate(-1);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleUpdateUser = async (api, formData) => {
    setUpdateUserLoading(true);
    try {
      console.log("update handler :", formData);
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
      // const data = await response.json();
      setUpdateUserMessage((prev) => !prev);
      toast.success("User Updated Succesfully");
      navigate(-1);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdateUserLoading(false);
    }
  };

  const handleUpdateSites = async (api, formData) => {
    setUpdateSiteLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "multipart/form-data; Boundary=???",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        // Handle error
        const errorData = await response.json();
        const errorMessage = errorData.error;
        throw new Error(
          `Request failed with status ${response.status}: ${errorMessage}`
        );
      }
      // const data = await response.json();
      setUpdateSiteMessage((prev) => !prev);
      toast.success("Site Updated Succesfully");
      navigate(-1);
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setUpdateSiteLoading(false);
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
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }
      // const data = await response.json();
      setUpdateNotificationMessage((prev) => !prev);
      toast.success("Updated Successfully");
      navigate(-1);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdateNotificationLoading(false);
    }
  };

  const handleUpdatInstitution = async (api, formData) => {
    setUpdateInstiLoading(true);
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
      // const data = await response.json();
      setUpdatInstiMessage((prev) => !prev);
      toast.success("Updated Successfully");
      navigate(-1);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdateInstiLoading(false);
    }
  };

  return {
    updateLoading,
    updateUserLoading,
    updateNotificationLoading,
    updateSiteLoading,
    updateInstiLoading,
    updateMessage,
    updateUserMessage,
    updateNotificationMessage,
    updateSiteMessage,
    updateInstinMessage,
    handleUpdate,
    handleUpdateUser,
    handleUpdateSites,
    handleUpdateNotification,
    handleUpdatInstitution,
  };
}
