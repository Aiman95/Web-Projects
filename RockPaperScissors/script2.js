let playerScore = 0;
let computerScore =0;


function computerPlay(){
    const play = ["rock", "paper", "scissors"]
    const random = Math.floor(Math.random()*3)

    return play[random]

}

function playRound(playerSelection, computerSelection) {
            
    if(playerSelection==computerSelection){
        return `${playerSelection} + ${computerSelection} tie`
    }else if(playerSelection=="rock" && computerSelection== "paper"){
        computerScore++
        return "paper beats rock"
    }else if(playerSelection=="rock" && computerSelection=="scissors"){
        playerScore++
        return "rock beats scissors"
    }else if(playerSelection=="paper"&& computerSelection=="scissors"){
        playerScore++
        return "scissors beat paper"
    }else if(playerSelection=="paper"&& computerSelection=="rock"){
        playerScore++
        return "paper beats rock"
    }else if(playerSelection=="scissors" && computerSelection=="rock"){
        computerScore++
        return "rock beats scissors"
    }else if(playerSelection=="scissors" && computerSelection== "paper"){
        playerScore++
        return "scissors beat paper"
    }

    
  }

function player (e){
    //console.log(playRound(e.target.id, computerPlay()))
    round.textContent = `${playRound(e.target.id, computerPlay())}`
    playerScoreDisplay.textContent= `Player score: ${playerScore}`;
    computerScoreDisplay.textContent= `Computer score: ${computerScore}`;
    // console.log(
    //     `player score: ${playerScore}`,
    //     `computer score: ${computerScore}`
    // )
    if(playerScore==5){
        end.textContent= "You Won";
        //console.log("You Won")
        //round= false;
        playerScore=0;
        computerScore=0;
    }else if(computerScore==5){
        end.textContent= "You lose";
        //console.log("You lose")
        //round=false;
        playerScore=0;
        computerScore=0;
    }else{
        end.textContent= "";

    }
    
  }

  const buttons = document.querySelectorAll('button');
  // we use the .forEach method to iterate through each button
  buttons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener('click', player)
  });

const playerScoreDisplay = document.querySelector('#playerScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const content = document.querySelector('.content');

const round = document.createElement('p');
const end = document.createElement('p');

content.appendChild(round);
content.appendChild(end);

