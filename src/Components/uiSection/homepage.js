import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../uiGroup/home";

function Homepage() {
  return (
    <div>
      <Header />
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
