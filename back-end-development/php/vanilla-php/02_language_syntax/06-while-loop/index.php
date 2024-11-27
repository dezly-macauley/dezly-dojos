<?php 

    declare(strict_types = 1);

//______________________________________________________________________________

    // NOTE: A while loop
    $num = 1;

    while ($num <= 4) {
        echo $num . "<br>";
        $num ++;
    }

    // 1
    // 2
    // 3
    // 4
    
//______________________________________________________________________________

    // NOTE: do while loop 
    // What is the difference between a while loop and a do while loop 
    // You use it when you want a block of code to run at least once,
    // no matter what

    $number_of_attempts = 0;

    do {
        echo "Attempting to connect to the server";
        $number_of_attempts ++;
    } while ($number_of_attempts <= 2);

    // This will attempt to connect to the server 3 times.
    // It will try once, no matter the number of attempts
    // Then it will try two more attempts.

//______________________________________________________________________________

    // NOTE: For loop

    for ($i = 1; $i <= 4; $i++) {
        echo $i . "<br>";
    }

    // This will print out 1 to 4


//______________________________________________________________________________


    // NOTE: For each loop

    $names = [ "Dezly", "Tom", "Peter" ];

    // First you refer to the array then you create a variable for each 
    // element in the array.
    foreach($names as $name) {
        echo $name . "<br>"; 
    }

    // If you want to display the index next to each name,
    // this is what you would do.
    foreach($names as $key => $name) {
        echo "{$key} {$name} <br>";

        // This will print out
        // 0 Dezly
        // 1 Tom
        // 2 Peter
    }

//______________________________________________________________________________

?>