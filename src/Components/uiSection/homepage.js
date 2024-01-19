import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Home from "../uiGroup/home";
function Homepage() {
  return (
    <div>
      <Header />
      <div className="hidden sm:flex">
        <Sidebar />
        <Home />
      </div>
      <div className="sm:hidden">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
