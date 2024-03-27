import { Route, Routes } from "react-router-dom";
import ManageUser from "./ManageUser";
import BulkUser from "./BulkUser";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import useFetch from "../../hooks/useFetch";
import useDelete from "../../hooks/useDelete";
import useUpdate from "../../hooks/useUpdate";
import { useEffect } from "react";

export default function User() {
  const { userLoading, usersData, handleFetctUsers } = useFetch();

  const { deleteMessage } = useDelete();
  const { updateMessage } = useUpdate();

  useEffect(() => {
    handleFetctUsers("api/user/");
  }, [deleteMessage, updateMessage]);

  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={<ManageUser data={usersData} fetchLoading={userLoading} />}
        />
        <Route path={"/bulkuser"} element={<BulkUser />} />
        <Route
          path={"/add/user"}
          element={
            <AddUser head_title={"Add User"} hero_name={"Add New Users"} />
          }
        />
        <Route
          path={"/edit/user/:id"}
          element={<EditUser head_title={"User Details"} data={usersData} />}
        />
      </Routes>
    </>
  );
}
