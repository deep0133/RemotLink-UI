import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../uiGroup/home";

function Homepage({
  logutOutHandler,
  institutionDetails,
  domain,
  notificationLoading,
  notificationData,
}) {
  return (
    <div>
      <Header
        logutOutHandler={logutOutHandler}
        institutionDetails={institutionDetails}
        domain={domain}
        notificationLoading={notificationLoading}
        notificationData={notificationData}
      />
      <Home institutionDetails={institutionDetails} />
      <Footer institutionDetails={institutionDetails} domain={domain} />
    </div>
  );
}

export default Homepage;
