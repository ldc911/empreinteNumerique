// APPARITION DU MENU AU FORMAT MOBILE
const nav = document.querySelector("#headerNavMobile");
const menu = document.querySelector("nav");
nav.addEventListener('click', function () {
    menu.classList.toggle("apparu");
});

//APPARITION DU MENU AU FORMAT DESKTOP
const headerNav = document.querySelector("#headerNavDesk");
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


