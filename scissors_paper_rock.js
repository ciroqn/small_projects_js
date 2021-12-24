const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'scissors' || userInput === 'paper' || userInput === 'rock' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Please choose either: scissors, paper or rock.');
  }
}

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return 'scissors';
  } else if (choice === 1) {
    return 'paper';
  } else {
    return 'rock';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie!';
  } 
  if (userChoice === 'scissors' && computerChoice === 'paper') {
    return 'You won!';
  } else if (userChoice === 'paper' && computerChoice === 'rock') {
    return 'You won!';
  } else if (userChoice === 'rock' && computerChoice === 'scissors') {
    return 'You won!';
  } else if (userChoice === 'bomb') {
    return 'You cheated, but you still win!';
  }else {
    return 'You lost...';
  }
}

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice} and the computer chose ${computerChoice}.`);

  console.log(determineWinner(userChoice, computerChoice))
}

playGame();
