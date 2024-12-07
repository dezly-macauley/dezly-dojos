# pragma version 0.4.0
# @license MIT

# SECTION: Constructor

# NOTE: A constructor is a special function that 
# is called once when a contract is deployed.

# The main purpose of the construcor is to setup the contract.
# It will do this by setting the value of state variables,
# or calling other functions that are needed to setup the contract
# `def __init__():` You can also define some parameters that you want to pass
# on to the constructor

#______________________________________________________________________________

owner: public(address)
name: public(String[100])
expires_at: public(uint256)

@deploy
def __init__(name: String[100], duration: uint256):
    # This means that the person who deploys this contract becomes the owner
    self.owner = msg.sender
    self.name = name
    # block.timestamp is current timestamp of the blockchain, 
    # measured in seconds since January 1, 1970 (Unix time)
    # It represents "right now" on the blockchain.
    # E.g. duration = 604800 (one week in seconds)
    self.expires_at = block.timestamp + duration
    # So this means the contract will expire one week 
    # from the time it is deployed
