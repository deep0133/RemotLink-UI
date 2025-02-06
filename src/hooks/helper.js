function checkApi(api) {
  if (!api) {
    alert("API ---is undefined");
    throw new Error("_----API is Null or Undefined----");
  }
}
export default checkApi;
