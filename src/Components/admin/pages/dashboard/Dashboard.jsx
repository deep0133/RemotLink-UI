import { Route, Routes } from "react-router-dom";
import Overview from "./Overview";
import UserCategory from "./UserCategory";
import Category from "./Category";
import Resources from "./Resources";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

export default function Dashboard() {
  const { siteLoading, siteData, handleFetctSites } = useFetch();

  useEffect(() => {
    handleFetctSites("api/sites/");
  }, []);

  const { reportSiteLoading, reportSiteData, handleFetctSiteReports } =
    useFetch();

  useEffect(() => {
    handleFetctSiteReports("api/report/site/");
  }, []);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Overview siteData={siteData} siteLoading={siteLoading} />}
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
        <Route path='/resources' element={<Resources />} />
      </Routes>
    </>
  );
}
