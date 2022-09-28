const headerNav = document.querySelector("#headerNav");
const headerNavLign = document.querySelectorAll(".headerNavLign");
const navItem = document.querySelectorAll(".navItem");


headerNav.addEventListener('click', function () {
    for (let i = 0; i < headerNavLign.length; i++) {
        headerNavLign[i].classList.toggle("headerNavLignMax");
    }
    for (let j = 0; j < navItem.length; j++) {
        navItem[j].classList.toggle("navItemApparition");
    }
});
