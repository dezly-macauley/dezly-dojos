def divide_by(_num1: float, _num2: float) -> float:
    return _num1 / _num2

first_num: float = float(input("Enter the first number: "))
second_num: float = float(input("Enter the second number: "))

#______________________________________________________________________________

# NOTE: Method 1

# try:
#     answer: float = divide_by(first_num, second_num)
# except:
#     print("Can't divide by zero")
#______________________________________________________________________________

# NOTE: Method 2

# try:
#     answer: float = divide_by(first_num, second_num)
# except Exception as error_msg:
#     print("There was an error:", error_msg)
#     print(error_msg.__class__)
    
# There was an error: float division by zero
# <class 'ZeroDivisionError'>

#______________________________________________________________________________

# NOTE: Method 3
# If you know the error class

try:
    answer: float = divide_by(first_num, second_num)
except ZeroDivisionError as error_msg:
    print(error_msg)


# NOTE: Other Error Classes Include:
# IndexError:   Trying to get an item from a list but the item does not exist
# FileNotFoundError: Trying to access a file that does not exist 

#______________________________________________________________________________

# print(f"{first_num} divided by {second_num} is equal to {answer}")

print("Hey it's Goku")
