// Create a map to store names and ages
// string is the key, and number is the value
let ageMap = new Map<string, number>();

// Add key-value pairs to the map
ageMap.set("Alice", 30);
ageMap.set("Bob", 25);
ageMap.set("Charlie", 35);

// Accessing values
console.log(ageMap.get("Alice")); // Output: 30

// Checking if a key exists
console.log(ageMap.has("David")); // Output: false

// Removing a key-value pair
ageMap.delete("Bob");

// Iterating over the map
for (const [name, age] of ageMap) {
  console.log(`${name} is ${age} years old.`);
}

// Getting the size of the map
console.log(ageMap.size);
