// APPARITION DU MENU AU FORMAT MOBILE
const nav = document.querySelector("#headerNavMobile");
const menu = document.querySelectorAll(".button");
const main = document.querySelector("main");
const close = document.querySelector("#close");
const lien = document.querySelectorAll("li");


menu[0].addEventListener('click', function () {
    menu[0].style.transform = "rotate(1turn)";
    menu[0].style.transition = "all 1s ease";
    main.style.filter = "blur(4px)";
    if (nav.style.display = "none") {
        nav.style.display = "block";
    }
}
);

for (let i = 0; i < lien.length; i++) {
    lien[i].addEventListener('click', function () {
        nav.style.display = "none";
        main.style.filter = "blur(0px)";

    })
}

close.addEventListener('click', function () {
    nav.style.display = "none";
    main.style.filter = "blur(0px)";
})

//APPARITION DU MENU AU FORMAT DESKTOP
const headerNavLign = document.querySelectorAll(".headerNavLign");
const ligns = document.querySelector("#ligns");
const navItem = document.querySelectorAll(".navItem");


ligns.addEventListener('click', function () {
    for (let i = 0; i < headerNavLign.length; i++) {
        headerNavLign[i].classList.toggle("headerNavLignMax");
    }
    for (let j = 0; j < navItem.length; j++) {
        navItem[j].classList.toggle("navItemApparition");
    }
});


