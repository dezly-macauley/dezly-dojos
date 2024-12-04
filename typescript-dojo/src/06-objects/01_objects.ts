// NOTE: Object

let person = {
    name: "John",
    age: 30,
    city: "Japan"
}

console.log(person.name);

// personValues is an array that can contain both strings and numbers
let personValues: (string | number)[] = Object.values(person);
console.log(personValues);
// [ "John", 30, "Japan" ]

//_____________________________________________________________________________

// NOTE: When using a For Loop to go through an Object you use
// the `let in` syntax

// How to print out the keys in an object
for (let key in person) {
    console.log(key);
}

// name
// age
// city

//_____________________________________________________________________________

// NOTE: How to combine Objects using the spread operator

const objectOne = {
    name: "Alice",
    age: 23,
}

const objectTwo = {
    hairstyle: "spiky",
    favouriteNumbers: [12, 78, 90]
}

const combinedObject = {...objectOne, ...objectTwo};
console.log(combinedObject);
/*
    {
      name: "Alice",
      age: 23,
      hairstyle: "spiky",
      favouriteNumbers: [ 12, 78, 90 ],
    }
*/

//_____________________________________________________________________________
