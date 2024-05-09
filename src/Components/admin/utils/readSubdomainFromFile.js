const readSubdomainFromFile = async () => {
  try {
    const subdmon = process.env.REACT_APP_SUB_DOMAIN;
    return subdmon.trim();
  } catch (error) {
    console.error("Error reading subdomain:", error);
  }
};

export default readSubdomainFromFile;
