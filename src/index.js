import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppLayout from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landinglayout from "./Components/Landingpage/Landinglayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Landinglayout />,
  },

  {
    path: "/Home",
    element: <AppLayout />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
