// Convert the window.location.search to a query string object
const queryStringObject = new URLSearchParams(window.location.search);
const courseId = queryStringObject.get("id");

// Send a request to retrieve a course description
fetch(`https://zeke-csp2-app-server.herokuapp.com/api/courses?id=${courseId}`)
  .then()
  .then();
