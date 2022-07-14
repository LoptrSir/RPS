let roundCount = 0;
let humanWins = 0;
let computerWins = 0;
//this is fine for now but a bad practice generally
let computer;
let person;

const text = document.createElement("div");
text.classList.add("text");
text.textContent =
  "What will it be? Rock, Paper, or Scissors?  Click a button to decide.";
document.body.appendChild(text);

const score = document.createElement("div");
score.classList.add("score");
score.textContent = "Human: " + humanWins + "   " + "Skynet: " + computerWins;
document.body.appendChild(score);
const brock = document.createElement("button");
brock.classList.add("brock");
brock.innerText = "Rock";
document.body.appendChild(brock);
const bpaper = document.createElement("button");
bpaper.classList.add("bpaper");
bpaper.innerText = "Paper";
document.body.appendChild(bpaper);
const bscissor = document.createElement("button");
bscissor.classList.add("bscissor");
bscissor.innerText = "Scissors";
document.body.appendChild(bscissor);

const result = document.createElement("div");
result.classList.add("result");
document.body.appendChild(result);

const end = document.createElement("div");
end.classList.add("end");

document.body.appendChild(end);

const btns = document.querySelectorAll(".brock, .bpaper, .bscissor");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    person = this.innerText.toUpperCase();
    console.log("you clicked " + this.innerText.toUpperCase());
    playGame(person);
  });
});
console.log(btns);

function playGame() {
  roundCount++;
  computer = [Math.floor(Math.random() * 3) + 1];
  if (computer == 1) {
    computer = "ROCK";
  } else if (computer == 2) {
    computer = "PAPER";
  } else if (computer == 3) {
    computer = "SCISSORS";
  }
  console.log(person, computer);
  if (person === computer) {
    console.log("Tie", roundCount, humanWins, computerWins);
    result.textContent = "This round is a tie.";
  } else if (
    (person === "ROCK" && computer === "SCISSORS") ||
    (person === "PAPER" && computer === "ROCK") ||
    (person === "SCISSORS" && computer === "PAPER")
  ) {
    humanWins++;
    console.log("Human wins this round", roundCount, humanWins, computerWins);
    result.textContent = "This round goes to the humans.";
  } else {
    computerWins++;
    console.log(
      "Skynet wins this round",
      +roundCount,
      +humanWins,
      +computerWins
    );
    result.textContent = "This round goes to Skynet.";
  }

  score.textContent = "Human: " + humanWins + "   " + "Skynet: " + computerWins;
  //game();

  //function game() {
  for (let i = 1; i <= 25; i++)
    if (humanWins === 5 ) {
      console.log("game over");
      end.textContent = 'The game is completed: Humanity has prevailed.'
      //return "game over";
    } else if (computerWins === 5){
        end.textContent = 'The game is completed: Skynet has assumed control.'
  }
  console.log(humanWins, computerWins);
  return humanWins, computerWins;
}
//game();
