import { Route, Routes, useLocation } from "react-router-dom";
import ManageNotification from "./ManageNotification";
import SendNotification from "./SendNotification";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import LatestNews from "./LatestNews";
import ImportantLinks from "./ImportantLinks";
import useAdd from "../../hooks/useAdd";
import UpdateNotification from "./UpdateNotification";
import useDelete from "../../hooks/useDelete";

export default function Notifications() {
  const [currentPage, setCurrentPage] = useState("");

  const location = useLocation();

  const { notificationLoading, notificationData, handleFetctNotifications } =
    useFetch();

  const { addNotificationData } = useAdd();

  const { deleteNotificationLoading, handleDeleteNotification } = useDelete();

  useEffect(() => {
    handleFetctNotifications("api/announcement");
  }, [addNotificationData]);

  const deleteNotification = async (id) => {
    await handleDeleteNotification("api/announcement/delete/" + id);
  };

  return (
    <Routes>
      <Route
        path={"/"}
        element={
          <ManageNotification
            data={notificationData.announcement}
            fetchLoading={notificationLoading}
            deleteNotification={deleteNotification}
            delLoading={deleteNotificationLoading}
          />
        }
      />
      <Route
        path={"/latest-news"}
        element={
          <LatestNews
            data={notificationData.news}
            fetchLoading={notificationLoading}
            deleteNotification={deleteNotification}
            delLoading={deleteNotificationLoading}
          />
        }
      />
      <Route
        path={"/important-links"}
        element={
          <ImportantLinks
            data={notificationData.links}
            fetchLoading={notificationLoading}
            deleteNotification={deleteNotification}
            delLoading={deleteNotificationLoading}
          />
        }
      />
      <Route
        path={"/send"}
        element={<SendNotification data={notificationData} />}
      />
      <Route
        path={"/announcement/update/:id"}
        element={<UpdateNotification data={notificationData} />}
      />
      <Route
        path={"/news/update/:id"}
        element={<UpdateNotification data={notificationData} />}
      />
      <Route
        path={"/link/update/:id"}
        element={<UpdateNotification data={notificationData} />}
      />
    </Routes>
  );
}
