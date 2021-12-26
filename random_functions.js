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
