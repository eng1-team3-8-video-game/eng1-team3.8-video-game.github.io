import texts from "./data.json";

function getRandomInt(min:number, max:number){
    return Math.floor(Math.random() * (max-min)) + min
}

function randomTitle(){
    let arrayNum:number = getRandomInt(0, texts.texts.length);
    console.log("This will execute now");
    document.title = texts.texts[arrayNum];    
}


console.log("aaaaaaaaaaaaaaa");
document.addEventListener('DOMContentLoaded', randomTitle);

