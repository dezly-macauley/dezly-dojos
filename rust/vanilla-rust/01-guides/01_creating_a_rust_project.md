```
cargo new name-of-rust-project
```

This will create a Rust project (specifically a binary create) 
in the directory

NOTE: Hyphens are fine for the directory name but Rust prefers underscores
for the name of the crate.

So go to the `Cargo.toml` file and replace the hyphen with an underscore

Cargo.toml
```toml

[package]
name = "vanilla_rust"
version = "0.1.0"
edition = "2021"

[dependencies]
```
_______________________________________________________________________________

### If you wanted to create a library crate

```
cargo new name-of-library-project --lib
```
_______________________________________________________________________________
