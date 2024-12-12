# SECTION: Tuples

# NOTE: What is the difference between a tuple and a list
# A tuple is immutable. It holds a fixed number of elements

# NOTE: 
# 2. When you declare the variable type of a tuple, you have to be specific
# about what each variable type stored in the tuple will be. The order matters

# E.g. this means the first item in the tuple will be a str, and the next will
# be an int
example_tuple: tuple[str, int] = ("Dezly", 9000)

first_name: str = example_tuple[0]
print(first_name)
# Dezly

power_level: int = example_tuple[1]
print(power_level)
# 9000
