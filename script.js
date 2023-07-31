// data collection from form/
const formDetails = document.getElementById("regform");
const formSubmit = document.getElementById("submit");

formDetails.addEventListener("submit", takevalue);

function takevalue(event) {
  event.preventDefault();
  let first = document.getElementById("first").value;
  let middle = document.getElementById("middle").value;
  let last = document.getElementById("last").value;
  let dob = document.getElementById("dob").value;
  let boxcity = document.getElementById("boxcity").value;
  let state = document.getElementById("state").value;
  let country = document.getElementById("country").value;
  let zip = document.getElementById("zip").value;
  let email = document.getElementById("email").value;
  let street = document.getElementById("street").value;
  let stud = document.getElementById("stud").value;
  let phone = document.getElementById("phone").value;
  let language = document.getElementById("languageDrop").value;
  let level = document.getElementById("levelDrop").value;
  let start = document.getElementById("startDrop").value;
  let course = document.getElementById("courseDrop").value;

  const studentDetails = {
    first,
    middle,
    last,
    dob,
    stud,
    street,
    boxcity,
    state,
    country,
    zip,
    email,
    phone,
    course,
    level,
    language,
    start,
  };
  localStorage.setItem("regDetails", JSON.stringify(studentDetails));
}
