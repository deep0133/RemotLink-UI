import subdmonPath from "../../../subdomain.txt";

let domain = null;

const readSubdomainFromFile = async () => {
  if (domain) return domain;

  try {
    const response = await fetch(subdmonPath);
    domain = (await response.text()).trim();
    return domain;
  } catch (error) {
    console.error("Error reading subdomain:", error);
    return null;
  }
};

export default readSubdomainFromFile;
