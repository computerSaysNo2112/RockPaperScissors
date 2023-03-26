// Retrieve Buttons from html
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

// Create Score info

let playerChoice;

rockBtn.addEventListener('click', () => {
    playerChoice = 'rock';
    console.log(playerChoice);
})


paperBtn.addEventListener('click', () => {
    playerChoice = 'paper';
    console.log(playerChoice);
})

scissorsBtn.addEventListener('click', ()=>{
    playerChoice = 'scissors';
    console.log(playerChoice);

})











