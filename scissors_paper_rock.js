// Function for user choice, with conditional that determines if user inputis valid
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'scissors' || userInput === 'paper' || userInput === 'rock' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Please choose either: scissors, paper or rock.');
  }
}

// Function for computer choice based off a given random number and a conditional
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

// Using if else statements to determine winner
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

// Function that take user and computer choices and inputs them into the parameters of the determineWinner() function and prints to console.
const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`You chose ${userChoice} and the computer chose ${computerChoice}.`);

  console.log(determineWinner(userChoice, computerChoice))
}

// Call game function
playGame();
