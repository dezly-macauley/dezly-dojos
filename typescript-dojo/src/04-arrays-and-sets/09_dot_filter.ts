// Define a type for the objects in the array
type Person = {
    name: string;
    age: number;
};

// Sample array of objects
const people: Person[] = [
    { name: 'Alice', age: 50 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 19 }
];

// Use the filter method to find people who are older than 30
const olderThan30: Person[] = people.filter(person => person.age > 30);

// Log the result
console.log(olderThan30);
