import React from "react";
import Landinghome from "./Landinghome";
import Landingheader from "./Landingheader";
import Landingfooter from "./Landingfooter";

const Landinglayout = ({ institutionDetails, domain }) => {
  return (
    <>
      <Landingheader />
      <Landinghome institutionDetails={institutionDetails} />
      <Landingfooter domain={domain} institutionDetails={institutionDetails} />
    </>
  );
};

export default Landinglayout;
