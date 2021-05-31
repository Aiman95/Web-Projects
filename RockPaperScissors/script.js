
  function game(){


    
      let palyerScore = 0;
      let computerScore =0;
      let round = 1;
      while (round <=5){

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
                palyerScore++
                return "rock beats scissors"
            }else if(playerSelection=="paper"&& computerSelection=="scissors"){
                palyerScore++
                return "scissors beat paper"
            }else if(playerSelection=="paper"&& computerSelection=="rock"){
                palyerScore++
                return "paper beats rock"
            }else if(playerSelection=="scissors" && computerSelection=="rock"){
                computerScore++
                return "rock beats scissors"
            }else if(playerSelection=="scissors" && computerSelection== "paper"){
                palyerScore++
                return "scissors beat paper"
            }
          }

        const playerSelection = prompt("Enter your turn").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log("player Score: "+palyerScore+" computer score: "+computerScore)
        round++

      }

    if(palyerScore>computerScore){
        return 'you won'
    }else if(palyerScore<computerScore){
        return "you lose"
    }else{
        return "tie"
    }
      

  }