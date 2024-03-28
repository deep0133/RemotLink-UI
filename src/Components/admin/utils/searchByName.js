function searchByName(data, name) {
  return data.filter((obj) => obj.name && obj.name === name);
}

export default searchByName;
