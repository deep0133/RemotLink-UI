import { useState } from "react";
export default function useFetch() {
  const [categoryLoading, setCetegoryLoading] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  const [userCategoryLoading, setUserCategoryLoading] = useState(false);
  const [userCategoryData, setUserCategoryData] = useState([]);

  const [userLoading, setUserLoading] = useState(false);
  const [usersData, setUsersData] = useState([]);

  const [userCourseLoading, setUserCourseLoading] = useState(false);
  const [userCourseData, setUserCourseData] = useState([]);

  const [siteLoading, setSiteLoading] = useState(false);
  const [siteData, setSiteData] = useState([]);

  const [reportLoading, setReportLoading] = useState(false);
  const [reportData, setReportData] = useState([]);

  const [reportSiteLoading, setReportSiteLoading] = useState(false);
  const [reportSiteData, setReportSiteData] = useState([]);

  const [loginLogsLoading, setLoginLogsLoading] = useState(false);
  const [loginLogsData, setLoginLogsData] = useState([]);

  const [notificationLoading, setNotificationLoading] = useState(false);
  const [notificationData, setNotificationData] = useState([]);

  const [institutionLoading, setInstitutionLoading] = useState(false);
  const [institutionData, setInstitutionData] = useState([]);

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
      setCategoryData(data);
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
      setUserCategoryData(data);
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
      setUsersData(data);
    } catch (err) {
      console.error(err.message);
    } finally {
      setUserLoading(false);
    }
  };

  // User Course Fatching...
  const handleFetctUserCourse = async (api) => {
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
      setUserCourseData(data.results);
    } catch (err) {
      console.error(err.message);
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
      setSiteData(data);
    } catch (err) {
      console.log("Error :", err.message);
    } finally {
      setSiteLoading(false);
    }
  };

  // Reports Fatching...
  const handleFetctReports = async (api) => {
    setReportLoading(true);
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
      setReportData(data.results);
    } catch (err) {
      console.log("Error :", err.message);
    } finally {
      setReportLoading(false);
    }
  };

  // Reports Fatching...
  const handleFetctSiteReports = async (api) => {
    setReportSiteLoading(true);
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
      setReportSiteData(data);
    } catch (err) {
      console.log("Error :", err.message);
    } finally {
      setReportSiteLoading(false);
    }
  };

  // Login Logs Reports Fatching...
  const handleFetctLoginLogs = async (api) => {
    setLoginLogsLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/` + api, {
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
      setLoginLogsData(data[0]);
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setLoginLogsLoading(false);
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
        const errorData = await response.json();
        throw new Error(
          errorData.detail || `HTTP error! Status: ${response.status}`
        );
      }
      const data = await response.json();
      console.log(" Notification------------- :", data);
      setNotificationData(data);
    } catch (err) {
      console.error("Error :", err);
    } finally {
      setNotificationLoading(false);
    }
  };

  // Institutions Fatching...
  const handleFetctInstitution = async (api) => {
    setInstitutionLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/` + api, {
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
      setInstitutionData(data);
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setInstitutionLoading(false);
    }
  };

  return {
    categoryLoading,
    userCategoryLoading,
    userLoading,
    siteLoading,
    notificationLoading,
    reportLoading,
    institutionLoading,
    loginLogsLoading,
    reportSiteLoading,
    categoryData,
    userCategoryData,
    usersData,
    siteData,
    reportData,
    reportSiteData,
    notificationData,
    handleFetctData,
    handleFetctUserCategoryData,
    loginLogsData,
    institutionData,
    userCourseData,
    handleFetctUsers,
    handleFetctSites,
    handleFetctNotifications,
    handleFetctReports,
    handleFetctLoginLogs,
    handleFetctInstitution,
    handleFetctSiteReports,
    handleFetctUserCourse,
  };
}
