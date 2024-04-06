import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function useAdd() {
  const navigate = useNavigate();

  const [addLoading, setAddLoading] = useState(false);
  const [addMessage, setAddMessage] = useState("");

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
      setAddMessage((prev) => !prev);
      toast.success(data.detail);
      navigate("/admin/category");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setAddLoading(false);
    }
  };

  const handleAddNewUser = async (api, formData) => {
    setAddNewUserLoading(true);
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
        let errorMessage;
        if (errorData.values) {
          // If "values" field exists in errorData, construct error message accordingly
          const missingFields = Array.isArray(errorData.values)
            ? errorData.values.join(", ")
            : errorData.values;
          errorMessage = `${errorData.error}. Missing fields: ${missingFields}`;
        } else {
          // If "values" field does not exist, use the error message directly
          errorMessage =
            errorData.error || `HTTP error! Status: ${response.status}`;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setAddNewUser((prev) => !prev);
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

      const formDataObj = new FormData();

      Object.keys(formData).forEach((key) => {
        formDataObj.append(key, formData[key]);
      });

      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataObj,
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.error || `HTTP error! Status: ${response.status}`
        );
      }
      const data = await response.json();
      setAddNewSite((prev) => !prev);
      toast.success(data.detail);
      navigate("/admin/sites");
    } catch (err) {
      toast.error(err.message);
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
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }
      const data = await response.json();
      setAddNotificationData((prev) => !prev);
      toast.success(data.detail);
      navigate("/admin/notifications");
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setAddNotificationLoading(false);
    }
  };

  return {
    addLoading,
    addNewUserLoading,
    addNewSiteLoading,
    addNotificationLoading,
    addMessage,
    addNewUser,
    addNewSite,
    addNotificationData,
    handleAdd,
    handleAddNewUser,
    handleAddNewSite,
    handleAddNotification,
  };
}
