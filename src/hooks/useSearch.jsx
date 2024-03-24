import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function useSearch() {
  const [searchSite, setSearchSite] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const { allSites, setAllSites } = useFetch();

  const handleSearchSite = async () => {
    try {
      console.log("search use");
      setSearchLoading(true);
      const token = localStorage.getItem("access_token");
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
      setSearchLoading(false);
    }
  };

  return { searchLoading, searchSite, setSearchSite };
}
