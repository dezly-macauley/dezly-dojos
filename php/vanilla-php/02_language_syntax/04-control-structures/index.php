<?php

    //__________________________________________________________________________

    // NOTE: If Statement

    $flame_arrows = 95;

    if ($flame_arrows == 80) {
        echo "You have exactly 80 arrows";
    } elseif ($flame_arrows > 80) {
        echo "You have more than enough arrows";
    } else {
        echo "You are running out of arrows";
    }
    
    //__________________________________________________________________________
   
    // NOTE: Switch Statement

    $order_status = 1;  

    switch($order_status) {
        case 0:
            echo "An order has been made";
            break;
        case 1:
            echo "The order has been processed";
            break;
        case 2:
            echo "The order is being delivered";
            break;
        case 3:
            echo "The order was completed";
            break;
        default:
            echo "Invalid order status";
    }

    //__________________________________________________________________________
    
    // NOTE: Match Expression

    // The match expression is a newer and more powerful 
    // and concise alternative to the switch statement  

    echo match ($order_status) {
        0 => "An order has been made",
        1 => "The order has been processed",
        2 => "The order is being delivered",
        3 => "The order was completed",
        default => "Invalid order status"
    };

    // NOTE: You can also use a match statement to assign a value to a variable
    $status_message = match ($order_status) {
        0 => "An order has been made",
        1 => "The order has been processed",
        2 => "The order is being delivered",
        3 => "The order was completed",
        default => "Invalid order status"
    };

    echo $status_message;
    
    //__________________________________________________________________________


?>