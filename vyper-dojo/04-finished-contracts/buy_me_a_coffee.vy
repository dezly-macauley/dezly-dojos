# pragma version 0.4.0
# @ licence: MIT
# @ author: Dezly Macauley
#______________________________________________________________________________
# ABOUT: Buy Me A Coffee

# 1. Receive funds from users
# 2. There should be a minimum amount that users can send
# 3. Withdraw funds

#______________________________________________________________________________

# SECTION: Storage Variables

minimum_usd: uint256

#______________________________________________________________________________

# SECTION: Constructor

def __init__():
    self.minimum_usd = 5

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
    assert msg.value >= as_wei_value(1, "ether"),\
        "You need to send at least one ETH"

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

