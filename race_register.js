// Select random number from 0 to 1000
let raceNumber = Math.floor(Math.random() * 1000);

// Did the runner register early?
let registeredEarly = true;

// Runner age
let runnerAge = 19;

// If runner is over 18 and has registered early, they're assigned a number over 1000. Everyone else gets a number below 1000.
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
} 

// Print message according to age and registration number of runner
if (runnerAge > 18 && registeredEarly) {
  console.log(`Your race number is ${raceNumber} and you will race at 9.30am.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Your race number is ${raceNumber}. You are over 18, but registered late, so you will race at 11:00am.`);
} else if (runnerAge < 18) {
  console.log(`Your race number is ${raceNumber}. You are under 18, so you will race at 12:30pm.`);
} else {
  console.log('Ah, you\'re 18. Please see registration desk.');
}
