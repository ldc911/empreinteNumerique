allPicturesCarrousel = 17;
const carrousel = document.querySelector('#carrousel');

for (i = 1; i <= allPicturesCarrousel; i++) { // boucle for call all im .. .png in my doc
    div = document.createElement("div");
    div.style.backgroundImage = "url('css/arthurPictures/im" + i + ".png')";
    container.appendChild(div);
}