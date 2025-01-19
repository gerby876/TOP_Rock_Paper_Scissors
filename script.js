let humanScore = Number(0)
let computerScore = Number(0)

function playgame() {
    function playround() {
        function getComputerChoice() {
            let x = Math.floor(Math.random() * 3);
            if (x === 0) {
             computerChoice = 'Rock';
            } else if (x === 1) {
             computerChoice = 'Paper';
            } else {
             computerChoice = 'Scissors';
            }
            return computerChoice;
         }
         
         getComputerChoice();
         
         let toss = prompt ('Choose Rock Paper or Scissors', 'Rock');
         
         function what(toss) {
           tcase = toLowerCase(toss);
             return tcase
         }
         
         function getHumanChoice(tcase) {
             if (tcase === 'rock') {
                 humanChoice = 'Rock'
             } else if (tcase === 'paper') {
                 humanChoice = 'Paper'
             } else {
                 humanChoice = 'Scissors'
             }
             return humanChoice;
         }
         
         getHumanChoice()
         
    
         
         function winner(humanChoice, computerChoice) {
                 if (humanChoice === 'Rock' && computerChoice === 'Scissors' || humanChoice === 'Paper' && computerChoice === 'Rock' || humanChoice === 'Scissors' && computerChoice === 'Paper') {
                     outcome = 'You win, ' + humanChoice + ' beats ' + computerChoice + '.'
                     humanScore++
                 } else if (humanChoice === 'Rock' && computerChoice === 'Paper' || humanChoice === 'Paper' && computerChoice === 'Scissors' || humanChoice === 'Scissors' && computerChoice === 'Rock') {
                     outcome = 'You lose,' + computerChoice + ' beats ' + humanChoice + '.'
                     computerScore++
                 } else { outcome = 'It is a draw try again.'}
                 return outcome
         
         }
         
         console.log(winner(humanChoice, computerChoice))
         
         let humanDisplay = 'Human ' + humanScore
         let computerDisplay = 'Computer ' + computerScore
         
         console.log(humanDisplay)
         console.log(computerDisplay)
    }
    playround()
}

playgame()


