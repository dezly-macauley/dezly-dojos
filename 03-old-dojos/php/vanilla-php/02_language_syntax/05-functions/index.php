<?php

    // NOTE: Enabling strict type checking
    // By default PHP will attempt to convert values into
    // the correct type when there is a mismatch. This could lead to bugs. 

    // This tells PHP to enforce strict type checking for function
    // parameters and return types
    // 1 = true, and 0 = false
    // By default, this is set to 0 in PHP
    declare(strict_types = 1);

    //__________________________________________________________________________

    // NOTE: A function with no parameters that doesn't return anything

    function sayHello() {
        echo "Hello";
    }
    
    sayHello();
    
    //__________________________________________________________________________


    // NOTE: A function with parameters and return types

    // First define the function with the parameters
    function addTwo(int $num1, int $num2): int {
        return $num1 + $num2;
    }

    // Next call the function with the relevant arguements 
    $cart_total = addTwo(50, 10);

    echo $cart_total;

    //__________________________________________________________________________
    
    // NOTE: A function with union types

    // A union type means that a parameter can accept more 
    // than one variable type

    function multiplyTwo(int|float $num1, int|float $num2): float {
        return (float) ($num1 * $num2);
    }

    // Next call the function with the relevant arguements 
    $bonus_points = multiplyTwo(72.7, 3);

    echo $bonus_points;
    
    //__________________________________________________________________________

?>