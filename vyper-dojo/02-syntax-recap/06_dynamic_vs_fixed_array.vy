# pragma version 0.4.0
#______________________________________________________________________________
# NOTE: This is a Dynamic Array

# The type is uint256 and the max size is 100
# The difference is that unlike a fixed sized array the length will
# start off empty
dynamic_array: public(DynArray[uint256, 100])

#______________________________________________________________________________
# NOTE: This is a fixed sized array

# At all times the length of this array will be 100
fixed_sized_array: public(uint256[100])

#______________________________________________________________________________

@external
@view
def dyn_array_size() -> uint256:
    return len(self.dynamic_array)

def add_20_to_array():
    # This will add the number 20 to the end of the array
    self.dynamic_array.append(20)

    # NOTE: How to reset a dynamic array
    self.funders = []

    # NOTE: For fixed sized arrays, there is no .append method
    # You have to change the value by refering to the specific index
    
    self.fixed_sized_array[0] = 20

#______________________________________________________________________________
