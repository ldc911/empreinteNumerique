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

const nav = document.querySelector("#headerNav");
const menu = document.querySelector("nav");
const main = document.querySelector("main");
nav.addEventListener('click', function () {
    menu.classList.toggle("apparu");
    main.style.filter = "alpha(opacity =60)"
});