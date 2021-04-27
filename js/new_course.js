// Check if a user is logged-in
if (userId && typeof userId === "string") {
  // Check if user is not an admin
  if(!isAdmin) {
    window.history.back();
  } 
} else window.location.replace("./login.html");