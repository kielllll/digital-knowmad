const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", event => {
  event.preventDefault();

  const emailAddress = document.querySelector("#email-address").value;
  const password = document.querySelector("#password").value;

  // Data validation
  const isValid = emailAddress !== "" && password !== "";

  if (isValid) {
    // fetch()
    // .then()
    // .then();
  } else {
    alert("Missing required field(s).")
  }
});
