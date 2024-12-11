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
# SECTION: Constants and immutables

# The person who deploys the contract is the owner
# Only the owner will be allowed to withdraw funds from the smart contract
OWNER: public(immutable(address))

# The address of the Chainlink smart contract that will be used to get the
# latest price
PRICE_FEED: public(immutable(AggregatorV3Interface))

# This output should be represented with same amout of decimals as WEI
# That's 18 decimals
# 1 ETH = 1 x 10^18
# 5 000 000 000 000 000 000
MINIMUM_USD: public(constant(uint256)) = as_wei_value(5, "ether")

PRECISION: constant(uint256) = 1 * (10 ** 8)

#______________________________________________________________________________

# SECTION: Storage Variables

has_withdrawn_funds: public(bool)

# NOTE: Price Feeds

# Sepolia Testnet - ETH to USD
# 0x694AA1769357215DE4FAC081bf1f309aDC325306

# TODO: Add a limit to prevent new items from being added to the array when
# it hits 100 users
funders: public(DynArray[address, 1000])

# A hashmap to keep track of how much each funder sent
# Key: The wallet address of the funder
# Value: The amount they sent
funder_to_amount_funded: public(HashMap[address, uint256])

#______________________________________________________________________________

# SECTION: Contract Setup

@deploy
def __init__(price_feed_address: address):
    # This is just a shortcut for adding the 18 decimal places
    PRICE_FEED = AggregatorV3Interface(price_feed_address)
    # Whoever sends the contract is going to be the owner
    OWNER = msg.sender
    self.has_withdrawn_funds = False

#______________________________________________________________________________

# SECTION: Function 1 - Receiving Funds

@external
@payable
def fund():
    usd_value_of_eth: uint256 = self._get_eth_to_usd_rate(msg.value)
    assert usd_value_of_eth >= MINIMUM_USD, "You need to send at least $5"

    # Add the wallet address of the person who called the function `fund`,
    # to the the funders array.
    self.funders.append(msg.sender)
    
    self.funder_to_amount_funded[msg.sender] += msg.value

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
    assert msg.sender == OWNER, "Error: You do not have permission to withdraw"
    # This is the syntax of Vypers built in send method 
    # send(to: address, value: uint256, gas: uint256 =0)
    # self.balance means the balance of the smart contract
   
    send(OWNER, self.balance)
    self.has_withdrawn_funds = True

    # Use the wallet addresses stored in the funders array to reset 
    # the hashmap
    for funder_address: address in self.funders:
        self.funder_to_amount_funded[funder_address] = 0

    # Reset the funders array which contains all of the addresses
    # of the various funders
    self.funders = []

#______________________________________________________________________________
# SECTION: Function 3 - Converting ETH to USD

@internal
@view
# The underscore is how you annotate internal functions
def _get_eth_to_usd_rate(eth_amount: uint256) -> uint256:

    # SUB_SECTION: Step 1 - Get the raw price format 
    # of 1 ETH to USD (8 decimals) from the price feed
    price: int256 = staticcall PRICE_FEED.latestAnswer()
    # If you go to the contract address and call the `decimals` functions
    # It will show 8 decimals. This means that the last 8 degits of get price
    # decimals
    # https://sepolia.etherscan.io/address/0x694AA1769357215DE4FAC081bf1f309aDC325306#readContract
    # E.g. If latest price = 395576000000
    # That means $3,955.76000000

    # SUB_SECTION: Step 2 - Convert the raw price (8 decimals) to
    # 1 ETH in USD (18 decimal places) 
    eth_price: uint256 = convert(price, uint256) * (10 ** 10)
    # This because 1 ETH = 1 x 10^18 WEI 
    # So you need to add 10 extra decimal places
    # And finally you have to convert the types
    # `convert(price, uint256)` is how you convert a variable 
    # to uint256 in Vyper

    # SUB_SECTION: Step 3 - Use the eth price to convert the ETH amount
    # that was entered into the function
    eth_amount_in_usd: uint256 = (eth_amount * eth_price) // PRECISION
    return eth_amount_in_usd
    
    # NOTE: staticcall vs extcall

    # use this keyword when you are calling a function that is on
    # another contract, and specifically it is a function that does not 
    # modify the state of the other contract.
    # E.g. latestAnswer() is a view function. Check the interface
    # If you were calling a function that modifies the state of the other
    # contract then you would use the keyword `extcall`
    #return staticcall PRICE_FEED.latestAnswer()

#______________________________________________________________________________
# SECTION: Function 4 - Get the price of ETH to USD

# The amount is an int256, and the last 8 numbers are decimals

# NOTE: How to use the `latestAnswer` function from the AggregatorV3Interface

# @external
# @view
# def get_price() -> int256:
#    PRICE_FEED: AggregatorV3Interface = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306)
#    return staticcall PRICE_FEED.latestAnswer()

#______________________________________________________________________________
# SECTION: Function 5 - A function that calls another function
# This will allow the _get_eth_to_usd_rate to be called

@external
@view
def get_eth_to_usd_rate(eth_amount_in_usd: uint256) -> uint256:
    return self._get_eth_to_usd_rate(eth_amount_in_usd)

#______________________________________________________________________________
