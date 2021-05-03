const profileContainer = document.querySelector("#profile-container");

// Check if a user is logged-in
if (userId && typeof userId === "string") {
  fetch(
    `https://zeke-csp2-app-server.herokuapp.com/api/users/details?id=${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }
  )
    .then(res => res.json())
    .then(data => {
      let {
        firstName,
        lastName,
        emailAddress,
        mobileNumber,
        enrollments
      } = data.userDetails;

      const enrollmentHistory = enrollments
        .map(
          ({ courseName, enrolledOn, status }) => `
        <tr>
          <td>${courseName}</td>
          <td>${new Date(enrolledOn).toLocaleString()}</td>
          <td>${status.toUpperCase()}</td>
        </tr>
      `
        )
        .join("");

      profileContainer.innerHTML = `
      <div class="col-md-12">
        <section class="my-5">
        	<div class="mb-3">
            <label for="first-name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="first-name" value="${firstName}" readonly>
          </div>
          <div class="mb-3">
            <label for="last-name" class="form-label">First Name</label>
            <input type="text" class="form-control" id="last-name" value="${lastName}" readonly>
          </div>
          <div class="mb-3">
            <label for="email-address" class="form-label">First Name</label>
            <input type="email" class="form-control" id="email-address" value="${emailAddress}" readonly>
          </div>
          <h3 class="mt-5">Class Enrollment History</h3>
          <table class="table">
            <thead>
              <tr>
                <th> Course Name </th>
                <th> Enrolled On </th>
                <th> Status </th>
              </tr>
            </thead>
            <tbody>
              ${enrollmentHistory}
            </tbody>
          </table> 
        </section>
      </div>
      `;
    });
} else window.location.replace("./login.html");
