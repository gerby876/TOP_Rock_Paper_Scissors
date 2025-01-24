function playgame() {
    let humanScore = Number(0)
    let computerScore = Number(0)
    
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
         winner(humanChoice, computerChoice);

         round.textContent = outcome;
         display.appendChild(round);

         score.textContent = "Human " + humanScore + " , Computer " + computerScore + ".";
         display.appendChild(score);

    }

    function gameover (humanScore, computerScore) {
        if (humanScore === 3) {
            display.removeChild(r);
            display.removeChild(p);
            display.removeChild(s);
            display.removeChild(round);
            display.removeChild(score);

            const win = document.createElement('h1');
            win.textContent = "You Win!!!";
            display.appendChild(win);

            const again = document.createElement("button");
            again.textContent = "Playagain";
            display.appendChild(again);
            again.addEventListener("click", () => {
                display.removeChild(win);
                display.removeChild(again);
                playgame()});

        } else if (computerScore === 3) {
        display.removeChild(r);
        display.removeChild(p);
        display.removeChild(s);
        display.removeChild(round);
        display.removeChild(score);

        const lose = document.createElement('h1');
        lose.textContent = "You Lose...";
        display.appendChild(lose);

        const again = document.createElement("button");
        again.textContent = "Playagain";
        display.appendChild(again);
        again.addEventListener("click", () => {
            display.removeChild(lose);
            display.removeChild(again);
            playgame()});

    } else {
        return
    }}

const display = document.querySelector("#display")
const round = document.createElement('div');
const score = document.createElement('div');

const r = document.createElement("button");
r.textContent = "Rock";
r.addEventListener("click", () => {
    playround(humanChoice = "Rock");
    gameover(humanScore, computerScore)});
display.appendChild(r);

const p = document.createElement("button");
p.textContent = "Paper";
p.addEventListener("click", () => {
    playround(humanChoice = "Paper");
    gameover(humanScore, computerScore)});
display.appendChild(p);

const s = document.createElement("button");
s.textContent = "Scissors";
s.addEventListener("click", () => {
    playround(humanChoice = "Scissors");
    gameover(humanScore, computerScore)});
display.appendChild(s);

}

playgame()