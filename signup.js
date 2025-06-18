// let olma = document.querySelector("Create");
// olma.addEventListener("click", function () {
//   alert("Create")
// });

const uLogin = localStorage.getItem("login");

if (uLogin === "true") {
  window.location.href = "/new/index.html";
}

let inson = document.querySelector(".Create").innerHTML;
let yourname = document.querySelector("#iname");
let emailkod = document.querySelector("#iname1");
let passwordkod = document.querySelector("#iname2");
let conpasswordkod = document.querySelector("#iname3");

function olma() {
  if (
    yourname.value.length > 0 &&
    emailkod.value.length > 0 &&
    passwordkod.value.length > 0 &&
    conpasswordkod.value.length > 0
  ) {
    alert(
      `name: ${document.querySelector("#iname").value} email: ${
        document.querySelector("#iname1").value
      } password:  ${document.querySelector("#iname2").value} con password: ${
        document.querySelector("#iname3").value
      }`
    );
    window.location.href = "/new/index.html";
    localStorage.setItem("login", true);
  } else if (yourname.value.length > 0) {
    document.querySelector("#statusp").innerHTML = "Ism bor";
  } else {
    document.querySelector("#statusp").innerHTML = "Hech qanday malumot yo'q";
  }
}
