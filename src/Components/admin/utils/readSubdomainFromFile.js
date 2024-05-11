import subdmonPath from "../../../subdomain.txt";

let domain = null;
const readSubdomainFromFile = async () => {
  try {
    if (!domain) {
      const response = await fetch(subdmonPath);

      const data = await response.text();
      domain = data.trim();
    }
    return domain;
  } catch (error) {
    // console.error("Error reading subdomain:", error);
  }
};

export default readSubdomainFromFile;
