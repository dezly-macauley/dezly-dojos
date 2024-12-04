// NOTE: This will delete an element from an array 

const names: string[] = ["Tom", "Brad", "Kim", "James"];

// The syntax is:
// .splice(the index to start from, the number of elements to delete)

// This means start from index 0, and delete two elements
names.splice(0, 2);
console.log(names);
// [ "Kim", "James" ]
