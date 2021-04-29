// Convert the window.location.search to a query string object
const queryStringObject = new URLSearchParams(window.location.search);
const courseId = queryStringObject.get("id");
