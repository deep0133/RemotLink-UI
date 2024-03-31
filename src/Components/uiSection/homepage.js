import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../uiGroup/home";
import useLogout from "../../hooks/useLogout";

function Homepage() {
  const { logutOutHandler } = useLogout();
  return (
    <div>
      <Header logutOutHandler={logutOutHandler} />
      <div className='hidden sm:flex'>
        <Home />
      </div>
      <div className='sm:hidden'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
