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
