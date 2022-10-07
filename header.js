// APPARITION DU MENU AU FORMAT MOBILE
const nav = document.querySelector("#headerNavMobile");
const menu = document.querySelectorAll(".button");
const main = document.querySelector("main");
const close = document.querySelector("#close");
const lien = document.querySelectorAll("li");

//ROTATION MENU MOBILE
menu[0].addEventListener('click', function () {
    menu[0].style.transform = "rotate(360deg)";
    menu[0].style.transition = "all 1s ease";
    main.style.filter = "blur(4px)";
    if (nav.style.display = "none") {
        nav.style.display = "block";
    }
}
);

close.addEventListener('click', function () {
    nav.style.display = "none";
    main.style.filter = "blur(0px)";
    menu[0].style.transform = "rotate(-360deg)";
    menu[0].style.transition = "all 1s ease";
})

for (let i = 0; i < lien.length; i++) {
    lien[i].addEventListener('click', function () {
        nav.style.display = "none";
        main.style.filter = "blur(0px)";
        menu[0].style.transform = "rotate(-360deg)";
        menu[0].style.transition = "all 1s ease";
    })
}
//APPARITION DU MENU AU FORMAT DESKTOP
const headerNavLign = document.querySelectorAll(".headerNavLign");
const ligns = document.querySelector("#ligns");
const navItem = document.querySelectorAll(".navItem");
const liens = document.querySelectorAll('a');
const navButtonDesk = document.querySelector("#navButtonDesk");



menu[1].addEventListener('click', function () {
    for (let i = 0; i < headerNavLign.length; i++) {
        headerNavLign[i].classList.toggle("headerNavLignMax");
    }
    for (let j = 0; j < navItem.length; j++) {
        navItem[j].classList.toggle("navItemApparition");
    }
    for (let k = 0; k < liens.length; k++) {
        liens[k].style.display = "inline-block";
    }
    menu[1].style.transform = "rotate(360deg)";
    menu[1].style.transition = "all 1s ease";
});

navButtonDesk.addEventListener('scroll', function () {
    menu[1].style.transform = "rotate(-360deg)";
    menu[1].style.transition = "all 1s ease";
});
