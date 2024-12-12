# NOTE: First you need to understand what the * symbol does in Python.

my_tuple: tuple[int, int, int] = (82, 23, 19)

print(my_tuple)
# (82, 23, 19)

print(*my_tuple)
# Think of * as unpacking of a tuple but for function calls
# So you are basically telling Python,

# "Don't treat this as a single data structure", but process each item
# print out each integer in the tuple

# So *my_tuple is the same as doing this:
# print(82, 23, 19)
# 82 23 19

#______________________________________________________________________________

# SECTION: *args is used when you want to create a function that can accept
# a flexible number of arguements

# *args is just a common naming convention, just like how I like using 
# for "value" in my for loops
# You could call args whatever you want.

# When you use *args, Python collects all positional arguments into a tuple.

def order_pizza(_size: str, *_toppings: str):
    print(f"You ordered a {_size} pizza")
    # Output: You ordered a large pizza

    print(type(_toppings))  
    # Output: <class 'tuple'>

    print(_toppings)
    # Output: ('mushrooms', 'olives', 'pepperoni')

    # _toppings is a tuple that contains strings 
    # *_toppings, by Python's design will store the arguements in a tuple
    # So when you are defining the type, you only need to specify the variable
    # type of each value in the tuple, which in this case is a string

order_pizza("large", "mushrooms", "olives", "pepperoni")

#______________________________________________________________________________

# SECTION: Another *args example

def sum_of(*args: int) -> int:
    sum: int = 0

    for item in args:
        sum += item 

    return sum

answer: int =  sum_of(10, 20, 5)
print(answer)

#______________________________________________________________________________

# SECTION: kwargs (keyword arguments)
# Normally I would use this when trying to pass a dictionary into a function

shopping_cart = {
    "banana": 2.50,
    "choc_milk": 10.50,
    "chips": 5.0
}

print(shopping_cart)
# {'banana': 2.5, 'choc_milk': 10.5, 'chips': 5.0}

# NOTE: **_kwargs: float
# This means that the the calculate_cost function accepts an unpacked
# dictionary

# What is an unpacked dictionary? Basically it means that the shopping_cart
# data structure will be entered into the function in this format:
# banana=2.50, choc_milk=10.50, chips=5.0
# In simple terms, its allows Python to process each key-value pair as a
# seperate item

def calculate_cost(**_kwargs: float) -> None:
    total_cost: float = 0.0

    print("Shopping cart total")
    print("============================================")

    for key, value in _kwargs.items():
        print(f"Processing {key} with a cost of {value} yen")
        total_cost += value 

    print("============================================")
    print(f"The total cost of your cart is {total_cost}")

calculate_cost(**shopping_cart)
# Shopping cart total
# ============================================
# Processing banana with a cost of 2.5 yen
# Processing choc_milk with a cost of 10.5 yen
# Processing chips with a cost of 5.0 yen
# ============================================
# The total cost of your cart is 18.0

#______________________________________________________________________________
