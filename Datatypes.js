let  name = "sakib";

// alert() in node js we can't use alert
// Learning datatypes
// string => anything inside ""
// Boolean => has two value true /false 
// BigInt => used to big numder 
// Number => any integer 
// Null => standable value 
// undefined => undefined 
// Symbol => unique 
//console.log(typeof name); //  typeof used to see the datatype
// NaN >> Not a Numder 
let score = "Hitesh";
// console.log(typeof score);

let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

//"33" => 33;
//"33abc" => NaN
// true =>1;false =>0;

let isLoggedIn = "hitesh";

let boolearIsLoggedIn = Boolean(isLoggedIn);
//console.log(boolearIsLoggedIn);

// "" => false
// "hitesh" => true
// ************* String***************
name = "ashik";
roll = 12;
className = "Nine";

console.log(`this is me ${name} my roll is ${roll} I am in class ${className}`);

// Using the method of String

const lenghtString = ("Mubarak");

console.log(lenghtString.length); 
// Use lenght to see the lenght of a String
console.log(`The 3 index is  ${lenghtString.at (3)}`);
// use at method to see the index CharacterData

const charatString = "A crazy driver driving a car";
const index = 4;
console.log(`The character at ${index} is ${charatString.charAt(index)}`);
 
// This method is as same as at method 

const concatString1 = "Hello";
const concatString2 =  " world";
console.log(concatString1.concat(concatString2));

// The concat method connect to string 

const endswithString = "Is this is a string";
console.log(`${endswithString} ends with string ${endswithString.endsWith(" string")}`);

// use endsWith method to see whether a string endsWith the strings character this will return true/false 
const includesString = "There is a man in a village";
const includesCharacter = "man";
console.log(` Is it ${includesCharacter} includes in ${includesString} ${includesString.includes(includesCharacter)}`);

// includes method show whether a string is in a string the output will be true of false the search will be case sensitive 
 
const indexofString = "There was a farmer in a village with his family village";
const searchWord1 ="village";
const indexofFirst = indexofString.indexOf(searchWord1);
console.log(indexofFirst);

// The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring

// using the indexof variables
const searchWord2 = "village";
const indexOfLast = indexofString.lastIndexOf(searchWord2);

console.log(indexOfLast);

// The lastIndexOf() method of String values searches this string and returns the index of the last occurrence of the specified substring

const padEndString = "Mishuk";
console.log(padEndString.padEnd(44,'.'));
console.log(padEndString);
// The padEnd() method of String values pads this string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of this string.
// The padStart works differents that pads from the start 

const repeatString = "Happy!";
console.log(`I am so ${repeatString.repeat(9)}`);
// The repeat() method of String values constructs and returns a new string which contains the specified number of copies of this string, concatenated together.