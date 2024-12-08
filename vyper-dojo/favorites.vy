# pragma version 0.4.0
# @license MIT

#______________________________________________________________________________

# SECTION: Storage Variable

# NOTE: public() makes the visibility of the variable public
# By default, the visibility of storage variables is 
# internal()

# The default value of uint256 is 0
my_favorite_number: public(uint256)

#______________________________________________________________________________

# SECTION: Reference Types

struct Person:
    name: String[100]
    favorite_number: uint256

# The name variable can store a max of 100 characters
my_name: public(String[100])

# This is a fixed-size array. It can store a max of 5 unsigned integers
# The default value is [0, 0, 0, 0, 0]
list_of_numbers: public(uint256[5])

# NOTE: This will be a fixed-size array of Person structs
# A max of 5 structs
list_of_people: public(Person[5])

index: public(uint256)

name_to_favorite_number: public(HashMap[String[100], uint256])

#______________________________________________________________________________

# SECTION: Constructor

# NOTE: A constructor is a special function that 
# is called once when a contract is deployed.

# The main purpose of the construcor is to setup the contract.
# It will do this by setting the value of state variables,
# or calling other functions that are needed to setup the contract
# `def __init__():` You can also define some parameters that you want to pass
# on to the constructor

@deploy
def __init__():
    self.my_favorite_number = 7
    self.index = 0
    self.my_name = "Dezly"

#______________________________________________________________________________

# SECTION: Functions
# The visibility of functions is @internal
# @ internal means that the function can only be called by other functions
# inside the smart contract.

# @external means that the function `store` can be called from outside
# the smart contract

#______________________________________________________________________________

# NOTE: Functions that modify the state of the contract

@external
def store(new_number: uint256):
    # `self.my_favorite_number` means the favorite_number variable
    # of this contract
    self.my_favorite_number = new_number

#______________________________________________________________________________

# NOTE: Functions that read from the state of the contract
# Remember to add @external and @view decorator

@external
@view
def retrieve() -> uint256:
    return self.my_favorite_number

#______________________________________________________________________________

@external
def add_number(favorite_number: uint256):
    self.list_of_numbers[self.index] = favorite_number
    # Increase the index by one
    self.index += 1

#______________________________________________________________________________

@external
def add_person(name: String[100], favorite_number: uint256):
    # Add favorite number to the numbers list 
    self.list_of_numbers[self.index] = favorite_number

    # Create a new person 
    new_person: Person = Person(
        name=name,
        favorite_number=favorite_number
    )

    # Add the new person to the list_of_people array
    self.list_of_people[self.index] = new_person

    # Add the person to the mapping
    # name is the key, and favorite_number is the value attached to that key
    self.name_to_favorite_number[name] = favorite_number

    # Increase the index by one
    self.index += 1

#______________________________________________________________________________
