let roundCount = 0;
let humanWins = 0;
let computerWins = 0;
let person;
let computer;

// branch ui1
const text = document.createElement("div");
text.classList.add("text");
text.textContent =
  "What will it be? Rock, Paper, or Scissors?  Click a button to decide.";
document.body.appendChild(text);
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

//
//function playerSelection(player)
//function playerSelection() {
  const btns = document.querySelectorAll(".brock, .bpaper, .bscissor");
  btns.forEach((btn) => {
    //btn.addEventListener("click", function (person)
    btn.addEventListener("click", function () {
      person = this.innerText.toUpperCase();
      console.log(person, "you clicked " + this.innerText.toUpperCase());
      //playGame(person);
      playGame(person);
    });
  });
  console.log(btns);
//}
//const person = playerSelection();
//
function playGame(person, computer) {
  roundCount++;
  computer = [Math.floor(Math.random() * 3) + 1];
  console.log(computer);
  if (computer == 1) {
    computer = "ROCK";
  } else if (computer == 2) {
    computer = "PAPER";
  } else if (computer == 3) {
    computer = "SCISSORS";
  } else {
    computer = "No true statements";
  }
  console.log(person, computer); // show selections

  if (person === computer) {
    console.log("Tie", roundCount, humanWins, computerWins);
    //return "Tie";
  } else if (
    (person === "ROCK" && computer === "SCISSORS") ||
    (person === "PAPER" && computer === "ROCK") ||
    (person === "SCISSORS" && computer === "PAPER")
  ) {
    humanWins++;
    console.log("Human wins this round", roundCount, humanWins, computerWins);
    //return "Human wins this round";
  } else {
    computerWins++;
    console.log(
      "Skynet wins this round",
      +roundCount,
      +humanWins,
      +computerWins
    );
    //return "Skynet wins this round";
  }
}