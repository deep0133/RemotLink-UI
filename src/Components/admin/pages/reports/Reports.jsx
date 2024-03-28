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
  const { reportData, handleFetctReports } = useFetch();

  const { addMessage } = useAdd();

  const { deleteMessage, deleteReportLoading, handleDeleteReport } =
    useDelete();
  const { updateMessage } = useUpdate();

  useEffect(() => {
    handleFetctReports("api/report/user/?start&end");
  }, [deleteMessage, updateMessage, addMessage]);

  return (
    <Routes>
      <Route
        path='/'
        element={
          <UserReports
            data={reportData}
            deleteReportLoading={deleteReportLoading}
            handleDeleteReport={handleDeleteReport}
          />
        }
      />
      <Route path='/user/login-logs/:id' element={<UserLogs />} />
      <Route path='/site/usage' element={<SiteUsages />} />
    </Routes>
  );
}
