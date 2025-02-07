import { useState } from "react";
import useLogout from "../../../hooks/useLogout";
import generateUrl from "../utils/urlGenerate";
import checkApi from "../../../hooks/helper";
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

  const [overviewCardDataLoading, setOverviewCardDataLoading] = useState(false);
  const [overviewCardData, setOverviewCardData] = useState({});

  const [overviewUserEngageDataLoading, setOverviewUserEngageDataLoading] =
    useState(false);
  const [overviewUserEngageData, setOverviewUserEngageData] = useState([]);

  const [
    overviewRecentlyUpdatedDataLoading,
    setOverviewRecentlyUpdatedDataLoading,
  ] = useState(false);
  const [overviewRecentlyUpdatedData, setOverviewRecentlyUpdatedData] =
    useState([]);

  const [bulkUserTaskListLoading, setBulkUserTaskListLoading] = useState(false);
  const [bulkUserTaskListData, setBulkUserTaskListData] = useState([]);

  const [bulkUserTaskListDetailsLoading, setBulkUserTaskListDetailsLoading] =
    useState(false);
  const [bulkUserTaskListDetailsData, setBulkUserTaskListDetailsData] =
    useState([]);

  const [overviewUtilizationDataLoading, setOverviewUtilizationDataLoading] =
    useState(false);
  const [overviewUtilizationData, setOverviewUtilizationData] = useState(null);

  const [overviewHourlyDataLoading, setOverviewHourlyDataLoading] =
    useState(false);
  const [overviewHourlyData, setOverviewHourlyData] = useState(null);

  const [
    overviewDatabaseUsageDataLoading,
    setOverviewDatabaseUsageDataLoading,
  ] = useState(false);
  const [overviewDatabaseUsageData, setOverviewDatabaseUsageData] =
    useState(null);

  const [dashboardUserCategoryLoading, setDashboardUserCategoryLoading] =
    useState(false);
  const [dashboardUserCategoryData, setDashboardUserCategoryData] =
    useState(null);

  const [activeUserTimelineGraphLoading, setActiveUserTimelineGraphLoading] =
    useState(false);
  const [activeUserTimelineGraphData, setActiveUserTimelineGraphData] =
    useState(null);

  const [topReadersLoading, setTopReadersLoading] = useState(false);
  const [topReadersData, setTopReadersData] = useState(null);

  const [userCategoryDistributionLoading, setUserCategoryDistributionLoading] =
    useState(false);
  const [userCategoryDistributionData, setUserCategoryDistributionData] =
    useState(null);

  const [dashboardCategoryCardLoading, setDashboardCategoryCardLoading] =
    useState(false);
  const [dashboardCategoryCardData, setDashboardCategoryCardData] =
    useState(null);

  const [topResourceSubjectLoading, setTopResourceSubjectLoading] =
    useState(false);
  const [topResourceSubjectData, setTopResourceSubjectData] = useState(null);

  const [
    dashboardSubjectWiseDistributionLoading,
    setDashboardSubjectWiseDistributionLoading,
  ] = useState(false);
  const [
    dashboardSubjectWiseDistributionData,
    setDashboardSubjectWiseDistributionData,
  ] = useState(null);

  const [dashboardResourceCardLoading, setDashboardResourceCardLoading] =
    useState(false);
  const [dashboardResourceCardData, setDashboardResourceCardData] =
    useState(null);

  const [
    dashboardResourcePopularUserLoading,
    setDashboardResourcePopularUserLoading,
  ] = useState(false);
  const [
    dashboardResourcePopularUserData,
    setDashboardResourcePopularUserData,
  ] = useState(null);

  const { logutOutHandler } = useLogout();

  //  ------ Fetch Data -------
  const fetchData = async (api, setLoading, setData, addResult, loginLogs) => {
    setLoading(true);

    try {
      const token = localStorage.getItem("access_token");

      if (!token) return;

      const url = await generateUrl();
      const response = await fetch(url + api, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
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
      if (addResult) {
        setData(data.results);
      } else if (loginLogs) {
        setData(data[0]);
      } else {
        setData(data);
      }
    } catch (error) {
      // console.error("Error :", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchDataAnnouncement = async (api, setLoading, setData, addResult, loginLogs) => {
    setLoading(true);
    try {
 

      const url = await generateUrl();
      const response = await fetch(url + api, {
        method: "GET",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
         
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
      if (addResult) {
        setData(data.results);
      } else if (loginLogs) {
        setData(data[0]);
      } else {
        setData(data);
      }
    } catch (error) {
      // console.error("Error :", error);
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
    await fetchDataAnnouncement(api, setNotificationLoading, setNotificationData);
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

  // Dashboard --------- OverView Card-------------
  const handleFetchOverallDashboardCard = async (api) => {
    await fetchData(api, setOverviewCardDataLoading, setOverviewCardData);
  };

  const handleFetchOverallDashboardUserEngagement = async (api) => {
    await fetchData(
      api,
      setOverviewUserEngageDataLoading,
      setOverviewUserEngageData
    );
  };

  const handleFetchOverallDashboardRecentlyUpdated = async (api) => {
    await fetchData(
      api,
      setOverviewRecentlyUpdatedDataLoading,
      setOverviewRecentlyUpdatedData
    );
  };

  const handleFetchOverallDashboardUtilizationData = async (api) => {
    await fetchData(
      api,
      setOverviewUtilizationDataLoading,
      setOverviewUtilizationData
    );
  };

  const handleFetchOverallDashboardHourlyData = async (api) => {
    await fetchData(api, setOverviewHourlyDataLoading, setOverviewHourlyData);
  };

  const handleFetchOverallDashboardDatabaseUsageData = async (api) => {
    await fetchData(
      api,
      setOverviewDatabaseUsageDataLoading,
      setOverviewDatabaseUsageData
    );
  };

  const handleFetchBulkUserTaskList = async (api) => {
    await fetchData(api, setBulkUserTaskListLoading, setBulkUserTaskListData);
  };

  const handleFetchBulkUserDetails = async (api) => {
    await fetchData(
      api,
      setBulkUserTaskListDetailsLoading,
      setBulkUserTaskListDetailsData
    );
  };

  // Dashboard User Category Card--------
  const handleFetchDashboardUserCategoryCard = async (api) => {
    await fetchData(
      api,
      setDashboardUserCategoryLoading,
      setDashboardUserCategoryData
    );
  };

  const handleFetchDashboardActiveUserTimelineGraph = async (api) => {
    await fetchData(
      api,
      setActiveUserTimelineGraphLoading,
      setActiveUserTimelineGraphData
    );
  };

  const handleFetchDashboardTopReaders = async (api) => {
    await fetchData(api, setTopReadersLoading, setTopReadersData);
  };

  const handleFetchDashboardUserCategory = async (api) => {
    await fetchData(
      api,
      setUserCategoryDistributionLoading,
      setUserCategoryDistributionData
    );
  };

  const handleFetchDashboardCategory = async (api) => {
    await fetchData(
      api,
      setDashboardCategoryCardLoading,
      setDashboardCategoryCardData
    );
  };

  const handleFetchDashboardCategoryTopResourceSubject = async (api) => {
    await fetchData(
      api,
      setTopResourceSubjectLoading,
      setTopResourceSubjectData
    );
  };

  const handleFetchDashboardCategorySubjectWiseDistribution = async (api) => {
    await fetchData(
      api,
      setDashboardSubjectWiseDistributionLoading,
      setDashboardSubjectWiseDistributionData
    );
  };

  const handleFetchDashboardResourceCard = async (api) => {
    await fetchData(
      api,
      setDashboardResourceCardLoading,
      setDashboardResourceCardData
    );
  };

  const handleFetchDashboardResourcePopularUser = async (api) => {
    await fetchData(
      api,
      setDashboardResourcePopularUserLoading,
      setDashboardResourcePopularUserData
    );
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
    overviewCardDataLoading,
    overviewUserEngageDataLoading,
    overviewRecentlyUpdatedDataLoading,
    bulkUserTaskListLoading,
    bulkUserTaskListDetailsLoading,
    overviewUtilizationDataLoading,
    overviewHourlyDataLoading,
    overviewDatabaseUsageDataLoading,
    dashboardUserCategoryLoading,
    activeUserTimelineGraphLoading,
    topReadersLoading,
    userCategoryDistributionLoading,
    dashboardCategoryCardLoading,
    topResourceSubjectLoading,
    dashboardSubjectWiseDistributionLoading,
    dashboardResourceCardLoading,
    dashboardResourcePopularUserLoading,
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
    overviewCardData,
    overviewUserEngageData,
    overviewRecentlyUpdatedData,
    bulkUserTaskListData,
    bulkUserTaskListDetailsData,
    overviewUtilizationData,
    overviewHourlyData,
    overviewDatabaseUsageData,
    dashboardUserCategoryData,
    activeUserTimelineGraphData,
    topReadersData,
    userCategoryDistributionData,
    dashboardCategoryCardData,
    topResourceSubjectData,
    dashboardSubjectWiseDistributionData,
    dashboardResourceCardData,
    dashboardResourcePopularUserData,
    handleFetctData,
    handleFetctUserCategoryData,
    handleFetctUsers,
    handleFetchBulkUserTaskList,
    handleFetctSites,
    handleFetctNotifications,
    handleFetctReports,
    handleFetctLoginLogs,
    handleFetctInstitution,
    handleFetctSiteReports,
    handleFetctUserCourse,
    handleFetchMessages,
    handleFetchFaq,
    handleFetchBulkUserDetails,

    handleFetchOverallDashboardCard,
    handleFetchOverallDashboardUserEngagement,
    handleFetchOverallDashboardRecentlyUpdated,
    handleFetchOverallDashboardUtilizationData,
    handleFetchOverallDashboardHourlyData,
    handleFetchOverallDashboardDatabaseUsageData,

    handleFetchDashboardUserCategoryCard,
    handleFetchDashboardActiveUserTimelineGraph,

    handleFetchDashboardTopReaders,

    handleFetchDashboardUserCategory,

    handleFetchDashboardCategory,

    handleFetchDashboardCategoryTopResourceSubject,
    handleFetchDashboardCategorySubjectWiseDistribution,
    handleFetchDashboardResourceCard,
    handleFetchDashboardResourcePopularUser,
  };
}
