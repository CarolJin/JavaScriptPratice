/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

- No need to hold the button for a winner.
- Shouldn't let the players keep rolling the dice after the winner has been declared.
- New game should take an input from the user:
-- What is the winning score.
-- Which player is the active one.
*/

var activePlayerId =0;
var scores = [0,0];
var btnRoll = document.querySelector('.btn-roll');
var btnHold = document.querySelector('.btn-hold');
/*let x = document.querySelectorAll('.player-current-label');
for (let i of x) {
    x[i].style.visibility = 'hidden';
}*/

function newGame() {
    alert("The game will be reset.");
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent= '0';
    document.getElementById('score-0').textContent= '0';
    document.getElementById('score-1').textContent= '0';
    document.querySelector('.dice').setAttribute('src', 'images/back.jpg');
    if(document.querySelector('.winner')){
        document.querySelector('.player-' + activePlayerId + '-panel.active').classList.remove('winner');
    }
    enableBtn(btnRoll);
}

function rollDice() {
    let dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 1) {
        alert("Sorry, you rolled a 1. we are gonna switch to another player..");
        switchPlayer();
    } else {
        let roundScore = Number(document.querySelector('#current-' + activePlayerId).textContent);
        roundScore += dice;
        document.querySelector('#current-' + activePlayerId).textContent = roundScore;
        let activePlayerGlobalScore=Number(document.querySelector('#score-'+activePlayerId).textContent);
        let currentPlayerName = document.querySelector('#name-'+activePlayerId).textContent;
        if ((activePlayerGlobalScore + roundScore) >= 100) {
            disableBtn(btnRoll);
            let r = confirm("Winner is Player" + currentPlayerName +", and the winner's score is "+ (activePlayerGlobalScore + roundScore)+ ". Start an new game?");
            if (r === true) {
                  newGame();
            } else {
                document.querySelector('.player-' + activePlayerId + '-panel.active').classList.add('winner');
                activePlayerGlobalScore+=roundScore;
                document.querySelector('#score-'+activePlayerId).textContent= activePlayerGlobalScore;
                document.querySelector('#current-' + activePlayerId).textContent = '0';
                disableBtn(btnHold);
            }
        }else {
            switch (dice) {
                case 2:
                    document.querySelector('.dice').setAttribute('src', 'images/dice-2.png');
                    break;
                case 3:
                    document.querySelector('.dice').setAttribute('src', 'images/dice-3.png');
                    break;
                case 4:
                    document.querySelector('.dice').setAttribute('src', 'images/dice-4.png');
                    break;
                case 5:
                    document.querySelector('.dice').setAttribute('src', 'images/dice-5.png');
                    break;
                case 6:
                    document.querySelector('.dice').setAttribute('src', 'images/dice-6.png');
            }
            enableBtn(btnHold);
            enableBtn(btnRoll);
        }
    }
}

function switchPlayer() {
    document.querySelector('.player-' + activePlayerId + '-panel').classList.remove('active');
    document.querySelector('.player-' + activePlayerId + '-panel .player-current-label').style.visibility = 'hidden';
    activePlayerId ===0 ? activePlayerId = 1 : activePlayerId = 0;
    document.querySelector('.player-' + activePlayerId + '-panel').classList.add('active');
    document.querySelector('.player-' + activePlayerId + '-panel .player-current-label').style.visibility = 'visible';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.dice').setAttribute('src', 'images/back.jpg');
}
function hold() {
    let roundScore = Number(document.querySelector('#current-' + activePlayerId).textContent);
    scores[activePlayerId] = Number(document.querySelector('#score-'+activePlayerId).textContent);
    scores[activePlayerId] += roundScore;
    document.querySelector('#score-' + activePlayerId).textContent = scores[activePlayerId];
    switchPlayer();
}

function disableBtn(btn) {
    btn.disabled = true;
}

function enableBtn(btn) {
    btn.disabled = false;
}



