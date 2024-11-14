// ABOUT: The structure of a basic Go program
// ---------------------------------------------------------
// Every Go program belongs to a package.
// A package is a collection of functions and methods
// For an executable, the package has to be called "main"

package main

// This imports the "fmt" package from the standard library
// This is a allows you to use the Println function,
// from the Go standard library
import "fmt"

// The main function is the entry point of every Go program
func main() {
	fmt.Println("Hello, World!")
}
