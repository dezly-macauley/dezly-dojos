// NOTE: What is the `.reduce()` method?

// This is a method in TypeScript that is available to all variable types
// that meet the requirement of being an array.
// I.e. The variable has elements, reduce all of those elements to a single
// value.

// E.g. The .reduce() method can be used on the array `listOfScores`,
// to add all of the elements and then return a single element (the total).
// This single element can then be assigned to a variable.
const listOfScores: number[] = [5, 8, 7, 9];

//_____________________________________________________________________________

// NOTE: The syntax is:
/*

    let final_result = name_of_original_array.reduce(

        (accumulator: variable_type, element: variable_type) => {
            // Combine the accumulator with the current element

            return modified_accumulator;
        }, 
        
        initial_value_of_accumulator
    );

*/

const totalScore: number = listOfScores.reduce(
   
    // The accumulator is a variable that keep track of the total
    // The element is each number in the array
    // `(): number` means that the function will always return a variable 
    // type that is a number. I.e. The accumulator + the element
    (accumulator: number, element: number): number => {

        // Add the current element to the accumulator
        // For each number add the element to the accumulator
        return accumulator + element;

    }, 0
    // NOTE: Don't forget to set the initial value of the accumulator
    // In this case it starts at 0
);

console.log(totalScore);
// 29
