import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import clientUseFetch from "./Components/admin/hooks/useFetch";
import generateUrl from "./Components/admin/utils/urlGenerate";
import useLogout from "./hooks/useLogout";
import changeTheme from "./Components/admin/utils/changeTheme";
import updateFavicon from "./Components/admin/utils/updateFavicon";

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
import ProtectedRoute from "./Components/ProtectedRoute";
import AdminRoute from "./Components/AdminRoute";
import AtoZResourcePage from "./Components/uiSection/AtoZResourcePage";
import readSubdomainFromFile from "./Components/admin/utils/readSubdomainFromFile";

function App() {
  const { userDetailFetch, institutionDetails, institutionDetailFetch } =
    useFetch();
  const [unauthorizedUserSourcelink, setUnauthorizedUserSourcelink] =
    useState(null);
  const [domain, setDomain] = useState("");

  const [loginModal, setLoginModal] = useState(false);

  useEffect(() => {
    const fetchUrl = async () => {
      const url = await generateUrl();
      setDomain(url);
    };
    fetchUrl();
    userDetailFetch();
    institutionDetailFetch();
    handleFetctNotifications("api/announcement");
    // eslint-disable-next-line
  }, []);

  const { logutOutHandler } = useLogout();

  useEffect(() => {
    if (institutionDetails && institutionDetails.landing_page_theme) {
      changeTheme(institutionDetails?.landing_page_theme);
      const iconLink = institutionDetails?.logo
        ? domain + institutionDetails?.logo
        : null;
      readSubdomainFromFile().then((sub) => {
        document.title = institutionDetails?.name || sub?.toUpperCase();
      });
      updateFavicon(iconLink);
    }
  }, [institutionDetails, domain]);

  const { notificationLoading, notificationData, handleFetctNotifications } =
    clientUseFetch();

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Landinglayout
              {...{
                institutionDetails,
                domain,
                setUnauthorizedUserSourcelink,
                loginModal,
                setLoginModal,
                notificationLoading: false,
                notificationData: {},
              }}
            />
          }
        />

        <Route
          path='/home'
          element={
            <ProtectedRoute
              loginModal={loginModal}
              setLoginModal={setLoginModal}
            >
              <Homepage
                {...{
                  logutOutHandler,
                  institutionDetails,
                  domain,
                  notificationLoading,
                  notificationData,
                }}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path='/resources'
          element={
            <ProtectedRoute
              loginModal={loginModal}
              setLoginModal={setLoginModal}
            >
              <Resources
                {...{
                  logutOutHandler,
                  institutionDetails,
                  domain,
                  notificationLoading,
                  notificationData,
                }}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path='/searchview'
          element={
            <ProtectedRoute
              loginModal={loginModal}
              setLoginModal={setLoginModal}
            >
              <SearchView
                {...{
                  logutOutHandler,
                  institutionDetails,
                  domain,
                  notificationData,
                }}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path='/all/resources'
          element={
            <ProtectedRoute
              loginModal={loginModal}
              setLoginModal={setLoginModal}
            >
              <AtoZResourcePage
                {...{
                  logutOutHandler,
                  institutionDetails,
                  domain,
                  notificationLoading,
                  notificationData,
                }}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path='/savedresources'
          element={
            <ProtectedRoute
              loginModal={loginModal}
              setLoginModal={setLoginModal}
            >
              <SavedResources
                {...{
                  logutOutHandler,
                  institutionDetails,
                  domain,
                  notificationData,
                }}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute
              loginModal={loginModal}
              setLoginModal={setLoginModal}
            >
              <Profile
                {...{
                  logutOutHandler,
                  institutionDetails,
                  domain,
                  notificationLoading,
                  notificationData,
                }}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path='/notifications'
          element={
            <ProtectedRoute
              loginModal={loginModal}
              setLoginModal={setLoginModal}
            >
              <Notifications
                {...{
                  logutOutHandler,
                  institutionDetails,
                  domain,
                  notificationData,
                }}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path='/help'
          element={
            <ProtectedRoute
              loginModal={loginModal}
              setLoginModal={setLoginModal}
            >
              <HelpAndSupport
                {...{
                  logutOutHandler,
                  institutionDetails,
                  domain,
                  notificationLoading,
                  notificationData,
                }}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin/*'
          element={
            <AdminRoute loginModal={loginModal} setLoginModal={setLoginModal}>
              <AdminRoutes />
            </AdminRoute>
          }
        />
      </Routes>
      {loginModal && (
        <Login
          unauthorizedUserSourcelink={unauthorizedUserSourcelink}
          loginModal={loginModal}
          setLoginModal={setLoginModal}
        />
      )}
    </>
  );
}

export default App;
