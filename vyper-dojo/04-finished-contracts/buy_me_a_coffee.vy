# pragma version 0.4.0
# @title Buy Me A Coffee
# @author Dezly Macauley
# @license MIT 
#______________________________________________________________________________

"""
# ABOUT: Buy Me A Coffee

1. Receive funds from users
2. There should be a minimum amount that users can send
3. Withdraw funds

"""
#______________________________________________________________________________

# SECTION: interfaces

# NOTE: Chainlink Sepolia ETH to USD price feed Contract

# This lets you use functions from another deployed contract
# This contract let you view the current price of Ethereum in USD using
# the Sepolia network

# https://sepolia.etherscan.io/address/0x694AA1769357215DE4FAC081bf1f309aDC325306#readContract
interface AggregatorV3Interface:
    def decimals() -> uint8: view
    def description() -> String[1000]: view
    def version() -> uint256: view
    def latestAnswer() -> int256: view
#______________________________________________________________________________

# SECTION: Storage Variables

minimum_usd: uint256
price_feed: AggregatorV3Interface

# NOTE: Price Feed Addresses


# Sepolia Testnet - ETH to USD:
# 0x694AA1769357215DE4FAC081bf1f309aDC325306

#______________________________________________________________________________

# SECTION: Constructor

@deploy
def __init__(price_feed_address: address):
    self.minimum_usd = 5
    self.price_feed = AggregatorV3Interface(price_feed_address)

#______________________________________________________________________________

# SECTION: Function 1 - Receiving Funds

@external
@payable
def fund():
    # https://eth-converter.com/
    # In Vyper `msg.value` is given in WEI 
    # 1 ETH = 1 X 10^18 WEI
    # assert msg.value == 1 * (10 ** 18)

    # NOTE: Vyper actually has a convinient method called `as_wei_value`

    # assert msg.value >= as_wei_value(1, "ether"),\
    #   "You need to send at least one ETH"

    assert msg.value >= self.minimum_usd, "You need to send at least $5"

    # Contract address of Chainlink - Sepolia - ETH / USD
    # 0x1a81afB8146aeFfCFc5E50e8479e826E7D55b910
    # $3,978.55000000 int256 latestAnswer
    # decimals 8


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
# SECTION: Currency Conversion

@internal
# The underscore is how you annotate internal functions
def _get_eth_to_usd_rate():
    pass

#______________________________________________________________________________
# SECTION: Get the price of ETH in USD
# The amount is an int256, and the last 8 numbers are decimals

# NOTE: How to use the `latestAnswer` function from the AggregatorV3Interface

# @external
# @view
# def get_price() -> int256:

    # NOTE: staticcall vs extcall

    # use this keyword when you are calling a function that is on
    # another contract, and specifically it is a function that does not 
    # modify the state of the other contract.
    # E.g. latestAnswer() is a view function. Check the interface
    # If you were calling a function that modifies the state of the other
    # contract then you would use the keyword `extcall`
    #return staticcall price_feed.latestAnswer()

#______________________________________________________________________________

