import { useEffect, useState } from "react";

const selectRandomMessage = (messages) => {
  try {
    const randomIndex = Math.floor(Math.random() * messages.length);
    const selectedMessage = messages[randomIndex].message;
    return selectedMessage;
  } catch (error) {
    console.log("ERROR in MEssage :", error);
    return "Strong people don’t put others down. they lift them up.";
  }
};

export default function useFetch() {
  const [fetchLoading, setFetchLoading] = useState(false);
  const [resources, setResources] = useState([]);
  const [allSites, setAllSites] = useState([]);
  const [messages, setMessages] = useState([]);

  const [searchSite, setSearchSite] = useState("");
  const [searchLoader, setSearchLoader] = useState(false);

  const [institutionDetails, setInstitutionDetails] = useState("");

  useEffect(() => {
    handleSearchSite();
  }, [searchSite]);

  // ------------- Not In Use -------------
  const handleFetchLikes = async (id) => {
    setFetchLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        `https://stage1.remotlink.com/api/user/favourites/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      // setResources(data.results);
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleFetchResources = async () => {
    setFetchLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        "https://stage1.remotlink.com/api/report/site/?start&end",
        {
          method: "GEt",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setResources(data.results);
    } catch (err) {
      console.log("Error :", err);
    } finally {
      setFetchLoading(false);
    }
  };

  const handleFetchProxyAPI = async (id) => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        `https://stage1.remotlink.com/api/website/create-proxy/${id}`,
        {
          method: "GEt",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      window.open(json.proxy_url);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const handleFetchAllSites = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(`https://stage1.remotlink.com/api/sites/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await response.json();
      setAllSites(json.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const createProxyAPI = async (id) => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        `https://stage1.remotlink.com/api/website/create-proxy/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      window.open(json.proxy_url);
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  const handleSearchSite = async () => {
    try {
      // setSearchLoading(true);
      setSearchLoader(true);
      const token = localStorage.getItem("access_token");
      setSearchSite(searchSite);
      const response = await fetch(
        `https://stage1.remotlink.com/api/sites/?search=${searchSite}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await response.json();
      setAllSites(() => json.results);
    } catch (error) {
      console.log("Error : ", error);
    } finally {
      // setSearchLoading(false);
      setSearchLoader(false);
    }
  };

  const handleFetchMessages = async () => {
    let json;
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        `https://stage1.remotlink.com/api/message/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      json = await response.json();
      setMessages(json.results);
      return selectRandomMessage(json.results);
    } catch (error) {
      console.log("Error : ", error);
      return "Error While Fetching Data from DB";
    }
  };

  const institutionDetailFetch = async () => {
    try {
      const token = localStorage.getItem("access_token");
      const response = await fetch(
        `https://stage1.remotlink.com/api/institution/detail`,
        {
          method: "Get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setInstitutionDetails(data);
    } catch (error) {
      console.error("Error fetching FAQs:", error.message);
    }
  };

  return {
    fetchLoading,
    resources,
    searchSite,
    searchLoader,
    allSites,
    setAllSites,
    setSearchSite,
    handleFetchLikes,
    handleFetchResources,
    handleFetchProxyAPI,
    handleFetchAllSites,
    createProxyAPI,
    handleSearchSite,
    handleFetchMessages,
    institutionDetails,
    institutionDetailFetch,
  };
}
