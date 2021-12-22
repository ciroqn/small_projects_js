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
