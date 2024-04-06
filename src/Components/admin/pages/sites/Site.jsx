import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ManageAllSites from "./ManageAllSites";
import AddSite from "./AddSite";
import EditSite from "./EditSite";
import useFetch from "../../hooks/useFetch";
import useDelete from "../../hooks/useDelete";
import useAdd from "../../hooks/useAdd";
import useUpdate from "../../hooks/useUpdate";

export default function Site() {
  const { siteLoading, siteData, handleFetctSites } = useFetch();
  const { addNewSiteLoading, addNewSite, handleAddNewSite } = useAdd();
  const { updateSiteLoading, updateSiteMessage, handleUpdateSites } =
    useUpdate();
  const { deleteSiteLoading, deleteSiteMessage, handleDeleteSite } =
    useDelete();

  useEffect(() => {
    handleFetctSites("api/sites/");
  }, [deleteSiteMessage, updateSiteMessage, addNewSite]);

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <ManageAllSites
            siteData={siteData}
            fetchLoading={siteLoading}
            deleteSiteHandle={(id) => {
              handleDeleteSite("api/sites/delete/" + id + "/");
            }}
            loading={deleteSiteLoading}
            onPageChange={(key) => {
              handleFetctSites("api/sites/?" + key);
            }}
            searchHandler={(key) => {
              handleFetctSites("api/sites/" + key);
            }}
            sortHandler={(order) => {
              handleFetctSites("api/sites/?ordering=" + order + "name");
            }}
            filterHandler={(date, type) => {
              handleFetctSites("api/sites/?created_at__" + type + "=" + date);
            }}
          />
        }
      />
      <Route
        path={"/add/site"}
        element={
          <AddSite
            addFunctionHandler={(data) => {
              handleAddNewSite("api/sites/add/", data);
            }}
            loading={addNewSiteLoading}
          />
        }
      />
      <Route
        path={"/edit/site/:id"}
        element={
          <EditSite
            siteData={siteData && siteData.results}
            updateFunctionHandler={(id, data) => {
              handleUpdateSites("api/sites/update/" + id, data);
            }}
            loading={updateSiteLoading}
          />
        }
      />
    </Routes>
  );
}
