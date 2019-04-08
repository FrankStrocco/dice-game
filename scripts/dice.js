/*
-game has two players, they play in rounds
-each turn the actice player can roll as many times as they want
-current score keeps going up untill they hit hold. or lose it all if it hits 1 and switches players
-if they hit hold, it adds current score to total and swithes players

-keep track of : scores(global and round(current)), active player, dice

*/

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;



// console.log(dice);
// hide dice initially

document.querySelector(".dice").style.display = "none";

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

var tempScore = 0;
function rollDice() {
    var dice = Math.ceil(Math.random() * 6);

    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'images/dice-' + dice + '.png';

    // update roundScore if not 1
    if (dice != 1) {
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        roundScore = 0;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
        activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
    }

}

document.querySelector('.btn-roll').addEventListener('click', rollDice);
