// Basic linter for 'story'. Removes unnecessary words and counts the number of overused words and sentences in the string.

// TO BE REFINED AND ADDED TO LATER 

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// Overused word bank
let overusedWords = ['really', 'very', 'basically'];

// Unnecessary word bank
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Convert string into array that is split by the spaces (1 space)
const storyWords = story.split(' ');

console.log(storyWords.length);

const filterWords = storyWords.filter(word => {
  if (!unnecessaryWords.includes(word)) {
    return word;
  }
})

const countOveruse = betterWords.filter(word => {
  if (overusedWords.includes(word)) {
    return word;
  }
})

// A count of how many times an overused word was used
const overusedCount = countOveruse.length;

//console.log(betterWords);
console.log(overusedCount);

const countSentencesPeriod = betterWords.filter(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    return word;
  }
})

// Number of sentences:
console.log(countSentencesPeriod.length);

console.log(countSentencesPeriod);
