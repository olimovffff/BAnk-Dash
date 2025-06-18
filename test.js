addEventListener("DOMContentLoaded", () => {

    const routes = [
        { icon: "../assets/icons/home 2.png", name: "Dashboard", route: "./dashboard.html" },
        { icon: "../assets/icons/transfer.png", name: "Transactions", route: "./transaction.html" },
        { icon: "../assets/icons/user 3 1.png", name: "Accounts", route: "./account.html" },
        { icon: "../assets/icons/investment.png", name: "Investments", route: "./investment.html" },
        { icon: "../assets/icons/credit-card.png", name: "Credit Cards", route: "./credit.html" },
        { icon: "../assets/icons/loan.png", name: "Loans", route: "./loan.html" },
        { icon: "../assets/icons/service.png", name: "Services", route: "./service.html" },
        { icon: "../assets/icons/econometrics.png", name: " My Privileges", route: "./privileg.html" },
        { icon: "../assets/icons/settings2.png", name: "  Setting", route: "./setting.html" },
    ]

    function generateSidebar() {
        const sidebar = document.querySelector(".sidebar");
        sidebar.style.color = "#343C6A";
        sidebar.style.fontSize = "15px"
        sidebar.style.fontWeight = "900";


        routes.forEach((item) => {
            const button = document.createElement("button");
            button.classList.add("sidebar-button");

            const icon = document.createElement("img");

            icon.style.width = "25px";
            icon.style.height = "25px"
            icon.style.marginRight = "10px";


            icon.src = item.icon




            const span = document.createElement("span");
            span.textContent = item.name;

            button.appendChild(icon);
            button.appendChild(span);

            button.onclick = () => {
                document
                    .querySelectorAll(".sidebar button")
                    .forEach((btn) => btn.classList.remove("active"));
                button.classList.add("active");
                loadPage(item.route);
            };

            sidebar.appendChild(button);
        });
    }

  function loadPage(route) {
  fetch(route)
    .then((res) => res.text())
    .then((html) => {
      const content = document.getElementById("mainContent");
      content.innerHTML = html;

      const scripts = content.querySelectorAll("script");
      scripts.forEach((oldScript) => {
        const newScript = document.createElement("script");
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        document.body.appendChild(newScript);
      });
    })
    .catch(() => {
      document.getElementById("mainContent").innerHTML =
        "<p>Error loading page</p>";
    });
}

    window.onload = generateSidebar;


    // const textH1 = document.querySelector(".prize").innerHTML;
    // const textH2 = document.querySelector(".prize2").innerHTML;
    // const textH3 = document.querySelector(".prize2").innerHTML;
 

    // if (textH1.includes("+")) {
    //     document.querySelector(".prize").style.color = "#41D4A8"
    //     document.querySelector(".prize").style.fontSize = "20px"
    // } else {
    //     document.querySelector(".prize").style.color = "#FF4B4A"
    //     document.querySelector(".prize").style.fontSize = "20px"
    // }
    // if (textH2.includes("+")) {
    //     document.querySelector(".prize2").style.color = "#41D4A8"
    //     document.querySelector(".prize2").style.fontSize = "20px"
    // } else {
    //     document.querySelector(".prize2").style.color = "#FF4B4A"
    //     document.querySelector(".prize2").style.fontSize = "20px"
    // }
    // if (textH3.includes("+")) {
    //     document.querySelector(".prize3").style.fontSize = "20px"
    //     document.querySelector(".prize3").style.color = "#41D4A8"
    // } else {
    //     document.querySelector(".prize3").style.color = "#FF4B4A"
    //     document.querySelector(".prize3").style.fontSize = "20px"
    // }


    ///Navbar 

})
