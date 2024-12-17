// SECTION: ReferenceError (with no error handling)

// console.log(userName);

// ReferenceError: Can't find variable: userName
// A ReferenceError happens when you try to use a variable that doesn't exist.
// The program throws an error

// When a ReferenceError happens the program stops and the next line of code
// will not be executed

// console.log("Welcome to TypeScript Land");

//_____________________________________________________________________________

// SECTION: Error Handling with `try, catch, and finally`
// ===========================================================================
// 1. try {} 
// This is where you put any code that has the potential to throw an error,
// so that it can be observed.
// ===========================================================================
// 2. catch {}
// This is where you tell the program how to handle the error
// ===========================================================================
// 3. finally {}
// This is block is optional.
// This is where you put some code or action that should ALWAYS be executed,
// regardles of whether there was an error or no error.
// ===========================================================================

try {
    console.log(userName);
} catch(error) {
    console.error(error);
} finally {
    // This block is usually used for closing any resources that were opened
    // in the the try block.
    // E.g. closing a file after trying to read from it.
    console.log("This message will always be displayed.")
}

// This line of code will now be executed because the error was handled by
// the `try catch` block
console.log("Welcome to TypeScript Land");

//_____________________________________________________________________________

// Monster being observed in case it tries to escape
// How the gaurds should handle catching the monster
// finally what should be done regardles of the result

// 1. try {} 
// This is where you place some code that has the potential to fail
// Think of the try block as a observation room, with guard ready to take
// action 
// 2. catch {}
// Lets you handle the error
// 3. finanlly {}


//_____________________________________________________________________________

// SECTION: ReferenceErrors from undefined variables

// The code below will result in an error
// ReferenceError: Can't find variable: a
// This is because a and b were not defined.  

// console.log(a + b);
// console.log("This line is never reached");

//_____________________________________________________________________________

// SECTION: How to deliberately create a ReferenceError

// throw new ReferenceError("I am deliberately creating a error");
// ReferenceError: I am deliberately creating a error

//_____________________________________________________________________________

// SECTION: Error Handling with a `try catch` block

// NOTE: You can rename `err` to whatever you want but the common convention
// is `err`

try {
    // Place the code that you has the potential to "throw" an error
    console.log(a + b);

} catch(err) {

    // Place what you want to happen after the error has occured

//_____________________________________________________________________________

    // NOTE: METHOD 1 - Irrecoverable Error
    // deliberately throw an error
    // If you use this method the next lines of code of the program will not
    // not be executed.

    // throw new ReferenceError(`The values for a and b could not be found`);

//_____________________________________________________________________________

    // NOTE: Method 2 - Recoverable Error
    // console log an error
    // If you use this method the next line of code after the
    // `try catch` block will BE executed.

    // This will return the error without stopping the flow of the program
    // console.error(err);

    // This will generate a custom error
    // console.error(`The values for a and b could not be found`);

    // console.error(`The values for a and b could not be found: ${err}`);

//_____________________________________________________________________________


}

// console.log("This line is reached because the error was handled");

//_____________________________________________________________________________
