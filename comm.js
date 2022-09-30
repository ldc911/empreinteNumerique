//on va chercher toutes les étoiles
const stars = document.querySelectorAll(".emptyStar");
//stars.style.color= "lightgray";
//on va chercher la note, l'input
const note = document.querySelector("#note");

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

function resetChamps(){
    userName.value = "";
    formTitle.value="";
    userComment.value = "";
    userMail.value = "";
    note.value=0;
}

//on récupère les éléments du form
const commentBoxes = document.querySelector(".commentBoxes");
const userName = document.getElementById("formName");
const formTitle = document.getElementById("formTitle")
const formButton = document.querySelector(".formButton");
const userMail = document.getElementById("formMail");
const userComment = document.getElementById("commentaire");

function createCommentBox(title, note, content, nom, mail) {
    const commentBox = document.createElement("div");
    commentBox.classList.add("commentBox");
    commentBoxes.appendChild(commentBox);

    const commentHeader = document.createElement("div");
    commentHeader.classList.add("commentBoxHeader");
    commentBox.appendChild(commentHeader);

    const commentHeaderContentA = document.createElement("div");
    commentHeaderContentA.classList.add("commentBoxHeaderContent");
    commentHeaderContentA.innerHTML = title;
    commentHeader.appendChild(commentHeaderContentA);

    const commentHeaderContentB = document.createElement("div");
    commentHeaderContentB.classList.add("commentBoxHeaderContent");
    commentHeaderContentB.innerHTML = `${note}/5`;
    commentHeader.appendChild(commentHeaderContentB);

    const commentBoxContent = document.createElement("div");
    commentBoxContent.classList.add("commentBoxContent");
    commentBoxContent.innerHTML = content;
    commentBox.appendChild(commentBoxContent);

    const commentBoxFooter = document.createElement("div");
    commentBoxFooter.classList.add("commentBoxFooter");
    commentBox.appendChild(commentBoxFooter);

    const footerContentA = document.createElement("div");
    footerContentA.innerHTML = nom;
    commentBoxFooter.appendChild(footerContentA);

    // const footerContentB = document.createElement("div");
    // footerContentB.innerHTML = mail;
    // section de desitnation.appendChild(footerContentB);
}

const userForm = document.querySelector(".formContainers").addEventListener("submit", function (event) {
    event.preventDefault();
    const userNameA = userName.value;

    const formTitleA = formTitle.value;

    const userMailA = userMail.value;

    const noteA = note.value;

    const userCommentA = userComment.value;

    createCommentBox(formTitleA, noteA, userCommentA, userNameA, userMailA);
    resetStars();
    resetChamps();
    //add la function pour implémenter le mail dans la liste à afficher
})