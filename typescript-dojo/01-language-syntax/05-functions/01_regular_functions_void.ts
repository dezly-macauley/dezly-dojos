// NOTE: This is a non-parametized funtion, that doesn't return anything

let cakes_available: number = 4;
console.log(`There are ${cakes_available} cakes left`);

function eatCake(): void {
    cakes_available = cakes_available - 1;
}

eatCake();
console.log(`There are ${cakes_available} cakes left`);

//_____________________________________________________________________________

// NOTE: hoisting:
// when it comes to regular functions, their declarations is hoised
// to the top of the scope that they are in.
// This allows you to use a function before the lines that declare it. 

console.log(regularAddTwo(2, 1));

function regularAddTwo(x: number, y: number): number {
    return x + y;
}

//_____________________________________________________________________________
