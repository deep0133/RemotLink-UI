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
      <Home />
      <Footer institutionDetails={institutionDetails} domain={domain} />
    </div>
  );
}

export default Homepage;
