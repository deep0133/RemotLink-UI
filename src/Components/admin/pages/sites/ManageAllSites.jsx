import React from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import { SitesIcon } from "../../assets/constants";
import SearchFilter from "../../components/category/SearchFilter";
// import { ManageSiteData } from "../../data";
import Card from "../../components/sites/Card";

export default function ManageAllSites({ siteData }) {
  // const { siteData } = useFetch();
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
      <SearchFilter />
      <Card data={siteData} path={"/admin/sites/edit/site"} />
    </>
  );
}
