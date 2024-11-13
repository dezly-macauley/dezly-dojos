# Importing the functions from the simple_functions module
from simple_functions.math_functions import add_two_numbers
from simple_functions.message_functions import show_welcome_message

def main():
    # Call the functions from the modules
    show_welcome_message()  # Prints the welcome message
    total = add_two_numbers(10, 8)  # Adds two numbers
    print(f"The total cost is {total}")  # Prints the sum of the two numbers

if __name__ == "__main__":
    main()
