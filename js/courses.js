const createCourse = document.querySelector('#admin-button');

// Check if current user is an admin
if(!isAdmin || isAdmin === "false") {
 // not an admin
  createCourse.innerHTML = null;
}