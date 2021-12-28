/* Translating inputs to 'Whale Talk'. In 'whale talk', there are only vowels, and e's and u's are doubled. For example, the input: 'a whale of a deal!' is 'AAEEOAEEA'
in whale talk. The idea is to have nested loops so that each element in the input is compared will ALL the elements in the vowels array for EACH loop. Doubling
the e's and u's comes from the second conditional in the outer loop.*/

// longer input
let input = "I see the worst in people, Henry. I don't need to look past seeing them to get all I need. - Daniel Plainview";

// shorter input
let input1 = 'a whale of a deal!';

// create array of vowels which will be compared to one of the two inputs:
const vowels = ['a', 'e', 'i', 'o', 'u'];

// when elements match, they're pushed to the results array:
let resultArray = [];

// Nested loop: the inner loop compares the letters in input and the vowel array and when a match appears, it's pushed to the resultArray. Since we double the 'e' and 'u' letters, we again compare the letters in the outer for loop and this is pushed, too, to the resultArray.
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j])
    }
    }
    if (input[i] === 'e' || input[i] === 'u') {
      resultArray.push(input[i])
    }
  }

console.log(resultArray.join('').toUpperCase());
