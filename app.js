// variable of wich player, player one is 0, player 2 is 1.
var activePlayer = 1;
// variable of player point
var score = [0, 0 ];
// point of one section
var roundScore = 0; 
// dice of wich point 1-6 point
var dice = Math.floor(Math.random() * 6) + 1;

// dic score0
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;
window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
// document.querySelector("#score-1").innerHTML = "<em> Yes<em>";

console.log("Dice: " + dice);
