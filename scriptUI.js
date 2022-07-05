let roundCount = 0;
let humanWins = 0;
let compWins = 0;
let person;
let computer;

function playGame(person, computer) {
    roundCount++;
	person = prompt(
		'What will it be? Rock, Paper, or Scissors.'
	);
	person = person.toUpperCase();
	computer = [
		Math.floor(Math.random() * 3) + 1
	];
	//console.log(computer)
	if (computer == 1) {
		computer = 'ROCK';
	} else if (computer == 2) {
		computer = 'PAPER';
	} else if (computer == 3) {
		computer = 'SCISSORS';
	} else {
		computer = 'No true statements';
	}
	console.log(person, computer); // show selections
	
	if (person === computer) {
		console.log(
			'Tie',
			roundCount,
			humanWins,
			compWins
		);
		return 'Tie';
	} else if (
		(person === 'ROCK' &&
			computer === 'SCISSORS') ||
		(person === 'PAPER' && computer === 'ROCK') ||
		(person === 'SCISSORS' && computer === 'PAPER')
	) {
		humanWins++;
		console.log(
			'Human wins this round',
			roundCount,
			humanWins,
			compWins
		);
		return 'Human wins this round';
	} else {
		compWins++;
		console.log(
			'Skynet wins this round',
			+roundCount,
			+humanWins,
			+compWins
		);
		return 'Skynet wins this round';
	}
}

function game() {
	for (let i = 1; i <= 20; i++)
		if (humanWins === 5) {
		console.log('game over. Human wins!');
			return 'game over';
		} 
		else if (compWins === 5) {
			console.log('game over. Skynet wins!')
		}
		else {
			playGame(person, computer);
		}
	//console.log (humanWins, compWins)
	return humanWins, compWins;
}

game();