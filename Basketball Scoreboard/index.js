const scoreBoard = document.querySelectorAll("#score-board");
const resetBtn = document.querySelectorAll("#reset");

let homeScore = 0;
let awayScore = 0;

scoreBoard[0].textContent = 0;
scoreBoard[1].textContent = 0;

function incrementHome(n) {
  homeScore += n;
  scoreBoard[0].textContent = homeScore;
}

function incrementAway(n) {
  awayScore += n;
  scoreBoard[1].textContent = awayScore;
}

function resetButtonHome() {
  scoreBoard[0].textContent = 0;
  homeScore = 0;
}

function resetButtonAway() {
  scoreBoard[1].textContent = 0;
  awayScore = 0;
}
