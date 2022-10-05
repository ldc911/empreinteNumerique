
const arthurExpression = [
    {
    position : 0,
    expression : "En vrai je kiff le concept mais je claque un peu du....",
    image : "css/arthurPictures/78815489.jpeg",
    },
    {
    position : 1,
    expression : "Chanmé !",
    image : "css/arthurPictures/6_avril_2012.jpg",
    },
    {
    position : 2,
    expression : "T'es même pas un titre Freres",
    image : "css/arthurPictures/10_novembre_2016.jpg",
    },
    {
    position : 3,
    expression :"c'est pas comme ça qu'es-ce qu'on fait",
    image : "css/arthurPictures/29665294_10215624980763298_6827110433444467909_o.jpg",
    },
    {
    position : 4, 
    expression : "BOUM galipette regarde ce que je sais faire",
    image : "css/arthurPictures/Arthur_Amuseon.jpg",
    },
    {
    position : 5,
    expression :"Tu lui compresse sa race",
    image : "css/arthurPictures/im5.png",
    },
    {
    position : 6,
    expression : "canard en plastique a votre service",
    image : "css/arthurPictures/im12.png",
    },
];

const divExpressionOrale = document.querySelector(".expressionOrale")

function createExpression(imageUrl) {

const createDiv = document.createElement("img");
createDiv.classList.add("card-img");
createDiv.style.backgroundImage = `url('${imageUrl}')`;
divExpressionOrale.appendChild(createDiv);
}


for (let i = 0; i <= arthurExpression.length; i++){
createExpression(arthurExpression[i].image);
}
