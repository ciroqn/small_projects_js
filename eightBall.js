let userName = '';

// Ternary for username
userName = userName || 'Anonymous';

// If userName exists then print first after q mark.
userName ? console.log(`Hello ${userName}`) : console.log('Hello!');

// Ask a question:
let userQuestion = 'Will Andy pick me?';

// String interpolation
console.log(`${userName} asked: ${userQuestion}`);

// Random number from 0 to 7
let randomNumber = Math.floor(Math.random() * 8);

// Var to be decided based on switch statement below:
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'eightBall broke!';
    break;
}

// Prints statement based on rand. num.
console.log(eightBall);
