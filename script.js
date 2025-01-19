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
console.log(getComputerChoice());

let toss = prompt ('Choose Rock Paper or Scissors', 'Rock');

function getHumanChoice(toss) {
    if (toss === 'Rock') {
        humanChoice = 'Rock'
    } else if (toss === 'Paper') {
        humanChoice = 'Paper'
    } else {
        humanChoice = 'Scissor'
    }
    return humanChoice;
}
console.log(getHumanChoice(toss))

let humanScore = Number(0)
let computerScore = Number(0)
