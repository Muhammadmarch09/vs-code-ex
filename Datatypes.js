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

const replaceString = "My dog is cuter than your dog";

console.log(replaceString.replace("dog","cat"));
console.log(replaceString);
console.log(replaceString.replaceAll("dog","monkey"));
// The replace() method replace a matching string and return a new string 
// The replaceAll() method replace all the match string and also return a new string 

const sliceString = "There is a good boy in Dhaka . He so honest";
console.log(sliceString.slice(1,14));
console.log(sliceString.slice(20,28));
console.log(sliceString.slice(-12));

// The slice() method can devide a string by given the index number the index could be negetive also 
// This will return a new string 

const splitString = "I am Muhammad Mubarak and I went to succed in life";
const splitArray = splitString.split(' ');
console.log(splitArray);

// The split() method return an Array search on w3school to learn more

const startswithString = "Hello this me Muhammad Mubarak";
console.log(startswithString.startsWith("Hello"));
console.log(startswithString.startsWith("Hello",1));  // we can also give a index point this will return false 

// The startsWith() method show that the string starts with which string and return true or false 

const substringString = "Hello world";
console.log(substringString.substring(1,4));
console.log(substringString.substring(4));
console.log(substringString.substring(-6,6));

// The substring() method extract a string by given the index value 

const caseString = "Hello world";
console.log(caseString.toLocaleLowerCase());
console.log(caseString.toLocaleUpperCase());
console.log(caseString.toLowerCase());
 
// Those method works on case The toLocaleLowerCase() method and toLowerCase are same method 

const trimString = "       This is a string with white spaces      " ;
console.log(trimString);
console.log(trimString.trim());

// The trim() method delete the white spaces from start and end of a string 
// also the trimStart() and trimEnd() method works to start and end 

// ************ End of string methods *********
// ************* Starting Number methods ********* 

const balance = 40;
console.log(balance.toString().length); 
// with toString() method we can change a number to a string and cheque the lenght of the number 
console.log(balance.toFixed(2)); // The output will be 40.00
// The toFixed() method give the power how many number you need after the point usually we use 2 
const fifties = 100000;
// This will show american style commas
console.log(fifties.toLocaleString()); 
// This will show indian style commas
console.log(fifties.toLocaleString('en-In'));

// ***************Math Methods**************

console.log(Math.round(4.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

// Generating a random number from 1 to 10
console.log(Math.floor(Math.random()*10) +1);





