package main

import (
    "fmt"
    "vanilla-go/simplefunctions"
)

func main() {

    simplefunctions.ShowWelcomeMessage()
    var totalCost int = simplefunctions.AddTwoNumbers(10, 8)

    fmt.Println("The total cost is", totalCost)

}
