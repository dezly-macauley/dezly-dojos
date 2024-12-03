// SECTION: How to use setTimeout()

// It is a built-in JavaScript function that allows you to execute a function
// after a specific amount of time has passed.

// This is the format:
// setTimeout(callback, delay);

// callback - This is the function that will be called after the delay.
// This is usually an annoymous function that follows this syntax:
// () => {},

// delay - This is how long JavaScript should wait before executing the
// function. The time must be in milliseconds. 
// E.g. If you wanted a delay of two seconds,
// then you would set the delay to 2000 seconds

// So putting it all together:
// settimeout( () => { The code you want to execute}, delay )

console.log(`Go ahead without me Jane`);

// NOTE: setTimeout is asynchronous and non-blocking.

setTimeout(
    () => {
        console.log(`Thanks for waiting Jane. I brought the pizza`);
    }, 2000
);

console.log(`Okay Seth. I'll see you at the party`);
