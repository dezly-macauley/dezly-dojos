// NOTE: Destructuring lets you assign the values of an array into
// variables.

const myArray: string[] = [ "Dezly", "Macauley" ]; 

let firstName: string;
let lastName: string;

[ firstName, lastName ] =  myArray;

console.log(firstName);
console.log(lastName);

//_____________________________________________________________________________

// NOTE: The spread operator `...`

// This can be used to collect a bunch a elements in an array and add it to
// a new array

const listOfNumbers: number[] = [ 12, 18, 21, 7, 3 ]

let firstNumber: number; 
let secondNumber: number; 

let restOfNumbers: number[];

[ firstNumber, secondNumber, ...restOfNumbers ] = listOfNumbers;

console.log(firstNumber);
console.log(secondNumber);
console.log(restOfNumbers);
// 12
// 18
// [ 21, 7, 3 ]

//_____________________________________________________________________________
