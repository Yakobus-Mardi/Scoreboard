const scoreBoard = document.querySelectorAll("#score-board");
// const btnIncrement1 = document.querySelectorAll("#incrementOne");
// const btnIncrement2 = document.querySelectorAll("#incrementTwo");
// const btnIncrement3 = document.querySelectorAll("#incrementThree");
const resetBtn = document.querySelectorAll("#reset");

let homeScore = 0;
let guestScore = 0;

scoreBoard[0].textContent = 0;
scoreBoard[1].textContent = 0;
// for (const board of scoreBoard) board.textContent = 0;

function incrementHome(n) {
   homeScore += n;
   scoreBoard[0].textContent = homeScore;
} 

function incrementGuest(n) {
    guestScore += n;
    scoreBoard[1].textContent = guestScore;
}

function resetButtonHome() {
    scoreBoard[0].textContent = 0;
    homeScore = 0;
}

function resetButtonGuest() {
    scoreBoard[1].textContent = 0;
    guestScore = 0;
}
