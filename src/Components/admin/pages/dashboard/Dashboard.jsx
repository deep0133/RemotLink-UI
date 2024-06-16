import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import UserCategory from "./UserCategory";
import Category from "./Category";
import Resources from "./Resources";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const {
    siteLoading,
    siteData,
    overviewCardDataLoading,
    overviewCardData,
    handleFetctSites,
    handleFetchOverallDashboardCard,
  } = useFetch();

  const [weekMonth, setWeekMonth] = useState("month");

  useEffect(() => {
    handleFetchOverallDashboardCard("api/dashboard/?metrics=" + weekMonth);
  }, [weekMonth]);

  const { reportSiteLoading, reportSiteData, handleFetctSiteReports } =
    useFetch();

  useEffect(() => {
    handleFetctSites("api/sites/");
    handleFetctSiteReports("api/report/site/");
  }, []);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Overview
              weekMonth={weekMonth}
              setWeekMonth={setWeekMonth}
              siteData={siteData}
              siteLoading={siteLoading}
              overviewCardData={overviewCardData}
              overviewCardDataLoading={overviewCardDataLoading}
            />
          }
        />
        <Route path='/usercategory' element={<UserCategory />} />
        <Route
          path='/categories'
          element={
            <Category
              reportSiteData={reportSiteData}
              reportSiteLoading={reportSiteLoading}
            />
          }
        />
        <Route
          path='/resources'
          element={<Resources siteData={siteData} siteLoading={siteLoading} />}
        />
      </Routes>
    </>
  );
}
