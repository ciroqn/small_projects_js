
/* This project assigns an event for a person and then logs the number of days needed/left for training for that event. The main purpose however, is sorting out the
local and global scopes of the variables*/


const name = 'Nala';

// Rnadom number is chose (defined locally), and an event is assigned to each number
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// Days needed for training of a particular event. Where the days variable is defined locally
const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// Name is defined globally and the event is chose through that function. 
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

// Again, name is defined globally and days is 'picked' via the getTrainingDays() function.
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// Outcome of function calls assigned to vars:
const event = getRandEvent();
const days = getTrainingDays(event);


// Call functions for first name and event. This is for 'Nala'.
logEvent(name, event);
logTime(name, days);

// Set up second lot of 'name' and 'event' and also call functions. This is for the name = 'Warren'
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);

