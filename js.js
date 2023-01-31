//get computer choice
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];    
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

let playerCount = 0;
let computerCount = 0;
function playRound(computerSelection){      
   
    let playerSelection = this.id;
    if (playerSelection == 'paper'){

        playerChoice.style.fontSize = '2.4em';
        playerChoice.innerHTML = 'PLAYER' +'<br>' +'<i class="fa-regular fa-hand "></i>';

    }
    else if ( playerSelection == 'rock'){
        playerChoice.style.fontSize = '2.4em'; 
        playerChoice.innerHTML = "PLAYER" +'<br>' + '<i class="fa-regular fa-hand-back-fist "></i>';
    } 

    else if(playerSelection == 'scissors'){
        playerChoice.style.fontSize = '2.4em';
        playerChoice.innerHTML  = "PLAYER"  +'<br>' +'<i class="fa-regular fa-hand-scissors "></i>';

    }
    computerSelection = getComputerChoice();
    if (computerSelection == 'paper'){

        choice.innerHTML = 'COMPUTER ' +'<br>' +'<i class="fa-regular fa-hand "></i>';
        choice.style.fontSize =' 2.4em';
    }
    else if (computerSelection == 'rock'){
        choice.innerHTML = 'COMPUTER ' +'<br>' + '<i class="fa-regular fa-hand-back-fist "></i>';
        choice.style.fontSize =' 2.4em';     
    } 

    else if(computerSelection == 'scissors'){
        choice.innerHTML = 'COMPUTER ' +'<br>' +'<i class="fa-regular fa-hand-scissors "></i>';
        choice.style.fontSize =' 2.4em';       
    }
    
    if (computerSelection === playerSelection){
        playerCount = playerCount;
        computerCount  = computerCount;
        output("Tie " + `${playerSelection}`+ " ties " + `${computerSelection}`);
           
    }
    else if (computerSelection === 'rock' && playerSelection === 'scissors'){
        computerCount++;
        playerCount = playerCount;
        output("You lose! " + computerSelection + " beats " + playerSelection);
               
    }
    else if(computerSelection === 'paper' && playerSelection === "scissors"){
        playerCount++; 
        computerCount = computerCount
        output("You WIN! " + playerSelection + " beats "+ computerSelection);
    }
    else if(computerSelection === 'scissors' && playerSelection === "paper"){
        computerCount++;
        playerCount = playerCount;
        output("You lose! " + computerSelection + " beats " + playerSelection);
        
    }
    else if(computerSelection === 'scissors' && playerSelection === 'rock'){
        playerCount++;
        computerCount = computerCount; 
        output("You WIN! " + playerSelection + " beats "+ computerSelection);

       
    }
    else if (computerSelection === "paper" && playerSelection === 'rock'){
        computerCount++;
        playerCount = playerCount;
        output("You lose! " + computerSelection + " beats " + playerSelection);
    }
    else if (computerSelection ==='rock' && playerSelection === 'paper'){
        playerCount++;
        computerCount = computerCount;
        output("You WIN! " + playerSelection + " beats "+ computerSelection);
    }  
}

function result(){
    playerScore.textContent = "|" + playerCount + ":";
    compScore.textContent = computerCount + "|";
 }
function output (output){
    outcome.textContent = output;
    checkWin();
}
function checkWin(){
    if(computerCount == 5){
        game.textContent = "YOU LOSE THE GAME :("
        playerCount = 0;
        computerCount = 0;    
        play.style.display = "none";
        outcome.style.display = 'none';

    }
    else if (playerCount == 5){
        game.textContent =  "YOU WIN THE GAME :D";
        playerCount = 0;
        computerCount = 0;   
        play.style.display = 'none'
        outcome.style.display = 'none';

    }
}
function restart(){
    location.reload();
}

const restartBtn = document.querySelector('.restart')
restartBtn.addEventListener('click',restart);

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {    
    button.addEventListener('click', playRound)
    button.addEventListener('click',result) 
});

const score = document.querySelector('#score');
const playerScore = document.querySelector('#playerScore');
const compScore = document.querySelector('#compScore');
const outcome = document.querySelector('#outcome');
const choice = document.querySelector('#compChoice');
const game = document.querySelector('#result');
const playerChoice = document.querySelector('#playerChoice');
const play = document.querySelector('#game');
