import React from "react";
import Home from "./Components/uiGroup/home";
import Header from "./Components/uiSection/Header";
import Sidebar from "./Components/uiSection/Sidebar";
import Footer from "./Components/uiSection/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
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
};

export default AppLayout;
