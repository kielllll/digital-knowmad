const createCourse = document.querySelector("#admin-button");

// Check if current user is an admin
if (!isAdmin) {
  // not an admin
  createCourse.innerHTML = null;
}

// Diplay all courses
fetch(`https://zeke-csp2-app-server.herokuapp.com/api/courses`)
  .then(res => res.json())
  .then(data => {
    console.dir(data);
  });
