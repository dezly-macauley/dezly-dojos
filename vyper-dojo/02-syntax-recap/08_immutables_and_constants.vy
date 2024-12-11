# pragma version ^0.4.0
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
#______________________________________________________________________________
# NOTE: Constants
# The value of a constant can't be changed during the deployment or
# during the execution of a smart contract

MY_CONSTANT: public(constant(uint256)) = 42
GREETING: public(constant(String[32])) = "Hello, Vyper!"

#______________________________________________________________________________
# NOTE: Immutable
# This is like a constant but its value is set when the contract is deployed

OWNER: public(immutable(address))
VAL: public(immutable(uint256))

@deploy
def __init__(val: uint256):
    # NOTE: For immutables, and constantyou don't use `self.` when referening
    # to them. This is because constants and immutables 
    # are not storage variables
    # Just use the variable name
    OWNER = msg.sender
    VAL = val 
#______________________________________________________________________________
