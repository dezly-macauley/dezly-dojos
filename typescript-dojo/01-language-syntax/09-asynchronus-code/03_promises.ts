// NOTE: What is a Promise

// a Promise is an object that represents 
// the eventual completion (or failure) of an asynchronous operation 
// and its resulting value.

// A Promise is used when you want to perform some action, 
// but you don't know how long it will take, 
// and there is a possibilty that the action could be unsuccesful.

// A Promise has three states:
// 1. Pending - Attempting to complete the task

// A Promise, promises to return a value:
// 2. Resolved - The task was completed successfully
// 3. Rejected - The task could not be completed

// NOTE: This is the syntax

/*
   
    return new Promise((resolve, reject) => {
      // some async operation
      let success = true; // or false, depending on the outcome of the operation

      if (success) {
        resolve("Operation was successful!"); // result of success
      } else {
        reject("Something went wrong!"); // error message
      }
    });

*/

//_____________________________________________________________________________

function walkDog() {

    return new Promise(

        (resolve, reject) => {

            setTimeout(
                () => {

                    const dogWalked: boolean = true;

                    if (dogWalked == true) {
                        resolve("Success: The dog has been walked");
                    } else {
                        reject("Error: The dog could not be found");
                    }

                }, 1500
            );

        }

    );

}

function cleanKitchen() {

    return new Promise(

        (resolve, reject) => {
            
            setTimeout(
                () => {

                    const kitchenCleaned: boolean = true;

                    if (kitchenCleaned == true) {
                        resolve("Success: The kitchen has been cleaned");
                    } else {
                        reject("Error: The kitchen could not be cleaned");
                    }

                }, 2500
            );

        }

    );

}

function takeOutTrash() {

    return new Promise(

        (resolve, reject) => {

            setTimeout(
                () => {

                    const trashTakenOut: boolean = true;

                    if (trashTakenOut == true) {
                        resolve("Success: The trash has been taken out");
                    } else {
                        reject("Error: The trash has been taken out");
                    }

                }, 500
            );

        }

    );

}

//_____________________________________________________________________________

// NOTE: How to call these functions and manage the order 
// in which they are executed

// walkDog()
//   .then((result) => {
//     console.log(result); // Logs "Success: The dog has been walked"
//     return cleanKitchen(); // Move to the next task
//   })
//   .then((result) => {
//     console.log(result); // Logs "Success: The kitchen has been cleaned"
//     return takeOutTrash(); // Move to the next task
//   })
//   .then((result) => {
//     console.log(result); // Logs "Success: The trash has been taken out"
//   })
//   .catch((error) => {
//     console.log(error); // Catches any error from any of the tasks
//   });

//_____________________________________________________________________________

// NOTE: Async Wait

async function doChores() {
  try {
    const dogWalkResult = await walkDog();
    console.log(dogWalkResult); // "Success: The dog has been walked"

    const kitchenCleanResult = await cleanKitchen();
    console.log(kitchenCleanResult); // "Success: The kitchen has been cleaned"

    const trashResult = await takeOutTrash();
    console.log(trashResult); // "Success: The trash has been taken out"
  } catch (error) {
    console.log(error); // Catches any error from any of the tasks
  }
}

doChores();

//_____________________________________________________________________________
