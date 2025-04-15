import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Overview from "./Overview";

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
    // eslint-disable-next-line
  }, [weekMonth]);

  const { handleFetctSiteReports } = useFetch();

  useEffect(() => {
    handleFetctSites("api/sites/");
    handleFetctSiteReports("api/report/site/");
    // eslint-disable-next-line
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
        {/* <Route path='/usercategory' element={<UserCategory />} />
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
        /> */}
      </Routes>
    </>
  );
}
