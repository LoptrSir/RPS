let roundCount = 0;
let humanWins = 0;
let computerWins = 0;
//let person = playerSelection();
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

function playerSelection(){
  const btns = document.querySelectorAll(".brock, .bpaper, .bscissor");
  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      console.log(person, "you clicked " + this.innerText.toUpperCase());
      person = this.innerText.toUpperCase();
          });
  });
  console.log (btns);
}

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
    return "Tie";
  } else if (
    (person === "ROCK" && computer === "SCISSORS") ||
    (person === "PAPER" && computer === "ROCK") ||
    (person === "SCISSORS" && computer === "PAPER")
  ) {
    humanWins++;
    console.log("Human wins this round", roundCount, humanWins, computerWins);
    return "Human wins this round";
  } else {
    computerWins++;
    console.log(
      "Skynet wins this round",
      +roundCount,
      +humanWins,
      +computerWins
    );
    return "Skynet wins this round";
  }
}

//function game() {
//	for (let i = 1; i <= 25; i++)
//		if (humanWins === 5 || computerWins === 5) {
//			console.log('game over');
//			return 'game over';
//		} else {
//			playGame(person, computer);
//		}
//console.log (humanWins, computerWins)
//	return humanWins, computerWins;
//}

//game();
let person = playerSelection();
playerSelection();
playGame();

// why is this happening?
// playerSelection needs to be called 2x to show player selection first click but still calls previous result too.
//playGame is not calling for playerSelection first and uses undefined for result of round
// NodeList is called 2x = because PlayerSelection is called 2x.

//That's right. You also need to pass arguments to it since I saw you didn't pass any
