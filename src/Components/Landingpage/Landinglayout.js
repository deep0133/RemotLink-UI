import React, { useEffect } from "react";
import Landinghome from "./Landinghome";
import Landingheader from "./Landingheader";
import Landingfooter from "./Landingfooter";
import useFetch from "../../hooks/useFetch";

const Landinglayout = ({
  institutionDetails,
  domain,
  setUnauthorizedUserSourcelink,
  loginModal,
  setLoginModal,
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
  }, []);

  return (
    <>
      <Landingheader loginModal={loginModal} setLoginModal={setLoginModal} />
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
      <Landingfooter domain={domain} institutionDetails={institutionDetails} />
    </>
  );
};

export default Landinglayout;
