// Calculator for conversion from Kelvin to Celsius, Fahrenheit + Newton degrees.

// Today's temperature in Kelvin
let kelvin = 293;

// Convert Kelvin to Celsius
let celsius = kelvin - 273;

// Convert Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// Rounding F down to nearest integer
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees in Fahrenheit.`);

// For Newton Scale (from C). Newton used linseed oil as the thermometric material against reference points.
let newton = celsius * (33/100);

newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees in Newton degrees.`);

// Most importantly, in Celsius:
celsius = Math.floor(celsius);

console.log(`The temperature is ${celsius} degrees in degrees Celsius.`);

