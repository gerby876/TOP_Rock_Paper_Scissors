function getComputerChoice(max) {
   let x = Math.floor(Math.random() * max);
   if (x === 0) {
    console.log('Rock');
   } else if (x === 1) {
    console.log('Paper');
   } else {
    console.log('Scissors');
   }
}
console.log(getComputerChoice(3))
