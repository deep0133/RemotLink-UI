import React, { useEffect } from "react";
import Landinghome from "./Landinghome";
import Landingheader from "./Landingheader";
import Landingfooter from "./Landingfooter";
import useFetch from "../../hooks/useFetch";

const Landinglayout = () => {
  const { institutionDetails, institutionDetailFetch } = useFetch();

  useEffect(() => {
    institutionDetailFetch();
  }, []);
  return (
    <>
      <Landingheader />
      <Landinghome institutionDetails={institutionDetails} />
      <Landingfooter institutionDetails={institutionDetails} />
    </>
  );
};

export default Landinglayout;
