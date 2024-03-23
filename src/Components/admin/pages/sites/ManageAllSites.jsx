import React from "react";
import Header from "../../components/Dashboard/RightCommonComponents/Header";
import Hero from "../../components/category/Hero";
import { SitesIcon } from "../../assets/constants";
import SearchFilter from "../../components/category/SearchFilter";
import { ManageSiteData } from "../../data";
import Card from "../../components/sites/Card";

export default function ManageAllSites() {
  return (
    <>
      <Header icon={<SitesIcon />} title={"Sites"} />
      <Hero
        name={`Manage all Sites`}
        description={`Manage the site here`}
        icon={<SitesIcon />}
        btnText={`Add Site`}
        btnLink={""}
      />
      <SearchFilter />
      <Card
        data={ManageSiteData}
        path={"Hello".toLowerCase()}
        type1={"Name"}
        type2={"Site URL"}
        type3={"Description"}
        type4={"Category"}
        type5={"Action"}
      />
    </>
  );
}
