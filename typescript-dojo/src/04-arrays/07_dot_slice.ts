const userName: string = "Kevin";
/*
    index 0 = "K"
    index 1 = "e" 
    index 2 = "v" 
    index 3 = "i" 
    index 4 = "n" 
*/

// This means give me a copy of the letter in the array starting at index 0,
// and keep going until you reach index 3, but EXCLUDE the value at index 3. 
const firstThreeLetters: string = userName.slice(0, 3);
console.log(firstThreeLetters);
// Kev
