// NOTE: The primitive data types

// string, number
// boolean
// null, undefined

//_____________________________________________________________________________

// NOTE: const vs let

// let is for creating a variable. 
// Its value can be changed after it is declared.

// const is for creating a constant.
// Its value can't be changed.

//_____________________________________________________________________________

const myNumber: number = 18; 

console.log(`The value of myNumber is ${myNumber}`);
// The value of myNumber is 18

let cakeCost: number = 63.52;
console.log(`cakeCost is ${cakeCost}`);

//_____________________________________________________________________________

// NOTE: For strings you can use " ", ' ', or ` `

const userName: string = "Dezly"; 

console.log(`The value of userName is ${userName}`);
// The value of userName is Dezly

//_____________________________________________________________________________

let isOnline: boolean = true; 

console.log(`Is Dezly online? true or false ${isOnline}`);

// NOTE: You can also print out the variable type

console.log(typeof isOnline)
// boolean

//_____________________________________________________________________________

// NOTE: null
// This is used when you want to specify that 
// a variable does not have a value

// E.g. You have a game where you can control the fireAttackDamage of each
// character but some characters won't have this value at all, 
// because they are not fire users. Maybe they are water users.

let fireAttackDamage: null = null;
console.log(typeof fireAttackDamage);


// NOTE: null and the union operator

/*

    This is used when you want to indicate that variable intentionally does 
    not have variable type or a value

    E.g. This variable has been created to store a link to a configuration 
    file that is used to configure the battle ship of the player.
    In TypeScript the `|` is called the "union operator".
    The union operator means that a variable can have more than one 
    possilbe variable type.

    1. If the file exists then the variable type of battleShipConfigFile 
    will be a string.

    2. If the file deliberately does not exists then the variable type of 
    battleShipConfigFile is null.
    For example, the player has not reached the part of the game where
    
    they unlock the battle ship. So obviously, they won't have a config file.

*/

let battleShipConfigFile: string | null = null;
console.log(battleShipConfigFile);

//_____________________________________________________________________________

//_____________________________________________________________________________

// NOTE: undefined
// This is when an expression does not have a value, but has not been
// explicitly set to null.

// let welcomeMessage: string;  

// console.log(welcomeMessage);
// undefined

//_____________________________________________________________________________

// NOTE: The ! after the variable name is intentional
// In TypeScript this exclamation mark tells the compiler
// that playerName is a string that definately exists, and that I plan to 
// give it a value later on.
// The `!` is not part of the variable name. It is simply a marker
// Its proper name is: definite assignment assertion operator

let playerName!: string;
console.log(playerName);

//_____________________________________________________________________________

// SECTION: bigint
// Used for storing numbers that a bigger than `Number.MAX_SAFE_INTEGER`

console.log(Number.MAX_SAFE_INTEGER)
// 9007199254740991

/*
    In TypeScript (and JavaScript), Number.MAX_SAFE_INTEGER 
    is the largest integer value that can be safely represented 
    by the number type without losing precision. 
*/

// NOTE: The `n` after the number tells the TypeScript compiler that this
// number should be treated as bigint rather than a regular number

let bigNumber: bigint = 9007199254740992n;

//_____________________________________________________________________________

// SECTION: symbol

// A data type that is used as a unique identifier
// E.g. a barcode

let my_symbol = Symbol("description");

//_____________________________________________________________________________
