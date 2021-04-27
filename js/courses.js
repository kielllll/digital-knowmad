const createCourse = document.querySelector('#admin-button');

// Check if current user is an admin
if(!isAdmin) {
 // not an admin
  createCourse.innerHTML = null;
}