let pictures = [1, 2, 3, 6, 13, 17];
const galerie = document.querySelector('#bodyGalerie');

function apparition() {
    for (i = 1; i < pictures.length; i++) {
        index = pictures[i];
        const createDiv = document.createElement("div");
        const createImg = document.createElement("img");
        createImg.src = `css/arthurPictures/im${index}.png`;
        createDiv.appendChild(createImg);
        createDiv.classList.add('galerie');
        galerie.appendChild(createDiv);
    }
}
apparition();