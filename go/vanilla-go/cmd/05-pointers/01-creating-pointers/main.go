package main

import (
    "fmt"
)

//_________________________________________________________________________

    // SECTION: Pass by value
    // In Go function calls are "pass by value"
    // This means that when you pass an arguement into a function, 
    // that function receives a copy of what you passed in.

    // NOTE: You have to be mindful of this behaviour when creating programs
    // in Go.
    // ----------------------------------------------------------------------
    // This function will accept a COPY of the integer `num`
    // It will then increase the value of the COPY by 5, 
    // and then print the value of the COPY 
    // Once the function has completed this value is simply discarded.
    // ----------------------------------------------------------------------
    // So in simple terms, if the value of the ORIGINAL num was 10,
    // the value of the ORIGINAL after this function has been called will 
    // STILL be 10!
    // This function does not modify the ORIGINAL variable

    func incrementCopyOfNum(num int) {
        num += 5
        fmt.Println(num)
    }

//_________________________________________________________________________

// SECTION: Pass by reference

// This is when you give a function a pointer as an arguement. 
// In this case the value of the original variable IS changed.

    // This function accepts a pointer to an integer
    func incrementOriginalNum(num *int) {

        // Here the asterisk is used to dereference the pointer
        // that was passed into the function

        // dereferencing simply means "I want do something to the value
        // of the variable where the pointer is pointing to" 
        // Or in simpler terms, "I want to modify the value of the original"
        *num += 5

        // Over here I am dereferencing the pointer because I don't want
        // to print the memory address of the pointer, 
        // I want to print the value.
        fmt.Println(*num)
        // 15
    }

//_________________________________________________________________________


func main() {

    var userCount int = 10

    //_________________________________________________________________________

    // SECTION: Creating a pointer

    // NOTE: To create a pointer you have to use `*` (called an asterisk),
    // and `&` (called and ampersand)
    // ---------------------------------------------------------------------
    // `*int` means that the variable type of `userCountPointer` is a pointer
    // that is pointing to the memory address of an integer
    // ---------------------------------------------------------------------
    // `&userCount` is the memory address (think of this as a location in
    // the memory of a program) where the value of the variable userCount is
    // being stored.
    var userCountPointer *int = &userCount

    fmt.Println("userCount is stored at the memory address", userCountPointer)
    // Output:
    // userCount is stored at the memory address 0xc000012100

    //_________________________________________________________________________
   
    // SECTION: Pass by value in action

    incrementCopyOfNum(userCount)
    fmt.Println(userCount)
    // Output:
    // 10
    
    //_________________________________________________________________________

    // SECTION: Pass by reference in action 

    incrementOriginalNum(userCountPointer)
    fmt.Println(userCount)
    // Output:
    // 15

    //_________________________________________________________________________

}
