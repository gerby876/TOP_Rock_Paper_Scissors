function getComputerChoice() {
   let x = Math.floor(Math.random() * 3);
   if (x === 0) {
    console.log('Rock');
   } else if (x === 1) {
    console.log('Paper');
   } else {
    console.log('Scissors');
   }
}
console.log(getComputerChoice())

let toss = prompt ('Choose Rock Paper or Scissors', 'Rock');

function getHumanChoice(toss) {
    if (toss === 'Rock') {
        console.log('Rock')
    } else if (toss === 'Paper') {
        console.log('Paper')
    } else {
        console.log ('Scissors')
    }
}
console.log(getHumanChoice(toss))