import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CheckLoginStatus from "./Components/auth/loginStatus";
import Landinglayout from "./Components/Landingpage/Landinglayout";
import Homepage from "./Components/uiSection/homepage";
import SearchView from "./Components/uiSection/searchView";
import Resources from "./Components/uiSection/resources";
import SavedResources from "./Components/uiSection/savedResources";
import Profile from "./Components/uiSection/profile";
import Notifications from "./Components/uiSection/notifications";
import HelpAndSupport from "./Components/uiSection/helpAndSupport";
import Login from "./Components/auth/login";
// import Dashboard from "./Components/mobile/dashboard";

function App() {
  const { loginStatus } = CheckLoginStatus();

  // console.log(loginStatus);
  return (
    <Router>
      <Routes>
        {/* <Route
          path="/"
          element={
            loginStatus ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        /> */}
        <Route path="/" element={<Landinglayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/searchview" element={<SearchView />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/savedresources" element={<SavedResources />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/help" element={<HelpAndSupport />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
