# pragma version 0.4.0
# @title      Buy Me a Coffee
# @author     Dezly Macauley
# @license    MIT

#______________________________________________________________________________
# ABOUT: The Purpose of this Vyper smart contract is to do the following:

# 1. Receive funds from users
# 2. Set a minimum amount that users can send
# 3. Allow the owner to withdraw funds

#______________________________________________________________________________
# SECTION: interfaces

interface AggregatorV3Interface:
    def decimals() -> uint8: view
    def description() -> String[1000]: view
    def version() -> uint256: view
    def latestAnswer() -> int256: view

# NOTE: Interfaces and Chainlink price feeds

# An interface lets you use functions from another deployed contract
# This contract let you view the lastest price of Ethereum in USD using
# the Sepolia Testnet.

# `latestAnswer` is the function that lets you do that

# Here is the contract address:
# https://sepolia.etherscan.io/address/0x694AA1769357215DE4FAC081bf1f309aDC325306#readContract

#______________________________________________________________________________

# SECTION: Storage Variables

minimum_usd: uint256

#______________________________________________________________________________

# SECTION: Contract Setup

@deploy
def __init__():
    self.minimum_usd = 5

#______________________________________________________________________________

# SECTION: Function 1 - Receiving Funds

@external
@payable
def fund():
    assert msg.value >= self.minimum_usd, "You need to send at least $5"

    # NOTE: Converting ETH to WEI

    # https://eth-converter.com/
    # In Vyper `msg.value` is given in WEI 
    # 1 ETH = 1 X 10^18 WEI
    # assert msg.value == 1 * (10 ** 18)

    # NOTE: Vyper actually has a convinient method called `as_wei_value`
    # This allows you to convert WEI to ETH

    # assert msg.value >= as_wei_value(1, "ether"),\
    #   "You need to send at least one ETH"

    # NOTE: assert and revert
    # If the user does not meet the requirement, 
    # the transaction will be reverted.
    # This means any actions performed will be reversed and the cost will
    # be paid by the person who made the failed transaction

#______________________________________________________________________________
# SECTION: Function 2 - Withdrawing Funds

@external
def withdraw():
    pass

#______________________________________________________________________________
# SECTION: Function 3 - Converting ETH to USD

@internal
# The underscore is how you annotate internal functions
def _get_eth_to_usd_rate():
    pass

#______________________________________________________________________________
# SECTION: Function 4 - Get the price of ETH to USD

# The amount is an int256, and the last 8 numbers are decimals

# NOTE: How to use the `latestAnswer` function from the AggregatorV3Interface

@external
@view
def get_price() -> int256:
    price_feed: AggregatorV3Interface = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306)
    return staticcall price_feed.latestAnswer()

    # NOTE: How to read the `latestAnswer` value

    # If you go to the contract address and call the `decimals` functions
    # It will show 8 decimals. This means that the last 8 degits of get price
    # decimals
    # https://sepolia.etherscan.io/address/0x694AA1769357215DE4FAC081bf1f309aDC325306#readContract
    # E.g. If latest price = 395576000000
    # That means $3,955.76000000

    # NOTE: staticcall vs extcall

    # use this keyword when you are calling a function that is on
    # another contract, and specifically it is a function that does not 
    # modify the state of the other contract.
    # E.g. latestAnswer() is a view function. Check the interface
    # If you were calling a function that modifies the state of the other
    # contract then you would use the keyword `extcall`
    #return staticcall price_feed.latestAnswer()
#______________________________________________________________________________
