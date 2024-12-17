// NOTE: For Loop

// Initialization = This is where you set a loop control variable
// Usually you would use the name "i"
// i will be assigned a value BEFORE the loop starts

// Condition = This is a condition that will be checked BEFORE the loop runs
// If the condition is true, the loop runs again. If the condition is false,
// the loop will not execute

// Update = Updates the loop control variable at the END of each loop

for (let floor_number: number = 1; floor_number <= 3; floor_number++) {
    console.log(`You are at floor number: ${floor_number}`);

    // You are at floor number: 1
    // You are at floor number: 2
    // You are at floor number: 3

}

//_____________________________________________________________________________

// NOTE: A simpler way to print the values of an array

const listOfScores: number[] = [27, 81, 32];

for (let value of listOfScores) {
    console.log(value);
}

//_____________________________________________________________________________

// NOTE: 
// If you wanted the index of each value as well then you need to use
// listOfScores.entries() and not just listOfScores
// also remember to use `of` and not in 
// or you will get some unexpected results

for (let [index, value] of listOfScores.entries()) {
    console.log(index, value);
}

// 0 27
// 1 81
// 2 32

//_____________________________________________________________________________

// NOTE: While loop

let cookies_in_jar: number = 4; 

while (cookies_in_jar > 2) {

    console.log(`==============================================`);
    console.log(`Start of loop:`);
    console.log(`There are still ${cookies_in_jar} cookies left`);
    console.log(`I'll eat one`);
    cookies_in_jar = cookies_in_jar - 1; 
    console.log(`There are now ${cookies_in_jar} cookies left`);

    // ==============================================
    // Start of loop:
    // There are still 4 cookies left
    // I'll eat one
    // There are now 3 cookies left
    // ==============================================
    // Start of loop:
    // There are still 3 cookies left
    // I'll eat one
    // There are now 2 cookies left

}

//_____________________________________________________________________________

// NOTE: Do while loop

// A do while loop checks the condition only AFTER the loop runs
// You would use this when you want to make sure that a certain action is
// always performed at least once.

let count = 1;

do {
    console.log("Count is: " + count);
    count++;
} while (count <= 3);

// Count is: 1
// Count is: 2
// Count is: 3

//_____________________________________________________________________________
