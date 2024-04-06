import { useEffect, useState } from "react";
import { BulkUserIcon, UsersIcon } from "../../assets/constants";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import SearchFilter from "../../components/category/SearchFilter";
import Card from "../../components/user/Card";
import Pagination from "../../components/Pagination";

export default function ManageUser({
  data,
  fetchLoading,
  deleteUserLoading,
  deleteUserHandle,
  itemsPerPage,
  totalItems,
  onPageChange,
  searchHandler,
  sortHandler,
  filterHandler,
}) {
  const [userData, setUserData] = useState(data);

  const [sort, setSort] = useState("-");

  useEffect(() => {
    setUserData(data);
  }, [data]);

  useEffect(() => {
    sortHandler(sort, "first_name");
  }, [sort]);

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
      <SearchFilter
        searchHandler={searchHandler}
        setSort={setSort}
        filterHandler={filterHandler}
      />
      <Card
        data={userData && userData.results}
        path={"/admin/users/edit/user"}
        fetchLoading={fetchLoading}
        deleteUserHandle={deleteUserHandle}
        deleteUserLoading={deleteUserLoading}
      />
      <Pagination
        previousLink={data && data.previous ? data.previous : null}
        nextLink={data && data.next ? data.next : null}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
      />
    </>
  );
}
