import { Route, Routes } from "react-router-dom";
import UserLogs from "./UserLogs";
import UserReports from "./UserReports";
import SiteUsages from "./SiteUsages";
import useFetch from "../../hooks/useFetch";
import useAdd from "../../hooks/useAdd";
import useDelete from "../../hooks/useDelete";
import { useEffect } from "react";
import useUpdate from "../../hooks/useUpdate";

export default function Report() {
  const {
    reportLoading,
    reportData,
    handleFetctReports,
    reportSiteData,
    handleFetctSiteReports,
  } = useFetch();

  const { addMessage } = useAdd();

  const { deleteMessage, deleteReportLoading, handleDeleteReport } =
    useDelete();
  const { updateMessage } = useUpdate();

  useEffect(() => {
    handleFetctReports("api/report/user/");
  }, [deleteMessage, updateMessage, addMessage]);

  useEffect(() => {
    handleFetctSiteReports("api/report/site/");
  }, []);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <UserReports
            data={reportData}
            deleteReportLoading={deleteReportLoading}
            handleDeleteReport={handleDeleteReport}
            fetchLoading={reportLoading}
            fromTo={(std = "", edd = "") => {
              handleFetctReports(`api/report/user/?start=${std}&end=${edd}`);
            }}
            filterHandler={(order, type) => {
              handleFetctReports(
                "api/report/user/?ordering=" + order + "" + type
              );
            }}
            onPageChange={(key) => {
              handleFetctReports("api/report/user/?" + key);
            }}
          />
        }
      />
      <Route
        path='/user/login-logs/:id'
        element={
          <UserLogs
            fromTo={(std = "", edd = "") => {
              handleFetctReports(`api/report/user/?start=${std}&end=${edd}`);
            }}
            filterHandler={(order, type) => {
              handleFetctReports(
                "api/report/user/?ordering=" + order + "" + type
              );
            }}
          />
        }
      />
      <Route
        path='/site/usage'
        element={
          <SiteUsages
            data={reportSiteData}
            fromTo={(std = "", edd = "") => {
              handleFetctSiteReports(
                `api/report/site/?start=${std}&end=${edd}`
              );
            }}
            onPageChange={(key) => {
              handleFetctSiteReports("api/report/site/?" + key);
            }}
            filterHandler={(order, type) => {
              handleFetctSiteReports(
                "api/report/site/?ordering=" + order + "" + type
              );
            }}
          />
        }
      />
    </Routes>
  );
}
