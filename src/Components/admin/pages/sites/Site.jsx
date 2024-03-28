import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ManageAllSites from "./ManageAllSites";
import AddSite from "./AddSite";
import EditSite from "./EditSite";
import useFetch from "../../hooks/useFetch";

export default function Site() {
  const { siteData, handleFetctSites } = useFetch();

  useEffect(() => {
    handleFetctSites("api/sites/");
  }, []);

  return (
    <Routes>
      <Route path={"/"} element={<ManageAllSites siteData={siteData} />} />
      <Route path={"/add/site"} element={<AddSite />} />
      <Route
        path={"/edit/site/:id"}
        element={<EditSite siteData={siteData} />}
      />
    </Routes>
  );
}
