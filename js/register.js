const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", event => {
  event.preventDefault();

  const firstName = document.querySelector("#first-name").value;
  const lastName = document.querySelector("#last-name").value;
  const mobileNumber = document.querySelector("#mobile-number").value;
  const emailAddress = document.querySelector("#email-address").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;
  
  // Simple data validation here
  const isValid = (firstName !== "" && lastName !== "" && mobileNumber.length === 13 && emailAddress !== "" && password !== "" && confirmPassword !== "" && password === confirmPassword);
  
  if(isValid) {
    fetch("https://zeke-csp2-app-server.herokuapp.com/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        firstName,
        lastName,
        mobileNumber,
        emailAddress,
        password
      }
    })
    .then()
    .then();
  } else alert('Required field(s) is/are invalid.');
});
