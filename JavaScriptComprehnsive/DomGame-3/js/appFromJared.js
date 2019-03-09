/*
GAME RULES:
- The game has 2 players, playing in rounds.
- In each turn a player rolls a di as many times as he wishes. Each result gets added to his ROUND score.
- If the player rolls a 1 his ROUND score gets lost. After that it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that it's the next player's turn.
- The first player to reach maxScore points on GLOBAL score wins the game.
*/

let scores, roundScore, maxScore, activePlayer;

function init() {
    // Ask the user what the winning score should be
    let maxScoreInput = null;
    while(maxScoreInput === null || isNaN(Number(maxScoreInput)) || Number(maxScoreInput) <= 0 || Number(maxScoreInput) > 1000) {
        // TODO: Give the user feedback when the input was invalid
        maxScoreInput = prompt('What score should be required to win the game?  (Enter a number between 1 and 1000)', '20');
    }

    // Ask the user which player should start the game
    let activePlayerInput = null;
    while(activePlayerInput === null || (activePlayerInput !== '1' && activePlayerInput !== '2')) {
        // TODO: Give the user feedback when the input was invalid
        activePlayerInput = prompt('Which player should start the game?  (Enter "1" or "2")', '1');
    }

    // Set global variables to initial values
    // Since only one player is active at any given time, only one round score is needed
    scores = [0, 0];
    roundScore = 0;
    maxScore = Number(maxScoreInput);
    activePlayer = Number(activePlayerInput) - 1;

    // Reset the player names
    document.querySelector(`#name-0`).textContent = 'Player 1';
    document.querySelector(`#name-1`).textContent = 'Player 2';

    // Reset the total score for each player
    document.querySelector(`#score-0`).textContent = '0';
    document.querySelector(`#score-1`).textContent = '0';

    // Reset the round score for each player
    document.querySelector(`#current-0`).textContent = '0';
    document.querySelector(`#current-1`).textContent = '0';

    // Hide the di image (since no one has rolled yet)
    document.querySelector(`.dice`).style.display = 'none';

    // Show the 'ROLL DICE' and 'HOLD' buttons
    document.querySelector(`.btn-roll`).style.display = 'block';
    document.querySelector(`.btn-hold`).style.display = 'block';

    // Set both players as non-active and not the winner
    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('winner');

    // Set the chosen player as the active player
    document.querySelector(`.player-${activePlayer}-panel`).classList.add('active');
}

function markWinner() {
    // Change the name for the active player to WINNER
    document.querySelector(`#name-${activePlayer}`).textContent = 'WINNER!';

    // Set the active player to non-active and mark the player as a winner
    document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
    document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');

    // Hide the di image and the 'ROLL DICE' and 'HOLD' buttons since the game is complete
    document.querySelector(`.dice`).style.display = 'none';
    document.querySelector(`.btn-roll`).style.display = 'none';
    document.querySelector(`.btn-hold`).style.display = 'none';
}

function selectNextPlayer() {
    // Toggle the active player and reset the round score
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    // Toggle the active player
    document.querySelector(`.player-0-panel`).classList.toggle('active');
    document.querySelector(`.player-1-panel`).classList.toggle('active');

    // Reset the round score for each player
    document.querySelector(`#current-0`).textContent = '0';
    document.querySelector(`#current-1`).textContent = '0';

    // Hide the di image (since no one has rolled yet)
    document.querySelector(`.dice`).style.display = 'none';
}

// Initialize the game
init();

// When the user clicks the 'NEW GAME' button call the init() function
document.querySelector(`.btn-new`).addEventListener('click', init);

// When the user clicks the 'ROLL DICE' button:
//     - Choose a random number for the di roll between 1 and 6
//     - Display the image for that di roll
//     - If the roll is not 1 add the value to the round score and check if there is a game winner
//     - If the roll is 1 switch to the other player
document.querySelector(`.btn-roll`).addEventListener('click', () => {
    let dice = Math.floor(Math.random() * 6 + 1);
    document.querySelector(`.dice`).src = `images/dice-${dice}.png`;
    document.querySelector(`.dice`).style.display = 'block';

    if(dice !== 1) {
        roundScore += dice;
        document.querySelector(`#current-${activePlayer}`).textContent = +roundScore;  // TODO: Convert to string
        if(roundScore + scores[activePlayer] >= maxScore) {
            markWinner();
        }
    } else {
        selectNextPlayer();
    }
});

// When the user clicks on the 'HOLD' button:
//     - Add the round score to the total score for the player
//     - Finish the game if there is a game winner, otherwise switch to the other player
document.querySelector(`.btn-hold`).addEventListener('click', () => {
    scores[activePlayer] += roundScore;
    document.querySelector(`#score-${activePlayer}`).textContent = +scores[activePlayer];  // TODO: Convert to string
    if(scores[activePlayer] >= maxScore) {
        markWinner();
    } else {
        selectNextPlayer();
    }
});
