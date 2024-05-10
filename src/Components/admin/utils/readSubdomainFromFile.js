import subdomainpath from "../../../../src/subdomain.txt";

const readSubdomainFromFile = async () => {
  try {
    const response = await fetch(subdomainpath);
    const data = await response.text();
    return data.trim();
  } catch (error) {
    console.error("Error reading subdomain:", error);
  }
};

export default readSubdomainFromFile;
