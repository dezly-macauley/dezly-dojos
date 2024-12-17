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
)(book_price, chocolate_price); 
// Immediately invoke the function with arguments

console.log(purchase_message);

//_____________________________________________________________________________
