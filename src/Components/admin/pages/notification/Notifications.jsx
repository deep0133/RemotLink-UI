import { Route, Routes } from "react-router-dom";
import ManageNotification from "./ManageNotification";
import SendNotification from "./SendNotification";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import LatestNews from "./LatestNews";
import ImportantLinks from "./ImportantLinks";
import useAdd from "../../hooks/useAdd";
import UpdateNotification from "./UpdateNotification";
import useDelete from "../../hooks/useDelete";
import useUpdate from "../../hooks/useUpdate";

export default function Notifications() {
  const { notificationLoading, notificationData, handleFetctNotifications } =
    useFetch();

  const { addNotificationData, addNotificationLoading, handleAddNotification } =
    useAdd();

  const {
    deleteNotificationLoading,
    deleteNotificationMessage,
    handleDeleteNotification,
  } = useDelete();

  const {
    updateNotificationLoading,
    updateNotificationMessage,
    handleUpdateNotification,
  } = useUpdate();

  useEffect(() => {
    handleFetctNotifications("api/announcement");
  }, [
    addNotificationData,
    updateNotificationMessage,
    deleteNotificationMessage,
  ]);

  const deleteNotification = async (id) => {
    await handleDeleteNotification("api/announcement/delete/" + id);
  };

  const submitNotificationHandler = (id, data) => {
    handleUpdateNotification("api/announcement/update/" + id, data);
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
        element={
          <SendNotification
            data={notificationData}
            submitNotificationHandler={(data) => {
              handleAddNotification("api/announcement/add/", data);
            }}
            laoding={addNotificationLoading}
          />
        }
      />
      <Route
        path={"/announcement/update/:id"}
        element={
          <UpdateNotification
            data={notificationData}
            submitNotificationHandler={submitNotificationHandler}
            loading={updateNotificationLoading}
          />
        }
      />
      <Route
        path={"/news/update/:id"}
        element={
          <UpdateNotification
            data={notificationData}
            submitNotificationHandler={submitNotificationHandler}
            loading={updateNotificationLoading}
          />
        }
      />
      <Route
        path={"/link/update/:id"}
        element={
          <UpdateNotification
            data={notificationData}
            submitNotificationHandler={submitNotificationHandler}
            loading={updateNotificationLoading}
          />
        }
      />
    </Routes>
  );
}
