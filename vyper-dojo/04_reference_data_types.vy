# pragma version ^0.4.0

# SECTION: Reference Data Types

# These are data types that are passed by their reference
# A pointer to where the data is stored will be passed around

# NOTE: Reference data types include:
# 1. Fixed sized list
# 2. Dynamic arrays
# 3. HashMaps
# 4. Structs

#______________________________________________________________________________

# NOTE: Fixed sized list

nums: public(uint256[10])

#______________________________________________________________________________

# NOTE: HashMap

myMap: public(HashMap[address, uint256])

owner: public(address)

#______________________________________________________________________________

# SECTION: Structs

# How to define a struct
struct Person:
    name: String[10]
    age: uint256

# How to create an instance of a struct
person_one: public(Person)
#______________________________________________________________________________

# SECTION: Setting values using the constructor

@deploy
def __init__():
    self.owner = msg.sender

    self.nums[0] = 123
    self.nums[1] = 456

    # This will store the number 18 in map:
    # The key is `msg.sender` the person deploying the contract. 
    # And the key is 18
    self.myMap[msg.sender] = 18

    self.person_one.age = 27
    self.person_one.name = "Hinata"
#______________________________________________________________________________
