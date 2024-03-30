import React, { useEffect, useState } from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import { SitesIcon } from "../../assets/constants";
import SearchFilter from "../../components/category/SearchFilter";
import Card from "../../components/sites/Card";
import sortByCreatedAt from "../../utils/sortByCreatedAt";

export default function ManageAllSites({
  loading,
  fetchLoading,
  siteData,
  deleteSiteHandle,
}) {
  const [data, setData] = useState(siteData);

  const [sort, setSort] = useState("asc");

  useEffect(() => {
    setData(siteData);
  }, [siteData]);

  useEffect(() => {
    setData(() => {
      return sortByCreatedAt(data, sort);
    });
  }, [sort]);

  const searchHandler = (val) => {
    setData((prev) =>
      siteData.filter(
        (obj) => obj.name && obj.name.toLowerCase().includes(val.toLowerCase())
      )
    );
  };

  return (
    <>
      <Header icon={<SitesIcon />} title={"Sites"} />
      <Hero
        name={`Manage all Sites`}
        description={`Manage the site here`}
        icon={<SitesIcon />}
        btnText={`Add Site`}
        btnLink={"/admin/sites/add/site"}
      />
      <SearchFilter searchHandler={searchHandler} setSort={setSort} />
      <Card
        data={data}
        path={"/admin/sites/edit/site"}
        deleteSiteHandle={deleteSiteHandle}
        loading={loading}
        fetchLoading={fetchLoading}
      />
    </>
  );
}
