function getComputerChoice() {
   let x = Math.floor(Math.random() * 3);
   if (x === 0) {
    computerChoice = Rock;
   } else if (x === 1) {
    computerChoice = Paper;
   } else {
    computerChoice = Scissors;
   }
   return computerChoice;
}
console.log(getComputerChoice());

let toss = prompt ('Choose Rock Paper or Scissors', 'Rock');

function getHumanChoice(toss) {
    if (toss === 'Rock') {
        humanChoice = Rock
    } else if (toss === 'Paper') {
        humanChoice = Paper
    } else {
        humanChoice = Scissors
    }
    return humanChoice;
}
console.log(getHumanChoice(toss))

let humanScore = Number(0)
let computerScore = Number(0)

function playround(humanChoice, computerChoice) {
        if (humanChoice === Rock && computerChoice === Scissors || humanChoice === Paper && computerChoice === Rock || humanChoice === Scissors && computerChoice === Paper) {
            outcome = 'You win, ${humanChoice} beat ${computerChoice}.'
        } else if (humanChoice === 'Rock' && computerChoice === 'Paper' || humanChoice === 'Paper' && computerChoice === 'Scissors' || humanChoice === 'Scissors' && computerChoice === 'Rock') {
            outcome = 'You lose, ${computerChoice} beat ${humanChoice}.'
        } else { outcome = 'It is a draw try again.'}
        return outcome

}

console.log(playround(humanChoice, computerChoice))