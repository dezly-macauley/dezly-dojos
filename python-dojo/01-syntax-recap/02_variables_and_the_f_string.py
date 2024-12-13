# NOTE: Integers
bank_balance: int = -200
pot_plants: int = 50

#______________________________________________________________________________
# NOTE: Float
cost_price: float = 45.2
account_balance: float = -23.3

#______________________________________________________________________________
# NOTE: Boolean
is_online = True
print(is_online)

has_withdrawn = False
print(has_withdrawn)
#______________________________________________________________________________
# NOTE: Strings
my_message: str = "I use NixOS by the way"
print(my_message)

# How to create multi-line strings
email_logs = """Message 1: My email is ken@gmail.com.
Message 2: My email is tsunade@gmail.com.
Message 3: My email is meimei@gmail.com"""

print(email_logs)
# Message 1: My email is ken@gmail.com.
# Message 2: My email is tsunade@gmail.com.
# Message 3: My email is meimei@gmail.com

#_____________________________________________________________________________

#______________________________________________________________________________
# NOTE: None
super_power = None

if super_power is None:
    print("Select a superpower before starting your adventure")

# The value of super_power is None, until you use the = to give it a value
# In Python, the None keyword is an object (which we'll cover later),
# and it is a data type of the class NoneType.

# You would use it when you want to capture a value, but you dont know what
# it will be yet and you don't want the user to be able to proceed without 
# this value being filled.

# E.g. In the example above, I am creating a superhero game. 
# I don't want the user to be able to move forward until they select a 
# super power for their character.

#______________________________________________________________________________
# NOTE: F-Strings in Python
num_bananas: int = 10
print(f"You have {num_bananas} bananas")

#______________________________________________________________________________
# NOTE: How to print the type of a variable in Python

print(type(super_power))
# <class 'NoneType'>

# NOTE: You can declare multiple variables on the same line
sword_name, sword_damage, sword_length = "Excalibur", 10, 200
#______________________________________________________________________________
# NOTE: How to print out where a variable is saved in memory
print(f"ninja_stars is located at the memory address {hex(id(ninja_stars))}")
# ninja_stars is located at the memory address 0x7fa0fd4c5fc8

# The memory address is only fixed at runtime (while your program is running).
# If you close and reopen your program at a later date,
# the memory address will be different. 
# This is because memory allocation is dynamic.
# Most programming language will display a memory address in hexidecima
# format.
# If you just did this: id(ninja_stars) Python would give you the memory
# address in integer format. So you have to convert that integer to hex by
# doing this: hex(id(ninja_stars))
#______________________________________________________________________________

# NOTE:  Multi-line variable declaration

# How to format your code so that it sticks to the 80 characters per
# line. This will work will any line of code in Python. It is useful when
# you have a long line of code that you want to split into shorter lines.

my_hot_number: int \
= 20

print(f"my_hot_number is {my_hot_number}")

welcome_message: str = "Welcome to the Ninja Storm tournament. The \
strongest ninjas from all over the world \
will be competing for the grand prize."

print(welcome_message)

#______________________________________________________________________________
