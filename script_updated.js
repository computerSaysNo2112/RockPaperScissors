// Retrieve Buttons from html
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

// player's choice
let playerChoice;

rockBtn.addEventListener("click", () => {
  playerChoice = "rock";
  console.log(playerChoice);
});

paperBtn.addEventListener("click", () => {
  playerChoice = "paper";
  console.log(playerChoice);
});

scissorsBtn.addEventListener("click", () => {
  playerChoice = "scissors";
  console.log(playerChoice);
});

// computer's choice
let computerChoice = function randomNumber() {
  let randomNum = Math.floor(Math.random() * 150);

  if (randomNum >= 0 && randomNum <= 50) {
    return "rock";
  } else if (randomNum >= 51 && randomNum <= 100) {
    return "paper";
  } else {
    return "scissors";
  }
};
