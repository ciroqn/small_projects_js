/* The purpose of this is to record the number of hours one sleeps per week and the ideal number of hours one would like to sleep. Using numerous functions, a 
statement is printed to the console specifying the sleep debt and a message based on the difference between the actual and ideal sleep hours.*/

// Sleep hours for each day. Could have used a switch statement, but this will do:

const getSleepHours = (day) => {
  day = day.toLowerCase();
  if (day === 'monday') {
    return 9;
  } else if (day === 'tuesday') {
    return 7;
  } else if (day === 'wednesday') {
    return 6;
  } else if (day === 'thursday') {
    return 7;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 7;
  } else if (day === 'sunday') {
    return 8;
  } else {
    return 'There\'s no such day...';
  }
}

// Test the function works above. Returns 8 and 9 respectively.
console.log(getSleepHours('friday'));
console.log(getSleepHours('monday'));

// Adds all the hours and returns the total number of sleep hours:
const getActualSleepHours = () => {
  let totalSleepHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  return totalSleepHours;
}

// Parameter holds the number of ideal hours each night and multiplies by 7 to get the total number of (ideal) sleep hours per week.
const getIdealSleepHours = (number) => {
  let idealHours = number;
  let idealHoursTotal = idealHours * 7;
  return idealHoursTotal;
}

// The difference between actual and ideal sleep hours, and returns are statement depending on this difference.
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  let sleepDebt = idealSleepHours - actualSleepHours;

  if (actualSleepHours === idealSleepHours) {
    console.log(`The number of horus you sleep per week is ${actualSleepHours}, and the number of ideal sleep hours is ${idealSleepHours}. You have zero hours to catch up on: you have the perfect amount of sleep`);
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`The number of hours you sleep per week is ${actualSleepHours}, and the number of ideal sleep hours is ${idealSleepHours}. Your sleep debt is ${sleepDebt} hours. You got more sleep than needed.`);
  } else {
    console.log(`The number of hours you sleep per week is ${actualSleepHours}, and the number of ideal sleep hours is ${idealSleepHours}. Your sleep debt is ${sleepDebt} hours. You need to get more rest.`);
  }
  return `Sleep debt is: ${sleepDebt}`;
}

// Calls functions
console.log(calculateSleepDebt());

