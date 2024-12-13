# NOTE: Sets
# This is a data structure that contains an non-indexed collection 
# of unique elements.

# 1. You can't index a set like a list.
# The order in your code won't match the order that it displays the values in.
unique_ids = {262, 782, 192}
print(unique_ids)
# {192, 262, 782}

# 2. You can add value to a set, however it will only store values that are
# unique.
unique_ids.add(90)
unique_ids.add(60)
unique_ids.add(262)
print(unique_ids)
# {192, 262, 782, 90, 60}
