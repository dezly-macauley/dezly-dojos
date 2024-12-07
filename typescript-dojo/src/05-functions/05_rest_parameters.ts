// NOTE: These allow a function to accept any number of arguements

function addNums(...numbers: number[]): number {
    return numbers.reduce((sum, num) => sum + num, 0);
}

let total: number = addNums(5, 5, 8);
console.log(total);
