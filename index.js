var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imgElement1 = document.querySelectorAll("img")[0];
var imgSrc = "images/dice" + randomNumber1 + ".png";
imgElement1.setAttribute("src", imgSrc);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imgSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", imgSrc2);

var h1Element = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    h1Element.innerHTML = "🚩 Player 1 Wins!"
}else if(randomNumber1 < randomNumber2){
    h1Element.innerHTML = "Player 2 Wins! 🚩"
}else{
    h1Element.innerHTML = "Draw!"
}






// if(randomNumber1 === 1){
//     imgElement1.src = "images/dice1.png";
// }else if(randomNumber1 === 2){
//     imgElement1.src = "images/dice2.png";
// }else if(randomNumber1 === 3){
//     imgElement1.src = "images/dice3.png";
// }else if(randomNumber1 === 4){
//     imgElement1.src = "images/dice4.png";
// }else if(randomNumber1 === 5){
//     imgElement1.src = "images/dice5.png";
// }else {
//     imgElement1.src = "images/dice6.png";
// }

// var randomNumber2 = Math.floor(Math.random() * 6 + 1);
// var imgElement2 = document.querySelectorAll("img")[1];
// if(randomNumber2 === 1){
//     imgElement2.src = "images/dice1.png";
// }else if(randomNumber2 === 2){
//     imgElement2.src = "images/dice2.png";
// }else if(randomNumber2 === 3){
//     imgElement2.src = "images/dice3.png";
// }else if(randomNumber2 === 4){
//     imgElement2.src = "images/dice4.png";
// }else if(randomNumber2 === 5){
//     imgElement2.src = "images/dice5.png";
// }else{
//     imgElement2.src = "images/dice6.png";
// }

// var h1Element = document.querySelector("h1");

// if(randomNumber1 > randomNumber2){
//     h1Element.innerHTML = "Player 1 Wins!"
// }else if(randomNumber1 < randomNumber2){
//     h1Element.innerHTML = "Player 2 Wins!"
// }else{
//     h1Element.innerHTML = "Draw!"
// }

