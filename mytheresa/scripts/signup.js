document.getElementById("btn1").addEventListener("click", signUp);
var ar = JSON.parse(localStorage.getItem("userData")) || [];

function signUp() {
  var userD = {
    userfn: register.fname.value,
    userln: register.lname.value,
    usermob: register.mob.value,
    userEmail: register.email.value,
    userPass: register.password.value,
  };
  ar.push(userD);
  localStorage.setItem("userData", JSON.stringify(ar));

  window.location = "login.html";
}