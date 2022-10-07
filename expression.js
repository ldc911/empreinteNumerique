const arthurExpression = [
        {
        position : 0,
        image : "css/calquesArthur/Sanstitre.png",
        },
        {
        position : 1,
        image : "css/calquesArthur/Sanstitre2.png",
        },
        {
        position : 2,
        image : "css/calquesArthur/Sanstitre3.png",
        },
        {
        position : 3,
        image : "css/calquesArthur/Sanstitre4.png",
        },
        {
        position : 4, 
        image : "css/calquesArthur/Sanstitre5.png",
        },
        {
        position : 5,
        image : "css/calquesArthur/Sanstitre6.png",
        },
        {
        position : 6,
        image : "css/calquesArthur/Sanstitre7.png",
        },
        {
            position : 7,
            image : "css/calquesArthur/Sans titre8.png",
        },
        {
            position : 8,
            image : "css/calquesArthur/Sans titre9.png",
        },
    ];
    
    const divExpressionOrale = document.querySelector(".expressionOrale")
    
    function createExpression(imageUrl, position) {
    
    const createDiv = document.createElement("div");
    createDiv.classList.add(`expressionOraleImage${position}`);
    createDiv.style.backgroundImage = `url('${imageUrl}')`;
    divExpressionOrale.appendChild(createDiv);
    
    }
    
    for (let i = 0; i < arthurExpression.length; i++){
    createExpression(arthurExpression[i].image, arthurExpression[i].position);
    const cardPosition = document.querySelectorAll(".card-img");
    }

    const cardImage0 = document.querySelector(".expressionOraleImage0");
    const cardImage1 = document.querySelector(".expressionOraleImage1");
    const cardImage2 = document.querySelector(".expressionOraleImage2");
    const cardImage3 = document.querySelector(".expressionOraleImage3");
    const cardImage4 = document.querySelector(".expressionOraleImage4");
    const cardImage5 = document.querySelector(".expressionOraleImage5");
    const cardImage6 = document.querySelector(".expressionOraleImage6");
    const cardImage7 = document.querySelector(".expressionOraleImage7");
    const cardImage8 = document.querySelector(".expressionOraleImage8");

    let expressionRotateReset = 0;

    cardImage0.addEventListener("click", function(){
        expressionRotateReset = expressionRotateReset + 360;
        let text= "En vrai je kiff le concept mais je claque un peu du...."
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage0.style.transform = `rotate(${expressionRotateReset}deg)`;
        cardImage0.style.transition  = "all 1s ease"
    });


    cardImage1.addEventListener("click", function(){
        expressionRotateReset = expressionRotateReset + 360;
        let text= "T'es même pas un titre Freres"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage1.style.transform = `rotate(${expressionRotateReset}deg)`;
        cardImage1.style.transition  = "all 1s ease";
    });


    cardImage2.addEventListener("click", function(){
        expressionRotateReset = expressionRotateReset + 360;
        let text= "champs mais "
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage2.style.transform = `rotate(${expressionRotateReset}deg)`;
        cardImage2.style.transition  = "all 1s ease";
    });


    cardImage3.addEventListener("click", function(){
        expressionRotateReset = expressionRotateReset + 360;
        let text= "c'est pas comme ça qu'esse qu'on fait"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage3.style.transform = `rotate(${expressionRotateReset}deg)`;
        cardImage3.style.transition  = "all 1s ease";
    });

    cardImage4.addEventListener("click", function(){
        expressionRotateReset = expressionRotateReset + 360;
        let text= "BOUM galipette regarde ce que je sais faire"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage4.style.transform = `rotate(${expressionRotateReset}deg)`;
        cardImage4.style.transition  = "all 1s ease";
    });


    cardImage5.addEventListener("click", function(){
        expressionRotateReset = expressionRotateReset + 360;
        let text= "Tu lui compresse sa race "
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage5.style.transform = `rotate(${expressionRotateReset}deg)`;
        cardImage5.style.transition  = "all 1s ease";
    });


    cardImage6.addEventListener("click", function(){
        expressionRotateReset = expressionRotateReset + 360;
        let text= "canard en plastique a votre service"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage6.style.transform = `rotate(${expressionRotateReset}deg)`;
        cardImage6.style.transition  = "all 1s ease";
    });


    cardImage7.addEventListener("click", function(){
        expressionRotateReset = expressionRotateReset + 360;
        let text= "Un peu de silence siouplé"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage7.style.transform = `rotate(${expressionRotateReset}deg)`;
        cardImage7.style.transition  = "all 1s ease";
    });


    cardImage8.addEventListener("click", function(){
        expressionRotateReset = expressionRotateReset + 360;
        let text= "c'est tcho  rien a faire"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage8.style.transform = `rotate(${expressionRotateReset}deg)`;
        cardImage8.style.transition  = "all 1s ease";
    });


