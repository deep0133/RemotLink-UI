import { Route, Routes } from "react-router-dom";
import ManageUser from "./ManageUser";
import BulkUser from "./BulkUser";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import useFetch from "../../hooks/useFetch";
import useDelete from "../../hooks/useDelete";
import useUpdate from "../../hooks/useUpdate";
import { useEffect } from "react";
import useAdd from "../../hooks/useAdd";
import useDownload from "../../hooks/useDownload";
import UserTaskDetail from "./UserTaskDetail";

export default function User() {
  const {
    userLoading,
    usersData,
    handleFetctUsers,
    handleFetchBulkUserTaskList,
    bulkUserTaskListLoading,
    bulkUserTaskListData,
  } = useFetch();

  const { addNewUserLoading, addNewUser, handleAddNewUser } = useAdd();
  const { deleteUserMessage, deleteUserLoading, handleDeleteUser } =
    useDelete();

  const {
    updateUserMessage,
    updateUserLoading,
    handleUpdateUser,
    uploadUserTemplateLoading,
    uploadUserTemplateMessage,
    handleUploadBulkUserTemplate,
  } = useUpdate();

  const { templateLoading, handleDownloadTemplate } = useDownload();

  useEffect(() => {
    handleFetctUsers("api/user/");
  }, [deleteUserMessage, updateUserMessage, addNewUser]);

  useEffect(() => {
    handleFetchBulkUserTaskList("api/institution/tasks/");
  }, [uploadUserTemplateMessage]);

  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={
            <ManageUser
              data={usersData}
              fetchLoading={userLoading}
              deleteUserLoading={deleteUserLoading}
              deleteUserHandle={(id) => {
                handleDeleteUser("api/user/delete/" + id + "/");
              }}
              itemsPerPage={10}
              totalItems={usersData && usersData.count}
              onPageChange={(key) => {
                handleFetctUsers("api/user/?" + key);
              }}
              searchHandler={(key) => {
                handleFetctUsers("api/user/" + key);
              }}
              sortHandler={(order, type) => {
                handleFetctUsers("api/user/?ordering=" + order + type);
              }}
              filterHandler={(date, type) => {
                handleFetctUsers("api/user/?created_at__" + type + "=" + date);
              }}
            />
          }
        />
        <Route
          path={"/bulkuser"}
          element={
            <BulkUser
              templateLoading={templateLoading}
              itemsPerPage={10}
              totalItems={bulkUserTaskListData && bulkUserTaskListData.count}
              templateDownload={() => {
                handleDownloadTemplate(
                  "api/adminpanel/download-user-template/"
                );
              }}
              uploadUserTemplateLoading={uploadUserTemplateLoading}
              templateUploadFunction={(file) => {
                handleUploadBulkUserTemplate("api/user/add-bulk/", file);
              }}
              bulkUserTaskListData={bulkUserTaskListData}
              bulkUserTaskListLoading={bulkUserTaskListLoading}
              onPageChange={(key) => {
                handleFetchBulkUserTaskList("api/institution/tasks/?" + key);
              }}
            />
          }
        />
        <Route
          path={"/add/user"}
          element={
            <AddUser
              head_title={"Add User"}
              hero_name={"Add New Users"}
              addFunctionHandler={(data) => {
                handleAddNewUser("api/user/add/", data);
              }}
              addNewUserLoading={addNewUserLoading}
            />
          }
        />
        <Route
          path={"/edit/user/:id"}
          element={
            <EditUser
              head_title={"User Details"}
              data={usersData}
              updateUserLoading={updateUserLoading}
              updateFunctionHandler={(id, data) => {
                handleUpdateUser("api/user/update/" + id, data);
              }}
            />
          }
        />
        <Route path={"/detail/:id"} element={<UserTaskDetail />} />
      </Routes>
    </>
  );
}
