import { Route, Routes, Navigate } from "react-router-dom";
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
import AdminRoutes from "./Components/admin/AdminRoutes";
import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import generateUrl from "./Components/admin/utils/urlGenerate";
import useLogout from "./hooks/useLogout";

function App() {
  const { loginStatus, isAdmin } = CheckLoginStatus();
  const { institutionDetails, institutionDetailFetch } = useFetch();
  const [unauthorizedUserSourcelink, setUnauthorizedUserSourcelink] =
    useState(null);

  useEffect(() => {
    institutionDetailFetch();
  }, []);

  const [domain, setDomain] = useState("");

  useEffect(() => {
    const fetchUrl = async () => {
      const url = await generateUrl();
      setDomain(url);
    };
    fetchUrl();
  }, []);

  const { logutOutHandler } = useLogout();

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Landinglayout
            {...{ institutionDetails, domain, setUnauthorizedUserSourcelink }}
          />
        }
      />
      <Route
        path='/login'
        element={
          loginStatus ? (
            isAdmin ? (
              <Navigate to={"/admin"} />
            ) : (
              <Navigate to={"/home"} />
            )
          ) : (
            <Login unauthorizedUserSourcelink={unauthorizedUserSourcelink} />
          )
        }
      />
      <Route
        path='/home'
        element={
          <Homepage {...{ logutOutHandler, institutionDetails, domain }} />
        }
      />
      <Route
        path='/searchview'
        element={
          <SearchView {...{ logutOutHandler, institutionDetails, domain }} />
        }
      />
      <Route
        path='/resources'
        element={
          <Resources {...{ logutOutHandler, institutionDetails, domain }} />
        }
      />
      <Route
        path='/savedresources'
        element={
          <SavedResources
            {...{ logutOutHandler, institutionDetails, domain }}
          />
        }
      />
      <Route
        path='/profile'
        element={
          <Profile {...{ logutOutHandler, institutionDetails, domain }} />
        }
      />
      <Route
        path='/notifications'
        element={
          <Notifications {...{ logutOutHandler, institutionDetails, domain }} />
        }
      />
      <Route
        path='/help'
        element={
          <HelpAndSupport
            {...{ logutOutHandler, institutionDetails, domain }}
          />
        }
      />
      <Route
        path='/admin/*'
        element={
          isAdmin === true ? <AdminRoutes /> : <Navigate to={"/login"} />
        }
      />
    </Routes>
  );
}

export default App;
