# pragma version 0.4.0

"""
@title      Buy Me A Coffee
@notice     A contract for receiving funds

@license    MIT
@author     Dezly Macauley

@dev
    This contract should be able to perform the following tasks:

    1. Allow people to send funds to the contract
    2. Set a mininum amout that users can send to prevent spam
    3. Keep track of the wallet addresses of those who send funds
    to the contract.
    4. Allow the owner (the person who deployed the contract), to be able
    to withdraw the balance of the entire contract... BUT only after they have
    been verified to be the owner.
"""

# NOTE: `pragma version`
# This is how you tell the Vyper compiler what version of Vyper to use
# to compile your code.

# NOTE: Natspec
# This is text within triple qoutes that appears at the top of the contract.

# NOTE: `@license MIT`
# This tells the world what license your code is under.
# MIT means the code is open source
# This is how to make a comment in Vyper

#______________________________________________________________________________
# NOTE: Comments

# This is a single line comment

#______________________________________________________________________________

# SECTION:: bool 
# True or False

# Storage variables can not have an initial value
# has_favourite_number: bool

#______________________________________________________________________________

# SECTION: Unsigned Integers (Positive Numbers Only)

# my_favorite_number: int256

#______________________________________________________________________________

# SECTION: Integers (Positive and Negative Numbers)

# my_favorite_number2: uint256

#______________________________________________________________________________

# SECTION: String

name: String[100]

#______________________________________________________________________________

# SECTION: Address

# my_address: address

#______________________________________________________________________________

# SECTION: Decimal

# my_decimal: decimal

# To use this you will need to enable it in the compiler
# --enable-decimals

#______________________________________________________________________________

# SECTION: Bytes

# my_bytes: bytes32

#______________________________________________________________________________
