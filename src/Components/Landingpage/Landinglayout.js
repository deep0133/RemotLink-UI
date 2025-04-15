import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Landingfooter from "./Landingfooter";
import Landingheader from "./Landingheader";
import Landinghome from "./Landinghome";

const Landinglayout = ({
  institutionDetails,
  domain,
  setUnauthorizedUserSourcelink,
  loginModal,
  setLoginModal,
  notificationLoading,
  notificationData,
}) => {
  const {
    catgorialResource,
    catgorialResourceLoading,
    featureResourceLoading,
    featureResourceData,
  } = useFetch();

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <Landingheader
        loginModal={loginModal}
        setLoginModal={setLoginModal}
        notificationLoading={notificationLoading}
        notificationData={notificationData}
      />
      <Landinghome
        {...{
          institutionDetails,
          catgorialResource,
          catgorialResourceLoading,
          featureResourceLoading,
          featureResourceData,
          setUnauthorizedUserSourcelink,
        }}
      />
      <Landingfooter domain={domain} institutionDetails={institutionDetails} />{" "}
    </>
  );
};

export default Landinglayout;
