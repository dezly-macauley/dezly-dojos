// NOTE: Sets

// Sets look like arrays, but they are different

/*
    1. Each element in a set must be a unique value
    2. A set will automatically remove duplicate values

    3. Sets do not support indexing.

*/

let set: Set<number> = new Set([10, 20, 30]);

for (let value of set) {
    console.log(value);
}

// If you had a set with different values
let set2: Set<number | string> = new Set([10, "hello", "maxi", 30]);

for (let value of set2) {
    console.log(value); 
}

//_____________________________________________________________________________

// NOTE: Set methods

set2.add(19);
set2.delete("maxi");

let containsHello: boolean = set2.has("hello");
console.log(containsHello);
console.log(set2);
// Set(4) {
//   10,
//   "hello",
//   30,
//   19,
// }

console.log(set2.size);
// 4

//_____________________________________________________________________________

// NOTE: How to iterate over the values of a set

for (const value of set2) {
    console.log(value);
}

//_____________________________________________________________________________

// NOTE: Convert a set into an array

const epicArray: Array<number | string> = Array.from(set2);
console.log(epicArray);

//_____________________________________________________________________________

// NOTE: How to clear a set

set2.clear();

//_____________________________________________________________________________
