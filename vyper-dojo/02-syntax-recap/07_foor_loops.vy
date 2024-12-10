# pragma version ^0.4.0
#______________________________________________________________________________

@external
@pure
def for_loop() -> DynArray[uint256, 10]:
    # This is a dynamic array that can store 10 uint256
    # It has been initialized to an empty array
    arr: DynArray[uint256, 10] = []

    # 0 to 4
    for i: uint256 in range(5):
        arr.append(i)
    
    return arr

#______________________________________________________________________________

@external
@pure
def for_loop_start_end() -> DynArray[uint256, 10]:
    # This is a dynamic array that can store 10 uint256
    # It has been initialized to an empty array
    arr: DynArray[uint256, 10] = []

    # 5 to 9
    for i: uint256 in range(5, 10):
        arr.append(i)
    
    return arr


#______________________________________________________________________________

# NOTE: How to go through a range

@external
@pure
def for_loop_list() -> DynArray[uint256, 10]:
    arr: DynArray[uint256, 10] = []

    # This is a fixed-sized list
    nums: uint256[4] = [5, 7, 8, 2]


#______________________________________________________________________________
