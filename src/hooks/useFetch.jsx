import { useEffect, useState } from "react";
import generateUrl from "../Components/admin/utils/urlGenerate";
import useLogout from "./useLogout";

const selectRandomMessage = (messages) => {
  try {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[randomIndex].message;
    return selectedMessage;
  } catch (error) {
    // console.log("ERROR in MEssage :", error);
    return "Strong people don’t put others down. they lift them up.";
  }
};

export default function useFetch() {
  const [fetchLoading, setFetchLoading] = useState(false);
  const [resources, setResources] = useState([]);
  const [allSites, setAllSites] = useState([]);

  const [proxy, setProxy] = useState("");

  const [searchSite, setSearchSite] = useState("");
  const [searchLoader, setSearchLoader] = useState(false);

  const [favLoading, setFavLoading] = useState(false);
  const [favData, setFavData] = useState([]);

  const [institutionDetails, setInstitutionDetails] = useState("");

  const [catgorialResourceLoading, setCatgorialResourceLoading] =
    useState(false);
  const [catgorialResource, setCatgorialResource] = useState(null);

  // setFeatureResourceDataLoading
  const [featureResourceLoading, setFeatureResourceLoading] = useState(false);
  const [featureResourceData, setFeatureResourceData] = useState(null);

  const [discoverReadingLoading, setDiscoverReadingLoading] = useState(false);
  const [discoverReadingData, setDiscoverReadingData] = useState(null);

  const [treandingResourceLoading, setTreandingResourceLoading] =
    useState(false);
  const [treandingResourceData, setTreandingResourceData] = useState(null);

  const [topSavedResourcesLoading, setTopSavedResourcesLoading] =
    useState(false);
  const [topSavedResourcesData, setTopSavedResourcesData] = useState(null);

  const [searchViewLoading, setSearchViewLoading] = useState(false);
  const [searchViewData, setSearchViewData] = useState(null);

  const [searchViewFilterLoading, setSearchViewFilterLoading] = useState(false);
  const [searchViewFilterData, setSearchViewFilterData] = useState(null);

  const [aTOzResourceLoading, setATOzResourceLoading] = useState(false);
  const [aTOzResourceData, setATOzResourceData] = useState(null);

  useEffect(() => {
    handleSearchSite();
    // eslint-disable-next-line
  }, [searchSite]);

  const { logutOutHandler } = useLogout();

  // ------------- Not In Use -------------
  const handleFetchLikes = async () => {
    setFavLoading(true);
    try {
      const api = `api/user/favourites/`;
      const token = localStorage.getItem("access_token");

      const url = await generateUrl();

      const response = await fetch(url + api, {
        method: "GET",
        credentials: "include",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();

      const ids = json?.map((item) => item.id);

      setFavData(ids);
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setFavLoading(false);
    }
  };

  const handleFetchResources = async () => {
    setFetchLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const api = "api/report/site/";

      const url = await generateUrl();

      const response = await fetch(url + api, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setResources(data.results);
    } catch (err) {
      // console.log("Error :", err);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleFetchAllSites = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const api = "api/sites/";
      const url = await generateUrl();

      const response = await fetch(url + api, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = await response.json();
      setAllSites(json.results);
    } catch (error) {
      // console.log("Error : ", error);
    }
  };

  const createProxyAPI = async (id) => {
    try {
      const token = localStorage.getItem("access_token");
      const api = `api/website/create-proxy/${id}`;
      const url = await generateUrl();

      const response = await fetch(url + api, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();

      const proxyUrl = json.proxy_url;

      setProxy(proxyUrl);

      window.open(proxyUrl, "_blank");
    } catch (error) {
      // console.log("Error: ", error);
    }
  };

  const handleSearchSite = async () => {
    try {
      setSearchLoader(true);
      const api = `api/sites/?search=${searchSite}`;
      const url = await generateUrl();

      const response = await fetch(url + api, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      setAllSites(() => json.results);
    } catch (error) {
      // console.log();
    } finally {
      // setSearchLoading(false);
      setSearchLoader(false);
    }
  };

  const handleFetchMessages = async () => {
    let json;
    try {
      const token = localStorage.getItem("access_token");
      const api = `api/message/`;
      const url = await generateUrl();

      const response = await fetch(url + api, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      json = await response.json();
      return selectRandomMessage(json.results);
    } catch (error) {
      return "Error While Fetching Data from DB";
    }
  };

  const institutionDetailFetch = async () => {
    try {
      const api = `api/institution/detail`;
      const url = await generateUrl();
      const response = await fetch(url + api, {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setInstitutionDetails(data);
    } catch (error) {
      // console.error("Error fetching FAQs:", error.message);
    }
  };

  const fetchTemplate = async (api, loading, state, token = true) => {
    try {
      loading(true);
      const url = await generateUrl();

      const headers = {
        "Content-Type": "application/json",
      };

      if (token) {
        const tok = localStorage.getItem("access_token");
        headers["Authorization"] = `Bearer ${tok}`;
      }

      if (!api) return;
      const response = await fetch(url + api, {
        method: "Get",
        credentials: "include",
        headers: headers,
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      state(data);
    } catch (error) {
      // console.error("Error fetching FAQs:", error.message);
    } finally {
      loading(false);
    }
  };
  const fetchTemplateSites = async (api, loading, state) => {
    try {
      loading(true);
      const url = await generateUrl();

      const headers = {
        "Content-Type": "application/json",
      };

      if (!api) return;
      const response = await fetch(url + api, {
        method: "Get",
        credentials: "include",
        headers: headers,
      });
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      state(data);
    } catch (error) {
      // console.error("Error fetching FAQs:", error.message);
    } finally {
      loading(false);
    }
  };

  const landingPageCategorialResourceFetch = async (param) => {
    await fetchTemplate(
      `api/sites/resources-view/?sort_by=${param}`,
      setCatgorialResourceLoading,
      setCatgorialResource,
      false
    );
  };

  const landingPageFeaturedResourcesFetch = async () => {
    // await fetchTemplate(
    //   `api/sites/recent-subject-resources/`,
    //   setFeatureResourceLoading,
    //   setFeatureResourceData,
    //   false
    // );
  };

  const homePageDiscoverRecentReadingFetch = async (time_period) => {
    await fetchTemplate(
      `api/sites/recently-accessed-resources/?time_period=${time_period}`,
      setDiscoverReadingLoading,
      setDiscoverReadingData
    );
  };

  const homePageTrendingResourceFetch = async (param) => {
    await fetchTemplate(
      `api/sites/resources-view/?sort_by=${param}`,
      setTreandingResourceLoading,
      setTreandingResourceData
    );
  };

  const homePageTopSavedResourcesFetch = async () => {
    await fetchTemplate(
      `api/sites/fav-resource/list/?page_size=3&page_number=1`,
      setTopSavedResourcesLoading,
      setTopSavedResourcesData
    );
  };

  const searchViewPageHandler = async (params) => {
    await fetchTemplateSites(
      `api/sites/search/?query=${params}`,
      setSearchViewLoading,
      setSearchViewData
    );
  };

  // hit api to increase access_count:
  const increaseAccessCount = async (id) => {
    const url = await generateUrl();
    const token = localStorage.getItem("access_token");
    fetch(url + `api/sites/access-resources/${id}/`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log("Access Count increased:", data);
      })
      .catch((error) => {
        console.error("Error increasing access count:", error);
      });
  };

  const searchViewFilterationDataFetch = async () => {
    await fetchTemplate(
      `api/sites/distinct-fields/`,
      setSearchViewFilterLoading,
      setSearchViewFilterData,
      false
    );
  };

  const aToZPageDataFetch = async (query) => {
    await fetchTemplate(
      `api/sites/a2z-resources/?${query}`,
      setATOzResourceLoading,
      setATOzResourceData,
      false
    );
  };

  return {
    fetchLoading,
    proxy,
    resources,
    searchSite,
    searchLoader,
    allSites,
    setAllSites,
    setSearchSite,
    handleFetchLikes,
    handleFetchResources,
    handleFetchAllSites,
    createProxyAPI,
    handleSearchSite,
    handleFetchMessages,
    institutionDetails,
    institutionDetailFetch,
    catgorialResource,
    catgorialResourceLoading,
    landingPageCategorialResourceFetch,

    favLoading,
    favData,

    featureResourceLoading,
    featureResourceData,
    landingPageFeaturedResourcesFetch,
    increaseAccessCount,

    discoverReadingData,
    discoverReadingLoading,
    homePageDiscoverRecentReadingFetch,

    treandingResourceData,
    treandingResourceLoading,
    homePageTrendingResourceFetch,

    topSavedResourcesData,
    topSavedResourcesLoading,
    homePageTopSavedResourcesFetch,

    searchViewData,
    searchViewLoading,
    searchViewPageHandler,

    searchViewFilterData,
    searchViewFilterLoading,
    searchViewFilterationDataFetch,

    aToZPageDataFetch,
    aTOzResourceLoading,
    aTOzResourceData,
  };
}
