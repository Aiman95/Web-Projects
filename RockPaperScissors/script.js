
  function game(){ 
      let palyerScore = 0;
      let computerScore =0;
      let round = 1;
      while (computerScore <=5 || palyerScore <=5){

        function computerPlay(){
            const play = ["rock", "paper", "scissors"]
            const random = Math.floor(Math.random()*3)
        
            return play[random]
        
        }

        function player (e){
          return e.target.id;
        }

        const buttons = document.querySelectorAll('button');
        // we use the .forEach method to iterate through each button
        buttons.forEach((button) => {
          // and for each one we add a 'click' listener
          button.addEventListener('click', player)
        });
        
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

        const playerSelection = player();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection))

      }

    if(palyerScore>computerScore){
        return 'you won'
    }else if(palyerScore<computerScore){
        return "you lose"
    }else{
        return "tie"
    }
      

  }
//console.log(game())
/* Create three buttons, one for each selection. 
Add an event listener to the buttons that calls your playRound function with the correct 
playerSelection every time a button is clicked.
*/
// let computerScore=0;
// let palyerScore =0;

// function computerPlay(){
//     const play = ["rock", "paper", "scissors"]
//     const random = Math.floor(Math.random()*3)
//         return play[random]    
//     }

//     function playRound(playerSelection, computerSelection) {
            
//                   if(playerSelection==computerSelection){
//                       return `${playerSelection} + ${computerSelection} tie`
//                   }else if(playerSelection=="rock" && computerSelection== "paper"){
//                       computerScore++
//                       return "paper beats rock"
//                   }else if(playerSelection=="rock" && computerSelection=="scissors"){
//                       palyerScore++
//                       return "rock beats scissors"
//                   }else if(playerSelection=="paper"&& computerSelection=="scissors"){
//                       palyerScore++
//                       return "scissors beat paper"
//                   }else if(playerSelection=="paper"&& computerSelection=="rock"){
//                       palyerScore++
//                       return "paper beats rock"
//                   }else if(playerSelection=="scissors" && computerSelection=="rock"){
//                       computerScore++
//                       return "rock beats scissors"
//                   }else if(playerSelection=="scissors" && computerSelection== "paper"){
//                       palyerScore++
//                       return "scissors beat paper"
//                   }
//                 }
// const buttons = document.querySelectorAll('button');

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {

//   // and for each one we add a 'click' listener
//   button.addEventListener('click', function playerSelection(e){
//     return button.id;
//   })
// });
//console.log(computerScore,palyerScore)
