import { BulkUserIcon, UsersIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import SearchFilter from "../../components/category/SearchFilter";
import Card from "../../components/user/Card";
import useDelete from "../../hooks/useDelete";

export default function ManageUser({ data, fetchLoading }) {
  const { deleteUserLoading, handleDeleteUser } = useDelete();

  const deleteUserHandle = (id) => {
    handleDeleteUser("api/user/delete/" + id + "/");
  };
  return (
    <>
      <Header icon={<UsersIcon />} title={"Users"} />
      <Hero
        name={`Manage Users`}
        description={`Manage and organize all users efficiently.`}
        icon={<UsersIcon />}
        icon2={<BulkUserIcon />}
        btnText={`Add User`}
        btnText2={`Bulk Add User`}
        btnCount={2}
        btnLink={"/admin/users/add/user"}
        btnLink2={"/admin/users/bulkuser"}
      />
      <SearchFilter />
      <Card
        data={data}
        path={"/admin/users/edit/user"}
        fetchLoading={fetchLoading}
        deleteUserHandle={deleteUserHandle}
        deleteUserLoading={deleteUserLoading}
      />
    </>
  );
}
