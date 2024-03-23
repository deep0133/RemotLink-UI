import React from "react";
import { Route, Routes } from "react-router-dom";
import ManageAllSites from "./ManageAllSites";
import AddSite from "./AddSite";
import EditSite from "./EditSite";

export default function Site() {
  return (
    <Routes>
      <Route path={"/"} element={<ManageAllSites />} />
      <Route path={"/add/user"} element={<AddSite />} />
      <Route path={"/edit/user"} element={<EditSite />} />
    </Routes>
  );
}
