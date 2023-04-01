// get rock paper and scissors from html
var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");

// function for computer to choose rock paper or scissors
let computerSelection = () => {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) {
    return "rock";
  } else if (randomNum == 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

// when click on rock, assign "rock" to playerChoice
rock.addEventListener("click", () => {
  let player = "rock";
  let computer = computerSelection();
  let result = playRound(player, computer);
  console.log(result);
});

paper.addEventListener("click", () => {
  let player = "paper";
  let computer = computerSelection();
  let result = playRound(player, computer);
  console.log(result);
});

scissors.addEventListener("click", () => {
  let player = "scissors";
  let computer = computerSelection();
  let result = playRound(player, computer);
  console.log(result);
});

// play single round
//output result to console
function playRound(player, computer) {
  if (player == computer) {
    return "You made the same choice. This is a draw";
  } else if (player == "rock" && computer == "paper") {
    return "You lose! Paper beats rock!";
  } else if (player == "rock" && computer == "scissors") {
    return "You win! Rock beats scissors!";
  } else if (player == "paper" && computer == "rock") {
    return "You win! Paper beats rock";
  } else if (player == "paper" && computer == "scissors") {
    return "You lose! Scissors beats Paper";
  } else if (player == "scissors" && computer == "rock") {
    return "You lose! Rock beats Scissors";
  } else if (player == "scissors" && computer == "paper") {
    return "You win! Scissors beats paper";
  } else {
    return "you made an invalid choice";
  }
}
