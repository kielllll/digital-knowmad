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
    // if non-admin
    let courses;
    if (!isAdmin) {
      courses = data.courses.filter(course => course.isActive);
    } else courses = data.courses;

    // Display all courses
    const coursesList = courses.map(course => {
      const buttons =
        userId && isAdmin
          ? `<div class="col-sm-12 col-md-4 mb-1">
                      <a href="./edit_course.html?id=${course._id}" class="btn btn-outline-secondary btn-block btn-course">Edit</a>
                    </div>
                    <div class="col-sm-12 col-md-4 mb-1">
                      <a href="./delete_course.html?id=${course._id}" class="btn btn-outline-danger btn-block btn-course">Delete</a>
                    </div>`
          : ``;
      return `
      <div class="col-md-6 my-3">
                 <div class='card'>
              <div class='card-body'>
                  <h5 class='card-title'>${course.name}</h5>
                  <p class='card-text text-left'>
                      ${course.description}
                  </p>
                  <p class='card-text text-right'>
                     ₱ ${course.price}
                  </p>
              </div>
              <div class='card-footer'>
                  <div class="row">
                    <div class="col-sm-12 col-md-4 mb-1">
                      <a href="./course.html?id=${course._id}" class="btn btn-outline-primary btn-block btn-course">View</a>
                    </div>
                    ${buttons}
                  </div>
              </div>
          </div>
      </div>
    `;
    });
    document.querySelector("#courses-container").innerHTML = coursesList.join(
      ""
    );
  });
