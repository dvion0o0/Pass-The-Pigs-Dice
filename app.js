/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer,gamePlaying;

init();

var lastDice;

document.querySelector(".btn-roll").addEventListener("click", function(){

if(gamePlaying){

    var dice1 = Math.floor(Math.random( ) * 6) + 1; // random number generator

    var dice2 = Math.floor(Math.random( ) * 6) + 1; // random number generator

    console.log(dice1, dice2);

// display result in dice

document.getElementById('dice-1').style.display = 'block';

document.getElementById('dice-2').style.display = 'block';

document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';

document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

//  update result

// if(dice === 6 && lastDice === 6){
//     // scores is lost

//     scores[activePlayer] = 0;

//     document.querySelector("#score-" + activePlayer).textContent = "0";

//     nextPlayer();
// }
if(dice1 !== 1 && dice2 !== 1){
    //add score
    roundScore += dice1 + dice2;

    document.querySelector("#current-" + activePlayer).textContent = roundScore;
}else{
    // next player

    nextPlayer();
}

// lastDice = dice;

}

});


document.querySelector(".btn-hold").addEventListener("click", function(){

if(gamePlaying){
    //  update score to main score

    scores[activePlayer] += roundScore;

    // update it to UI
    
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    

    var input = document.querySelector(".final-score").value;
    
    console.log(input);

    var winningScore;

    if(input){
        winningScore = input;
    }else{
        winningScore = 100;
    }
    // check winner
    
    if(scores[activePlayer]  >= winningScore){
        document.querySelector("#name-" + activePlayer).textContent = "Winner!";

         document.getElementById('dice-1').style.display = 'none';

        document.getElementById('dice-2').style.display = 'none';
    
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    
        gamePlaying = false;
    
    }else{
        nextPlayer();
    }
}

});


document.querySelector(".btn-new").addEventListener("click", init);



function init(){

gamePlaying = true;

 scores = [0, 0];

activePlayer = 0;

roundScore = 0;

document.querySelector("#score-0").textContent = "0";

document.querySelector("#score-1").textContent = "0";

document.querySelector("#current-0").textContent = "0";

document.querySelector("#current-1").textContent = "0";

document.getElementById('dice-1').style.display = 'none';

document.getElementById('dice-2').style.display = 'none';

document.querySelector("#name-0").textContent = "Player-1";

document.querySelector("#name-1").textContent = "Player-2";

document.querySelector(".player-0-panel").classList.remove("winner");

document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.remove("active");

document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");
}




function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1
    }else{
        activePlayer = 0;
    }
  
  roundScore = 0;
  
  document.querySelector("#current-0").textContent = "0";
  
  document.querySelector("#current-1").textContent = "0";
  
  document.querySelector(".player-0-panel").classList.toggle("active");
  
  document.querySelector(".player-1-panel").classList.toggle("active");
  
  document.getElementById('dice-1').style.display = 'none';

  document.getElementById('dice-2').style.display = 'none';

}