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

# This is a fixed-size array. It can store a max of 5 unsigned integers
# The default value is [0, 0, 0, 0, 0]
list_of_numbers: public(uint256[5])

index: public(uint256)


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
