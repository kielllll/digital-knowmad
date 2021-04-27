const isAdmin = (localStorage.getItem("isAdmin") == "true");
const userId = localStorage.getItem("userId");

// Select all navigation elements if user is logged-in
const userLoggedInElements = document.querySelectorAll(".user-is-in");

// Select all navigation elements if user is logged-out
const userLoggedOutElements = document.querySelectorAll(".user-is-out");

if (userId && typeof userId === "string") {
  userLoggedInElements.forEach(element => {
    element.classList.toggle("hide");
  });
  userLoggedOutElements.forEach(element => {
    element.classList.toggle("hide");
  });

  // Get the name of the user
  const fName = localStorage.getItem("firstName");
  const lName = localStorage.getItem("lastName");
  const profile = (document.querySelector(
    "#profile"
  ).innerText = `${fName} ${lName}`);
}

// Logout
const logout = document.querySelector("#log-out");

logout.addEventListener("click", event => {
  localStorage.clear();
  window.location.replace("./login.html");
});
