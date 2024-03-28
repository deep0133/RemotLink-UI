function sortByCreatedAt(data, order = "asc") {
  // Sort the array based on the created_at field
  return (
    data &&
    data.sort((a, b) => {
      const dateA = new Date(a.created_at);
      const dateB = new Date(b.created_at);
      if (order === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    })
  );
}

export default sortByCreatedAt;
