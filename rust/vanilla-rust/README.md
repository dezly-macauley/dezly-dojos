# Vanilla Rust - Training Lab
_______________________________________________________________________________

### The structure of this lab

```c
.
├── Cargo.toml
├── README.md
└── src
    ├── 01-guides
    │   ├── 01_creating_a_rust_project.md
    │   ├── 02_multiple_independent_programs_in_one_repo.md
    │   └── 03_running_a_program.md
    ├── bin
    │   ├── 01-printing-to-the-terminal
    │   │   └── main.rs
    │   └── 02-using-modules
    │       └── main.rs
    ├── lib.rs
    └── simple_functions
        ├── math_functions.rs
        ├── message_functions.rs
        └── mod.rs

```
_______________________________________________________________________________

### How to run a program

Each directory inside the `bin` directory is a Rust program.

E.g. Let's say I wanted to run the program `01-printing-to-the-terminal`

Open the terminal and run this command from anywhere in the directory.
(As long as you are inside the `vanilla-rust` directory, it will work)

```
cargo run --quiet --bin 01-printing-to-the-terminal
```
_______________________________________________________________________________

### For more info check out the documentation inside `01-guides`

_______________________________________________________________________________
