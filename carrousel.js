document.body.onload = function () {
    allPicturesCarrousel = 12;
    startPicturesCarrousel = 0; // fonction pour nombre de photos dans le carrousel et départ à zéro

    container = document.getElementById("carrouselContainer");
    boutonCarrouselLeft = document.getElementById("boutonCarrouselLeft");
    boutonCarrouselRight = document.getElementById("boutonCarrouselRight");
    container.style.width = (100 * allPicturesCarrousel) + "%";

    for (i = 1; i <= allPicturesCarrousel; i++) { // boucle pour récupérer toutes les photos im(chiffre).png du dossier
        div = document.createElement("div");
        div.className = ("arthurPicturesCarrousel"); div.style.backgroundImage = "url('css/arthurPictures/im" + i + ".png')";
        container.appendChild(div);
    }

    boutonCarrouselLeft.onclick = function () {// fonction quand on click sur le bouton de gauche
        if (startPicturesCarrousel > - allPicturesCarrousel + 1)
            startPicturesCarrousel--;
        container.style.transform = "translate(" + startPicturesCarrousel * 800 + "px)";
        container.style.transition = "all 0.5s ease";
        hiddenBouton();
    }

    boutonCarrouselRight.onclick = function () { // fonction quand on click sur le bouton de droite
        if (startPicturesCarrousel < 0) startPicturesCarrousel++; container.style.transform = "translate(" +
            startPicturesCarrousel * 800 + "px)"; container.style.transition = "all 0.5s ease"; hiddenBouton();
    }

    function hiddenBouton() { //fonction pour que le bouton se supprime quand on a fini de voir toutes les photos du carrousel
        if (startPicturesCarrousel == - allPicturesCarrousel + 1)
            boutonCarrouselLeft.style.visibility = "hidden"; else boutonCarrouselLeft.style.visibility = "visible"; if
            (startPicturesCarrousel == 0) boutonCarrouselRight.style.visibility = "hidden"; else
            boutonCarrouselRight.style.visibility = "visible";
    }
} 