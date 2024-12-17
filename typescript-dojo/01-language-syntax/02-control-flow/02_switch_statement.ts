let driverName = "Batman";

switch (driverName) {
    case "Batman":
        console.log("The dark knight is in the batmobile");
        break;
    case "Joker":
        console.log("Joker has stolen the batmobile");
        break;
    default:
        console.log("There is an unknown person in the batmobile");
        break;
}

// NOTE:
// break is needed if the statement is executing some code.
// E.g. console.log();
// break is not needed if the statement is returning something 
// with the `return` keyword
