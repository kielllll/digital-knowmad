// Convert the window.location.search to a query string object
const queryStringObject = new URLSearchParams(window.location.search);
const courseId = queryStringObject.get("id");

// Send a request to retrieve a course description
fetch(`https://zeke-csp2-app-server.herokuapp.com/api/courses?id=${courseId}`)
  .then(res => res.json())
  .then(data => {
    const { name, description, price, enrollees } = data.course;

    document.querySelector("#course-name").innerText = name;
    document.querySelector("#course-description").innerText = description;
    document.querySelector("#course-price").innerText = price;

    if (userId && isAdmin) {
      const enrolleesList = enrollees
        .map(
          ({ firstName, lastName, emailAddress }) =>
            `
        <tr>
          <td>${lastName}, ${firstName}</td>
          <td>${emailAddress}</td>
        <tr>
      `
        )
        .join("");

      document.querySelector("tbody").innerHTML = enrolleesList;
    } else
      document.querySelector("#enrollees-table").style.display = "none";
  });

// Do not allow non-authenticated users or admins to enroll
const btnEnroll = document.querySelector("#btn-enroll");
if (!userId || isAdmin) {
  btnEnroll.style.display = "none";
} else {
  btnEnroll.addEventListener("click", event => {
    fetch(`https://zeke-csp2-app-server.herokuapp.com/api/users/enroll`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId,
        courseId
      })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message) {
          // Enrollment was successful
          alert("Success: Enrollment was successful!");
          window.location.replace("./courses.html");
        } else {
          // Enrollment failed
          alert("Error: Enrollment was unsuccessful.");
        }
      });
  });
}
