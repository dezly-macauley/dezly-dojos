# How to create a module in Go
_______________________________________________________________________________

### What is a module?

A module is simply a directory that contains Go files that are related in
some way. The purpose of a library is to create Go code that can be re-used
by other programs.

And it helps to group code into sections, so that the program is more modular.
This is a better approach than just having one gigantic `main.go` file that
is cluttered with all the code in your program.

E.g. A directory called `simplefunctions` that contains Go functions
that can be used by other programs.

NOTE: The name must be in lowercase with no hyphens 
or underscores in the name

https://google.github.io/styleguide/go/decisions.html#package-names

_______________________________________________________________________________

### Step 1: Create a directory for the project at the root of your project

```
mkdir simplefunctions
```

You should already have a go.mod file at the root of your project
```c
├── go.mod
└── simplefunctions
```
_______________________________________________________________________________

### Step 2 - Add Go files to module

```c

├── go.mod
└── simplefunctions
    ├── math_functions.go
    └── message_functions.go

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

simplefunctions/math_functions.go
```go

package simplefunctions

func AddTwoNumbers(num1 int, num2 int) int {
    return num1 + num2
}

```

_______________________________________________________________________________

simplefunctions/message_functions.go

```go

package simplefunctions

import "fmt"

func ShowWelcomeMessage() {
    fmt.Println("Welcome to the Go Training Lab")
}

```
_______________________________________________________________________________

### Step 3: Use the module in a `main.go` file

The `cmd` directory is the equivalent of `src` in other programming languages.

You can have multiple programs inside the `cmd` directory

each program has a `main.go` file. This tells Go that this is the start of
the program.
_______________________________________________________________________________

```go
.
├── 01-guides
│   ├── 01_creating_go_projects.md
│   └── 02_creating_modules_and_running_go_programs.md
├── cmd
│   ├── 01-printing-to-the-terminal
│   │   └── main.go
│   └── 02-using-modules
│       └── main.go
├── go.mod
├── README.md
└── simplefunctions
    ├── math_functions.go
    └── message_functions.go
```
_______________________________________________________________________________

Let's say I wanted to run the program `02-using-modules`, 
this is how to do that:

First navigate to the root directory of your project,
and then run this command:

```
go run ./cmd/02-using-modules
```

The output should be:

Welcome to the Go Training Lab
The total cost is 18

_______________________________________________________________________________
