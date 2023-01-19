//get computer choice
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];    
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

//check for win or lose 
let playerCount = 0;
let computerCount = 0;

function playRound(playerSelection, computerSelection){    
    playerSelection = prompt("Rock,Paper,Scissors? ");
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();

    if (computerSelection == playerSelection){
            return ['TIE!', computerCount ,playerCount]
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors'){
        computerCount++;
        return ['You Lose! Rock beats Scissors', computerCount, playerCount]
    }
    else if(computerSelection == 'paper' && playerSelection == "scissors"){
        playerCount++; 
        return ["You win! Scissors beats paper", computerCount, playerCount]
    }
    else if(computerSelection == 'scissors' && playerSelection == "paper"){
        computerCount++;
        return ["You lose! Scissors beats paper", computerCount, playerCount]
    }
    else if(computerSelection == 'scissors' && playerSelection == 'rock'){
        playerCount++;
        return[ "You win! Rock beats Scissors", computerCount, playerCount]
    }
    else if (computerSelection == "paper" && playerSelection == 'rock'){
        computerCount++;
        return ["You lose! Paper beats rock", computerCount, playerCount]
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper'){
        playerCount++;
        return ["You win! Paper beats rock" , computerCount, playerCount]
    }
    else{
        computerCount++
        return ["Wrong input! You Lose" , computerCount, playerCount]
    }
}
function game(){
    for (let i = 0; i < 5; i++){
        console.log(playRound());
    }
    if (computerCount > playerCount){
        console.log("You lose :(")
    }
    else if(computerCount < playerCount){
        console.log ("YOU WIN!!!");
    }
    else{
       console.log("TIE");
    }
}
game();