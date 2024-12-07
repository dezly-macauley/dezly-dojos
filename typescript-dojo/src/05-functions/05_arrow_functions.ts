// NOTE: You can also use the arrow function syntax 

const arrowAddTwo = (x: number, y: number): number => {
    return x + y
};

console.log(arrowAddTwo(2, 3));
//_____________________________________________________________________________

// NOTE:
// If a single expression is returned by an arrow function,
// you can omit the curly braces and the return type

const arrowAddTwoSimplified = (x: number, y: number): number => x + y;
console.log(arrowAddTwoSimplified(8, 2));

//_____________________________________________________________________________
