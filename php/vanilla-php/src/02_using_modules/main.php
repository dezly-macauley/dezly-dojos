<?php

// require_once '../../simple_functions/math_functions.php';

require_once "../../simple_functions/message_functions.php";
require_once "../../simple_functions/math_functions.php";

function main() {

    show_welcome_message();  
    $total = add_two_numbers(10, 8);  
    echo "The total cost is $total\n";
}

main();

?>
