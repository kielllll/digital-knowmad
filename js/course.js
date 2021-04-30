// Convert the window.location.search to a query string object
const queryStringObject = new URLSearchParams(window.location.search);
const courseId = queryStringObject.get("id");

// Send a request to retrieve a course description
fetch(`https://zeke-csp2-app-server.herokuapp.com/api/courses?id=${courseId}`)
  .then(res => res.json())
  .then(data => {
    const { name, description, price } = data.course;

    document.querySelector("#course-name").innerText = name;
    document.querySelector("#course-description").innerText = description;
    document.querySelector("#course-price").innerText = price;
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
      body: JSON.parse({
        
      })
    }).then().then()
  });
}
