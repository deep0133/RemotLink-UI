import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppLayout from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landinglayout from "./Components/Landingpage/Landinglayout";
import SearchView from "./Components/uiSection/searchView";
import Resources from "./Components/uiSection/resources";
import SavedResources from "./Components/uiSection/savedResources";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landinglayout />,
  },

  {
    path: "/Home",
    element: <AppLayout />,
  },
  {
    path: "/searchview",
    element: <SearchView />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/resources/saved",
    element: <SavedResources />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
