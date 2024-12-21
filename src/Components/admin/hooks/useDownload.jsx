import { useState } from "react";
import { toast } from "react-toastify";
import readSubdomainFromFile from "../utils/readSubdomainFromFile";
import useLogout from "../../../hooks/useLogout";

export default function useDownload() {
  const [templateLoading, setTemplateLoading] = useState(false);
  const [subdomain, setSubdomain] = useState("");

  const { logutOutHandler } = useLogout();

  const request = async (api) => {
    try {
      const token = localStorage.getItem("access_token");

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
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      // console.log("Error");
      return error;
    }
  };

  const handleDownloadTemplate = async (api) => {
    setTemplateLoading(true);
    try {
      const response = await request(api);
      if (!response.ok) {
        if (response.status === 401) {
          await logutOutHandler();
        }
        const errorResponse = await response.json();
        if (errorResponse && errorResponse.details) {
          throw new Error(errorResponse.details);
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }
      // response is a file to download
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      toast.success("Downloaded Successfully");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setTemplateLoading(false);
    }
  };

  return { templateLoading, handleDownloadTemplate };
}
