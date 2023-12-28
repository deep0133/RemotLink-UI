import React from "react";
import Landinghome from "./Landinghome";
import Landingheader from "./Landingheader";
import Landingfooter from "./Landingfooter";
import Footer from "../uiSection/Footer";

const Landinglayout = () => {
  return (
    <>
      <Landingheader />
      <Landinghome />
      <Footer />
    </>
  );
};

export default Landinglayout;
