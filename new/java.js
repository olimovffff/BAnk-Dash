const uLogin = localStorage.getItem("login");

function Activ(event) {
  document.querySelectorAll(".imgdiv").forEach((div) => {
    div.classList.remove("active");
  });

  event.currentTarget.classList.add("active");
}

document.querySelector(".ahmad").style.fill = "red";

if (uLogin !== "true") {
  window.location.href = "/signup.html";
}
