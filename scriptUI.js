let roundCount = 0;
let humanWins = 0;
let compWins = 0;
let person;
let computer; 

function playGame(peep, comp) {
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
	
	if (peep === comp) {
		console.log(
			'Tie',
			roundCount,
			humanWins,
			compWins
		);
		return 'Tie';
	} else if (
		(peep === 'ROCK' &&
			comp === 'SCISSORS') ||
		(peep === 'PAPER' && comp === 'ROCK') ||
		(peep === 'SCISSORS' && comp === 'PAPER')
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
	for (let i = 1; i <= 5; i++)
		if (humanWins === 5 || compWins === 5) {
			console.log('game over');
			return 'game over';
		} else {
			playGame(person, computer);
		}
	//console.log (humanWins, compWins)
	return humanWins, compWins;
}

game();
