import React from "react";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
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
