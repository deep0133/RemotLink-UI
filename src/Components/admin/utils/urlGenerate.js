import readSubdomainFromFile from "./readSubdomainFromFile";

let subDomain = null;
const generateUrl = async () => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL;
  if (!subDomain) {
    subDomain = await readSubdomainFromFile();
  }

  return "https://" + subDomain + "." + baseUrl;
};

export default generateUrl;
