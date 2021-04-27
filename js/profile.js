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

      profileContainer.innerHTML = `
      <div class="col-md-12">
				<section class="jumbotron my-5">		
					<h3 class="text-center">First Name: ${firstName}</h3>
					<h3 class="text-center">Last Name: ${lastName}</h3>
					<h3 class="text-center">Email: ${emailAddress}</h3>
					<h3 class="mt-5">Class Enrollment History</h3>
					<table class="table">
						<thead>
							<tr>
								<th> Course ID </th>
								<th> Enrolled On </th>
								<th> Status </th>
							</tr>
						</thead>
						<tbody>
							${enrollments}
						</tbody>
					</table> 

				</section>
			</div>
      `;
    });
} else window.location.replace("./login.html");
