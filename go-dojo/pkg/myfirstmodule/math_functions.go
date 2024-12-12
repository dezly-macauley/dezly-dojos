package myfirstmodule

import (
    "fmt"
)

func AddTwoNumbers(num1 int, num2 int) {
    total := num1 + num2
    fmt.Printf("The total of %d + %d = %d\n", num1, num2, total)
}
