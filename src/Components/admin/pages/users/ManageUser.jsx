import { useEffect, useState } from "react";
import { BulkUserIcon, UsersIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import SearchFilter from "../../components/category/SearchFilter";
import Card from "../../components/user/Card";
import sortByCreatedAt from "../../utils/sortByCreatedAt";

export default function ManageUser({
  data,
  fetchLoading,
  deleteUserLoading,
  deleteUserHandle,
}) {
  const [userData, setUserData] = useState(data);

  const [sort, setSort] = useState("asc");

  useEffect(() => {
    setUserData(data);
  }, [data]);

  useEffect(() => {
    setUserData(() => {
      return sortByCreatedAt(data, sort);
    });
  }, [sort]);

  const searchHandler = (val) => {
    setUserData((prev) =>
      data.filter(
        (obj) =>
          obj.first_name &&
          obj.first_name.toLowerCase().includes(val.toLowerCase())
      )
    );
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
      {/* <SearchFilter searchHandler={searchHandler} setSort={setSort} /> */}
      <SearchFilter searchHandler={searchHandler} setSort={setSort} />
      <Card
        data={userData}
        path={"/admin/users/edit/user"}
        fetchLoading={fetchLoading}
        deleteUserHandle={deleteUserHandle}
        deleteUserLoading={deleteUserLoading}
      />
    </>
  );
}
