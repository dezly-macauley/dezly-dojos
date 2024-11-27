// NOTE: App.tsx is the main React component

// This will import the css file that controls the appearance
// of the application
import './App.css'

// NOTE: What is a React component
// `function App() {}` is a React component
// A React component is a TypeScript function that returns some kind of 
// TSX code
// Think of TSX code as a blend of TypeScript and html-like code
// The component name must always start with a capital letter.

//_____________________________________________________________________________

// NOTE: What is SWC (Speedy Web Compiler)

// SWC is a Rust-powered transpiler and compiler that has been set up in this
// project by Vite when this command was used to create the project:
// `bun create vite name-of-project --template react-swc-ts`

//_____________________________________________________________________________

// SECTION: What is the difference between transpilling vs compiling?

// NOTE: Transpiling

// Transpiling is converting one version of a language, to another version
// or from one language to another language, 
// and at the same level of abstraction (From one high level language to 
// another high level language).

// The SWC (Speedy Web Compiler) converts the TSX code into JavaScript code

// NOTE: Compiling

// Compiling typically involves transforming code in a way that makes 
// it ready for execution, optimizing it for performance or making 
// it compatible with specific environments (e.g., browsers, CPUs).

// Compiling can also be the process of converting code 
// from a high-level language (like JavaScript) into a lower-level language 
// (like machine code or bytecode). 

// In the case of SWC (Speedy Web Compiler), there is no conversion of a 
// high-level language into a low level language. The final output is still
// JavaScript code, but it has been compiled to a more performant JavaScript
// because of all of the performance optimisations. E.g. Removing unused code,
// minifying (shortening variable names, removing extra white space, and 
// removing non-functional part of the code such as comments like this),
// making the size of the final output smaller, improving loading time,
// and execution speed etc.)

// So in short, this is what SWC does:
// Transpiling: TSX to JavaScript
// Compiling: JavaScript to Optimized JavaScript

//_____________________________________________________________________________

function App() {

    return (
        <div></div> 
    )

}

export default App
