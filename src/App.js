import React from "react";
import Home from "./Components/uiSection/Home";
import Header from "./Components/uiSection/Header";
import Sidebar from "./Components/uiSection/Sidebar";
import Footer from "./Components/uiSection/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Footer />
    </>
  );
};

export default AppLayout;
