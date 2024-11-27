// NOTE: What is the `.map()` method?

// This is a method that is used to transform each element of an array into
// something else by applying a function to each element.
// `.map()` will then return a new array that contains 
// the transformed elements

// The syntax is:
/*

    array.map((element, index, array) => {
        return transformed element
    })

*/

const listOfScores: number[] = [5, 8, 7, 9];

// I want to create a new list that is based on the listOfScores, 
// but I want each number in the list to be doubled

const listOfDoubledScores: number[] = listOfScores.map(

    // Each score in the array called listOfScores is an element
    // `(element: number)` - This means that each score in the array is a
    // number.

    // `: number` - This means that after the transformation. 
    // The variable type element that is returned will be a number.
    // E..g After each score is doubled, it will still be a number.
    
    // `=> element * 2` - This means that for each item in the array
    // .map() will double its value. The original array will NOT be changed.
    (element: number): number => element * 2

    // Finally .map() will create a new item for each element in the array
    // and then it will create a new array that contains 
    // all the doubled scores.
    // The array will then be stored in the variable `listOfDoubledScores`

);

console.log(listOfDoubledScores);
// [ 10, 16, 14, 18 ]
