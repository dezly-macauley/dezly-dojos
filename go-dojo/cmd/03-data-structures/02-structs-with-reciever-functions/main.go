package main

import (
	"fmt"
)

type Person struct {
	Name string
	Age  int
}

//_____________________________________________________________________________

// NOTE: This is a receiver function.
// `func (p Person)` shows that it is not a stand alone function.
// It is a method that can be used by instances of the `Person` struct
// This is a getter method

// In this example the purpose of this function is to simply return the 
// "Name" field of the instance. So it is simply a "get method" or a function
// that needs to read information from the instance.
// Since this function does not need to modify the original instance, 
// the instance is passed in as a COPY aka pass by value.
func (p Person) GetName() string {
	return p.Name
}

//_____________________________________________________________________________

// NOTE: In this case its pass by refence because this functions need to 
// be able to update the `Name` field of the instance
// This is a `setter method`

// Pointer receiver function (Set method)
// This method modifies the original struct, so we use a pointer receiver.
func (p *Person) SetName(newName string) {
	p.Name = newName
}
//_____________________________________________________________________________

func main() {

	person1 := Person{Name: "Jason", Age: 27}

    fmt.Println("Person 1's name is:", person1.GetName())
    fmt.Println("Person 1's age is:", person1.Age)

	person1.SetName("Alex")
    fmt.Println("Person 1's name is now:", person1.GetName())

}
