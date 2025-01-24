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
             
         function winner(humanChoice, computerChoice) {
                 if (humanChoice === "Rock" && computerChoice === 'Scissors' || humanChoice === 'Paper' && computerChoice === 'Rock' || humanChoice === 'Scissors' && computerChoice === 'Paper') {
                     outcome = 'You win, ' + humanChoice + ' beats ' + computerChoice + '.'
                     humanScore++
                 } else if (humanChoice === 'Rock' && computerChoice === 'Paper' || humanChoice === 'Paper' && computerChoice === 'Scissors' || humanChoice === 'Scissors' && computerChoice === 'Rock') {
                     outcome = 'You lose,' + computerChoice + ' beats ' + humanChoice + '.'
                     computerScore++
                 } else { outcome = 'It is a draw try again.'}
                 return outcome
         }
         
         const score = document.createElement('div');
         score.textContent = "Human " + humanScore + " , Computer " + computerScore + ".";
         display.appendChild(score)


         console.log(winner(humanChoice, computerChoice))
         
         let humanDisplay = 'Human ' + humanScore
         let computerDisplay = 'Computer ' + computerScore
    }

    // while (humanScore < 3 && computerScore < 3) {
    //     playround()
    // } 
    //   if (humanScore === 3) {
    //    gameover = 'You win well done.'      
    // } else {
    //     gameover = 'You lost refresh to try again.'
    // }

    // return gameover
const display = document.querySelector("#display")

const r = document.createElement("button");
r.textContent = "Rock";
r.addEventListener("click", () => {
    playround(humanChoice = "Rock")});
display.appendChild(r);

const p = document.createElement("button");
p.textContent = "Paper";
p.addEventListener("click", () => {
    playround(humanChoice = "Paper")});
display.appendChild(p);

const s = document.createElement("button");
s.textContent = "Scissors";
s.addEventListener("click", () => {
    playround(humanChoice = "Scissors")});
display.appendChild(s);
}


playgame()

// console.log(gameover)

