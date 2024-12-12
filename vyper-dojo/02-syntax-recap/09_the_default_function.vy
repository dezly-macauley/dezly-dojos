# pragma version ^0.4.0

# NOTE: Call data
# When you call a function, your functions paramaters get transformed into
# something called call data.

# NOTE: The __default__ function
# This is specific function in Vyper. This is a function that handles 
# a situation where someone makes a call to a smart contract 
# without interacting with any of its functions

# E.g. Someone tries to send money to a smart contract without calling a
# function that can receive funds. 

@external
@payable
def __default__():
    pass
