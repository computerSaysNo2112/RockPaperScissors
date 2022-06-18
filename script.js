//Generates random number between 0 and 150.
// Returns either rock, paper, scissor based on random number
function computerPlay(){
    let randomNum = Math.floor(Math.random()*150);
    if (randomNum >= 0 && randomNum <= 50){
        return "rock"
    } else if(randomNum >= 51 && randomNum <= 100){
        return "paper"
    }else{
        return "scissors"
    }       
}


function singleRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "You made the same choice. This is a draw"
    } else if(playerSelection.lowercase() == "rock" && computerSelection == "paper"){
        return " You lose! Paper beats rock!"
    } else if(playerSelection.lowercase() == "rock" && computerSelection == "scissors"){
        return "You win! Rock beats scissors!"
    } else if(playerSelection.lowercase() == "paper" && computerSelection == "rock"){
        return "You win! Paper beats rock"
    } else if(playerSelection.lowercase() == "paper" && computerSelection == "scissors"){
        return "You lose! Scissors beats rock"
    } else if(playerSelection.lowercase() == "scissors" && computerSelection == "rock"){
        return "You lose! Rock beats scissors"
    } else if(playerSelection.lowercase() == "scissors" && computerSelection == "paper"){
        return "You win! Scissors beats paper"
    } else {
        return "you made an invalid choice"
    }
}