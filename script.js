'use strict';

// selecting Elements
const score1E1 = document.getElementById('score--0');
const score2E2 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const currentE1 = document.getElementById('current--0');
const currentE2 = document.getAnimations('current--1');
let currentScore = 0;
let activePlayer = 0;
const scores = [0, 0];

score1E1.textContent = 0;
score2E2.textContent = 0;

diceEl.classList.add('hidden');

// buttons
const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

// manipulating active player style
const playerStyleE1 = document.querySelector('.player--0');
const playerStyleE2 = document.querySelector('.player--1');

let playing = true;
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  playerStyleE1.classList.toggle('player--active');
  playerStyleE2.classList.toggle('player--active');
};

rollDiceBtn.addEventListener('click', () => {
  if (playing) {
    // 1 generate random number
    const rollDice = Math.trunc(Math.random() * 6) + 1;
    // 2 showing the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${rollDice}.png`;

    // 3 checking numbers is not zero
    if (rollDice !== 1) {
      // Add dice to current score
      currentScore += rollDice;
      // currentE1.textContent = currentScore1;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }

    // if number is 1 then chnaging the player
    else {
      // switch the player
      switchPlayer();
    }
  }
});

// holding the score
holdBtn.addEventListener('click', () => {
  if (playing) {
    // 1 Add current score to active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // player win the game
    if (scores[activePlayer] >= 20) {
      playing = false;
      console.log('paying condition', playing);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});
