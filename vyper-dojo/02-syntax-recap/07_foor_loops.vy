# pragma version ^0.4.0
#______________________________________________________________________________

# NOTE: Basic For Loop with no starting index
# By default it will start from index 0
# The number inside range() is exclusive

@external
@pure
def add_num_to_array() -> DynArray[uint256, 10]:
    # This is a dynamic array that can store 10 uint256
    # It has been initialized to an empty dynamic array
    list_of_numbers: DynArray[uint256, 10] = []

    # 0 to 4
    # The last number is
    for value: uint256 in range(5):
        list_of_numbers.append(value)
    
    return list_of_numbers
    # 0: uint256[]: 0,1,2,3,4 

#______________________________________________________________________________

# NOTE: For loop with a starting index

@external
@pure
def add_num_to_array_v2() -> DynArray[uint256, 10]:
    # This is a dynamic array that can store 10 uint256
    # It has been initialized to an empty array
    list_of_numbers: DynArray[uint256, 10] = []

    # 5 to 9
    for value: uint256 in range(5, 10):
        list_of_numbers.append(value)
    
    return list_of_numbers
    # 0: uint256[]: 5,6,7,8,9

#______________________________________________________________________________
# NOTE: For loop through a fixed sized array

@external
@pure
def iterate_over_fixed_sized_array() -> DynArray[uint256, 10]:
    new_list: DynArray[uint256, 10] = []

    original_list: uint256[4] = [11, 22, 33, 44]

    for value: uint256 in original_list:
        new_list.append(value)

    return new_list

#______________________________________________________________________________
# NOTE: For loop with continue and break

# I have a list of numbers
# I want to create a new list from this that skips over all of the numbers
# that are bigger than 50, 
# but I want the loop to end when it gets to the number 15, 
# and I want the number 15 to be excluded from the new array
# So the end result should be:
# 25,10, 6

@external
@pure
def epic_for_loop() -> DynArray[uint256, 10]:
    new_list: DynArray[uint256, 10] = []

    original_list: uint256[7] = [91, 25, 10, 6, 15, 5, 3]

    for value: uint256 in original_list:
        if value > 50:
            continue
        elif value == 15:
            break
        else: 
            new_list.append(value)

    return new_list
    # 0: uint256[]: 25,10,6

#______________________________________________________________________________
