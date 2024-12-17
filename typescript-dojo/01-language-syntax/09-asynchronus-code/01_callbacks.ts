// NOTE: What is a callback function?
// It is a function that is passed as an argument into another function 
// and is typically invoked later, 
// usually after some asynchronous operation or task has been completed.

// NOTE: callback: () => void
// This is specific to TypeScript. I am simply declaring that within this
// function the parameter `callback` 
// is a function that does not return anything

// NOTE: When it comes to asychronus code, callbacks are an old pattern
// Use async/await or Promises instead


function task1(callback: ()=> void) {

    setTimeout(
        () => {
            console.log("Task 1 completed");
            callback();
        }, 2000 // execute the code inside the curly braces after 2 seconds
    );

}

function task2() {
    console.log("Task 2 activated");
}

task1(
    () => {
        task2();
    }
);

console.log("Welcome");


// Welcome
// Task 1 Completed
// Task 2 activated
