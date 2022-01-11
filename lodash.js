/*This project is based on the lodash object which contains a library of functions/methods. This is in the spirit of lodash, and contains random functions/methods
such as string methods and array manipulations (often involving iterators and built-in functions). This is currently ongoing.

Functions included in '_':
  clamp(num, lower, upper)
  inRange(number, start, end)
  words(string)
  pad(string, length)
  has(obj, key)
  invert(obj)
  findKey(obj, predicate)
  drop(arr, num)
  dropWhile(arr, predicate)
  chunk(arr, size)
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
  },
  
  invert(obj) {
    let invertedObject = {};
    // Each property in obj is assigned the value to what was the 'value':
    for (let property in obj) {
      let originalValue = obj[property];
      invertedObject[originalValue] = property;
    }
    return invertedObject;
  },

  findKey(obj, predicate) {
    for (let key in obj) {
      let value = obj[key];
      let truthyPredicateVal = predicate(value);
      if (truthyPredicateVal) {
        return key;
      };
    };
    return undefined;
  },

  drop(arr, num) {
    if (!num) {
      let removeOne = arr.splice(-1, 1);
      return removeOne;
    }
    let newArr = arr.splice(num);
    return newArr;
  },

  dropWhile(arr, predicate) {
    let index = arr.findIndex((element, index) => {
      return !predicate(element, index, arr);
    })
    let newArr = this.drop(arr, index);
    return newArr;
    },

   chunk(arr, size) {
     if (!size) {
       size = 1;
     };
     let arrayChunks = [];
     for (let i = 0; i < arr.length; i += size) {
       let arrayChunk = arr.slice(i, i+size);
       arrayChunks.push(arrayChunk);
     }
     return arrayChunks;
     }

};
