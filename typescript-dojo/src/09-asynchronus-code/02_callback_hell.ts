// NOTE: What is callback hell?

// This is an old pattern of handling asynchronous code in JavaScript
// This is bad practice today as it makes the code hard to read.

// You should use Promises instead.

//_____________________________________________________________________________

function walkDog(callback: () => void) {

    setTimeout(
        () => {
            console.log("Walk the dog");
            callback();
        }, 1500
    );

}

function cleanKitchen(callback: () => void) {

    setTimeout(
        () => {
            console.log("You clean the kitchen");
            callback();
        }, 2500
    );

}

function takeOutTrash(callback: () => void) {

    setTimeout(
        () => {
            console.log("You take out the trash");
            callback();
        }, 500
    );

}

walkDog(
    () => {

        cleanKitchen(
        
            () => {
                
                takeOutTrash(
            
                    () =>  {
                        console.log("You have finished all the chores");
                    }

                );

            }

        );

    }
);

//_____________________________________________________________________________
