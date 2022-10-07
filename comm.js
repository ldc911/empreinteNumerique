//on va chercher toutes les étoiles
const stars = document.querySelectorAll(".emptyStar");
//stars.style.color= "lightgray";
//on va chercher la note, l'input
const note = document.querySelector("#note");
//preparation du body blurr


//on boucle sur les étoies pour ajouter un event listener
for (star of stars) {
    //écoute du survol
    star.addEventListener("mouseover", function () {
        resetStars();
        this.classList.add("fullStar");
        this.classList.remove("emptyStar");

        //elem précédent dans le dom de même niveau ou balise soeur
        let previousStar = this.previousElementSibling;

        while (previousStar) {//tant qu'il y a une étoile précédente
            //permutation des classes étoile pleine/étoile vide
            previousStar.classList.add("fullStar");
            previousStar.classList.remove("emptyStar");
            //on récupère létoile qui précède
            previousStar = previousStar.previousElementSibling;
        }

    });

    //event listener sur le clic
    star.addEventListener("click", function () {
        note.value = this.dataset.value;
    });

    star.addEventListener("mouseout", function () {
        resetStars(note.value);
    });
}



function resetStars(note = 0) {
    for (star of stars) {
        if (star.dataset.value > note) {
            star.classList.add("emptyStar");
            star.classList.remove("fullStar");
        } else {
            star.classList.add("fullStar");
            star.classList.remove("emptyStar");
        }

    }
}

function resetChamps() {
    userName.value = "";
    formTitle.value = "";
    userComment.value = "";
    userMail.value = "";
    note.value = 0;
}

//on récupère les éléments du form
const commentBoxes = document.querySelector(".commentBoxes");
const userName = document.getElementById("formName");
const formTitle = document.getElementById("formTitle")
const formButton = document.querySelector(".formButton");
const userMail = document.getElementById("formMail");
const userComment = document.getElementById("commentaire");

//fonction de création de bloc comm

function createCommentBox(title, note, content, nom, mail) {
    const commentBox = document.createElement("div");
    commentBox.classList.add("commentBox");
    commentBoxes.appendChild(commentBox);

    const commentHeader = document.createElement("div");
    commentHeader.classList.add("commentBoxHeader");
    commentBox.appendChild(commentHeader);

    const commentHeaderContentA = document.createElement("div");
    commentHeaderContentA.classList.add("commentBoxHeaderContent");
    commentHeaderContentA.textContent = title;
    commentHeader.appendChild(commentHeaderContentA);

    const commentHeaderContentB = document.createElement("div");
    commentHeaderContentB.classList.add("commentBoxHeaderContent");
    commentHeaderContentB.textContent = `${note}/5`;
    commentHeader.appendChild(commentHeaderContentB);

    const commentBoxContent = document.createElement("div");
    commentBoxContent.classList.add("commentBoxContent");
    commentBoxContent.textContent = content;
    commentBox.appendChild(commentBoxContent);

    const commentBoxFooter = document.createElement("div");
    commentBoxFooter.classList.add("commentBoxFooter");
    commentBox.appendChild(commentBoxFooter);

    const footerContentA = document.createElement("div");
    footerContentA.textContent = nom;
    commentBoxFooter.appendChild(footerContentA);
}

//fonctions d'ouverture et de fermeture de popup validation formulaire
function popUp() {
    const popUp = document.querySelector("#pop")
    popUp.classList.add("popOut");
    popUp.classList.remove("popIn");
}
function popOut() {
    const popUp = document.querySelector("#pop")
    popUp.classList.add("popIn");
    popUp.classList.remove("popOut");
}

//fonctions d'ouverture et de fermeture de liste de capture des emails
function popListUp() {
    const listOut = document.querySelector("#dataList");
    listOut.classList.add("popMail");
    listOut.classList.remove("popIn");
}

function popListOut() {
    const listOut = document.querySelector("#dataList");
    listOut.classList.add("popIn");
    listOut.classList.remove("popMail");
}

//déclenchement au submit de la création du bloc comm
const userForm = document.querySelector(".formContainers").addEventListener("submit", function (event) {
    event.preventDefault();
    const userNameA = userName.value;

    const formTitleA = formTitle.value;

    const userMailA = userMail.value;

    const noteA = note.value;

    const userCommentA = userComment.value;

    createCommentBox(formTitleA, noteA, userCommentA, userNameA, userMailA);
    createMailList(userMailA, userNameA);
    resetStars();
    resetChamps();
    popUp();
})

//déclenchement de la fermeture de la popup validation
const closeButton = document.querySelector(".closeButton").addEventListener("click", function (event) {
    event.preventDefault();
    popOut();
})

//fonction d'ajout dans la liste de capture des emails
const mailList = document.querySelector("#mailList");
function createMailList(mail, name) {
    const liMailList = document.createElement("li");
    liMailList.classList.add("mailList");
    liMailList.textContent = `${name} : ${mail}`;
    mailList.appendChild(liMailList);
}

//fonction d'affichage de la popup de capture d'email
const dataButton = document.querySelector("#dataButton").addEventListener("click", function (event) {
    event.preventDefault();
    popListUp();
})

const closeMailList = document.querySelector("#closeMailList").addEventListener("click", function (event) {
    event.preventDefault();
    popListOut();
})
