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
  const isValid = (firstName && lastName && mobileNumber.length === 11 && emailAddress && password && confirmPassword && password === confirmPassword);
  
  console.log(isValid);
});
