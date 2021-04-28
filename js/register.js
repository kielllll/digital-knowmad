const registerForm = document.querySelector("#register-form");

// Check if a user is logged-in
if (userId && typeof userId === "string") {
  window.location.replace("./profile.html");
}

registerForm.addEventListener("submit", event => {
  event.preventDefault();

  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const mobileNumber = document.querySelector("#mobile-number").value;
  const emailAddress = document.querySelector("#email-address").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;

  // Simple data validation here
  const isValid =
    firstName !== "" &&
    lastName !== "" &&
    mobileNumber.length === 13 &&
    emailAddress !== "" &&
    password !== "" &&
    confirmPassword !== "" &&
    password === confirmPassword;

  if (isValid) {
    // Check if user (email) already exist
    fetch("https://zeke-csp2-app-server.herokuapp.com/api/users/check-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ emailAddress })
    })
      .then(res => res.json())
      .then(data => {
        if (!data.data) {
          // Email is good// Email is good
          // Initiate registration process
          fetch(
            "https://zeke-csp2-app-server.herokuapp.com/api/users/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                firstName,
                lastName,
                mobileNumber,
                emailAddress,
                password
              })
            }
          )
            .then(response => response.json())
            .then(data => {
              if (data.data) {
                alert("Registration was successful.");
                window.location.replace("/login.html");
              } else {
                alert("Can't create a new user.");
              }
            });
        } else {
          // Email already exist
          alert("Email is already in use.");
        }
      });
  } else alert("Required field(s) is/are invalid.");
});
