const loginForm = document.querySelector("#login-form");

// Check if a user is logged-in
if (userId && typeof userId === "string") {
  window.location.replace("./profile.html");
}

loginForm.addEventListener("submit", event => {
  event.preventDefault();

  const emailAddress = document.querySelector("#email-address").value;
  const password = document.querySelector("#password").value;

  // Data validation
  const isValid = emailAddress !== "" && password !== "";

  if (isValid) {
    fetch("https://zeke-csp2-app-server.herokuapp.com/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        emailAddress,
        password
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.data) {
          // Authentication
          const { _id: userId } = data.userDetails;

          // Registered User
          fetch(
            `https://zeke-csp2-app-server.herokuapp.com/api/users/details?id=${userId}`
          )
            .then(res => res.json())
            .then(data => {
              const { _id: userId, isAdmin, firstName, lastName } = data.userDetails;
              localStorage.setItem("userId", userId);
              localStorage.setItem("isAdmin", isAdmin);
              localStorage.setItem("firstName", firstName);
              localStorage.setItem("lastName", lastName);
              window.location.replace("./courses.html");
            });
        } else {
          alert("User account was not found.");
        }
      });
  } else {
    alert("Missing required field(s).");
  }
});
