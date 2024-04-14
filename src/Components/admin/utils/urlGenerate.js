import readSubdomainFromFile from "./readSubdomainFromFile";

const generateUrl = async () => {
  const baseUrl = await process.env.REACT_APP_BACKEND_URL;
  const domain = await readSubdomainFromFile();

  return "https://" + domain + "." + baseUrl;
};

export default generateUrl;
