import { Route, Routes } from "react-router-dom";
import ManageUser from "./ManageUser";
import BulkUser from "./BulkUser";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

export default function User() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<ManageUser />} />
        <Route path={"/bulkuser"} element={<BulkUser />} />
        <Route
          path={"/add/user"}
          element={
            <AddUser head_title={"Add User"} hero_name={"Add New Users"} />
          }
        />
        <Route
          path={"/edit/user"}
          element={<EditUser head_title={"User Details"} />}
        />
      </Routes>
    </>
  );
}
