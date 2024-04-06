import { CategoryIcon, UsersIcon } from "../../assets/constants";
import Navigation from "../../components/Dashboard/RightCommonComponents/Navigation";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import { CategroyRightMenu } from "../../data";
import Hero from "../../components/category/Hero";
import CategoryList from "../../components/category/CategoryList";
import SearchFilter from "../../components/category/SearchFilter";
import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
export default function SiteUserCategory({
  data,
  title,
  name,
  btnLink,
  deleteLoading,
  handleDeleteCategory,
  fetchLoading,
  searchHandler,
  onPageChange,
  totalItems,
  itemsPerPage,
  pagination,
  sortHandler,
  filterHandler,
}) {
  const [catData, setCatData] = useState(data);

  const [sort, setSort] = useState("-");

  useEffect(() => {
    setCatData(data);
  }, [data]);

  useEffect(() => {
    sortHandler(sort, "name");
  }, [sort]);

  return (
    <>
      <Header icon={<CategoryIcon />} title={title} subTitle={"Category"} />
      <Navigation data={CategroyRightMenu} />
      <Hero
        name={name + " Category"}
        description={`Manage the ${name.toLowerCase()} categories here`}
        icon={<UsersIcon />}
        btnText={`Add ${name.toLowerCase()} Category`}
        btnLink={btnLink}
      />
      <SearchFilter
        searchHandler={searchHandler}
        setSort={setSort}
        filterHandler={filterHandler}
      />
      <CategoryList
        data={catData && catData.results}
        path={name.toLowerCase()}
        loading={deleteLoading}
        handleDeleteCategory={handleDeleteCategory}
        fetchLoading={fetchLoading}
      />
      {pagination && (
        <Pagination
          previousLink={catData && catData.previous ? catData.previous : null}
          nextLink={catData && catData.next ? catData.next : null}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}
