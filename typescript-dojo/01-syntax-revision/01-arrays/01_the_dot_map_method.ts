// NOTE: What is the `.map()` method?

// This is a method in TypeScript that is available to all variable types
// that meet the requirement of being an array.
// I.e. The variable has elements, and you can go through each element.

// E.g. This meets the requirements so you can use the .map() method on the
// variable `listOfScores`
const listOfScores: number[] = [5, 8, 7, 9];

//_____________________________________________________________________________

// NOTE: Why would you use the .map() method

// Let's say I wanted to create a new array called `listOfScoresDoubled`

// I want this list to be a copy of all of the elements in the original array,
// `listOfScores`, but I want each number in the new array to be double what
// its value was in the original array.

// The .map() method is used when you want to create a new array that
// contains modified versions of each element in the original array.
// The .map() method does NOT affect the original array or the elements
// of the original array.

// You will supply the .map() method with a function that will perform the
// modification on each element.
// And then once the last element has been modified, the .map() method
// will then return a new array that can be stored in a variable.

//_____________________________________________________________________________

// NOTE: The syntax is:
/*

    let variable_that_will_store_the_new_array = name_of_original_array.map(

        (element: variable_type): variable_type_after_modification => {
            The modification that you want to apply to each element

            return modified_element_and_add_it_to_the_new_array;
        }        
        
    );

*/

const listOfDoubledScores: number[] = listOfScores.map(
   
    // Each element in the original array is a number, 
    // and after it is modified, it will still be a number.
    (element: number): number => {

        // For each element, double its value,
        let modifiedElement = element * 2;

        // return the modified element to the new array. 
        return modifiedElement;

    }

);

console.log(listOfDoubledScores);
// [ 10, 16, 14, 18 ]
