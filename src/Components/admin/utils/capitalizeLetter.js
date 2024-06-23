const capitalizeLetter = (letter) => {
  const resourceType = letter || "";

  // Capitalize the first letter and concatenate with the rest of the string
  const formattedResourceType =
    resourceType.charAt(0).toUpperCase() + resourceType.slice(1);
  return formattedResourceType;
};

export default capitalizeLetter;
