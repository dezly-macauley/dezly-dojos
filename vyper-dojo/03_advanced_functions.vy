# pragma version ^0.4.0

@external
@pure
def multiply(x: uint256, y: uint256) -> uint256:
    return x * y

@external
@pure
def divide(x: uint256, y: uint256) -> uint256:
    # NOTE: In Vyper when you multiply divide two integers 
    # you have to use //
    # This is integer division.
    # The answer is rounded down to the nearest integer
    return x // y

    # 1 / 2 = 0 (not 0.5)
    # 3 / 2 = 1 (not 1.5)

# NOTE: How to create a function that returns multiple outputs

@external
@pure
def return_many() -> (uint256, bool):
    return (123, True)
