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
