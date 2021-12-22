// Calculator for your age in dog years:

// My age
let myAge = 50;

// First two years
let earlyYears = 2;

// Number of dog years accounted for your early years:
earlyYears *= 10.5;

// Since we've accounted for the first two years, we take two away from 'myAge' and save it as a variable:
let laterYears = myAge - 2;

// Number of dog years accounted for by later years:
laterYears *= 4;

// My age if I were suddenly changed into a dog:
let myAgeInDogYears = earlyYears + laterYears;

// My fake name as lowercase using built-in method
let myName = 'Jeff'.toLowerCase();

// String interpolation with all the information:
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
