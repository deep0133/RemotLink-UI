import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import { BulkUserIcon, SitesIcon } from "../../assets/constants";
import SearchFilter from "../../components/category/SearchFilter";
import Card from "../../components/sites/Card";
import Pagination from "../../components/Pagination";

export default function ManageAllSites({
  loading,
  fetchLoading,
  siteData,
  deleteSiteHandle,
  searchHandler,
  onPageChange,
  sortHandler,
  filterHandler,
}) {
  const [data, setData] = useState(siteData);

  const [sort, setSort] = useState("-");

  useEffect(() => {
    setData(siteData);
  }, [siteData]);

  useEffect(() => {
    sortHandler(sort, "name");
  }, [sort]);

  return (
    <>
      <Header icon={<SitesIcon />} title={"Sites"} />
      <Hero
        name={`Manage all Sites`}
        description={`Manage and organize all sites efficiently.`}
        icon={<SitesIcon />}
        icon2={<BulkUserIcon />}
        btnText={`Add New Site`}
        btnText2={`Add Site Bulk Metadata`}
        btnCount={2}
        btnLink={"/admin/sites/add/site"}
        btnLink2={"/admin/sites/add/bulk/site"}
      />
      <SearchFilter
        searchHandler={searchHandler}
        setSort={setSort}
        filterHandler={filterHandler}
      />
      <Card
        data={data && data.results}
        path={"/admin/sites/edit/site"}
        deleteSiteHandle={deleteSiteHandle}
        loading={loading}
        fetchLoading={fetchLoading}
      />
      {data && data.count > 0 && (
        <Pagination
          previousLink={data && data.previous ? data.previous : null}
          nextLink={data && data.next ? data.next : null}
          totalItems={data && data.count ? data.count : 1}
          itemsPerPage={10}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
}
