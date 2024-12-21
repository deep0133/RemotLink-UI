import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import readSubdomainFromFile from "../utils/readSubdomainFromFile";
import useLogout from "../../../hooks/useLogout";
export default function useUpdate() {
  const navigate = useNavigate();

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

  const [updateMessageMsgLoading, setUpdateMessageMsgLoading] = useState(false);
  const [updateMessageMsgData, setUpdateMessageMsgData] = useState("");

  const [updateFaqLoading, setUpdateFaqLoading] = useState(false);
  const [updateFaqMessage, setUpdateFaqMessage] = useState("");

  const [uploadUserTemplateLoading, setUploadUserTemplateLoading] =
    useState(false);
  const [uploadUserTemplateMessage, setUploadUserTemplateMessage] =
    useState("");

  const [subdomain, setSubdomain] = useState("");

  const { logutOutHandler } = useLogout();

  const request = async (api, formData) => {
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
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      return response;
    } catch (error) {}
  };

  const handleUpdate = async (api, formData) => {
    setUpdateLoading(true);
    try {
      const response = await request(api, formData);
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }
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
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataObj,
      });

      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        const errorResponse = await response.json();
        if (errorResponse && typeof errorResponse === "object") {
          const errorMessage = Object.values(errorResponse).flat().join("\n");
          throw new Error(errorMessage);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }
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
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataObj,
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        // Handle error
        let errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }
      setUpdateSiteMessage((prev) => !prev);
      toast.success("Site Updated Succesfully");
      navigate(-1);
    } catch (err) {
      const parseError = JSON.parse(err?.message);
      const keys = Object.keys(parseError || {});
      keys?.forEach((key) => {
        toast.error(`${key} : ${parseError[key][0]}`);
      });
    } finally {
      setUpdateSiteLoading(false);
    }
  };

  const handleUpdateNotification = async (api, formData) => {
    setUpdateNotificationLoading(true);
    try {
      const response = await request(api, formData);
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
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
        method: "PATCH",
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
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }
      setUpdatInstiMessage((prev) => !prev);
      toast.success("Updated Successfully");
      navigate(-1);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdateInstiLoading(false);
    }
  };

  const handleUpdateMessageMsg = async (api, formData) => {
    setUpdateMessageMsgLoading(true);
    try {
      const response = await request(api, formData);
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }
      setUpdateMessageMsgData((prev) => !prev);
      toast.success("Updated Successfully");
      navigate(-1);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdateMessageMsgLoading(false);
    }
  };

  const handleUpdateFaq = async (api, formData) => {
    setUpdateFaqLoading(true);
    try {
      const response = await request(api, formData);
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }
      setUpdateFaqMessage((prev) => !prev);
      toast.success("Updated Successfully");
      navigate(-1);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUpdateFaqLoading(false);
    }
  };

  const handleUploadBulkUserTemplate = async (api, file) => {
    setUploadUserTemplateLoading(true);
    try {
      const token = localStorage.getItem("access_token");

      const formDataObj = new FormData();

      formDataObj.append("file", file);

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
        const errorResponse = await response.json();
        if (errorResponse && typeof errorResponse === "object") {
          const errorMessage = Object.values(errorResponse).flat().join("\n");
          throw new Error(errorMessage);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }
      const json = await response.json();

      setUploadUserTemplateMessage((prev) => !prev);
      toast.success(json.message);
      navigate(-1);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setUploadUserTemplateLoading(false);
    }
  };

  return {
    updateLoading,
    updateUserLoading,
    updateNotificationLoading,
    updateSiteLoading,
    updateInstiLoading,
    updateMessageMsgLoading,
    updateFaqLoading,
    uploadUserTemplateLoading,
    updateMessage,
    updateUserMessage,
    updateNotificationMessage,
    updateSiteMessage,
    updateInstinMessage,
    updateMessageMsgData,
    updateFaqMessage,
    uploadUserTemplateMessage,
    handleUpdate,
    handleUpdateUser,
    handleUpdateSites,
    handleUpdateNotification,
    handleUpdatInstitution,
    handleUpdateMessageMsg,
    handleUpdateFaq,
    handleUploadBulkUserTemplate,
  };
}
