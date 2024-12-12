# SECTION: bool (boolean)
# True or False

is_online: bool = False

is_a_student: bool = True

#______________________________________________________________________________

# NOTE: Math Operators

"""
    +       Addition
    -       Subtraction
    *       Multiplication
    /       Division (This will return a float. So 25 / 5 = 5.0)
    //      Integer Division 24 // 6 = 4 (Six can fit into 24 only 4 times)
    **      Exponents

# Division /    (This will return a float. So 25 / 5 = 5.0)
# Integer Division // E.g. 24 // 6 = 4 (Six can fit into 24 only 4 times)

"""

# NOTE: Logical Operators
"""
    and     Checks if both conditions are true
    or      Checks if a least one of the conditions are true
    not     Proceeds to do something if some condition is not met
"""

# NOTE: Comparison Operators
"""
    ==      equal
    !=      not equal 
    >       greater than
    >=      greater than or equal to 
    <       less than
    <=      less than or equal to 
"""

#______________________________________________________________________________

# SECTION: If Statement

shopping_cart_total: int = 250

if shopping_cart_total < 100:
    print(f"Thanks for shopping with us")
elif shopping_cart_total > 100 and shopping_cart_total <= 200:
    print(f"Thanks for shopping with us. Your discount is 20%")
else:
    print(f"Thanks for shopping with us. Your discount is 50%")

#______________________________________________________________________________

# SECTION: Match Statement

http_status: int = 200 

match http_status:
    # 200 | 201 means 201 or 201
    case 200 | 201:
        print("Connection successful")
    case 400:
        print("Bad request")
    case 500 | 501:
        print("Server error")
    # _ is the equivalent of "else" in an if statement
    case _:
        print("Unknown Error")
#______________________________________________________________________________

