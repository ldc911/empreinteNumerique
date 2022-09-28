const headerNav = document.querySelector("#headerNav");
const headerNavLign = document.querySelectorAll(".headerNavLign");

// headerNav.addEventListener('click', function () {
//     for (let i = 0; i < headerNavLign.length; i++) {
//         if (headerNavLign[i].style.width = "3rem") {
//             headerNavLign[i].style.width = "89vh";
//         } else {
//             console.log("hello");
//             headerNavLign[i].style.width = "3rem";
//         }
//     }
// });

headerNav.addEventListener('click', function () {
    for (let i = 0; i < headerNavLign.length; i++) {
        headerNavLign[i].classList.toggle("headerNavLignMax");
    }
});
