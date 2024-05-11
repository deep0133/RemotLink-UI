import { useEffect, useState } from "react";
import readSubdomainFromFile from "../Components/admin/utils/readSubdomainFromFile";
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
  const [messages, setMessages] = useState([]);

  const [proxy, setProxy] = useState("");

  const [searchSite, setSearchSite] = useState("");
  const [searchLoader, setSearchLoader] = useState(false);

  const [institutionDetails, setInstitutionDetails] = useState("");

  const [subdomain, setSubdomain] = useState("");

  useEffect(() => {
    handleSearchSite();
  }, [searchSite]);

  const { logutOutHandler } = useLogout();

  // ------------- Not In Use -------------
  const handleFetchLikes = async (id) => {
    setFetchLoading(true);
    try {
      const api = `api/user/favourites/`;

      const token = localStorage.getItem("access_token");
      const baseUrl = process.env.REACT_APP_BACKEND_URL;
      let domain = subdomain;
      if (!subdomain) {
        domain = await readSubdomainFromFile();
        setSubdomain(domain);
      }

      const url = "https://" + domain + "." + baseUrl;

      const response = await fetch(url + api, {
        method: "POST",
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
    } catch (err) {
      // console.log("Error :", err);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleFetchResources = async () => {
    setFetchLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const api = "api/report/site/?start&end";

      const baseUrl = process.env.REACT_APP_BACKEND_URL;
      let domain = subdomain;
      if (!subdomain) {
        domain = await readSubdomainFromFile();
        setSubdomain(domain);
      }

      const url = "https://" + domain + "." + baseUrl;

      const response = await fetch(url + api, {
        method: "GEt",
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
      const baseUrl = process.env.REACT_APP_BACKEND_URL;
      let domain = subdomain;
      if (!subdomain) {
        domain = await readSubdomainFromFile();
        setSubdomain(domain);
      }

      const url = "https://" + domain + "." + baseUrl;

      const response = await fetch(url + api, {
        method: "GET",
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
      const baseUrl = process.env.REACT_APP_BACKEND_URL;
      let domain = subdomain;
      if (!subdomain) {
        domain = await readSubdomainFromFile();
        setSubdomain(domain);
      }

      const url = "https://" + domain + "." + baseUrl;

      const response = await fetch(url + api, {
        method: "GET",
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
      const token = localStorage.getItem("access_token");
      const api = `api/sites/?search=${searchSite}`;
      const baseUrl = process.env.REACT_APP_BACKEND_URL;
      let domain = subdomain;
      if (!subdomain) {
        domain = await readSubdomainFromFile();
        setSubdomain(domain);
      }

      const url = "https://" + domain + "." + baseUrl;

      const response = await fetch(url + api, {
        method: "GET",
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
      const baseUrl = process.env.REACT_APP_BACKEND_URL;
      let domain = subdomain;
      if (!subdomain) {
        domain = await readSubdomainFromFile();
        setSubdomain(domain);
      }

      const url = "https://" + domain + "." + baseUrl;

      const response = await fetch(url + api, {
        method: "GET",
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
      setMessages(json.results);
      return selectRandomMessage(json.results);
    } catch (error) {
      // console.log("Error : ", error);
      return "Error While Fetching Data from DB";
    }
  };

  const institutionDetailFetch = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const api = `api/institution/detail`;
      const baseUrl = process.env.REACT_APP_BACKEND_URL;
      let domain = subdomain;
      if (!subdomain) {
        domain = await readSubdomainFromFile();
        setSubdomain(domain);
      }

      const url = "https://" + domain + "." + baseUrl;

      const response = await fetch(url + api, {
        method: "Get",
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
      setInstitutionDetails(data);
    } catch (error) {
      // console.error("Error fetching FAQs:", error.message);
    }
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
  };
}
