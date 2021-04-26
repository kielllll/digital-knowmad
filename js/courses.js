const createCourse = document.querySelector('#admin-button');
console.log(isAdmin);
console.log(userId);
// Check if current user is an admin
if(!isAdmin || isAdmin === "false") {
 // not an admin
  createCourse.innerHTML = null;
}