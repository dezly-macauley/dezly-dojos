# SECTION: A set is a non-ordered, non-index, collection of unique values
# So you would use a set when you want to extract the unique values from some
# data set

# NOTE: 1. You can't index a set like a list.
# The order in your code won't match the order that it displays the values in.


# NOTE: 2. If you add value to a set and that value already exists in the 
# set, you won't get an error. The value simply won't be added

example_set: set[str | int] = {"Dezly", 25, "Gojo", 25, "Dezly"} 

# While a set can be created with duplicate values, when you use it,
# it will automatically remove the duplicates
print(example_set)
# {'Dezly', 18, 'Gojo'}

#______________________________________________________________________________

player_ids: set[int] = {2992, 8, 9, 8}

print(player_ids)
# {2992, 8, 9}

# add items to a set
player_ids.add(79)
player_ids.add(239)

# remove items from a set
player_ids.remove(8)
print(player_ids)
# {9, 239, 2992, 79}

#______________________________________________________________________________
