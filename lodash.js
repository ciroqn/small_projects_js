/*This project is based on the lodash object which contains a library of functions/methods. This is in the spirit of lodash, and contains random functions/methods
such as string methods and array manipulations (often involving iterators and built-in functions). This is currently ongoing.

Functions included in '_':
  clamp(num, lower, upper)
  inRange(number, start, end)
  words(string)
  pad(string, length)
  has(obj, key)
  
  */

const _ = {
  clamp(num, lower, upper) {
    let lowerClampedValue = Math.max(num, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },

  inRange(number, start, end) {
    if (!end) {
      let startVal = start;
      end = startVal;
      start = 0;
    }
    if (start > end) {
      let endVal = end;
      let startVal = start;
      start = endVal;
      end = startVal;
    }
    if (number < start) {
      return false;
    } else if (number >= end) {
      return false;
    } else {
      return true;
    }
  },

  words(string) {
    return string.split(' ');
  },

  pad(string, length) {
    if (length < string.length) {
      return string;
    }
    let spaceLeft = length - string.length;
    // For odd leftover space:
    let leftOverPadding = spaceLeft%2;
    let floorOddLeftover = Math.floor(spaceLeft/2);
    let oddPadding;

    // For even spacing
    let addPadding;
    
    if (spaceLeft % 2 === 0) {
      addPadding = spaceLeft/2;
      return ' '.repeat(addPadding) + string + ' '.repeat(addPadding);
    } else {
      return  ' '.repeat(floorOddLeftover) + string + ' '.repeat(floorOddLeftover+leftOverPadding);
    }
  },
  
  has(obj, key) {
    if (Object.keys(obj).includes(key)) {
      return true;
    } else {
      return false;
    } 
  }

};
