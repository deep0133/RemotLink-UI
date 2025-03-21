import defaultIcon from "../../../images/instituteDefaultLogo.png";
const updateFavicon = (faviconUrl) => {
  const link =
    document.querySelector("link[rel*='icon']") ||
    document.createElement("link");
  link.type = "image/x-icon";
  link.rel = "shortcut icon";
  link.href = faviconUrl || defaultIcon;
  document.getElementsByTagName("head")[0].appendChild(link);
};

export default updateFavicon;
