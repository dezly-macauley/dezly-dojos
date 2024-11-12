package main

import "fmt"

//_____________________________________________________________________________

// SECTION: Variadic Functions
// A variadic function is a function that can accept an unspecified number
// of arguements

// The parameter `listOfNums` must be a slice of integers
func addNumbers(listOfNums ...int) int {

    total := 0

    // NOTE: The syntax when using range is `for index, value`
    // For this loop, I don't need the index of each value in the list 
    // I simply need the value of each item in `listOfNums`

    for _/*ignoring the index*/, value := range listOfNums {
        total += value 
    }

    return total

}

//_____________________________________________________________________________

func main() {

    var answer int = addNumbers(5, 5, 5) 
    fmt.Println("The answer is:", answer)
    // The answer is: 15


    // NOTE: You can also pass in a created slice

    scores := []int{10, 10, 5}
    totalOfScores := addNumbers(scores...)
    fmt.Println("The answer is:", totalOfScores)
    // The answer is: 25

}
