import { useState } from "react";
import { toast } from "react-toastify";

export default function useDownload() {
  const [templateLoading, setTemplateLoading] = useState(false);

  const handleDownloadTemplate = async (api, formData) => {
    setTemplateLoading(true);
    try {
      const token = localStorage.getItem("access_token");

      const response = await fetch(`https://stage1.remotlink.com/${api}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "de",
        },
      });

      if (!response.ok) {
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
      link.setAttribute("download", "template.xlsx"); // Adjust filename and extension
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
