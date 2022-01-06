// Functions to eventually be put into an object:
// This file contains random functions.

// Function 1: Calculate your age in a certain year. It takes two parameters: the first is your age, and the second the year in which you'd like to know your age:
const howOld = (age, year) => {
  let birthYear = 2021 - age;
  let givenYear = birthYear - year;   // will give a negative/positive number, or zero. The conditional will sort through this 
  let absGivenYear = Math.abs(givenYear);  // Absolute value of the above so it can be interpolated
  console.log(absGivenYear) // check
  if (givenYear < 0 && year > 2021) {
    return `You will be ${absGivenYear} in the year ${year}`;
  } else if (givenYear > 0 && givenYear < birthYear) {
    return `The year ${year} was ${absGivenYear} years before you were born`;
  } else if (givenYear < 0 && givenYear <= 2021) {
    return `You were ${absGivenYear} in the year ${year}`;
  } else {
    return 'Uh oh, something went wrong';
  }
}

/* Function 2: a function that allows two parameters to calculate the tip that is recommended as a percentage of the total bill: the first is 'quality' 
[of service] (i.e. 'good', 'bad' etc.) and the second is 'total' (or the total amount the bill came to:*/

const tipCalculator = (quality, total) => {
  quality = quality.toLowerCase();
  let tip;
  if (quality === 'bad') {
    tip = 0.05*total;
    return tip;
  } else if (quality === 'ok') {
    tip = 0.15*total;
    return tip;
  } else if (quality === 'good') {
    tip = 0.2*total;
    return tip;
  } else if (quality === 'excellent') {
    tip = 0.3*total;
    return tip;
  } else {
    tip = 0.18*total;
    return tip;
  }
}

// Function 3: input a string which relates to an emotion and action and get an emoji:

const toEmoticon = (emotion) => {
  switch (emotion) {
    case 'shrug':
      return '|_{"}_|';
      break;
    case 'smiley face':
      return ':)';
      break;
    case 'frowny face':
      return ':(';
      break;
    case 'winky face':
      return ';)';
      break;
    case 'heart':
      return '<3';
      break;
    default:
      return '|_(* ~ *)_|';
      break;
  }
}

// Factorial Function:
const factorial = number => {
  let count = number-1;
  let result = number;
  while (count > 0) {
    result *= count;
    count--;
  }
  return result;
}

/* Function that takes in a string and a character and returns a number, representing the length between the two occurences of the character (including
the indices of the recurring characters. The function should return '0' if the 'char' only occurs once, thrice, or none at all. For example,
 numBetween('donkey', 'n') should return 0, and numBetween('Saturday', 'a') should return '6': */

const numBetween = (string, char) => {
  let indices = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      indices.push(i);
    }
  }

  if (indices.length === 0 || indices.length === 1 || indices.length === 3) {
    return 0;
  } else {
    return indices[1] - indices[0] + 1;
  }
}

// Reverses an array:

const reverseArray = array => {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.unshift(array[i]);
  }
  return newArr;
}
