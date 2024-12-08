# pragma version ^0.4.0

@external
@pure
def cool_message(x: uint256) -> String[50]:
    if x < 5:
        return "x is less than 5"
    elif x == 10:
        return "x is equal to 10"
    else:
        return "x is greater than 5"
