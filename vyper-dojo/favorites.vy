# pragma version 0.4.0
# @license MIT

#______________________________________________________________________________

# SECTION: Storage Variable

# NOTE: public() makes the visibility of the variable public
# By default, the visibility of storage variables is internal

# The default value of uint256 is 0
my_favorite_number: public(uint256)

#______________________________________________________________________________

# SECTION: Functions
# The visibility of functions is internal by default

# @external means that the function `store` can be called from outside
# the smart contract

@external
def store(new_number: uint256):
    # `self.my_favorite_number` means the favorite_number variable
    # of this contract
    self.my_favorite_number = new_number

#______________________________________________________________________________
