const container = document.querySelector(".formContainer");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let subject = document.getElementById("subject");
  let comments = document.getElementById("comments");

  //Test submitted information for future DB storage
  console.log(name.value);
  console.log(email.value);
  console.log(subject.value);
  console.log(comments.value);

  container.textContent = "Thank you for your feedback!";
});
