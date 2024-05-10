import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../uiGroup/home";

function Homepage({ logutOutHandler, institutionDetails, domain }) {
  return (
    <div>
      <Header
        logutOutHandler={logutOutHandler}
        institutionDetails={institutionDetails}
        domain={domain}
      />
      <div className='hidden sm:flex'>
        <Home />
      </div>
      <div className='sm:hidden'>
        <Home />
      </div>
      <Footer institutionDetails={institutionDetails} domain={domain} />
    </div>
  );
}

export default Homepage;
