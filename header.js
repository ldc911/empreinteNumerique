const headerNav = document.querySelector("#headerNav");
const headerNavLign = document.querySelectorAll(".headerNavLign");

headerNav.addEventListener('click', function () {
    for (let i = 0; i < headerNavLign.length; i++) {
        headerNavLign[i].style.width = "89vh";
    }
});

