

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


console.log(getSleepHours('friday'));
console.log(getSleepHours('monday'));

const getActualSleepHours = () => {
  let totalSleepHours = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  return totalSleepHours;
}

const getIdealSleepHours = (number) => {
  let idealHours = number;
  let idealHoursTotal = idealHours * 7;
  return idealHoursTotal;
}

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


console.log(calculateSleepDebt());

