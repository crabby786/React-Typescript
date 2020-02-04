export { getUsers };
function getUsers(e) {
  return {
    types: ["LOADING", "SUCCESS", "FAILED"],
    payload: {
      request: {
        url: "users"
      }
    }
  };
}
