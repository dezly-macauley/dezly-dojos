// An empty array of 5 elements
let myEmptyArray = new Array(5)
console.log(myEmptyArray);

let myArray: number[] = [1, 3, 8, 9];

// How to change the value of an array
myArray[0] = 10;

// How to target the last element in an array
console.log(`The last number in the array is ${myArray.length -1}`)

// Add a value to the end of an array
myArray.push(10);

// Remove the last element in the array.
myArray.pop();

// How to check if something is included in the array.
// This will return a boolean

let names: string[] = [ "Mei", "Hinata"];

console.log(names.includes("Mei"));
