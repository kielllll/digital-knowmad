const profileContainer = document.querySelector('#profile-container');

// Check if a user is logged-in
if (userId && typeof userId === "string") {
  alert("You are currently logged in.");
} else window.location.replace("./login.html");