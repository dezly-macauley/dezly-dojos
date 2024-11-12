package main

import (
	"fmt"
)

type Person struct {
	Name string
	Age  int
}

func main() {

	// Create an instance of Person
	person1 := Person{ Name: "Tsunade", Age: 60 }

    fmt.Println("person1's name is:", person1.Name)
    fmt.Println("person1's age is:", person1.Age)

}
