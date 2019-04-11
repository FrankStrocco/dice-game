
var scores, roundScore, activePlayer, gameScore;
gameScore = 25;
init();

var tempScore = 0;

function rollDice() {
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var die1Dom = document.querySelector('.die1');
    var die2Dom = document.querySelector('.die2');
    var dice = die1 + die2;
    die1Dom.style.display = 'block';
    die2Dom.style.display = 'block';

    die1Dom.src = 'images/dice-' + die1 + '.png';
    die2Dom.src = 'images/dice-' + die2 + '.png';

    // update roundScore if not 1
    if (die1 > 1 && die2 > 1 ) {
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
        document.querySelector('.die1').style.display = 'none';
        document.querySelector('.die2').style.display = 'none';
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
    document.querySelector(".die1").style.display = "none";
    document.querySelector(".die2").style.display = "none";
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
