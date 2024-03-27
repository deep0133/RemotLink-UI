import { Route, Routes } from "react-router-dom";
import ManageNotification from "./ManageNotification";
import SendNotification from "./SendNotification";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import LatestNews from "./LatestNews";
import ImportantLinks from "./ImportantLinks";
import useAdd from "../../hooks/useAdd";
import UpdateNotification from "./UpdateNotification";

export default function Notifications() {
  const { notificationData, handleFetctNotifications } = useFetch();

  const { addNotificationData } = useAdd();

  useEffect(() => {
    handleFetctNotifications("api/announcement");
  }, [addNotificationData]);

  return (
    <Routes>
      <Route
        path={"/"}
        element={<ManageNotification data={notificationData} />}
      />
      <Route
        path={"/latest-news"}
        element={<LatestNews data={notificationData} />}
      />
      <Route
        path={"/important-links"}
        element={<ImportantLinks data={notificationData} />}
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
