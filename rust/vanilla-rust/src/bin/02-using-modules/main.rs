// NOTE: How to import modules in your code

use vanilla_rust::simple_functions::message_functions;
use vanilla_rust::simple_functions::math_functions;

fn main() {

    message_functions::show_welcome_message();
    let total_cost: i32 = math_functions::add_two_numbers(10, 8);

    println!("The total cost is {}",);

}
