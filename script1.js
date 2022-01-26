let person= prompt('What will it be? Rock, Paper, or Scissors.')
console.log(person);
person = person.toUpperCase()
console.log(person);
//let options= ['ROCK', 'PAPER', 'SCISSORS'];
let computer= [Math.floor(Math.random()*3)+1]
console.log(computer);
  
if (computer == 1) {
    computer = 'ROCK';
} else if (computer == 2) {
    computer = 'PAPER';
} else if (computer == 3) {
    computer = 'SCISSORS';
} else {computer = 'No true statements'}
console.log(computer)

function playGame(peep, comp) {
    if (peep === comp){
        console.log("Tie");
    }else if(
        (peep === "ROCK" && comp === "SCISSORS") ||
        (peep === "PAPER" && comp === "ROCK") ||
        (peep === "SCISSORS" && comp === "PAPER")){
        console.log('Human wins this round')
    }else {
        console.log('Skynet wins this round')}
    
}
playGame(person, computer);

