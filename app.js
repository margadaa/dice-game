var activePlayer = 0;
var diceDom = document.querySelector(".dice");

// шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function(){
var diceNumber = Math.floor(Math.random()*6)+1;
    // mining of number 1 to 6
    diceDom.style.display = "block";

    // show pictur of dice number on WEB
    diceDom.src = "dice-" + diceNumber + ".png";
    // change of score 
    if(diceNumber !== 1 ){
        // different of 1
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }else{
        // change player
      switchToNextPlayer();
    }
});
// Hold event
document.querySelector(".btn-hold").addEventListener("click", function(){
    // all total send to up point
    scores[activePlayer] =scores[activePlayer] + roundScore;
    //CHECK WINNER
    if(scores[activePlayer] >=20){
        // show winner to name
       document.getElementById("name-" + activePlayer).textContent = "WINNER!!!"; 
       document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
       document.querySelector(".player-" + activePlayer + "-panel").classList.remove("activ");
    } else {
    document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
    // user point to zero
       // change player
    switchToNextPlayer();}
});
function switchToNextPlayer(){
     // change player
     roundScore = 0;
     document.getElementById("current-" + activePlayer).textContent =0;
     //if active player one change to active player zero
     activePlayer === 0 ?(activePlayer = 1):(activePlayer = 0 );
     //change red point
     document.querySelector(".player-0-panel").classList.toggle("active");
     document.querySelector(".player-1-panel").classList.toggle("active");
     // hide dice
     diceDom.style.display = "none";
}
// new game 
document.querySelector(".btn-new").addEventListener("click", function(){
    initGame();
})
function initGame(){
    // variable of wich player, player one is 0, player 2 is 1.

// variable of player point
var scores = [0, 0 ];
// point of one section
var roundScore = 0; 
// dice of wich point 1-6 point
var diceNumber = Math.floor(Math.random() * 6) + 1;
// dic score0
document.getElementById("score-0").textContent = "0"; 
window.document.getElementById("score-1").textContent = "0";
window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";
diceDom.style.display = "none";
}