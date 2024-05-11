import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import readSubdomainFromFile from "../utils/readSubdomainFromFile";
import useLogout from "../../../hooks/useLogout";
export default function useAdd() {
  const navigate = useNavigate();

  const { logutOutHandler } = useLogout();

  // category - site : user
  const [addLoading, setAddLoading] = useState(false);
  const [addMessage, setAddMessage] = useState("");

  // user
  const [addNewUserLoading, setAddNewUserLoading] = useState(false);
  const [addNewUser, setAddNewUser] = useState({});

  // site
  const [addNewSiteLoading, setAddNewSiteLoading] = useState(false);
  const [addNewSite, setAddNewSite] = useState({});

  // notification
  const [addNotificationLoading, setAddNotificationLoading] = useState(false);
  const [addNotificationData, setAddNotificationData] = useState({});

  // message
  const [messageLoadingMsg, setMessageLoadingMsg] = useState(false);
  const [messageDataMsg, setMessageDataMsg] = useState("");

  // Faq
  const [addFaqLoading, setAddFaqLoading] = useState(false);
  const [faqAddMessage, setFaqAddMessage] = useState("");

  const [subdomain, setSubdomain] = useState("");

  const handleAdd = async (api, formData) => {
    setAddLoading(true);
    try {
      const token = localStorage.getItem("access_token");
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
        body: JSON.stringify(formData),
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
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
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
          Authorization: `Bearer ${token}`,
        },
        body: formDataObj,
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
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
        body: JSON.stringify(formData),
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
      setAddNotificationData((prev) => !prev);
      toast.success(data.detail);
      navigate("/admin/notifications");
    } catch (err) {
      // console.log("Error :", err);
    } finally {
      setAddNotificationLoading(false);
    }
  };

  const handleAddMessage = async (api, formData) => {
    setMessageLoadingMsg(true);
    try {
      const token = localStorage.getItem("access_token");
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
        body: JSON.stringify(formData),
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
      setMessageDataMsg((prev) => !prev);
      toast.success(data.detail);
      navigate("/admin/message");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setMessageLoadingMsg(false);
    }
  };

  const handleAddFaq = async (api, formData) => {
    setAddFaqLoading(true);
    try {
      const token = localStorage.getItem("access_token");
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
        body: JSON.stringify(formData),
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
      setFaqAddMessage((prev) => !prev);
      toast.success("Faq Added Successfully");
      navigate(-1);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setAddFaqLoading(false);
    }
  };

  return {
    addLoading,
    addNewUserLoading,
    addNewSiteLoading,
    addNotificationLoading,
    addFaqLoading,
    addMessage,
    addNewUser,
    addNewSite,
    addNotificationData,
    messageLoadingMsg,
    messageDataMsg,
    faqAddMessage,
    handleAdd,
    handleAddNewUser,
    handleAddNewSite,
    handleAddNotification,
    handleAddMessage,
    handleAddFaq,
  };
}
