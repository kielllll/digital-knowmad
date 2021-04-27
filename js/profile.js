const profileContainer = document.querySelector("#profile-container");

// Check if a user is logged-in
if (userId && typeof userId === "string") {
  fetch(
    `https://zeke-csp2-app-server.herokuapp.com/api/users/details?id=${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(data => {
      let {firstName, lastName, email} = data.userDetails;
  });
} else window.location.replace("./login.html");
