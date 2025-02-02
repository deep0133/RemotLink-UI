import readSubdomainFromFile from "./readSubdomainFromFile";

let subDomain = null;

const generateUrl = async () => {
  const baseUrl = process.env.REACT_APP_BACKEND_URL.replace(/\/$/, ""); // Remove trailing slash
  if (!subDomain) {
    subDomain = await readSubdomainFromFile();
  }

  return `https://${subDomain}.${baseUrl}/`; // Ensure a trailing slash for consistency
};
export default generateUrl;
