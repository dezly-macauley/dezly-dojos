<?php

    // NOTE: Overview of PHP scalar data types:
    // Scalar Data Types: int, float, bool, string
    // Special Data Types: null
    // Compound Data Types: array

//______________________________________________________________________________

    // NOTE: Enabling strict type checking
    // By default PHP will attempt to convert values into
    // the correct type when there is a mismatch. This could lead to bugs. 

    // This tells PHP to enforce strict type checking for function
    // parameters and return types
    // 1 = true, and 0 = false
    // By default, this is set to 0 in PHP
    declare(strict_types = 1);

//______________________________________________________________________________

// NOTE: int (Integers) - Positive and negative numbers without decimals

$account_balance = -50;
$cart_total = 800;

// If you want to make a large number more readable in your PHP code,
// use underscores.
$total_users = 28_783_272;
// This will be displayed as 28783272

//______________________________________________________________________________

// NOTE: How to display the value of a variable

echo $total_users;

//______________________________________________________________________________

// NOTE: How to view the data type of a variable in PHP

var_dump($account_balance);
// This will display
// int(-50)

// How to convert an int to a float

$monthly_expense = 25;
var_dump((float) $monthly_expense);
// 25

//______________________________________________________________________________

// NOTE: float (Floating Point) - Positive and negative numbers with decimals

$discount_amount = 535.60;

// How to convert a float to an int
var_dump((int) $discount_amount);
// This will print out
// int(535)

// When you convert a float to an int, PHP simply removes the decimal part.
// It does not round up or round down the value.


//______________________________________________________________________________

// NOTE: bool (Boolean) - Variables that can only be `true` or `false`

$is_logged_in = true;
$has_premium_subscription = false;

//______________________________________________________________________________

// NOTE: string - Used for text. A collection of characters

$first_name = "Dezly";
echo $first_name;
// var_dump($first_name);
// This will display:
// string(5) "Dezly"
// 5 is the number of characters in the string.

$last_name = "Macauley";

$full_name = "$first_name $last_name";
echo $full_name;


//______________________________________________________________________________

// NOTE: null

    $special_attack = null;

    var_dump($special_attack);
    // This will display
    // NULL

//______________________________________________________________________________

// NOTE: array - A collection a variables

$female_ninjas = ["Tsunade", "Mei", "Ten Ten"];
var_dump($female_ninjas);
// This will display
// array(3) { [0]=> string(7) "Tsunade" 
// [1]=> string(3) "Mei" [2]=> string(7) "Ten Ten" }

// How to change the value of an item in an array
$female_ninjas[0] = "Hinata";
var_dump($female_ninjas);

// How to add an item to the end of an array
$female_ninjas[] = "Kurosutchi";
var_dump($female_ninjas);

//______________________________________________________________________________

// NOTE: Multi-dimensional array

// A list of users and the locations that these users have travelled to
$user_travels = [
    "Darui" => ["Hidden Leaf", "Hidden Cloud"],
    "Himiko" => ["Hidden Sound", "Hidden Cloud"],
    "Jack" => ["Hidden Rain", "Hidden Stone"]
];

// How to get a value from the array:

var_dump($user_travels["Darui"][0]);

//______________________________________________________________________________

// NOTE: Constants

const MAX_DISCOUNT = 75;

// How to display a constant
var_dump("The maximum discount is " . MAX_DISCOUNT);

//______________________________________________________________________________

?>
