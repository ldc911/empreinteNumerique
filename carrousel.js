document.body.onload = function () {
    allPicturesCarrousel = 17;
    startPicturesCarrousel = 0; // function for number pictures in carousel start 0 

    container = document.getElementById("carrouselContainer");
    boutonCarrouselLeft = document.getElementById("boutonCarrouselLeft");
    boutonCarrouselRight = document.getElementById("boutonCarrouselRight");
    container.style.width = (800 * allPicturesCarrousel) + "px";

    for (i = 1; i <= allPicturesCarrousel; i++) { // boucle for call all im .. .png in my doc
        div = document.createElement("div");
        div.className = ("arthurPicturesCarrousel");
        div.style.backgroundImage = "url('css/arthurPictures/im" + i + ".png')";
        container.appendChild(div);


        boutonCarrouselRight.onclick = function () { // function click in the buton right
            if (startPicturesCarrousel > - allPicturesCarrousel + 1)
                startPicturesCarrousel--;
            container.style.transform = "translate(" + startPicturesCarrousel * 800 + "px)";
            container.style.transition = "all 0.5s ease";
            hiddenBouton();
        }

        boutonCarrouselLeft.onclick = function () { // function click in the buton left
            if (startPicturesCarrousel < 0)
                startPicturesCarrousel++;
            container.style.transform = "translate(" + startPicturesCarrousel * 800 + "px)";
            container.style.transition = "all 0.5s ease";
            hiddenBouton();
        }

        function hiddenBouton() { // function callback for hidden bouton in the start and end carousel
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
}
