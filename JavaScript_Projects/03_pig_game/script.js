// Selecting the elements
const rollDiceBtn = document.querySelector(".roll-dice-btn");
const diceImg = document.querySelector(".dice-img");
const player0CurrentScoreEl = document.querySelector("#player-0-current-score");
const player1CurrentScoreEl = document.querySelector("#player-1-current-score");
const player0Container = document.querySelector("#player-0");
const player1Container = document.querySelector("#player-1");
const holdBtn = document.querySelector(".hold-btn");
const player0ScoreEl = document.querySelector("#player-0-score");
const player1ScoreEl = document.querySelector("#player-1-score");
const winnerEl = document.querySelector(".winner");
const newGameBtn = document.querySelector(".new-game-btn");

// Declaration
let randomNumber;
let currentScore0 = 0;
let currentScore1 = 0;
let score = 0;
let player0IsPlaying = true;
let player1IsPlaying = false;
let player0Score = 0;
let player1Score = 0;

//
player0Container.style.backgroundColor = "orange";
player1Container.style.backgroundColor = "grey";

// Keep the Dice Hidden before rolling the dice
diceImg.style.display = "none";

// Function to generate a random number b/t 1-6
function genRandomNum() {
  randomNumber = Math.floor(Math.random() * 6 + 1);
  diceImg.style.display = "block";
  diceImg.src = `/images/dice-${randomNumber}.png`; // change img on dice roll
  return randomNumber;
}

// player 0 current score function
function player0() {
  currentScore0 += randomNumber;
  player0CurrentScoreEl.textContent = currentScore0;
}

// player 1 current score function
function player1() {
  currentScore1 += randomNumber;
  player1CurrentScoreEl.textContent = currentScore1;
}

// Function to Switch players
function switchPlayer() {
  if (player0IsPlaying === true) {
    player1IsPlaying = true;
    player0IsPlaying = false;
    currentScore0 = 0;
    player0CurrentScoreEl.textContent = 0;
    player0Container.style.backgroundColor = "grey";
  } else if (player1IsPlaying === true) {
    player0IsPlaying = true;
    player1IsPlaying = false;
    currentScore1 = 0;
    player1CurrentScoreEl.textContent = 0;
    player1Container.style.backgroundColor = "grey";
  }
}

// Function to hide btns
function hideBtn() {
  rollDiceBtn.classList.add("hidden");
  holdBtn.classList.add("hidden");
}

// Function to decide winner
function winner() {
  if (player0Score >= 100) {
    winnerEl.textContent = "Player 1 is the Winner! ";
    hideBtn();
  } else if (player1Score >= 100) {
    winnerEl.textContent = "Player2 is the Winner!";
    hideBtn();
  }
}

// Event Listener for Dice Button
rollDiceBtn.addEventListener("click", function () {
  genRandomNum(); // generate random number
  // color change
  if (player0IsPlaying === true) {
    player0Container.style.backgroundColor = "orange";
  } else if (player1IsPlaying === true) {
    player1Container.style.backgroundColor = "orange";
  }

  if (randomNumber !== 1) {
    if (player0IsPlaying === true) {
      currentScore0 += randomNumber;
      player0CurrentScoreEl.textContent = currentScore0;
      winner();
    } else if (player1IsPlaying === true) {
      currentScore1 += randomNumber;
      player1CurrentScoreEl.textContent = currentScore1;
      winner();
    }
  } else if (randomNumber === 1) {
    if (player0IsPlaying === true) {
      player0Container.style.backgroundColor = "orange";
      currentScore0 = 0;
      player0CurrentScoreEl.textContent = 0;
      switchPlayer();
    } else {
      currentScore1 = 0;
      player1Container.style.backgroundColor = "orange";
      player1CurrentScoreEl.textContent = 0;
      switchPlayer();
    }
  }
});

// Function for holding the score
function holdScore() {
  if (player0IsPlaying === true) {
    player0Score += currentScore0;
    player0ScoreEl.textContent = player0Score;
    switchPlayer();
  } else if (player1IsPlaying === true) {
    player1Score += currentScore1;
    player1ScoreEl.textContent = player1Score;
    switchPlayer();
  }
}

// Hold Btn event listener
holdBtn.addEventListener("click", function () {
  console.log("hold btn clicked ");
  holdScore();
  if (player0IsPlaying === true) {
    player0Container.style.backgroundColor = "orange";
  } else if (player1IsPlaying === true) {
    player1Container.style.backgroundColor = "orange";
  }
});

// New Game
function newGame() {
  currentScore0 = 0;
  player0CurrentScoreEl.textContent = 0;

  currentScore1 = 0;
  player1CurrentScoreEl.textContent = 0;

  player0Score = 0;
  player0ScoreEl.textContent = 0;

  player1Score = 0;
  player1ScoreEl.textContent = 0;

  player0IsPlaying = true;
  player1IsPlaying = false;
}

newGameBtn.addEventListener("click", function () {
  newGame();
  player0Container.style.backgroundColor = "orange";
  player1Container.style.backgroundColor = "grey";
  randomNumber = 0;
  diceImg.style.display = "none";
});
