// NOTE: This is a non-parametized funtion, that doesn't return anything

let cakes_available: number = 4;
console.log(`There are ${cakes_available} cakes left`);

function eatCake(): void {
    cakes_available = cakes_available - 1;
}

eatCake();
console.log(`There are ${cakes_available} cakes left`);

//_____________________________________________________________________________

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

// NOTE: A function expression
// The function is defined in variable and the return of that function is 
// assigned to the variable

let book_price: number = 800;
let chocolate_price: number = 500;

let purchase_message: string = (
    function(price1: number, price2: number): string {
        let total: number = price1 + price2;

        if (total > 1000) {
            return "You qualify for a 20% discount";
        } else {
            return "Order completed";
        }
    }
)(book_price, chocolate_price); // Immediately invoke the function with arguments

console.log(purchase_message);

//_____________________________________________________________________________
