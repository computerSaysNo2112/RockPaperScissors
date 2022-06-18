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


