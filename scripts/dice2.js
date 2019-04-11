
var scores, roundScore, activePlayer, gameScore;
gameScore = 25;
init();

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
        clearAndSwitch();
    }
}

document.querySelector('.btn-roll').addEventListener('click', rollDice);
// hold button
document.querySelector('.btn-hold').addEventListener('click', hold);

function hold() {
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    isWinner(activePlayer);
}

function isWinner() {
    if (scores[activePlayer] >= gameScore) {
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')
        document.querySelector('.btn-hold').style.display = 'none'
        document.querySelector('.btn-roll').style.display = 'none'
    } else {
        clearAndSwitch();
    }
}

//new game button

document.querySelector('.btn-new').addEventListener('click', function() {
    init();
})

function clearAndSwitch() {
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

}
function init() {
    // location.reload();
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector(".dice").style.display = "none";
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');

    document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';

}
