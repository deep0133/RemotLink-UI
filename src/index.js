// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import AppLayout from "./App";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Landinglayout from "./Components/Landingpage/Landinglayout";
// import SearchView from "./Components/uiSection/searchView";
// import Resources from "./Components/uiSection/resources";
// import SavedResources from "./Components/uiSection/savedResources";
// import Profile from "./Components/uiSection/profile";
// import Notifications from "./Components/uiSection/notifications";
// import HelpAndSupport from "./Components/uiSection/helpAndSupport";
// import Dashboard from "./Components/mobile/dashboard";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Landinglayout />,
//   },

//   {
//     path: "/Home",
//     element: <AppLayout />,
//   },
//   {
//     path: "/searchview",
//     element: <SearchView />,
//   },
//   {
//     path: "/resources",
//     element: <Resources />,
//   },
//   {
//     path: "/savedresources",
//     element: <SavedResources />,
//   },
//   {
//     path: "/profile",
//     element: <Profile />,
//   },
//   {
//     path: "/notifications",
//     element: <Notifications />,
//   },
//   {
//     path: "/help",
//     element: <HelpAndSupport />,
//   },
//   {
//     path: "/dashboard",
//     element: <Dashboard />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RouterProvider router={appRouter} />);

import React from "react";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App tab='home' />
    </BrowserRouter>
  </React.StrictMode>
);
