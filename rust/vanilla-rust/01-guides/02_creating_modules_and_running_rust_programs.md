# How to create a module in Rust
_______________________________________________________________________________

### What is a module?

A module is simply a directory that contains Rust files that are related in
some way. The purpose of a library is to create Rust code that can be re-used
by other programs.

And it helps to group code into sections, so that the program is more modular.
This is a better approach than just having one gigantic `main.rs` file that
is cluttered with all the code in your program.

E.g. A directory called `simple_functions` that contains Rust functions
that can be used by other programs.

_______________________________________________________________________________

### Step 1: Navigate to the `src` directory of your project

```c
└── src
```
_______________________________________________________________________________

### Step 2: Create a `lib.rs` file in the root of `src`

```c
└── src
    ├── lib.rs
```
_______________________________________________________________________________

### Step 3: Create the module in the root of `src`

I have created a directory called `simple_functions`. You can call your 
module whatever you want, just make sure to use lower case, and separate
words with an underscore (no hyphens!)

```c
└── src
    ├── lib.rs
    └── simple_functions
```
_______________________________________________________________________________

### Step 4: Declare the module in `lib.rs` and make it public 

Open the lib.rs file and add this

```rust

// NOTE: `lib.rs` is where you declare all of the modules in your project 

pub mod simple_functions;

```
_______________________________________________________________________________

### Step 5: Add some Rust files inside the modules directory

These files are known as sub-modules, 
because they collectively form the module

```c
└── src
    ├── lib.rs
    └── simple_functions
        ├── math_functions.rs
        ├── message_functions.rs
```
_______________________________________________________________________________

### Step 6 - Create a `mod.rs` file inside the directory of the module

```c
└── src
    ├── lib.rs
    └── simple_functions
        ├── math_functions.rs
        ├── message_functions.rs
        └── mod.rs
```

_______________________________________________________________________________

### Step 7 - Declare the sub-modules inside the `mod.rs` file

Every module in Rust must have a `mod.rs` file

This will tell Rust that each of the files 
`math_functions.rs` and `message_functions.rs` are sub-modules that
collectively form one module called `simple_functions`

The `pub` keyword means that the module can be accessed by files outside of
the `simple_functions` module

```rust
// SECTION: Declaring the sub-modules of the `simple_functions` module

pub mod math_functions;
pub mod message_functions;

```
_______________________________________________________________________________

### Step 8 - Now that the structure is complete, add code to the sub-modules

#### NOTE: Functions in Rust are private by default

By default functions in Rust are private.
This means that a function can only be accessed by files within the same
module. In this example if the function `add_two_numbers` 
did not have the pub keyword. 
Only files within the `simple_functions` directory 
would be able to use it.

#### NOTE: The `pub` keyword 
This keyword tells Rust to allow this function to be accessed by
a file that is outside of the directory `simple_functions`

_______________________________________________________________________________

math_functions.rs

```rust
pub fn add_two_numbers(num1: i32, num2: i32) -> i32 {
    num1 + num2 
}
```
_______________________________________________________________________________

message_functions.rs

```rust
pub fn show_welcome_message() {
    println!("Welcome to the Rust Training Lab");
} 
```

_______________________________________________________________________________

### Step - 9 How to use the functions in these modules in a program

Create a `bin` directory in the `src` directory.
Next create a directory in inside `bin` with the name of your program.

I have created a program called `02-using-modules` 

Every Rust program should have a `main.rs` file. This tells Rust where to
start executing the program.

You can have multiple indepent Rust programs in the `bin` directory.

```c
.
├── Cargo.toml
├── README.md
└── src
    ├── bin
    │   └── 02-using-modules
    │       └── main.rs
    ├── lib.rs
    └── simple_functions
        ├── math_functions.rs
        ├── message_functions.rs
        └── mod.rs
```
_______________________________________________________________________________

Open the `main.rs file` and start using the modules

main.rs
```rust

// NOTE: How to import modules in your code

use vanilla_rust::simple_functions::message_functions;
use vanilla_rust::simple_functions::math_functions;

fn main() {

    message_functions::show_welcome_message();
    let total_cost: i32 = math_functions::add_two_numbers(10, 8);

    println!("The total cost is {}", total_cost);

}

```
_______________________________________________________________________________

### To run the program:

```
cargo run --quiet --bin 02-using-modules
```

The output should be:

Welcome to the Rust Training Lab
The total cost is 18

_______________________________________________________________________________
