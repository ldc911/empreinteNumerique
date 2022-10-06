const arthurExpression = [
        {
        position : 0,
        image : "css/calquesArthur/arthurCalque9.retraité.png",
        },
        {
        position : 1,
        image : "css/calquesArthur/calqueArthur3.retraité.png",
        },
        {
        position : 2,
        image : "css/calquesArthur/arthurCalque2.png",
        },
        {
        position : 3,
        image : "css/calquesArthur/arthurCalque4.retraité.png",
        },
        {
        position : 4, 
        image : "css/calquesArthur/arthurCalque5.retraité.png",
        },
        {
        position : 5,
        image : "css/calquesArthur/arthurCalque6Retraité.png",
        },
        {
        position : 6,
        image : "css/calquesArthur/arhurCalque10.retraité.png",
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

    cardImage0.addEventListener("click", function(){
        let text= "En vrai je kiff le concept mais je claque un peu du...."
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage0.style.transform = "rotate(360deg)"
        cardImage0.style.transition  = "all 1s ease"
    });

    cardImage1.addEventListener("click", function(){
        let text= "T'es même pas un titre Freres"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage1.style.transform = "rotate(360deg)"
        cardImage1.style.transition  = "all 1s ease"
    });

    cardImage2.addEventListener("click", function(){
        let text= "champs mais "
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage2.style.transform = "rotate(360deg)"
        cardImage2.style.transition  = "all 1s ease"
    });

    cardImage3.addEventListener("click", function(){
        let text= "c'est pas comme ça qu'esse qu'on fait"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage3.style.transform = "rotate(360deg)"
        cardImage3.style.transition  = "all 1s ease"
    });
    cardImage4.addEventListener("click", function(){
        let text= "BOUM galipette regarde ce que je sais faire"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage4.style.transform = "rotate(360deg)"
        cardImage4.style.transition  = "all 1s ease"
    });
    cardImage5.addEventListener("click", function(){
        let text= "Tu lui compresse sa race "
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage5.style.transform = "rotate(360deg)"
        cardImage5.style.transition  = "all 1s ease"
    });
    cardImage6.addEventListener("click", function(){
        let text= "canard en plastique a votre service"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
        cardImage6.style.transform = "rotate(360deg)"
        cardImage6.style.transition  = "all 1s ease"
    });

