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
    createDiv.classList.add(`card-img-${position}`);
    createDiv.style.backgroundImage = `url('${imageUrl}')`;
    divExpressionOrale.appendChild(createDiv);
    
    }
    
    for (let i = 0; i < arthurExpression.length; i++){
    createExpression(arthurExpression[i].image, arthurExpression[i].position);
    const cardPosition = document.querySelectorAll(".card-img");
    }

    const cardImage0 = document.querySelector(".card-img-0");
    const cardImage1 = document.querySelector(".card-img-1");
    const cardImage2 = document.querySelector(".card-img-2");
    const cardImage3 = document.querySelector(".card-img-3");
    const cardImage4 = document.querySelector(".card-img-4");
    const cardImage5 = document.querySelector(".card-img-5");
    const cardImage6 = document.querySelector(".card-img-6");

    cardImage0.addEventListener("click", function(){
        let text= "En vrai je kiff le concept mais je claque un peu du...."
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    });

    cardImage1.addEventListener("click", function(){
        let text= "T'es même pas un titre Freres"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    });

    cardImage2.addEventListener("click", function(){
        let text= "champs mais "
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    });

    cardImage3.addEventListener("click", function(){
        let text= "c'est pas comme ça qu'esse qu'on fait"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    });
    cardImage4.addEventListener("click", function(){
        let text= "BOUM galipette regarde ce que je sais faire"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    });
    cardImage5.addEventListener("click", function(){
        let text= "Tu lui compresse sa race "
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    });
    cardImage6.addEventListener("click", function(){
        let text= "canard en plastique a votre service"
        let speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    });

