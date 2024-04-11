import { useState } from "react";
import subdmonpath from "../../../../src/subdomain.txt";
import readSubdomainFromFile from "../utils/readSubdomainFromFile";
export default function useFetch() {
  const [categoryLoading, setCetogoryLoading] = useState(false);
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

  const [messageLoading, setMessageLoading] = useState(false);
  const [messageData, setMessageData] = useState([]);

  const [faqLoading, setFaqLoading] = useState(false);
  const [faqData, setFaqData] = useState([]);

  const [subdomain, setSubdomain] = useState("");

  //  ------ Fetch Data -------
  const fetchData = async (api, setLoading, setData, addResult, loginLogs) => {
    setLoading(true);
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
        method: "GET",
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
      if (addResult) {
        setData(data.results);
      } else if (loginLogs) {
        setData(data[0]);
      } else {
        setData(data);
      }
    } catch (error) {
      console.error("Error :", error);
    } finally {
      setLoading(false);
    }
  };

  // Category Fetching....
  const handleFetctData = async (api, addResult = false) => {
    await fetchData(api, setCetogoryLoading, setCategoryData, addResult);
  };

  const handleFetctUserCategoryData = async (api) => {
    await fetchData(api, setUserCategoryLoading, setUserCategoryData);
  };

  // Users Fatching...
  const handleFetctUsers = async (api) => {
    await fetchData(api, setUserLoading, setUsersData);
  };

  // User Course Fatching...
  const handleFetctUserCourse = async (api) => {
    await fetchData(api, setUserCourseLoading, setUserCourseData, true);
  };

  // Sites Fatching...
  const handleFetctSites = async (api) => {
    await fetchData(api, setSiteLoading, setSiteData);
  };

  // Reports Fatching...
  const handleFetctReports = async (api) => {
    await fetchData(api, setReportLoading, setReportData, true);
  };

  // Reports Fatching...
  const handleFetctSiteReports = async (api) => {
    await fetchData(api, setReportSiteLoading, setReportSiteData);
  };

  // Login Logs Reports Fatching...
  const handleFetctLoginLogs = async (api) => {
    await fetchData(api, setLoginLogsLoading, setLoginLogsData, false, true);
  };

  // Notification Fatching...
  const handleFetctNotifications = async (api) => {
    await fetchData(api, setNotificationLoading, setNotificationData);
  };

  // Institutions Fatching...
  const handleFetctInstitution = async (api) => {
    await fetchData(api, setInstitutionLoading, setInstitutionData);
  };

  // Message Fetciing...
  const handleFetchMessages = async (api) => {
    await fetchData(api, setMessageLoading, setMessageData);
  };

  // Faq Fetching...
  const handleFetchFaq = async (api) => {
    await fetchData(api, setFaqLoading, setFaqData);
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
    messageLoading,
    userCourseLoading,
    faqLoading,
    categoryData,
    userCategoryData,
    usersData,
    siteData,
    reportData,
    reportSiteData,
    notificationData,
    loginLogsData,
    institutionData,
    userCourseData,
    messageData,
    faqData,
    handleFetctData,
    handleFetctUserCategoryData,
    handleFetctUsers,
    handleFetctSites,
    handleFetctNotifications,
    handleFetctReports,
    handleFetctLoginLogs,
    handleFetctInstitution,
    handleFetctSiteReports,
    handleFetctUserCourse,
    handleFetchMessages,
    handleFetchFaq,
  };
}
