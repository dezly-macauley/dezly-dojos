// NOTE: Ternary Operator
// This let's you assign a value to a variable, based on the status of
// another variable

let driver_name: string = "Joker";

let batmobile_message: string =
    (driver_name == "Batman") ? "Batmobile activated" : "Unauthorized User!";

console.log(driver_name);
console.log(batmobile_message);

// If the condition driver_name is true then "Batmobile activated will be
// assigned to the variable "batmobile_message"

//_____________________________________________________________________________

// NOTE: Another example:

let shopStatus = "OPEN";

function toggleshopStatus() {

    // NOTE: `?` This is the ternary operator
    // It is a shorthand for an if else statement.
    // The syntax is:
    // variableName = (condition) ? valueIfTrue : valueIfFalse;

    shopStatus = (shopStatus === "OPEN") ? "CLOSED" : "OPEN";

    // If shopStatus is "OPEN" then this function will set the value to "CLOSED"
    // and vice versa.

}

console.log(shopStatus);
toggleshopStatus();
console.log(shopStatus);

//_____________________________________________________________________________
