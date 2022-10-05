document.body.onload = function () {
    allPicturesCarrousel = 17;
    startPicturesCarrousel = 0; // fonction pour nombre de photos dans le carrousel et départ à zéro

    container = document.getElementById("carrouselContainer");
    boutonCarrouselLeft = document.getElementById("boutonCarrouselLeft");
    boutonCarrouselRight = document.getElementById("boutonCarrouselRight");
    container.style.width = (800 * allPicturesCarrousel) + "px";

    for (i = 1; i <= allPicturesCarrousel; i++) {
        div = document.createElement("div");
        div.className = ("arthurPicturesCarrousel");
        div.style.backgroundImage = "url('css/arthurPictures/im" + i + ".png')";
        container.appendChild(div);
    }
    boutonCarrouselRight.onclick = function () {
        if (startPicturesCarrousel > - allPicturesCarrousel + 1)
            startPicturesCarrousel--;
        container.style.transform = "translate(" + startPicturesCarrousel * 800 + "px)";
        container.style.transition = "all 0.5s ease";
        hiddenBouton();
    }

    boutonCarrouselLeft.onclick = function () {
        if (startPicturesCarrousel < 0)
            startPicturesCarrousel++;
        container.style.transform = "translate(" + startPicturesCarrousel * 800 + "px)";
        container.style.transition = "all 0.5s ease";
        hiddenBouton();
    }

    function hiddenBouton() {
        if (startPicturesCarrousel == - allPicturesCarrousel + 1)
            boutonCarrouselRight.style.visibility = "hidden";

        else
            boutonCarrouselRight.style.visibility = "visible";
        if (startPicturesCarrousel == 0)
            boutonCarrouselLeft.style.visibility = "hidden";
        else
            boutonCarrouselLeft.style.visibility = "visible";
    }
}