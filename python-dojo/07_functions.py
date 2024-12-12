# NOTE: A function that has no parameters, and returns the data type None

def say_hello() -> None:
    print("Hello")

say_hello()

#______________________________________________________________________________

# NOTE: A function that requires no parameters, and returns a single value 


# NOTE: Parameters vs Arguements

# NOTE: Parameters
# When you are creating a function, the variable types that you put inside the
# () are called parameters.
# A parameter is what the function needs to complete its task.

def add_two(_num_1: int, _num_2: int) -> int:
    return (_num_1 + _num_2)

# NOTE: Arguements
# Are the value that you put in the function when you want to use it.
my_answer: int = add_two(10, 5)

print(my_answer)

#______________________________________________________________________________

# NOTE: A function that requires two parameters and returns multiple values

def create_employee_card(\
_first_name: str, _last_name: str, _company_code: int) -> tuple[str, int]:
    full_name: str = _first_name + " " + _last_name
    card_code: int = (_company_code * 2) + 2
    return full_name, card_code

employee_name: str = ""
employee_code: int = 0

employee_name, employee_code = create_employee_card("Dezly", "Macauley", 4)
print(employee_name)
print(employee_code)

#______________________________________________________________________________

# SECTION: Pure Functions
# A pure function is a function that does not modify any variables or 
# data structures outside of its scope

#______________________________________________________________________________

# NOTE: This is NOT a pure function because it modifies the my_list data
# structure

my_list: list[int] = [1, 2, 3]

def add_to_list(_number: int) -> None:
    my_list.append(_number)

add_to_list(4)

print(f"The list is now: {my_list}")

#______________________________________________________________________________

# SECTION: This is a pure function 

team_members: list[str] = ["Dezly", "Gojo", "Gaara"]

def add_to_coppied_list(_original_list: list[str], _name: str) -> list[str]:
    coppied_list: list[str] = _original_list.copy()
    coppied_list.append(_name)
    return coppied_list

new_list = add_to_coppied_list(team_members, "Sindy")


# NOTE: This is a pure function because it did not modify the original list

print(f"The new team is: {new_list}")
# The new team is: ['Dezly', 'Gojo', 'Gaara', 'Sindy']

print(f"The original team was: {team_members}")
# The original team was: ['Dezly', 'Gojo', 'Gaara']

#______________________________________________________________________________
