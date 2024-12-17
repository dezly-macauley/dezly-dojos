// NOTE: A parametized function that returns something

let amount1: number = 10;
let amount2: number = 9;

function addTwo(num1: number, num2: number): number {
    let total: number = num1 + num2;
    return total;
}

let answer: number = addTwo(amount1, amount2);
console.log(`${amount1} plus ${amount2} is equal to ${answer}`);

//_____________________________________________________________________________
