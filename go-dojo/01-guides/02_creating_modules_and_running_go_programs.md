# How to create a module in Go
_______________________________________________________________________________

### First create a directory that will store all of your modules directories

```
mkdir pkg
```
_______________________________________________________________________________

### What is a module?

A module is simply a directory that contains Go files that are related in
some way. The purpose of a library is to create Go code that can be re-used
by other programs.

And it helps to group code into sections, so that the program is more modular.
This is a better approach than just having one gigantic `main.go` file that
is cluttered with all the code in your program.
_______________________________________________________________________________
### Step 1: Create your first module

NOTE: The name must be in lowercase with no hyphens 
or underscores in the name

https://google.github.io/styleguide/go/decisions.html#package-names

```
cd pkg 
mkdir myfirstmodule
```

This should be your structure so far.
You should already have a go.mod file at the root of your project
```c
.
├── go.mod
└── pkg
    └── myfirstmodule
```
_______________________________________________________________________________
### Step 2 - Add Go files to the module

NOTE: snake case is prefered for file names in Go

```
touch math_functions.go
touch message_functions.go
```

```c
.
├── go.mod
└── pkg
    └── myfirstmodule
        ├── math_functions.go
        └── message_functions.go
```
_______________________________________________________________________________
### Add this code to the files inside the module

pkg/myfirstmodule/math_functions.go
```go

package myfirstmodule

import (
    "fmt"
)

func AddTwoNumbers(num1 int, num2 int) {
    total := num1 + num2
    fmt.Printf("The total of %d + %d = %d\n", num1, num2, total)
}

```
_______________________________________________________________________________

pkg/myfirstmodule/message_functions.go

```go

package myfirstmodule

import (
    "fmt"
)

func WelcomeTheUser(name string) {
    fmt.Println("Welcome to the Go Dojo, " + name)
}

```
_______________________________________________________________________________
NOTE: Pay attention to the capitalization of function names in Go!!!

If a function name starts with a `Capital letter`, 
like `AddTwoNumbers` this tells Go that this is a `public function` 
and that the function can be used by a program outside
this module.

If a function name starts with a `lowercase letter`, 
like `addTwoNumbers` this tells Go that this is a `private function` 
and that the function can only used by 
programs within the `simplefunctions` module
_______________________________________________________________________________

### Step 3: Use the module in a `main.go` file

The `cmd` directory is the equivalent of `src` in other programming languages.

You can have multiple programs inside the `cmd` directory

each program has a `main.go` file. This tells Go that this is the start of
the program.
_______________________________________________________________________________

Create this file structure

```go
.
├── cmd
│   └── 01-using-modules
│       └── main.go
├── go.mod
└── pkg
    └── myfirstmodule
        ├── math_functions.go
        └── message_functions.go
```
_______________________________________________________________________________
### Use your module in main.go

cmd
```go

package main

import (
    "go-dojo/pkg/myfirstmodule"
)

func main() {
    myfirstmodule.AddTwoNumbers(5, 7)
    myfirstmodule.WelcomeTheUser("Dezly Macauley")
}

```
_______________________________________________________________________________

Let's say I wanted to run the program `01-using-modules`, 
this is how to do that:

First navigate to the root directory of your project,
and then run this command:

```
go run ./cmd/01-using-modules
```

The output should be:
The total of 5 + 7 = 12
Welcome to the Go Dojo, Dezly Macauley

_______________________________________________________________________________
