import React, { useEffect } from "react";
import Landinghome from "./Landinghome";
import Landingheader from "./Landingheader";
import Landingfooter from "./Landingfooter";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";

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
    landingPageCategorialResourceFetch,
    catgorialResource,
    catgorialResourceLoading,
    featureResourceLoading,
    featureResourceData,
    landingPageFeaturedResourcesFetch,
  } = useFetch();

  useEffect(() => {
    landingPageCategorialResourceFetch("access_count");
    landingPageFeaturedResourcesFetch();
    // eslint-disable-next-line
  }, []);

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
